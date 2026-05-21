import { Ic } from '@/lib/icons';
import { Lede, Card, SectionBlock } from '@/components/ui/blocks';
import { Action } from '@/components/ui/interactive';

export function UbicacionScreen() {
  return (
    <>
      <Lede>Estamos en pleno corazón de Las Varillas, a pasos del centro y de la mayoría de los lugares que vas a querer visitar.</Lede>
      <SectionBlock title="Dirección">
        <Card>
          <div className="address">
            <div className="address-l">Welcome Suites</div>
            <div className="address-s">Las Varillas, Córdoba, Argentina</div>
          </div>
          <div className="map-placeholder" role="img" aria-label="Mapa del barrio">
            <div className="map-grid"></div>
            <div className="map-pin">{Ic.pin}</div>
            <div className="map-label">Welcome Suites</div>
          </div>
        </Card>
        <Action href="https://maps.google.com/?q=Welcome+Suites+Las+Varillas+Cordoba" icon={Ic.pin} label="Abrir en Google Maps" sub="Cómo llegar caminando o en auto" accent />
      </SectionBlock>
    </>
  );
}
