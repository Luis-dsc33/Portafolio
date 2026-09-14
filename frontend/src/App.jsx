import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Componentes
import BootSequence from './components/Terminal/BootSequence';
import TopBar from './components/Navigation/TopBar';
import HeroProfile from './components/Sections/HeroProfile';
import ProjectsExplorer from './components/Sections/ProjectsSection';
import TechSection from './components/Sections/TechSection';
import DesktopEnvironment from './components/Sections/DesktopEnvironment';
import AboutSection from './components/Sections/AboutSection';

// 1. IMPORTAREMOS LA NUEVA PÁGINA (La crearemos en el siguiente paso)
import ProjectDetails from './components/Sections/ProjectDetails';

function App() {
  // --- ESTADOS DE LA ANIMACIÓN ---
  const [hasStarted, setHasStarted] = useState(false);
  const [step, setStep] = useState(-1);
  const [isExpanding, setIsExpanding] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  // --- ESTADOS DE LA SECCIÓN DE PROYECTOS ---
  const [activeFilter, setActiveFilter] = useState('Todos');

  // Tu lista de proyectos (Añadiremos más detalles para la vista completa después)
  const projectsData = [
    {
      id: 'inventory', name: 'Inventory_360.exe', category: 'Web', icon: '⚙️',
      title: 'Inventory 360', type: 'SaaS',
      desc: 'Plataforma SaaS integral de gestión de inventarios y punto de venta con IA Multimodal (Google Gemini 2.5 Flash).',
      img: '/proyects/inv.360/02_dashboard_kpis.png',
      tech: ['React', 'Node.js', 'Express', 'Prisma', 'MongoDB', 'Gemini AI']
    },
    {
      id: 'lira', name: 'Lira_AILA.exe', category: 'Backend', icon: '🤖',
      title: 'Lira AI Assistant', type: 'Backend',
      desc: 'Asistente de IA asíncrono construido con Node.js, la API de Google Gemini y bases de datos MongoDB.',
      img: 'https://via.placeholder.com/150x250/d4d0c8/000000?text=Terminal'
    },
    {
      id: 'uhc', name: 'UHC_NOVA.exe', category: 'Web', icon: '🎮',
      title: 'UHC Nova', type: 'Full-Stack',
      desc: 'Plataforma Full-Stack para la gestión de torneos de e-sports y eventos interactivos de Minecraft.',
      img: 'https://via.placeholder.com/150x250/d4d0c8/000000?text=UHC+App',
      tech: ['React', 'Node.js', 'Express', 'Prisma', 'Tailwind CSS', 'Vite']
    },
    {
      id: 'agua', name: 'Monitor_Agua.apk', category: 'Mobile', icon: '📱',
      title: 'Monitor Smart', type: 'Móvil',
      desc: 'Sistema inteligente de monitoreo de consumo de agua propuesto para el Hackathon Querétaro Digital 2024.',
      img: 'https://via.placeholder.com/150x250/d4d0c8/000000?text=Mobile+App'
    },
    {
      id: 'hackathons', name: 'Hackathons', category: 'Otros', icon: '📁',
      title: 'Hackathons', type: 'Eventos',
      desc: 'Proyectos ganadores como el software MES (2do Lugar CANACINTRA 2025) y propuestas EII 2024.',
      img: 'https://via.placeholder.com/150x250/d4d0c8/000000?text=Logros'
    },
    {
      id: 'cashflow', name: 'CashFlow.apk', category: 'Mobile', icon: '📱',
      title: 'CashFlow', type: 'Finanzas Personales',
      desc: 'App móvil en Flutter para gestión de finanzas personales y compartidas con un asistente IA (Gemini).',
      img: '/proyects/cashflow/cashflow_preview.jpg',
      tech: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'Gemini AI']
    },
  ];

  // --- FUNCIONES ---
  const handlePowerOn = () => {
    if (hasStarted) return;
    setHasStarted(true);
  };

  useEffect(() => {
    if (!hasStarted || showPortfolio) return;

    const timers = [
      setTimeout(() => setStep(0), 800),
      setTimeout(() => setStep(1), 1600),
      setTimeout(() => setStep(2), 2500),
      setTimeout(() => setStep(3), 3200),
      setTimeout(() => setStep(4), 3800),
      setTimeout(() => setStep(5), 4500),
      setTimeout(() => setStep(6), 5000),
      setTimeout(() => setStep(7), 5500),
      setTimeout(() => setStep(8), 6800),
      setTimeout(() => setStep(9), 8500),

      setTimeout(() => {
        const bootSound = new Audio('/startup.mp3');
        bootSound.play().catch(e => console.log("El navegador bloqueó el audio:", e));
        setIsExpanding(true);
      }, 9800),

      setTimeout(() => setShowPortfolio(true), 10800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [hasStarted, showPortfolio]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // 2. CREAMOS UN COMPONENTE "HOME" PARA AGRUPAR EL PORTAFOLIO PRINCIPAL
  const Home = () => (
    <>
      <TopBar scrollToSection={scrollToSection} />
      <HeroProfile scrollToSection={scrollToSection} />
      <AboutSection />

      <div className="retro-separator-container separator-projects">
        <hr className="retro-separator" />
        <span className="separator-text">C:\Archivos_de_programa\Proyectos</span>
      </div>

      <ProjectsExplorer
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        projectsData={projectsData}
      />

      <div className="retro-separator-container separator-tech">
        <hr className="retro-separator" />
        <span className="separator-text">C:\Archivos_de_programa\Tecnologías</span>
      </div>

      <TechSection />
      <DesktopEnvironment />
    </>
  );

  return (
    // 3. ENVOLVEMOS LA APLICACIÓN CON BROWSER ROUTER
    <BrowserRouter>
      <div className="desktop-environment">
        <div className={`retro-monitor-bezel ${isExpanding ? 'monitor-fullscreen' : ''}`}>
          <div className="retro-monitor-screen">

            {!hasStarted ? (
              <div className="screen-off"></div>
            ) : !showPortfolio ? (
              <BootSequence step={step} />
            ) : (
              <div className="portfolio-wrapper fade-in-portfolio">

                {/* 4. AQUI DECLARAMOS LAS RUTAS */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/proyecto/:id" element={<ProjectDetails projectsData={projectsData} />} />
                </Routes>

              </div>
            )}

          </div>

          <div className="monitor-chin">
            <div className="monitor-logo">CATVISION</div>
            <div className="monitor-controls">
              <div className={`power-led ${hasStarted ? 'led-on' : ''}`}></div>
              <button className="power-btn-physical" onClick={handlePowerOn}>⏻</button>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;