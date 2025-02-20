import React from 'react';

const ComingSoonPage = () => {
    return (
        <div className="min-h-screen relative bg-emerald-50/30">
            <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:32px]" />
            <div className="fixed top-0 left-0 right-0 w-full h-24 bg-emerald-600 z-10" />

            <div className="container mx-auto px-4 pt-32 pb-16 relative">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                            <span className="text-sm font-medium text-emerald-600">Applications Closed</span>
                        </div>

                        <div className="mt-8 space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Spring 2025
                                <span className="relative ml-4">
                                    <span className="relative z-10 text-emerald-600">Applications</span>
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600">
                                Our application period for Spring 2025 is now closed. Please check back next semester for future opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonPage;
