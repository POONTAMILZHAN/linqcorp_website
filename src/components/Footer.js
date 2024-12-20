import React from 'react';
import '../CSS/Footer.css'; // Ensure this is the updated CSS for your footer
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import FontAwesome icons
import logo from '../images/logo.png';

function Footer() {
  // Function to handle smooth scrolling to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"  // Smooth scroll to the top
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <a href="#" onClick={scrollToTop}>
            <img src={logo} alt="LINQ Corporation Logo" className="footer-logo-img" />
          </a>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h4>Quick Links</h4>
          <a href="/" className="footer-link">Home</a>
          <a href="/about" className="footer-link">About</a>
          <a href="/our-offerings" className="footer-link">Services</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>

        {/* Address */}
        <div className="footer-address">
          <h4>Our Address</h4>
          <p>1234 Street Name, City, State, 56789</p>
          <p>Email: info@linqcorp.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 LINQ CORPORATION. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
