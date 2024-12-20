import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';  // Import your CSS file
import logo from '../images/logo.png'; // Your logo path

function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrollingDirection, setScrollingDirection] = useState('up');
  const [prevScrollY, setPrevScrollY] = useState(0);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // Detect scroll direction (up or down)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setScrollingDirection('down');  // Scrolling down
      } else {
        setScrollingDirection('up');  // Scrolling up
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  return (
    <header className={`header ${scrollingDirection === 'down' ? 'header-hidden' : ''}`}>
      <div className="logo">
        <Link to="/" onClick={scrollToTop}>
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
      </div>

      {/* Hamburger Icon for mobile */}
      <div className={`hamburger ${hamburgerOpen ? 'active' : ''}`} onClick={toggleHamburger}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link" onClick={scrollToTop}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={scrollToTop}>About</Link>
          </li>
          <li className="nav-item" onClick={toggleDropdown}>
            <span className="nav-link">Our Brand</span>
            {dropdown && (
              <ul className="dropdown">
                <li><Link to="/our-brand/NFCCARDS" className="dropdown-link" onClick={scrollToTop}>NFC CARDS</Link></li>
                <li><Link to="/our-brand/GOOGLE360" className="dropdown-link" onClick={scrollToTop}>Google 360</Link></li>
                <li><Link to="/our-brand/WEBSITE" className="dropdown-link" onClick={scrollToTop}>Website Creation</Link></li>
                <li><Link to="/our-brand/digital" className="dropdown-link" onClick={scrollToTop}>Digital Assets</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/our-offerings" className="nav-link" onClick={scrollToTop}>Our Offerings</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link" onClick={scrollToTop}>Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation (Hamburger Menu) */}
      <nav className={`mobile-nav ${hamburgerOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link" onClick={() => setHamburgerOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={() => setHamburgerOpen(false)}>About</Link>
          </li>
          <li className="nav-item" onClick={toggleDropdown}>
            <span className="nav-link">Our Brand</span>
            {dropdown && (
              <ul className="dropdown">
                <li><Link to="/our-brand/NFCCARDS" className="dropdown-link" onClick={() => setHamburgerOpen(false)}>NFC CARDS</Link></li>
                <li><Link to="/our-brand/GOOGLE360" className="dropdown-link" onClick={() => setHamburgerOpen(false)}>Google 360</Link></li>
                <li><Link to="/our-brand/WEBSITE" className="dropdown-link" onClick={() => setHamburgerOpen(false)}>Website Creation</Link></li>
                <li><Link to="/our-brand/digital" className="dropdown-link" onClick={() => setHamburgerOpen(false)}>Digital Assets</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/our-offerings" className="nav-link" onClick={() => setHamburgerOpen(false)}>Our Offerings</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link" onClick={() => setHamburgerOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
