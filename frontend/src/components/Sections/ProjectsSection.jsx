import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. IMPORTAMOS EL HOOK DE NAVEGACIÓN

const ProjectsSection = () => {
  const navigate = useNavigate(); // 2. INICIALIZAMOS EL HOOK

  // 1. Añadimos la propiedad 'category' e 'image' a cada proyecto
  const projects = [
    {
      id: 'inventory',
      title: 'INVENTORY_360',
      type: 'AI-Powered SaaS',
      category: 'web',
      tech: ['React 19', 'Express 5', 'MongoDB Atlas', 'Gemini 2.5 Flash', 'Vite 5', 'Docker'],
      desc: 'Plataforma SaaS full-stack para gestión inteligente de inventarios. Integra un asistente de IA multimodal (voz y texto) orquestado con Gemini, análisis predictivo de stock a 60 días y control de acceso RBAC. Arquitectura cliente-servidor desplegada localmente.',
      image: '/proyects/inv.360/02_dashboard_kpis.png'
    },
    {
      id: 'lira',
      title: 'LIRA (A.I.L.A)',
      type: 'AI Backend Assistant',
      category: 'backend',
      tech: ['Node.js', 'Gemini API', 'MongoDB'],
      desc: 'Desarrollo de backend para un asistente de inteligencia artificial asíncrono con conciencia de contexto, capaz de manejar flujos de memoria y peticiones complejas.',
      image: 'https://via.placeholder.com/600x300/0b1a15/4caf7d?text=Vista+Previa+Lira'
    },
    {
      id: 'uhc',
      title: 'UHC NOVA',
      type: 'E-Sports Platform',
      category: 'otros',
      tech: ['React', 'Node.js', 'Express', 'Prisma', 'Tailwind CSS', 'Vite'],
      desc: 'Plataforma de gestión para torneos de e-sports (Ultra Hardcore). Integra plugins personalizados, automatización mediante webhooks de Discord y pre-generación de mapas.',
      image: '/proyects/UHC_NOVA/dashboard.png'
    },
    {
      id: 'mes',
      title: 'SYSTEM_MES',
      type: 'Hackathon Award (2do Lugar)',
      category: 'web',
      tech: ['React', 'Node.js', 'IoT'],
      desc: 'Manufacturing Execution System (MES) desarrollado para la monitorización de plantas químicas. Proyecto galardonado en el Hackathon CANACINTRA 2025 por su impacto industrial.',
      image: 'https://via.placeholder.com/600x300/0b1a15/4caf7d?text=Vista+Previa+System+MES'
    },
    {
      id: 'agua',
      title: 'MONITOR_AGUA',
      type: 'Mobile App',
      category: 'mobile',
      tech: ['Flutter', 'Dart', 'API'],
      desc: 'Aplicación móvil para el monitoreo inteligente del consumo de agua. Proyecto desarrollado durante el Hackathon Querétaro Digital.',
      image: 'https://via.placeholder.com/600x300/0b1a15/4caf7d?text=Vista+Previa+Monitor+Agua'
    },
    {
      id: 'cashflow',
      title: 'CASHFLOW',
      type: 'Personal Finance App',
      category: 'mobile',
      tech: ['Flutter', 'Riverpod', 'Firebase', 'Gemini AI', 'fl_chart'],
      desc: 'Aplicación móvil para la gestión de finanzas personales y compartidas. Cuenta con control estricto de presupuesto, gráficos y un asistente IA (Gemini) para resúmenes y consejos personalizados.',
      image: '/proyects/cashflow/cashflow_preview.jpg'
    }
  ];

  // Estados (Eliminamos isModalOpen)
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(projects[0]);

  // Lógica de filtrado
  const filteredProjects = projects.filter(proj =>
    activeFilter === 'all' ? true : proj.category === activeFilter
  );

  // Actualizar el proyecto activo cuando cambia el filtro
  useEffect(() => {
    if (filteredProjects.length > 0) {
      setActiveProject(filteredProjects[0]);
    }
  }, [activeFilter]);

  return (
    <section className="tech-section" id="proyectos">
      <div className="tech-header">
        <span className="header-icon" aria-hidden="true">🕹️</span>
        <h2 className="main-title">Proyectos</h2>
        <hr className="pixel-divider" />
      </div>

      <div className="arcade-cabinet">
        <div className="crt-screen">
          <div className="scanlines"></div>

          <div className="screen-content">

            {/* --- Panel Izquierdo: Menú y Filtros --- */}
            <div className="arcade-menu">
              <h3 className="menu-title">SELECT_STAGE</h3>

              <div className="arcade-filters">
                <button
                  className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('all')}
                >[TODO]</button>
                <button
                  className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('web')}
                >[WEB]</button>
                <button
                  className={`filter-btn ${activeFilter === 'backend' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('backend')}
                >[API]</button>
                <button
                  className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('mobile')}
                >[APP]</button>
                <button
                  className={`filter-btn ${activeFilter === 'otros' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('otros')}
                >[OTROS]</button>
              </div>

              <ul className="project-list">
                {filteredProjects.map((proj) => (
                  <li
                    key={proj.id}
                    className={`menu-item ${activeProject.id === proj.id ? 'active' : ''}`}
                    onClick={() => setActiveProject(proj)}
                  >
                    {activeProject.id === proj.id ? '> ' : '  '} {proj.title}
                  </li>
                ))}
              </ul>

              <div className="insert-coin">INSERT COIN TO PLAY</div>
            </div>

            {/* --- Panel Derecho: Detalles del Proyecto --- */}
            <div className="arcade-details">
              {filteredProjects.length > 0 ? (
                <>
                  <div className="details-header">
                    <h3 className="project-title">{activeProject.title}</h3>
                    <span className="project-type">[{activeProject.type}]</span>
                  </div>

                  <div className="details-body">
                    <div className="project-preview">
                      <img src={activeProject.image} alt={`Vista previa de ${activeProject.title}`} />
                    </div>

                    <p className="project-desc">{activeProject.desc}</p>

                    <div className="tech-stack-arcade">
                      <span className="tech-label">TECH_STACK:</span>
                      <div className="tech-tags">
                        {activeProject.tech.map((tech, index) => (
                          <span key={index} className="arcade-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="arcade-actions">
                    {/* 3. CONECTAMOS EL BOTÓN A LA NAVEGACIÓN */}
                    <button
                      className="arcade-btn primary-btn"
                      onClick={() => navigate(`/proyecto/${activeProject.id}`)}
                    >
                      [A] LEER INFO
                    </button>
                    {/* El botón de repo lo podemos dejar para abrir el GitHub directamente */}
                    <button
                      className="arcade-btn secondary-btn"
                      onClick={() => window.open('https://github.com/tu-usuario', '_blank')}
                    >
                      [B] REPO
                    </button>
                  </div>
                </>
              ) : (
                <div className="details-body">
                  <p className="project-desc">ERROR: No hay datos en este sector.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
      {/* EL MODAL FUE ELIMINADO COMPLETAMENTE */}
    </section>
  );
};

export default ProjectsSection;