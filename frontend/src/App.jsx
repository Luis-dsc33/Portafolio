import React from 'react';
import Draggable from 'react-draggable'; // Importante para poder arrastrar las ventanas
import './App.css';

function App() {
  return (
    <div className="portfolio-wrapper">
      
      {/* 1. Topbar: Título y Botones */}
      <header className="top-bar">
        <div className="logo-section">
          <span className="logo-icon">🖥️</span>
          <span className="logo-text">PORTFOLIO.EXE</span>
        </div>
        
        <nav className="nav-menu">
          <button className="btn-retro"><span role="img" aria-label="inicio">🐥</span> Inicio</button>
          <button className="btn-retro"><span role="img" aria-label="proyectos">📁</span> Proyectos</button>
          <button className="btn-retro"><span role="img" aria-label="tecnologias">🌐</span> Tecnologías</button>
          <button className="btn-retro"><span role="img" aria-label="sobre mi">👨‍💼</span> Sobre mí</button>
          <button className="btn-retro"><span role="img" aria-label="contacto">🖱️</span> Contacto</button>
        </nav>
      </header>
      
      {/* 2. Contenido Central */}
      <main className="main-content">
        {/* Aquí iría la enredadera de la izquierda, la dejaremos como un div vacío por ahora para dar espacio */}
        <div className="left-decorations"></div>

        <div className="profile-section">
          <div className="photo-frame">
            <img src="/perfil.jpeg" alt="Perfil" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div className="text-section">
            <h1 className="main-title">Hola, Soy Damian</h1>
            <h2 className="sub-title">Ingeniero en Sistemas Computacionales</h2>

            <p className="intro-text">
              Apasionado por escribir código y transformar la lógica en<br />
              experiencias interactivas modernas. Disfruto desarrollar soluciones<br />
              web y móviles escalables dentro del ecosistema de JavaScript,<br />
              manteniendo siempre una curiosidad constante por seguir aprendiendo.
            </p>

            <div className="action-buttons">
              <button className="btn-retro btn-primary">▶ Ver proyectos</button>
              <button className="btn-retro">✉ Contactar</button>
              <button className="btn-retro">📄 CV</button>
            </div>
          </div>
        </div>
      </main>
      
      {/* 3. Escritorio/Mesa (Lado Derecho) */}
      <aside className="desk-section">
        
        {/* Ventana Flotante: Avión */}
        <Draggable handle=".title-bar">
          <div className="window window-avion">
            <div className="title-bar" style={{cursor: 'grab'}}>
              <div className="title-bar-text">avion.webp - Visor de imágenes</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize">_</button>
                <button aria-label="Maximize">□</button>
                <button aria-label="Close">X</button>
              </div>
            </div>
            <div className="window-body image-body">
              <img src="/avion.jpg" alt="Avión clásico" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </Draggable>

        {/* Ventana Flotante: Notas */}
        <Draggable handle=".title-bar">
          <div className="window window-notas">
            <div className="title-bar" style={{cursor: 'grab'}}>
              <div className="title-bar-text">notas.txt - Bloc de notas</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize">_</button>
                <button aria-label="Maximize">□</button>
                <button aria-label="Close">X</button>
              </div>
            </div>
            {/* Barra de menú clásica */}
            <div className="menu-bar">
              <span><u>A</u>rchivo</span>
              <span><u>E</u>dición</span>
              <span><u>B</u>úsqueda</span>
              <span>A<u>y</u>uda</span>
            </div>
            <div className="window-body text-body">
              <p className="bold-text">Pendientes para hoy:</p>
              <ul className="todo-list">
                <li>- Revisar PRs</li>
                <li>- Corregir bugs</li>
                <li>- Commit rama &lt;testing&gt;</li>
                <li>- Leer documentación</li>
                <li>- Desplegar en Vercel</li>
                <li>- Alimentar a Memo 🐈</li>
                <li>- Comprar más café</li>
                <li>- Terminar portafolio</li>
              </ul>
            </div>
          </div>
        </Draggable>

        {/* Activos de la mesa (PC, Memo el gato, café) */}
        <div className="desk-assets">
           <img src="/escritorio.png" alt="Escritorio retro" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
        </div>
      </aside>
      
    </div>
  );
}

export default App;