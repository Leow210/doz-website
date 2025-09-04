// Vercel Serverless Function to update site content from Google Sheets

import { Octokit } from "@octokit/rest";

// Helper function to process raw sheet data into structured content
const processSheetData = (rawData) => {
    if (!rawData || rawData.length < 2) {
        return [];
    }
    const [headers, ...rows] = rawData;
    return rows.map(row => {
        const item = {};
        headers.forEach((header, index) => {
            // Ensure the header is a valid key (e.g., replace spaces)
            const key = header.trim();
            item[key] = row[index] || ""; // Default to empty string if cell is undefined
        });
        return item;
    });
};


// Main function to fetch all content from Google Sheets
const fetchAllContent = async () => {
    const SHEET_ID = process.env.GOOGLE_SHEET_ID;
    const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;

    // Define only the tabs that exist and have content
    const ranges = [
        { name: 'members', range: 'Members!A1:Z1000' },
        { name: 'achievements', range: 'Achievements!A1:Z1000' },
    ];

    const siteContent = {};

    console.log("Starting to fetch content from Google Sheets...");

    for (const { name, range } of ranges) {
        try {
            const response = await fetch(
                `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`
            );

            if (!response.ok) {
                // Log detailed error from Google Sheets API
                const errorData = await response.json();
                console.warn(`Warning: Failed to fetch range ${range}. Status: ${response.status}. Details: ${JSON.stringify(errorData.error)}`);
                siteContent[name] = []; // Assign empty array if fetch fails
                continue; // Continue to the next tab
            }

            const data = await response.json();
            siteContent[name] = processSheetData(data.values);
            console.log(`Successfully fetched and processed the "${name}" tab.`);

        } catch (error) {
            console.warn(`Warning: An unexpected error occurred while fetching the "${name}" tab.`, error);
            siteContent[name] = []; // Assign empty array on unexpected error
        }
    }

    // Ensure all expected keys exist on the final object, even if fetching failed
    if (!siteContent.members) siteContent.members = [];
    if (!siteContent.achievements) siteContent.achievements = [];
    if (!siteContent.features) siteContent.features = [];
    if (!siteContent.generalContent) siteContent.generalContent = [];


    console.log("Finished fetching all content.");
    return siteContent;
};


// The main handler for the Vercel serverless function
export default async function handler(req, res) {
    console.log("Publish function invoked.");

    // 1. Authentication
    const { password } = req.body;
    if (password !== process.env.ADMIN_PASSWORD) {
        console.log("Authentication failed: Wrong password.");
        return res.status(401).json({ message: "Unauthorized: Wrong password" });
    }
    console.log("Authentication successful.");

    try {
        // 2. Fetch Content from Google Sheets
        const content = await fetchAllContent();

        // 3. GitHub Logic to update the file
        const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
        const owner = process.env.GITHUB_OWNER;
        const repo = process.env.GITHUB_REPO;
        const path = 'src/data/staticContent.js';

        const staticContentFile = `
// This file is auto-generated. Do not edit directly.
// Last updated: ${new Date().toISOString()}

export const siteContent = ${JSON.stringify(content, null, 2)};
`;

        console.log("Preparing to commit updated content to GitHub...");

        // Get the current file SHA to update it
        let currentSha;
        try {
            const { data: fileData } = await octokit.repos.getContent({ owner, repo, path });
            currentSha = fileData.sha;
        } catch (e) {
            // If the file doesn't exist, we don't need a SHA
            if (e.status !== 404) throw e;
            console.log("Static content file does not exist, creating it now.");
        }

        await octokit.repos.createOrUpdateFileContents({
            owner,
            repo,
            path,
            message: `feat: update website content [${new Date().toISOString()}]`,
            content: Buffer.from(staticContentFile).toString('base64'),
            sha: currentSha,
        });

        console.log("Successfully committed content to GitHub. Vercel deployment should trigger automatically.");
        return res.status(200).json({ message: "Publishing successful! Changes are being deployed." });

    } catch (error) {
        console.error("CRITICAL ERROR in publish function:", error);
        return res.status(500).json({ message: "A server error occurred.", error: error.message });
    }
}

