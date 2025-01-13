import React, { useState } from 'react';
import { saveSiteContent, getSiteContent } from '../utils/sheetsFetcher';

const AdminPanel = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');
    const currentContent = getSiteContent();

    const handlePublish = async () => {
        setIsLoading(true);
        setStatus('Fetching latest content...');

        try {
            const success = await saveSiteContent();
            if (success) {
                setStatus('Content published successfully! Refresh the page to see changes.');
            } else {
                setStatus('Error publishing content. Please try again.');
            }
        } catch (error) {
            setStatus('Error: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const testConnection = async () => {
        const SHEET_ID = '1XNHsFI29XL-FYOwQ_N3jV5Z1VrudS3f9lg4x9FBDcDk';
        const API_KEY = 'AIzaSyCmnn2lx0Q4ZKs5P5QwVbovamRwh3g3Ybc';

        try {
            // First test: Check if we can access the spreadsheet at all
            const metadataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}?key=${API_KEY}`;
            const metadataResponse = await fetch(metadataUrl);
            const metadata = await metadataResponse.json();

            console.log('Spreadsheet metadata:', metadata);
            console.log('Available sheets:', metadata.sheets.map(s => s.properties.title));

            // Second test: Try to read the Members sheet
            const dataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Members!A1:Z1?key=${API_KEY}`;
            const dataResponse = await fetch(dataUrl);
            const data = await dataResponse.json();

            console.log('First row of Members sheet:', data.values?.[0]);

            return "Connection successful! Check console for details.";
        } catch (error) {
            console.error('Connection test failed:', error);
            return `Connection failed: ${error.message}`;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h1 className="text-2xl font-bold mb-6">Site Content Manager</h1>

                    {/* Current Content Status */}
                    <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                        <h2 className="font-semibold mb-2">Current Content Status</h2>
                        <p className="text-gray-600">
                            Last Updated: {currentContent?.lastUpdated
                                ? new Date(currentContent.lastUpdated).toLocaleString()
                                : 'Never'}
                        </p>
                    </div>

                    {/* Google Sheets Link */}
                    <div className="mb-8">
                        <h2 className="font-semibold mb-2">Edit Content</h2>
                        <a
                            href="https://docs.google.com/spreadsheets/d/1XNHsFI29XL-FYOwQ_N3jV5Z1VrudS3f9lg4x9FBDcDk/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-600 hover:text-emerald-700 flex items-center gap-2"
                        >
                            Open Google Sheet
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>

                    {/* Test Connection Button */}
                    <button
                        onClick={async () => {
                            const result = await testConnection();
                            setStatus(result);
                        }}
                        className="w-full mb-4 py-3 rounded-lg font-medium text-white bg-blue-500 hover:bg-blue-600"
                    >
                        Test Connection
                    </button>

                    {/* Publish Button */}
                    <div className="space-y-4">
                        <button
                            onClick={handlePublish}
                            disabled={isLoading}
                            className={`w-full py-3 rounded-lg font-medium text-white
                                ${isLoading
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-emerald-600 hover:bg-emerald-700'}`}
                        >
                            {isLoading ? 'Publishing...' : 'Publish Changes'}
                        </button>

                        {status && (
                            <div className={`p-4 rounded-lg ${status.includes('Error')
                                ? 'bg-red-50 text-red-600'
                                : status.includes('success')
                                    ? 'bg-green-50 text-green-600'
                                    : 'bg-blue-50 text-blue-600'
                                }`}>
                                {status}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;