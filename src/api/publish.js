// api/publish.js

// This is a serverless function that will be hosted by Vercel.
// It securely fetches data from Google Sheets and commits it to GitHub.

import { Octokit } from '@octokit/rest';
import { Buffer } from 'buffer';

// Helper function to fetch data from Google Sheets
const fetchAllContent = async () => {
    console.log("Starting to fetch content from Google Sheets...");

    // IMPORTANT: Keep your API Key secure on the server!
    const SHEET_ID = process.env.GOOGLE_SHEET_ID;
    const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;

    if (!SHEET_ID || !API_KEY) {
        console.error("Missing Google Sheets API credentials in environment variables.");
        throw new Error("Server configuration error: Missing Google Sheets API credentials.");
    }
    console.log("Google Sheets credentials found.");

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
        const fetchPromises = ranges.map(range =>
            fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`Failed to fetch range ${range}: ${res.status} ${res.statusText}`);
                    }
                    return res.json();
                })
        );

        const responses = await Promise.all(fetchPromises);
        console.log("Successfully fetched all ranges from Google Sheets.");

        const [members, achievements, features, generalContent] = responses.map(
            response => processSheetData(response.values)
        );

        return { members, achievements, features, generalContent };
    } catch (error) {
        console.error('Error fetching sheet data:', error.message);
        throw new Error(`Failed to fetch from Google Sheets. Please check your SHEET_ID and API_KEY. Original error: ${error.message}`);
    }
};

// Main handler for the serverless function
export default async function handler(req, res) {
    console.log(`Received ${req.method} request to /api/publish`);
    // 1. Check for POST request
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { password } = JSON.parse(req.body);

        // 2. Authenticate the request
        if (!process.env.ADMIN_PASSWORD) {
            console.error("ADMIN_PASSWORD is not set on the server.");
            return res.status(500).json({ message: "Server configuration error: Admin password not set." });
        }
        if (password !== process.env.ADMIN_PASSWORD) {
            console.warn("Unauthorized access attempt failed.");
            return res.status(401).json({ message: 'Unauthorized' });
        }
        console.log("Authentication successful.");

        // 3. Fetch latest content from Google Sheets
        const content = await fetchAllContent();
        const staticContent = `
// This file is auto-generated. Do not edit directly.
// Last updated: ${new Date().toISOString()}

export const siteContent = ${JSON.stringify(content, null, 2)};
`;

        // 4. Commit the updated content to GitHub
        console.log("Preparing to commit updated content to GitHub...");
        const { GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO } = process.env;
        if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
            console.error("Missing GitHub credentials in environment variables.");
            throw new Error("Server configuration error: Missing GitHub credentials.");
        }
        console.log(`Committing to ${GITHUB_OWNER}/${GITHUB_REPO}`);

        const octokit = new Octokit({ auth: GITHUB_TOKEN });
        const path = 'src/data/staticContent.js';

        let currentSha;
        try {
            const { data: fileData } = await octokit.repos.getContent({ owner: GITHUB_OWNER, repo: GITHUB_REPO, path });
            currentSha = fileData.sha;
            console.log(`Found existing file with SHA: ${currentSha}`);
        } catch (e) {
            if (e.status === 404) {
                console.log("staticContent.js not found. A new file will be created.");
            } else {
                throw e; // Re-throw other errors
            }
        }

        await octokit.repos.createOrUpdateFileContents({
            owner: GITHUB_OWNER,
            repo: GITHUB_REPO,
            path,
            message: `feat: update site content via admin panel [${new Date().toISOString()}]`,
            content: Buffer.from(staticContent).toString('base64'),
            sha: currentSha,
        });

        console.log("Commit successful!");
        return res.status(200).json({ message: 'Content published successfully! Deployment triggered.' });

    } catch (error) {
        console.error('CRITICAL ERROR in publish function:', error);
        // Ensure a JSON response is sent even on critical failure
        return res.status(500).json({ message: 'An error occurred during publishing.', error: error.message });
    }
}

