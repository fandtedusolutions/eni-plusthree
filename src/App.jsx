import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Packages from './components/Packages';
import StallLayout from './components/StallLayout';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">
      {/* Premium Cursor Glow */}
      <div 
        className="cursor-glow" 
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px` 
        }}
      ></div>

      {/* Cinematic Grain Overlay */}
      <div className="grain-overlay"></div>

      {/* Ambient Background Elements */}
      <div className="ambient-glow" style={{ top: '10%', right: '-50px' }}></div>
      <div className="ambient-glow" style={{ bottom: '20%', left: '-100px', animationDelay: '-5s' }}></div>
      <div className="ambient-glow" style={{ top: '50%', left: '50%', animationDelay: '-10s' }}></div>

      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Packages />
        <StallLayout />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
