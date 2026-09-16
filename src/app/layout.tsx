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
  metadataBase: new URL('https://ws-guia-digital-ten.vercel.app'),
  title: 'Welcome Suites · Guía digital',
  description: 'Guía digital del huésped de Welcome Suites Apart Hotel, en Las Varillas, Córdoba. WiFi, comodidades, desayuno, dónde comer, qué hacer y más.',
  keywords: ['Welcome Suites', 'apart hotel', 'Las Varillas', 'Córdoba', 'guía del huésped'],
  applicationName: 'Welcome Suites',
  appleWebApp: {
    title: 'Welcome Suites',
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    title: 'Welcome Suites · Guía digital',
    description: 'Bienvenido a tu hogar en Las Varillas. Todo lo que necesitás durante tu estadía, a un toque.',
    url: '/',
    siteName: 'Welcome Suites Apart Hotel',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welcome Suites · Guía digital',
    description: 'Bienvenido a tu hogar en Las Varillas. Todo lo que necesitás durante tu estadía, a un toque.',
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
