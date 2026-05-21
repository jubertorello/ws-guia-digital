import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SECTION_TITLES, SECTIONS } from '@/lib/sections';
import { DetailLayout } from '@/components/DetailLayout';

// ── Screen registry ──────────────────────────────────────────────
import { ContactoScreen }    from '@/components/screens/ContactoScreen';
import { WifiScreen }        from '@/components/screens/WifiScreen';
import { ComodidadesScreen } from '@/components/screens/ComodidadesScreen';
import { InfoScreen }        from '@/components/screens/InfoScreen';
import { UbicacionScreen }   from '@/components/screens/UbicacionScreen';
import { ReglamentoScreen }  from '@/components/screens/ReglamentoScreen';
import { DesayunoScreen }    from '@/components/screens/DesayunoScreen';
import { ComerScreen }       from '@/components/screens/ComerScreen';
import { BaresScreen }       from '@/components/screens/BaresScreen';
import { HacerScreen }       from '@/components/screens/HacerScreen';
import { EmergenciasScreen } from '@/components/screens/EmergenciasScreen';
import { CheckoutScreen }    from '@/components/screens/CheckoutScreen';

const SCREENS: Record<string, React.ComponentType> = {
  contacto:    ContactoScreen,
  wifi:        WifiScreen,
  comodidades: ComodidadesScreen,
  info:        InfoScreen,
  ubicacion:   UbicacionScreen,
  reglamento:  ReglamentoScreen,
  desayuno:    DesayunoScreen,
  comer:       ComerScreen,
  bares:       BaresScreen,
  hacer:       HacerScreen,
  emergencias: EmergenciasScreen,
  checkout:    CheckoutScreen,
};

// ── Static params (SSG) ──────────────────────────────────────────
export function generateStaticParams() {
  return SECTIONS.map((s) => ({ section: s.id }));
}

// ── Metadata per section ─────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ section: string }> }
): Promise<Metadata> {
  const { section } = await params;
  const title = SECTION_TITLES[section as keyof typeof SECTION_TITLES];
  if (!title) return {};
  return {
    title: `${title} · Welcome Suites`,
  };
}

// ── Page ─────────────────────────────────────────────────────────
export default async function SectionPage(
  { params }: { params: Promise<{ section: string }> }
) {
  const { section } = await params;
  const Screen = SCREENS[section];
  const title = SECTION_TITLES[section as keyof typeof SECTION_TITLES];

  if (!Screen || !title) notFound();

  return (
    <DetailLayout title={title}>
      <Screen />
    </DetailLayout>
  );
}
