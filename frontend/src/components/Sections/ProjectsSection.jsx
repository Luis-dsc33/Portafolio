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
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Gemini AI', 'whatsapp-web.js', 'Docker', 'chrono-node'],
      desc: 'Desarrollo de backend para un asistente de inteligencia artificial asíncrono con conciencia de contexto, capaz de manejar flujos de memoria y peticiones complejas.',
      image: '/proyects/lira/reminder.jpg'
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
    <section className="tech-section reveal" id="proyectos">
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
                        {activeProject.tech.map((tech, index) => {
                            let iconPath = null;
                            const lowerT = tech.toLowerCase();
                            if (lowerT.includes('react')) iconPath = '/stack icons/React-Light.svg';
                            else if (lowerT.includes('node')) iconPath = '/stack icons/NodeJS-Light.svg';
                            else if (lowerT.includes('express')) iconPath = '/stack icons/ExpressJS-Light.svg';
                            else if (lowerT.includes('mongo')) iconPath = '/stack icons/MongoDB.svg';
                            else if (lowerT.includes('docker')) iconPath = '/stack icons/Docker.svg';
                            else if (lowerT.includes('flutter')) iconPath = '/stack icons/Flutter-Light.svg';
                            else if (lowerT.includes('prisma')) iconPath = '/stack icons/Prisma.svg';
                            else if (lowerT.includes('vite')) iconPath = '/stack icons/Vite-Light.svg';
                            else if (lowerT.includes('tailwind')) iconPath = '/stack icons/TailwindCSS-Light.svg';
                            else if (lowerT.includes('riverpod')) iconPath = '/stack icons/Dart-Light.svg';
                            else if (lowerT.includes('firebase')) iconPath = '/stack icons/Firebase-Light.svg';

                            return (
                              <span key={index} className="arcade-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                {iconPath && <img src={iconPath} alt={tech} style={{ width: '14px', height: '14px' }} />}
                                {tech}
                              </span>
                            );
                        })}
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