import type { Project, Text } from '../portfolio';
const spanish = (value: string): Text => ({ es: value, en: value });

export const almazaraProject: Project = {
  id: 'la-almazara', reference: 'PROYECTO 03 — AREALL', featured: true,
  sector: 'industry', interventions: ['management'], contentLanguage: 'es',
  title: spanish('LA Almazara'), subtitle: spanish('Museo y centro de producción de aceite de oliva — Ronda'),
  summary: spanish('Gestión técnico-económica y coordinación de instalaciones MEP y maquinaria industrial en un edificio singular que integra museo, restauración y producción de aceite de oliva, con sistemas de reutilización de agua para riego.'),
  status: 'verified', deliveryLabel: spanish('Project Management'),
  image: {
    src: 'assets/projects/la-almazara/infografia.png',
    alt: spanish('Infografía ilustrativa de LA Almazara en Ronda, con referencias a instalaciones MEP y al proceso productivo del aceite de oliva.'),
    width: 1667,
    height: 943,
    fit: 'contain',
    caption: 'Infografía ilustrativa aportada por Borja Rejano.',
  },
  coverLabel: 'MUSEO / INDUSTRIA / MEP / AGUA', coverNote: 'GRÁFICO CONCEPTUAL',
  caseStudy: {
    company: 'Areall', location: 'Ronda, Málaga, España', role: 'Project Manager de Instalaciones',
    sectorLabel: 'Edificación singular, industria agroalimentaria, cultura y gastronomía',
    typology: 'Museo, espacio gastronómico y planta industrial de producción de aceite',
    description: [
      'Participación como Project Manager de Instalaciones en el desarrollo de LA Almazara, un edificio singular ubicado en Ronda que integra un museo dedicado a la cultura del aceite de oliva, espacios gastronómicos y una planta industrial de producción de aceite de oliva virgen extra.',
      'Responsabilidad sobre la gestión técnica, económica y administrativa de las instalaciones del proyecto, actuando dentro del equipo de Project Management de Areall en representación de la propiedad.',
      'El trabajo comprendió la coordinación de instalaciones eléctricas, mecánicas, hidráulicas y sistemas especiales, así como la integración de la maquinaria industrial destinada al proceso de producción de aceite.',
      'La gestión de los equipos de proceso se realizó conjuntamente con la ingeniería, la propiedad y la empresa instaladora, coordinando las necesidades técnicas de la maquinaria con las instalaciones generales del edificio.',
      'El proyecto incorporó también sistemas de captación y reutilización de agua para riego, instalaciones de energía solar y soluciones de recuperación energética, dentro de un planteamiento de aprovechamiento eficiente de recursos.',
      'La singularidad de la actuación residió en integrar un proceso productivo industrial real dentro de un edificio cultural abierto al público, con necesidades técnicas, funcionales y de seguridad diferenciadas.',
    ],
    tags: ['Project Management', 'Ingeniería MEP', 'Industria agroalimentaria', 'Instalaciones industriales', 'Proceso de aceite', 'Gestión del agua', 'Eficiencia energética', 'Arquitectura singular'],
    activities: [
      { title: 'Zona superior · Cultural y gastronómica', description: 'Museo del aceite, espacios expositivos y culturales, degustación, restauración gastronómica de alta gama y áreas para visitantes.' },
      { title: 'Zona inferior · Proceso industrial', description: 'Recepción y transporte de aceitunas, elaboración de aceite, sistemas hidráulicos y equipos auxiliares, con instalaciones eléctricas y mecánicas de proceso.' },
    ],
    phases: [],
    management: {
      title: 'Project Management de instalaciones por encargo de la propiedad',
      description: ['Responsabilidad específica sobre instalaciones MEP dentro del equipo de gestión de Areall. Coordinación conjunta de maquinaria con propiedad, ingeniería y empresa instaladora, diferenciada de las funciones de diseño y ejecución de cada equipo.'],
      pillars: [
        { title: 'Desarrollo técnico', items: ['Coordinación con arquitectura e ingeniería', 'Participación en el desarrollo de instalaciones', 'Coordinación de soluciones entre disciplinas'] },
        { title: 'Gestión económica y contractual', items: ['Seguimiento económico del ámbito de instalaciones', 'Coordinación de contratación y empresas', 'Detección y comunicación de desviaciones'] },
        { title: 'Coordinación de ejecución', items: ['Seguimiento técnico de instalaciones', 'Coordinación entre ingenierías, propiedad e instaladoras', 'Resolución conjunta de incidencias', 'Seguimiento de hitos y plazos'] },
        { title: 'Integración industrial', items: ['Coordinación de maquinaria de producción', 'Integración de necesidades de equipos con instalaciones MEP', 'Interlocución con propiedad, ingeniería e instaladora'] },
        { title: 'Gestión administrativa y cierre', items: ['Seguimiento de trámites asociados a las instalaciones', 'Coordinación de documentación y necesidades de puesta en servicio'] },
      ],
    },
    disciplinesTitle: 'Disciplinas técnicas gestionadas',
    disciplines: [
      { id: 'electrical', title: 'Instalaciones eléctricas', icon: 'electrical', systems: ['Baja tensión', 'Distribución eléctrica del edificio', 'Alimentación de equipos industriales', 'Alumbrado', 'Servicios eléctricos auxiliares'] },
      { id: 'mechanical', title: 'Climatización y ventilación', icon: 'mechanical', systems: ['Climatización', 'Ventilación de espacios museísticos', 'Ventilación de zonas gastronómicas', 'Ventilación de espacios técnicos e industriales', 'Recuperación energética del aire'] },
      { id: 'hydraulic', title: 'Instalaciones hidráulicas', icon: 'hydraulic', systems: ['Fontanería', 'Saneamiento', 'Redes de agua de servicio', 'Sistemas hidráulicos asociados a la actividad industrial', 'Captación y aprovechamiento de agua'] },
      { id: 'safety', title: 'Protección y seguridad', icon: 'fire', systems: ['Protección contra incendios', 'Detección y alarma', 'Sistemas de extinción', 'Seguridad del edificio'] },
      { id: 'communications', title: 'Comunicaciones y sistemas especiales', icon: 'communications', systems: ['Infraestructuras de comunicaciones', 'Sistemas asociados al uso museístico', 'Integración técnica de espacios culturales y gastronómicos'] },
      { id: 'energy', title: 'Energía y eficiencia', icon: 'environmental', systems: ['Instalaciones solares', 'Recuperación energética del aire', 'Aprovechamiento eficiente del agua'] },
    ],
    technicalSections: [
      { id: 'olive-route', title: 'Integración del transporte de aceitunas en el museo', icon: 'process', description: ['El sistema de conducción lleva las aceitunas desde la finca, atraviesa el espacio museístico y alcanza una tolva central que comunica con la zona inferior de producción.'], steps: [{ title: 'Finca', detail: 'Origen de las aceitunas' }, { title: 'Recorrido museístico', detail: 'Conducción integrada en el espacio cultural' }, { title: 'Tolva central', detail: 'Entrada a la zona productiva' }, { title: 'Zona inferior', detail: 'Proceso de elaboración de aceite' }], note: 'Esquema conceptual, sin dimensiones ni capacidades de transporte.' },
      { id: 'industrial-process', title: 'Integración de instalaciones y maquinaria de proceso industrial', icon: 'process', description: ['Gestión técnica y coordinación de maquinaria de elaboración de aceite de oliva virgen extra, conjuntamente con ingeniería, propiedad y empresa instaladora.', 'Coordinación de las necesidades técnicas de los equipos y su integración con las instalaciones generales, combinando actividad industrial y espacios abiertos al público.'], steps: [{ title: 'Recepción y transporte', detail: 'Conducción, tolva y entrada de materia prima' }, { title: 'Preparación y molturación', detail: 'Preparación, molienda y obtención de pasta' }, { title: 'Batido y extracción', detail: 'Batido, extracción y separación de aceite' }, { title: 'Almacenamiento', detail: 'Conservación del aceite' }, { title: 'Servicios auxiliares', detail: 'Alimentación eléctrica, redes hidráulicas e instalaciones mecánicas de servicio' }], note: 'Etapas funcionales del proceso, no inventario definitivo de maquinaria. No se especifican marcas, equipos, capacidades ni sistemas de control no documentados.' },
      { id: 'water', title: 'Gestión sostenible del agua', icon: 'water', description: ['Instalaciones de captación y reutilización de agua para el riego de la finca, integradas en la estrategia ambiental del conjunto.'], steps: [{ title: 'Captación de agua', detail: 'Aprovechamiento del recurso hídrico' }, { title: 'Aprovechamiento y tratamiento', detail: 'Según el sistema instalado; detalle pendiente de confirmar' }, { title: 'Almacenamiento y distribución', detail: 'Esquema funcional de aprovechamiento' }, { title: 'Riego de la finca', detail: 'Destino del agua recuperada' }], note: 'Esquema conceptual. No identifica el origen completo del agua ni confirma una EDAR, tratamiento específico o reutilización directa de aguas del proceso oleícola.' },
    ],
    featuresTitle: 'Arquitectura, industria y sostenibilidad',
    features: [
      { title: 'Arquitectura singular', icon: 'building', description: 'Diseño de Philippe Starck en colaboración con Touza Arquitectos. Inauguración publicada en 2024, distinta del periodo de participación personal.' },
      { title: 'Edificio de usos mixtos', icon: 'building', description: 'Integración de actividad cultural, gastronomía y producción industrial.' },
      { title: 'Proceso productivo integrado', icon: 'bim', description: 'Transporte de aceitunas a través del recorrido museístico hacia la zona inferior de producción.' },
      { title: 'Gestión del agua', icon: 'circular', description: 'Aprovechamiento y reutilización de agua para riego.' },
      { title: 'Eficiencia energética', icon: 'sustainability', description: 'Instalaciones solares y recuperación energética del aire documentadas en el planteamiento del proyecto.' },
    ],
    competencies: ['Gestión de instalaciones MEP en edificación singular e industria', 'Integración coordinada de maquinaria de proceso', 'Gestión técnico-económica e interlocución con la propiedad', 'Coordinación de necesidades hidráulicas y energéticas'],
    images: [], documents: [],
  },
};
