import React from 'react';
import '../CSS/WebsiteCreation.css'; // Import the related CSS file
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function WebsiteCreation() {


  const navigate = useNavigate(); // Initialize the navigate function

  const handleOrderNowClick = () => {
    // Navigate to the contact-us page
    navigate('/contact');
  };
  return (
    <div className="website-creation-container">
      {/* Hero Section */}
      <div className="website-creation-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Custom Websites as Unique as Our Clients</h1>
          <p className="hero-description">
            We specialize in creating custom websites for businesses across diverse industries, combining innovation and creativity with functional design.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="website-introduction">
        <h2>Building Tailored Websites for Every Industry</h2>
        <p>
          We work with a diverse set of business professionals and specialize in creating custom websites that meet your unique needs. 
          Our team blends design with innovation to deliver exceptional user experiences.
        </p>
      </section>

      {/* Showcase of Websites Section */}
      <section className="website-showcase">
        <h2>Our Work - Websites Across Diverse Platforms</h2>
        <div className="website-gallery">
          <div className="website-item">
            <img src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-website-clipart-website-concept-with-computer-cartoon-vector-png-image_11092719.png" alt="Website 1" />
            <p>eCommerce platform for a leading retailer.</p>
          </div>
          <div className="website-item">
            <img src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-web-site-clipart-website-design-and-social-media-concept-cartoon-vector-png-image_12149963.png" alt="Website 2" />
            <p>Interactive portfolio for a creative agency.</p>
          </div>
          <div className="website-item">
            <img src="https://png.pngtree.com/png-vector/20230803/ourmid/pngtree-website-design-clipart-website-design-and-development-services-cartoon-vector-png-image_6868286.png" alt="Website 3" />
            <p>Corporate website with integrated services.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="website-about">
        <h2>We Bring the Future to Life</h2>
        <p>
          We are a full-service global marketing company that combines content, communication, and technical innovation to create transformative solutions. 
          We decode our client's needs into effective solutions that position their brand at the forefront of their industries.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="website-why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="reason-list">
          <div className="reason-item">
            <h3>Innovative Designs</h3>
            <p>Our creative team brings fresh, forward-thinking ideas to each project, ensuring a unique experience for every client.</p>
          </div>
          <div className="reason-item">
            <h3>Expert Developers</h3>
            <p>With deep technical expertise, we build websites that are not only stunning but also functional and secure.</p>
          </div>
          <div className="reason-item">
            <h3>End-to-End Services</h3>
            <p>From strategy to design, development to digital marketing, we provide a full range of services to ensure your success.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Build Your Custom Website?</h2>
        <button className="cta-btn" onClick={handleOrderNowClick} >Get Started</button>
      </section>
    </div>
  );
}

export default WebsiteCreation;
