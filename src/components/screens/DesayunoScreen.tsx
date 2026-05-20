import { Lede, Card, Row, Bullets, SectionBlock } from '@/components/ui/blocks';

export function DesayunoScreen() {
  return (
    <>
      <Lede>Una manera linda de empezar el día. Servido en el comedor de planta baja o pedilo en tu apart.</Lede>
      <SectionBlock title="Horario">
        <Card>
          <Row label="De lunes a viernes" value="8:00 — 10:30" />
          <Row label="Sábados, domingos y feriados" value="8:30 — 11:00" />
        </Card>
      </SectionBlock>
      <SectionBlock title="Qué incluye">
        <Bullets items={[
          'Café de especialidad, té en hebras, leche y submarino.',
          'Jugo de naranja exprimido del día.',
          'Pan casero, medialunas y tostadas con manteca y mermelada.',
          'Huevos revueltos o tortilla a pedido.',
          'Fruta fresca de estación, yogur y granola casera.',
          'Selección de fiambres y quesos regionales.',
        ]} />
      </SectionBlock>
      <SectionBlock title="¿En el apart?">
        <Card>
          <p className="screen-p">Si preferís desayunar en pijama, podemos llevártelo. Avisanos por WhatsApp la noche anterior o antes de las 8 de la mañana.</p>
        </Card>
      </SectionBlock>
      <p className="footnote">Restricciones (sin TACC, vegano, sin lactosa): contanos al hacer el check-in.</p>
    </>
  );
}
