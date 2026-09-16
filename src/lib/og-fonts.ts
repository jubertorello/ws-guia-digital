// Loads Cormorant Garamond / Inter as TTF subsets for ImageResponse (Satori
// doesn't read woff2, and Google serves TTF when no browser UA is sent).

type Font = { name: string; data: ArrayBuffer; style: 'normal' | 'italic'; weight: 400 | 500 | 600 | 700 };

async function load(family: string, axes: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(`${family}:${axes}`)}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const faces = [...css.matchAll(/font-style: (\w+);\s*font-weight: (\d+);\s*src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/g)];
  return Promise.all(
    faces.map(async ([, style, weight, src]) => ({
      name: family,
      style: style as Font['style'],
      weight: Number(weight) as Font['weight'],
      data: await (await fetch(src)).arrayBuffer(),
    })),
  );
}

export async function brandFonts(text: string): Promise<Font[]> {
  const [serif, sans] = await Promise.all([
    load('Cormorant Garamond', 'ital,wght@0,500;0,600;1,500', text),
    load('Inter', 'wght@500', text),
  ]);
  return [...serif, ...sans];
}

export const BRAND = {
  navy: '#1a3a4f',
  navyDeep: '#132c3d',
  gold: '#c79f5e',
  goldSoft: 'rgba(199, 159, 94, 0.55)',
  cream: '#efe6d3',
  paper: '#faf5e8',
};
