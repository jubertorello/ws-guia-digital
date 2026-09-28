import { Lede, Card, Row, Bullets, SectionBlock } from '@/components/ui/blocks';

export function InfoScreen() {
  return (
    <>
      <Lede>Bienvenido. Acá te contamos cómo entrar y todo lo que conviene saber de la casa.</Lede>

      <SectionBlock title="Cómo ingresar">
        <Bullets items={[
          'Al llegar vas a encontrar una puerta vidriada con una cerradura electrónica. Allí vas a ingresar el código que te enviaremos por WhatsApp oportunamente.',
          'Al atravesar el lobby, te encontrarás con una puerta metálica también con cerradura electrónica (código que también remitiremos).',
          'Al llegar a tu departamento encontrarás un locker donde se encuentra tu llave, con otro código que también compartiremos en el momento.'
        ]} />
      </SectionBlock>

      <SectionBlock title="Horarios">
        <Card>
          <Row label="Check-in" value="a partir de las 14:00 hs *" />
          <Row label="Check-out" value="hasta las 10:00 hs" />
        </Card>
        <p className="footnote">* El check-in fuera del horario se coordina previamente.</p>
      </SectionBlock>
      <SectionBlock title="Convivencia">
        <Bullets items={[
          'Descanso silencioso de 22:00 a 8:00.',
          'No se permite fumar dentro del apart. Hay balcones, patios exteriores y terraza habilitados.',
          'No hacer fiestas ni reuniones que no estén informadas previamente.',
          'Las visitas externas deben anunciarse en recepción.',
          'Mascotas: solo con acuerdo previo.',
        ]} />
      </SectionBlock>

      <SectionBlock title="Cuidado del lugar">
        <Bullets items={[
          'Cerrá siempre la puerta principal al entrar y salir.',
          'La basura va en el cesto de consorcio del primer patio de luz. Sacala cerrada, sobre todo si hay restos de comida.',
          'Las toallas blancas son para el baño, las alfombras de color son para los pies.',
          'Si rompés algo, avisanos — no pasa nada, lo resolvemos juntos.',
          'La terraza y el solarium tienen asador, metegol, reposeras, ducha, mesa y bancos.',
          'Si usás el asador, dejá la parrilla limpia y esperá a que las brasas se apaguen del todo. Lo mismo con el resto: dejalo como lo encontraste.',
        ]} />
      </SectionBlock>
    </>
  );
}
