import { Lede, Card, Place, SectionBlock } from '@/components/ui/blocks';

export function HacerScreen() {
  return (
    <>
      <Lede>Las Varillas tiene un ritmo propio: pueblo de campo, cerca del verde y con historia. Algunas ideas para tus días acá.</Lede>
      <SectionBlock title="Imperdibles">
        <Card>
          <Place name="Casco histórico" tag="Caminata · 1 h" note="Recorrido por la plaza, la iglesia y los edificios de fines del 1800." dist="centro" />
          <Place name="Museo Histórico Municipal" tag="Cultura" note="Pequeño pero muy bien curado. Entrada libre, abre tarde." dist="5 cuadras" />
          <Place name="Laguna Mar Chiquita" tag="Paseo · día completo" note="Una hora y media en auto. Reserva natural impresionante." dist="auto" />
        </Card>
      </SectionBlock>
      <SectionBlock title="Para aire libre">
        <Card>
          <Place name="Parque del Bicentenario" tag="Caminar · correr" note="Pista de tierra, sombra y juegos para chicos." dist="10 cuadras" />
          <Place name="Estancia Las Acacias" tag="Día de campo" note="Almuerzo, cabalgata y pileta. Pedinos el contacto para reservar." dist="auto" />
        </Card>
      </SectionBlock>
    </>
  );
}
