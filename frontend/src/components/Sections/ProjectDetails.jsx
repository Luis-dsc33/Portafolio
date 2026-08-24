import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProjectDetails = ({ projectsData }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    // Buscamos la info básica en caso de necesitarla
    const baseProject = projectsData.find(p => p.id === id) || projectsData[0];

    // ============================================================================
    // BASE DE DATOS DE PROYECTOS (Aquí vivirá toda la info de tus README)
    // ============================================================================
    const extendedData = {
        inventory: {
            gallery: [
                {
                    src: '/inventory-arch.png',
                    caption: 'Arquitectura Cliente-Servidor desacoplada con integración de Google Gemini 2.5 Flash.'
                },
                {
                    src: 'https://via.placeholder.com/800x450/0b1a15/4caf7d?text=Dashboard+y+Analytics',
                    caption: 'Dashboard Ejecutivo: Monitoreo en tiempo real de KPIs y predicción de demanda a 60 días.'
                },
                {
                    src: 'https://via.placeholder.com/800x450/0b1a15/4caf7d?text=Asistente+Cognitivo+IA',
                    caption: 'Asistente IA Multimodal: Ejecución de operaciones complejas mediante voz y texto natural.'
                }
            ],
            fullDescription: `Inventory 360 es una plataforma SaaS full-stack diseñada para transformar la administración de inventarios mediante la integración de Inteligencia Artificial (Google Gemini).

Ofrece automatización de operaciones a través de lenguaje natural (texto y voz), análisis predictivo avanzado y una arquitectura robusta orientada a la escalabilidad empresarial.

🧠 Lógica de Integración AI:
No utiliza la IA como un simple generador de texto, sino como un orquestador de intenciones. El motor evalúa el prompt, extrae parámetros clave y ejecuta la operación directa sobre MongoDB, garantizando la integridad referencial y de tipos de datos sin perder el contexto de la conversación.`,
            features: [
                "Asistente IA Cognitivo: Procesamiento de NLP para operaciones complejas mediante voz (Web Speech API) y texto.",
                "Memoria Conversacional: Gestión de contexto persistente en MongoDB para flujos multi-turno.",
                "Business Intelligence: Dashboard en tiempo real con modelos predictivos a 60 días.",
                "Gestión Avanzada CRUD: Control de semáforo logístico, taxonomía dinámica y edición en línea.",
                "Control de Acceso (RBAC): Segmentación de capacidades operativas (Administrador vs Vendedor/POS).",
                "Resolución de Intenciones: Mapeo de JSON estructurado devuelto por Gemini directo a transacciones de DB."
            ],
            repoLink: 'https://github.com/LuisEnrique/Inventory_360' // Cambia esto por tu link real
        }
        // Aquí agregaremos 'lira', 'uhc', 'mes', etc., en los siguientes pasos
    };

    // Validamos si existe la información del proyecto en nuestro diccionario
    const details = extendedData[id] || {
        gallery: [{ src: baseProject?.img || 'https://via.placeholder.com/800x450', caption: 'Vista preliminar del proyecto' }],
        fullDescription: baseProject?.desc || 'La documentación de este proyecto está en construcción.',
        features: ["Características pendientes de documentar."],
        repoLink: '#'
    };

    // Efecto para que la página siempre empiece desde arriba al cargar un proyecto
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="project-details-page">

            {/* --- BARRA SUPERIOR DE NAVEGACIÓN --- */}
            <div className="details-topbar">
                <button className="back-btn" onClick={() => navigate('/')}>
                    ◀ Volver a proyectos
                </button>
                <span className="topbar-title">{baseProject.name} - {baseProject.type}</span>
                <div className="topbar-controls">
                    <button className="win-btn">_</button>
                    <button className="win-btn">□</button>
                    <button className="win-btn close-btn" onClick={() => navigate('/')}>×</button>
                </div>
            </div>

            <div className="details-content">

                {/* --- SECCIÓN 01: VISOR DE IMÁGENES --- */}
                <div className="detail-section">
                    <div className="section-header-retro">
                        <div className="section-number">01</div>
                        <div className="section-titles">
                            <span className="small-exe">VISOR.DE.IMAGENES.EXE</span>
                            <h2 className="big-title">Galería del proyecto</h2>
                        </div>
                    </div>

                    <div className="gallery-window retro-window">
                        <div className="gallery-main-view">
                            <img src={details.gallery[currentImgIndex].src} alt="Project Preview" />
                            <button
                                className="gallery-nav left"
                                onClick={() => setCurrentImgIndex(prev => prev === 0 ? details.gallery.length - 1 : prev - 1)}
                            >◀</button>
                            <button
                                className="gallery-nav right"
                                onClick={() => setCurrentImgIndex(prev => prev === details.gallery.length - 1 ? 0 : prev + 1)}
                            >▶</button>

                            <div className="gallery-counter">
                                0{currentImgIndex + 1} / 0{details.gallery.length}
                            </div>
                        </div>

                        <p className="gallery-caption">{details.gallery[currentImgIndex].caption}</p>

                        <div className="gallery-thumbnails">
                            {details.gallery.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`thumb-box ${currentImgIndex === idx ? 'active' : ''}`}
                                    onClick={() => setCurrentImgIndex(idx)}
                                >
                                    <div className="thumb-label">0{idx + 1}</div>
                                    <img src={img.src} alt={`Thumb ${idx}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* =========================================
            SECCIÓN 02: TECNOLOGÍAS (STAGE.INI)
            ========================================= */}
                <div className="detail-section">
                    <div className="section-header-retro">
                        <div className="section-number">02</div>
                        <div className="section-titles">
                            <span className="small-exe">STAGE.INI</span>
                            <h2 className="big-title">Tecnologías utilizadas</h2>
                        </div>
                    </div>

                    <div className="tech-belt">
                        {baseProject.tech && baseProject.tech.length > 0 ? (
                            <div className="tech-grid" style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '20px',
                                padding: '20px',
                                backgroundColor: '#eaddbe',
                                border: '3px solid #000',
                                boxShadow: '4px 4px 0px rgba(0,0,0,0.2)'
                            }}>
                                {baseProject.tech.map((t, i) => {
                                    // Asignamos iconos y colores base según la tecnología
                                    let icon = '⚙️';
                                    let color = '#2c2416';
                                    if (t.toLowerCase().includes('react')) { icon = '⚛️'; color = '#61dafb'; }
                                    if (t.toLowerCase().includes('node') || t.toLowerCase().includes('express')) { icon = '🟢'; color = '#8cc84b'; }
                                    if (t.toLowerCase().includes('mongo')) { icon = '🍃'; color = '#47a248'; }
                                    if (t.toLowerCase().includes('gemini') || t.toLowerCase().includes('ai')) { icon = '🧠'; color = '#4285f4'; }
                                    if (t.toLowerCase().includes('docker')) { icon = '🐋'; color = '#0db7ed'; }
                                    if (t.toLowerCase().includes('flutter')) { icon = '💙'; color = '#02569b'; }

                                    return (
                                        <div key={i} className="tech-item-retro" style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '120px',
                                            height: '110px',
                                            backgroundColor: '#d4d0c8',
                                            border: '2px solid #000',
                                            boxShadow: '2px 2px 0px #000',
                                            transition: 'transform 0.1s',
                                            cursor: 'default'
                                        }}>
                                            <span style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{icon}</span>
                                            <span style={{
                                                fontFamily: "'VT323', monospace",
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                color: '#000',
                                                textAlign: 'center',
                                                borderTop: '2px dotted #888',
                                                width: '100%',
                                                paddingTop: '5px'
                                            }}>
                                                {t}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <span className="tech-badge">Tecnologías en revisión</span>
                        )}
                    </div>
                </div>

                {/* =========================================
            SECCIÓN 03: DESCRIPCIÓN (README.TXT)
            ========================================= */}
                <div className="detail-section">
                    <div className="section-header-retro">
                        <div className="section-number">03</div>
                        <div className="section-titles">
                            <span className="small-exe">README.TXT</span>
                            <h2 className="big-title">Sobre el proyecto</h2>
                        </div>
                    </div>

                    <div className="readme-window retro-window">
                        <div className="notepad-menu">
                            <span>Archivo</span>
                            <span>Edición</span>
                            <span>Ver</span>
                            <span>Ayuda</span>
                        </div>
                        <div className="notepad-content">
                            {/* Usamos pre-wrap para respetar los saltos de línea del string */}
                            <p style={{ whiteSpace: 'pre-wrap' }}>{details.fullDescription}</p>
                        </div>
                    </div>
                </div>

                {/* =========================================
            SECCIÓN 04: CARACTERÍSTICAS
            ========================================= */}
                <div className="detail-section">
                    <div className="section-header-retro">
                        <div className="section-number">04</div>
                        <div className="section-titles">
                            <span className="small-exe">PROPIEDADES.DEL.SISTEMA.CPL</span>
                            <h2 className="big-title">Características</h2>
                        </div>
                    </div>

                    <div className="features-window retro-window">
                        <div className="features-list">
                            {details.features.map((feat, i) => (
                                <div key={i} className="feature-item">
                                    <span className="feat-number">0{i + 1}</span>
                                    <span className="feat-text">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* =========================================
            PIE DE PÁGINA
            ========================================= */}
                <div className="details-footer">
                    <button
                        className="retro-btn-green"
                        onClick={() => window.open(details.repoLink, '_blank')}
                    >
                        * Ver repositorio
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetails;
