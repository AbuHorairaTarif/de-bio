import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    fetch('/portfolioData.json')
      .then(response => response.json())
      .then(data => setHomeData(data.home));
  }, []);

  return (
    <>
    <div className="container text-center mt-5 vh-100">
      <h1 className="display-4">{homeData.title}</h1>
      <p className="lead">{homeData.description}</p>
      <Link to="/about" className="btn btn-primary mt-3">
        {homeData.buttonText}
      </Link>
    </div>
    <div>
    </div>
    </>
  );
};

export default Home;
