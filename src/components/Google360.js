import React from 'react';
import '../CSS/Google360.css';  // Adjust the path as needed based on your folder structure

import img1 from '../images/google-image1.png'; // Replace with actual image paths
import img2 from '../images/google-image2.png'; // Replace with actual image paths
import sampleVideo from '../images/google-video.mp4'; // Replace with actual video path

function Google360() {
  return (
    <div className="google360-container">
      {/* Section 1: Hero Banner */}
      <section className="google360-hero">
        <div className="hero-overlay">
          <h1>Google 360° Virtual Tour</h1>
          <p>Transform your business with immersive 360-degree photography and Google Street View integration.</p>
        </div>
      </section>

      {/* Section 2: General Information */}
      <section className="google360-info">
        <div className="container">
          <h2>What is Google 360°?</h2>
          <p>Google 360° is a cutting-edge solution that offers virtual tours of your business, integrated with Google Street View. Customers can now explore your business remotely, with full 360-degree views of your interiors, exteriors, and special features. Google Street View brings your location to life in a way that no other platform can match.</p>
          <div className="info-images">
            <img src={img1} alt="Google 360 Business" />
            <img src={img2} alt="Google 360 Virtual Tour" />
          </div>
        </div>
      </section>

      {/* Section 3: Benefits of Google 360° */}
      <section className="google360-benefits">
        <div className="container">
          <h2>Benefits of Google Street View</h2>
          <div className="benefit-list">
            <div className="benefit-item">
              <h3>1. Enhance Online Visibility</h3>
              <p>Boost your visibility on Google Search and Google Maps with 360-degree photos that customers can explore from anywhere.</p>
            </div>
            <div className="benefit-item">
              <h3>2. Improve Customer Engagement</h3>
              <p>Give potential customers a virtual tour of your business, improving engagement and increasing the likelihood of in-person visits.</p>
            </div>
            <div className="benefit-item">
              <h3>3. Build Trust and Credibility</h3>
              <p>Show your customers that you have nothing to hide by offering an authentic and transparent look at your business.</p>
            </div>
            <div className="benefit-item">
              <h3>4. Easy Integration</h3>
              <p>Integrate Google 360° directly into your website, Google My Business, and social media profiles for seamless marketing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Sample 360° Video */}
      <section className="google360-video">
        <div className="container">
          <h2>Watch a Sample 360° Virtual Tour</h2>
          <div className="video-container">
          <video
      src={sampleVideo}
      autoplay
      muted
      loop
      playsInline
      controls
    >
      Your browser does not support the video tag.
    </video>
          </div>
        </div>
      </section>

      {/* Section 5: Partnered with Google */}
      <section className="google360-partners">
        <div className="container">
          <h2>We Are Official Google Partners</h2>
          <p>As an official Google Street View Trusted Partner, we bring the best technology and expertise to create stunning virtual tours for your business.</p>
          <div className="partners-logos">
            {/* Add partner logos */}
            <img src="https://seeklogo.com/images/G/google-360-suite-logo-42FDAB06C3-seeklogo.com.png" alt="Google Partner" />
            {/* You can add more partner logos if needed */}
          </div>
        </div>
      </section>
      {/* Section 6: Sample Works */}
<section className="google360-works">
  <div className="container">
    <h2>Our Recent Google 360° Projects</h2>
    <div className="work-gallery">
      <div className="work-item">
        <div className="work-item-inner">
          <img src="https://360-view.co.uk/wp-content/uploads/2024/07/Google-maps-How-to-Get-Google-Street-View-for-Your-Business.webp" alt="Project 1" />
          <div className="work-item-description">
            <p>This project involved creating a fully immersive 360-degree virtual tour for a footwear retail store. By leveraging Google 360 technology, customers can now explore the entire store online, view different shoe collections, and experience the store layout in a highly interactive and engaging way.</p>
          </div>
        </div>
      </div>
      <div className="work-item">
        <div className="work-item-inner">
          <img src="https://www.iseeyouonline.co.uk/wp-content/uploads/2023/04/vivobarefoot-feature.jpg" alt="Project 2" />
          <div className="work-item-description">
            <p>"For this footwear shop project, cutting-edge Google 360 technology was implemented to create a dynamic, interactive shoe display. Customers can use 360-degree views to check out shoes from all angles, providing an up-close look at materials, stitching, craftsmanship, and design features."</p>
          </div>
        </div>
      </div>
      <div className="work-item">
        <div className="work-item-inner">
          <img src="https://360-view.co.uk/wp-content/uploads/2023/10/Google-Maps-360.webp" alt="Project 3" />
          <div className="work-item-description">
            <p>"This project focuses on creating an exciting immersive interactive 360-degree virtual tour for a cap shop, allowing customers to explore the entire store, view detailed product information, and browse through various cap collections with ease, enhancing their overall shopping experience."</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


   

    </div>
  );
}

export default Google360;

