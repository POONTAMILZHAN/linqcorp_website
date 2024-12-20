import React, { useState, useEffect } from 'react';
import '../CSS/Loader.css';  // Ensure your CSS file is correctly linked

import img1 from '../images/loader.gif';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);  // Track when loading is complete

  useEffect(() => {
    // Simulate loading process
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => prev + 1);  // Increment progress by 1
      }, 20); // Adjust this value to control the speed of progress
      return () => clearInterval(interval); // Cleanup on component unmount
    } else {
      // Once progress reaches 100%, reveal the content
      setLoadingComplete(true);
    }
  }, [progress]);

  return (
    <div className="loader-container">
      {!loadingComplete && (
        <div className="loader-content">
          {/* Rotating Emoji */}
          <div className="emoji-container">
            <span role="img" aria-label="rocket" className="rotating-emoji"><img src={img1} alt='loading'></img></span>
          </div>

          {/* Loading text */}
          <p className="loading-text">Loading... {progress}%</p>

          {/* Progress Bar */}
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}

      {/* Hidden content, shown after loading complete */}
      {loadingComplete && (
        <div className="loaded-content">
          <h2>Content Loaded Successfully!</h2>
          <p>Now you can access the rest of the website.</p>
        </div>
      )}
    </div>
  );
};

export default Loader;
