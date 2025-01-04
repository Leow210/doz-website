import React, { useState } from 'react';
import {
    BookOpen,
    FileText,
    Briefcase,
    Code,
    Globe,
    Award,
    ExternalLink,
    Search,
    Bookmark,
    TrendingUp,
    Laptop,
    Users
} from 'lucide-react';

const ResourceCard = ({ resource }) => {
    return (
        <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300
                     border border-gray-100 hover:border-emerald-200"
        >
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center
                                group-hover:bg-emerald-100 transition-colors">
                        {React.createElement(resource.icon, {
                            className: "w-6 h-6 text-emerald-600"
                        })}
                    </div>
                </div>
                <div className="flex-grow">
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-gray-800 group-hover:text-emerald-600 
                                   transition-colors">
                            {resource.title}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 
                                             transition-colors" />
                    </div>
                    <p className="text-gray-600 mt-1 text-sm">{resource.description}</p>
                    {resource.tags && (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {resource.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </a>
    );
};

const ResourceSection = ({ title, description, icon: Icon, resources }) => {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                    <ResourceCard key={index} resource={resource} />
                ))}
            </div>
        </div>
    );
};

const ResourcesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const resourceSections = [
        {
            title: "Career Development",
            description: "Essential resources for career growth and professional development",
            icon: Briefcase,
            resources: [
                {
                    icon: FileText,
                    title: "Resume Writing Guide",
                    description: "Comprehensive guide to crafting an effective resume with templates and examples",
                    link: "https://www.indeed.com/career-advice/resumes-cover-letters",
                    tags: ["Resume", "Templates", "Guide"]
                },
                {
                    icon: Users,
                    title: "Interview Preparation",
                    description: "Tips, common questions, and strategies for successful interviews",
                    link: "https://www.glassdoor.com/blog/guide/how-to-prepare-for-an-interview",
                    tags: ["Interview", "Preparation"]
                }
            ]
        },
        {
            title: "Professional Development",
            description: "Resources for building professional skills and knowledge",
            icon: TrendingUp,
            resources: [
                {
                    icon: Globe,
                    title: "LinkedIn Learning",
                    description: "Access to thousands of professional courses and certifications",
                    link: "https://www.linkedin.com/learning",
                    tags: ["Courses", "Skills"]
                },
                {
                    icon: Laptop,
                    title: "Technical Skills",
                    description: "Free resources for learning programming and technical skills",
                    link: "https://www.freecodecamp.org",
                    tags: ["Technical", "Programming"]
                }
            ]
        },
        {
            title: "Leadership Resources",
            description: "Materials to develop and enhance leadership capabilities",
            icon: Award,
            resources: [
                {
                    icon: BookOpen,
                    title: "Harvard Business Review",
                    description: "Latest articles and insights on leadership and management",
                    link: "https://hbr.org/topic/leadership",
                    tags: ["Leadership", "Articles"]
                },
                {
                    icon: Globe,
                    title: "TED Talks on Leadership",
                    description: "Curated collection of inspiring talks on leadership",
                    link: "https://www.ted.com/topics/leadership",
                    tags: ["Videos", "Inspiration"]
                }
            ]
        },
        {
            title: "Networking Tools",
            description: "Resources for building and maintaining professional networks",
            icon: Users,
            resources: [
                {
                    icon: Briefcase,
                    title: "Networking Guide",
                    description: "Strategies for effective professional networking",
                    link: "https://www.themuse.com/advice/an-introverts-guide-to-networking",
                    tags: ["Networking", "Guide"]
                },
                {
                    icon: Globe,
                    title: "Professional Events",
                    description: "Find and participate in professional networking events",
                    link: "https://www.meetup.com/topics/professional-networking",
                    tags: ["Events", "Networking"]
                }
            ]
        }
    ];

    const filteredSections = searchQuery
        ? resourceSections.map(section => ({
            ...section,
            resources: section.resources.filter(resource =>
                resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                resource.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            )
        })).filter(section => section.resources.length > 0)
        : resourceSections;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-emerald-600 py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 rounded-full mb-6">
                            <Bookmark className="w-4 h-4 text-white" />
                            <span className="text-sm font-medium text-white">Professional Resources</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Resources for Success
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Curated collection of professional resources to help you excel in your career journey.
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search resources..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-6 py-4 bg-white rounded-xl shadow-lg pl-12
                                         focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="space-y-16">
                        {filteredSections.map((section, index) => (
                            <ResourceSection key={index} {...section} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResourcesPage;