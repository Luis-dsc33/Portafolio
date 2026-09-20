import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const ProjectDetails = ({ projectsData }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useLanguage();

    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    
    const baseProject = projectsData.find(p => p.id === id) || projectsData[0];

    
    
    
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
            fullDescription: t('inv_desc'),
            features: [
                t('inv_f1'),
                t('inv_f2'),
                t('inv_f3'),
                t('inv_f4'),
                t('inv_f5')
            ],
            repoLink: 'https://github.com/Luis-dsc33/Inventory_360'
        },
        cashflow: {
            gallery: [
                {
                    src: '/proyects/cashflow/c1.jpeg',
                    caption: 'Pantalla principal de CashFlow - Resumen de finanzas.'
                },
                {
                    src: '/proyects/cashflow/c2.jpeg',
                    caption: 'Vista del panel de control.'
                },
                {
                    src: '/proyects/cashflow/c3.jpeg',
                    caption: 'Gestión de transacciones y presupuesto.'
                },
                {
                    src: '/proyects/cashflow/c4.jpeg',
                    caption: 'Control de ingresos y egresos.'
                },
                {
                    src: '/proyects/cashflow/c5.jpeg',
                    caption: 'Metas de ahorro e información adicional.'
                },
                {
                    src: '/proyects/cashflow/c6.jpeg',
                    caption: 'Asesor Financiero IA (Gemini).'
                }
            ],
            fullDescription: t('cash_desc'),
            features: [
                t('cash_f1'),
                t('cash_f2'),
                t('cash_f3'),
                t('cash_f4'),
                t('cash_f5'),
                t('cash_f6')
            ],
            repoLink: 'https://github.com/Luis-dsc33/Finanzas-en-pareja'
        },
        uhc: {
            gallery: [
                {
                    src: '/proyects/UHC_NOVA/homepage.png',
                    caption: 'Página Principal (Home): Vista de aterrizaje del evento.'
                },
                {
                    src: '/proyects/UHC_NOVA/dashboard.png',
                    caption: 'Dashboard Principal: Vista general del torneo, métricas y estado global.'
                },
                {
                    src: '/proyects/UHC_NOVA/mecanicas.png',
                    caption: 'Mecánicas Activas: Panel de control interactivo para reglas y eventos en tiempo real.'
                },
                {
                    src: '/proyects/UHC_NOVA/equipos.png',
                    caption: 'Gestión de Equipos: Vista administrativa de los escuadrones y su clasificación.'
                },
                {
                    src: '/proyects/UHC_NOVA/info_del equipo.png',
                    caption: 'Detalle de Escuadrón: Panel con la información completa del equipo y sus integrantes.'
                },
                {
                    src: '/proyects/UHC_NOVA/registration.png',
                    caption: 'Registro de Escuadrones: Interfaz del flujo de inscripción y validación de roles.'
                },
                {
                    src: '/proyects/UHC_NOVA/login.png',
                    caption: 'Acceso/Login: Interfaz de autenticación de usuarios y portal seguro.'
                },
                {
                    src: '/proyects/UHC_NOVA/perfil.png',
                    caption: 'Perfil de Jugador: Panel de administración de la cuenta del participante.'
                },
                {
                    src: '/proyects/UHC_NOVA/premios.png',
                    caption: 'Sistema de Premios: Vista de la bolsa de premios y distribución de recompensas.'
                },
                {
                    src: '/proyects/UHC_NOVA/reglas.png',
                    caption: 'Reglamento: Visualización del compendio de reglas y normativas del evento.'
                },
                {
                    src: '/proyects/UHC_NOVA/hoja de ruta.png',
                    caption: 'Hoja de Ruta (Roadmap): Cronograma de fases y planificación del torneo.'
                }
            ],
            fullDescription: t('uhc_desc'),
            features: [
                t('uhc_f1'),
                t('uhc_f2'),
                t('uhc_f3'),
                t('uhc_f4')
            ],
            repoLink: 'https://github.com/Luis-dsc33/UHC_NOVA_Deployment'
        },
        lira: {
            gallery: [
                {
                    src: '/proyects/lira/reminder.jpg',
                    caption: 'Lira: Asistente de IA para WhatsApp. Demostración de recordatorios en lenguaje natural.'
                },
                {
                    src: '/proyects/lira/diary.jpg',
                    caption: 'Diario Emocional. La IA interactúa proactivamente y registra el estado de ánimo.'
                },
                {
                    src: '/proyects/lira/lists.jpg',
                    caption: 'Gestión Inteligente de Listas. Operaciones CRUD mediante procesamiento de lenguaje natural (NLP).'
                }
            ],
            fullDescription: t('lira_desc'),
            features: [
                t('lira_f1'),
                t('lira_f2'),
                t('lira_f3'),
                t('lira_f4'),
                t('lira_f5'),
                t('lira_f6'),
                t('lira_f7'),
                t('lira_f8')
            ],
            repoLink: 'https://github.com/Luis-dsc33/lira-asistente'
        }
    };

    
    const details = extendedData[id] || {
        gallery: [{ src: baseProject?.img || '/icons/logo.png', caption: t('proj_det_preview') }],
        fullDescription: baseProject?.desc || t('proj_det_docs_wip'),
        features: [t('proj_det_feat_wip')],
        repoLink: '#'
    };

    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="project-details-page">
            <div className="details-topbar">
                <button className="back-btn" onClick={() => navigate('/')}>
                    {t('proj_back')}
                </button>
                <span className="topbar-title">{baseProject.name} - {baseProject.type}</span>
                <div className="topbar-controls">
                    <button className="win-btn">_</button>
                    <button className="win-btn">□</button>
                    <button className="win-btn close-btn" onClick={() => navigate('/')}>×</button>
                </div>
            </div>

            <div className="details-content">
                <div className="detail-section">
                    <div className="section-header-retro">
                        <div className="section-number">01</div>
                        <div className="section-titles">
                            <span className="small-exe">VISOR.DE.IMAGENES.EXE</span>
                            <h2 className="big-title">{t('proj_gallery')}</h2>
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
                <div className="detail-section">
                    <div className="section-header-retro">
                        <div className="section-number">02</div>
                        <div className="section-titles">
                            <span className="small-exe">STAGE.INI</span>
                            <h2 className="big-title">{t('proj_det_tech')}</h2>
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
                                    let iconPath = null;
                                    let fallbackIcon = '⚙️';
                                    const lowerT = t.toLowerCase();
                                    
                                    if (lowerT.includes('react')) iconPath = '/stack icons/React-Light.svg';
                                    else if (lowerT.includes('node')) iconPath = '/stack icons/NodeJS-Light.svg';
                                    else if (lowerT.includes('express')) iconPath = '/stack icons/ExpressJS-Light.svg';
                                    else if (lowerT.includes('mongo')) iconPath = '/stack icons/MongoDB.svg';
                                    else if (lowerT.includes('gemini') || lowerT.includes('ai')) fallbackIcon = '🧠'; 
                                    else if (lowerT.includes('docker')) iconPath = '/stack icons/Docker.svg';
                                    else if (lowerT.includes('flutter')) iconPath = '/stack icons/Flutter-Light.svg';
                                    else if (lowerT.includes('prisma')) iconPath = '/stack icons/Prisma.svg';
                                    else if (lowerT.includes('vite')) iconPath = '/stack icons/Vite-Light.svg';
                                    else if (lowerT.includes('tailwind')) iconPath = '/stack icons/TailwindCSS-Light.svg';
                                    else if (lowerT.includes('riverpod')) iconPath = '/stack icons/Dart-Light.svg';
                                    else if (lowerT.includes('firebase')) iconPath = '/stack icons/Firebase-Light.svg';

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
                                            {iconPath ? (
                                                <img src={iconPath} alt={t} style={{ width: '40px', height: '40px', marginBottom: '10px' }} />
                                            ) : (
                                                <span style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{fallbackIcon}</span>
                                            )}
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
                            <span className="tech-badge">{t('proj_det_tech_review')}</span>
                        )}
                    </div>
                </div>
                <div className="detail-section">
                    <div className="section-header-retro">
                        <div className="section-number">03</div>
                        <div className="section-titles">
                            <span className="small-exe">README.TXT</span>
                            <h2 className="big-title">{t('proj_det_about')}</h2>
                        </div>
                    </div>

                    <div className="readme-window retro-window">
                        <div className="notepad-menu">
                            <span>{t('proj_det_file')}</span>
                            <span>{t('proj_det_edit')}</span>
                            <span>{t('proj_det_view')}</span>
                            <span>{t('proj_det_help')}</span>
                        </div>
                        <div className="notepad-content">
                            <p style={{ whiteSpace: 'pre-wrap' }}>{details.fullDescription}</p>
                        </div>
                    </div>
                </div>
                <div className="detail-section">
                    <div className="section-header-retro">
                        <div className="section-number">04</div>
                        <div className="section-titles">
                            <span className="small-exe">PROPIEDADES.DEL.SISTEMA.CPL</span>
                            <h2 className="big-title">{t('proj_det_features')}</h2>
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
                <div className="details-footer">
                    <button
                        className="retro-btn-green"
                        onClick={() => window.open(details.repoLink, '_blank')}
                    >
                        {t('proj_det_repo')}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetails;
