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
                        Hi there! I'm <span className='name'>Pavan Sundar</span>, a passionate Web Developer and Full Stack Enthusiast, recently graduated from Vellore Institute of Technology (September 2024). I'm passionate about creating user-friendly, functional applications and enjoy every step of the development process — from playful UI designs to exploring new technologies.
                        <br /><br />
                        What drives me most is the opportunity to improve user experiences through thoughtful, well-crafted solutions. I enjoy every part of the development process — from experimenting with playful UI ideas to learning new technologies that bring more power and elegance to my builds.
                        <br /><br />
                        When learning something new, I dive into project-based learning, building small, focused projects to understand concepts deeply. That’s how this portfolio was born — evolving from a simple <span className='skill-1'>HTML</span>, <span className='skill-1'>CSS</span>, and <span className='skill-1'>JavaScript</span> version as I grew and learned <span className='skill-1'>React</span>.
                        <br /><br />
                        Outside of coding, I'm usually exploring creative ideas — whether that's through fun UI designs or just imagining what my next side project could look like. I might not always be building something, but my brain's definitely designing it in the background.

                        <br /><br />
                        I'm always curious, always building, and always open to exploring new ideas. Let's create something amazing together! <span className='star'>🌟</span>
                    </p>
                </div>
            </div>
        </div>

    );
});

export default AboutMe;