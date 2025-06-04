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

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            window.location.href = `/#${sectionId}`;
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const navigation = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Services', id: 'services' },
        { name: 'Certificates', id: 'certificates' },
        { name: 'Team', id: 'team' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
        }`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <Users className="h-8 w-8 text-primary-600" />
                        <span className="text-xl font-bold text-gray-900">
              EmployeeSupplier
            </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.id)}
                                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                            >
                                {item.name}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                        >
                            Get Started
                        </button>
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
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.id)}
                                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                                >
                                    {item.name}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="w-full mt-2 bg-primary-600 text-white px-3 py-2 rounded-md hover:bg-primary-700 transition-colors"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
