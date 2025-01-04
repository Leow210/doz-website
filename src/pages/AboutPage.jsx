import React, { useState, useEffect } from 'react';
import {
    BookOpen,
    Users,
    Heart,
    Trophy,
    Globe,
    Lightbulb,
    Shield
} from 'lucide-react';

const PillarSection = ({ pillar, isActive, index }) => {
    return (
        <section
            id={`pillar-${index + 1}`}
            className={`min-h-screen flex items-center relative ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
            <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
                <div className="flex flex-col items-center gap-2">
                    <div className={`w-1 h-24 ${isActive ? 'bg-emerald-500' : 'bg-gray-200'} transition-colors`} />
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center
                                ${isActive ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-600'} 
                                transition-colors`}>
                        {index + 1}
                    </div>
                    <div className={`w-1 h-24 ${isActive ? 'bg-emerald-500' : 'bg-gray-200'} transition-colors`} />
                </div>
            </div>

            <div className="container mx-auto px-4 py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={`space-y-6 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                            {React.createElement(pillar.icon, { className: "w-4 h-4 text-emerald-600" })}
                            <span className="text-sm font-medium text-emerald-600">Pillar {index + 1}</span>
                        </div>

                        <h2 className="text-4xl font-bold text-gray-800">
                            {pillar.title}
                        </h2>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            {pillar.description}
                        </p>

                        <div className="space-y-4">
                            {pillar.keyPoints.map((point, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 
                                                flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    </div>
                                    <p className="text-gray-600">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`relative ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="relative aspect-square rounded-2xl overflow-hidden">
                            <img
                                src={pillar.image}
                                alt={pillar.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                        </div>

                        {/* Stats or highlight */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                            <div className="flex items-center gap-3">
                                {React.createElement(pillar.icon, { className: "w-8 h-8 text-emerald-600" })}
                                <div>
                                    <div className="text-2xl font-bold text-gray-800">{pillar.stat}</div>
                                    <div className="text-sm text-gray-600">{pillar.statLabel}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutPage = () => {
    const [activePillar, setActivePillar] = useState(0);

    const pillars = [
        {
            icon: BookOpen,
            title: "Academic Excellence",
            description: "We foster a culture of intellectual curiosity and academic achievement, pushing our members to excel in their studies while developing critical thinking skills.",
            keyPoints: [
                "Maintain a minimum 3.5 GPA throughout membership",
                "Access to exclusive study groups and academic resources",
                "Regular workshops on academic success strategies",
                "Mentorship from high-achieving alumni"
            ],
            image: "/src/assets/academic.jpg",
            stat: "3.8",
            statLabel: "Average Member GPA"
        },
        {
            icon: Users,
            title: "Leadership Development",
            description: "Our comprehensive leadership program equips members with the skills and experiences needed to lead in any environment.",
            keyPoints: [
                "Leadership training workshops and seminars",
                "Opportunities to lead community projects",
                "Executive board positions and committee roles",
                "Leadership certification programs"
            ],
            image: "/src/assets/leadership.jpg",
            stat: "100+",
            statLabel: "Leadership Positions"
        },
        {
            icon: Heart,
            title: "Community Service",
            description: "Making a positive impact in our community is at the heart of our organization's values.",
            keyPoints: [
                "Monthly community service projects",
                "Partnerships with local non-profits",
                "Annual charity fundraising events",
                "Social impact initiatives"
            ],
            image: "/src/assets/community.jpg",
            stat: "5000+",
            statLabel: "Service Hours"
        },
        {
            icon: Trophy,
            title: "Professional Development",
            description: "We prepare our members for successful careers through networking, skill-building, and professional experiences.",
            keyPoints: [
                "Resume workshops and career fairs",
                "Professional mentorship program",
                "Internship opportunities",
                "Industry networking events"
            ],
            image: "/src/assets/professional.jpg",
            stat: "90%",
            statLabel: "Employment Rate"
        },
        {
            icon: Globe,
            title: "Cultural Awareness",
            description: "Embracing diversity and promoting cultural understanding is fundamental to our organization.",
            keyPoints: [
                "Cultural exchange programs",
                "Diversity and inclusion workshops",
                "International student support",
                "Multicultural events"
            ],
            image: "/src/assets/cultural.jpg",
            stat: "50+",
            statLabel: "Countries Represented"
        },
        {
            icon: Shield,
            title: "Personal Integrity",
            description: "We uphold the highest standards of ethics and integrity in all our actions and decisions.",
            keyPoints: [
                "Ethics training workshops",
                "Honor code commitment",
                "Peer accountability system",
                "Character development programs"
            ],
            image: "/src/assets/integrity.jpg",
            stat: "100%",
            statLabel: "Code Compliance"
        },
        {
            icon: Lightbulb,
            title: "Innovation & Creativity",
            description: "We encourage creative thinking and innovative approaches to solving real-world challenges.",
            keyPoints: [
                "Innovation challenges and hackathons",
                "Creative problem-solving workshops",
                "Entrepreneurship initiatives",
                "Design thinking programs"
            ],
            image: "/src/assets/innovation.jpg",
            stat: "25+",
            statLabel: "Innovation Projects"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            pillars.forEach((_, index) => {
                const element = document.getElementById(`pillar-${index + 1}`);
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
                    if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
                        setActivePillar(index);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="min-h-[60vh] bg-emerald-600 relative flex items-center">
                <div className="absolute inset-0 bg-black/20" />
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold text-white mb-6">
                            Our Seven Pillars of Excellence
                        </h1>
                        <p className="text-xl text-white/90">
                            Discover the foundational principles that guide our organization and shape our members into exceptional leaders.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pillar Sections */}
            {pillars.map((pillar, index) => (
                <PillarSection
                    key={index}
                    pillar={pillar}
                    index={index}
                    isActive={activePillar === index}
                />
            ))}

            {/* Quick Navigation */}
            <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
                {pillars.map((_, index) => (
                    <a
                        key={index}
                        href={`#pillar-${index + 1}`}
                        className={`w-3 h-3 rounded-full transition-colors
                            ${activePillar === index ? 'bg-emerald-500' : 'bg-gray-300'}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(`pillar-${index + 1}`).scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default AboutPage;