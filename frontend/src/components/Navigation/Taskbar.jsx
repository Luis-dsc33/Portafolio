import React, { useState, useEffect } from 'react';
import './Taskbar.css';
import { useLanguage } from '../../context/LanguageContext';

const Taskbar = () => {
    const { t, language } = useLanguage();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        
        const timer = setInterval(() => setTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toLowerCase();

    return (
        <div className="retro-taskbar">
            <div className="taskbar-left">
                <button className="start-button">
                    <img src="/icons/logo.png" alt="Windows Logo" className="start-icon" />
                    <span className="start-text">{language === 'en' ? 'Start' : 'Inicio'}</span>
                </button>
                <div className="taskbar-divider"></div>
                <span className="taskbar-text heart-text">{t('taskbar_thanks')}</span>
            </div>
            
            <div className="taskbar-right">
                <span className="taskbar-icon">🔊</span>
                <div className="taskbar-divider"></div>
                <span className="taskbar-time">{formattedTime}</span>
            </div>
        </div>
    );
};

export default Taskbar;
