import { Ic } from '@/lib/icons';
import { Lede, Card, SectionBlock } from '@/components/ui/blocks';
import { Action, CopyField } from '@/components/ui/interactive';

const ADDRESS = '9 de Julio 40, Las Varillas, Córdoba';
const LAT = -31.8732161;
const LNG = -62.717641;

export function UbicacionScreen() {
  return (
    <>
      <Lede>Estamos en pleno corazón de Las Varillas, a pasos del centro y de la mayoría de los lugares que vas a querer visitar.</Lede>
      <SectionBlock title="Dirección">
        <Card className="address-card">
          <div className="address">
            <div className="address-l">Welcome Suites</div>
            <div className="address-s">Las Varillas, Córdoba, Argentina</div>
          </div>
          <div className="map">
            <iframe
              title="Mapa de Welcome Suites"
              src={`https://maps.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <CopyField label="Dirección" value={ADDRESS} mono={false} />
        </Card>
        <Action href="https://maps.app.goo.gl/ntGj4vDR8bnyXHz68" icon={Ic.pin} label="Abrir en Google Maps" sub="Cómo llegar caminando o en auto" accent />
      </SectionBlock>
    </>
  );
}
