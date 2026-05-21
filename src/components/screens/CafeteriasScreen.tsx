import { Ic } from '@/lib/icons';
import { Lede, Card, Place, SectionBlock } from '@/components/ui/blocks';
import { Action } from '@/components/ui/interactive';

export function CafeteriasScreen() {
  return (
    <>
      <Lede>Para arrancar el día sin apuro o hacer una pausa a media tarde.</Lede>
      <SectionBlock title="Nuestras favoritas">
        <Card>
          <Place name="Café del Centro" tag="Especialidad · tostadas" />
        </Card>
        <Action href="https://maps.google.com/?q=Cafe+del+Centro+Las+Varillas" icon={Ic.pin} label="Ver Café del Centro en Maps" accent />

        <Card>
          <Place name="Almacén & Café" tag="Brunch · sin TACC" />
        </Card>
        <Action href="https://maps.google.com/?q=Almacen+y+Cafe+Las+Varillas" icon={Ic.pin} label="Ver Almacén & Café en Maps" accent />

        <Card>
          <Place name="Donatella" tag="Pastelería" />
        </Card>
        <Action href="https://maps.google.com/?q=Donatella+Las+Varillas" icon={Ic.pin} label="Ver Donatella en Maps" accent />
      </SectionBlock>
    </>
  );
}
