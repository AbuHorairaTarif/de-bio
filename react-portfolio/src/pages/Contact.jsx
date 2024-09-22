import React, { useState, useEffect } from 'react';
import SocialMedia from '../components/SocialMedia';
const Contact = () => {
  const [contactData, setContactData] = useState({});

  useEffect(() => {
    fetch('/portfolioData.json')
      .then(response => response.json())
      .then(data => setContactData(data.contact));
  }, []);

  return (
    <>
    <div className="container mt-5">
      <h2 className='text-center mb-4 text-primary fw-bold'>{contactData.title}</h2>
      <p>{contactData.description}</p>
      <p>Email: {contactData.email}</p>
    </div>
    <SocialMedia></SocialMedia>
    </>
  );
};

export default Contact;
