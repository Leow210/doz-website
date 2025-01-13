import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import logoImage from '/src/assets/doz.png';

const SocialLink = ({ icon: Icon, href, label }) => (
    <a
        href={href}
        aria-label={label}
        className="group relative w-10 h-10 rounded-lg bg-emerald-600/10 flex items-center justify-center 
                   hover:bg-emerald-600/20 transition-colors"
    >
        <Icon className="w-5 h-5 text-white group-hover:text-white transition-colors" />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-emerald-800 text-white text-sm py-1 px-2 
                        rounded opacity-0 group-hover:opacity-100 transition-opacity">
            {label}
        </span>
    </a>
);

const Footer = () => {
    return (
        <footer className="bg-emerald-600">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div className="flex items-center justify-center md:justify-start">
                        <img
                            src={logoImage}
                            alt="DOZ Logo with Compass Design"
                            className="h-16 w-44 object-contain"
                        />
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                        <SocialLink icon={Instagram} href="https://www.instagram.com/uscdoz" label="Instagram" />
                        <SocialLink icon={Linkedin} href="https://www.linkedin.com/company/delta-omicron-zeta/" label="LinkedIn" />
                        <SocialLink icon={Mail} href="mailto:dozcommunications@gmail.com" label="Email" />
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-emerald-500 mt-6 pt-6 text-center md:text-left">
                    <div className="text-sm text-white/90">
                        © 2025 DOZ Leadership Society. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;