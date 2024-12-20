import React from 'react';
import '../CSS/Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Are Saying</h2>
      <div className="testimonial-cards">
        {/* Card 1 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="https://c8.alamy.com/comp/KEDB24/handsome-young-man-profile-KEDB24.jpg" alt="Client 1" />
              <p>"EchoBoom helped us grow by 50%. Their team is amazing!"</p>
              <p>- <span className="highlight-name">John Smith</span>, CEO of <span className="highlight-name">Tech Innovators</span></p>
            </div>
            <div className="card-back">
              <p className="testimonial-content">"EchoBoom helped us increase our online presence significantly. We now see measurable results every month."</p>
              <p className="client-name">John Smith</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="https://thumbs.dreamstime.com/b/handsome-young-man-close-up-portrait-handsome-young-man-isolated-white-background-97428349.jpg" alt="Client 2" />
              <p>"Their marketing strategies are top-notch. We saw a 30% increase in sales."</p>
              <p>- <span className="highlight-name">Jane Doe</span>, Marketing Head at <span className="highlight-name">EcomWorld</span></p>
            </div>
            <div className="card-back">
              <p className="testimonial-content">"EchoBoom's marketing strategies are cutting-edge. They've helped us achieve results beyond expectations."</p>
              <p className="client-name">Jane Doe</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src="https://t3.ftcdn.net/jpg/09/14/07/04/360_F_914070451_GXGpScozuh7LKHXRes5lxYEOABQrocbH.jpg" alt="Client 3" />
              <p>"The website they built is stunning and functional. Conversions increased significantly."</p>
              <p>- <span className="highlight-name">Emily Zhang</span>, Founder of <span className="highlight-name">Zhang Enterprises</span></p>
            </div>
            <div className="card-back">
              <p className="testimonial-content">"I am extremely happy with the website they designed for us. Our traffic and conversions have increased by 40%!"</p>
              <p className="client-name">Emily Zhang</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
