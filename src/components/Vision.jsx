import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
    return (
        <section id="vision">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
            >
                <div className="big-text gold-gradient">LET YOUR BRAND STAND WHERE FUTURE DECISIONS BEGIN</div>
                <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--accent-grey)', fontSize: '1.2rem' }}>
                    Join us for an extraordinary day of inspiration and technology. This is your chance to showcase your services to thousands of students and parents actively looking for educational excellence.
                </p>
            </motion.div>
        </section>
    );
};

export default Vision;
