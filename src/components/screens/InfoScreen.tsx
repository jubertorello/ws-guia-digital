import { Lede, Card, Row, Bullets, SectionBlock } from '@/components/ui/blocks';

export function InfoScreen() {
  return (
    <>
      <Lede>Bienvenido a tu hogar en Las Varillas.</Lede>

      <SectionBlock title="Cómo ingresar">
        <Bullets items={[
          'Al llegar vas a encontrar una puerta vidriada con una cerradura electrónica. Allí vas a ingresar el código que te enviaremos por WhatsApp oportunamente.',
          'Al atravesar el lobby, te encontrarás con una puerta metálica también con cerradura electrónica (código que también remitiremos).',
          'Al llegar a tu departamento encontrarás un locker donde se encuentra tu llave, con otro código que también compartiremos en el momento.'
        ]} />
      </SectionBlock>

      <SectionBlock title="Horarios">
        <Card>
          <Row label="Check-in" value="a partir de las 14:00 hs" />
          <Row label="Check-out" value="hasta las 10:00 hs" />
        </Card>
      </SectionBlock>
      <SectionBlock title="Bueno saber">
        <Bullets items={[
          'El check-in fuera del horario se coordina previamente.',
          'Si necesitás guardar el equipaje el día de salida, dejalo en recepción.',
          'No fumar dentro del apart. Hay balcones, patios exteriores y terraza habilitados.',
          'Mascotas: solo previo acuerdo, consultanos.',
          'Terraza y solarium: Cuenta con asador, metegol, reposeras, ducha, mesa y bancos.',
          'En el primer patio de luz se encuentra un cesto de basura de consorcio.'
        ]} />
      </SectionBlock>
    </>
  );
}
