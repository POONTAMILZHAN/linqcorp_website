import React, { useEffect, useState } from 'react';
import '../CSS/MagicCursor.css';

const MagicMouseEffect = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    const createParticle = (x, y) => {
      const particle = {
        id: Date.now() + Math.random(),
        x,
        y,
        size: 20, // Fixed size for the particle (20px diameter)
        color:'blue', // Fixed green color (RGB format)
        duration: 800, // Duration for the particle (800ms)
      };

      // Add the new particle to the state
      setParticles((prev) => [...prev, particle]);

      // Remove the particle from the state after its duration
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== particle.id));
      }, particle.duration);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="magic-cursor-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="magic-particle"
          style={{
            left: `${particle.x - particle.size / 2}px`, // Center the particle on the cursor
            top: `${particle.y - particle.size / 2}px`,
            width: `${particle.size}px`, // Fixed size
            height: `${particle.size}px`, // Fixed size
            backgroundColor: particle.color, // Green color for all particles
            animationDuration: `${particle.duration}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default MagicMouseEffect;
