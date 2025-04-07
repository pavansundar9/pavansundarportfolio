import React, { useEffect, useState } from 'react';
import Skill from './Skill';
import './Skills.css';

const skills = [
  { name: 'HTML', icon: 'html5-icon.png' },
  { name: 'CSS', icon: 'css3-icon.png' },
  { name: 'Tailwind CSS', icon: 'tailwind-icon.png' },
  { name: 'JavaScript', icon: 'javascript-icon.png' },
  { name: 'React', icon: 'react-icon.png' },
  { name: 'Angular', icon: 'angular-icon.png' },
  { name: 'PHP', icon: 'php-icon.png' },
  { name: 'Java', icon: 'java-icon.png' },
  { name: 'Spring-boot', icon: 'spring-boot-icon.png' },
  { name: 'MySQL', icon: 'mysql-icon.png' },
  { name: 'Firebase', icon: 'firebase-icon.png' }
];

const Skills = React.forwardRef((props, ref) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <section className={`skill-section skills ${inView ? 'in-view' : ''}`} ref={ref}>
      <h1>Skills</h1>
      <div className="skills-list">
        {skills.map(skill => (
          <Skill key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
});

export default Skills;
