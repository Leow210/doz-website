import React from 'react';
import { Trophy, Users, Briefcase } from 'lucide-react';
import { withSiteContent } from '../components/withSiteContent';

const CompanyCard = ({ company }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        {/* Fixed aspect ratio wrapper */}
        <div className="w-full pt-[100%] relative">
            {/* Absolute positioned container for the image */}
            <div className="absolute inset-0 p-6 flex items-center justify-center">
                <img
                    src={company.ImageUrl}
                    alt={`${company.Company} logo`}
                    className="max-w-full max-h-full object-contain"
                />
            </div>
        </div>
    </div>
);

const AchievementsPage = ({ content }) => {
    const companies = content.achievements;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-emerald-600 pt-24 pb-12 md:pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 rounded-full mb-6">
                            <Briefcase className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Alumni Success</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Where Our Alumni Work
                        </h1>
                        <p className="text-xl text-white/90">
                            Check out some of the places our members have gone on to work at.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Overview - Hidden on mobile */}
            <section className="hidden md:block py-12 bg-white border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto grid grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
                            <div className="text-gray-600">Active Alumni</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-emerald-600 mb-2">28+</div>
                            <div className="text-gray-600">Partner Companies</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-emerald-600 mb-2">95%</div>
                            <div className="text-gray-600">Employment Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
                            <div className="text-gray-600">Industries</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Companies Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {companies.map((company, index) => (
                                <CompanyCard key={index} company={company} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default withSiteContent(AchievementsPage);