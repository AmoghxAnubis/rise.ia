import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', service: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="contact-header">
                    <h2 className="section-title">
                        Let's Create <span className="gradient-text">Together</span>
                    </h2>
                    <p className="section-subtitle">
                        Ready to elevate your digital presence? Get in touch with us today.
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card glass-card">
                            <div className="info-icon">📧</div>
                            <h3>Email Us</h3>
                            <p>hello@rise.ia</p>
                        </div>

                        <div className="info-card glass-card">
                            <div className="info-icon">💬</div>
                            <h3>Let's Talk</h3>
                            <p>Schedule a free consultation</p>
                        </div>

                        <div className="info-card glass-card">
                            <div className="info-icon">🌐</div>
                            <h3>Follow Us</h3>
                            <div className="social-links">
                                <a href="#" className="social-link">Twitter</a>
                                <a href="#" className="social-link">LinkedIn</a>
                                <a href="#" className="social-link">Instagram</a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form glass-card" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="service">Service Interested In</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a service</option>
                                <option value="web">Web Development</option>
                                <option value="marketing">Marketing & Branding</option>
                                <option value="motion">Motion & Media</option>
                                <option value="all">All Services</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Tell us about your project..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <h3 className="gradient-text">rise.ia</h3>
                            <p>Elevating digital experiences</p>
                        </div>
                        <div className="footer-copyright">
                            <p>&copy; 2026 rise.ia. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
