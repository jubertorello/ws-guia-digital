import { Lede, Card, Row, Bullets, SectionBlock } from '@/components/ui/blocks';

export function DesayunoScreen() {
  return (
    <>
      <Lede>Te dejamos una cesta con la bollería en la puerta del apart para que la ingreses y puedas acompañar las infusiones.</Lede>
      <SectionBlock title="Horarios">
        <Card>
          <Row label="De lunes a viernes" value="7:00 hs" />
          <Row label="Fines de semana y feriados" value="8:30 hs" />
        </Card>
      </SectionBlock>
    </>
  );
}
