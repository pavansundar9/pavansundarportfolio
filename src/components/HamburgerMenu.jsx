import React, { useState, useEffect } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Toggle menu open/close
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Handle anchor clicks and close the menu
  const handleAnchorClick = (event, ref, section) => {
    event.preventDefault();
    if (ref?.current) {
      scrollToSection(ref);
      setIsOpen(false); // Close menu after navigation
      setActiveSection(section);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('#responsive_menu') &&
        !event.target.closest('.hamburger-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Menu Button */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Responsive Menu List */}
      <ul id="responsive_menu" className={isOpen ? 'show' : 'hide'}>
        <li className={activeSection === 'hero' ? 'active' : ''}>
          <a href="#hero" onClick={(e) => handleAnchorClick(e, refs.heroRef, 'hero')}>Home</a>
        </li>
        <li className={activeSection === 'about' ? 'active' : ''}>
          <a href="#about" onClick={(e) => handleAnchorClick(e, refs.aboutMeRef, 'about')}>About Me</a>
        </li>
        <li className={activeSection === 'skills' ? 'active' : ''}>
          <a href="#skills" onClick={(e) => handleAnchorClick(e, refs.skillsRef, 'skills')}>Skills</a>
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <a href="#projects" onClick={(e) => handleAnchorClick(e, refs.projectsRef, 'projects')}>Projects</a>
        </li>
        <li className={activeSection === 'contact' ? 'active' : ''}>
          <a href="#contact" onClick={(e) => handleAnchorClick(e, refs.contactMeRef, 'contact')}>Contact</a>
        </li>

        {/* Social Media Links */}
        <div className="menu-social-links">
          <a href="#" className="social-icon" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="social-icon" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          {/* <a href="#" className="social-icon" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a> */}
        </div>
      </ul>

      {/* Overlay for when menu is open */}
      <div className={`menu-overlay ${isOpen ? 'active' : ''}`}></div>
    </>
  );
};

export default HamburgerMenu;