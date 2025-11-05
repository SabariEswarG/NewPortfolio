import React from 'react';
import './portfolio.css';

const Header = () => {
  return (
    <header className="head">
      <div className="words">
        <a href="#home" className="nav-link">HOME</a>
        <a href="#about" className="nav-link">ABOUT</a>
        <a href="#education" className="nav-link">EDUCATION</a>
        <a href="#projects" className="nav-link">PROJECTS</a>
        <a href="#contact" className="nav-link">CONTACT</a>
      </div>
    </header>
  );
};


export default Header;
