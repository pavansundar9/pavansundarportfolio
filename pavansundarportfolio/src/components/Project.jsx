import React from 'react';
import './Project.css';

function Project({ title, description, desktopImg, mobileImg, codeLink, liveLink }) {
  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
          <img src={mobileImg} alt="" /><br />
          <div className='links'>
            <a href={codeLink} target="_blank" rel="noopener noreferrer">Code</a><br />
            <a href={liveLink} target="_blank" rel="noopener noreferrer">Live</a>
          </div>
        </div>
      </div>
      <div className="face face2">
        <img src={desktopImg} alt='' />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
