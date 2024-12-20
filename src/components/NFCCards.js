import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../CSS/NFCCards.css'; // Import the related CSS file

function NFCCards() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleOrderNowClick = () => {
    // Navigate to the contact-us page
    navigate('/contact');
  };

  return (
    <div className="nfc-cards-container">
      {/* Hero Section */}
      <div className="nfc-cards-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">NFC Cards - Next Generation Technology</h1>
          <p className="hero-description">Discover the power of NFC cards for secure, seamless, and efficient digital transactions.</p>
        </div>
      </div>

      {/* General Information Section */}
      <section className="nfc-info">
        <h2>What Are NFC Cards?</h2>
        <p>
          Near Field Communication (NFC) cards enable secure, contactless transactions with just a tap. These cards
          are embedded with chips that store digital data, providing a fast, secure, and convenient method for various
          applications, including payments, access control, and more.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="nfc-benefits">
        <h2>Why Choose NFC Cards?</h2>
        <div className="benefit-grid">
          <div className="benefit-item">
            <h3>Security</h3>
            <p>High-level encryption ensures your transactions are secure and protected.</p>
          </div>
          <div className="benefit-item">
            <h3>Speed</h3>
            <p>Enjoy faster transactions with the touch of a card, no more waiting!</p>
          </div>
          <div className="benefit-item">
            <h3>Convenience</h3>
            <p>Effortless tap-and-go experience for payments, access control, and more.</p>
          </div>
        </div>
      </section>

      {/* Product Image Section */}

      <section className="nfc-product-images">
        <h2>Our NFC Cards</h2>
        <div className="image-gallery">
          <div className="image-item">
            <img src="https://d2j6dbq0eux0bg.cloudfront.net/images/35194528/3862399385.gif" alt="NFC Card 1" />
            
          </div>
          <div className="image-item">
            <img src="https://cdn.dribbble.com/users/722246/screenshots/6831312/koliseo_drb.gif" alt="NFC Card 2" />
            
          </div>
          <div className="image-item">
            <img src="https://cdn.shopify.com/s/files/1/0644/8395/0831/files/Scan.gif?v=1669809739" alt="NFC Card 3" />
            
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Get Started with NFC Cards Today</h2>
        <button className="cta-btn" onClick={handleOrderNowClick}>
          Order Now
        </button>
      </section>
    </div>
  );
}

export default NFCCards;
