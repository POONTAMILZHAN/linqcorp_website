import React, { useState, useRef } from 'react'; // Import useRef hook
import emailjs from 'emailjs-com'; // Import EmailJS SDK
import '../CSS/ContactUs.css'; // Import your CSS for styling
import img9 from '../images/img9.png';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactRef = useRef(null); // Create a reference to the contact section

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send form
    emailjs.sendForm(
      'your_service_id',       // Service ID (from EmailJS dashboard)
      'your_template_id',      // Template ID (from EmailJS dashboard)
      e.target,                 // The form itself
      'your_user_id'           // User ID (from EmailJS dashboard)
    ).then((result) => {
      console.log(result.text);
      alert('Your message has been sent!');
    }, (error) => {
      console.log(error.text);
      alert('There was an error sending your message. Please try again later.');
    });
  };

  // Function to scroll to the top of the contact section
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact-us" className="contact-us" ref={contactRef}>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us using the form below.</p>
        
        <div className="form-and-image">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange}
              required
            />
            <input 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              value={formData.subject} 
              onChange={handleChange}
              required
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
          
          {/* Image */}
          <div className="contact-image">
            <img src={img9} alt="Contact Us" />
          </div>
        </div>
      </div>
      
      {/* Google Map Section */}
      <div className="map-container">
        <h2>Our Location</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d195.3460782171746!2d76.99001230442072!3d11.050291344587583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1732790966287!5m2!1sen!2sin" 
          height="500"
          width={1850} 
          style={{ border: 0 }}
          allowFullScreen="" 
          aria-hidden="false" 
          tabIndex="1">
        </iframe>
      </div>
    </section>
  );
}

export default ContactUs;




/*

backend.js 

const handleSubmit = (e) => {
  e.preventDefault();

  fetch('http://localhost:5000/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert('Your message has been sent!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again later.');
    });
};
*/
