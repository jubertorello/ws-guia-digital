import { Lede, Bullets, SectionBlock } from '@/components/ui/blocks';

export function ReglamentoScreen() {
  return (
    <>
      <Lede>Para que todos disfruten la estadía. Confiamos en vos y vos podés contar con nosotros.</Lede>
      <SectionBlock title="Convivencia">
        <Bullets items={[
          'Descanso silencioso de 22:00 a 8:00.',
          'No se permite fumar en el interior del apart.',
          'No hacer fiestas ni reuniones que no estén informadas previamente.',
          'Las visitas externas deben anunciarse en recepción.',
        ]} />
      </SectionBlock>
      <SectionBlock title="Cuidado del lugar">
        <Bullets items={[
          'Al salir, dejá las luces y el aire apagados.',
          'Si rompés algo, avisanos — no pasa nada, lo resolvemos juntos.',
          'Las toallas blancas son para el baño, las de color para la pileta o el patio.',
        ]} />
      </SectionBlock>
      <SectionBlock title="Seguridad">
        <Bullets items={[
          'Cerrá siempre la puerta principal al entrar y salir.',
          'Guardá objetos de valor en la caja fuerte del placard.',
          'En caso de emergencia, seguí las indicaciones del cartel detrás de la puerta.',
        ]} />
      </SectionBlock>
    </>
  );
}
