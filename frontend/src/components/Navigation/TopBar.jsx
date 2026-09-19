import React, { useState, useEffect } from 'react';
import './TopBar.css';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Barra de navegación principal del portafolio.
 * Incluye la barra de título de ventana (verde) y el menú de navegación.
 * En móvil se convierte en un menú hamburguesa colapsable.
 *
 * @param {Function} scrollToSection - Función para hacer scroll suave a una sección
 */
function TopBar({ scrollToSection }) {
  const { language, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Cerrar menú al cambiar de sección y navegar
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  // Cerrar menú si la pantalla se agranda (usuario rota o redimensiona)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    const scrollContainer = document.getElementById('portfolio-scroll-container');
    if (menuOpen && scrollContainer) {
      scrollContainer.style.overflow = 'hidden';
    } else if (scrollContainer) {
      scrollContainer.style.overflow = '';
    }
    return () => {
      if (scrollContainer) scrollContainer.style.overflow = '';
    };
  }, [menuOpen]);

  const navItems = [
    { id: 'inicio', icon: '/icons/inicio.png', label: t('nav_home') },
    { id: 'sobre-mi', icon: '/icons/sobre-mi.png', label: t('nav_about') },
    { id: 'proyectos', icon: '/icons/proyectos.png', label: t('nav_projects') },
    { id: 'tecnologias', icon: '/icons/tecnologias.png', label: t('nav_tech') },
    { id: 'contacto', icon: '/icons/contacto.png', label: t('nav_contact') },
  ];

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

        {/* Botón hamburguesa (solo visible en móvil via CSS) */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Menú de navegación: desktop inline, mobile overlay */}
        <nav className={`nav-menu ${menuOpen ? 'nav-menu-open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`btn-retro ${activeSection === item.id ? 'btn-active' : 'btn-flat'}`}
              onClick={() => handleNavClick(item.id)}
            >
              <img src={item.icon} alt={item.label} className="icon-nav" /> {item.label}
            </button>
          ))}
          
          <button className="btn-retro btn-flat lang-toggle-btn" onClick={() => { toggleLanguage(); setMenuOpen(false); }} style={{ marginLeft: '10px', color: '#8b2a2a' }}>
            [ {language.toUpperCase()} ]
          </button>
        </nav>
      </header>

      {/* Overlay de fondo para cerrar el menú al tocar fuera */}
      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default TopBar;
