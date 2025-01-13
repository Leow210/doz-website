// src/pages/GeneralMembersPage.jsx
import React, { useState } from 'react';
import { Users, Search } from 'lucide-react';
import MemberCard from '../components/MemberCard';
import { withSiteContent } from '../components/withSiteContent';

const GeneralMembersPage = ({ content }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [memberTypeFilter, setMemberTypeFilter] = useState('all'); // 'all', 'active', 'alumni'

    const generalMembers = content.members.filter(member => {
        const matchesType = member.Type?.toLowerCase() === 'active';
        const matchesName = member.Name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = memberTypeFilter === 'all' ? true :
            member.Status?.toLowerCase() === memberTypeFilter;

        return matchesType && matchesName && matchesStatus;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-emerald-600 pt-24 pb-12 md:pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 rounded-full mb-6">
                            <Users className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Our Members</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Meet Our General Members
                        </h1>
                        <p className="text-xl text-white/90">
                            Discover the talented individuals who make our organization exceptional.
                        </p>
                    </div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-8 bg-white border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-xl mx-auto space-y-4">
                        {/* Search Input */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search members by name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-3 pl-10 bg-gray-50 rounded-lg border border-gray-200
                                         focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => setMemberTypeFilter('all')}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors
                                    ${memberTypeFilter === 'all'
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                All Members
                            </button>
                            <button
                                onClick={() => setMemberTypeFilter('active')}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors
                                    ${memberTypeFilter === 'active'
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                Active
                            </button>
                            <button
                                onClick={() => setMemberTypeFilter('alumni')}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors
                                    ${memberTypeFilter === 'alumni'
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                Alumni
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Members Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {generalMembers.map((member, index) => (
                            <MemberCard key={index} member={member} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default withSiteContent(GeneralMembersPage);