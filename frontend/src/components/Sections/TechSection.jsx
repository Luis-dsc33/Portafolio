import React, { useState } from 'react';

const TechSection = () => {
    const [activeTab, setActiveTab] = useState('Frontend');

    const frameworksData = {
        Frontend: [
            { name: 'React', icon: '⚛️' },
            { name: 'Next.js', icon: 'Ⓝ' },
            { name: 'Astro', icon: '🔺' },
            { name: 'Tailwind', icon: '🌊' }
        ],
        Backend: [
            { name: 'Node.js', icon: '🟢' },
            { name: 'Express', icon: '🚂' },
            { name: 'Python', icon: '🐍' },
            { name: 'MySQL', icon: '🐬' }
        ],
        Móvil: [
            { name: 'React Native', icon: '📱' },
            { name: 'Flutter', icon: '💙' },
            { name: 'Kotlin', icon: '🤖' },
            { name: 'Swift', icon: '🍎' }
        ]
    };

    return (
        <section className="tech-section" id="tecnologias">
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
                                <span className="tech-icon" style={{ backgroundColor: '#f7df1e', color: '#000' }}>JS</span> JavaScript
                            </button>
                            <button className="tech-btn">
                                <span className="tech-icon" style={{ backgroundColor: '#3178c6', color: '#fff' }}>TS</span> TypeScript
                            </button>
                        </div>
                        {/* Fila 2 */}
                        <div className="tech-row">
                            <button className="tech-btn">
                                <span className="tech-icon" style={{ backgroundColor: '#e34f26', color: '#fff' }}>5</span> HTML
                            </button>
                            <button className="tech-btn">
                                <span className="tech-icon" style={{ backgroundColor: '#1572B6', color: '#fff' }}>3</span> CSS
                            </button>
                            <button className="tech-btn">
                                <span className="tech-icon" style={{ backgroundColor: '#4479A1', color: '#fff' }}>SQL</span> SQL
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
                                    {tech.icon} {tech.name}
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
                                <span className="tech-icon" style={{ backgroundColor: '#336791', color: '#fff' }}>PG</span> PostgreSQL
                            </button>
                            <button className="tech-btn">
                                <span className="tech-icon" style={{ backgroundColor: '#47A248', color: '#fff' }}>MG</span> MongoDB
                            </button>
                        </div>
                        <div className="tech-row">
                            <button className="tech-btn">
                                <span className="tech-icon" style={{ backgroundColor: '#F29111', color: '#fff' }}>MS</span> MySQL
                            </button>
                            <button className="tech-btn">
                                <span className="tech-icon" style={{ backgroundColor: '#CC292B', color: '#fff' }}>RD</span> Redis
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
                                { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
                                { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
                                { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
                                { name: 'Codex', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
                                { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg' },
                                { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
                                { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg' },
                                { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' }
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