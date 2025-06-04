import React from 'react';
import { Target, Users, Award, Clock } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: Target,
            title: 'Targeted Solutions',
            description: 'We understand your specific needs and match you with employees who fit your company culture and requirements.'
        },
        {
            icon: Users,
            title: 'Extensive Network',
            description: 'Access to a vast pool of qualified professionals across various industries and skill levels.'
        },
        {
            icon: Award,
            title: 'Quality Assurance',
            description: 'Rigorous screening process ensures you get only the best candidates for your organization.'
        },
        {
            icon: Clock,
            title: 'Fast Deployment',
            description: 'Quick turnaround times to get your team up and running without delays.'
        }
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        About Our Employee Supplier Services
                    </h2>
                    <p className="text-lg text-gray-600">
                        With years of experience in talent acquisition and workforce management,
                        we've helped hundreds of businesses find the right employees to drive their success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center group">
                            <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
                                <feature.icon className="h-8 w-8 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Why Choose Us?
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'Industry expertise across multiple sectors',
                                    'Comprehensive background checks and verification',
                                    'Flexible employment solutions',
                                    'Dedicated account management',
                                    'Competitive pricing with transparent costs'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-center">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                                    <div className="text-gray-600">Happy Clients</div>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <div className="text-3xl font-bold text-primary-600 mb-2">5K+</div>
                                    <div className="text-gray-600">Employees Placed</div>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                                    <div className="text-gray-600">Success Rate</div>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                                    <div className="text-gray-600">Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;