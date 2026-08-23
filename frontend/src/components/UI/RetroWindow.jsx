import React from 'react';

/**
 * Componente base reutilizable para ventanas estilo Windows 95/98.
 * 
 * @param {string} title - Texto de la barra de título
 * @param {string} titleBarColor - Color de fondo de la barra (default: #000080)
 * @param {string[]} controls - Controles a mostrar: 'minimize', 'maximize', 'close'
 * @param {React.ReactNode} menuBar - Nodo opcional para renderizar menú bajo la barra de título
 * @param {string} className - Clases CSS adicionales para el contenedor .window
 * @param {React.ReactNode} children - Contenido de la ventana
 */
function RetroWindow({
  title,
  titleBarColor = '#000080',
  controls = ['minimize', 'maximize', 'close'],
  menuBar,
  className = '',
  children,
}) {
  const controlSymbols = {
    minimize: { label: 'Minimize', symbol: '_' },
    maximize: { label: 'Maximize', symbol: '□' },
    close: { label: 'Close', symbol: 'X', style: { fontWeight: 'bold' } },
  };

  return (
    <div className={`window ${className}`}>
      <div className="title-bar" style={{ backgroundColor: titleBarColor }}>
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          {controls.map((ctrl) => {
            const { label, symbol, style } = controlSymbols[ctrl] || {};
            return (
              <button key={ctrl} aria-label={label} style={style}>
                {symbol}
              </button>
            );
          })}
        </div>
      </div>
      {menuBar}
      {children}
    </div>
  );
}

export default RetroWindow;
