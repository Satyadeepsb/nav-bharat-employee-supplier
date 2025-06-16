import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselItems = [
        {
            title: 'Trust in every mile, us in every journey!',
            highlight: 'Not just drivers, but safety heroes!',
            subtitle: 'Safe journeys, our pledge!',
            description: '',
            image: '/images/slider/1.jpg'
        },
        {   title: 'Find the Perfect',
            highlight: 'Employees',
            subtitle: 'for Your Business',
            description: 'We connect businesses with top-tier talent through our comprehensive employee supplier services. Quality, reliability, and excellence guaranteed.',
            image: '/images/slider/2.jpg'
        },
        {
            title: 'Connect with Top',
            highlight: 'Talent',
            subtitle: 'Across Industries',
            description: 'Access a curated network of skilled professionals across multiple industries, all pre-vetted and ready to contribute to your success.',
            image: '/images/slider/3.jpg'
        },
        {
            title: 'Scale Your Team with',
            highlight: 'Experts',
            subtitle: 'Ready to Excel',
            description: 'Build your dream team with experienced professionals who bring specialized skills and proven track records to drive growth.',
            image: '/images/slider/4.jpg'
        },
        {
            title: 'Build Success with',
            highlight: 'Professionals',
            subtitle: 'Who Deliver Results',
            description: 'Partner with dedicated professionals who understand your vision and work tirelessly to help you achieve your business objectives.',
            image: '/images/slider/5.jpg'
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [carouselItems.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1);
    };

    const scrollToContact = () => {
        window.history.pushState(null, '', '/contact');
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="pt-16 relative min-h-screen overflow-hidden">
            {/* Carousel Container */}
            <div className="relative h-screen">
                {/* Background Images */}
                {carouselItems.map((item, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className="w-full h-full relative">
                            <img
                                src={item.image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover absolute inset-0"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        </div>
                    </div>
                ))}

                {/* Content Overlay */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        {/* Animated Text Content */}
                        <div
                            key={currentIndex}
                            className="animate-fadeIn"
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                {carouselItems[currentIndex].title}
                                <span className="text-blue-400 block">
                                    {carouselItems[currentIndex].highlight}
                                </span>
                                {carouselItems[currentIndex].subtitle}
                            </h1>

                            {/*<p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">*/}
                            {/*    {carouselItems[currentIndex].description}*/}
                            {/*</p>*/}
                        </div>

                        {/* Benefits */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                            {[
                                'Vetted Professionals',
                                'Quick Turnaround',
                                'Ongoing Support'
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-center justify-center gap-2 text-gray-200">
                                    <CheckCircle className="h-5 w-5 text-green-400" />
                                    <span className="font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                            <button
                                onClick={scrollToContact}
                                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Get Started Today
                                <ArrowRight className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Learn More
                            </button>
                        </div>


                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                    {carouselItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? 'bg-white scale-125'
                                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                        />
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20 z-20">
                    <div
                        className="h-full bg-blue-400 transition-all duration-300 ease-linear"
                        style={{ width: `${((currentIndex + 1) / carouselItems.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx="true">{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 1s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default Hero;