import { Lede, Card, SectionBlock } from '@/components/ui/blocks';

const items: [string, string][] = [
  ['Cocina equipada', 'Heladera, cocina, microondas, vajilla y utensillos, pava eléctrica.'],
  ['Aire y calefacción', 'AA frío/calor en dormitorio, estufa y ventilador en comedor.'],
  ['Smart TV', 'Flow con acceso a canales, Netflix, YouTube y apps de streaming.'],
  ['Ropa de cama y toallas', 'Almohadas inteligentes y de vellón.'],
  ['Secador de pelo', 'Solicitar en recepción.'],
  ['Estacionamiento', 'Cubierto, sin cargo, por orden de llegada.'],
  ['Limpieza', 'Servicio cada 3 días en estadías largas, solicitar si lo necesitan antes.'],
];

export function ComodidadesScreen() {
  return (
    <>
      <Lede>Todo lo que vas a encontrar listo para usar. Si algo te falta, escribinos sin dudar.</Lede>
      <SectionBlock title="En tu apart">
        <Card>
          {items.map(([t, d], i) => (
            <div className="amenity" key={i}>
              <div className="amenity-t">{t}</div>
              <div className="amenity-d">{d}</div>
            </div>
          ))}
        </Card>
      </SectionBlock>
    </>
  );
}
