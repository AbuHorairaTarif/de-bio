import React, { useEffect, useState } from 'react';
import SkillSection from './SkillSection';
import './Skills.css';

const Skills = () => {
  const [skillsData, setSkillsData] = useState(null);

  useEffect(() => {
    // Fetch skills data from the JSON file
    fetch('/data/skillsData.json')
      .then((response) => response.json())
      .then((data) => setSkillsData(data))
      .catch((error) => console.error('Error fetching skills data:', error));
  }, []);

  if (!skillsData) {
    return <p>Loading skills...</p>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary fw-bold">Skills</h2>

      {/* Technical Skills Section */}
      <SkillSection title="Technical Skills" skills={skillsData.technicalSkills} type="technical" />

      {/* Language Skills Section */}
      <SkillSection title="Language Skills" skills={skillsData.languageSkills} type="language" />

      {/* Other Skills Section */}
      <SkillSection title="Other Skills" skills={skillsData.otherSkills} type="other" />
    </div>
  );
};

export default Skills;
