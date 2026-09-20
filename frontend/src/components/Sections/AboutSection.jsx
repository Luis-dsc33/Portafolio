import React from 'react';
import Timeline from './Timeline';
import { useLanguage } from '../../context/LanguageContext';

const AboutSection = () => {
    const { t } = useLanguage();

    return (
        <section className="about-section reveal" id="sobre-mi">
            <img
                src="/cafe.png"
                alt="Taza de café retro"
                className="cafe-decoration"
            />

            <div className="about-header">
                <span className="header-icon" aria-hidden="true">🕵️‍♂️</span>
                <h2 className="main-title">{t('about_title')}</h2>
                <hr className="pixel-divider" />
            </div>

            <div className="about-container">
                <div className="retro-window profile-window">

                    <div className="window-titlebar">
                        <span className="window-title">USER_PROFILE.txt</span>
                        <div className="window-controls">
                            <button className="win-btn">_</button>
                            <button className="win-btn">□</button>
                            <button className="win-btn close-btn">×</button>
                        </div>
                    </div>

                    <div className="window-content">
                        <div className="profile-grid">
                            <div className="profile-sidebar">
                                <div className="avatar-frame">
                                    <img
                                        src="/perfil2.jpeg"
                                        alt="Luis Enrique"
                                        className="pixel-avatar"
                                    />
                                    <div className="status-indicator">
                                        <span className="status-dot"></span> Online
                                    </div>
                                </div>

                                <div className="profile-stats">
                                    <div className="stat-row">
                                        <span className="stat-label">{t('about_age')}</span>
                                        <span className="stat-value">22</span>
                                    </div>
                                    <div className="stat-row">
                                        <span className="stat-label">{t('about_location')}</span>
                                        <span className="stat-value">Querétaro</span>
                                    </div>
                                    <div className="stat-row">
                                        <span className="stat-label">{t('about_english')}</span>
                                        <span className="stat-value">{t('about_english_val')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-main">
                                <h3 className="profile-name">Luis Enrique De Santiago Colin</h3>
                                <h4 className="profile-role">{t('about_role')}</h4>

                                <div className="terminal-text-box">
                                    <p className="bio-paragraph">
                                        {t('about_p1')}
                                    </p>

                                    <p className="bio-paragraph">
                                        {t('about_p2')}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Timeline />
            
        </section>
    );
};

export default AboutSection;