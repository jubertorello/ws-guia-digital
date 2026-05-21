import { Lede, Card, Row, Bullets, SectionBlock } from '@/components/ui/blocks';

export function CheckoutScreen() {
  return (
    <>
      <Lede>Que tu salida sea tan tranquila como tu llegada. Estos son los últimos pasos.</Lede>
      <SectionBlock title="El día de tu salida">
        <Card>
          <Row label="Hora límite de check-out" value="10:00 hs" />
          <Row label="Late check-out" value="según disponibilidad" />
        </Card>
        <Bullets items={[
          'Dejá las llaves en el locker donde las encontraste.',
          'No hace falta lavar la vajilla — solo dejala en la pileta.',
          'Si tenés equipaje y querés salir más tarde, podemos guardarlo en recepción.',
          'Avisanos por WhatsApp 10 minutos antes para coordinar.',
        ]} />
      </SectionBlock>
      <SectionBlock title="Antes de cerrar la puerta">
        <Bullets items={[
          'Revisá baño, dormitorio y placard.',
          'Apagá luces, aire y TV.',
          'Cerrá las ventanas si está lloviendo.',
        ]} />
      </SectionBlock>
      <SectionBlock title="Una última cosa">
        <Card className="thanks">
          <div className="thanks-q">¿Cómo estuvo todo?</div>
          <p className="thanks-p">Si la pasaste bien, una reseña en Google nos ayuda muchísimo. Y si algo se puede mejorar, escribinos directo — preferimos saberlo.</p>
          <div className="thanks-cta">
            <a className="btn-gold" href="https://maps.app.goo.gl/ntGj4vDR8bnyXHz68" target="_blank" rel="noopener noreferrer">Dejar reseña</a>
          </div>
        </Card>
      </SectionBlock>
      <p className="footnote">Gracias por elegirnos. Te esperamos cuando quieras volver.</p>
    </>
  );
}
