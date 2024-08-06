import React from 'react';
import './Navbar.css'; // Importing the CSS
import HamburgerMenu from './HamburgerMenu';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Pavan Sundar</h1>
      <div>
        <ul id="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <HamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;
