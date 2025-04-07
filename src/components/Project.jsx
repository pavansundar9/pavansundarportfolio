import React from 'react';
import './Project.css';

function Project({ title, description, desktopImg, mobileImg, codeLink, liveLink }) {
  return (
    <div className='card'>
      <img src={desktopImg} alt='' />
      <div className='text'>
        <h1>{title}</h1>
        <p>{description}</p>
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
