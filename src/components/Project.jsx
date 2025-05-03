import React from 'react';
import './Project.css';

function Project({ title, description, desktopImg, mobileImg, codeLink, liveLink, skills, projectType }) {
  return (
    <div className='card'>
      <img src={desktopImg} alt='' />
      <div className='text'>
        <div className='header-section'>
          <h1>{title}</h1>
          {projectType && <span className='project-type'>{projectType}</span>}
        </div>
        <p>{description}</p>
        
        {skills && skills.length > 0 && (
          <div className='skills-container'>
            {skills.map((skill, index) => (
              <span key={index} className='skill-tag'>{skill}</span>
            ))}
          </div>
        )}
        
        <div className='buttons'>
          <button id='code' onClick={() => window.location.href = codeLink}>
            Code &nbsp; <i className="fab fa-github"></i>
          </button>
          {liveLink && (
            <button id='live' onClick={() => window.location.href = liveLink}>
              Live &nbsp; <i className="fas fa-play"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;