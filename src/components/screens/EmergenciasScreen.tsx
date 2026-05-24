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
      <SectionBlock title="Área Protegida">
        <div style={{ padding: '0 0 1rem 0', color: 'var(--text-soft)', fontSize: '0.95rem' }}>
          El alojamiento cuenta con servicio de <strong>Emergencias médicas ÁREA PROTEGIDA EMMA</strong>.
        </div>
        <Action href="tel:3533421000" icon={Ic.phone} label="Llamar a EMMA" sub="3533-421000" accent />
      </SectionBlock>
      <SectionBlock title="Otros servicios">
        <Card>
          <Row label="Bomberos" value="100" mono />
          <Row label="Policía" value="911" mono />
        </Card>
      </SectionBlock>
      <SectionBlock title="Sanatorios y Guardias">
        <Card>
          <Place name="SANATORIO GARCES" tag="Guardia" note="La Rioja 150" dist="" />
          <Place name="SANATORIO POLICLÍNICO" tag="Guardia" note="Calle Belgrano" dist="" />
        </Card>
      </SectionBlock>
    </>
  );
}
