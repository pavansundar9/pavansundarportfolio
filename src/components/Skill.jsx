import React from 'react';
import './Skill.css';

function Skill({ name, icon }) {
  return (
    <div className="skill">
      <img src={`/images/${icon}`} alt={`${name} icon`} className="skill-icon" />
      <p>{name}</p>
    </div>
  );
}

export default Skill;
