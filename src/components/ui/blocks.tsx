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

export function Steps({ items }: { items: { title: string; text: React.ReactNode }[] }) {
  return (
    <ol className="steps">
      {items.map((s, i) => (
        <li className="step" key={i}>
          <span className="step-n">{i + 1}</span>
          <div className="step-b">
            <div className="step-t">{s.title}</div>
            <div className="step-d">{s.text}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Note({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <aside className="note">
      <div className="note-t">{title}</div>
      <div className="note-d">{children}</div>
    </aside>
  );
}
