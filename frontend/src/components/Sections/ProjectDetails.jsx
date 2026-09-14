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
            fullDescription: `Esta es una aplicación móvil desarrollada en Flutter orientada a la gestión de finanzas personales, con la capacidad de extenderse para manejar finanzas compartidas en pareja. La aplicación ayuda a los usuarios a llevar un control estricto de su presupuesto, ingresos, gastos y metas financieras. Cuenta con un diseño amigable de estilo pastel y un asistente impulsado por inteligencia artificial (Gemini) para brindar resúmenes y consejos personalizados.

Arquitectura y Tecnologías:
El proyecto está estructurado de manera modular para garantizar escalabilidad y facilidad de mantenimiento utilizando Flutter (Dart), Riverpod para la gestión del estado, y Firebase (Authentication, Cloud Firestore) como backend. La IA está integrada con Google Generative AI (Gemini API) y se utilizan fl_chart para gráficos y flutter_local_notifications para notificaciones locales.

Justificación Técnica:
La elección de Flutter como framework principal permite construir un producto de alta calidad en múltiples plataformas utilizando una única base de código. La utilización de Firebase proporciona almacenamiento y sincronización de datos en tiempo real, vital para una app financiera que se usa a diario.`,
            features: [
                "Autenticación Sencilla: Sistema de inicio de sesión fácil que automáticamente mapea nombres de usuarios genéricos.",
                "Panel de Control (Dashboard): Vista panorámica de las finanzas con gráficos de dona para el control del presupuesto.",
                "Gestión de Transacciones: Registro de ingresos y gastos diarios organizados por categorías (individual o compartida).",
                "Presupuesto Mensual: Definición y seguimiento de topes de gastos fijos y variables.",
                "Metas de Ahorro: Seguimiento interactivo para objetivos a largo plazo (ej. Casa, Viaje).",
                "Asesor Financiero IA (Gemini): Lectura del estado de cuenta y consejos dinámicos o alertas ante desvíos de presupuesto."
            ],
            repoLink: '#'
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
            fullDescription: `UHC NOVA es un sistema avanzado de gestión de torneos diseñado para automatizar y administrar eventos competitivos de e-sports, específicamente para la modalidad Ultra Hardcore (UHC). Actúa como una solución completa que integra un panel de control interactivo para los participantes y un panel de administración seguro para los organizadores, permitiendo el control total sobre los eventos, los registros de equipos y las métricas en tiempo real.

Arquitectura y Tecnologías:
El proyecto está construido bajo estándares de Clean Code, una arquitectura cliente-servidor desacoplada y orientada a servicios (SaaS).
En el Frontend utiliza React, Vite y Tailwind CSS para una SPA rápida y responsiva, apoyada con Motion y Radix para micro-animaciones fluidas y una experiencia premium. El Backend está desarrollado con Node.js y Express, proveyendo una API RESTful de alto rendimiento. Para la Base de Datos se implementó Prisma ORM con SQLite, diseñado para escalar a PostgreSQL, y cuenta con un sistema de Ciberseguridad robusto utilizando JWT (JSON Web Tokens) y encriptación Bcrypt.`,
            features: [
                "Sistema Avanzado de Registro y Jerarquización de Equipos: Creación de 'Escuadrones' de 4 jugadores con roles de Capitán y Recluta, con validación automática de integridad.",
                "Terminal de 'Alto Mando' (Back-office): Panel administrativo seguro para monitorear métricas, gestionar fases del torneo y auditar comprobantes.",
                "Dashboards en Tiempo Real (Telemetría): Interfaces dinámicas con cuenta regresiva, estado del torneo y 'mecánicas' activas en el evento.",
                "Flujos de Autenticación Segura: Acceso protegido basado en roles. Solo capitanes o administradores pueden interactuar con funciones de gestión."
            ],
            repoLink: '#'
        }
        // Aquí agregaremos 'lira', 'mes', etc., en los siguientes pasos
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
