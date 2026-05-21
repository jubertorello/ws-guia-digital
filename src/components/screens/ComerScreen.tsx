import { Ic } from '@/lib/icons';
import { Lede, Card, Place, SectionBlock } from '@/components/ui/blocks';
import { Action } from '@/components/ui/interactive';

export function ComerScreen() {
  return (
    <>
      <Lede>Nuestras recomendaciones favoritas — probadas y queridas. Reservá con tiempo los viernes y sábados.</Lede>
      <SectionBlock title="Para una buena comida">
        <Card>
          <Place name="Gourmet" tag="Minutas · clásico" />
        </Card>
        <Action href="https://maps.google.com/?q=Gourmet+Las+Varillas" icon={Ic.pin} label="Ver Gourmet en Maps" accent />
        
        <Card>
          <Place name="Don Felipe" tag="Pastas caseras" />
        </Card>
        <Action href="https://maps.google.com/?q=Don+Felipe+Las+Varillas" icon={Ic.pin} label="Ver Don Felipe en Maps" accent />

        <Card>
          <Place name="Mediterráneo" tag="Cocina de autor" />
        </Card>
        <Action href="https://maps.google.com/?q=Mediterraneo+Las+Varillas" icon={Ic.pin} label="Ver Mediterráneo en Maps" accent />
      </SectionBlock>
      
      <SectionBlock title="Algo más informal">
        <Card>
          <Place name="Pizzería La Estación" tag="Pizza a la piedra" />
        </Card>
        <Action href="https://maps.google.com/?q=Pizzeria+La+Estacion+Las+Varillas" icon={Ic.pin} label="Ver La Estación en Maps" accent />
        
        <Card>
          <Place name="El Patio" tag="Hamburguesas y picadas" />
        </Card>
        <Action href="https://maps.google.com/?q=El+Patio+Las+Varillas" icon={Ic.pin} label="Ver El Patio en Maps" accent />
      </SectionBlock>

      <SectionBlock title="Cafeterías y pastelerías">
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

      <p className="footnote">Si querés algo puntual (sin TACC, vegetariano, niños) escribinos y te pasamos opción.</p>
    </>
  );
}
