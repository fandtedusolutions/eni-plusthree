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
                    <div style={{ marginBottom: '15px', fontSize: '1.3rem', fontWeight: '800', letterSpacing: '1px' }} className="gold-gradient">SAPPHIRE TIER</div>
                    <span className="price gold-gradient">₹1,00,000</span>
                    <ul className="features-list">
                        <li>1 Promotion Videos</li>
                        <li>Unlimited Posters - 1 Months</li>
                        <li>Live Stall Setup</li>
                        <li>Qualified Leads</li>
                        <li>Stall Amenities</li>
                    </ul>
                    <div className="news-support">
                        <strong>News Support - Mathrubhumi daily Malappuram</strong>
                        <p>Once for a year</p>
                    </div>
                </motion.div>

                {/* Ruby (Featured) */}
                <motion.div 
                    className={`pricing-card ${selectedTier === 'ruby' ? 'featured' : ''}`}
                    variants={cardVariants}
                    onClick={() => setSelectedTier('ruby')}
                    style={{ cursor: 'pointer' }}
                >
                    <div style={{ marginBottom: '15px', fontSize: '1.3rem', fontWeight: '800', letterSpacing: '1px' }} className="gold-gradient">RUBY TIER</div>
                    
                    <span className="price gold-gradient">₹3,00,000</span>
                    <ul className="features-list">
                        <li>3 Promotion Videos</li>
                        <li>1 Cinematic Ad Direction (4K)</li>
                        <li>LED Wall Display Promotion</li>
                        <li>Local SEO</li>
                        <li>Sales Team Training - 2 Months</li>
                        <li>Unlimited Posters - 3 Months</li>
                        <li>100K+ Influencer Promotion</li>
                        <li>Live Stall Setup</li>
                        <li>5 Min On-Stage Presentation</li>
                        <li>Qualified Leads</li>
                        <li>Stall Amenities</li>
                    </ul>
                    <div className="news-support">
                        <strong>News Support - Mathrubhumi daily Malappuram</strong>
                        <p>Once for a year</p>
                    </div>
                </motion.div>

                {/* Emerald */}
                <motion.div 
                    className={`pricing-card ${selectedTier === 'emerald' ? 'featured' : ''}`}
                    variants={cardVariants}
                    onClick={() => setSelectedTier('emerald')}
                    style={{ cursor: 'pointer' }}
                >
                    <div style={{ marginBottom: '15px', fontSize: '1.3rem', fontWeight: '800', letterSpacing: '1px' }} className="gold-gradient">EMERALD TIER</div>
                    <span className="price gold-gradient">₹2,00,000</span>
                    <ul className="features-list">
                        <li>2 Promotion Videos</li>
                        <li>Local SEO</li>
                        <li>Sales Team Training - 1 Months</li>
                        <li>Unlimited Posters - 2 Months</li>
                        <li>50K+ Influencer Promotion</li>
                        <li>Live Stall Setup</li>
                        <li>Qualified Leads</li>
                        <li>Stall Amenities</li>
                    </ul>
                    <div className="news-support">
                        <strong>News Support - Mathrubhumi daily Malappuram</strong>
                        <p>Once for a year</p>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div 
                style={{ textAlign: 'center', marginTop: '60px', color: 'var(--accent-grey)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Target Audience. Age Limit 17 - 25
            </motion.div>
        </section>
    );
};

export default Packages;
