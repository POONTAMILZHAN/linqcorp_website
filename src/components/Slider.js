import React, { useState, useEffect } from "react";
import "../CSS/Slider.css"; // Import the CSS file
import linq from '../images/linq.mp4'; // Video path

const Slider = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement
  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="slider-container"
      style={{
        "--mouseX": mousePosition.x,
        "--mouseY": mousePosition.y,
      }}
    >
      {/* Video element */}
      <div className="video-wrapper">
        <video
          className="background-video"
          autoPlay
          muted
          loop
          playsInline
          src={linq}  // Replace with the path to your video
        />
      </div>
    </div>
  );
};

export default Slider;
