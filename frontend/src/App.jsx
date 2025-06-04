import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './index.css';

function App() {
    return (
        <HelmetProvider>
            <Router>
                <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<Home section="about" />} />
                            <Route path="/services" element={<Home section="services" />} />
                            <Route path="/contact" element={<Home section="contact" />} />
                            <Route path="/team" element={<Home section="team" />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </HelmetProvider>
    );
}

export default App;