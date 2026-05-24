import { Ic } from '@/lib/icons';
import { Lede, Card, Place, SectionBlock } from '@/components/ui/blocks';
import { Action } from '@/components/ui/interactive';

export function ComerScreen() {
  return (
    <>
      <Lede>Nuestras recomendaciones favoritas — probadas y queridas. Reservá con tiempo los viernes y sábados.</Lede>
      <SectionBlock title="Lugares para comer">
        <Card>
          <Place name="Parribus El 22 (Gregorio)" />
        </Card>
        <Action href="https://maps.google.com/?q=Parribus+El+22+Gregorio+Las+Varillas" icon={Ic.pin} label="Ver en Maps" accent />
        
        <Card>
          <Place name="Casa Jon" />
        </Card>
        <Action href="https://maps.google.com/?q=Casa+Jon+Las+Varillas" icon={Ic.pin} label="Ver en Maps" accent />

        <Card>
          <Place name="Sushi Jon" />
        </Card>
        <Action href="https://maps.google.com/?q=Sushi+Jon+Las+Varillas" icon={Ic.pin} label="Ver en Maps" accent />

        <Card>
          <Place name="La Martina" />
        </Card>
        <Action href="https://maps.google.com/?q=La+Martina+Las+Varillas" icon={Ic.pin} label="Ver en Maps" accent />

        <Card>
          <Place name="Valentino" tag="Miércoles a Domingo" />
        </Card>
        <Action href="https://maps.google.com/?q=Valentino+Las+Varillas" icon={Ic.pin} label="Ver en Maps" accent />

        <Card>
          <Place name="El Castillo" />
        </Card>
        <Action href="https://maps.google.com/?q=El+Castillo+Las+Varillas" icon={Ic.pin} label="Ver en Maps" accent />

        <Card>
          <Place name="Bocatta" />
        </Card>
        <Action href="https://maps.google.com/?q=Bocatta+Las+Varillas" icon={Ic.pin} label="Ver en Maps" accent />

        <Card>
          <Place name="VIP" />
        </Card>
        <Action href="https://maps.google.com/?q=VIP+Las+Varillas" icon={Ic.pin} label="Ver en Maps" accent />
      </SectionBlock>

      <SectionBlock title="Cafeterías">
        <Card>
          <Place name="El Fondito" />
        </Card>
        <Action href="https://maps.google.com/?q=El+Fondito+Las+Varillas" icon={Ic.pin} label="Ver en Maps" accent />

        <Card>
          <Place name="Mayo" />
        </Card>
        <Action href="https://maps.google.com/?q=Mayo+Las+Varillas" icon={Ic.pin} label="Ver en Maps" accent />

        <Card>
          <Place name="Al Rojo" />
        </Card>
        <Action href="https://maps.google.com/?q=Al+Rojo+Las+Varillas" icon={Ic.pin} label="Ver en Maps" accent />

        <Card>
          <Place name="Panadería Salomone" />
        </Card>
        <Action href="https://maps.google.com/?q=Panaderia+Salomone+Las+Varillas" icon={Ic.pin} label="Ver en Maps" accent />

        <Card>
          <Place name="Estación de Servicio Shell" />
        </Card>
        <Action href="https://maps.google.com/?q=Estacion+de+Servicio+Shell+Las+Varillas" icon={Ic.pin} label="Ver en Maps" accent />

        <Card>
          <Place name="Estación de Servicio YPF" />
        </Card>
        <Action href="https://maps.google.com/?q=Estacion+de+Servicio+YPF+Las+Varillas" icon={Ic.pin} label="Ver en Maps" accent />
      </SectionBlock>

      <p className="footnote">Si querés algo puntual (sin TACC, vegetariano, niños) escribinos y te pasamos opción.</p>
    </>
  );
}
