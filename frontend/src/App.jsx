import React, { useState, useEffect } from 'react';
import './App.css';

// Componentes
import BootSequence from './components/Terminal/BootSequence';
import TopBar from './components/Navigation/TopBar';
import HeroProfile from './components/Sections/HeroProfile';
import ProjectsExplorer from './components/Sections/ProjectsExplorer';
import DesktopEnvironment from './components/Sections/DesktopEnvironment';

function App() {
  // --- ESTADOS DE LA ANIMACIÓN ---
  const [hasStarted, setHasStarted] = useState(false);     // Enciende la pantalla
  const [step, setStep] = useState(-1);                    // Controla los comandos de la terminal
  const [isExpanding, setIsExpanding] = useState(false);   // Dispara el crecimiento del monitor
  const [showPortfolio, setShowPortfolio] = useState(false); // Cambia la terminal por la web

  // --- ESTADOS DE LA SECCIÓN DE PROYECTOS ---
  const [activeFilter, setActiveFilter] = useState('Todos');

  // Tu lista de proyectos con información enriquecida
  const projectsData = [
    { 
      id: 1, name: 'Inventory_360.exe', category: 'Web', icon: '⚙️',
      title: 'Inventory 360', type: 'SaaS',
      desc: 'Plataforma SaaS de gestión de inventario con Node.js y React. Desplegada en Docker con Cloudflare Tunnels.',
      img: 'https://via.placeholder.com/150x250/d4d0c8/000000?text=App+Preview'
    },
    { 
      id: 2, name: 'Lira_AILA.exe', category: 'Backend', icon: '🤖',
      title: 'Lira AI Assistant', type: 'Backend',
      desc: 'Asistente de IA asíncrono construido con Node.js, la API de Google Gemini y bases de datos MongoDB.',
      img: 'https://via.placeholder.com/150x250/d4d0c8/000000?text=Terminal' 
    },
    { 
      id: 3, name: 'UHC_NOVA.exe', category: 'Web', icon: '🎮',
      title: 'UHC Nova', type: 'Full-Stack',
      desc: 'Plataforma Full-Stack para la gestión de torneos de e-sports y eventos interactivos de Minecraft.',
      img: 'https://via.placeholder.com/150x250/d4d0c8/000000?text=UHC+App' 
    },
    { 
      id: 4, name: 'Monitor_Agua.apk', category: 'Mobile', icon: '📱',
      title: 'Monitor Smart', type: 'Móvil',
      desc: 'Sistema inteligente de monitoreo de consumo de agua propuesto para el Hackathon Querétaro Digital 2024.',
      img: 'https://via.placeholder.com/150x250/d4d0c8/000000?text=Mobile+App' 
    },
    { 
      id: 5, name: 'Hackathons', category: 'Otros', icon: '📁',
      title: 'Hackathons', type: 'Eventos',
      desc: 'Proyectos ganadores como el software MES (2do Lugar CANACINTRA 2025) y propuestas EII 2024.',
      img: 'https://via.placeholder.com/150x250/d4d0c8/000000?text=Logros' 
    },
  ];

  // --- FUNCIONES ---
  // Botón físico del monitor
  const handlePowerOn = () => {
    if (hasStarted) return;
    setHasStarted(true);
  };

  useEffect(() => {
    // Si la PC no se ha encendido, o si ya cargó el portafolio, no hacemos nada
    if (!hasStarted || showPortfolio) return;

    const timers = [
      setTimeout(() => setStep(0), 800),   // ssh ...
      setTimeout(() => setStep(1), 1600),  // Auth exitosa
      setTimeout(() => setStep(2), 2500),  // git pull ...
      setTimeout(() => setStep(3), 3200),  // Fetching...
      setTimeout(() => setStep(4), 3800),  // Running 3/3
      setTimeout(() => setStep(5), 4500),  // Container db
      setTimeout(() => setStep(6), 5000),  // Container api
      setTimeout(() => setStep(7), 5500),  // Container client
      setTimeout(() => setStep(8), 6800),  // systemd Memo
      setTimeout(() => setStep(9), 8500),  // Comando PORTFOLIO.EXE

      // EL MOMENTO GLORIOSO: Suena el audio y el monitor empieza a crecer
      setTimeout(() => {
        const bootSound = new Audio('/startup.mp3');
        bootSound.play().catch(e => console.log("El navegador bloqueó el audio:", e));
        setIsExpanding(true);
      }, 9800),

      // 1 segundo después (cuando la expansión casi termina), mostramos la web
      setTimeout(() => setShowPortfolio(true), 10800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [hasStarted, showPortfolio]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="desktop-environment">

      {/* El contenedor del monitor, que pasará a fullscreen si isExpanding es true */}
      <div className={`retro-monitor-bezel ${isExpanding ? 'monitor-fullscreen' : ''}`}>

        {/* Pantalla (Cristal) */}
        <div className="retro-monitor-screen">

          {/* FASE 1: Apagado */}
          {!hasStarted ? (
            <div className="screen-off"></div>

            /* FASE 2: Encendido, mostrando la terminal */
          ) : !showPortfolio ? (
            <BootSequence step={step} />

            /* FASE 3: El Portafolio Real */
          ) : (
            <div className="portfolio-wrapper fade-in-portfolio">
              <TopBar scrollToSection={scrollToSection} />
              <HeroProfile scrollToSection={scrollToSection} />
              <ProjectsExplorer
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                projectsData={projectsData}
              />
              <DesktopEnvironment />
            </div>
          )}
        </div>

        {/* Base del monitor (Botones y Logo) */}
        <div className="monitor-chin">
          <div className="monitor-logo">CATVISION</div>
          <div className="monitor-controls">
            <div className={`power-led ${hasStarted ? 'led-on' : ''}`}></div>
            <button className="power-btn-physical" onClick={handlePowerOn}>⏻</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;