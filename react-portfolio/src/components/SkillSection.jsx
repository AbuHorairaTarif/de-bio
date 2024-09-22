import React from 'react';

const SkillSection = ({ title, skills, type }) => {
  return (
    <div className="mb-5">
      <h3 className='mb-3 text-info'>{title}</h3>
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-3">
              <div className="card-body">
                {type === 'technical' && (
                  <>
                    <h5 className="card-title text-success">{skill.name}</h5>
                    <p className="card-text">Level: {skill.level}</p>
                  </>
                )}
                {type === 'language' && (
                  <>
                    <h5 className="card-title text-success">{skill.name}</h5>
                    <p className="card-text">Proficiency: {skill.proficiency}</p>
                  </>
                )}
                {type === 'other' && (
                  <>
                    <h5 className="card-title text-success">{skill.name}</h5>
                    <p className="card-text">{skill.description}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
