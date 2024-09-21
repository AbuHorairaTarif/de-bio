import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>I specialize in Digital Marketing and Data Entry.</p>
      <Link to="/about">Learn More About Me</Link>
    </div>
  );
};

export default Home;
