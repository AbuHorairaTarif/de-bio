import React from 'react';
import EducationCard from './EducationCard'; // Importing the EducationCard component

const Education = ({ educationData }) => {
  return (
    <div className="container my-5" id='education'>
      <h2 className="text-center mb-4 text-primary fw-bold">Education</h2>
      <div className="row">
        {educationData.map((education, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <EducationCard
              school={education.school}
              degree={education.degree}
              subject = {education.subject}
              year={education.year}
              description={education.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
