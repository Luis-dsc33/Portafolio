import React from 'react';
import './Timeline.css';

const Timeline = () => {
    const timelineData = [
        {
            id: 'edu1',
            type: 'FORMACION.02.LOG',
            dateText: "SEP 2025 -\nDIC 2026",
            title: 'Ingeniería en Desarrollo de Software',
            subtitle: 'Universidad Tecnológica de San Juan del Río',
            description: 'Continuación de mi formación profesional enfocada en el desarrollo, metodologías ágiles, bases de datos y arquitectura tecnológica avanzada.',
            nodeColor: '#00403a' // green for most recent/current
        },
        {
            id: 'exp1',
            type: 'EXPERIENCIA.01.LOG',
            dateText: "MAY 2025 -\nAGO 2025",
            title: 'Operador de Red',
            subtitle: 'CNOC Telmex - Coppel',
            description: 'Monitoreo, diagnóstico y gestión de eventos de red para la infraestructura crítica. Brindé soporte de primer nivel LAN/WAN asegurando alta disponibilidad. Administración de servicios TCP/IP (DNS, DHCP, routers, switches).',
            nodeColor: '#8b2a2a' // red for past
        },
        {
            id: 'edu2',
            type: 'FORMACION.01.LOG',
            dateText: "SEP 2023 -\nAGO 2025",
            title: 'T.S.U. en Tecnologías de la Información',
            subtitle: 'Universidad Tecnológica de San Juan del Río',
            description: 'Formación universitaria técnica consolidando bases sólidas en desarrollo de software, análisis de sistemas y gestión de infraestructuras.',
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
