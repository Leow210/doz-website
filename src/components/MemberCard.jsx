// src/components/MemberCard.jsx
import React, { useState } from 'react';
import { Mail, Linkedin, Twitter, ChevronDown } from 'lucide-react';

const MemberCard = ({ member }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="group relative">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 
                          group-hover:shadow-xl">
                {/* Image Section */}
                <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                        src={member.ImageUrl}
                        alt={member.Name}
                        className="w-full h-full object-cover transition-transform duration-300 
                                 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60" />

                    {/* Social Links */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        {member.Email && (
                            <a
                                href={`mailto:${member.Email}`}
                                className="w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center
                                         hover:bg-emerald-500 hover:text-white transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        )}
                        {member.LinkedIn && (
                            <a
                                href={member.LinkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center
                                         hover:bg-emerald-500 hover:text-white transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">{member.Name}</h3>
                        <p className="text-emerald-600 font-medium">{member.Position}</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="flex gap-4 text-sm text-gray-600">
                        <div>
                            <span className="text-gray-400 ml-1">Class of </span>
                            <span className="font-semibold">{member.Year}</span>
                        </div>
                        <div>
                            <span className="font-semibold">{member.Major}</span>
                        </div>
                    </div>

                    {/* Expandable Bio - Only shown if Bio exists */}
                    {member.Bio && (
                        <div className="space-y-2">
                            <p className={`text-gray-600 transition-all duration-300 overflow-hidden
                                       ${isExpanded ? '' : 'line-clamp-2'}`}>
                                {member.Bio}
                            </p>
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 
                                         transition-colors text-sm font-medium"
                            >
                                {isExpanded ? 'Read less' : 'Read more'}
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 
                                                     ${isExpanded ? 'rotate-180' : ''}`} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MemberCard;