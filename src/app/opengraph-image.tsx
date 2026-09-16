import { ImageResponse } from 'next/og';
import { brandFonts, BRAND } from '@/lib/og-fonts';

export const alt = 'Welcome Suites Apart Hotel · Guía digital del huésped';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const Chevron = ({ up }: { up?: boolean }) => (
  <svg width="200" height="22" viewBox="0 0 200 22">
    <path d={up ? 'M0 21 L100 1 L200 21' : 'M0 1 L100 21 L200 1'} fill="none" stroke={BRAND.gold} strokeWidth="1.5" />
  </svg>
);

const Rule = ({ w = 70 }: { w?: number }) => (
  <div style={{ width: w, height: 1.5, background: BRAND.gold }} />
);

const Dot = () => <div style={{ width: 9, height: 9, borderRadius: 9, background: BRAND.gold }} />;

export default async function Image() {
  const fonts = await brandFonts('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzáéíóúñ·');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `radial-gradient(circle at 50% 38%, ${BRAND.navy} 0%, ${BRAND.navyDeep} 75%)`,
          fontFamily: 'Cormorant Garamond',
          color: BRAND.paper,
        }}
      >
        {/* Double gold frame */}
        <div style={{ position: 'absolute', top: 28, left: 28, right: 28, bottom: 28, border: `1.5px solid ${BRAND.goldSoft}`, display: 'flex' }} />
        <div style={{ position: 'absolute', top: 38, left: 38, right: 38, bottom: 38, border: `1px solid rgba(199,159,94,0.25)`, display: 'flex' }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Chevron up />
          <div style={{ fontSize: 84, fontWeight: 600, letterSpacing: 18, marginTop: 14, lineHeight: 1, paddingLeft: 18 }}>
            WELCOME
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 14 }}>
            <Dot />
            <Rule />
            <div style={{ fontSize: 84, fontWeight: 600, letterSpacing: 18, lineHeight: 1, paddingLeft: 18 }}>SUITES</div>
            <Rule />
            <Dot />
          </div>
          <div style={{ marginTop: 14, display: 'flex' }}>
            <Chevron />
          </div>
          <div style={{ fontFamily: 'Inter', fontSize: 18, fontWeight: 500, letterSpacing: 10, marginTop: 20, color: BRAND.gold, paddingLeft: 10 }}>
            APART HOTEL
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 48 }}>
            <Rule w={60} />
            <div style={{ fontSize: 50, fontStyle: 'italic', fontWeight: 500, color: BRAND.paper }}>Guía digital</div>
            <Rule w={60} />
          </div>
          <div style={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 500, letterSpacing: 4, marginTop: 10, color: 'rgba(250,245,232,0.6)' }}>
            Las Varillas · Córdoba
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
