// components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigationLinks = [
        { name: 'About', path: '/about' },
        { name: 'Members', path: '/members' },
        { name: 'Resources', path: '/resources' },
        { name: 'Contact', path: '/#contact' }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
            ${isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}
            ${isMobileMenuOpen ? 'bg-white' : ''}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-24">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-4 group">
                        <img
                            src="/src/assets/doz.png"
                            alt="DOZ Logo with Compass Design"
                            className="h-16 w-44 object-contain"
                        />
                        <div className="flex flex-col">
                            <span className={`text-lg font-bold transition-colors
                                ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                                DELTA OMICRON ZETA
                            </span>
                            <span className={`text-base transition-colors
                                ${isScrolled ? 'text-gray-700' : 'text-white/80'}`}>
                                ALPHA KAPPA CHAPTER
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navigationLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                isScrolled={isScrolled}
                                isActive={location.pathname === link.path}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <button className="group relative px-6 py-3 overflow-hidden rounded-lg">
                            <div className="absolute inset-0 w-full h-full transition-all duration-300 
                                          bg-emerald-600 group-hover:bg-emerald-700" />
                            <span className="relative text-white font-medium">Join Now</span>
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-7 h-7 text-gray-800" />
                        ) : (
                            <Menu className={`w-7 h-7 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg
                    transition-all duration-300 ease-in-out origin-top
                    ${isMobileMenuOpen ? 'transform scale-y-100 opacity-100' : 'transform scale-y-0 opacity-0'}`}>
                    <div className="container mx-auto px-4 py-6 space-y-4">
                        {navigationLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block text-gray-800 hover:text-emerald-600 py-2 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium 
                                         hover:bg-emerald-700 transition-colors">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

const NavLink = ({ to, children, isScrolled, isActive }) => {
    const isHashLink = to.startsWith('/#');
    const Component = isHashLink ? 'a' : Link;
    const href = isHashLink ? to.substring(1) : to;

    return (
        <Component
            to={href}
            href={isHashLink ? href : undefined}
            className={`relative font-medium transition-colors overflow-hidden
                ${isScrolled ? 'text-gray-800' : 'text-white'}
                ${isActive ? 'text-emerald-600' : ''}
                hover:text-emerald-500 group`}
        >
            {children}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform translate-x-full 
                           transition-transform group-hover:translate-x-0" />
        </Component>
    );
};

export default Header;