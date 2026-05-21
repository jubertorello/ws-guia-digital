import { Ic } from '@/lib/icons';
import { Lede, Card, Place, SectionBlock } from '@/components/ui/blocks';
import { Action } from '@/components/ui/interactive';

export function HacerScreen() {
  return (
    <>
      <Lede>Las Varillas tiene un ritmo propio: pueblo de campo, cerca del verde y con historia. Algunas ideas para tus días acá.</Lede>
      <SectionBlock title="Imperdibles">
        <Card>
          <Place name="Plaza San Martín" tag="Cultura" note="Recorrido por la plaza y la iglesia." />
        </Card>
        <Action href="https://maps.app.goo.gl/zF9efBYoWzHU2F597" icon={Ic.pin} label="Ver Plaza San Martín en Maps" accent />
        <Card>
          <Place name="Cine Teatro Colón" tag="Cultura" note="Inaugurado en 1923, es el mayor centro cultural de la ciudad y sede de importante espectáculos teatrales y artisticos." />
        </Card>
        <Action href="https://maps.app.goo.gl/1d8n18P4fkijRZnq7" icon={Ic.pin} label="Ver Teatro Colón en Maps" accent />
        <Card>
          <Place name="Observatorio astronómico de GMZ" tag="Ciencia" note="Entrada libre, abre tarde." />
        </Card>
        <Action href="https://maps.app.goo.gl/aVZ68LsSaDfFsUKeA" icon={Ic.pin} label="Ver Observatorio en Maps" accent />
      </SectionBlock>
      <SectionBlock title="Para aire libre">
        <Card>
          <Place name="Centro Cívico" tag="Caminar · correr" note="Paseo para correr/caminar, zonas verdes." />
        </Card>
        <Action href="https://maps.app.goo.gl/pNruXPzZr7GXf19X7" icon={Ic.pin} label="Ver Centro Cívico en Maps" accent />

        <Card>
          <Place name="Parque de la familia" tag="Caminar · correr" note="Tomar mates, pasar el día, picnic, juegos para niños, pista de Skate." />
        </Card>
        <Action href="https://maps.app.goo.gl/gbvKFJUAvovhXpSs7" icon={Ic.pin} label="Ver Parque de la familia en Maps" accent />
      </SectionBlock>
      <SectionBlock title="Eventos y cultura">
        <div style={{ padding: '0 0 1rem 0', color: 'var(--text-soft)', fontSize: '0.95rem' }}>
          Para próximos eventos culturales y artísticos, te recomendamos seguir a la Dirección de Cultura:
        </div>
        <Action href="https://www.instagram.com/dirculturalasvarillas?igsh=MWdiNHR1YnJiazFqOA==" icon={Ic.activity} label="Ver Instagram" sub="@dirculturalasvarillas" accent />
      </SectionBlock>
    </>
  );
}
