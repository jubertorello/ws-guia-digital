import Link from 'next/link';
import { Monogram } from '@/components/Monogram';
import { SECTIONS } from '@/lib/sections';
import { Ic } from '@/lib/icons';

export default function HomePage() {
  return (
    <div className="home">
      <header className="home-hero">
        <Monogram />
        <h1 className="home-greet">Bienvenido a casa</h1>
        <p className="home-sub">Tu guía digital. Todo lo que necesitás durante tu estadía, a un toque.</p>
      </header>

      <h2 className="home-title">guía digital</h2>

      <div className="home-grid">
        {SECTIONS.map((s) => (
          <Link key={s.id} href={`/${s.id}`} className="tile">
            <span className="tile-disc">{Ic[s.icon]}</span>
            <span className="tile-label">{s.label}</span>
          </Link>
        ))}
      </div>

      <footer className="home-foot">
        <div className="hf-rule" />
        <div className="hf-text">Welcome Suites · Las Varillas, Córdoba</div>
      </footer>
    </div>
  );
}
