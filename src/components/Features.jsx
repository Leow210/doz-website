// components/Features.jsx
import React, { useState } from 'react';
import { Building, Users, GraduationCap, Briefcase, ArrowRight, School, Globe, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, description, stats, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 
                          group-hover:opacity-100 transition-opacity rounded-2xl" />

            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full transform 
                          scale-0 group-hover:scale-100 transition-transform origin-top-right" />

            <div className="relative space-y-4">
                <div className="relative inline-block">
                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center
                                transform transition-transform group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="absolute inset-0 bg-emerald-200 rounded-2xl opacity-0 
                                group-hover:opacity-20 transition-opacity" />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>

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

                <button className="flex items-center gap-2 text-emerald-600 font-medium group/btn">
                    Learn more
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>

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
            icon: Users,
            title: "Vibrant Community",
            description: "Join a dynamic network of 500+ alumni and 40+ active members working across various industries and sectors.",
            stats: [
                { icon: <Users className="w-4 h-4" />, value: "500+ Alumni" },
                { icon: <Clock className="w-4 h-4" />, value: "16 Years" }
            ]
        },
        {
            icon: GraduationCap,
            title: "Academic Diversity",
            description: "Represent over 15 different majors and minors, fostering interdisciplinary collaboration and learning.",
            stats: [
                { icon: <School className="w-4 h-4" />, value: "15+ Majors" },
                { icon: <Building className="w-4 h-4" />, value: "5+ Schools" }
            ]
        },
        {
            icon: Briefcase,
            title: "Professional Impact",
            description: "Access opportunities at 50+ companies where our alumni and active members work and lead.",
            stats: [
                { icon: <Building className="w-4 h-4" />, value: "100+ Companies" },
                { icon: <Globe className="w-4 h-4" />, value: "$2M+ Raised" }
            ]
        },
        {
            icon: Globe,
            title: "Global Network",
            description: "Connect with members and alumni working across different industries and locations worldwide.",
            stats: [
                { icon: <Users className="w-4 h-4" />, value: "40+ Actives" },
                { icon: <Building className="w-4 h-4" />, value: "20+ Industries" }
            ]
        }
    ];

    return (
        <section className="py-12 relative overflow-hidden bg-gray-50">
            <div className="absolute inset-0">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.1) 1px, transparent 0)',
                    backgroundSize: '48px 48px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-block bg-emerald-50 px-4 py-2 rounded-full mb-4">
                        <span className="text-emerald-600 font-medium">Why Choose Us?</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Building Leaders Through Community
                    </h2>
                    <p className="text-xl text-gray-600">
                        Join a diverse network of ambitious individuals making an impact across industries
                    </p>
                    <div className="mt-6 w-24 h-1 bg-emerald-500 mx-auto transform -skew-x-12" />
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            {...feature}
                            index={index}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        to="/about"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white 
                                rounded-lg font-medium hover:bg-emerald-700 transition-colors group"
                    >
                        Learn More
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Features;