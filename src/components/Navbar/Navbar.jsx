import React from 'react';
import './Navbar.css';


const Navbar = () => {

  return (

    <nav className="navbar-container">
      <div className="navbar-wrap">
      <div className="navbar-brand">
        <h3 className="navbar-title">Portfolio</h3>
      <h4 className="navbar-subtitle">Patri Lago</h4>
      </div>
      <ul className="navbar-list">
        <a href="#home" className="nav-link">Home</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#tech" className="nav-link">Tech</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
      </ul>
      </div>
    </nav>
  )

}
export default Navbar


