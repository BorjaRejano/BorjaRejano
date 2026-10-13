import type { Project, Text } from '../portfolio';

const spanish = (value: string): Text => ({ es: value, en: value });

export const sonVidaProject: Project = {
  id: 'hotel-son-vida',
  reference: 'PROYECTO 02 — CONSTRUCTORA SAN JOSÉ',
  sector: 'building',
  interventions: ['delivery', 'management'],
  contentLanguage: 'es',
  title: spanish('Reforma y ampliación del Hotel Son Vida y construcción de 16 viviendas de lujo'),
  cardTitle: spanish('Hotel Son Vida'),
  subtitle: spanish('Reforma, ampliación, spa y 16 viviendas de lujo'),
  summary: spanish('Gestión técnica y coordinación multidisciplinar de instalaciones MEP en un proyecto hotelero y residencial de alta gama, incluyendo instalaciones especializadas de tratamiento de agua, climatización y deshumidificación de spa y piscina climatizada.'),
  status: 'verified',
  deliveryLabel: spanish('Obra ejecutada'),
  image: {
    src: 'assets/projects/hotel-son-vida/infografia.png',
    alt: spanish('Infografía arquitectónica del Hotel Son Vida, viviendas y área de spa y piscina. Representación ilustrativa.'),
    width: 1670,
    height: 942,
    fit: 'contain',
    caption: 'Infografía ilustrativa aportada por Borja Rejano.',
  },
  caseStudy: {
    company: 'Constructora San José',
    location: 'Mallorca, Islas Baleares, España',
    role: 'Ingeniero de Instalaciones',
    sectorLabel: 'Edificación hotelera y residencial de lujo',
    typology: 'Reforma, ampliación y obra nueva',
    description: [
      'Participación como Ingeniero de Instalaciones en el proyecto de reforma y ampliación del Hotel Son Vida, en Mallorca, incluyendo la ejecución de un área de spa y la construcción de 16 viviendas de lujo dentro de la parcela del complejo hotelero.',
      'Desarrollo de funciones de gestión técnica y coordinación multidisciplinar durante las diferentes fases del proyecto, desde la revisión inicial de documentación de ingeniería y los procesos de contratación y aprovisionamiento hasta la supervisión de ejecución, puesta en marcha y entrega final de las instalaciones.',
      'El proyecto integró instalaciones eléctricas de baja y media tensión, climatización, ventilación, fontanería, saneamiento, protección contra incendios, comunicaciones, automatización y sistemas especializados para el tratamiento de agua y el control ambiental del spa y su piscina climatizada.',
    ],
    activities: [
      { title: 'Actuación 1 · Reforma y ampliación del Hotel Son Vida', description: 'Reforma y ampliación de las instalaciones del complejo hotelero, incluyendo la ejecución de un spa con piscina climatizada y sus correspondientes sistemas técnicos.' },
      { title: 'Actuación 2 · Construcción de 16 viviendas de lujo', description: 'Ejecución de nuevas viviendas de alta gama dentro de la parcela del complejo hotelero, incluyendo las instalaciones técnicas asociadas al proyecto residencial.' },
    ],
    tags: ['Ingeniería MEP', 'BT / MT', 'HVAC', 'PCI', 'BMS', 'Tratamiento de agua', 'Spa', 'Commissioning'],
    phases: [
      {
        id: 'engineering', title: 'Ingeniería y preparación', icon: 'engineering',
        summary: 'Revisión de documentación, planos, mediciones y cálculos; coordinación técnica previa a la obra.',
        responsibilities: [
          'Análisis inicial de la documentación técnica del proyecto.',
          'Revisión de planos y documentación de ingeniería.',
          'Revisión de mediciones y cálculos de instalaciones.',
          'Identificación de discrepancias técnicas.',
          'Coordinación previa de instalaciones.',
          'Análisis de posibles interferencias entre disciplinas.',
          'Preparación técnica de los trabajos de ejecución.',
        ],
      },
      {
        id: 'procurement', title: 'Contratación y compras', icon: 'procurement',
        summary: 'Contratación de instalaciones, compras técnicas y coordinación de suministros con la planificación.',
        responsibilities: [
          'Participación en procesos de contratación de instalaciones.',
          'Gestión técnica de compras de equipos y materiales.',
          'Coordinación de necesidades de aprovisionamiento.',
          'Seguimiento de suministros.',
          'Coordinación de compras con la planificación de obra.',
        ],
      },
      {
        id: 'execution', title: 'Ejecución y coordinación', icon: 'execution',
        summary: 'Supervisión a pie de obra, coordinación de disciplinas y resolución de interferencias e incidencias.',
        responsibilities: [
          'Supervisión técnica de instalaciones a pie de obra.',
          'Planificación y coordinación diaria de actividades.',
          'Coordinación de contratistas y disciplinas técnicas.',
          'Resolución de interferencias y problemas de concurrencia entre instalaciones.',
          'Coordinación de recorridos, trazados y espacios técnicos.',
          'Resolución de incidencias durante la ejecución.',
          'Seguimiento del avance de los trabajos.',
        ],
      },
      {
        id: 'commissioning', title: 'Puesta en marcha y entrega', icon: 'commissioning',
        summary: 'Pruebas funcionales, commissioning, seguimiento de incidencias y documentación final de las instalaciones.',
        responsibilities: [
          'Participación en pruebas funcionales de instalaciones.',
          'Coordinación de las actividades de puesta en marcha.',
          'Participación en procesos de commissioning.',
          'Seguimiento de incidencias durante la puesta en servicio.',
          'Revisión y recopilación de documentación técnica final.',
          'Participación en el cierre y entrega de instalaciones.',
        ],
      },
    ],
    disciplines: [
      { id: 'electrical', title: 'Instalaciones eléctricas', icon: 'electrical', systems: ['Baja tensión (BT)', 'Media tensión (MT)'] },
      { id: 'mechanical', title: 'Instalaciones mecánicas y HVAC', icon: 'mechanical', systems: ['Climatización', 'Ventilación', 'Fontanería', 'Saneamiento'] },
      { id: 'fire', title: 'Protección contra incendios', icon: 'fire', systems: ['Sistemas de extinción de incendios', 'Sistemas de detección de incendios'] },
      { id: 'safety', title: 'Seguridad', icon: 'safety', systems: ['Circuito cerrado de televisión (CCTV)', 'Control de accesos'] },
      { id: 'communications', title: 'Comunicaciones y automatización', icon: 'communications', systems: ['Redes de datos', 'Gestión técnica del edificio (BMS)', 'Megafonía'] },
      { id: 'spa-hydraulics', title: 'Instalaciones hidráulicas del spa', icon: 'hydraulic', systems: ['Tratamiento de agua de piscinas', 'Equipos y sistemas de filtración', 'Dosificación de productos químicos', 'Equipos de bombeo', 'Circuitos hidráulicos de recirculación y distribución'] },
      { id: 'spa-environment', title: 'Climatización y control ambiental del spa', icon: 'environmental', systems: ['Climatización del recinto de piscina climatizada', 'Sistemas de deshumidificación', 'Ventilación y acondicionamiento ambiental', 'Integración con las instalaciones generales del edificio'] },
    ],
    highlight: {
      title: 'Sistemas especializados del spa y piscina climatizada',
      description: [
        'Participación en la gestión técnica, coordinación de ejecución y puesta en marcha de las instalaciones específicas del spa, incluyendo sistemas hidráulicos de tratamiento y recirculación de agua, equipos de filtración y dosificación química, así como instalaciones de climatización y deshumidificación del recinto de piscina climatizada.',
        'Estas instalaciones requirieron la coordinación de diferentes disciplinas mecánicas, hidráulicas y de control para su integración con los sistemas generales del complejo hotelero.',
      ],
      groups: [
        { id: 'treatment', title: 'Tratamiento de agua', icon: 'hydraulic', systems: ['Filtración', 'Dosificación química', 'Tratamiento de agua de piscina'] },
        { id: 'hydraulics', title: 'Sistemas hidráulicos', icon: 'auxiliary', systems: ['Equipos de bombeo', 'Circuitos de recirculación', 'Distribución hidráulica'] },
        { id: 'environment', title: 'Control ambiental', icon: 'environmental', systems: ['Climatización de piscina interior', 'Deshumidificación', 'Ventilación'] },
      ],
    },
    competencies: [
      'Ingeniería de instalaciones MEP.', 'Edificación hotelera y residencial de lujo.', 'Revisión de documentación técnica.',
      'Gestión de compras y contrataciones.', 'Planificación de obra.', 'Coordinación multidisciplinar.',
      'Supervisión de ejecución.', 'Instalaciones hidráulicas.', 'Tratamiento de agua de piscinas.',
      'Sistemas de climatización y deshumidificación.', 'Resolución de interferencias.', 'Puesta en marcha y commissioning.', 'Documentación técnica final.',
    ],
    images: [],
    documents: [],
  },
};
