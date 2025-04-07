import React from 'react';
import './Navbar.css';
import HamburgerMenu from './HamburgerMenu';

function Navbar({ scrollToSection, refs }) {
  const handleAnchorClick = (event, ref) => {
    event.preventDefault();
    scrollToSection(ref);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-name">Pavan Sundar</h1>
      <div>
        {/* Desktop Menu */}
        <ul id="menu">
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

        {/* Hamburger Menu for smaller screens */}
        <HamburgerMenu scrollToSection={scrollToSection} refs={refs} />
      </div>
    </nav>
  );
}

export default Navbar;
