import { fetchAllContent } from './sheetsFetcher.js';
import fs from 'fs';
import path from 'path';

async function generateStaticContent() {
    try {
        const content = await fetchAllContent();

        // Create a static content file
        const staticContent = `
// This file is auto-generated. Do not edit directly.
// Last updated: ${new Date().toISOString()}

export const siteContent = ${JSON.stringify(content, null, 2)};
`;

        // Write to src/data/staticContent.js
        fs.writeFileSync(
            path.join(process.cwd(), 'src', 'data', 'staticContent.js'),
            staticContent
        );

        console.log('Static content generated successfully!');
    } catch (error) {
        console.error('Error generating static content:', error);
        process.exit(1);
    }
}

generateStaticContent();