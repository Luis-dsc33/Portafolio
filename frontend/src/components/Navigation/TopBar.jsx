import React from 'react';
import './TopBar.css';

/**
 * Barra de navegación principal del portafolio.
 * Incluye la barra de título de ventana (verde) y el menú de navegación.
 *
 * @param {Function} scrollToSection - Función para hacer scroll suave a una sección
 */
function TopBar({ scrollToSection }) {
  return (
    <>
      <div className="main-window-titlebar">
        <div className="titlebar-left">
          <img src="/icons/logo.png" alt="Windows Logo" className="icon-titlebar-logo" />
        </div>
        <div className="titlebar-right">
          <button aria-label="Minimize">_</button>
          <button aria-label="Maximize">□</button>
          <button aria-label="Close" style={{ fontWeight: 'bold' }}>X</button>
        </div>
      </div>

      <header className="top-bar">
        <div className="logo-section">
          <img src="/icons/portafolio.png" alt="Portfolio Icon" className="icon-portfolio" />
          <span className="logo-text">PORTFOLIO<span className="logo-exe">.EXE</span></span>
        </div>

        <nav className="nav-menu">
          <button className="btn-retro btn-active" onClick={() => scrollToSection('inicio')}>
            <img src="/icons/inicio.png" alt="Inicio" className="icon-nav" /> Inicio
          </button>
          <button className="btn-retro btn-flat" onClick={() => scrollToSection('sobre-mi')}>
            <img src="/icons/sobre-mi.png" alt="Sobre mí" className="icon-nav" /> Sobre mí
          </button>
          <button className="btn-retro btn-flat" onClick={() => scrollToSection('proyectos')}>
            <img src="/icons/proyectos.png" alt="Proyectos" className="icon-nav" /> Proyectos
          </button>
          <button className="btn-retro btn-flat" onClick={() => scrollToSection('tecnologias')}>
            <img src="/icons/tecnologias.png" alt="Tecnologías" className="icon-nav" /> Tecnologías
          </button>
          <button className="btn-retro btn-flat" onClick={() => scrollToSection('contacto')}>
            <img src="/icons/contacto.png" alt="Contacto" className="icon-nav" /> Contacto
          </button>
        </nav>
      </header>
    </>
  );
}

export default TopBar;
