import React, { useEffect, useState } from 'react';
import '../CSS/Hero.css'; // Your styles
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import img7 from '../images/img7.png';
import img8 from '../images/img8.png';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Fixed positions for images (you can modify these as needed)
  const fixedPositions = [
    { left: '14%', top: '0%' },
    { left: '30%', top: '0%' },
    { left: '45%', top: '2%' },
    { left: '10%', top: '38%' },
    { left: '28%', top: '60%' },
    { left: '60%', top: '0%' },
    { left: '50%', top: '41%' },
    { left: '80%', top: '80%' },
  ];

  // Track the mouse position
  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    setMousePosition({ x, y });
  };

  // Adjust image movement based on mouse position
  const getMovement = () => {
    const moveX = (mousePosition.x - window.innerWidth / 2) * 0.05; // Image moves based on mouse X
    const moveY = (mousePosition.y - window.innerHeight / 2) * 0.05; // Image moves based on mouse Y
    return { transform: `translate3d(${moveX}px, ${moveY}px, 0)` };
  };

  return (
    <section className="hero" onMouseMove={handleMouseMove}>
      <div className="hero-layers">
        {fixedPositions.map((position, index) => (
          <div
            key={index}
            className={`hero-layer hero-layer${index + 1}`}
            style={{
              left: position.left, // Set fixed X position
              top: position.top, // Set fixed Y position
              transform: getMovement().transform, // Apply movement based on mouse position
            }}
          >
            <img
              src={[img1, img5, img8, img2, img4, img6, img7,][index]}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Hero Content Section */}
      <div className="hero-content">
        <h1>Digital Transformation for Your Business</h1>
        <p>Empowering businesses with technology and innovation. We turn ideas into results.</p>
        <a href="#services" className="cta-button">Explore Our Services</a>
      </div>
    </section>
  );
};

export default Hero;
