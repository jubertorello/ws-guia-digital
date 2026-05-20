'use client';

import React, { useState } from 'react';
import { Ic } from '@/lib/icons';

export function CopyField({
  label, value, mono = true,
}: {
  label: string; value: string; mono?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    navigator.clipboard?.writeText(value).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return (
    <button className="copy-field" onClick={onCopy} aria-label={`Copiar ${label}`}>
      <div className="cf-text">
        <span className="cf-label">{label}</span>
        <span className={`cf-value ${mono ? 'mono' : ''}`}>{value}</span>
      </div>
      <span className="cf-icon">{copied ? Ic.check : Ic.copy}</span>
    </button>
  );
}

export function Action({
  href, icon, label, sub, accent = false,
}: {
  href: string; icon: React.ReactNode; label: string; sub?: string; accent?: boolean;
}) {
  return (
    <a className={`action ${accent ? 'is-accent' : ''}`} href={href} target="_blank" rel="noopener noreferrer">
      <span className="action-i">{icon}</span>
      <span className="action-t">
        <span className="action-l">{label}</span>
        {sub && <span className="action-s">{sub}</span>}
      </span>
      <span className="action-c">{Ic.external}</span>
    </a>
  );
}
