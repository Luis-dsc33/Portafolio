import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="desktop-environment">
      {/* Barra de navegación superior */}
      <nav className="taskbar">
        <div className="title">PORTFOLIO.EXE</div>
        <div className="nav-links">
          <button className="btn-retro">Inicio</button>
          <button className="btn-retro">Proyectos</button>
          <button className="btn-retro">Tecnologías</button>
        </div>
      </nav>

      {/* Contenedor principal del perfil */}
      <main className="profile-container">
        <div className="profile-picture">
          {/* Aquí irá tu foto pixelada */}
          <div className="placeholder-img"></div>
        </div>
        
        <div className="profile-info">
          <h1>Hola, Soy Luis Enrique De Santiago Colin</h1>
          <h2>Ingeniería en Desarrollo y Gestión de Software Multiplataforma</h2>
          
          <p className="description">
            Apasionado por escribir código y transformar la lógica en 
            experiencias interactivas modernas. Disfruto desarrollar soluciones 
            escalables, manteniendo siempre una curiosidad constante por seguir aprendiendo.
          </p>
          
          <div className="action-buttons">
            <button className="btn-retro active">▶ Ver proyectos</button>
            <button className="btn-retro">✉ Contactar</button>
            <button className="btn-retro">📄 CV</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App