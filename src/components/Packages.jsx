import React from 'react';
import { motion } from 'framer-motion';

const Packages = () => {
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
                <motion.div className="pricing-card" variants={cardVariants}>
                    <h3>Sapphire Tier</h3>
                    <span className="price gold-gradient">₹1,00,000</span>
                    <ul className="features-list">
                        <li>Led promotion</li>
                        <li>Needed aminities provided</li>
                        <li>Qualified lead will be provided</li>
                        <li>1 month Digital marketing service</li>
                        <li>Brand promotion</li>
                    </ul>
                </motion.div>

                {/* Ruby (Featured) */}
                <motion.div className="pricing-card featured" variants={cardVariants}>
                    <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--gold-primary)', color: '#000', padding: '5px 15px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: '900' }}>BEST VALUE</div>
                    <h3>Ruby Tier</h3>
                    <span className="price gold-gradient">₹2,00,000</span>
                    <ul className="features-list">
                        <li>Led promotion</li>
                        <li>Stall live</li>
                        <li>Requested aminities provided</li>
                        <li>Qualified lead will be provided</li>
                        <li>10 min for on-stage representation</li>
                        <li>3 months Digital marketing services</li>
                        <li>Brand promotion</li>
                    </ul>
                </motion.div>

                {/* Emerald */}
                <motion.div className="pricing-card" variants={cardVariants}>
                    <h3>Emerald Tier</h3>
                    <span className="price gold-gradient">₹1,50,000</span>
                    <ul className="features-list">
                        <li>Led promotion</li>
                        <li>Needed aminities provided</li>
                        <li>Qualified lead will be provided</li>
                        <li>5 min for on-stage representation</li>
                        <li>2 months Digital marketing services</li>
                        <li>Brand promotion</li>
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Packages;
