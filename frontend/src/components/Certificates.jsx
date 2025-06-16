import React, { useState } from 'react';
import { Award, Download, Eye, X, FileText, Shield, CheckCircle } from 'lucide-react';

const Certificates = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sample certificates data - replace with your actual certificate files
    const certificates = [
        {
            id: 1,
            title: 'Shop Act Licence',
            issuer: 'Government of Maharashtra',
            category: 'Shop Act',
            pdfUrl: '/certificates/shop-act-licence.pdf',
            thumbnail: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 2,
            title: 'Udyam Registration Certificate',
            issuer: 'Government of India - Ministry of Micro, Small and Medium Enterprises',
            category: 'Udyam',
            pdfUrl: '/certificates/udyam-registration-certificate.pdf',
            thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        }
    ];

    const categories = [...new Set(certificates.map(cert => cert.category))];

    const [activeCategory, setActiveCategory] = useState('All');

    const filteredCertificates = activeCategory === 'All'
        ? certificates
        : certificates.filter(cert => cert.category === activeCategory);

    const openModal = (certificate) => {
        setSelectedCertificate(certificate);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCertificate(null);
    };

    const downloadCertificate = (certificate) => {
        // Create a temporary link element for download
        const link = document.createElement('a');
        link.href = certificate.pdfUrl;
        link.download = `${certificate.title.replace(/[^a-z0-9]/gi, '-')}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const isExpiringSoon = (expiryDate) => {
        const expiry = new Date(expiryDate);
        const now = new Date();
        const sixMonthsFromNow = new Date(now.getTime() + (6 * 30 * 24 * 60 * 60 * 1000));
        return expiry <= sixMonthsFromNow && expiry > now;
    };

    const isExpired = (expiryDate) => {
        const expiry = new Date(expiryDate);
        const now = new Date();
        return expiry <= now;
    };

    return (
        <section id="certificates" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        NES Certifications & Credentials
                    </h2>
                    <p className="text-lg text-gray-600">
                        We maintain the highest standards of quality, compliance, and professionalism.
                        View our certifications that demonstrate our commitment to excellence.
                    </p>
                </div>


                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {filteredCertificates.map((certificate) => (
                        <div
                            key={certificate.id}
                            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={certificate.thumbnail}
                                    alt={certificate.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                                {/* Status Badge */}
                                <div className="absolute top-3 right-3">
                                    {isExpired(certificate.expiryDate) ? (
                                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Expired
                    </span>
                                    ) : isExpiringSoon(certificate.expiryDate) ? (
                                        <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Expiring Soon
                    </span>
                                    ) : (
                                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Valid
                    </span>
                                    )}
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-3 left-3">
                  <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {certificate.category}
                  </span>
                                </div>

                                {/* Overlay Actions */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => window.open(certificate.pdfUrl, '_blank')}
                                            className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                                            title="View Certificate"
                                        >
                                            <Eye className="h-4 w-4" />
                                        </button>
                                        <button
                                            onClick={() => downloadCertificate(certificate)}
                                            className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
                                            title="Download Certificate"
                                        >
                                            <Download className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-start gap-3 mb-3">
                                    <Award className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                            {certificate.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-2">
                                            {certificate.description}
                                        </p>
                                        <p className="text-sm text-primary-600 font-medium">
                                            {certificate.issuer}
                                        </p>
                                    </div>
                                </div>

                       {/*         <div className="space-y-2 text-sm text-gray-500">
                                    <div className="flex justify-between">
                                        <span>Issued:</span>
                                        <span>{new Date(certificate.issueDate).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Expires:</span>
                                        <span className={
                                            isExpired(certificate.expiryDate) ? 'text-red-500' :
                                                isExpiringSoon(certificate.expiryDate) ? 'text-yellow-600' : 'text-green-600'
                                        }>
                      {new Date(certificate.expiryDate).toLocaleDateString()}
                    </span>
                                    </div>
                                </div>*/}

                                <div className="flex gap-2 mt-4">
                                    <button
                                        onClick={() => window.open(certificate.pdfUrl, '_blank')}
                                        className="flex-1 bg-primary-50 text-primary-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-100 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Eye className="h-4 w-4" />
                                        View
                                    </button>
                                    <button
                                        onClick={() => downloadCertificate(certificate)}
                                        className="flex-1 bg-gray-50 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Download className="h-4 w-4" />
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Compliance Summary */}
                <div className="mt-16 bg-white rounded-2xl p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Compliance & Quality Assurance
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our certifications ensure that we meet the highest industry standards
                            and regulatory requirements for employee suppliers services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-green-600" />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                Security Compliant
                            </h4>
                            {/*<p className="text-gray-600 text-sm">
                                Certified with robust data protection measures
                            </p>*/}
                        </div>

                        <div className="text-center">
                            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="h-8 w-8 text-blue-600" />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                Quality Certified
                            </h4>
                           {/* <p className="text-gray-600 text-sm">
                                ISO 9001:2015 certified quality management systems
                            </p>*/}
                        </div>

                        <div className="text-center">
                            <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="h-8 w-8 text-purple-600" />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                Legally Compliant
                            </h4>
                            {/*<p className="text-gray-600 text-sm">
                                Full compliance with employment laws and regulations
                            </p>*/}
                        </div>
                    </div>
                </div>
            </div>

            {/* PDF Viewer Modal */}
            {isModalOpen && selectedCertificate && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {selectedCertificate.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {selectedCertificate.issuer}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => downloadCertificate(selectedCertificate)}
                                    className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors flex items-center gap-2"
                                >
                                    <Download className="h-4 w-4" />
                                    Download
                                </button>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <div className="flex-1 p-6">
                            <div className="bg-gray-100 rounded-lg h-full flex items-center justify-center">
                                {/* Note: In a real implementation, you would use a PDF viewer library like react-pdf */}
                                <div className="text-center">
                                    <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                                        PDF Viewer
                                    </h4>
                                    <p className="text-gray-600 mb-4">
                                        Certificate: {selectedCertificate.title}
                                    </p>
                                    <p className="text-sm text-gray-500 mb-4">
                                        In a production environment, this would display the actual PDF content
                                        using a library like react-pdf or PDF.js
                                    </p>
                                    <button
                                        onClick={() => downloadCertificate(selectedCertificate)}
                                        className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                                    >
                                        Download to View
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;