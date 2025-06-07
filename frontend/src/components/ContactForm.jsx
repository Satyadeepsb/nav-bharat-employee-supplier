import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                credentials: 'include'
            });

            const data = await response.json();

            if (data.success) {
                setStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({
                    type: 'error',
                    message: data.message || 'Something went wrong. Please try again.'
                });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please check your connection and try again.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-600">
                        Ready to discuss your staffing needs? Contact us today and let's find the perfect solution for your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                Let's Start a Conversation
                            </h3>
                            <p className="text-gray-600 mb-8">
                                We're here to help you build the perfect team. Reach out to us through any of the following channels, and we'll respond within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary-50 p-3 rounded-lg">
                                    <Phone className="h-6 w-6 text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                                    <p className="text-gray-600">{import.meta.env.VITE_COMPANY_PHONE}</p>
                                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary-50 p-3 rounded-lg">
                                    <Mail className="h-6 w-6 text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                                    <p className="text-gray-600">{import.meta.env.VITE_COMPANY_EMAIL}</p>
                                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary-50 p-3 rounded-lg">
                                    <MapPin className="h-6 w-6 text-primary-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Office</h4>
                                    <p className="text-gray-600">
                                        {import.meta.env.VITE_COMPANY_ADDRESS1}<br />
                                        {import.meta.env.VITE_COMPANY_ADDRESS2}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary-50 p-6 rounded-lg">
                            <h4 className="font-semibold text-gray-900 mb-2">
                                Free Consultation Available
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Schedule a free 30-minute consultation to discuss your staffing needs and how we can help your business grow.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                    placeholder="your.email@company.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical"
                                    placeholder="Tell us about your staffing needs, company size, and any specific requirements..."
                                />
                            </div>

                            {status.message && (
                                <div className={`p-4 rounded-lg flex items-start gap-3 ${
                                    status.type === 'success'
                                        ? 'bg-green-50 text-green-800 border border-green-200'
                                        : 'bg-red-50 text-red-800 border border-red-200'
                                }`}>
                                    {status.type === 'success' ? (
                                        <CheckCircle className="h-5 w-5 mt-0.5" />
                                    ) : (
                                        <AlertCircle className="h-5 w-5 mt-0.5" />
                                    )}
                                    <span className="text-sm">{status.message}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="h-5 w-5" />
                                    </>
                                )}
                            </button>

                            <p className="text-xs text-gray-500 text-center">
                                By submitting this form, you agree to our privacy policy and terms of service.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;