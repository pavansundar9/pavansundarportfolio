import React, { useEffect, useState, forwardRef } from 'react';
import './Hero.css';
import heroImage from '../images/hero0.png';
import gitlogo from '../images/github.png';
import linkedinlogo from '../images/linkedin_logo.png';

const Hero = forwardRef(({ scrollToContact, contactMeRef }, ref) => {
  const [scrollY, setScrollY] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Slightly more gentle scaling calculation
  const scaleValue = Math.max(isSmallScreen ? 1 - scrollY / 1200 : 1 - scrollY / 200, 0.75);

  useEffect(() => {
    const navbarName = document.querySelector('.navbar-name');
    if (navbarName) {
      if (scrollY > 150) {
        navbarName.classList.add('visible');
      } else {
        navbarName.classList.remove('visible');
      }
    }
  }, [scrollY]);

  return (
    <div className="HeroSection" ref={ref}>
      {/* Hero Text Section */}
      <div className="hero-text">
        <p>Hello World <span className='wave'>👋</span> ,</p>
        <div className="hero-name">
          <p>I'm </p>
          <h1 
            className="animated-name"
            style={{
              transform: `scale(${scaleValue})`,
              transition: 'transform 0.2s ease-in-out',
            }}
          >
            Pavan Sundar
          </h1>
        </div>
        <p className="role-description">
          Web Developer & <br />
          Full-Stack Enthusiast
        </p>
        <div className='buttons-1'>
          <button className="cta" onClick={() => scrollToContact(contactMeRef)}>
            Contact Me
          </button>
          <a href='https://drive.google.com/file/d/1dKxtyKkUKYHKiH5mVqHCrR2VTEA0aqQp/view' target='_blank' className='resume' rel="noreferrer">
            Resume <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroklinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          </a>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="hero-img">
        <img src={heroImage} alt="Hero section background" />
      </div>

      {/* Social Media Icons (Right) */}
      <div className="social-media">
        <div className="line"></div>
        <a href="https://github.com/pavansundar9/" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src={gitlogo} alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/pavan-sundar/" target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src={linkedinlogo} alt="LinkedIn logo" />
        </a>
      </div>
    </div>
  );
});

export default Hero;