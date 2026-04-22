import React, { useState, useEffect } from 'react';
import natdemyLogo from '../assets/natdemy_logo.png';
import mathrabumiLogo from '../assets/mathrabumi.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={scrolled ? 'nav-scrolled' : ''}>
            <div className="logo">
                <img src={natdemyLogo} alt="Natdemy Logo" style={{ height: '80px', filter: 'brightness(0) invert(1)' }} />
            </div>
            <div className="partner-logo" style={{ display: 'flex', alignItems: 'center', gap: '20px', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '20px' }}>
                <div style={{ color: '#888', fontSize: '0.7rem', letterSpacing: '1px', fontWeight: '700' }}>MEDIA<br />PARTNER</div>
                <img src={mathrabumiLogo} alt="Mathrabhumi Logo" style={{ height: '55px', filter: 'brightness(0) invert(1)' }} />
            </div>
        </nav>
    );
};

export default Navbar;
