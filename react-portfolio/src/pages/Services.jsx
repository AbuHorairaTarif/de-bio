import React, { useState, useEffect } from 'react';
import ProjectShowcase from '../components/ProjectShowcase';
import Service from '../components/Services';
const Services = () => {
  const [servicesData, setServicesData] = useState({});

  useEffect(() => {
    fetch('/portfolioData.json')
      .then(response => response.json())
      .then(data => setServicesData(data.services));
  }, []);

  return (
    <>
    <div className="container mt-5">
      <h2 className='text-center mb-4 text-primary fw-bold'>{servicesData.title}</h2>
      <ul className="list-group">
        {servicesData.list &&
          servicesData.list.map((service, index) => (
            <li key={index} className="list-group-item">
              {service}
            </li>
          ))}
      </ul>
    </div>
    <Service />
    <ProjectShowcase />
    </>
  );
};

export default Services;
