import { Lede, Card, Row, Bullets, SectionBlock } from '@/components/ui/blocks';

export function InfoScreen() {
  return (
    <>
      <Lede>Lo esencial para que tu estadía sea simple desde el primer momento.</Lede>
      <SectionBlock title="Horarios">
        <Card>
          <Row label="Check-in" value="desde 14:00" />
          <Row label="Check-out" value="hasta 10:30" />
          <Row label="Recepción" value="9:00 — 22:00" />
        </Card>
      </SectionBlock>
      <SectionBlock title="Bueno saber">
        <Bullets items={[
          'El check-in fuera de horario se coordina por WhatsApp con anticipación.',
          'El desayuno se sirve de 8:00 a 10:30 en el comedor (planta baja).',
          'Si necesitás guardar el equipaje el día de salida, dejalo en recepción.',
          'No fumar dentro del apart — hay un patio exterior habilitado.',
          'Mascotas: solo previo acuerdo. Consultanos.',
        ]} />
      </SectionBlock>
    </>
  );
}
