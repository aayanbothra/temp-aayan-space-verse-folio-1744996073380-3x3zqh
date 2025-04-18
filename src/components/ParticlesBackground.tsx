
import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const numberOfParticles = 70;
    
    // Clear any existing particles
    container.innerHTML = '';
    
    // Create new particles
    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 3 + 1;
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Set particle styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      
      // Random opacity
      const opacity = Math.random() * 0.6 + 0.2;
      
      // Random color - stars/particles in space theme
      const colors = [
        `rgba(255, 255, 255, ${opacity})`,
        `rgba(199, 210, 254, ${opacity})`,
        `rgba(167, 139, 250, ${opacity})`,
        `rgba(245, 158, 11, ${opacity * 0.7})`,
      ];
      
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      // Random animation duration
      const duration = Math.random() * 40 + 15;
      particle.style.animationDuration = `${duration}s`;
      
      // Add random delay
      const delay = Math.random() * 40;
      particle.style.animationDelay = `-${delay}s`;
      
      container.appendChild(particle);
    }
    
    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="particles-container" />;
};

export default ParticlesBackground;
