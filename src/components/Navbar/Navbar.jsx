import React, { useState } from 'react';
import './Navbar.css';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__wrap">

        {/* Branding */}
        <div className="navbar__brand">
          <h3 className="navbar__title">Portfolio</h3>
          <h4 className="navbar__subtitle">Patri Lago</h4>
        </div>


        {/* Botón hamburguesa móvil */}
        <div className="navbar__toggle" onClick={toggleMenu}>
          <div className="navbar__bar"></div>
          <div className="navbar__bar"></div>
          <div className="navbar__bar"></div>
        </div>

        {/* Lista de enlaces */}
        <ul className={`navbar__list ${isOpen ? 'navbar__list--open' : ''}`}>
          <li><a href="#home" className="navbar__link" onClick={() => setIsOpen(false)}>Inicio</a></li>
          <li><a href="#experience" className="navbar__link" onClick={() => setIsOpen(false)}>Experiencia</a></li>
          <li><a href="#tech" className="navbar__link" onClick={() => setIsOpen(false)}>Tecnologías</a></li>
          <li><a href="#projects" className="navbar__link" onClick={() => setIsOpen(false)}>Proyectos</a></li>
          <li><a href="#about" className="navbar__link" onClick={() => setIsOpen(false)}>Sobre mí</a></li>
          <li><a href="#contact" className="navbar__link" onClick={() => setIsOpen(false)}>Contacto</a></li>
        </ul>


      </div>
    </nav>
  );
};

export default Navbar;