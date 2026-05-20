import { Ic } from '@/lib/icons';
import { Lede, Card, Row, Place, SectionBlock } from '@/components/ui/blocks';
import { Action } from '@/components/ui/interactive';

export function EmergenciasScreen() {
  return (
    <>
      <Lede>Si pasa algo, primero llamanos a nosotros — coordinamos lo que necesites. Estos son los números útiles.</Lede>
      <SectionBlock title="Recepción">
        <Action href="tel:+5493533425153" icon={Ic.phone} label="Toto" sub="+54 9 3533 42-5153" accent />
        <Action href="tel:+5493533454096" icon={Ic.phone} label="Andrea" sub="+54 9 3533 45-4096" accent />
      </SectionBlock>
      <SectionBlock title="Servicios de emergencia">
        <Card>
          <Row label="Emergencias médicas" value="107" mono />
          <Row label="Bomberos" value="100" mono />
          <Row label="Policía" value="911" mono />
          <Row label="Defensa civil" value="103" mono />
        </Card>
      </SectionBlock>
      <SectionBlock title="Cerca del apart">
        <Card>
          <Place name="Hospital Iturraspe" tag="Guardia 24 h" note="A 6 cuadras. Tomá un remís si es de noche." dist="6 cuadras" />
          <Place name="Farmacia del Centro" tag="Turno 24 h rotativo" note="Consultá en recepción cuál tiene turno esa noche." dist="4 cuadras" />
        </Card>
      </SectionBlock>
    </>
  );
}
