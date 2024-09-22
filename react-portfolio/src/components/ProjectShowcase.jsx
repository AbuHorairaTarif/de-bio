import React, { useEffect, useState } from 'react';

const ProjectShowcase = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects data from the JSON file
    fetch('/data/portfolioData.json')
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error('Error fetching project data:', error));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary fw-bold">Project Showcase</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-3">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p>
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
