import { Lede, Card, Place, SectionBlock } from '@/components/ui/blocks';

export function ComerScreen() {
  return (
    <>
      <Lede>Nuestras recomendaciones favoritas — probadas y queridas. Reservá con tiempo los viernes y sábados.</Lede>
      <SectionBlock title="Para una buena comida">
        <Card>
          <Place name="La Estancia" tag="Parrilla · clásico" note="El bife de chorizo y las mollejas son referencia obligada en la zona." dist="5 cuadras" />
          <Place name="Don Felipe" tag="Pastas caseras" note="Sorrentinos rellenos de noche, ambiente familiar. Pedí los de calabaza." dist="3 cuadras" />
          <Place name="Mediterráneo" tag="Cocina de autor" note="Carta corta que cambia por temporada. Reservar con anticipación." dist="7 cuadras" />
        </Card>
      </SectionBlock>
      <SectionBlock title="Algo más informal">
        <Card>
          <Place name="Pizzería La Estación" tag="Pizza a la piedra" note="Muy buena masa, abre hasta tarde. Llevan delivery al apart." dist="4 cuadras" />
          <Place name="El Patio" tag="Hamburguesas y picadas" note="Lindo patio interno, ideal para grupo. Cerveza artesanal local." dist="6 cuadras" />
        </Card>
      </SectionBlock>
      <p className="footnote">Si querés algo puntual (sin TACC, vegetariano, niños) escribinos y te pasamos opción.</p>
    </>
  );
}
