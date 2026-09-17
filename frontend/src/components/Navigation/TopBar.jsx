import React, { useState, useEffect } from 'react';
import './TopBar.css';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Barra de navegación principal del portafolio.
 * Incluye la barra de título de ventana (verde) y el menú de navegación.
 *
 * @param {Function} scrollToSection - Función para hacer scroll suave a una sección
 */
function TopBar({ scrollToSection }) {
  const { language, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    // Escuchar el scroll dentro del contenedor del portafolio
    const scrollContainer = document.getElementById('portfolio-scroll-container');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'proyectos', 'tecnologias', 'contacto'];
      let currentActive = 'inicio';

      // Iteramos para ver qué sección está más cerca del borde superior
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          // 150px es un margen de tolerancia (por la altura del TopBar y un poco más)
          if (rect.top <= 150) {
            currentActive = sec;
          }
        }
      }

      // Si hemos llegado al final del contenedor, forzamos 'contacto'
      const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      if (Math.ceil(scrollContainer.scrollTop) >= maxScroll - 10) {
        currentActive = 'contacto';
      }

      setActiveSection(currentActive);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    // Ejecutar una vez por si ya bajó
    handleScroll();

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

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
          <button className={`btn-retro ${activeSection === 'inicio' ? 'btn-active' : 'btn-flat'}`} onClick={() => scrollToSection('inicio')}>
            <img src="/icons/inicio.png" alt="Inicio" className="icon-nav" /> {t('nav_home')}
          </button>
          <button className={`btn-retro ${activeSection === 'sobre-mi' ? 'btn-active' : 'btn-flat'}`} onClick={() => scrollToSection('sobre-mi')}>
            <img src="/icons/sobre-mi.png" alt="Sobre mí" className="icon-nav" /> {t('nav_about')}
          </button>
          <button className={`btn-retro ${activeSection === 'proyectos' ? 'btn-active' : 'btn-flat'}`} onClick={() => scrollToSection('proyectos')}>
            <img src="/icons/proyectos.png" alt="Proyectos" className="icon-nav" /> {t('nav_projects')}
          </button>
          <button className={`btn-retro ${activeSection === 'tecnologias' ? 'btn-active' : 'btn-flat'}`} onClick={() => scrollToSection('tecnologias')}>
            <img src="/icons/tecnologias.png" alt="Tecnologías" className="icon-nav" /> {t('nav_tech')}
          </button>
          <button className={`btn-retro ${activeSection === 'contacto' ? 'btn-active' : 'btn-flat'}`} onClick={() => scrollToSection('contacto')}>
            <img src="/icons/contacto.png" alt="Contacto" className="icon-nav" /> {t('nav_contact')}
          </button>
          
          <button className="btn-retro btn-flat lang-toggle-btn" onClick={toggleLanguage} style={{ marginLeft: '10px', color: '#8b2a2a' }}>
            [ {language.toUpperCase()} ]
          </button>
        </nav>
      </header>
    </>
  );
}

export default TopBar;
