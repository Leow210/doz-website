// api/publish.js

// This is a serverless function that will be hosted by Vercel.
// It securely fetches data from Google Sheets and commits it to GitHub.

import { Octokit } from '@octokit/rest';
import { Buffer } from 'buffer';

// Helper function to fetch data from Google Sheets
const fetchAllContent = async () => {
    // IMPORTANT: Keep your API Key secure on the server!
    const SHEET_ID = process.env.GOOGLE_SHEET_ID;
    const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;

    if (!SHEET_ID || !API_KEY) {
        throw new Error("Missing Google Sheets API credentials in environment variables.");
    }

    const ranges = [
        'Members!A1:Z1000',
        'Achievements!A1:Z1000',
        'Features!A1:Z1000',
        'GeneralContent!A1:Z1000',
    ];

    const processSheetData = (rawData) => {
        if (!rawData || !Array.isArray(rawData)) return [];
        const [headers, ...rows] = rawData;
        return rows.map(row => {
            const item = {};
            headers.forEach((header, index) => {
                item[header] = row[index] || "";
            });
            return item;
        });
    };

    try {
        const responses = await Promise.all(
            ranges.map(range =>
                fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`)
                    .then(res => {
                        if (!res.ok) {
                            throw new Error(`Failed to fetch range ${range}: ${res.statusText}`);
                        }
                        return res.json();
                    })
            )
        );

        const [members, achievements, features, generalContent] = responses.map(
            response => processSheetData(response.values)
        );

        return { members, achievements, features, generalContent };
    } catch (error) {
        console.error('Error fetching sheet data:', error);
        throw error;
    }
};

// Main handler for the serverless function
export default async function handler(req, res) {
    // 1. Check for POST request
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { password } = JSON.parse(req.body);

        // 2. Authenticate the request
        if (password !== process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // 3. Fetch latest content from Google Sheets
        console.log("Fetching content from Google Sheets...");
        const content = await fetchAllContent();
        const staticContent = `
// This file is auto-generated. Do not edit directly.
// Last updated: ${new Date().toISOString()}

export const siteContent = ${JSON.stringify(content, null, 2)};
`;

        // 4. Commit the updated content to GitHub
        console.log("Committing updated content to GitHub...");
        const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
        const owner = process.env.GITHUB_OWNER;
        const repo = process.env.GITHUB_REPO;
        const path = 'src/data/staticContent.js';

        // Get the current file to get its SHA
        let currentSha;
        try {
            const { data: fileData } = await octokit.repos.getContent({ owner, repo, path });
            currentSha = fileData.sha;
        } catch (e) {
            // If file doesn't exist, we can ignore this error and it will be created.
            if (e.status !== 404) throw e;
        }


        await octokit.repos.createOrUpdateFileContents({
            owner,
            repo,
            path,
            message: `feat: update site content [${new Date().toISOString()}]`,
            content: Buffer.from(staticContent).toString('base64'),
            sha: currentSha, // Include SHA to update the existing file
        });

        console.log("Commit successful!");
        return res.status(200).json({ message: 'Content published successfully! Deployment triggered.' });

    } catch (error) {
        console.error('Error in publish function:', error);
        return res.status(500).json({ message: 'An error occurred during publishing.', error: error.message });
    }
}
