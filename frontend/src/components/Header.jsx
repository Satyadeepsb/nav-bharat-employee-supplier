import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const navigation = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Certificates', path: '/certificates' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Team', path: '/team' },
        { name: 'Contact', path: '/contact' }
    ];

    const isActivePath = (nav) => {
        if (nav.name === 'Home' && location.pathname === '/') {
            return true;
        }
        return location.pathname === nav.path;
    };

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
        }`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/logo.png" style={{ height: '65px' }} />
                        <span className="text-xl font-bold text-gray-900">
                            {import.meta.env.VITE_COMPANY_NAME}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`transition-colors duration-200 font-medium ${
                                    isActivePath(item)
                                        ? 'text-primary-600 border-b-2 border-primary-600'
                                        : 'text-gray-700 hover:text-primary-600'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-primary-600 transition-colors"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`block px-3 py-2 rounded-md transition-colors ${
                                        isActivePath(item)
                                            ? 'text-primary-600 bg-primary-50'
                                            : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="block w-full mt-2 bg-primary-600 text-white px-3 py-2 rounded-md hover:bg-primary-700 transition-colors text-center"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;