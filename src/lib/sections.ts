export type SectionId =
  | 'contacto'
  | 'wifi'
  | 'comodidades'
  | 'caja'
  | 'info'
  | 'ubicacion'
  | 'desayuno'
  | 'comer'
  | 'bares'
  | 'hacer'
  | 'emergencias'
  | 'checkout';

export interface SectionMeta {
  id: SectionId;
  label: string;
  icon: string;
}

export const SECTIONS: SectionMeta[] = [
  { id: 'info',        label: 'check-in',          icon: 'alert' },
  { id: 'contacto',    label: 'contacto',          icon: 'phone' },
  { id: 'wifi',        label: 'wifi',              icon: 'wifi' },
  { id: 'comodidades', label: 'comodidades',       icon: 'amenities' },
  { id: 'caja',        label: 'caja de seguridad', icon: 'safe' },
  { id: 'ubicacion',   label: 'ubicación',         icon: 'pin' },
  { id: 'desayuno',    label: 'desayuno',          icon: 'breakfast' },
  { id: 'comer',       label: 'dónde comer',       icon: 'fork' },
  { id: 'bares',       label: 'bares',             icon: 'bar' },
  { id: 'hacer',       label: 'qué hacer',         icon: 'activity' },
  { id: 'emergencias', label: 'emergencias',       icon: 'emergency' },
  { id: 'checkout',    label: 'check-out',         icon: 'key' },
];

export const SECTION_TITLES: Record<SectionId, string> = {
  contacto:    'Contacto',
  wifi:        'WiFi',
  comodidades: 'Comodidades',
  caja:        'Caja de seguridad',
  info:        'Check-in',
  ubicacion:   'Ubicación',
  desayuno:    'Desayuno',
  comer:       'Dónde comer',
  bares:       'Bares',
  hacer:       'Qué hacer',
  emergencias: 'Emergencias',
  checkout:    'Check-out',
};
