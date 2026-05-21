import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Welcome Suites · Guía digital';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#efe6d3', // var(--cream)
          fontFamily: 'serif',
          color: '#1a3a4f',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            transform: 'scale(1.5)', // Hacemos el logo un poco más grande
          }}
        >
          {/* Logo WS recreado con divs e inline styles */}
          <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: '0.14em', color: '#1a3a4f', lineHeight: 1 }}>
            WELCOME
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: '#c79f5e' }}>
            <div style={{ width: 12, height: 12, backgroundColor: '#c79f5e', borderRadius: '50%' }} />
            <div style={{ width: 80, height: 2, backgroundColor: '#c79f5e' }} />

            <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: '0.14em', color: '#1a3a4f', lineHeight: 1 }}>
              SUITES
            </div>

            <div style={{ width: 80, height: 2, backgroundColor: '#c79f5e' }} />
            <div style={{ width: 12, height: 12, backgroundColor: '#c79f5e', borderRadius: '50%' }} />
          </div>

          <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '0.42em', color: '#1a3a4f', marginTop: 10 }}>
            APART HOTEL
          </div>
        </div>

        {/* Subtítulo decorativo abajo */}
        <div
          style={{
            marginTop: 100,
            fontSize: 36,
            fontStyle: 'italic',
            color: '#c79f5e',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontWeight: 500,
          }}
        >
          <div style={{ width: 80, height: 2, backgroundColor: '#c79f5e' }} />
          guía digital
          <div style={{ width: 80, height: 2, backgroundColor: '#c79f5e' }} />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
