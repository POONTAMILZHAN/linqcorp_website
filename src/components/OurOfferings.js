import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/OurOfferings.css';

const OurOfferings = () => {
  const location = useLocation();
  const { sectionId } = location.state || {}; // Get sectionId from the navigation state

  useEffect(() => {
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [sectionId]);

  return (
    <div className="our-offerings-container">
      {/* Section 1: Strategy */}
      <section className="offering-section strategy" id="strategy">
        <div className="section-content">
          <h2>Strategy</h2>
          <p>
            Our strategic consulting helps your business define long-term goals and objectives, with a focus on building actionable plans to execute.
            We offer insights that shape market leaders and help you outmaneuver the competition.
          </p>
        </div>
        <div className="section-image">
          <img src="https://e0.pxfuel.com/wallpapers/67/753/desktop-wallpaper-best-social-media-strategies-to-boost-online-sales-strategy-marketing-strategy-background-business-strategy.jpg" alt="Strategy" />
        </div>
      </section>

      {/* Section 2: Website Creation */}
      <section className="offering-section website-creation" id="website-creation">
        <div className="section-content">
          <h2>Website Creation</h2>
          <p>
            We specialize in designing and developing custom websites that are optimized for user experience, speed, and functionality, tailored to your specific business needs.
            From eCommerce to blogs, we create websites that engage, convert, and perform.
          </p>
        </div>
        <div className="section-image">
          <img src="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg" alt="Website Creation" />
        </div>
      </section>

      {/* Section 3: Digital Marketing */}
      <section className="offering-section digital-marketing" id="digital-marketing">
        <div className="section-content">
          <h2>Digital Marketing</h2>
          <p>
            We help brands grow online by leveraging targeted digital marketing strategies. Our services include SEO, SEM, Social Media Marketing, and Email Marketing.
            We use data-driven insights to engage your target audience and convert them into loyal customers.
          </p>
        </div>
        <div className="section-image">
          <img src="https://texpaconnect.com/wp-content/uploads/2024/06/360_F_317830022_t2c7ZhvWlp68eumsnI4q4Bnw267bPwB9.jpg" alt="Digital Marketing" />
        </div>
      </section>

      {/* Section 4: Sales & Marketing */}
      <section className="offering-section sales-marketing" id="sales-marketing">
        <div className="section-content">
          <h2>Sales & Marketing</h2>
          <p>
            We craft high-impact sales and marketing strategies that align with your business goals. From lead generation to conversion strategies, we provide comprehensive solutions that drive revenue growth.
            Our sales expertise will elevate your business to new heights.
          </p>
        </div>
        <div className="section-image">
          <img src="https://media.licdn.com/dms/image/D5612AQH5SB0sI_tBbg/article-cover_image-shrink_720_1280/0/1701883656780?e=2147483647&v=beta&t=bxkAfgAtmVvsR7MMAdO5M8QV7S4t8IjPBt_XI8DjhME" alt="Sales & Marketing" />
        </div>
      </section>

      {/* Section 5: Staffing Solutions */}
      <section className="offering-section staffing-solutions" id="staffing-solutions">
        <div className="section-content">
          <h2>Staffing Solutions</h2>
          <p>
            We offer customized staffing solutions that help you find top talent, whether it's for short-term projects or long-term business growth. Our recruitment strategies focus on bringing the best candidates to your team.
          </p>
        </div>
        <div className="section-image">
          <img src="https://images.articlesfactory.com/750x0/f9e7317e-beb2-4af7-99ce-cb02378bd7bd.webp" alt="Staffing Solutions" />
        </div>
      </section>
    </div>
  );
};

export default OurOfferings;
