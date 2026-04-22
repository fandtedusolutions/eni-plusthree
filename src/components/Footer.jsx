import React from 'react';
import natdemyLogo from '../assets/natdemy_logo.png';
import mathrabumiLogo from '../assets/mathrabumi.png';

const Footer = () => {
    return (
        <footer>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
                <img src={natdemyLogo} alt="Natdemy" style={{ height: '70px', filter: 'brightness(0) invert(1)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', opacity: 0.7 }}>
                    <span style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>MEDIA PARTNER</span>
                    <img src={mathrabumiLogo} alt="Mathrabhumi" style={{ height: '45px', filter: 'brightness(0) invert(1)' }} />
                </div>
                <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '20px' }}>&copy; 2026 Natdemy. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
