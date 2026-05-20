import { Ic } from '@/lib/icons';
import { Lede, SectionBlock } from '@/components/ui/blocks';
import { Action } from '@/components/ui/interactive';

export function ContactoScreen() {
  return (
    <>
      <Lede>Estamos siempre a un mensaje de distancia. Llamanos o escribinos por WhatsApp cuando lo necesites — sin horario.</Lede>
      <SectionBlock title="Recepción">
        <Action href="https://wa.me/5493533425153" icon={Ic.whatsapp} label="Toto" sub="+54 9 3533 42-5153 · WhatsApp y llamadas" accent />
        <Action href="https://wa.me/5493533454096" icon={Ic.whatsapp} label="Andrea" sub="+54 9 3533 45-4096 · WhatsApp y llamadas" accent />
      </SectionBlock>
      <SectionBlock title="Otros canales">
        <Action href="mailto:welcomesuiteslasvarillas@gmail.com" icon={Ic.mail} label="Escribinos un correo" sub="welcomesuiteslasvarillas@gmail.com" />
      </SectionBlock>
      <p className="footnote">Si es urgente, llamá directo. Respondemos los mensajes lo antes posible.</p>
    </>
  );
}
