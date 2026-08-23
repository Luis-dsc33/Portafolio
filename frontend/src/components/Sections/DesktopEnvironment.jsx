import React from 'react';
import Draggable from 'react-draggable';
import RetroWindow from '../UI/RetroWindow';

/**
 * Fondo decorativo con ventanas draggables (avión y notas) y la imagen del escritorio.
 * Componente autocontenido, sin props externas.
 */
function DesktopEnvironment() {
  return (
    <aside className="desk-section">
      <Draggable handle=".title-bar">
        <div>
          <RetroWindow
            title="avion.webp"
            titleBarColor="#00665c"
            controls={['minimize', 'maximize', 'close']}
            className="window-avion"
          >
            <div className="window-body fake-window-body">
              <div className="fake-content image-content">
                <img src="/avion.jpg" alt="Avión clásico" />
              </div>
              <div className="fake-scrollbar-vertical">
                <button className="scroll-btn btn-up"></button>
                <div className="scroll-track-v"><div className="scroll-thumb-v"></div></div>
                <button className="scroll-btn btn-down"></button>
              </div>
              <div className="fake-scrollbar-horizontal">
                <button className="scroll-btn btn-left"></button>
                <div className="scroll-track-h"><div className="scroll-thumb-h"></div></div>
                <button className="scroll-btn btn-right"></button>
              </div>
              <div className="fake-scroll-corner"></div>
            </div>
          </RetroWindow>
        </div>
      </Draggable>

      <Draggable handle=".title-bar">
        <div>
          <RetroWindow
            title="notas.txt - Bloc de notas"
            titleBarColor="#000080"
            controls={['minimize', 'maximize', 'close']}
            className="window-notas"
            menuBar={
              <div className="menu-bar">
                <span><u>A</u>rchivo</span>
                <span><u>E</u>dición</span>
                <span><u>B</u>úsqueda</span>
                <span>A<u>y</u>uda</span>
              </div>
            }
          >
            <div className="window-body fake-window-body notas-body">
              <div className="fake-content text-content">
                <p className="bold-text">Pendientes para hoy:</p>
                <ul className="todo-list">
                  <li>- Revisar PRs</li>
                  <li>- Corregir bugs</li>
                  <li>- Commit rama &lt;testing&gt;</li>
                  <li>- Leer documentación</li>
                  <li>- Desplegar en Vercel</li>
                  <li>- Alimentar a Memo 🐈</li>
                  <li>- Comprar café</li>
                </ul>
              </div>
              <div className="fake-scrollbar-vertical full-height">
                <button className="scroll-btn btn-up"></button>
                <div className="scroll-track-v"><div className="scroll-thumb-v" style={{ top: '10%' }}></div></div>
                <button className="scroll-btn btn-down"></button>
              </div>
            </div>
          </RetroWindow>
        </div>
      </Draggable>

      <div className="desk-assets">
        <img src="/escritorio.png" alt="Escritorio retro" />
      </div>
    </aside>
  );
}

export default DesktopEnvironment;
