// components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import heroImage from '/src/assets/DOZHero2.jpg';

const Hero = () => {
    return (
        <section className="min-h-screen relative overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="Student leaders collaborating"
                    className="w-full h-full object-cover brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-transparent" />
            </div>

            <div className="relative min-h-screen flex items-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl">
                        <div className="relative">
                            <div className="absolute -left-4 top-0 w-1 h-24 bg-gradient-to-b from-emerald-500 to-transparent" />
                            <h1 className="text-7xl font-bold text-white leading-tight mb-6">
                                Lead with
                                <br />
                                <div className="relative inline-block">
                                    <span className="relative z-10 text-emerald-400">
                                        Purpose
                                    </span>
                                    <div className="absolute -bottom-2 left-0 w-full h-2 bg-emerald-500/30 skew-x-12" />
                                </div>
                            </h1>
                            <p className="text-2xl text-gray-100 mb-8 max-w-lg">
                                Join ΔOZ, a premier leadership society at USC where future leaders forge their paths through action, innovation, and purposeful collaboration.
                            </p>

                            <div className="flex gap-6 items-center">
                                <Link
                                    to="/apply"
                                    className="group relative px-8 py-4 bg-emerald-500 text-white rounded-lg overflow-hidden inline-block"
                                >
                                    <div className="absolute inset-0 bg-emerald-600 transform translate-y-full transition-transform group-hover:translate-y-0" />
                                    <span className="relative flex items-center gap-2">
                                        Join Now <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                                <Link
                                    to="/about"
                                    className="text-gray-100 hover:text-emerald-400 transition-colors relative group"
                                >
                                    Learn More
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full" />
                                </Link>
                            </div>
                        </div>

                        <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-emerald-500/20 rounded-lg transform rotate-12" />
                        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-emerald-500/10 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;