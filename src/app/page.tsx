import Link from 'next/link';
import { Monogram } from '@/components/Monogram';
import { SECTIONS } from '@/lib/sections';
import { Ic } from '@/lib/icons';
import { REVIEW_URL } from '@/components/screens/CheckoutScreen';

export default function HomePage() {
  return (
    <div className="home">
      <header className="home-hero">
        <Monogram />
        <h1 className="home-greet">Bienvenido a tu hogar en Las Varillas</h1>
      </header>

      <h2 className="home-title">Guía digital</h2>

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
        <a className="hf-review" href={REVIEW_URL} target="_blank" rel="noopener noreferrer">
          <span className="hf-review-i">{Ic.star}</span>
          Dejanos una reseña en Google
        </a>
        <div className="hf-text">Welcome Suites · Las Varillas, Córdoba</div>
      </footer>
    </div>
  );
}
