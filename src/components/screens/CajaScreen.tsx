import { Lede, Steps, Note, SectionBlock } from '@/components/ui/blocks';

export function CajaScreen() {
  return (
    <>
      <Lede>Guardá tus objetos de valor con tranquilidad. Elegí tu propio código en cuatro pasos simples.</Lede>

      <SectionBlock title="Configurar tu código">
        <Steps items={[
          {
            title: 'Activá la caja',
            text: <>Con la puerta abierta, pulsá el botón <strong>SET</strong> (rojo), ubicado detrás de las baterías en la parte trasera de la puerta. Se encenderá una luz amarilla acompañada de un pitido.</>,
          },
          {
            title: 'Ingresá tu código',
            text: <>Dentro de los 30 segundos, marcá un código de 3 a 8 dígitos y presioná <strong>E</strong> para confirmar. Cada pulsación se confirma con un parpadeo y un pitido. Si la luz sigue parpadeando, el código no fue aceptado: repetí el paso anterior.</>,
          },
          {
            title: 'Cerrá la caja',
            text: 'Cerrá la puerta y girá la perilla hasta la posición vertical.',
          },
          {
            title: 'Guardá tu código',
            text: 'Anotalo en tu celular. Si lo olvidás, escribinos y te ayudamos a abrirla.',
          },
        ]} />
      </SectionBlock>

      <SectionBlock title="Bueno saber">
        <Note title="Bloqueo por seguridad">
          Tras tres intentos con un código incorrecto, la caja se bloquea durante 20 segundos. Si se repiten otros tres intentos fallidos, el bloqueo se extiende a 5 minutos.
        </Note>
        <Note title="Cambiar el código">
          Podés cambiarlo cuando quieras repitiendo los pasos 1 y 2 con la puerta abierta.
        </Note>
      </SectionBlock>
    </>
  );
}
