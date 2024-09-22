import React, { useState, useEffect } from 'react';
import ProjectShowcase from '../components/ProjectShowcase';
import Education from '../components/Education';
import Skills from '../components/Skills';
import { educationData, timelineData } from './Home';
import Timeline from '../components/Timeline';
import Services from '../components/Services';
import SocialMedia from '../components/SocialMedia';

const About = () => {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    fetch('/portfolioData.json')
      .then(response => response.json())
      .then(data => setAboutData(data.about));
  }, []);

  return (
    <>
    <div className="container mt-5">
      <h2 className='text-center mb-4 text-primary fw-bold'>{aboutData.title}</h2>
      <p>{aboutData.description}</p>
    </div>
    <Skills />
    <ProjectShowcase />
    <Education educationData={educationData} />
    <Timeline timelineData={timelineData} />
    
    </>
  );
};

export default About;
