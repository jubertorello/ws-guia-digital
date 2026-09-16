import { ImageResponse } from 'next/og';
import { brandFonts, BRAND } from '@/lib/og-fonts';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
  const fonts = await brandFonts('WSUITE');
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          background: `radial-gradient(circle at 50% 35%, ${BRAND.navy}, ${BRAND.navyDeep})`,
          fontFamily: 'Cormorant Garamond', color: BRAND.gold,
        }}
      >
        <div style={{ position: 'absolute', top: 12, left: 12, right: 12, bottom: 12, border: `1px solid ${BRAND.goldSoft}`, display: 'flex' }} />
        <div style={{ fontSize: 80, fontWeight: 600, lineHeight: 1, letterSpacing: -2 }}>WS</div>
        <div style={{ width: 46, height: 1, background: BRAND.gold, marginTop: 10 }} />
        <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: 4, marginTop: 10, paddingLeft: 4, color: BRAND.paper }}>SUITES</div>
      </div>
    ),
    { ...size, fonts },
  );
}
