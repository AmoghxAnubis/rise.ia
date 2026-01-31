import { useEffect, useRef, useState } from 'react';
import './Services.css';

const servicesData = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Custom websites and web applications built with cutting-edge technologies. From responsive landing pages to complex enterprise solutions.',
        features: ['React & Next.js', 'E-commerce', 'Progressive Web Apps', 'API Integration'],
        icon: '🚀'
    },
    {
        id: 2,
        title: 'Marketing & Branding',
        description: 'Strategic brand identity and marketing campaigns that resonate with your audience and drive measurable results.',
        features: ['Brand Strategy', 'Digital Marketing', 'Social Media', 'Content Creation'],
        icon: '✨'
    },
    {
        id: 3,
        title: 'Motion & Media',
        description: 'Cinematic video editing and motion design that brings your story to life with stunning visual effects and animations.',
        features: ['Video Editing', 'Motion Graphics', '3D Animation', 'Visual Effects'],
        icon: '🎬'
    }
];

const Services = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.service-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('visible');
                            }, index * 150);
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="services section" ref={sectionRef}>
            <div className="container">
                <div className="services-header">
                    <h2 className="section-title">
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <p className="section-subtitle">
                        Comprehensive digital solutions tailored to elevate your brand
                    </p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service) => (
                        <div key={service.id} className="service-card glass-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, index) => (
                                    <li key={index}>
                                        <span className="feature-dot"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="service-hover-gradient"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
