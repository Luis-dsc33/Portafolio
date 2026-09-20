import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


import BootSequence from './components/Terminal/BootSequence';
import Taskbar from './components/Navigation/Taskbar';
import TopBar from './components/Navigation/TopBar';
import HeroProfile from './components/Sections/HeroProfile';
import ProjectsExplorer from './components/Sections/ProjectsSection';
import TechSection from './components/Sections/TechSection';
import DesktopEnvironment from './components/Sections/DesktopEnvironment';
import AboutSection from './components/Sections/AboutSection';
import ContactSection from './components/Sections/ContactSection';

import ProjectDetails from './components/Sections/ProjectDetails';
import useScrollReveal from './hooks/useScrollReveal';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { t } = useLanguage();
  
  const [hasStarted, setHasStarted] = useState(() => sessionStorage.getItem('booted') === 'true');
  const [step, setStep] = useState(() => sessionStorage.getItem('booted') === 'true' ? 9 : -1);
  const [isExpanding, setIsExpanding] = useState(() => sessionStorage.getItem('booted') === 'true');
  const [showPortfolio, setShowPortfolio] = useState(() => sessionStorage.getItem('booted') === 'true');

  
  const [activeFilter, setActiveFilter] = useState('Todos');

  
  const projectsData = [
    {
      id: 'inventory', name: 'Inventory_360.exe', category: 'Web', icon: '⚙️',
      title: 'Inventory 360', type: 'SaaS',
      desc: t('inv_short'),
      img: '/proyects/inv.360/02_dashboard_kpis.png',
      tech: ['React', 'Node.js', 'Express', 'Prisma', 'MongoDB', 'Gemini AI']
    },
    {
      id: 'lira', name: 'Lira_AILA.exe', category: 'Backend', icon: '🤖',
      title: 'Lira AI Assistant', type: 'Backend',
      desc: t('lira_short'),
      img: '/proyects/lira/reminder.jpg',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Gemini AI', 'whatsapp-web.js', 'Docker', 'chrono-node']
    },
    {
      id: 'uhc', name: 'UHC_NOVA.exe', category: 'Web', icon: '🎮',
      title: 'UHC Nova', type: 'Full-Stack',
      desc: t('uhc_short'),
      img: '/proyects/UHC_NOVA/homepage.png',
      tech: ['React', 'Node.js', 'Express', 'Prisma', 'Tailwind CSS', 'Vite']
    },

    {
      id: 'cashflow', name: 'CashFlow.apk', category: 'Mobile', icon: '📱',
      title: 'CashFlow', type: 'Finanzas Personales',
      desc: t('cash_short'),
      img: '/proyects/cashflow/cashflow_preview.jpg',
      tech: ['Flutter', 'Dart', 'Firebase', 'Riverpod', 'Gemini AI']
    },
  ];

  
  const handlePowerOn = (e) => {
    if (e) e.stopPropagation();
    if (hasStarted) return;
    setHasStarted(true);
  };

  
  useEffect(() => {
    if (showPortfolio) return;

    const handleSkip = (e) => {
      
      
      
      if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;

      setHasStarted(true);
      setStep(9);
      setIsExpanding(true);
      setShowPortfolio(true);
      sessionStorage.setItem('booted', 'true');
    };

    window.addEventListener('click', handleSkip);
    window.addEventListener('keydown', handleSkip);

    return () => {
      window.removeEventListener('click', handleSkip);
      window.removeEventListener('keydown', handleSkip);
    };
  }, [showPortfolio]);

  useEffect(() => {
    if (!hasStarted || showPortfolio) return;

    const timers = [
      setTimeout(() => setStep(0), 100),
      setTimeout(() => setStep(1), 200),
      setTimeout(() => setStep(2), 300),
      setTimeout(() => setStep(3), 400),
      setTimeout(() => setStep(4), 500),
      setTimeout(() => setStep(5), 600),
      setTimeout(() => setStep(6), 700),
      setTimeout(() => setStep(7), 800),
      setTimeout(() => setStep(8), 900),
      setTimeout(() => setStep(9), 1000),

      setTimeout(() => {
        const bootSound = new Audio('/startup.mp3');
        bootSound.play().catch(e => console.log("El navegador bloqueó el audio:", e));
        setIsExpanding(true);
      }, 1100),

      setTimeout(() => {
        sessionStorage.setItem('booted', 'true');
        setShowPortfolio(true);
      }, 1500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [hasStarted, showPortfolio]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const Home = () => {
    useScrollReveal();

    return (
      <>
        <TopBar scrollToSection={scrollToSection} />

        <HeroProfile scrollToSection={scrollToSection} />

        <AboutSection />

        <div className="retro-separator-container separator-projects reveal">
          <hr className="retro-separator" />
          <span className="separator-text">{t('sep_projects')}</span>
        </div>

        <ProjectsExplorer
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          projectsData={projectsData}
        />

        <div className="retro-separator-container separator-tech reveal">
          <hr className="retro-separator" />
          <span className="separator-text">{t('sep_tech')}</span>
        </div>

        <TechSection />

        <div className="retro-separator-container separator-tech reveal">
          <hr className="retro-separator" />
          <span className="separator-text">{t('sep_contact')}</span>
        </div>

        <ContactSection />

        <DesktopEnvironment />
      </>
    );
  };

  return (
    <BrowserRouter>
      <div className="desktop-environment">
        <div className="pixel-art-scene">
          <div className={`mapped-screen ${isExpanding ? 'monitor-fullscreen' : ''}`}>
            <div className="retro-monitor-screen">

              {!hasStarted ? (
                <div className="screen-off"></div>
              ) : !showPortfolio ? (
                <BootSequence step={step} />
              ) : (
                <>
                  <div className="portfolio-wrapper fade-in-portfolio" id="portfolio-scroll-container">

                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/proyecto/:id" element={<ProjectDetails projectsData={projectsData} />} />
                    </Routes>

                    <Taskbar />
                  </div>
                </>
              )}

            </div>
          </div>

          {!hasStarted && (
            <>
              <div className="power-btn-tooltip">
                <span>PRESS START</span>
              </div>
              <button className="invisible-power-btn" onClick={handlePowerOn} aria-label="Turn on computer"></button>
            </>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;