import React, { useState } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <button className="logo" onClick={() => window.scrollTo(0, 0)}>
        ItzMePortfolio
      </button>
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
        <a href="#Portfolio">Projects</a>
        <a href="#Contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
