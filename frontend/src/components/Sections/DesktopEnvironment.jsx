import React from 'react';
import Draggable from 'react-draggable';
import RetroWindow from '../UI/RetroWindow';
import { useLanguage } from '../../context/LanguageContext';

function DesktopEnvironment() {
  const { language, t } = useLanguage();

  return (
    <aside className="desk-section reveal">
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
                <img src="/avion.jpg" alt="Avión clásico" loading="lazy" />
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
            title={t('notas_title')}
            titleBarColor="#000080"
            controls={['minimize', 'maximize', 'close']}
            className="window-notas"
            menuBar={
              <div className="menu-bar">
                <span><u>{t('notas_menu_file')[0]}</u>{t('notas_menu_file').slice(1)}</span>
                <span><u>{t('notas_menu_edit')[0]}</u>{t('notas_menu_edit').slice(1)}</span>
                <span><u>{t('notas_menu_search')[0]}</u>{t('notas_menu_search').slice(1)}</span>
                <span>{language === 'es' ? <>A<u>y</u>uda</> : <><u>H</u>elp</>}</span>
              </div>
            }
          >
            <div className="window-body fake-window-body notas-body">
              <div className="fake-content text-content">
                <p className="bold-text">{t('notas_todo')}</p>
                <ul className="todo-list">
                  <li>{t('notas_t1')}</li>
                  <li>{t('notas_t2')}</li>
                  <li>{t('notas_t3')}</li>
                  <li>{t('notas_t4')}</li>
                  <li>{t('notas_t5')}</li>
                  <li>{t('notas_t6')}</li>
                  <li>{t('notas_t7')}</li>
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
        <img src={language === 'en' ? "/escritorio_ingles.png" : "/escritorio.png"} alt="Escritorio retro" loading="lazy" />
      </div>
    </aside>
  );
}

export default DesktopEnvironment;
