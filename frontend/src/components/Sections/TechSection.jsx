import React, { useState } from 'react';

const TechSection = () => {
    const [activeTab, setActiveTab] = useState('Frontend');

    const frameworksData = {
        Frontend: [
            { name: 'React', icon: '/stack icons/React-Light.svg' },
            { name: 'Vite', icon: '/stack icons/Vite-Light.svg' },
            { name: 'Tailwind', icon: '/stack icons/TailwindCSS-Light.svg' },
            { name: 'Zustand', icon: '/stack icons/React-Light.svg' } // Redux.svg or React fallback
        ],
        Backend: [
            { name: 'Node.js', icon: '/stack icons/NodeJS-Light.svg' },
            { name: 'Express', icon: '/stack icons/ExpressJS-Light.svg' },
            { name: 'Prisma', icon: '/stack icons/Prisma.svg' },
            { name: 'Docker', icon: '/stack icons/Docker.svg' }
        ],
        Móvil: [
            { name: 'Flutter', icon: '/stack icons/Flutter-Light.svg' },
            { name: 'Dart', icon: '/stack icons/Dart-Light.svg' },
            { name: 'Riverpod', icon: '/stack icons/Dart-Light.svg' },
            { name: 'Firebase', icon: '/stack icons/Firebase-Light.svg' }
        ]
    };

    return (
        <section className="tech-section reveal" id="tecnologias">
            <div className="tech-header">
                <span className="header-icon" aria-hidden="true">💾</span>
                <h2 className="main-title">Tecnologías</h2>
                <hr className="pixel-divider" />
            </div>

            <div className="tech-cards-container">
                {/* --- TARJETA 1: DISQUETE (Lenguajes) --- */}
                <div className="retro-card floppy-card">
                    <div className="card-divider-line"></div>

                    <div className="card-label">
                        <div className="label-icon">{'</>'}</div>
                        <div className="label-text">
                            <span className="label-num">01 /</span>
                            <h3>Lenguajes</h3>
                            <p>La base de todo con lo que trabajo</p>
                        </div>
                        {/* Doblez de esquina */}
                        <div className="label-fold"></div>
                    </div>

                    <div className="card-tech-area">
                        {/* Fila 1 */}
                        <div className="tech-row">
                            <button className="tech-btn">
                                <img src="/stack icons/JavaScript.svg" alt="JS" className="tech-icon" /> JavaScript
                            </button>
                            <button className="tech-btn">
                                <img src="/stack icons/TypeScript.svg" alt="TS" className="tech-icon" /> TypeScript
                            </button>
                        </div>
                        {/* Fila 2 */}
                        <div className="tech-row">
                            <button className="tech-btn">
                                <img src="/stack icons/HTML.svg" alt="HTML" className="tech-icon" /> HTML
                            </button>
                            <button className="tech-btn">
                                <img src="/stack icons/CSS.svg" alt="CSS" className="tech-icon" /> CSS
                            </button>
                            <button className="tech-btn">
                                <img src="/stack icons/PostgreSQL-Light.svg" alt="SQL" className="tech-icon" /> SQL
                            </button>
                        </div>
                    </div>

                    {/* DETALLES REALISTAS DEL DISQUETE */}
                    <div className="floppy-bottom">
                        <div className="floppy-hole"></div>
                        <div className="floppy-slider">
                            <div className="slider-window"></div>
                        </div>
                        <span className="floppy-capacity">1.44 MB</span>
                        <div className="floppy-arrow-box">
                            <span className="floppy-arrow">↓</span>
                        </div>
                    </div>
                </div>

                {/* --- TARJETA 2: CASETE (Frameworks) --- */}
                <div className="retro-card cassette-card">
                    <span className="corner-screw corner-tl">✕</span>
                    <span className="corner-screw corner-tr">✕</span>
                    <span className="corner-screw corner-bl">✕</span>
                    <span className="corner-screw corner-br">✕</span>

                    <div className="card-label cassette-label">
                        <div className="label-icon">{'>_'}</div>
                        <div className="label-text">
                            <span className="label-num">02 /</span>
                            <h3>Frameworks</h3>
                            <p>Aceleradores para crear software moderno y adaptable.</p>
                        </div>
                        <div className="cassette-timer">120<br />min</div>
                    </div>

                    {/* DETALLES REALISTAS DEL CASETE */}
                    <div className="cassette-spools">
                        <div className="spool"></div>
                        <div className="tape-window">
                            <div className="tape-roll"></div>
                            <div className="tape-ruler">
                                <span>100</span>
                                <span>50</span>
                                <span>0</span>
                            </div>
                        </div>
                        <div className="spool"></div>
                    </div>

                    <div className="card-tech-area cassette-tech">
                        <div className="tech-row">
                            {frameworksData[activeTab].map((tech, index) => (
                                <button key={index} className="tech-btn">
                                    <img src={tech.icon} alt={tech.name} className="tech-icon" /> {tech.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="cassette-tabs">
                        <span className="tape-icon">▶</span>
                        <div className="tabs-container">
                            {['Frontend', 'Backend', 'Móvil'].map((tab) => (
                                <button 
                                    key={tab}
                                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    <div className="btn-led"></div>
                                    <span>{tab}</span>
                                </button>
                            ))}
                        </div>
                        <span className="tape-icon">↻</span>
                    </div>
                </div>

                {/* --- TARJETA 3: CARTUCHO (Bases de Datos) --- */}
                <div className="retro-card cartridge-card">
                    {/* Detalles de agarre del cartucho */}
                    <div className="cartridge-grooves">
                        <div className="groove"></div>
                        <div className="groove"></div>
                        <div className="groove"></div>
                        <div className="groove"></div>
                    </div>

                    <div className="card-label cartridge-label">
                        <div className="label-icon">{'🗄️'}</div>
                        <div className="label-text">
                            <span className="label-num">03 /</span>
                            <h3>Bases de Datos</h3>
                            <p>Almacenamiento seguro y estructurado.</p>
                        </div>
                        <div className="quality-seal">Seal of<br/>Quality</div>
                    </div>

                    <div className="card-tech-area cartridge-tech">
                        <div className="tech-row">
                            <button className="tech-btn">
                                <img src="/stack icons/PostgreSQL-Light.svg" alt="PG" className="tech-icon" /> PostgreSQL
                            </button>
                            <button className="tech-btn">
                                <img src="/stack icons/MongoDB.svg" alt="MG" className="tech-icon" /> MongoDB
                            </button>
                        </div>
                        <div className="tech-row">
                            <button className="tech-btn">
                                <img src="/stack icons/Firebase-Light.svg" alt="FB" className="tech-icon" /> Firebase
                            </button>
                            <button className="tech-btn">
                                <img src="/stack icons/SQLite.svg" alt="SQ" className="tech-icon" /> SQLite
                            </button>
                        </div>
                    </div>

                    <div className="cartridge-bottom">
                        <div className="cartridge-cutout">
                            <div className="cartridge-pins">
                                {[...Array(15)].map((_, i) => <div key={i} className="pin"></div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SECCIÓN DE HERRAMIENTAS (Pegboard) --- */}
            <div className="tools-board">
                {/* Borde exterior retro */}
                <div className="board-outer-frame">
                    <div className="board-header">
                        <span className="board-screw left">
                            <span className="screw-line"></span>
                        </span>
                        
                        {/* Detalles de rayas horizontales del header */}
                        <div className="header-stripes"></div>
                        
                        <div className="board-title">
                            <div className="cmd-icon-wrapper">
                                <span className="cmd-icon">⌘</span>
                            </div>
                            <span className="board-num">03 /</span>
                            <h3>Herramientas</h3>
                        </div>

                        <div className="header-stripes"></div>

                        <span className="board-screw right">
                            <span className="screw-line"></span>
                        </span>
                    </div>

                    <div className="pegboard-area">
                        <div className="tools-grid">
                            {[
                                { name: 'Git', icon: '/stack icons/Git.svg' },
                                { name: 'GitHub', icon: '/stack icons/Github-Light.svg' },
                                { name: 'VS Code', icon: '/stack icons/VSCode-Light.svg' },
                                { name: 'Docker', icon: '/stack icons/Docker.svg' },
                                { name: 'NPM', icon: '/stack icons/Npm-Light.svg' },
                                { name: 'Vercel', icon: '/stack icons/Vercel-Light.svg' },
                                { name: 'Figma', icon: '/stack icons/Figma-Light.svg' },
                                { name: 'Postman', icon: '/stack icons/Postman.svg' }
                            ].map((tool, index) => (
                                <div key={index} className="tool-card">
                                    <div className="tool-pin">
                                        <div className="pin-hole"></div>
                                    </div>
                                    {/* Agujeros en las esquinas superiores */}
                                    <span className="card-hole top-left"></span>
                                    <span className="card-hole top-right"></span>

                                    <div className="tool-icon">
                                        <img src={tool.icon} alt={tool.name} />
                                    </div>
                                    <span className="tool-name">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="board-footer">
                        <div className="footer-grooves">
                            <div className="f-groove"></div>
                            <div className="f-groove"></div>
                        </div>
                        <div className="footer-tag-container">
                            <div className="footer-tag">Mis aliadas del día a día</div>
                        </div>
                        <div className="footer-grooves right">
                            <div className="f-groove-small"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechSection;