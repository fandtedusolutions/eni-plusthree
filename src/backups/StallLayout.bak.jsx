import React from 'react';
import { motion } from 'framer-motion';

const StallLayout = () => {
    const stalls = [
        // Column 1: Left Outer (Facing Right Path)
        { col: 1, type: 'stall', num: 1, doorSide: 'right' },
        { col: 1, type: 'stall', num: 2, doorSide: 'right' },
        { col: 1, type: 'stall', num: 3, doorSide: 'right' },
        { col: 1, type: 'reserved', text: 'BOOKED', num: 4, doorSide: 'right' },
        { col: 1, type: 'stall', num: 5, doorSide: 'right' },
        { col: 1, type: 'stall', num: 6, doorSide: 'right' },
        { col: 1, type: 'stall', num: 7, doorSide: 'right' },
        
        // Column 2: Left Aisle
        { col: 2, type: 'aisle', labelIn: 'ENTRY', labelOut: 'EXIT', arrows: '↑', reverse: false },
        
        // Column 3: Center-Left (Facing Left Path)
        { col: 3, type: 'stall', num: 8, doorSide: 'left' },
        { col: 3, type: 'stall', num: 9, doorSide: 'left' },
        { col: 3, type: 'stall', num: 10, doorSide: 'left' },
        { col: 3, type: 'stall', num: 11, doorSide: 'left' },
        { col: 3, type: 'stall', num: 12, doorSide: 'left' },
        { col: 3, type: 'stall', num: 13, doorSide: 'left' },
        { col: 3, type: 'reserved', text: 'BOOKED', num: 14, doorSide: 'left' },
        
        // Column 4: Center-Right (Facing Right Path)
        { col: 4, type: 'stall', num: 15, doorSide: 'right' },
        { col: 4, type: 'stall', num: 16, doorSide: 'right' },
        { col: 4, type: 'stall', num: 17, doorSide: 'right' },
        { col: 4, type: 'stall', num: 18, doorSide: 'right' },
        { col: 4, type: 'stall', num: 19, doorSide: 'right' },
        { col: 4, type: 'stall', num: 20, doorSide: 'right' },
        { col: 4, type: 'stall', num: 21, doorSide: 'right' },
        
        // Column 5: Right Aisle
        { col: 5, type: 'aisle', labelIn: 'ENTRY', labelOut: 'EXIT', arrows: '↓', reverse: true },
        
        // Column 6: Right Outer (Facing Left Path)
        { col: 6, type: 'stall', num: 22, doorSide: 'left' },
        { col: 6, type: 'reserved', text: 'BOOKED', num: 23, doorSide: 'left' },
        { col: 6, type: 'stall', num: 24, doorSide: 'left' },
        { col: 6, type: 'stall', num: 25, doorSide: 'left' },
        { col: 6, type: 'stall', num: 26, doorSide: 'left' },
        { col: 6, type: 'stall', num: 27, doorSide: 'left' },
        { col: 6, type: 'reserved', text: 'BOOKED', num: 28, doorSide: 'left' }
    ];



    // Helper to render columns
    const renderCol = (targetCol) => {
        const colItems = stalls.filter(s => s.col === targetCol);
        
        if (colItems[0].type === 'aisle') {
            const aisle = colItems[0];
            return (
                <div 
                    key={targetCol} 
                    className="aisle-col" 
                >
                    <div className="aisle-label">{aisle.reverse ? 'ENTRY' : 'EXIT'}</div>
                    <div className="aisle-arrows">
                        {[...Array(4)].map((_, i) => <span key={i} className="pulsing-arrow">{aisle.arrows}</span>)}
                    </div>
                    <div className="aisle-label">{aisle.reverse ? 'EXIT' : 'ENTRY'}</div>
                </div>
            );
        }

        return (
            <div key={targetCol} className="stall-col">
                {colItems.map((item, idx) => {
                    const textureClass = item.num % 2 === 0 ? 'slats' : 'fabric';
                    return (
                        <div key={idx} className={`stall-cell ${textureClass} ${item.type === 'reserved' ? 'reserved' : ''} door-${item.doorSide}`}>
                            <div className="stall-inner">
                                <span className="stall-num">{item.num}</span>
                                <div className="stall-door"></div>
                                <div className={`stall-table ${item.type === 'reserved' ? 'booked' : ''}`}></div>
                                {item.type === 'reserved' && (
                                    <div className="reserved-inner">
                                        <span className="reserved-text">{item.text}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <section id="stall-layout">
            <h2 
                style={{ textAlign: 'center', marginBottom: '20px' }} 
                className="gold-gradient"
            >
                STALL ILLUSTRATION CONCEPT
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--accent-grey)', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
                Strategic floor plan designed for maximum visitor engagement and smooth traffic flow.
            </p>
            
            <div 
                className="floor-plan-container"
            >
                <div className="floor-plan-inner" style={{ background: 'transparent', overflow: 'visible' }}>
                    {/* Premium 3D Flower Pots */}
                    <div className="flower-pot-3d left">
                        <div className="plant">🌻</div>
                        <div className="pot-body"></div>
                    </div>
                    <div className="flower-pot-3d right">
                        <div className="plant">🌻</div>
                        <div className="pot-body"></div>
                    </div>

                    <div className="stall-legend-dim">STALL SIZE: 3.5m × 3m</div>

                    {/* Entrance Testing Table */}
                    <div className="testing-table"></div>

                    <div 
                        className="arch-wrapper arch-3d"
                        style={{ 
                            transformStyle: 'preserve-3d', 
                            transformOrigin: 'center',
                            position: 'relative'
                        }}
                    >
                        <svg viewBox="0 0 560 200" className="arch-svg" xmlns="http://www.w3.org/2000/svg" style={{ position: 'relative', zIndex: 2 }}>
                            <defs>
                                <linearGradient id="plank-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: '#2b1d12' }} />
                                    <stop offset="50%" style={{ stopColor: '#4e342e' }} />
                                    <stop offset="100%" style={{ stopColor: '#2b1d12' }} />
                                </linearGradient>
                                <radialGradient id="arch-edge-shadow" cx="50%" cy="100%" r="100%">
                                    <stop offset="60%" style={{ stopColor: 'transparent' }} />
                                    <stop offset="100%" style={{ stopColor: 'rgba(0,0,0,0.4)' }} />
                                </radialGradient>
                                <pattern id="wood-pattern" patternUnits="userSpaceOnUse" width="16" height="200">
                                    <rect width="16" height="200" fill="url(#plank-grad)" />
                                    <line x1="0" y1="0" x2="0" y2="200" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            
                            {/* The Wood Path with 100% matching colors and lighting - Added Bleed */}
                            <path d="M 100 205 L 100 180 A 180 180 0 0 1 460 180 L 460 205 L 380 205 L 380 180 A 100 100 0 0 0 180 180 L 180 205 Z" fill="url(#wood-pattern)" />
                            <path d="M 100 205 L 100 180 A 180 180 0 0 1 460 180 L 460 205 L 380 205 L 380 180 A 100 100 0 0 0 180 180 L 180 205 Z" fill="url(#arch-edge-shadow)" opacity="0.6" />

                            <path d="M 100 198.5 L 100 180 A 180 180 0 0 1 460 180 L 460 198.5" fill="none" stroke="#d4af37" strokeWidth="6" />
                            <path d="M 180 198.5 L 180 180 A 100 100 0 0 1 380 180 L 380 198.5" fill="none" stroke="#d4af37" strokeWidth="4" />
                            <path d="M 140 198.5 L 140 180 A 140 140 0 0 1 420 180 L 420 198.5" fill="none" stroke="#FAE562" strokeWidth="3" className="flow-path" />
                            
                            <path id="arch-path-guide" d="M 140 200 L 140 180 A 140 140 0 0 1 420 180 L 420 200" fill="none" />
                            <text fill="#FAE562" fontSize="22" fontWeight="900" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                                <textPath href="#arch-path-guide" startOffset="25%" dominantBaseline="middle" textAnchor="middle">➤</textPath>
                            </text>
                            <text fill="#FAE562" fontSize="22" fontWeight="900" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                                <textPath href="#arch-path-guide" startOffset="50%" dominantBaseline="middle" textAnchor="middle">➤</textPath>
                            </text>
                            <text fill="#FAE562" fontSize="22" fontWeight="900" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                                <textPath href="#arch-path-guide" startOffset="75%" dominantBaseline="middle" textAnchor="middle">➤</textPath>
                            </text>
                        </svg>
                    </div>

                    <div className="floor-grid" style={{ marginTop: '-6px', position: 'relative', zIndex: 5 }}>
                        {[1, 2, 3, 4, 5, 6].map(col => renderCol(col))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StallLayout;
