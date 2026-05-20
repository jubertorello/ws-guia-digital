import { Ic } from '@/lib/icons';
import { Lede, Card, SectionBlock } from '@/components/ui/blocks';
import { CopyField } from '@/components/ui/interactive';

export function WifiScreen() {
  return (
    <>
      <Lede>Tenés dos redes disponibles en todo el apart. Tocá cualquier dato para copiarlo y pegarlo al conectarte.</Lede>
      <SectionBlock title="Red principal">
        <Card className="wifi-card">
          <div className="wifi-mark">{Ic.wifi}</div>
          <CopyField label="Red" value="Personal Welcome Suites" mono={false} />
          <CopyField label="Contraseña" value="Huespedes" />
        </Card>
      </SectionBlock>
      <SectionBlock title="Red secundaria">
        <Card className="wifi-card">
          <div className="wifi-mark">{Ic.wifi}</div>
          <CopyField label="Red" value="Wlc_Suites" mono={false} />
          <CopyField label="Contraseña" value="Wlc_Suites23" />
        </Card>
      </SectionBlock>
      <p className="footnote">Si la señal se corta, intentá la otra red — están en distintos sectores del edificio.</p>
    </>
  );
}
