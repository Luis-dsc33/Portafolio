import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import './App.css';

function App() {
  // --- LÓGICA DE LA TERMINAL DE INTRODUCCIÓN ---
  const [isIntroActive, setIsIntroActive] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Cambia a false si quieres saltarte la intro mientras programas
    if (!isIntroActive) return;

    const timers = [
      setTimeout(() => setStep(1), 600),   // Auth exitosa
      setTimeout(() => setStep(2), 1200),  // Comando de pull y build
      setTimeout(() => setStep(3), 2000),  // Resultado del git pull
      setTimeout(() => setStep(4), 2600),  // Docker build init
      setTimeout(() => setStep(5), 3000),  // Container db
      setTimeout(() => setStep(6), 3400),  // Container api
      setTimeout(() => setStep(7), 3800),  // Container client
      setTimeout(() => setStep(8), 5000),  // Servicio Memo
      setTimeout(() => setStep(9), 6500),  // Ejecutar PORTFOLIO.EXE
      setTimeout(() => setIsIntroActive(false), 8000), // Termina la intro
    ];

    return () => timers.forEach(clearTimeout);
  }, [isIntroActive]);

  // Función para mover la vista hacia las secciones (cuando agregues más contenido abajo)
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* --- PANTALLA DE CARGA (TERMINAL) --- */}
      {isIntroActive && (
        <div className="terminal-desktop-bg">
          <div className="window terminal-window">

            {/* Barra de título de la terminal */}
            <div className="title-bar">
              <div className="title-bar-text">C:\WINDOWS\system32\cmd.exe - ssh</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize">_</button>
                <button aria-label="Maximize">□</button>
                <button aria-label="Close" style={{ fontWeight: 'bold' }}>X</button>
              </div>
            </div>

            {/* Cuerpo negro de la terminal */}
            <div className="window-body term-body">
              <div className="term-content">
                {step >= 0 && <div className="term-line term-cmd term-typing">$ ssh -i ~/.ssh/id_ed25519 luis@portfolio-prod</div>}

                {step >= 1 && <div className="term-line term-success">[ OK ] Autenticación exitosa. Welcome to Debian GNU/Linux 12 (bookworm).</div>}

                {step >= 2 && <><br /><div className="term-line term-cmd term-typing">luis@prod:~/app$ git pull origin main && docker compose up -d</div></>}

                {step >= 3 && <div className="term-line term-info">Fetching origin... Fast-forward (1 commit).</div>}
                {step >= 4 && <div className="term-line term-info">[+] Running 3/3</div>}

                {step >= 5 && <div className="term-line term-success"> ✔ Container mongo_db_prod         Started</div>}
                {step >= 6 && <div className="term-line term-success"> ✔ Container node_api_prod         Started</div>}
                {step >= 7 && <div className="term-line term-success"> ✔ Container react_client_prod     Started</div>}

                {step >= 8 && <><br /><div className="term-line term-info">[systemd] Starting Memo Assistant Daemon (memo.service)... 🐈 OK</div></>}

                {step >= 9 && <><br /><div className="term-line term-cmd term-typing">luis@prod:~/app$ ./PORTFOLIO.EXE --mode=production</div></>}

                {/* Cursor parpadeante */}
                <div className="term-cursor">█</div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* --- EL PORTAFOLIO REAL --- */}
      {/* Solo lo mostramos cuando la terminal haya terminado */}
      {!isIntroActive && (
        <div className="portfolio-wrapper fade-in-portfolio">

          <div className="main-window-titlebar">
            <div className="titlebar-left">
              <img src="/icons/logo.png" alt="Windows Logo" className="icon-titlebar-logo" />
            </div>
            <div className="titlebar-right">
              <button aria-label="Minimize">_</button>
              <button aria-label="Maximize">□</button>
              <button aria-label="Close" style={{ fontWeight: 'bold' }}>X</button>
            </div>
          </div>

          <header className="top-bar">
            <div className="logo-section">
              <img src="/icons/portafolio.png" alt="Portfolio Icon" className="icon-portfolio" />
              <span className="logo-text">PORTFOLIO<span className="logo-exe">.EXE</span></span>
            </div>

            <nav className="nav-menu">
              <button className="btn-retro btn-active" onClick={() => scrollToSection('inicio')}>
                <img src="/icons/inicio.png" alt="Inicio" className="icon-nav" /> Inicio
              </button>
              <button className="btn-retro btn-flat" onClick={() => scrollToSection('proyectos')}>
                <img src="/icons/proyectos.png" alt="Proyectos" className="icon-nav" /> Proyectos
              </button>
              <button className="btn-retro btn-flat" onClick={() => scrollToSection('tecnologias')}>
                <img src="/icons/tecnologias.png" alt="Tecnologías" className="icon-nav" /> Tecnologías
              </button>
              <button className="btn-retro btn-flat" onClick={() => scrollToSection('sobre-mi')}>
                <img src="/icons/sobre-mi.png" alt="Sobre mí" className="icon-nav" /> Sobre mí
              </button>
              <button className="btn-retro btn-flat" onClick={() => scrollToSection('contacto')}>
                <img src="/icons/contacto.png" alt="Contacto" className="icon-nav" /> Contacto
              </button>
            </nav>
          </header>

          <main className="main-content" id="inicio">
            <img src="/planta.png" alt="Enredadera retro" className="plant-decoration" />
            <div className="left-decorations"></div>

            <div className="profile-section">
              <div className="photo-frame">
                <img src="/perfil.png" alt="Perfil" />
              </div>

              <div className="text-section">
                <h1 className="main-title">Hola, Soy Luis</h1>
                <h2 className="sub-title">Ingeniero en Desarrollo y Gestion de Software</h2>

                <hr className="pixel-divider" />

                <p className="intro-text">
                  Desarrollador Full-Stack apasionado por construir soluciones sólidas de<br />
                  extremo a extremo. Transformo ideas en aplicaciones web y multiplataforma<br />
                  usando React, Node.js y Flutter. Disfruto diseñar arquitecturas<br />
                  escalables respaldadas por bases de datos robustas y despliegues con Docker.
                </p>

                <div className="action-buttons">
                  <button className="btn-retro btn-primary" onClick={() => scrollToSection('proyectos')}>▶ Ver proyectos</button>
                  <button className="btn-retro btn-secondary" onClick={() => scrollToSection('contacto')}>✉ Contactar</button>
                  <button className="btn-retro btn-secondary" onClick={() => window.open('/cv.pdf', '_blank', 'noopener,noreferrer')}>📄 CV</button>
                </div>
              </div>
            </div>
          </main>

          <aside className="desk-section">
            <Draggable handle=".title-bar">
              <div className="window window-avion">
                <div className="title-bar" style={{ backgroundColor: '#00665c' }}>
                  <div className="title-bar-text">avion.webp</div>
                  <div className="title-bar-controls">
                    <button aria-label="Minimize">_</button>
                    <button aria-label="Maximize">□</button>
                    <button aria-label="Close" style={{ fontWeight: 'bold' }}>X</button>
                  </div>
                </div>
                <div className="window-body fake-window-body">
                  <div className="fake-content image-content">
                    <img src="/avion.jpg" alt="Avión clásico" />
                  </div>

                  <div className="fake-scrollbar-vertical">
                    <button className="scroll-btn btn-up"></button>
                    <div className="scroll-track-v"><div className="scroll-thumb-v"></div></div>
                    <button className="scroll-btn btn-down"></button>
                  </div>

                  <div className="fake-scrollbar-horizontal">
                    <button className="scroll-btn btn-left"></button>
                    <div className="scroll-track-h"><div className="scroll-thumb-h"></div></div>
                    <button className="scroll-btn btn-right"></button>
                  </div>

                  <div className="fake-scroll-corner"></div>
                </div>
              </div>
            </Draggable>

            <Draggable handle=".title-bar">
              <div className="window window-notas">
                <div className="title-bar" style={{ backgroundColor: '#000080' }}>
                  <div className="title-bar-text">notas.txt - Bloc de notas</div>
                  <div className="title-bar-controls">
                    <button aria-label="Minimize">_</button>
                    <button aria-label="Maximize">□</button>
                    <button aria-label="Close" style={{ fontWeight: 'bold' }}>X</button>
                  </div>
                </div>
                <div className="menu-bar">
                  <span><u>A</u>rchivo</span>
                  <span><u>E</u>dición</span>
                  <span><u>B</u>úsqueda</span>
                  <span>A<u>y</u>uda</span>
                </div>

                <div className="window-body fake-window-body notas-body">
                  <div className="fake-content text-content">
                    <p className="bold-text">Pendientes para hoy:</p>
                    <ul className="todo-list">
                      <li>- Revisar PRs</li>
                      <li>- Corregir bugs</li>
                      <li>- Commit rama &lt;testing&gt;</li>
                      <li>- Leer documentación</li>
                      <li>- Desplegar en Vercel</li>
                      <li>- Alimentar a Memo 🐈</li>
                      <li>- Comprar café</li>
                    </ul>
                  </div>

                  <div className="fake-scrollbar-vertical full-height">
                    <button className="scroll-btn btn-up"></button>
                    <div className="scroll-track-v"><div className="scroll-thumb-v" style={{ top: '10%' }}></div></div>
                    <button className="scroll-btn btn-down"></button>
                  </div>
                </div>
              </div>
            </Draggable>

            <div className="desk-assets">
              <img src="/escritorio.png" alt="Escritorio retro" />
            </div>
          </aside>

        </div>
      )}
    </>
  );
}

export default App;