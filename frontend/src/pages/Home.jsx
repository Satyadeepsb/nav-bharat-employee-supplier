import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import ContactForm from '../components/ContactForm';
import ClientLogos from "../components/ClientLogos.jsx";
import Certificates from "../components/Certificates.jsx";

const Home = ({ section }) => {
    useEffect(() => {
        if (section) {
            const element = document.getElementById(section);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        }
    }, [section]);

    return (
        <>
            <Helmet>
                <title>{import.meta.env.VITE_NAME}</title>
                <meta
                    name="description"
                    content="Find qualified employees for your business with our professional staffing services. Permanent, temporary, and contract staffing solutions across all industries. Get started today!"
                />
                <meta
                    name="keywords"
                    content="employee supplier, staffing services, temporary staffing, permanent staffing, contract staffing, HR consulting, workforce solutions, talent acquisition"
                />
                <meta name="author" content="EmployeeSupplier" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="EmployeeSupplier - Professional Staffing Services" />
                <meta property="og:description" content="Connect with qualified professionals through our comprehensive employee supplier services. Quality staffing solutions for businesses of all sizes." />
                <meta property="og:url" content="https://www.navbharatemployeesuppliers.com" />
                <meta property="og:image" content="https://www.navbharatemployeesuppliers.com/og-image.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="EmployeeSupplier - Professional Staffing Services" />
                <meta name="twitter:description" content="Find the perfect employees for your business with our comprehensive staffing solutions." />
                <meta name="twitter:image" content="https://www.navbharatemployeesuppliers.com/twitter-image.jpg" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "EmployeeSupplier",
                        "description": "Professional employee supplier and staffing services",
                        "url": "https://www.navbharatemployeesuppliers.com/",
                        "logo": "https://www.navbharatemployeesuppliers.com/logo.png",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+91 9021137437",
                            "contactType": "customer service",
                            "availableLanguage": "English"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "PRAVIRA SANKUL FLOOR NO. FF-3",
                            "addressLocality": "KADAMWADI, KOLHAPUR",
                            "addressRegion": "NY",
                            "postalCode": "416003",
                            "addressCountry": "IN"
                        },
                        "sameAs": [
                            "https://linkedin.com/company/employeesupplier",
                            "https://twitter.com/employeesupplier"
                        ]
                    })}
                </script>
            </Helmet>

            <Hero />
            <ClientLogos />
            <About />
            <Services />
            <Certificates />
            <Testimonials />
            <Team />
            <ContactForm />
        </>
    );
};

export default Home;