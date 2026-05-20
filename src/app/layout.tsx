import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Welcome Suites · Guía digital',
  description: 'Tu guía digital de huésped para Welcome Suites Hotel, Las Varillas, Córdoba. WiFi, comodidades, desayuno, qué hacer y más.',
  keywords: 'Welcome Suites, hotel, Las Varillas, Córdoba, guía, huésped',
  openGraph: {
    title: 'Welcome Suites · Guía digital',
    description: 'Todo lo que necesitás durante tu estadía, a un toque.',
    locale: 'es_AR',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#1a3a4f',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body style={{ fontFamily: 'var(--font-sans), -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
        <div className="app">
          {children}
        </div>
      </body>
    </html>
  );
}
