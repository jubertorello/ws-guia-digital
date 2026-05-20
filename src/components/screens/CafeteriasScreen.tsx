import { Lede, Card, Place, SectionBlock } from '@/components/ui/blocks';

export function CafeteriasScreen() {
  return (
    <>
      <Lede>Para arrancar el día sin apuro o hacer una pausa a media tarde.</Lede>
      <SectionBlock title="Nuestras favoritas">
        <Card>
          <Place name="Café del Centro" tag="Especialidad · tostadas" note="Café de filtro y medialunas recién hechas. Wi-Fi para trabajar." dist="3 cuadras" />
          <Place name="Almacén & Café" tag="Brunch · sin TACC" note="Opciones veganas y sin gluten. Ideal sábado al mediodía." dist="4 cuadras" />
          <Place name="Donatella" tag="Pastelería" note="Tortas finas, alfajores artesanales. Para llevar." dist="6 cuadras" />
        </Card>
      </SectionBlock>
    </>
  );
}
