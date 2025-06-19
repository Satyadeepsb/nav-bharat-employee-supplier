import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        // {
        //     name: 'Sarah Johnson',
        //     position: 'HR Director',
        //     company: 'TechCorp Solutions',
        //     image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        //     rating: 5,
        //     testimonial: 'EmployeeSupplier transformed our hiring process. They found us exceptional talent in record time. Their team understands our needs and consistently delivers quality candidates who fit our company culture perfectly.'
        // },
        // {
        //     name: 'Michael Chen',
        //     position: 'CEO',
        //     company: 'Digital Dynamics',
        //     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        //     rating: 5,
        //     testimonial: 'Working with EmployeeSupplier has been a game-changer for our startup. They helped us scale our team quickly without compromising on quality. Their expertise in tech recruitment is unmatched.'
        // },
        // {
        //     name: 'Emily Rodriguez',
        //     position: 'Operations Manager',
        //     company: 'Global Manufacturing Inc.',
        //     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        //     rating: 5,
        //     testimonial: 'The temporary staffing solutions provided by EmployeeSupplier helped us navigate our busy season seamlessly. Professional, reliable, and always responsive to our changing needs.'
        // },
        {
            name: 'Kuberdas Shah',
            position: 'Managing Director',
            company: 'Rajesh Motors',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            rating: 5,
            testimonial: 'During the period from 01/04/2018 to 31/03/2023, the firm “Navbharat Employee Suppliers” has provided us with an average of 75 heavy license-holding drivers per month on a contractual basis for M/s. Rajesh Motors (Maharashtra) Pvt. Ltd. The services provided by the said firm have been satisfactory and very well organized. During the mentioned period, they have supplied the required number of drivers consistently as per our demand and necessity.\n' +
                '\n' +
                'No disputes or issues have arisen with the said firm during the above period, hence this certificate is being issued as proof of their experience.'
        },
        {
            name: 'Lisa Park',
            position: 'VP of Human Resources',
            company: 'JSW',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
            rating: 5,
            testimonial: 'NES\'s staffing expertise is remarkable. They understand the compliance requirements and helped us find qualified professionals who made an immediate impact on our operations.'
        },
        {
            name: 'Robert Kim',
            position: 'Project Manager',
            company: 'Ashok Layland',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
            rating: 5,
            testimonial: 'Their staffing services are top-notch. We needed specialized drivers for a critical project, and they delivered exactly what we needed within our tight timeline and budget.'
        }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`h-4 w-4 ${
                    index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
            />
        ));
    };

    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        What NES Clients Say
                    </h2>
                    <p className="text-lg text-gray-600">
                        Don't just take our word for it. Here's what business leaders across various industries
                        have to say about our employee supplier services.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 relative">
                            <div className="absolute top-4 right-4 text-primary-100">
                                <Quote className="h-8 w-8 transform rotate-180" />
                            </div>

                            <div className="flex items-center mb-4">
                                {/*<img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />*/}
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                                    <p className="text-sm text-primary-600 font-medium">{testimonial.company}</p>
                                </div>
                            </div>

                            <div className="flex mb-4">
                                {renderStars(testimonial.rating)}
                            </div>

                            <p className="text-gray-700 text-sm leading-relaxed">
                                "{testimonial.testimonial}"
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="bg-primary-600 text-white rounded-xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-xl font-semibold mb-2">Join Our Happy Clients</h3>
                        <p className="text-primary-100 mb-4">
                            Ready to experience the same level of service? Let's discuss your staffing needs.
                        </p>
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Start Your Success Story
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;