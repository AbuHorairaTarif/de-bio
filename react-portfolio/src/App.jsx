import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Preloader will be shown for 2 seconds, after which the app content will load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide preloader after 2 seconds
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div>
      {loading ? (
        // Display the preloader if the loading state is true
        <Preloader />
      ) : (
        // Display the main app content once loading is finished
        <>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
