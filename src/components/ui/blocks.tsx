import React from 'react';

export function Lede({ children }: { children: React.ReactNode }) {
  return <p className="lede">{children}</p>;
}

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function Row({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="row">
      <span className="row-l">{label}</span>
      <span className={`row-v ${mono ? 'mono' : ''}`}>{value}</span>
    </div>
  );
}

export function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="screen-sect">
      <h3 className="screen-sect-t">{title}</h3>
      {children}
    </section>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="bullets">
      {items.map((t, i) => <li key={i}>{t}</li>)}
    </ul>
  );
}

export function Place({
  name, tag, note, dist,
}: {
  name: string; tag?: string; note?: string; dist?: string;
}) {
  return (
    <div className="place">
      <div className="place-h">
        <span className="place-n">{name}</span>
        {dist && <span className="place-d">{dist}</span>}
      </div>
      {tag && <div className="place-t">{tag}</div>}
      {note && <div className="place-x">{note}</div>}
    </div>
  );
}
