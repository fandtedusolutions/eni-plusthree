import React from 'react';
import { motion } from 'framer-motion';

const StallLayout = () => {
    const stalls = [
        // Column 1: Left Outer
        { col: 1, type: 'stall', num: 1, dims: true },
        { col: 1, type: 'stall', num: 2, dims: true },
        { col: 1, type: 'stall', num: 3, dims: true },
        { col: 1, type: 'reserved', text: 'Reserved' },
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
        { col: 3, type: 'reserved', text: 'Reserved' },
        
        // Column 4: Center-Right
        { col: 4, type: 'stall', num: 14, dims: true },
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
        { col: 6, type: 'reserved', text: 'Reserved' },
        { col: 6, type: 'stall', num: 23, dims: true },
        { col: 6, type: 'stall', num: 24, dims: true },
        { col: 6, type: 'stall', num: 25, dims: true },
        { col: 6, type: 'stall', num: 26, dims: true },
        { col: 6, type: 'reserved', text: 'Reserved' }
    ];

    // Helper to render columns
    const renderCol = (targetCol) => {
        const colItems = stalls.filter(s => s.col === targetCol);
        
        if (colItems[0].type === 'aisle') {
            const aisle = colItems[0];
            return (
                <div key={targetCol} className="aisle-col">
                    <div className="aisle-label-top">{aisle.reverse ? 'ENTRY' : 'EXIT'}</div>
                    <div className={`aisle-arrows ${aisle.reverse ? 'down-arrows' : ''}`}>
                        {[...Array(7)].map((_, i) => <span key={i}>{aisle.arrows}</span>)}
                    </div>
                    <div className="aisle-label-bottom">{aisle.reverse ? 'EXIT' : 'ENTRY'}</div>
                </div>
            );
        }

        return (
            <div key={targetCol} className="stall-col">
                {colItems.map((item, idx) => (
                    <div key={idx} className={`stall-cell ${item.type === 'reserved' ? 'reserved' : ''}`}>
                        <div className={`stall-inner ${item.type === 'reserved' ? 'reserved-inner' : ''}`}>
                            {item.type === 'stall' ? (
                                <>
                                    <span className="stall-num">{item.num}</span>
                                    <div className="stall-dims">3.5m × 3m</div>
                                </>
                            ) : (
                                <span className="reserved-text">{item.text}</span>
                            )}
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                STALL ILLUSTRATION CONCEPT
            </motion.h2>
            <p style={{ textAlign: 'center', color: 'var(--accent-grey)', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
                Strategic floor plan designed for maximum visitor engagement and smooth traffic flow.
            </p>
            
            <motion.div 
                className="floor-plan-container"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            >
                <div className="floor-plan-inner">
                    <div className="arch-wrapper">
                        <svg viewBox="0 0 560 200" className="arch-svg" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1" y1="198.5" x2="100" y2="198.5" stroke="#1a1a1a" strokeWidth="3" />
                            <line x1="180" y1="198.5" x2="380" y2="198.5" stroke="#1a1a1a" strokeWidth="3" />
                            <line x1="460" y1="198.5" x2="559" y2="198.5" stroke="#1a1a1a" strokeWidth="3" />
                            
                            <path d="M 100 198.5 L 100 180 A 180 180 0 0 1 460 180 L 460 198.5" fill="none" stroke="#1a1a1a" strokeWidth="3" />
                            <path d="M 180 198.5 L 180 180 A 100 100 0 0 1 380 180 L 380 198.5" fill="none" stroke="#1a1a1a" strokeWidth="3" />
                            <path d="M 140 198.5 L 140 180 A 140 140 0 0 1 420 180 L 420 198.5" fill="none" stroke="#1a1a1a" strokeWidth="2.5" className="flow-path" />
                            
                            <polygon points="0,-12 -8,8 8,8" fill="#1a1a1a" transform="translate(181, 81) rotate(45)"/>
                            <polygon points="0,-12 -8,8 8,8" fill="#1a1a1a" transform="translate(320, 46) rotate(105)"/>
                            <polygon points="0,-12 -8,8 8,8" fill="#1a1a1a" transform="translate(407, 120) rotate(155)"/>
                        </svg>
                    </div>

                    <div className="floor-grid">
                        {[1, 2, 3, 4, 5, 6].map(col => renderCol(col))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StallLayout;
