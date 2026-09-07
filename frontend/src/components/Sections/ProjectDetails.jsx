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
                    src: '/proyects/inv.360/01_login.png',
                    caption: 'Portal de Autenticación y Seguridad (JWT). Acceso seguro con validación de formularios y roles (RBAC).'
                },
                {
                    src: '/proyects/inv.360/02_dashboard_kpis.png',
                    caption: 'Dashboard Ejecutivo & Predicción de Demanda por IA. Monitoreo en tiempo real de KPIs.'
                },
                {
                    src: '/proyects/inv.360/03_inventario_gestion.png',
                    caption: 'Módulo Maestro de Inventario. CRUD con semáforo logístico y umbrales configurables.'
                },
                {
                    src: '/proyects/inv.360/04_asistente_ia_chatbot.png',
                    caption: 'Asistente Cognitivo de Inventario. Chatbot IA Multimodal para operaciones de base de datos.'
                },
                {
                    src: '/proyects/inv.360/07_pos_punto_de_venta.png',
                    caption: 'Panel de Vendedor y Punto de Venta (POS). Resumen de ventas del turno y alertas de stock.'
                },
                {
                    src: '/proyects/inv.360/08_pos_catalogo_productos.png',
                    caption: 'Catálogo Visual de Productos para Venta Directa con carrito dinámico.'
                },
                {
                    src: '/proyects/inv.360/09_pos_carrito_drawer.png',
                    caption: 'Carrito de Pedidos y Salida Inmediata de Mercancía con deducción de stock atómica.'
                }
            ],
            fullDescription: `Inventory 360 es una solución de software moderna diseñada para resolver la desconexión tradicional entre el control de bodega, el piso de ventas y la toma de decisiones gerenciales. Integrando capacidades avanzadas de Inteligencia Artificial Cognitiva (Google Gemini), la plataforma trasciende el simple registro transaccional, convirtiendo el inventario en un asistente activo que predice la demanda a 60 días, alerta de forma temprana sobre quiebres de stock y permite la ejecución de tareas mediante lenguaje natural hablado o escrito.

🎯 Propósito del Sistema:
Automatizar y simplificar el flujo logístico para PyMEs y comercios minoristas, ofreciendo control integral 360° desde el ingreso de insumos hasta el checkout en punto de venta con analítica en tiempo real.

✨ Ventaja Diferencial (IA Activa):
Orquestación de operaciones de base de datos a través de lenguaje natural (voz y texto) y modelos predictivos que anticipan tendencias de compra y recomiendan compras preventivas de inventario.`,
            features: [
                "Semáforo Logístico en Tiempo Real: Clasificación instantánea (Normal, Bajo, Crítico) vinculada a umbrales configurables.",
                "Asistente por Voz y Texto: Registro instantáneo dictando órdenes en lenguaje natural.",
                "Dashboard Predictivo (BI): Gráficas comparativas entre consumo real y proyecciones generadas por algoritmos de machine learning.",
                "Cero Alucinaciones en IA Transaccional: Implementación de esquemas JSON estructurados en Gemini con doble validación en el backend con Prisma.",
                "Punto de Venta (POS): Catálogo visual, carrito dinámico y checkout rápido con deducción atómica de stock.",
                "Arquitectura de Roles (RBAC): Control de acceso segmentado entre Administrador y Vendedor/POS."
            ],
            repoLink: 'https://github.com/LuisPozole/Inventory_360'
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
