import React from 'react';
import './Timeline.css';
import { useLanguage } from '../../context/LanguageContext';

const Timeline = () => {
    const { t } = useLanguage();

    const timelineData = [
        {
            id: 'edu1',
            type: 'FORMACION.02.LOG',
            dateText: `${t('tl_sep')} 2025 -\n${t('tl_dec')} 2026`,
            title: t('tl_edu1_title'),
            subtitle: t('tl_edu1_subtitle'),
            description: t('tl_edu1_desc'),
            nodeColor: '#00403a' // green for most recent/current
        },
        {
            id: 'exp1',
            type: 'EXPERIENCIA.01.LOG',
            dateText: `${t('tl_may')} 2025 -\n${t('tl_aug')} 2025`,
            title: t('tl_exp_title'),
            subtitle: t('tl_exp_subtitle'),
            description: t('tl_exp_desc'),
            nodeColor: '#8b2a2a' // red for past
        },
        {
            id: 'edu2',
            type: 'FORMACION.01.LOG',
            dateText: `${t('tl_sep')} 2023 -\n${t('tl_aug')} 2025`,
            title: t('tl_edu2_title'),
            subtitle: t('tl_edu2_subtitle'),
            description: t('tl_edu2_desc'),
            nodeColor: '#8b2a2a' // red
        }
    ];

    return (
        <div className="timeline-section">
            <div className="timeline-container">
                {/* La línea principal que conecta todo */}
                <div className="timeline-line"></div>

                {timelineData.map((item, index) => (
                    <div className="timeline-item" key={item.id}>
                        {/* Nodo y conector */}
                        <div 
                            className="timeline-node" 
                            style={{ borderColor: item.nodeColor }}
                        ></div>

                        {/* Caja de fecha */}
                        <div className="timeline-date-box">
                            <span className="timeline-date-icon">📅</span>
                            <span className="timeline-date-text" style={{ whiteSpace: 'pre-line' }}>
                                {item.dateText}
                            </span>
                        </div>

                        {/* Tarjeta de contenido estilo ventana */}
                        <div className="timeline-card">
                            <div className="timeline-card-controls">
                                <div className="timeline-win-btn">_</div>
                                <div className="timeline-win-btn">□</div>
                                <div className="timeline-win-btn">×</div>
                            </div>

                            <div className="timeline-card-content">
                                <span className="timeline-type">{item.type}</span>
                                <h3 className="timeline-title">{item.title}</h3>
                                <h4 className="timeline-subtitle">{item.subtitle}</h4>
                                <p className="timeline-description">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
