import React, { useEffect, useRef, useState } from 'react';
import Skill from './Skill';
// import './Skills.css';

const skills = [
  { name: 'HTML', icon: 'html5-icon.png' },
  { name: 'CSS', icon: 'css3-icon.png' },
  { name: 'Tailwind CSS', icon: 'tailwind-icon.png' },
  { name: 'JavaScript', icon: 'javascript-icon.png' },
  { name: 'React', icon: 'react-icon.png' },
  { name: 'PHP', icon: 'php-icon.png' },
  { name: 'MySQL', icon: 'mysql-icon.png' },
  { name: 'Java', icon: 'java-icon.png' },
  { name: 'Firebase', icon: 'firebase-icon.png' }
];

function Skills() {
    const [inView, setInView] = useState(false);
    const skillsRef = useRef(null);

    useEffect(() => {
      const currentSkillsRef = skillsRef.current; 
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); 
          }
        },
        {
          threshold: 0.5 
        }
      );

      if (currentSkillsRef) {
        observer.observe(currentSkillsRef);
      }

      return () => {
        if (currentSkillsRef) {
          observer.unobserve(currentSkillsRef);
        }
      };
    }, []);

    return (
      <section className={`section skills ${inView ? 'in-view' : ''}`} ref={skillsRef}>
        <h1>Skills</h1>
        <div className="skills-list">
          {skills.map(skill => (
            <Skill key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </section>
    );
}

export default Skills;
