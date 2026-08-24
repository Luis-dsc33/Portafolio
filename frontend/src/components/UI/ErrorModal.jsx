import React from 'react';
import Draggable from 'react-draggable';
import RetroWindow from './RetroWindow';

/**
 * Ventana de error estilo Windows 95 draggable.
 * Muestra "Task failed successfully." con un ícono de error CSS.
 */
function ErrorModal() {
  return (
    <Draggable handle=".title-bar">
      {/* ¡LA MAGIA ESTÁ AQUÍ! Movimos la clase a este div contenedor */}
      <div className="error-window">
        <RetroWindow
          title="Error"
          titleBarColor="#000080"
          controls={['close']}
        >
          {/* Ojo: Si RetroWindow ya incluye la clase 'window-body' por defecto, 
              puedes quitarla de aquí y dejar solo 'error-body' */}
          <div className="window-body error-body">
            <div className="error-content">
              {/* Icono de error hecho con CSS */}
              <div className="css-error-icon">X</div>
              <p className="error-text">Task failed successfully.</p>
            </div>
            <div className="error-buttons">
              <button className="btn-retro btn-error-ok">Aceptar</button>
            </div>
          </div>
        </RetroWindow>
      </div>
    </Draggable>
  );
}

export default ErrorModal;