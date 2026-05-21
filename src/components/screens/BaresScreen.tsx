import { Ic } from '@/lib/icons';
import { Lede, Card, Place, SectionBlock } from '@/components/ui/blocks';
import { Action } from '@/components/ui/interactive';

export function BaresScreen() {
  return (
    <>
      <Lede>Para una copa al final del día, tranquila o con música. Pedinos consejo según el plan.</Lede>
      <SectionBlock title="Nuestra recomendación">
        <Card>
          <Place name="Eter Bar" tag="Tragos y buena onda" />
        </Card>
        <Action href="https://maps.google.com/?q=Eter+Bar+Las+Varillas" icon={Ic.pin} label="Ver Eter Bar en Maps" accent />
      </SectionBlock>
    </>
  );
}
