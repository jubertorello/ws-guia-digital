export type SectionId =
  | 'contacto'
  | 'wifi'
  | 'comodidades'
  | 'info'
  | 'ubicacion'
  | 'reglamento'
  | 'desayuno'
  | 'comer'
  | 'cafeterias'
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
  { id: 'info',        label: 'info importante',  icon: 'alert' },
  { id: 'contacto',    label: 'contacto',        icon: 'phone' },
  { id: 'wifi',        label: 'wifi',             icon: 'wifi' },
  { id: 'comodidades', label: 'comodidades',      icon: 'amenities' },
  { id: 'ubicacion',   label: 'ubicación',        icon: 'pin' },
  { id: 'reglamento',  label: 'reglamento',       icon: 'rules' },
  { id: 'desayuno',    label: 'desayuno',         icon: 'breakfast' },
  { id: 'comer',       label: 'dónde comer',      icon: 'fork' },
  { id: 'cafeterias',  label: 'cafeterías',       icon: 'coffee' },
  { id: 'bares',       label: 'bares',            icon: 'bar' },
  { id: 'hacer',       label: 'qué hacer',        icon: 'activity' },
  { id: 'emergencias', label: 'emergencias',      icon: 'emergency' },
  { id: 'checkout',    label: 'antes de irte',    icon: 'key' },
];

export const SECTION_TITLES: Record<SectionId, string> = {
  contacto:    'Contacto',
  wifi:        'WiFi',
  comodidades: 'Comodidades',
  info:        'Info importante',
  ubicacion:   'Ubicación',
  reglamento:  'Reglamento',
  desayuno:    'Desayuno',
  comer:       'Dónde comer',
  cafeterias:  'Cafeterías',
  bares:       'Bares',
  hacer:       'Qué hacer',
  emergencias: 'Emergencias',
  checkout:    'Antes de irte',
};
