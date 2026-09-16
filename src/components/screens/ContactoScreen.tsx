import { Ic } from '@/lib/icons';
import { Lede, SectionBlock } from '@/components/ui/blocks';
import { Action } from '@/components/ui/interactive';

const PEOPLE = [
  { name: 'Toto', phone: '5493533425153', display: '+54 9 3533 42-5153' },
  { name: 'Andrea', phone: '5493533454096', display: '+54 9 3533 45-4096' },
];

export function ContactoScreen() {
  return (
    <>
      <Lede>Estamos siempre a un mensaje de distancia. Llamanos o escribinos por WhatsApp cuando lo necesites — sin horario.</Lede>
      {PEOPLE.map((p) => (
        <SectionBlock key={p.name} title={`${p.name} · ${p.display}`}>
          <div className="action-pair">
            <Action href={`https://wa.me/${p.phone}`} icon={Ic.whatsapp} label="WhatsApp" accent />
            <Action href={`tel:+${p.phone}`} icon={Ic.phone} label="Llamar" />
          </div>
        </SectionBlock>
      ))}
      <SectionBlock title="Otros canales">
        <Action href="mailto:welcomesuiteslasvarillas@gmail.com" icon={Ic.mail} label="Escribinos un correo" sub="welcomesuiteslasvarillas@gmail.com" />
      </SectionBlock>
      <p className="footnote">Si es urgente, llamá directo. Respondemos los mensajes lo antes posible.</p>
    </>
  );
}
