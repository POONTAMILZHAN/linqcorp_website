import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import '../CSS/Services.css';  // Import the styles for Services

function Services() {
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();  // Initialize useNavigate

  const toggleContent = (cardIndex) => {
    if (activeCard === cardIndex) {
      setActiveCard(null);  // Close the card if it's already open
    } else {
      setActiveCard(cardIndex);  // Open the clicked card
    }
  };

  const handleReadMoreClick = (sectionId) => {
    // Navigate to the OurOfferings page and pass the sectionId
    navigate('/our-offerings', { state: { sectionId } });

    
  };

  return (
    <section className="services" id="services">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
      >
        Our Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="services-description"
      >
        We offer cutting-edge solutions that drive business growth.
      </motion.p>

      <div className="service-cards">
        {/* Service 1 */}
        <motion.div
          className="card"
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)' }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://e0.pxfuel.com/wallpapers/67/753/desktop-wallpaper-best-social-media-strategies-to-boost-online-sales-strategy-marketing-strategy-background-business-strategy.jpg"
            alt="Service 1"
          />
          <h3>Strategy</h3>
          <p>
            We work with our clients to search for and build the best alternatives for growth.
          </p>
          <button className="read-more" onClick={() => handleReadMoreClick('strategy')}>
            {activeCard === 1 ? 'Read Less' : 'Read More'}
          </button>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          className="card"
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)' }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://media.licdn.com/dms/image/D5612AQH5SB0sI_tBbg/article-cover_image-shrink_720_1280/0/1701883656780?e=2147483647&v=beta&t=bxkAfgAtmVvsR7MMAdO5M8QV7S4t8IjPBt_XI8DjhME"
            alt="Service 2"
          />
          <h3>Sales & Marketing</h3>
          <p>
            We specialize in optimizing companies’ organic growth due to our programs.
          </p>
          <button className="read-more" onClick={() => handleReadMoreClick('sales-marketing')}>
            {activeCard === 2 ? 'Read Less' : 'Read More'}
          </button>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          className="card"
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)' }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://images.articlesfactory.com/750x0/f9e7317e-beb2-4af7-99ce-cb02378bd7bd.webp"
            alt="Service 3"
          />
          <h3>Staffing Solutions</h3>
          <p>
            We have an expert team of professionals who have highlighted us as one of the most prominent recruitment consultants.
          </p>
          <button className="read-more" onClick={() => handleReadMoreClick('staffing-solutions')}>
            {activeCard === 3 ? 'Read Less' : 'Read More'}
          </button>
        </motion.div>

        {/* Service 4 */}
        <motion.div
          className="card"
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)' }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg"
            alt="Service 4"
          />
          <h3>Website Creation</h3>
          <p>
            We specialize in creating custom websites tailored to your business needs.
          </p>
          <button className="read-more" onClick={() => handleReadMoreClick('website-creation')}>
            {activeCard === 4 ? 'Read Less' : 'Read More'}
          </button>
        </motion.div>

        {/* Service 5 */}
        <motion.div
          className="card"
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)' }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="https://texpaconnect.com/wp-content/uploads/2024/06/360_F_317830022_t2c7ZhvWlp68eumsnI4q4Bnw267bPwB9.jpg"
            alt="Service 5"
          />
          <h3>Digital Marketing</h3>
          <p>
            Digital marketing is a strategic technique to promote brands online.
          </p>
          <button className="read-more" onClick={() => handleReadMoreClick('digital-marketing')}>
            {activeCard === 5 ? 'Read Less' : 'Read More'}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
