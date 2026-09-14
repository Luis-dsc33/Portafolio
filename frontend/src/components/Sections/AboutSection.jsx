import React from 'react';

const AboutSection = () => {
    return (
        <section className="about-section reveal" id="sobre-mi">

            {/* --- IMAGEN DECORATIVA DEL CAFÉ --- */}
            <img
                src="/cafe.png"
                alt="Taza de café retro"
                className="cafe-decoration"
            />

            <div className="about-header">
                <span className="header-icon" aria-hidden="true">🕵️‍♂️</span>
                <h2 className="main-title">Sobre mí</h2>
                <hr className="pixel-divider" />
            </div>

            <div className="about-container">
                {/* Ventana estilo UI Retro */}
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

                            {/* Columna Izquierda: Avatar y Stats */}
                            <div className="profile-sidebar">
                                <div className="avatar-frame">
                                    {/* Aquí puedes poner tu foto */}
                                    <img
                                        src="https://via.placeholder.com/150x150/153e34/eaddbe?text=Luis"
                                        alt="Luis Enrique"
                                        className="pixel-avatar"
                                    />
                                    <div className="status-indicator">
                                        <span className="status-dot"></span> Online
                                    </div>
                                </div>

                                <div className="profile-stats">
                                    <div className="stat-row">
                                        <span className="stat-label">Nivel:</span>
                                        <span className="stat-value">22</span>
                                    </div>
                                    <div className="stat-row">
                                        <span className="stat-label">Base:</span>
                                        <span className="stat-value">San Juan del Río</span>
                                    </div>
                                    <div className="stat-row">
                                        <span className="stat-label">Inglés:</span>
                                        <span className="stat-value">B2 Certificado</span>
                                    </div>
                                </div>
                            </div>

                            {/* Columna Derecha: Biografía y Logros */}
                            <div className="profile-main">
                                <h3 className="profile-name">Luis Enrique De Santiago Colin</h3>
                                <h4 className="profile-role">&gt; T.S.U. | Ing. en Desarrollo y Gestión de Software (En proceso de titulación) @ UTSJR</h4>

                                <div className="terminal-text-box">
                                    <p className="bio-paragraph">
                                        Soy pasante de Ingeniería en Desarrollo y Gestión de Software y desarrollador web y móvil,
                                        enfocado en seguir creciendo como Full-Stack. Me gusta participar en todo el proceso de construcción
                                        de un producto: entender una necesidad, plantear una solución y convertirla en una experiencia
                                        clara y funcional para el usuario.
                                    </p>

                                    <p className="bio-paragraph">
                                        Me considero una persona curiosa, autodidacta y responsable. Disfruto enfrentando retos complejos
                                        siempre con disposición para aprender nuevas herramientas y mejorar con cada proyecto.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;