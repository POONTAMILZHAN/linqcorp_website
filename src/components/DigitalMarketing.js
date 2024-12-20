import React, { useEffect, useState } from 'react';
import '../CSS/DigitalMarketing.css';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const DigitalMarketing = () => {

  const navigate = useNavigate(); // Initialize the navigate function
  const handleOrderNowClick = () => {
    // Navigate to the contact-us page
    navigate('/contact');
  };

  
  const [scrolling, setScrolling] = useState(false);

 

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="digital-marketing-container">
      {/* Hero Section */}
      <section className="digital-marketing-hero">
        <div className={`hero-overlay ${scrolling ? 'fadeIn' : ''}`}>
          <h1 className="hero-title">Digital Assets That Works</h1>
          <p className="hero-description">
            Strategic online marketing to promote your brand, convert leads, and grow your business.
          </p>
        </div>
      </section>

      {/* What is Digital Marketing Section */}
      <section className="what-is-digital-marketing">
        <div className="container">
          <h2>What is Digital Marketing?</h2>
          <p>
            Digital marketing is a strategic technique to promote brands online through targeted, measurable, and interactive marketing using digital technology. It helps businesses convert leads into customers and retain them. Digital marketing is ubiquitous — customers have access to information anytime, anywhere.
          </p>
          <div className="motion-image-container">
            <img
              className={`motion-image ${scrolling ? 'active' : ''}`}
              src="https://www.comunicare.es/wp-content/uploads/2021/02/marketing-y-redes-sociales-como-aplicarlo-y-principales-ejemplos.png"
              alt="Digital Marketing"
            />
          </div>
        </div>
      </section>

      {/* Digital Marketing Services Section */}
      <section className="services">
        <div className="container">
          <h2>Our Digital Marketing Services</h2>
          <div className="service-cards">
            <div className="service-card">
              <h3>SEO</h3>
              <p>Improve your website's visibility on search engines to attract more traffic.</p>
            </div>
            <div className="service-card">
              <h3>Social Media Marketing</h3>
              <p>Engage with your audience on social platforms to build brand awareness.</p>
            </div>
            <div className="service-card">
              <h3>Email Marketing</h3>
              <p>Reach your customers directly via email campaigns for conversions and retention.</p>
            </div>
            <div className="service-card">
              <h3>Content Marketing</h3>
              <p>Engage and inform your audience with valuable content to build trust and credibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Get Started with Digital Marketing Today!</h2>
          <button className="cta-btn"onClick={handleOrderNowClick}>Get in Touch</button>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
