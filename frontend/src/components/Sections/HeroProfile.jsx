import React from 'react';

/**
 * Sección Hero del portafolio: foto de perfil, título, descripción y CTAs.
 * Incluye el separador retro y la planta colgante.
 *
 * @param {Function} scrollToSection - Función para hacer scroll suave a una sección
 */
function HeroProfile({ scrollToSection }) {
  return (
    <>
      <main className="main-content reveal" id="inicio">
        <img src="/planta.png" alt="Enredadera retro" className="plant-decoration" />
        <div className="left-decorations"></div>

        <div className="profile-section">
          <div className="photo-frame">
            <img src="/perfil.png" alt="Perfil" />
          </div>

          <div className="text-section">
            <h1 className="main-title">Hola, Soy Luis</h1>
            <h2 className="sub-title">Pasante de Ingenieria en Desarrollo y Gestion de Software</h2>
            <hr className="pixel-divider" />
            <p className="intro-text">
              Desarrollador Full-Stack apasionado por construir soluciones sólidas de<br />
              extremo a extremo. Transformo ideas en aplicaciones web y multiplataforma<br />
              usando React, Node.js y Flutter. Disfruto diseñar arquitecturas<br />
              escalables respaldadas por bases de datos robustas y despliegues con Docker.
            </p>

            <div className="action-buttons">
              <button className="btn-retro btn-primary" onClick={() => scrollToSection('proyectos')}>▶ Ver proyectos</button>
              <button className="btn-retro btn-secondary" onClick={() => scrollToSection('contacto')}>✉ Contactar</button>
              <button className="btn-retro btn-secondary" onClick={() => window.open('/cv.pdf', '_blank', 'noopener,noreferrer')}>📄 CV</button>
            </div>
          </div>
        </div>
      </main>

      {/* --- SEPARADOR RETRO --- */}
      <div className="retro-separator-container">
        <hr className="retro-separator" />
        <span className="separator-text">C:\Usuarios\Luis\Sobre_Mi.txt</span>

        {/* --- PLANTA COLGANTE --- */}
        <img src="/Colgante.png" alt="Enredadera colgante" className="hanging-plant" />
      </div>
    </>
  );
}

export default HeroProfile;
