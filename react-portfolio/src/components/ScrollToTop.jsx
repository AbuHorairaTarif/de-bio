import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './ScrollToTop.css'; // External CSS for styling

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]);


  // Show button when the user scrolls down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    
  };

  // Add event listener for scrolling
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div className="scroll-button" onClick={scrollToTop}>
          <i className="fas fa-arrow-up" aria-hidden="true"></i>
        </div>
      )}
      
    </div>
  );
};

export default ScrollToTop;
