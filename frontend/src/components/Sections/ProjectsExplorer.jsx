import React from 'react';
import RetroWindow from '../UI/RetroWindow';
import ErrorModal from '../UI/ErrorModal';

/**
 * Sección de proyectos con explorador de archivos estilo Windows.
 * Incluye sidebar de filtros (tree-view), grid de íconos con tooltips,
 * y la ventana de error draggable de fondo.
 *
 * @param {string} activeFilter - Filtro activo ('Todos', 'Web', 'Mobile', 'Backend', 'Otros')
 * @param {Function} setActiveFilter - Setter para cambiar el filtro
 * @param {Array} projectsData - Array de objetos de proyectos
 */
function ProjectsExplorer({ activeFilter, setActiveFilter, projectsData }) {
  // Filtra los proyectos según la categoría seleccionada
  const filteredProjects = activeFilter === 'Todos'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section className="projects-section" id="proyectos">
      
      {/* --- VENTANA DE ERROR (Fondo Izquierdo) --- */}
      <ErrorModal />

      <RetroWindow
        title="C:\Portafolio\Proyectos"
        titleBarColor="#000080"
        controls={['minimize', 'maximize', 'close']}
        className="explorer-window"
        menuBar={
          <div className="menu-bar">
            <span><u>A</u>rchivo</span>
            <span><u>E</u>dición</span>
            <span><u>V</u>er</span>
            <span>A<u>y</u>uda</span>
          </div>
        }
      >
        {/* Barra de herramientas simulada */}
        <div className="explorer-toolbar">
          <div className="toolbar-btn">⬅ Atrás</div>
          <div className="toolbar-btn">➡ Adelante</div>
          <div className="toolbar-btn">⬆ Arriba</div>
          <div className="toolbar-separator"></div>
          <div className="toolbar-btn">✂ Cortar</div>
          <div className="toolbar-btn">📋 Copiar</div>
          <div className="toolbar-btn">📋 Pegar</div>
        </div>

        {/* Barra de dirección dinámica */}
        <div className="explorer-address-bar">
          <span>Dirección:</span>
          <div className="address-input">
            C:\Portafolio\Proyectos{activeFilter !== 'Todos' ? `\\${activeFilter}` : ''}
          </div>
        </div>

        {/* Cuerpo del explorador (Dividido en dos columnas) */}
        <div className="window-body explorer-body-split">

          {/* PANEL IZQUIERDO: Filtros (Tree-view) */}
          <div className="explorer-sidebar">
            <div
              className={`tree-item ${activeFilter === 'Todos' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Todos')}
            >
              📂 Todos los archivos
            </div>
            <div
              className={`tree-item ${activeFilter === 'Web' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Web')}
            >
              📁 Desarrollo Web
            </div>
            <div
              className={`tree-item ${activeFilter === 'Mobile' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Mobile')}
            >
              📁 Apps Móviles
            </div>
            <div
              className={`tree-item ${activeFilter === 'Backend' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Backend')}
            >
              📁 Backend & APIs
            </div>
            <div
              className={`tree-item ${activeFilter === 'Otros' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Otros')}
            >
              📁 Otros / Eventos
            </div>
          </div>

          {/* PANEL DERECHO: Archivos filtrados */}
          <div className="explorer-content">
            <div className="explorer-grid">
              {filteredProjects.map((project) => (
                <div className="file-icon" tabIndex="0" key={project.id}>
                  <div className="icon-image">{project.icon}</div>
                  <span className="file-name">{project.name}</span>

                  {/* --- VENTANA EMERGENTE (Tooltip) --- */}
                  <div className="project-tooltip">
                    {/* Barra de título del tooltip */}
                    <div className="tooltip-titlebar">
                      <span>{project.name}</span>
                      <div className="titlebar-right">
                        <button aria-label="Minimize">_</button>
                        <button aria-label="Maximize">□</button>
                        <button aria-label="Close" style={{ fontWeight: 'bold' }}>X</button>
                      </div>
                    </div>
                    
                    {/* Área de la imagen con Scanlines */}
                    <div className="tooltip-image-area">
                      <img src={project.img} alt={`Vista previa de ${project.title}`} />
                    </div>

                    {/* Área de texto y botones */}
                    <div className="tooltip-content">
                      <div className="tooltip-header">
                        <h3 className="tooltip-title">{project.title}</h3>
                        <div className="tooltip-badge">
                          <div className="badge-dot"></div>
                          <span>{project.type}</span>
                        </div>
                      </div>
                      <p className="tooltip-desc">{project.desc}</p>
                      <button className="tooltip-btn">Ver proyecto ▶</button>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>

        </div>
      </RetroWindow>
    </section>
  );
}

export default ProjectsExplorer;
