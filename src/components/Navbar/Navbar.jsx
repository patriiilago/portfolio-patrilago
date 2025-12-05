import React, { useState } from 'react';
import './Navbar.css';

// Puedes usar un ícono de librería (como Font Awesome o React Icons)
// pero para este ejemplo, usaremos un div simple.

const Navbar = () => {
  // 1. Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-wrap">
        <div className="navbar-brand">
          <h3 className="navbar-title">Portfolio</h3>
          <h4 className="navbar-subtitle">Patri Lago</h4>
        </div>

        {/* 2. Botón/Ícono de Menú visible solo en móvil */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {/* Un ejemplo de ícono de "hamburguesa" */}
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* 3. Lista de enlaces con clase condicional */}
        <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#experience" className="nav-link" onClick={() => setIsOpen(false)}>Experiencia</a>
          <a href="#tech" className="nav-link" onClick={() => setIsOpen(false)}>Tecnologías</a>
          <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Proyectos</a>
          <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>Sobre mí</a>
          <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contacto</a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;