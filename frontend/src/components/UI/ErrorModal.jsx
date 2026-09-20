import React from 'react';
import Draggable from 'react-draggable';
import RetroWindow from './RetroWindow';

function ErrorModal() {
  return (
    <Draggable handle=".title-bar">

      <div className="error-window">
        <RetroWindow
          title="Error"
          titleBarColor="#000080"
          controls={['close']}
        >

          <div className="window-body error-body">
            <div className="error-content">

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