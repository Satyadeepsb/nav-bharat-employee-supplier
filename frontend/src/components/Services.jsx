import React from 'react';
import { Briefcase, UserCheck, Settings, HeadphonesIcon } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: Briefcase,
            title: 'Permanent Staffing',
            description: 'Find full-time employees who will grow with your company. We handle the entire recruitment process from sourcing to onboarding.',
            features: ['Executive search', 'Professional roles', 'Entry-level positions', 'Industry specialists']
        },
        {
            icon: UserCheck,
            title: 'Temporary Staffing',
            description: 'Flexible workforce solutions for short-term projects, seasonal demands, or cover for absent employees.',
            features: ['Project-based hiring', 'Seasonal workforce', 'Emergency coverage', 'Skill-specific roles']
        },
        {
            icon: Settings,
            title: 'Contract Staffing',
            description: 'Specialized professionals for specific projects or contract periods. Perfect for technical and consulting roles.',
            features: ['IT contractors', 'Consultants', 'Project managers', 'Technical specialists']
        },
        {
            icon: HeadphonesIcon,
            title: 'HR Consulting',
            description: 'Complete HR solutions including policy development, compliance, and workforce planning strategies.',
            features: ['HR policy development', 'Compliance audits', 'Workforce planning', 'Training programs']
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600">
                        Comprehensive employee supplier solutions tailored to meet your business needs,
                        from temporary staffing to permanent placements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary-50 p-3 rounded-lg">
                                    <service.icon className="h-6 w-6 text-primary-600" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-primary-600 text-white rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Find Your Perfect Team?
                        </h3>
                        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                            Let us handle your staffing needs so you can focus on growing your business.
                            Contact us today for a free consultation.
                        </p>
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Get Free Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;