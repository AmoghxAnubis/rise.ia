import { useState, useEffect, useRef } from 'react';
import './Portfolio.css';

const portfolioData = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        category: 'Web Development',
        description: 'Modern e-commerce solution with seamless checkout experience',
        color: 'purple'
    },
    {
        id: 2,
        title: 'Brand Identity',
        category: 'Branding',
        description: 'Complete brand redesign for a tech startup',
        color: 'magenta'
    },
    {
        id: 3,
        title: 'Product Launch Video',
        category: 'Motion & Media',
        description: 'Cinematic product reveal with 3D animations',
        color: 'purple'
    },
    {
        id: 4,
        title: 'SaaS Dashboard',
        category: 'Web Development',
        description: 'Intuitive analytics dashboard for data visualization',
        color: 'magenta'
    },
    {
        id: 5,
        title: 'Social Campaign',
        category: 'Marketing',
        description: 'Viral social media campaign reaching 2M+ users',
        color: 'purple'
    },
    {
        id: 6,
        title: 'Motion Graphics',
        category: 'Motion & Media',
        description: 'Animated explainer video series',
        color: 'magenta'
    }
];

const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    const sectionRef = useRef(null);

    const categories = ['all', 'Web Development', 'Branding', 'Marketing', 'Motion & Media'];

    const filteredProjects = filter === 'all'
        ? portfolioData
        : portfolioData.filter(project => project.category === filter);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const items = entry.target.querySelectorAll('.portfolio-item');
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add('visible');
                            }, index * 100);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [filter]);

    return (
        <section id="portfolio" className="portfolio section" ref={sectionRef}>
            <div className="container">
                <div className="portfolio-header">
                    <h2 className="section-title">
                        Our <span className="gradient-text">Portfolio</span>
                    </h2>
                    <p className="section-subtitle">
                        Showcasing our finest work across various industries
                    </p>
                </div>

                <div className="portfolio-filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${filter === category ? 'active' : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className={`portfolio-item glass-card ${project.color}`}>
                            <div className="portfolio-content">
                                <span className="portfolio-category">{project.category}</span>
                                <h3 className="portfolio-title">{project.title}</h3>
                                <p className="portfolio-description">{project.description}</p>
                                <button className="portfolio-link">
                                    View Project →
                                </button>
                            </div>
                            <div className="portfolio-overlay"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
