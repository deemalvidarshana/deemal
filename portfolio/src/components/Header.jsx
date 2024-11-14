import React, { useState } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <a href="#" className="logo">ItzMePortfolio</a>
      <i 
        className={`fa-solid ${isActive ? 'fa-x' : 'fa-bars'}`} 
        id="menu-icon"
        onClick={toggleMenu}
      ></i>
      <nav className={`navbar ${isActive ? 'active' : ''}`}>
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#achievement">Achievement</a>
        <a href="#Skills">Skills</a>
        <a href="#Portfolio">projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;