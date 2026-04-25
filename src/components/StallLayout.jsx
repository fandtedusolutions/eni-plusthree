import React from 'react';
import { motion } from 'framer-motion';

const StallLayout = () => {
    const stalls = [
        // Column 1: Left Outer
        { col: 1, type: 'stall', num: 1, dims: true },
        { col: 1, type: 'stall', num: 2, dims: true },
        { col: 1, type: 'stall', num: 3, dims: true },
        { col: 1, type: 'reserved', num: 4, text: 'BOOKED' },
        { col: 1, type: 'stall', num: 5, dims: true },
        { col: 1, type: 'stall', num: 6, dims: true },
        { col: 1, type: 'stall', num: 7, dims: true },

        // Column 2: Left Aisle
        { col: 2, type: 'aisle', labelIn: 'ENTRY', labelOut: 'EXIT', arrows: '↑' },

        // Column 3: Center-Left
        { col: 3, type: 'stall', num: 8, dims: true },
        { col: 3, type: 'stall', num: 9, dims: true },
        { col: 3, type: 'stall', num: 10, dims: true },
        { col: 3, type: 'stall', num: 11, dims: true },
        { col: 3, type: 'stall', num: 12, dims: true },
        { col: 3, type: 'stall', num: 13, dims: true },
        { col: 3, type: 'reserved', num: 14, text: 'BOOKED' },

        // Column 4: Center-Right
        { col: 4, type: 'blank' },
        { col: 4, type: 'stall', num: 15, dims: true },
        { col: 4, type: 'stall', num: 16, dims: true },
        { col: 4, type: 'stall', num: 17, dims: true },
        { col: 4, type: 'stall', num: 18, dims: true },
        { col: 4, type: 'stall', num: 19, dims: true },
        { col: 4, type: 'stall', num: 20, dims: true },

        // Column 5: Right Aisle
        { col: 5, type: 'aisle', labelIn: 'ENTRY', labelOut: 'EXIT', arrows: '↓', reverse: true },

        // Column 6: Right Outer
        { col: 6, type: 'stall', num: 21, dims: true },
        { col: 6, type: 'reserved', num: 22, text: 'BOOKED' },
        { col: 6, type: 'stall', num: 23, dims: true },
        { col: 6, type: 'stall', num: 24, dims: true },
        { col: 6, type: 'stall', num: 25, dims: true },
        { col: 6, type: 'stall', num: 26, dims: true },
        { col: 6, type: 'reserved', num: 27, text: 'BOOKED' }
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
                delayChildren: 0.1
            }
        }
    };

    const aisleVariants = {
        hidden: { opacity: 0, scaleY: 0 },
        visible: {
            opacity: 1,
            scaleY: 1,
            transition: { duration: 0.8, ease: "circOut" }
        }
    };

    // Helper to render columns
    const renderCol = (targetCol) => {
        const colItems = stalls.filter(s => s.col === targetCol);

        if (colItems[0].type === 'aisle') {
            const aisle = colItems[0];
            return (
                <motion.div
                    key={targetCol}
                    className="aisle-col"
                    variants={aisleVariants}
                >
                    <div className="aisle-label-top">{aisle.reverse ? 'ENTRY' : 'EXIT'}</div>
                    <div className={`aisle-arrows ${aisle.reverse ? 'down-arrows' : ''}`} style={{ color: 'rgba(0,0,0,0.4)', fontWeight: 'bold' }}>
                        {[...Array(5)].map((_, i) => <span key={i}>{aisle.arrows}</span>)}
                    </div>
                    <div className="aisle-label-bottom">{aisle.reverse ? 'EXIT' : 'ENTRY'}</div>
                </motion.div>
            );
        }

        return (
            <div key={targetCol} className="stall-col">
                {colItems.map((item, idx) => (
                    <div
                        key={idx}
                        className={`stall-cell ${item.type === 'reserved' ? 'reserved' : ''} ${item.type === 'blank' ? 'blank-cell' : ''}`}
                    >
                        <div className="stall-inner">
                            {item.type === 'stall' ? (
                                <>
                                    <span className="stall-num">{item.num}</span>
                                    <div className="stall-dims">3.5m × 3m</div>
                                </>
                            ) : item.type === 'reserved' ? (
                                <div className="reserved-inner">
                                    <span className="stall-num">{item.num}</span>
                                    <span className="reserved-text">RESERVED</span>
                                </div>
                            ) : item.type === 'blank' ? (
                                <div className="reserved-inner">
                                    <span className="nill-text">NILL</span>
                                </div>
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section id="stall-layout">
            <motion.h2
                style={{ textAlign: 'center', marginBottom: '20px' }}
                className="gold-gradient"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                STALL ILLUSTRATION CONCEPT
            </motion.h2>
            <p style={{ textAlign: 'center', color: 'var(--accent-grey)', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
                Strategic floor plan designed for maximum visitor engagement and smooth traffic flow.
            </p>

            <motion.div
                className="floor-plan-container"
            >
                <div className="floor-plan-inner" style={{ background: 'transparent', overflow: 'visible' }}>
                    <motion.div
                        className="arch-wrapper arch-3d"
                        style={{ transformStyle: 'preserve-3d', transformOrigin: 'center' }}
                    >
                        <svg viewBox="0 0 560 200" className="arch-svg" xmlns="http://www.w3.org/2000/svg">


                            <path d="M 100 198.5 L 100 180 A 180 180 0 0 1 460 180 L 460 198.5" fill="none" stroke="#71717a" strokeWidth="3" />
                            <path d="M 180 198.5 L 180 180 A 100 100 0 0 1 380 180 L 380 198.5" fill="none" stroke="#71717a" strokeWidth="3" />
                            <path d="M 140 198.5 L 140 180 A 140 140 0 0 1 420 180 L 420 198.5" fill="none" stroke="#71717a" strokeWidth="2.5" className="flow-path" />

                            <polygon points="0,-12 -8,8 8,8" fill="#ffffff" transform="translate(181, 81) rotate(45)" />
                            <polygon points="0,-12 -8,8 8,8" fill="#ffffff" transform="translate(320, 46) rotate(105)" />
                            <polygon points="0,-12 -8,8 8,8" fill="#ffffff" transform="translate(407, 120) rotate(155)" />
                        </svg>
                    </motion.div>

                    <div className="floor-grid">
                        {[1, 2, 3, 4, 5, 6].map(col => renderCol(col))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default StallLayout;
