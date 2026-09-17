import React from 'react';

const ContactSection = () => {
    return (
        <section className="contact-section reveal" id="contacto">
            <div className="contact-cards-container">
                
                {/* Carta GitHub */}
                <div className="contact-card github-contact">
                    <div className="contact-titlebar">
                        <span className="contact-title">GitHub</span>
                        <button className="contact-close-btn">×</button>
                    </div>
                    <div className="contact-body">
                        <div className="contact-icon-wrapper">
                            <img src="/contact/github.png" alt="GitHub" className="contact-pixel-icon" />
                        </div>
                        <p className="contact-text">github.com/Luis-dsc33</p>
                        <hr className="contact-divider" />
                        <a href="https://github.com/Luis-dsc33" target="_blank" rel="noopener noreferrer" className="contact-btn">
                            Visitar perfil <span className="arrow">→</span>
                        </a>
                    </div>
                </div>

                {/* Carta Correo */}
                <div className="contact-card email-contact">
                    <div className="contact-titlebar">
                        <span className="contact-title">Correo</span>
                        <button className="contact-close-btn">×</button>
                    </div>
                    <div className="contact-body">
                        <div className="contact-icon-wrapper">
                            <img src="/contact/email.png" alt="Correo" className="contact-pixel-icon" />
                        </div>
                        <p className="contact-text">lenrique.desantiago@gmail.com</p>
                        <hr className="contact-divider" />
                        <a href="mailto:lenrique.desantiago@gmail.com" className="contact-btn">
                            Enviar correo <span className="arrow">→</span>
                        </a>
                    </div>
                </div>

                {/* Carta LinkedIn */}
                <div className="contact-card linkedin-contact">
                    <div className="contact-titlebar">
                        <span className="contact-title">LinkedIn</span>
                        <button className="contact-close-btn">×</button>
                    </div>
                    <div className="contact-body">
                        <div className="contact-icon-wrapper">
                            <img src="/contact/Linkedin.png" alt="LinkedIn" className="contact-pixel-icon" />
                        </div>
                        <p className="contact-text">linkedin.com/in/luis-enrique-de-santiago-colin</p>
                        <hr className="contact-divider" />
                        <a href="https://www.linkedin.com/in/luis-enrique-de-santiago-colin-45325321b/" target="_blank" rel="noopener noreferrer" className="contact-btn">
                            Ver perfil <span className="arrow">→</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
