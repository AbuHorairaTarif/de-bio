import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'; 

const ErrorPage = () => {
    return (
        <div className="notfound-container">
          <h1 className="notfound-title">404</h1>
          <h2 className="notfound-subtitle">Page Not Found</h2>
          <p className="notfound-text">
            Oops! The page you are looking for does not exist. It might have been moved or deleted.
          </p>
          <Link to="/" className="notfound-btn">
            Go Back Home
          </Link>
        </div>
      );
};

export default ErrorPage;
