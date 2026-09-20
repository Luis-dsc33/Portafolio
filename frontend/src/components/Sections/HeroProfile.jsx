import React from 'react';
import { useLanguage } from '../../context/LanguageContext';


function HeroProfile({ scrollToSection }) {
  const { t } = useLanguage();

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
            <h1 className="main-title">{t('hero_greeting')}</h1>
            <h2 className="sub-title">{t('hero_role')}</h2>
            <hr className="pixel-divider" />
            <p className="intro-text">
              {t('hero_bio')}
            </p>

            <div className="action-buttons">
              <button className="btn-retro btn-primary" onClick={() => scrollToSection('proyectos')}>{t('hero_btn_projects')}</button>
              <button className="btn-retro btn-secondary" onClick={() => scrollToSection('contacto')}>{t('hero_btn_contact')}</button>
              <button className="btn-retro btn-secondary" onClick={() => window.open(t('hero_cv_url'), '_blank', 'noopener,noreferrer')}>{t('hero_btn_cv')}</button>
            </div>
          </div>
        </div>
      </main>
      <div className="retro-separator-container">
        <hr className="retro-separator" />
        <span className="separator-text">C:\Usuarios\Luis\Sobre_Mi.txt</span>
        <img src="/Colgante.png" alt="Enredadera colgante" className="hanging-plant" />
      </div>
    </>
  );
}

export default HeroProfile;
