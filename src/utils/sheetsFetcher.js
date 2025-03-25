// src/utils/sheetsFetcher.js

// Function to process raw sheet data into structured content
const processSheetData = (rawData) => {
    const [headers, ...rows] = rawData;
    return rows.map(row => {
        const item = {};
        headers.forEach((header, index) => {
            item[header] = row[index];
        });
        return item;
    });
};

export const fetchAllContent = async () => {
    const SHEET_ID = '1XNHsFI29XL-FYOwQ_N3jV5Z1VrudS3f9lg4x9FBDcDk';  // You'll get this from your Google Sheet URL
    const API_KEY = 'AIzaSyCmnn2lx0Q4ZKs5P5QwVbovamRwh3g3Ybc';     // Your Google Sheets API key

    // Define all the tabs/ranges to fetch
    const ranges = [
        'Members!A1:Z1000',
        'Achievements!A1:Z1000',
        'Features!A1:Z1000',
        'GeneralContent!A1:Z1000',
    ];

    try {
        // Fetch all ranges in parallel
        const responses = await Promise.all(
            ranges.map(range =>
                fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`
                ).then(res => res.json())
            )
        );

        // Process each response
        const [members, achievements, features, generalContent] = responses.map(
            response => processSheetData(response.values)
        );

        // Return structured site content
        return {
            members,
            achievements,
            features,
            generalContent
        };
    } catch (error) {
        console.error('Error fetching sheet data:', error);
        throw error;
    }
};

// Function to save fetched content to local storage
export const saveSiteContent = async () => {
    try {
        const content = await fetchAllContent();
        localStorage.setItem('siteContent', JSON.stringify({
            content,
            lastUpdated: new Date().toISOString()
        }));
        return true;
    } catch (error) {
        console.error('Error saving site content:', error);
        return false;
    }
};

// Function to get content from local storage
export const getSiteContent = () => {
    try {
        const data = localStorage.getItem('siteContent');
        if (!data) return null;
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading site content:', error);
        return null;
    }
};