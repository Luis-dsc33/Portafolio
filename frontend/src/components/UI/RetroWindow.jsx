import React from 'react';

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
