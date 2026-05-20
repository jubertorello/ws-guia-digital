'use client';

import { useState } from 'react';
import { Ic } from '@/lib/icons';

export function WhatsFab() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className={`fab ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Contactar por WhatsApp"
      >
        <span className="fab-i">{Ic.whatsapp}</span>
      </button>

      {open && (
        <>
          <div className="fab-sheet">
            <div className="fab-sheet-h">¿Te ayudamos?</div>
            <p className="fab-sheet-p">Estamos disponibles por WhatsApp para lo que necesites.</p>
            <a className="fab-row" href="https://wa.me/5493533425153" target="_blank" rel="noopener noreferrer">
              <span className="fab-row-n">Toto</span>
              <span className="fab-row-x">+54 9 3533 42-5153</span>
            </a>
            <a className="fab-row" href="https://wa.me/5493533454096" target="_blank" rel="noopener noreferrer">
              <span className="fab-row-n">Andrea</span>
              <span className="fab-row-x">+54 9 3533 45-4096</span>
            </a>
          </div>
          <div className="fab-scrim" onClick={() => setOpen(false)} />
        </>
      )}
    </>
  );
}
