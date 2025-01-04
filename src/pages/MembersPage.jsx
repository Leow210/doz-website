import React, { useState } from 'react';
import { Mail, Linkedin, Twitter, ChevronDown, Users } from 'lucide-react';

const MemberCard = ({ member }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="group relative">
            {/* Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 
                          group-hover:shadow-xl">
                {/* Image Section */}
                <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 
                                 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60" />

                    {/* Social Links */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        {member.email && (
                            <a
                                href={`mailto:${member.email}`}
                                className="w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center
                                         hover:bg-emerald-500 hover:text-white transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        )}
                        {member.linkedin && (
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center
                                         hover:bg-emerald-500 hover:text-white transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        )}
                        {member.twitter && (
                            <a
                                href={member.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center
                                         hover:bg-emerald-500 hover:text-white transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                        <p className="text-emerald-600 font-medium">{member.position}</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="flex gap-4 text-sm text-gray-600">
                        <div>
                            <span className="font-semibold">{member.year}</span>
                            <span className="text-gray-400 ml-1">Year</span>
                        </div>
                        <div>
                            <span className="font-semibold">{member.major}</span>
                        </div>
                    </div>

                    {/* Expandable Bio */}
                    <div className="space-y-2">
                        <p className={`text-gray-600 transition-all duration-300 overflow-hidden
                                   ${isExpanded ? '' : 'line-clamp-2'}`}>
                            {member.bio}
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
                </div>
            </div>
        </div>
    );
};

const MembersPage = () => {
    const executiveBoard = [
        {
            name: "Rachana Kadikar",
            position: "Chapter Co-President",
            year: "Junior",
            major: "Data Science",
            image: "/src/assets/members/president.jpg",
            bio: "Rachana leads with vision and purpose, bringing three years of leadership experience in various campus organizations. Under her guidance, our chapter has achieved record membership growth and community engagement. She's passionate about developing future leaders and creating meaningful impact in our community.",
            email: "president@doz.edu",
            linkedin: "https://linkedin.com/in/sarah-johnson",
            twitter: "https://twitter.com/sarahj_doz"
        },
        {
            name: "Skyler Korkowski",
            position: "Chapter Co-President",
            year: "Senior",
            major: "Something",
            image: "/src/assets/members/vp.jpg",
            bio: "Skyler excels in strategic planning and program development. His innovative approach has revolutionized our chapter's technological infrastructure and member engagement initiatives. He's dedicated to fostering collaboration and driving organizational excellence.",
            email: "vp@doz.edu",
            linkedin: "https://linkedin.com/in/michael-chen"
        },
        {
            name: "Chloe Wong",
            position: "VP Of Communications",
            year: "Sophomore",
            major: "Business Administration",
            image: "/src/assets/members/secretary.jpg",
            bio: "CHloe maintains impeccable records and ensures smooth communication within our chapter. Her attention to detail and organizational skills have significantly improved our operational efficiency. She's passionate about transparency and member engagement.",
            email: "secretary@doz.edu",
            linkedin: "https://linkedin.com/in/aisha-patel"
        },
        {
            name: "Emmie Chun",
            position: "VP Of Communications",
            year: "Senior",
            major: "Business Administration",
            image: "/src/assets/members/treasurer.jpg",
            bio: "Emmie oversees our chapter's financial health with expertise and precision. His strategic financial planning has enabled us to expand our programs and community initiatives. He's committed to maintaining transparency and fiscal responsibility.",
            email: "treasurer@doz.edu",
            linkedin: "https://linkedin.com/in/marcus-thompson"
        },
        {
            name: "Leo Rosales",
            position: "VP Of Professionalism",
            year: "Junior",
            major: "Computer Science",
            image: "/src/assets/members/events.jpg",
            bio: "Leo brings creativity and energy to our event planning and execution. Her innovative approach has resulted in record attendance and engagement at chapter events. She's passionate about creating memorable experiences that bring our community together.",
            email: "events@doz.edu",
            linkedin: "https://linkedin.com/in/elena-rodriguez"
        },
        {
            name: "Meghan Webster",
            position: "VP Of Finance",
            year: "Sophomore",
            major: "Business Administration",
            image: "/src/assets/members/academic.jpg",
            bio: "Meghan leads our academic support initiatives with dedication and insight. His programs have helped maintain our chapter's outstanding academic performance. He's committed to fostering a culture of academic excellence and peer support.",
            email: "academic@doz.edu",
            linkedin: "https://linkedin.com/in/james-wilson"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-emerald-600 py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 rounded-full mb-6">
                            <Users className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Executive Board 2024-25</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Meet Our Leadership Team
                        </h1>
                        <p className="text-xl text-white/90">
                            Dedicated individuals working together to uphold our values and lead our chapter towards excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Members Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {executiveBoard.map((member, index) => (
                            <MemberCard key={index} member={member} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MembersPage;