// src/pages/MembersPage.jsx (Executive Board)
import React, { useState } from 'react';
import { Users } from 'lucide-react';
import MemberCard from '../components/MemberCard';
import { withSiteContent } from '../components/withSiteContent';

const MembersPage = ({ content }) => {
    const executiveBoard = content.members.filter(member =>
        member.Type?.toLowerCase() === 'eboard'
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-emerald-600 pt-24 pb-12 md:pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 rounded-full mb-6">
                            <Users className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Executive Board 2024-25</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Meet Our Leadership Team
                        </h1>
                        <p className="text-xl text-white/90">
                            Dedicated individuals working together to uphold our values and lead our chapter towards excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Members Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {executiveBoard.map((member, index) => (
                            <MemberCard key={index} member={member} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default withSiteContent(MembersPage);