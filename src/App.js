import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';

import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Loader from './components/Loader'; 
import './index.css'; 
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import NFCCards from './components/NFCCards'; // Import the NFC Cards component
import Google360 from './components/Google360'; // Import Google 360 component
import WebsiteCreation from './components/WebsiteCreation'; // Import Website Creation component
import DigitalMarketing from './components/DigitalMarketing'; // Import Digital Marketing component
import OurOfferings from './components/OurOfferings';
import MagicCursor from './components/MagicCursor'; // Import the MagicCursor Component

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from './components/Slider';




function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,      
    });

    setTimeout(() => {
      setIsLoading(false); 
    }, 3000);
  }, []);

  return (
    <Router>
      <div className="App">
        {isLoading ? <Loader /> : null}  

        {/* Magic Cursor Component */}
        <MagicCursor />

        {/* Header Section */}
        <Header />


        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              
              <Slider />
              <Services />
              <AboutUs />

              <ContactUs />
              <Testimonials />
            </>
          } />

          {/* Static Pages */}

          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Dropdown Page Routes */}
          <Route path="/our-brand/NFCCARDS" element={<NFCCards />} />
          <Route path="/our-brand/GOOGLE360" element={<Google360 />} />
          <Route path="/our-brand/WEBSITE" element={<WebsiteCreation />} />
          <Route path="/our-brand/digital" element={<DigitalMarketing />} />
          <Route path="/our-offerings" element={<OurOfferings />} />
        </Routes>
        

        <Footer />
      </div>
    </Router>
  );
}

export default App;
