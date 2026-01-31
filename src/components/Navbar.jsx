import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src="/logo.png" alt="rise.ia" className="logo-image" />
                    <span className="logo-text">rise.ia</span>
                </div>

                <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <a onClick={() => scrollToSection('hero')} className="navbar-link">Home</a>
                    <a onClick={() => scrollToSection('services')} className="navbar-link">Services</a>
                    <a onClick={() => scrollToSection('portfolio')} className="navbar-link">Portfolio</a>
                    <a onClick={() => scrollToSection('contact')} className="navbar-link">Contact</a>
                </div>

                <button
                    className="navbar-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
