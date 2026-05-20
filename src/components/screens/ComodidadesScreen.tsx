import { Lede, Card, SectionBlock } from '@/components/ui/blocks';

const items: [string, string][] = [
  ['Cocina equipada', 'Heladera, anafe, microondas, vajilla completa y utensilios.'],
  ['Aire y calefacción', 'Climatización individual en cada ambiente.'],
  ['Smart TV', 'Con acceso a Netflix, YouTube y apps de streaming.'],
  ['Ropa de cama y toallas', 'Repuesto adicional en el placard del dormitorio.'],
  ['Lavarropas', 'Disponible en el apart — consultá por el detergente.'],
  ['Secador de pelo', 'En el baño, dentro del cajón inferior.'],
  ['Estacionamiento', 'Cubierto, sin cargo, por orden de llegada.'],
  ['Limpieza', 'Servicio cada 3 días en estadías largas. Pedilo si lo necesitás antes.'],
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
