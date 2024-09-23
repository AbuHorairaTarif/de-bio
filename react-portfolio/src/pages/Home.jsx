import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/profile.svg';
import Typed from 'typed.js';
import './../index.css';
import CounterList from '../components/CounterList';
import ProjectShowcase from '../components/ProjectShowcase';
import Services from '../components/Services';
import Skills from '../components/Skills';
import TestimonialList from '../components/TestimonialList';
import Education from '../components/Education';
import Timeline from '../components/Timeline';
import SocialMedia from '../components/SocialMedia';

export const educationData = [
  {
    school: 'University of Dhaka',
    degree: 'Masters of Business Administration (MBA)',
    subject: 'International Business',
    year: '2012',
    description: 'CGPA 3.19 out of 4.0',
  },
  {
    school: 'University of Dhaka',
    degree: 'Bachelor of Business Administration (BBA)',
    subject: 'International Business',
    year: '2011',
    description: 'CGPA 3.27 out of 4.0',
  },
  {
    school: 'Notre Dame College, Dhaka',
    degree: 'Higher Secondary Certificate (HSC)',
    subject: 'Business Studies',
    year: '2006',
    description: 'GPA 5.0 out of 5.0',
  },
];
export const timelineData = [
  {
    title: 'Bachelor of Science in Computer Science',
    organization: 'University of XYZ',
    year: '2020',
    description: 'Specialized in software development, algorithms, and data structures.',
  },
  {
    title: 'High School Diploma',
    organization: 'ABC High School',
    year: '2016',
    description: 'Graduated with honors and was part of the coding club.',
  },
  {
    title: 'Online Course: Full-Stack Web Development',
    organization: 'Udemy',
    year: '2018',
    description: 'Learned full-stack development using JavaScript, React, Node.js, and MongoDB.',
  },
];
const Home = () => {
  const [homeData, setHomeData] = useState({});
  const typedElement = useRef(null);

  useEffect(() => {
    fetch('/portfolioData.json')
      .then(response => response.json())
      .then(data => setHomeData(data.home));
  }, []);

  useEffect(() => {
    // Initialize Typed.js once the homeData is fetched and contains typedStrings
    if (homeData.typedStrings) {
      const typed = new Typed(typedElement.current, {
        strings: homeData.typedStrings, // Use strings from the JSON file
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
      });

      return () => {
        typed.destroy(); // Clean up Typed.js instance
      };
    }
  }, [homeData]);

  return (
    <>
      <div className="container-fluid text-center py-5 bg-gradient-dark">
        <div className="row">
          <div className="col-12 col-sm-6 my-auto">
            <h1 className="display-4 text-primary">{homeData.title}</h1>
            <p className="lead fs-3  fw-bold text-white">
              I <span ref={typedElement} className='text-info'></span>
            </p>
          </div>
          <div className="col-12 col-sm-6">
            <figure >
            <img src="https://raw.githubusercontent.com/AbuHorairaTarif/test/refs/heads/main/hasnat.jpg" className="figure-img img-fluid rounded object-fit-cover shadow-lg" width={200} alt="Profile Logo" />
            </figure>
          </div>
        </div>

        <Link to="/about" className="btn btn-primary mt-3">
          {homeData.buttonText}
        </Link>
      </div>
      <Skills />
      <CounterList></CounterList>
      <ProjectShowcase />
      <Services />
      <TestimonialList />
      <Education educationData={educationData} />
      <Timeline timelineData={timelineData} />
      <SocialMedia />
    </>
  );
};

export default Home;
