import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="container hero-container">
                <div className={`hero-content ${isVisible ? 'fade-in-up' : ''}`}>
                    <h1 className="hero-title">
                        Design & Development
                        <br />
                        <span className="gradient-text">Elevated</span>
                    </h1>
                    <p className="hero-subtitle">
                        We craft premium digital experiences that captivate, engage, and convert.
                        From stunning web development to powerful branding and cinematic motion design.
                    </p>
                    <div className="hero-cta">
                        <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Start Your Project
                        </button>
                        <button className="btn btn-secondary" onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}>
                            View Our Work
                        </button>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="scroll-mouse">
                        <div className="scroll-wheel"></div>
                    </div>
                    <span>Scroll to explore</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
