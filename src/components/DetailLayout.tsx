import Link from 'next/link';
import { Ic } from '@/lib/icons';

interface DetailLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function DetailLayout({ title, children }: DetailLayoutProps) {
  return (
    <div className="detail">
      <header className="detail-bar">
        <Link href="/" className="back" aria-label="Volver al inicio">
          <span className="back-i">{Ic.chevronLeft}</span>
          <span className="back-l">Inicio</span>
        </Link>
        <h2 className="detail-title">{title}</h2>
        <span className="back back-spacer" aria-hidden="true" />
      </header>
      <div className="detail-body">
        {children}
      </div>
    </div>
  );
}
