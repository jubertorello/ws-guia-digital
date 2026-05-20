import { Lede, Card, Place, SectionBlock } from '@/components/ui/blocks';

export function BaresScreen() {
  return (
    <>
      <Lede>Para una copa al final del día, tranquila o con música. Pedinos consejo según el plan.</Lede>
      <SectionBlock title="Tranqui">
        <Card>
          <Place name="Bar 1922" tag="Vinos · tapas" note="Carta corta de vinos de la zona, picadas para compartir." dist="4 cuadras" />
          <Place name="La Barra" tag="Coctelería" note="Buenos negronis y un mezcal local que vale la pena." dist="6 cuadras" />
        </Card>
      </SectionBlock>
      <SectionBlock title="Con onda">
        <Card>
          <Place name="Galpón Club" tag="Música en vivo · viernes y sábados" note="Bandas locales. Abre 22:30, mejor llegar después de las 23." dist="auto" />
        </Card>
      </SectionBlock>
    </>
  );
}
