import React from 'react';
import './BootSequence.css';

function BootSequence({ step }) {
  return (
    <div className="term-body">
      <div className="term-content">
        {step >= 0 && <div className="term-line term-cmd term-typing">$ ssh -i ~/.ssh/id_ed25519 luis@portfolio-prod</div>}
        {step >= 1 && <div className="term-line term-success">[ OK ] Autenticación exitosa. Welcome to Debian GNU/Linux 12.</div>}
        {step >= 2 && <><br /><div className="term-line term-cmd term-typing">luis@prod:~/app$ git pull origin main && docker compose up -d</div></>}
        {step >= 3 && <div className="term-line term-info">Fetching origin... Fast-forward (1 commit).</div>}
        {step >= 4 && <div className="term-line term-info">[+] Running 3/3</div>}
        {step >= 5 && <div className="term-line term-success"> ✔ Container mongo_db_prod         Started</div>}
        {step >= 6 && <div className="term-line term-success"> ✔ Container node_api_prod         Started</div>}
        {step >= 7 && <div className="term-line term-success"> ✔ Container react_client_prod     Started</div>}
        {step >= 8 && <><br /><div className="term-line term-info">[systemd] Starting Cat Assistant Daemon (cat.service)... 🐈 OK</div></>}
        {step >= 9 && <><br /><div className="term-line term-cmd term-typing">luis@prod:~/app$ ./PORTFOLIO.EXE --mode=production</div></>}

        <div className="term-cursor">█</div>
      </div>
    </div>
  );
}

export default BootSequence;
