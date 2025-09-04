import React, { useState } from 'react';
import { Shield, Key, ExternalLink, Cloud, CheckCircle, XCircle, Loader, Eye, EyeOff } from 'lucide-react';

const AdminPanel = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    // The Sheet ID is public. Hardcoding it here avoids build issues.
    const sheetId = '1XNHsFI29XL-FYOwQ_N3jV5Z1VrudS3f9lg4x9FBDcDk';

    const handlePublish = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: 'info', message: 'Connecting to server and fetching content...' });

        try {
            const response = await fetch('/api/publish', {
                method: 'POST',
                body: JSON.stringify({ password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'An unknown error occurred.');
            }

            setStatus({
                type: 'success',
                message: `${data.message} Your changes will be live in a few minutes.`
            });
            setPassword(''); // Clear password on success

        } catch (error) {
            setStatus({ type: 'error', message: `Publishing failed: ${error.message}` });
        } finally {
            setIsLoading(false);
        }
    };

    const StatusMessage = () => {
        if (!status.message) return null;

        const icons = {
            info: <Loader className="w-5 h-5 animate-spin" />,
            success: <CheckCircle className="w-5 h-5" />,
            error: <XCircle className="w-5 h-5" />,
        };

        const colors = {
            info: 'bg-blue-50 text-blue-700',
            success: 'bg-green-50 text-green-700',
            error: 'bg-red-50 text-red-700',
        };

        return (
            <div className={`flex items-center gap-3 p-4 rounded-lg ${colors[status.type]}`}>
                {icons[status.type]}
                <span className="font-medium">{status.message}</span>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                            <Shield className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900">Site Content Manager</h1>
                        <p className="text-gray-500 mt-2">Update the website content from Google Sheets.</p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-lg">
                        <h2 className="font-semibold mb-3 text-gray-800">Instructions</h2>
                        <ol className="list-decimal list-inside space-y-2 text-gray-600">
                            <li>Make content changes in the Google Sheet.</li>
                            <li>Enter the admin password below.</li>
                            <li>Click "Publish Changes" to start the deployment.</li>
                            <li>Wait 2-3 minutes for changes to go live.</li>
                        </ol>
                        <a
                            href={`https://docs.google.com/spreadsheets/d/${sheetId}/edit`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mt-4"
                        >
                            Open Google Sheet <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    <form onSubmit={handlePublish} className="space-y-6">
                        <div className="relative">
                            <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Admin Password"
                                required
                                className="w-full pl-12 pr-12 py-3 bg-white rounded-lg border border-gray-200
                                         focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-3 px-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2
                                      transition-all duration-300 transform hover:scale-105
                                      ${isLoading
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/20'
                                }`}
                        >
                            {isLoading ? (
                                <Loader className="w-5 h-5 animate-spin" />
                            ) : (
                                <Cloud className="w-5 h-5" />
                            )}
                            {isLoading ? 'Publishing...' : 'Publish Changes'}
                        </button>
                    </form>

                    <StatusMessage />
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;

