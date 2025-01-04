// components/Features.jsx
import React, { useState } from 'react';
import { Star, Users, Target, Calendar, ArrowRight, BookOpen, Trophy, Rocket } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, stats, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 
                          group-hover:opacity-100 transition-opacity rounded-2xl" />

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full transform 
                          scale-0 group-hover:scale-100 transition-transform origin-top-right" />

            {/* Main content */}
            <div className="relative space-y-4">
                {/* Icon */}
                <div className="relative inline-block">
                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center
                                transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="absolute inset-0 bg-emerald-200 rounded-2xl opacity-0 
                                group-hover:opacity-20 transition-opacity" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>

                {/* Stats or additional info */}
                {stats && (
                    <div className="pt-4 border-t border-gray-100">
                        <div className="flex justify-between text-sm text-gray-500">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex items-center gap-1">
                                    {stat.icon}
                                    <span>{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Learn more button */}
                <button className="flex items-center gap-2 text-emerald-600 font-medium group/btn">
                    Learn more
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Connecting line */}
            {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-emerald-200 
                              transform -translate-y-1/2" />
            )}
        </div>
    );
};

const Features = () => {
    const features = [
        {
            icon: Star,
            title: "Excellence in Leadership",
            description: "Develop your unique leadership style through hands-on experience and mentorship from industry leaders.",
            stats: [
                { icon: <Trophy className="w-4 h-4" />, value: "95% Success" },
                { icon: <Users className="w-4 h-4" />, value: "500+ Alumni" }
            ]
        },
        {
            icon: Rocket,
            title: "Accelerated Growth",
            description: "Fast-track your professional development with exclusive workshops and networking opportunities.",
            stats: [
                { icon: <BookOpen className="w-4 h-4" />, value: "50+ Workshops" },
                { icon: <Target className="w-4 h-4" />, value: "100% Placement" }
            ]
        },
        {
            icon: Users,
            title: "Powerful Network",
            description: "Connect with influential alumni and industry leaders who can help shape your career trajectory.",
            stats: [
                { icon: <Users className="w-4 h-4" />, value: "1000+ Network" },
                { icon: <Calendar className="w-4 h-4" />, value: "20+ Events" }
            ]
        },
        {
            icon: Target,
            title: "Growth Mindset",
            description: "Transform challenges into opportunities for personal and professional development.",
            stats: [
                { icon: <Trophy className="w-4 h-4" />, value: "30+ Awards" },
                { icon: <Rocket className="w-4 h-4" />, value: "40+ Projects" }
            ]
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-gray-50">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.1) 1px, transparent 0)',
                    backgroundSize: '48px 48px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-block bg-emerald-50 px-4 py-2 rounded-full mb-4">
                        <span className="text-emerald-600 font-medium">Why Choose DOZ?</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Empowering Tomorrow's Leaders
                    </h2>
                    <p className="text-xl text-gray-600">
                        Discover how we help ambitious individuals transform into exceptional leaders
                    </p>
                    <div className="mt-6 w-24 h-1 bg-emerald-500 mx-auto transform -skew-x-12" />
                </div>

                {/* Features Grid */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            {...feature}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white 
                                   rounded-lg font-medium hover:bg-emerald-700 transition-colors group">
                        Start Your Journey
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Features;