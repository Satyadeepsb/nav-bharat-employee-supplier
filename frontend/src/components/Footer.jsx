import React from 'react';
import { Users, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Users className="h-8 w-8 text-primary-400" />
                            <span className="text-xl font-bold">{import.meta.env.VITE_COMPANY_NAME}</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Your trusted partner in finding the right talent for your business.
                            We connect companies with qualified professionals across all industries.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'Home', id: 'home' },
                                { name: 'About Us', id: 'about' },
                                { name: 'Services', id: 'services' },
                                { name: 'Contact', id: 'contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>Permanent Staffing</li>
                            <li>Temporary Staffing</li>
                            <li>Contract Staffing</li>
                            <li>HR Consulting</li>
                            <li>Workforce Planning</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-2 text-gray-300">
                                <Phone className="h-4 w-4" />
                                <span>{import.meta.env.VITE_COMPANY_PHONE}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Mail className="h-4 w-4" />
                                <span>{import.meta.env.VITE_COMPANY_EMAIL}</span>
                            </div>
                            <div className="flex items-start gap-2 text-gray-300">
                                <MapPin className="h-4 w-4 mt-0.5" />
                                <span>{import.meta.env.VITE_COMPANY_ADDRESS1}<br />{import.meta.env.VITE_COMPANY_ADDRESS2}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} {import.meta.env.VITE_COMPANY_NAME}. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;