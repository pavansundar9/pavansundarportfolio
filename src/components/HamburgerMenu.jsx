import React, { useState } from 'react';
import './HamburgerMenu.css'; // Ensure proper styling

const HamburgerMenu = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Handle anchor clicks and close the menu
  const handleAnchorClick = (event, ref) => {
    event.preventDefault();
    if (ref?.current) {
      scrollToSection(ref);
      setIsOpen(false); // Close menu after navigation
    }
  };

  return (
    <div>
      {/* Hamburger Menu Button */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      {/* Responsive Menu List */}
      <ul id="responsive_menu" className={isOpen ? 'show' : 'hide'}>
        <li>
          <a href="#hero" onClick={(e) => handleAnchorClick(e, refs.heroRef)}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleAnchorClick(e, refs.aboutMeRef)}>About Me</a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleAnchorClick(e, refs.skillsRef)}>Skills</a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleAnchorClick(e, refs.projectsRef)}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleAnchorClick(e, refs.contactMeRef)}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
