import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact">
            <motion.div 
                className="contact-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="gold-gradient" style={{ marginBottom: '20px' }}>FOR BOOKING AND QUERIES</h2>
                <p style={{ margin: '20px 0', color: 'var(--accent-grey)' }}>BOOK YOUR STALL NOW</p>
                <div className="contact-numbers">
                    8129 811 884<br />
                    9207 666 745
                </div>
                <p style={{ marginTop: '30px', color: 'var(--accent-grey)', fontWeight: '600' }}>Limited slots available</p>
                <p style={{ marginTop: '30px', fontSize: '0.9rem', color: '#777', letterSpacing: '1.5px', fontWeight: '700' }}>
                    LET YOUR BRAND STAND WHERE FUTURE DECISIONS BEGIN
                </p>
            </motion.div>
        </section>
    );
};

export default Contact;
