import React from 'react';
import { motion } from 'framer-motion';
import ini3Logo from '../assets/ini+3.png';

const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-bg-wrapper">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Muthukad_Photo.jpg" 
                    alt="Gopinath Muthukad" 
                    className="hero-img" 
                />
                <div className="hero-gradient-overlay"></div>
            </div>
            
            <div className="hero-container">
                <motion.div 
                    className="hero-content-wrapper"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
                >
                    <div className="function-logo">
                        <img src={ini3Logo} alt="Ini+3 Name" />
                    </div>
                    <div className="malayalam-title gold-gradient">ഞങ്ങളും മിടുക്കരാണ്</div>
                    
                    <div className="hero-main-text">
                        <h1 className="gold-gradient">Be Part of <br /> Something Big</h1>
                        <p className="hero-details">
                            Connect With The Next Generation of Students. <br />
                            Showcase Your Brand. Generate Real Leads.
                        </p>
                        
                        <div className="chief-guest-badge">
                            <div className="guest-name">Gopinath Muthukad</div>
                            <div className="guest-title">CHIEF GUEST</div>
                        </div>
                    </div>

                    <div className="hero-event-info">
                        <span className="event-date">2026 MAY 16 • SATURDAY</span>
                        <span className="divider"></span> 
                        <span className="event-time">10:00 AM</span> <br />
                        <a 
                            href="https://www.google.com/maps/dir/?api=1&destination=PeeYem+Auditorium+Kottakkal+Kerala" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="event-location-link"
                        >
                            <span className="location-icon">📍</span> PeeYem Auditorium, Kottakkal
                        </a>
                    </div>
                </motion.div>
            </div>
            
            <div className="scroll-indicator">
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
