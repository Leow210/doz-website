import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Building, Trophy } from 'lucide-react';

const CountUpAnimation = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    const start = Date.now();
                    const timer = setInterval(() => {
                        const timePassed = Date.now() - start;
                        if (timePassed >= duration) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor((timePassed / duration) * end));
                        }
                    }, 50);
                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, [end, duration]);

    return <span ref={countRef}>{count}</span>;
};

const StatCard = ({ icon: Icon, number, label, delay }) => (
    <div className="relative group" style={{ animationDelay: `${delay}ms` }}>
        <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform 
                    transition-all duration-300 group-hover:scale-105" />
        <div className="relative p-8">
            <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors">
                    <Icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-200 rounded-full 
                            transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
            <div className="text-5xl font-bold text-gray-800 mb-2 flex items-baseline gap-1">
                <CountUpAnimation end={number} />
                <span className="text-emerald-500 text-2xl">+</span>
            </div>
            <div className="text-gray-600 font-medium">{label}</div>
        </div>
    </div>
);

const Stats = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.2) 1px, transparent 0)`,
                    backgroundSize: '48px 48px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact in Numbers</h2>
                        <div className="w-24 h-1 bg-emerald-500 mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <StatCard icon={Users} number={500} label="Active Members" delay={0} />
                        <StatCard icon={Building} number={50} label="Partner Organizations" delay={200} />
                        <StatCard icon={Trophy} number={100} label="Awards Won" delay={400} />
                        <StatCard icon={Award} number={15} label="Years of Excellence" delay={600} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;