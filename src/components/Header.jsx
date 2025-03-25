import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImage from '/src/assets/doz.png';

const Header = ({ alwaysShowBackground = false }) => {
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
        { name: 'E-board', path: '/eboard' },
        { name: 'Achievements', path: '/achievements' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Apply', path: '/apply', isButton: true }
    ];

    const showBackground = alwaysShowBackground || isScrolled;

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
            ${showBackground ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}
            ${isMobileMenuOpen ? 'bg-white' : ''}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-24">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-2 md:gap-4 group min-w-0">
                        <img
                            src={logoImage}
                            alt="DOZ Logo"
                            className="h-12 w-32 md:h-16 md:w-44 object-contain flex-shrink-0"
                        />
                        <div className="flex flex-col min-w-0">
                            <span className={`text-sm md:text-lg font-bold transition-colors truncate
                                ${showBackground ? 'text-gray-800' : 'text-white'}`}>
                                DELTA OMICRON ZETA
                            </span>
                            <span className={`text-xs md:text-base transition-colors truncate
                                ${showBackground ? 'text-gray-700' : 'text-white/80'}`}>
                                ALPHA CHAPTER
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navigationLinks.map((link) => (
                            link.isButton ? (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="group relative px-6 py-3 overflow-hidden rounded-lg"
                                >
                                    <div className="absolute inset-0 w-full h-full transition-all duration-300 
                                                  bg-emerald-600 group-hover:bg-emerald-700" />
                                    <span className="relative text-white font-medium">{link.name}</span>
                                </Link>
                            ) : (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    isScrolled={showBackground}
                                    isActive={location.pathname === link.path}
                                >
                                    {link.name}
                                </NavLink>
                            )
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden flex-shrink-0 ml-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-800" />
                        ) : (
                            <Menu className={`w-6 h-6 ${showBackground ? 'text-gray-800' : 'text-white'}`} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg
                    transition-all duration-300 ease-in-out origin-top
                    ${isMobileMenuOpen ? 'transform scale-y-100 opacity-100' : 'transform scale-y-0 opacity-0'}`}>
                    <div className="container mx-auto px-4 py-6 space-y-4">
                        {navigationLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`block py-2 transition-colors ${link.isButton
                                    ? 'bg-emerald-600 text-white py-3 rounded-lg font-medium text-center hover:bg-emerald-700'
                                    : 'text-gray-800 hover:text-emerald-600'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

//navlink component will remain the same
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