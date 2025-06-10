import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
    const scrollToContact = () => {
        window.history.pushState(null, '', '/contact');
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="pt-16 bg-gradient-to-br from-primary-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Find the Perfect
                        <span className="text-primary-600 block">Employees</span>
                        for Your Business
                    </h1>

                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        We connect businesses with top-tier talent through our comprehensive
                        employee supplier services. Quality, reliability, and excellence guaranteed.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <button
                            onClick={scrollToContact}
                            className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            Get Started Today
                            <ArrowRight className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                            className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200"
                        >
                            Learn More
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        {[
                            'Vetted Professionals',
                            'Quick Turnaround',
                            'Ongoing Support'
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-center justify-center gap-2 text-gray-700">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span className="font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;