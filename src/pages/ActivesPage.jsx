// pages/ActivesPage.jsx

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ActivesPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-2 gap-6">
                    <Link
                        to="/actives/resources"
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Resources</h2>
                        <p className="text-gray-600">
                            Access exclusive resources and materials for active members
                        </p>
                    </Link>
                    <Link
                        to="/actives/gallery"
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Gallery</h2>
                        <p className="text-gray-600">
                            View photos and memories from our events and activities
                        </p>
                    </Link>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default ActivesPage;