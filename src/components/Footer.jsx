// components/Footer.jsx
import React, { useState } from 'react';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    Send,
    ExternalLink
} from 'lucide-react';

const SocialLink = ({ icon: Icon, href, label }) => (
    <a
        href={href}
        aria-label={label}
        className="group relative w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center 
                   hover:bg-emerald-50 transition-colors"
    >
        <Icon className="w-5 h-5 text-gray-600 group-hover:text-emerald-600 transition-colors" />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 
                        rounded opacity-0 group-hover:opacity-100 transition-opacity">
            {label}
        </span>
    </a>
);

const FooterLink = ({ href, children }) => (
    <li>
        <a
            href={href}
            className="group relative text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-1"
        >
            {children}
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
    </li>
);

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('subscribed');
        setEmail('');
        setTimeout(() => setStatus(''), 3000);
    };

    return (
        <div className="space-y-4">
            <h3 className="text-gray-800 font-semibold">Stay Updated</h3>
            <p className="text-gray-600 text-sm">
                Subscribe to our newsletter for leadership insights and updates.
            </p>
            <form onSubmit={handleSubmit} className="relative">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 
                             focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                />
                <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-500 text-white 
                             rounded-md hover:bg-emerald-600 transition-colors"
                >
                    <Send className="w-4 h-4" />
                </button>
            </form>
            {status === 'subscribed' && (
                <div className="text-emerald-600 text-sm">
                    Thanks for subscribing!
                </div>
            )}
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <img
                                src="/src/assets/doz.png"
                                alt="DOZ Logo with Compass Design"
                                className="h-16 w-44 object-contain"
                            />
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-gray-800">DOZß</span>
                                <span className="text-base text-gray-700">ALPHA KAPPA</span>
                            </div>
                        </div>
                        <p className="text-gray-600">
                            Empowering the next generation of leaders through excellence, innovation, and purposeful action.
                        </p>
                        <div className="flex gap-3">
                            <SocialLink icon={Facebook} href="#" label="Facebook" />
                            <SocialLink icon={Twitter} href="#" label="Twitter" />
                            <SocialLink icon={Instagram} href="#" label="Instagram" />
                            <SocialLink icon={Linkedin} href="#" label="LinkedIn" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-800 font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <FooterLink href="#">About Us</FooterLink>
                            <FooterLink href="#">Programs</FooterLink>
                            <FooterLink href="#">Events</FooterLink>
                            <FooterLink href="#">Members</FooterLink>
                            <FooterLink href="#">Careers</FooterLink>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-gray-800 font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-600 group">
                                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center 
                                            group-hover:bg-emerald-50 transition-colors">
                                    <Mail className="w-4 h-4 group-hover:text-emerald-600 transition-colors" />
                                </div>
                                <span>hello@doz.edu</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600 group">
                                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center 
                                            group-hover:bg-emerald-50 transition-colors">
                                    <Phone className="w-4 h-4 group-hover:text-emerald-600 transition-colors" />
                                </div>
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600 group">
                                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center 
                                            group-hover:bg-emerald-50 transition-colors">
                                    <MapPin className="w-4 h-4 group-hover:text-emerald-600 transition-colors" />
                                </div>
                                <span>123 Campus Drive, Suite 200<br />College Town, ST 12345</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <Newsletter />
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm text-gray-600">
                            © 2025 DOZ Leadership Society. All rights reserved.
                        </div>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;