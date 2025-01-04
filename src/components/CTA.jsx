import React from 'react';
import { ArrowRight, Calendar, Star, Award, Users } from 'lucide-react';

const Benefit = ({ icon: Icon, text }) => (
    <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
            <Icon className="w-4 h-4 text-emerald-600" />
        </div>
        <span className="text-gray-600">{text}</span>
    </div>
);

const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.1) 1px, transparent 0)',
                    backgroundSize: '48px 48px'
                }} />
            </div>

            {/* Floating elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/5 rounded-full 
                          animate-[float_6s_ease-in-out_infinite]" />
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-emerald-500/10 rounded-full 
                          animate-[float_4s_ease-in-out_infinite_reverse]" />

            <div className="container mx-auto px-4 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-12 relative overflow-hidden">
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-bl-full" />

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Content */}
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                                    <Calendar className="w-4 h-4 text-emerald-600" />
                                    <span className="text-sm font-medium text-emerald-600">Fall 2025 Applications</span>
                                </div>

                                <h2 className="text-4xl font-bold text-gray-800">
                                    Begin Your Leadership
                                    <span className="block text-emerald-600">Journey Today</span>
                                </h2>

                                <p className="text-lg text-gray-600">
                                    Join a community of visionaries and change-makers. Shape your future while making a lasting impact.
                                </p>

                                {/* Benefits */}
                                <div className="space-y-3">
                                    <Benefit icon={Star} text="Exclusive leadership workshops and training" />
                                    <Benefit icon={Users} text="Network with industry leaders" />
                                    <Benefit icon={Award} text="Recognition and career opportunities" />
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <button className="group relative px-8 py-4 bg-emerald-600 text-white rounded-lg font-medium 
                                                     overflow-hidden transition-transform hover:scale-105">
                                        <span className="relative flex items-center justify-center gap-2">
                                            Apply Now
                                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 
                                                      transform translate-x-full group-hover:translate-x-0 transition-transform" />
                                    </button>
                                    <button className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-medium 
                                                     border-2 border-emerald-600 hover:bg-emerald-50 transition-all
                                                     hover:shadow-lg hover:shadow-emerald-100">
                                        Learn More
                                    </button>
                                </div>
                            </div>

                            {/* Image/Decorative Side */}
                            <div className="relative">
                                <div className="aspect-square rounded-2xl overflow-hidden">
                                    <img
                                        src="/src/assets/AlphaKappaBigSib.jpg"
                                        alt="Students in leadership session"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
                                </div>

                                {/* Floating Stats */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                                            <Users className="w-6 h-6 text-emerald-600" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-gray-800">500+</div>
                                            <div className="text-sm text-gray-600">Active Members</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;