// src/utils/previewContent.js
import { fetchAllContent } from './sheetsFetcher.js';
import fs from 'fs';
import path from 'path';

async function previewContentChanges() {
    try {
        // Fetch new content
        const newContent = await fetchAllContent();

        // Read existing content
        const existingContentPath = path.join(process.cwd(), 'src', 'data', 'staticContent.js');
        let existingContent;
        try {
            const existingFile = fs.readFileSync(existingContentPath, 'utf8');
            existingContent = eval(existingFile.split('export const siteContent =')[1]);
        } catch (error) {
            existingContent = {};
        }

        // Compare and show differences
        console.log('\n=== Content Changes Preview ===\n');

        // Compare members
        const existingMembers = new Set(existingContent.members?.map(m => m.Name) || []);
        const newMembers = new Set(newContent.members?.map(m => m.Name) || []);

        console.log('Members Changes:');
        console.log('Added:', [...newMembers].filter(m => !existingMembers.has(m)));
        console.log('Removed:', [...existingMembers].filter(m => !newMembers.has(m)));

        // Show modified members
        const modifiedMembers = newContent.members?.filter(newMember => {
            const existingMember = existingContent.members?.find(m => m.Name === newMember.Name);
            return existingMember && JSON.stringify(existingMember) !== JSON.stringify(newMember);
        });
        console.log('Modified:', modifiedMembers?.map(m => m.Name));

        // Similar comparisons for other content types...

        // Ask for confirmation
        console.log('\nWould you like to update the static content? (y/n)');
        process.stdin.once('data', (data) => {
            const answer = data.toString().trim().toLowerCase();
            if (answer === 'y') {
                // Generate the new static content
                const staticContent = `
// This file is auto-generated. Do not edit directly.
// Last updated: ${new Date().toISOString()}

export const siteContent = ${JSON.stringify(newContent, null, 2)};
`;
                fs.writeFileSync(existingContentPath, staticContent);
                console.log('Static content updated successfully!');
            } else {
                console.log('Update cancelled.');
            }
            process.exit();
        });
    } catch (error) {
        console.error('Error previewing content:', error);
        process.exit(1);
    }
}

previewContentChanges();