import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick'; // React Slick for carousel functionality
import '../CSS/VerticalSlider.css'; // Import the CSS for styling

const VerticalSlider = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sliderRef = useRef(null); // Ref to access the slider

  // Handle mouse movement to update position (for parallax effect)
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({
      x: clientX / window.innerWidth - 0.5, // Normalize to range from -0.5 to 0.5
      y: clientY / window.innerHeight - 0.5,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Slider settings for vertical scrolling
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Change slide every 5 seconds
    vertical: true,      // Enable vertical slide direction
    arrows: false,       // Disable default arrows
    beforeChange: (current, next) => console.log('Slide changed from', current, 'to', next),
  };

  // Function to move to the next slide when the down button is clicked
  const handleDownArrowClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Move to the next slide
    }
  };

  return (
    <div className="vertical-slider-container">
      <Slider ref={sliderRef} {...sliderSettings}>
        {/* Slide 1 */}
        <div className="slider-slide">
          <div className="slider-content" style={{
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
          }}>
            <h2 className="slider-title">Slide 1 Title</h2>
            <p className="slider-description">
              This is a description for slide 1. Add more content here.
            </p>
            <button className="slider-btn">Learn More</button>
          </div>
          <img src="https://via.placeholder.com/1200x800?text=Slide+1" alt="Slide 1" />
        </div>

        {/* Slide 2 */}
        <div className="slider-slide">
          <div className="slider-content" style={{
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
          }}>
            <h2 className="slider-title">Slide 2 Title</h2>
            <p className="slider-description">
              This is a description for slide 2. You can add more content here.
            </p>
            <button className="slider-btn">Learn More</button>
          </div>
          <img src="https://via.placeholder.com/1200x800?text=Slide+2" alt="Slide 2" />
        </div>

        {/* Slide 3 */}
        <div className="slider-slide">
          <div className="slider-content" style={{
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
          }}>
            <h2 className="slider-title">Slide 3 Title</h2>
            <p className="slider-description">
              This is a description for slide 3. Add more content here.
            </p>
            <button className="slider-btn">Learn More</button>
          </div>
          <img src="https://via.placeholder.com/1200x800?text=Slide+3" alt="Slide 3" />
        </div>
      </Slider>

      {/* Down Arrow Button */}
      <button className="down-arrow-btn" onClick={handleDownArrowClick}>
        ↓
      </button>
    </div>
  );
};

export default VerticalSlider;
