import React, { useState, useEffect } from 'react';
import SocialMedia from '../components/SocialMedia';
import ContactForm from '../components/ContactForm';
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
      <p><span className='fw-bold'>Email: </span><a href={`mailto:${contactData.email}`} className='text-dark fw-normal h6'>{contactData.email}</a></p>

    </div>
    <ContactForm></ContactForm>    
    <SocialMedia></SocialMedia>
    </>
  );
};

export default Contact;
