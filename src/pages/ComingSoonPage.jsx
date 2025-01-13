import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Users, FileText, UserPlus, Pizza } from 'lucide-react';

const TimelineEvent = ({ icon: Icon, date, title, time }) => (
    <div className="flex items-start gap-4 relative">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-emerald-600" />
        </div>
        <div className="flex-1">
            <div className="font-medium text-gray-900">{date}</div>
            <div className="text-gray-600">{title}</div>
            {time && <div className="text-sm text-gray-500">{time}</div>}
        </div>
    </div>
);

const ComingSoonPage = () => {
    const leftColumnEvents = [
        {
            icon: Users,
            date: "Jan 21-23",
            title: "Recruitment Fair Tabling",
            time: "1:00 PM - 3:30 PM"
        },
        {
            icon: Pizza,
            date: "Jan 24/25",
            title: "Social with DPE",
            time: "TBD"
        },
        {
            icon: Users,
            date: "Jan 29",
            title: "Info Session #1 - Speed Dating",
            time: "7:00 PM - 8:30 PM"
        }
    ];

    const rightColumnEvents = [
        {
            icon: FileText,
            date: "Jan 30",
            title: "Networking Workshop + Applications Due",
            time: "7:00 PM - 8:30 PM"
        },
        {
            icon: UserPlus,
            date: "Jan 31",
            title: "Group Interviews",
            time: "TBD"
        },
        {
            icon: Pizza,
            date: "Feb 3",
            title: "Event 2: Pizza/Snack & Trivia/Donation Event",
            time: "TBD"
        }
    ];

    return (
        <div className="min-h-screen relative bg-emerald-50/30">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:32px]" />

            {/* Green Header */}
            <div className="fixed top-0 left-0 right-0 w-full h-24 bg-emerald-600 z-10" />

            {/* Main Content */}
            <div className="container mx-auto px-4 pt-32 pb-16 relative">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                            <Clock className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-medium text-emerald-600">Applications Opening Soon</span>
                        </div>

                        {/* Main Content */}
                        <div className="mt-8 space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Spring 2025
                                <span className="relative ml-4">
                                    <span className="relative z-10 text-emerald-600">Applications</span>
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600">
                                Our application period for Spring 2025 hasn't started yet.
                                Check back soon and fill out our interest form!
                            </p>
                        </div>

                        {/* Timeline Section */}
                        <div className="mt-12 bg-gradient-to-br from-white via-emerald-50 to-white p-8 rounded-xl">
                            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-8">
                                <Calendar className="w-5 h-5 text-emerald-600" />
                                Recruitment Timeline
                            </h3>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Left Column */}
                                <div className="space-y-6">
                                    {leftColumnEvents.map((event, index) => (
                                        <TimelineEvent key={index} {...event} />
                                    ))}
                                </div>

                                {/* Right Column */}
                                <div className="space-y-6">
                                    {rightColumnEvents.map((event, index) => (
                                        <TimelineEvent key={index} {...event} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Interest Form Button */}
                        <div className="mt-12 text-center">
                            <Link
                                to="/interest-form"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg
                                         bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 
                                         transition-colors duration-200 font-medium"
                            >
                                Fill out our interest form
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonPage;