import React from 'react';
import { Target, Users, Award, Clock, BadgeCheck } from 'lucide-react';

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

    const whyChooseUs = {
        'Verified & Experienced Drivers' : 'Every driver is carefully vetted through background checks, license verification, and physical fitness screening. Most of our drivers bring years of hands-on experience in government and logistics transport.',
        'PAN-India Reach': 'Be it metros, remote regions, or industrial hubs we have an active and ready network of drivers across India to meet your exact location needs.',
        'Government Contract Experts' : 'With proven experience of handling drivers for various government tenders, we understand compliance, documentation, and accountability inside out.',
        'Fast & Reliable Deployment' : 'Our dynamic database and workforce planning allow us to deploy qualified drivers on short notice without compromising on quality or readiness.',
        'Smart Driver Matching' : 'Using advanced technology, we ensure that each requirement is matched with the most suitable and skilled driver, saving you time and operational hassle.',
        'Complete Responsibility & Peace of Mind' : 'From recruitment to deployment, we take full ownership of the process, ensuring timely service, transparent communication, and dependable performance so you can focus on your operations worry-free.',
        '24x7 Support System' : 'Our dedicated support team is available around the clock to resolve issues, manage emergencies, and ensure smooth replacements whenever needed.'
    }

    const stats = [
        { value: '200+', label: 'Happy Clients' },
        { value: '2K+', label: 'Employees Placed' },
        { value: '98%', label: 'Success Rate' },
        { value: '24/7', label: 'Support' }
    ]

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        NES Vision
                    </h2>
                    <p className="text-lg text-gray-600">
                        To become India’s most trusted and scalable driver supply partner for government and enterprise transportation recognized for our quality, reliability, safety-first approach, and commitment to empowering skilled drivers through sustainable employment.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        About NES
                    </h2>
                    <p className="text-lg text-gray-600">
                        Navabharat is a leading provider of experienced, reliable, and verified truck and bus drivers for government contracts and logistics projects across India.
                    </p>
                    <p className="text-lg text-gray-600">
                        With a strong understanding of the transportation industry and the specific needs of public sector organizations, we serve as a vital link between skilled drivers and institutions seeking dependable workforce.
                    </p>
                    <p className="text-lg text-gray-600">
                        Whether it's heavy vehicle transport, long-haul logistics, or urban bus operations – we ensure quality, discipline, and on-time driver deployment you can count on.
                    </p>
                    <p className="text-lg text-gray-600">
                        From sourcing to delivery, we provide comprehensive services that optimise efficiency. Our expertise ensures that your supply chain is reliable, responsive, and ready to meet your needs.
                    </p>
                    <p className="text-lg text-gray-600">
                        We provide parcel transportation and door deliveries to our customers.
                    </p>
                    <p className="text-lg text-gray-600">
                        We operate at a proven and robust level of business processes & systems owing to our Enterprise Resource Planning (ERP) solution.
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
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Why Choose Us Section */}
                        <div className="mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Choose NES?</h2>
                            <ul className="space-y-8">
                                {Object.entries(whyChooseUs).map(([title, description], index) => (
                                    <li key={index} className="flex items-start gap-6">
                                        <BadgeCheck className="w-10 h-10 text-blue-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
                                            <p className="text-gray-600 leading-relaxed">{description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index * 3} className="bg-white p-6 rounded-lg shadow-sm">
                                    <div key={index} className="text-center">
                                        <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                                        <div className="text-gray-600 font-medium">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;