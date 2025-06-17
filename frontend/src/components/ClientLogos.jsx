import React from 'react';

const ClientLogos = () => {
    // Sample client logos - replace these with actual client logo URLs
    const clientLogos = [
        {
            name: 'TechCorp Solutions',
            logo: 'https://www.ashokleyland.com/pwa/img/FE/Ashok-Leyland-Brand-Logo.svg'
        },
        {
            name: 'Global Manufacturing',
            logo: 'https://www.jsw.in/sites/all/themes/jsw_theme/images/logos/jsw-energy.jpeg'
        },
        {
            name: 'Digital Dynamics',
            logo: 'https://rajeshmotors.com/resources/img/logo.png'
        },
        {
            name: 'Healthcare Solutions',
            logo: 'https://www.jsw.in/sites/all/themes/jsw_theme/images/logos/jsw-energy.jpeg'
        },
        {
            name: 'Creative Studios',
            logo: 'https://www.ashokleyland.com/pwa/img/FE/Ashok-Leyland-Brand-Logo.svg'
        },
        {
            name: 'Construction Plus',
            logo: 'https://rajeshmotors.com/resources/img/logo.png'
        },
        {
            name: 'Financial Partners',
            logo: 'https://www.ashokleyland.com/pwa/img/FE/Ashok-Leyland-Brand-Logo.svg'
        },
        {
            name: 'Retail Innovations',
            logo: 'https://www.jsw.in/sites/all/themes/jsw_theme/images/logos/jsw-energy.jpeg'
        },
        {
            name: 'Energy Dynamics',
            logo: 'https://rajeshmotors.com/resources/img/logo.png'
        },
        {
            name: 'Media Group',
            logo: 'https://www.jsw.in/sites/all/themes/jsw_theme/images/logos/jsw-energy.jpeg'
        },
        {
            name: 'Logistics Pro',
            logo: 'https://www.ashokleyland.com/pwa/img/FE/Ashok-Leyland-Brand-Logo.svg'
        },
        {
            name: 'Education First',
            logo: 'https://rajeshmotors.com/resources/img/logo.png'
        }
    ];

    // Duplicate the logos array to create seamless loop
    const duplicatedLogos = [...clientLogos, ...clientLogos];

    return (
        <section className="py-12 bg-gray-50 border-y border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <p className="text-gray-600">
                        We've successfully partnered with companies across various industries
                    </p>
                </div>

                <div className="relative overflow-hidden">
                    {/* Gradient overlays for smooth fade effect */}
                    <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

                    {/* Scrolling container */}
                    <div className="flex animate-scroll">
                        {duplicatedLogos.map((client, index) => (
                            <div
                                key={`${client.name}-${index}`}
                                className="flex-shrink-0 mx-8 flex items-center justify-center"
                                style={{ minWidth: '160px' }}
                            >
                                <img
                                    src={client.logo}
                                    alt={`${client.name} logo`}
                                    className="h-12 w-auto max-w-[160px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500">
                        Join over 200+ companies that trust us with their staffing needs
                    </p>
                </div>
                <div className="text-center mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        Trusted by Industry Leaders
                    </h2>
                </div>
            </div>

        <style jsx="true">{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}
        </style>

        </section>
    );
};

export default ClientLogos;