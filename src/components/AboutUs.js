import React from 'react';
import '../CSS/AboutUs.css'; // Import the updated CSS for styling
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import img10 from '../images/loader3.gif';
function AboutUs() {
  const navigate = useNavigate(); // Initialize the navigate function


  const handleBtn = () => {
    // Navigate to the contact-us page
    navigate('/contact');
  };
  return (
    <section id="about-us" className="about-us">
      <div className="about-container">
        <div className="about-left">
          <h2 className="about-heading">Who We Are</h2>
          <p className="company-overview">
            <span className="highlight-text">Linq Corporation</span> is a premier technology consultancy firm, empowering businesses through
            innovative digital transformation strategies. Our team is focused on creating customized solutions that help companies enhance operational
            efficiency and deliver superior customer experiences.
          </p>

          <h3 className="sub-heading">Our Expertise</h3>
          <p className="experience-description">
            With over two decades of experience, we have partnered with businesses across various industries — from healthcare and finance to retail
            and technology — to implement scalable, cloud-based solutions that drive business success. Our team’s deep understanding of technology trends,
            coupled with hands-on industry expertise, allows us to create solutions that not only meet today’s needs but are also future-proof.
          </p>

          <h3 className="sub-heading">Our Values</h3>
          <ul className="values-list">
            <li><strong>Innovation</strong> — We continuously push the boundaries of what's possible, always staying ahead of the curve.</li>
            <li><strong>Integrity</strong> — We uphold transparency and ethical practices in all our business dealings.</li>
            <li><strong>Collaboration</strong> — Our success lies in working closely with our clients, understanding their challenges, and offering tailored solutions.</li>
            <li><strong>Excellence</strong> — We aim for perfection in every project, ensuring our solutions meet the highest industry standards.</li>
          </ul>
        </div>

        <div className="about-right">
          <img 
            src={img10}
            alt="Linq Corporation Team" 
            className="about-image"
          />
        </div>
      </div>
      
      <div className="cta-container">
        <button className="cta-button"onClick={handleBtn}>Get to Know Us More</button>
      </div>
    </section>
  );
}

export default AboutUs;
