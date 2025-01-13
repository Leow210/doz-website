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
import heroImage from '/src/assets/actives2024.jpeg';
import pillar1image from '/src/assets/pillar1.jpg';
import pillar2image from '/src/assets/pillar2.jpg';
import pillar3image from '/src/assets/pillar3.jpg';
import pillar4image from '/src/assets/pillar4.jpg';
import pillar5image from '/src/assets/pillar5.jpg';
import pillar6image from '/src/assets/pillar6.jpg';
import pillar7image from '/src/assets/pillar7.jpg';


const SocietyInfo = () => (
    <section className="bg-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 lg:px-12 xl:px-16 relative">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-4 relative">
                        <div className="relative">
                            <div className="absolute -left-4 top-0 w-1 h-24 bg-gradient-to-b from-emerald-500 to-transparent" />
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full">
                                    <span className="text-sm font-medium text-emerald-600">Founded in 2008</span>
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900">
                                    Who We
                                    <span className="relative">
                                        <span className="relative z-10 text-emerald-600"> Are</span>
                                        <div className="absolute -bottom-1 left-0 w-full h-2 bg-emerald-500/30 skew-x-12" />
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8 relative">
                        <div className="bg-gradient-to-br from-white via-emerald-50 to-white p-8 rounded-2xl shadow-lg relative">
                            <div className="absolute top-0 right-0 w-24 h-24 border-2 border-emerald-500/20 rounded-lg transform rotate-12 -translate-y-8 translate-x-8" />
                            <div className="relative space-y-6">
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    <span className="font-semibold text-emerald-600">Delta Omicron Zeta</span> is a co-educational professional
                                    collegiate society born at USC with a singular mission: fostering personal growth in a diverse community
                                    of leaders through self-understanding and the collective practice of leadership.
                                </p>
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    Unlike traditional organizations where leadership is a byproduct, we place it at the heart
                                    of everything we do. Our innovative approach creates dedicated spaces for self-reflection,
                                    relationship building, and actionable leadership development.
                                </p>
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    Through our ΔΟΖ Active and Journeymen programming, we challenge USC's top student leaders to
                                    refine their perspectives, leverage their strengths, and develop leadership strategies that
                                    resonate with their authentic selves.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const PillarSection = ({ pillar, isActive, index }) => {
    return (
        <section
            id={`pillar-${index + 1}`}
            className={`min-h-screen flex items-center relative ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
            <div className="absolute left-0 lg:left-8 xl:left-12 top-1/2 -translate-y-1/2 hidden lg:block">
                <div className="flex flex-col items-center gap-2">
                    <div className={`w-1 h-16 ${isActive ? 'bg-emerald-500' : 'bg-gray-200'} transition-colors`} />
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center
                                ${isActive ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-600'} 
                                transition-colors`}>
                        {index + 1}
                    </div>
                    <div className={`w-1 h-16 ${isActive ? 'bg-emerald-500' : 'bg-gray-200'} transition-colors`} />
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-12 xl:px-16 py-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`space-y-4 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full">
                            {React.createElement(pillar.icon, { className: "w-4 h-4 text-emerald-600" })}
                            <span className="text-sm font-medium text-emerald-600">Pillar {index + 1}</span>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800">
                            {pillar.title}
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            {pillar.description}
                        </p>
                    </div>

                    <div className={`relative ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="relative aspect-square rounded-xl overflow-hidden bg-emerald-100">
                            <img
                                src={pillar.image}
                                alt={pillar.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                        </div>

                        <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xl">
                            <div className="flex items-center gap-3">
                                {React.createElement(pillar.icon, { className: "w-6 h-6 text-emerald-600" })}
                                <div>
                                    <div className="text-base font-bold text-gray-800">Founding Contributor</div>
                                    <div className="text-sm text-gray-600">{pillar.founder}</div>
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
            title: "Activism",
            description: "Activism is the reason leaders assist with a cause that promotes the common good. It requires a leader to serve selflessly. It gives larger meaning to leadership. It can be intertwined with any leadership role. Activism is proactive and never without placement and serves as a means to balance any other leadership objective. Activism is the good that is the cause and result of leadership.",
            founder: "Max Slavkin",
            image: pillar1image
        },
        {
            icon: Users,
            title: "Ambition",
            description: "It is a necessary tool on the path toward accomplishment because it defeats all obstacles and strengthens itself with time. Ambition is never satisfied. It is always looking forward to the next goal.",
            founder: "Mike Thomsen",
            image: pillar2image
        },
        {
            icon: Globe,
            title: "Judgment",
            description: "Judgment is what guides leaders in every decision they make. It gives them discernment between right and wrong. Judgment allows a leader to act when there is not a ready answer to a problem. It requires leaders to draw upon personal experiences and wisdom to make decisions. Judgment is used when there is not a template to follow.",
            founder: "Jeff Okita",
            image: pillar3image
        },
        {
            icon: Heart,
            title: "Enthusiasm",
            description: "Enthusiasm is what leaders draw from as energy for their actions. It provides happiness and joy for what they are doing. Enthusiasm overshadows any frustration and discouragement a leader may face. It is the excitement one gets from leading. Enthusiasm is always optimistic; it sees the positive side of every situation.",
            founder: "Chris Cass",
            image: pillar4image
        },
        {
            icon: Shield,
            title: "Perseverance",
            description: "Perseverance is a leader's determination to continue forward despite any obstacles or setbacks. It is the will to keep striving forward even though everything and everyone may say otherwise. Perseverance is the inner desire to continue toward achievement no matter what; it is never deterred.",
            founder: "Raquel Lucente",
            image: pillar5image
        },
        {
            icon: Trophy,
            title: "Integrity",
            description: "Integrity is one of the most sought-after attributes in a leader. It is what guides a leader's actions and influences all thoughts and decisions. Integrity is used to determine the reliability and honesty of a person. It is inextricably linked to a leader's reputation and character.",
            founder: "Kristen Priddy",
            image: pillar6image
        },
        {
            icon: Lightbulb,
            title: "Passion",
            description: "Passion provides the purpose behind what each great leader achieves. It is a deeply rooted love for what leaders devote their time to. It is what keeps them going when nothing else can. Passion is unique to each leader and can sometimes defy logic to others.",
            founder: "Miya Williams",
            image: pillar7image
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
            <section className="min-h-screen relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt="DOZ Leadership"
                        className="w-full h-full object-cover brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent" />
                </div>

                <div className="relative min-h-screen flex items-center">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl relative">
                            <div className="space-y-8">
                                <div className="space-y-6 relative">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-sm rounded-full border border-emerald-500/20">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <span className="text-sm font-medium text-emerald-300">Delta Omicron Zeta</span>
                                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                    </div>

                                    <div className="relative z-10">
                                        <h1 className="text-7xl font-bold text-white leading-tight">
                                            Our Seven
                                            <div className="relative inline-block ml-4">
                                                <span className="relative z-10 text-emerald-400">Pillars</span>
                                                <div className="absolute -bottom-2 left-0 w-full h-2 bg-emerald-500/30 skew-x-12" />
                                            </div>
                                        </h1>
                                    </div>

                                    <p className="text-2xl text-emerald-50/90 max-w-xl">
                                        Discover the foundational principles that guide our organization and shape our members into exceptional leaders who make lasting impact.
                                    </p>
                                </div>
                            </div>

                            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-emerald-500/5 rounded-full" />
                        </div>
                    </div>
                </div>
            </section>

            <SocietyInfo />

            <section className="bg-gradient-to-b from-white via-emerald-50/50 to-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:32px]" />

                <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20" />

                <div className="container mx-auto px-4 lg:px-12 xl:px-16 relative">
                    <div className="max-w-4xl mx-auto text-center relative">
                        <span className="block text-base text-emerald-600 font-semibold tracking-wide uppercase mb-4">Our Foundation</span>

                        <h2 className="text-5xl font-bold text-gray-900 mb-6 relative inline-block">
                            The Seven Pillars
                            <div className="absolute -bottom-2 left-0 w-full h-2 bg-emerald-500/30 skew-x-12" />
                        </h2>

                        <p className="text-xl text-gray-600 max-w-2xl mx-auto relative">
                            These foundational principles have been the cornerstone of our organization since 2008,
                            shaping generations of leaders who drive meaningful change in their communities.
                        </p>

                        <div className="absolute top-0 right-0 w-20 h-20 border-2 border-emerald-500/20 rounded-lg transform rotate-12" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-emerald-500/10 rounded-full" />
                    </div>
                </div>
            </section>

            {pillars.map((pillar, index) => (
                <PillarSection
                    key={index}
                    pillar={pillar}
                    index={index}
                    isActive={activePillar === index}
                />
            ))}

            <div className="fixed right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
                {pillars.map((_, index) => (
                    <a
                        key={index}
                        href={`#pillar-${index + 1}`}
                        className={`w-2 h-2 rounded-full transition-colors
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