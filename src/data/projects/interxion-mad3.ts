import type { Project, Text } from '../portfolio';

const spanish = (value: string): Text => ({ es: value, en: value });

export const interxionProject: Project = {
  id: 'interxion-mad3',
  reference: 'PROYECTO 01 — CONSTRUCÍA INSTALACIONES',
  sector: 'industry',
  interventions: ['tender'],
  contentLanguage: 'es',
  title: spanish('Centro de Procesamiento de Datos Interxion MAD3'),
  cardTitle: spanish('Interxion MAD3'),
  subtitle: spanish('Centro de Procesamiento de Datos — Madrid'),
  summary: spanish('Participación en la licitación adjudicada del paquete integral de instalaciones MEP del centro de datos Interxion MAD3, infraestructura tecnológica de alta disponibilidad en Madrid.'),
  status: 'verified',
  image: {
    src: 'assets/projects/interxion-mad3/infografia.png',
    alt: spanish('Infografía ilustrativa del CPD Interxion MAD3 con racks IT, canalizaciones de datos, alimentación eléctrica y climatización. Representación conceptual.'),
    width: 1670,
    height: 942,
    fit: 'contain',
    caption: 'Infografía ilustrativa aportada por Borja Rejano.',
  },
  caseStudy: {
    company: 'Construcía Instalaciones',
    location: 'Madrid, España',
    role: 'Técnico de estudios · Participación en licitación MEP',
    sectorLabel: 'Centros de datos e infraestructuras críticas',
    typology: 'Centro de Procesamiento de Datos (CPD / Data Center)',
    description: [
      'Participación en la licitación del paquete integral de instalaciones del Centro de Procesamiento de Datos Interxion MAD3, ubicado en Madrid.',
      'El proyecto correspondía a una infraestructura tecnológica de alta disponibilidad, con instalaciones eléctricas, mecánicas, de refrigeración, protección contra incendios, seguridad y sistemas de control.',
      'La complejidad del centro requería integrar múltiples disciplinas técnicas y sistemas asociados al funcionamiento de un centro de datos.',
      'La oferta presentada por Construcía Instalaciones resultó adjudicataria del paquete de instalaciones.',
    ],
    tags: ['Data Center', 'CPD', 'Ingeniería MEP', 'BT / MT', 'HVAC', 'PCI', 'BMS', 'Licitaciones'],
    metrics: [
      { value: '≈ 8.500 m²', label: 'Superficie construida publicada' },
      { value: '≈ 2.500 m²', label: 'Salas IT' },
      { value: '11 MW', label: 'Potencia eléctrica publicada' },
      { value: '35.000', label: 'Servidores previstos' },
    ],
    participation: {
      title: 'Participación en estudios y licitaciones',
      description: [
        'Participación en el proceso de licitación de las instalaciones del CPD Interxion MAD3, proyecto de elevada complejidad técnica que integraba múltiples disciplinas de ingeniería de instalaciones.',
        'La participación profesional descrita corresponde a la fase de licitación. El alcance técnico siguiente describe las instalaciones del proyecto, no responsabilidades personales de ejecución de obra.',
      ],
      // Add only individually confirmed tender tasks here.
      responsibilities: [],
      outcome: 'Licitación adjudicada: el paquete de instalaciones fue adjudicado a Construcía Instalaciones.',
    },
    phases: [],
    disciplinesTitle: 'Disciplinas técnicas del proyecto',
    disciplines: [
      { id: 'electrical', title: 'Instalaciones eléctricas', icon: 'electrical', systems: ['Instalaciones de media tensión', 'Instalaciones de baja tensión'] },
      { id: 'mechanical', title: 'Climatización e instalaciones mecánicas', icon: 'mechanical', systems: ['Sistemas de climatización', 'Sistemas de refrigeración', 'Ventilación y extracción', 'Redes hidráulicas'] },
      { id: 'fire', title: 'Protección contra incendios', icon: 'safety', systems: ['Instalaciones de protección contra incendios (PCI)'] },
      { id: 'security', title: 'Seguridad', icon: 'safety', systems: ['Sistemas de CCTV', 'Sistemas de control de accesos'] },
      { id: 'control', title: 'Control y automatización', icon: 'communications', systems: ['Sistemas BMS', 'Sistemas de control de instalaciones'] },
      { id: 'special', title: 'Sistemas especiales', icon: 'auxiliary', systems: ['Sistemas de megafonía'] },
    ],
    competencies: ['Participación en licitaciones de instalaciones MEP', 'Experiencia en ofertas para centros de datos e infraestructuras críticas'],
    images: [], // Reserved for verified images with permission to reuse; no visible gallery.
    documents: [],
  },
};
