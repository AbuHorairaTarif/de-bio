import React, { useEffect, useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch services data from the JSON file
    fetch('/data/portfolioData.json')
      .then((response) => response.json())
      .then((data) => setServices(data.services))
      .catch((error) => console.error('Error fetching services data:', error));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary fw-bold">Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-3">
              <div className="card-body text-center">
                <i className={`${service.icon} fa-3x mb-3 text-primary`} aria-hidden="true"></i>
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
