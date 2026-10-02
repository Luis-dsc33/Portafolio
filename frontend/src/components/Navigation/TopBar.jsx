import React, { useState, useEffect } from 'react';
import './TopBar.css';
import { useLanguage } from '../../context/LanguageContext';

const PixelFlagUS = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 11" width="24" height="16" shapeRendering="crispEdges" style={{ marginRight: '8px' }}>
    <rect width="16" height="11" fill="#fff"/>
    <path d="M0,0h16v1H0Zm0,2h16v1H0Zm0,2h16v1H0Zm0,2h16v1H0Zm0,2h16v1H0Zm0,2h16v1H0Z" fill="#B22234"/>
    <rect width="8" height="6" fill="#3C3B6E"/>
    <path d="M1,1h1v1H1Zm2,0h1v1H3Zm2,0h1v1H5Zm-3,1h1v1H2Zm2,0h1v1H4Zm2,0h1v1H6Zm-5,1h1v1H1Zm2,0h1v1H3Zm2,0h1v1H5Zm-3,1h1v1H2Zm2,0h1v1H4Zm2,0h1v1H6Z" fill="#fff"/>
  </svg>
);

const PixelFlagMX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10" width="24" height="16" shapeRendering="crispEdges" style={{ marginRight: '8px' }}>
    <rect width="5" height="10" fill="#006341"/>
    <rect width="5" height="10" x="5" fill="#fff"/>
    <rect width="5" height="10" x="10" fill="#C8102E"/>
    <path d="M7,3h1v1H7Zm-1,1h3v1H6Zm1,1h1v1H7Zm-1,1h2v1H6Z" fill="#8B4513"/>
    <rect width="1" height="1" x="7" y="4" fill="#DAA520"/>
  </svg>
);

function TopBar({ scrollToSection }) {
  const { language, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const scrollContainer = document.getElementById('portfolio-scroll-container');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'proyectos', 'tecnologias', 'contacto'];
      let currentActive = 'inicio';


      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 150) {
            currentActive = sec;
          }
        }
      }


      const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      if (Math.ceil(scrollContainer.scrollTop) >= maxScroll - 10) {
        currentActive = 'contacto';
      }

      setActiveSection(currentActive);
    };

    scrollContainer.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);


  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


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

          <button className="btn-retro btn-flat lang-toggle-btn" onClick={() => { toggleLanguage(); setMenuOpen(false); }} style={{ marginLeft: '5px' }}>
            {language === 'es' ? <PixelFlagMX /> : <PixelFlagUS />}
            {language.toUpperCase()}
          </button>
        </nav>
      </header>

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
