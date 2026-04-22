import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Packages = () => {
    const [selectedTier, setSelectedTier] = useState('ruby');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }
        }
    };

    return (
        <section id="packages">
            <motion.h2 
                style={{ textAlign: 'center', marginBottom: '60px' }} 
                className="gold-gradient"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                STALL DETAILS
            </motion.h2>

            <motion.div 
                className="pricing-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Sapphire */}
                <motion.div 
                    className={`pricing-card ${selectedTier === 'sapphire' ? 'featured' : ''}`}
                    variants={cardVariants}
                    onClick={() => setSelectedTier('sapphire')}
                    style={{ cursor: 'pointer' }}
                >
                    <h3>Sapphire Tier</h3>
                    <span className="price gold-gradient">₹1,00,000</span>
                    <ul className="features-list">
                        <li>Led Promotion</li>
                        <li>All Required Amenities Provided</li>
                        <li>Qualified Lead Provided</li>
                        <li>Digital Marketing Services</li>
                        <li>Brand Promotion</li>
                    </ul>
                </motion.div>

                {/* Ruby (Featured) */}
                <motion.div 
                    className={`pricing-card ${selectedTier === 'ruby' ? 'featured' : ''}`}
                    variants={cardVariants}
                    onClick={() => setSelectedTier('ruby')}
                    style={{ cursor: 'pointer' }}
                >
                    {selectedTier === 'ruby' && (
                        <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--yellow-accent)', color: '#000', padding: '5px 15px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '900' }}>BEST VALUE</div>
                    )}
                    <h3>Ruby Tier</h3>
                    <span className="price gold-gradient">₹2,00,000</span>
                    <ul className="features-list">
                        <li>Led Wall Promotion</li>
                        <li>Live Stall Setup</li>
                        <li>All Required Amenities Provided</li>
                        <li>Qualified Lead Provided</li>
                        <li>10 Minutes On-Stage Presentation</li>
                        <li>Digital Marketing Services</li>
                        <li>Brand Promotion</li>
                    </ul>
                </motion.div>

                {/* Emerald */}
                <motion.div 
                    className={`pricing-card ${selectedTier === 'emerald' ? 'featured' : ''}`}
                    variants={cardVariants}
                    onClick={() => setSelectedTier('emerald')}
                    style={{ cursor: 'pointer' }}
                >
                    <h3>Emerald Tier</h3>
                    <span className="price gold-gradient">₹1,50,000</span>
                    <ul className="features-list">
                        <li>Led Wall Promotion</li>
                        <li>All Required Amenities Provided</li>
                        <li>Qualified Lead Provided</li>
                        <li>5 Minutes On-Stage Presentation</li>
                        <li>Digital Marketing Services</li>
                        <li>Brand Promotion</li>
                    </ul>
                </motion.div>
            </motion.div>

            <motion.div 
                style={{ textAlign: 'center', marginTop: '40px', color: 'var(--accent-grey)', fontWeight: '600', letterSpacing: '1px' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Target Audience. Age Limit 18 - 25
            </motion.div>
        </section>
    );
};

export default Packages;
