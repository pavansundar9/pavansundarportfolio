import React from 'react';
import './AboutMe.css';
import aboutMe from '../images/about_me_0.png';
const AboutMe = React.forwardRef((props, ref) => {
    return (
        <div id="about" className="aboutMe-section" ref={ref}>
            <h1>About Me</h1>
            <div className='about-info'>
                <div className='about-image'>
                    <img src={aboutMe} alt='About me' />
                </div>
                <div className='about-text'>
                <p>
                    Hi there! I'm <span className='name'>Pavan Sundar</span>, a passionate Web Developer and Full Stack Enthusiast driven by the goal of transforming ideas into impactful digital solutions. I recently graduated from Vellore Institute of Technology (September 2024) and specialize in building user-centered applications that blend functionality with visually stunning designs. 
                    <br /><br />
                    Whether it's crafting sleek, responsive interfaces with <span className='skill-1'>HTML</span>, <span className='skill-1'>CSS</span>, and <span className='skill-1'>JavaScript</span> or creating robust back-end systems using <span className='skill-1'>React</span>, <span className='skill-1'>PHP</span>, and <span className='skill-1'>MySQL</span>, I thrive on delivering applications that solve real-world problems effectively. 
                    <br /><br />
                    Beyond coding, I enjoy exploring the latest technology trends, tackling challenging programming projects, and brainstorming innovative ideas to shape the future of technology.
                    <br /><br />
                    Let's work together to bring amazing ideas to life! <span className='star'>🌟</span>
                </p>

                </div>
            </div>
        </div>
    );
});

export default AboutMe;