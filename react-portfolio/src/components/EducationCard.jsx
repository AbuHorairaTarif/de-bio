import React from 'react';

const EducationCard = ({ school,subject, degree, year, description }) => {
  return (
    <div className="card h-100 shadow-lg bg-dark">
      <div className="card-body">
        <h5 className="card-title text-primary">{school}</h5>
        <p className="card-text text-success">{subject}</p>
        <h6 className="card-subtitle mb-2 text-white">{degree}</h6>
        <p className="card-text text-info">{description}</p>
      </div>
      <div className="card-body">
        <small className="text-warning">Year: {year}</small>
      </div>
    </div>
  );
};

export default EducationCard;
