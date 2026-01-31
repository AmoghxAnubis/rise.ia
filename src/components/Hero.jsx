import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="hero-grid-bg"></div>

            <div className="container hero-container">
                <div className={`hero-content ${isVisible ? 'fade-in-up' : ''}`}>
                    <div className="hero-label mono">
                        <span className="label-bracket">[</span>
                        <span className="label-text">DESIGN_AGENCY</span>
                        <span className="label-bracket">]</span>
                    </div>

                    <h1 className="hero-title">
                        RISE.IA
                        <br />
                        <span className="gradient-text">DESIGN & DEV</span>
                    </h1>

                    <div className="terminal-box">
                        <div className="terminal-header">
                            <span className="mono">~/projects/rise.ia</span>
                        </div>
                        <div className="terminal-content">
                            <p className="mono">
                                <span className="terminal-prompt">$</span> We craft premium digital experiences
                            </p>
                            <p className="mono">
                                <span className="terminal-prompt">$</span> Web development | Marketing | Motion design
                            </p>
                        </div>
                    </div>

                    <div className="hero-cta">
                        <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Start Project
                        </button>
                        <button className="btn btn-secondary" onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}>
                            View Work
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number mono">100+</span>
                            <span className="stat-label mono">Projects</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number mono">50+</span>
                            <span className="stat-label mono">Clients</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number mono">24/7</span>
                            <span className="stat-label mono">Support</span>
                        </div>
                    </div>
                </div>

                <div className="hero-accent">
                    <div className="accent-block accent-purple"></div>
                    <div className="accent-block accent-magenta"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
