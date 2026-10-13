import type { Project, Text } from '../portfolio';
import { argosProject } from './residencial-argos-i';
const spanish = (value: string): Text => ({ es: value, en: value });

// Counts supplied by the professional: 413 homes + 17 additional tourist apartments.
// Exact correspondence with public announcements of 439 units remains unverified.
export const rentalProject: Project = {
  id: 'residencial-rental', reference: 'PROYECTO 04 — AREALL', sector: 'building', interventions: ['management'], contentLanguage: 'es',
  title: spanish('Residencial Rental'), subtitle: spanish('413 viviendas + 17 apartamentos turísticos'),
  summary: spanish('Gestión integral técnica y económica de instalaciones MEP en una promoción Build to Rent de 413 viviendas y 17 apartamentos turísticos, en representación de la propiedad y durante las distintas fases del proyecto.'),
  status: 'verified', deliveryLabel: spanish('Project Management'),
  image: {
    src: 'assets/projects/residencial-rental/infografia.png',
    alt: spanish('Infografía ilustrativa de Residencial Rental con referencias a climatización, instalaciones eléctricas, protección contra incendios, telecomunicaciones, fontanería y saneamiento.'),
    width: 1667,
    height: 943,
    fit: 'contain',
    caption: 'Infografía ilustrativa aportada por Borja Rejano.',
  },
  coverLabel: 'BUILD TO RENT / MEP / BT · MT', coverNote: 'GRÁFICO CONCEPTUAL',
  caseStudy: {
    company: 'Areall', client: 'ASG Homes', location: 'Sevilla Este, Sevilla, España', role: 'Project Manager de Instalaciones',
    sectorLabel: 'Edificación residencial', typology: 'Promoción Build to Rent con apartamentos turísticos adicionales',
    description: [
      'Participación como Project Manager de Instalaciones en Residencial Rental, promoción de 413 viviendas destinadas al alquiler y 17 apartamentos turísticos adicionales, situada en Sevilla Este.',
      'El proyecto se desarrolló bajo el modelo Build to Rent (BTR), orientado a la explotación de un complejo residencial destinado al mercado de alquiler.',
      'Responsabilidad sobre la gestión integral técnica, económica y administrativa de las instalaciones MEP, actuando desde el equipo de Project Management de Areall en representación de la propiedad.',
      'La participación comprendió las diferentes fases de desarrollo del proyecto, desde la coordinación inicial con arquitectura e ingeniería y los procesos de licitación y contratación hasta el seguimiento económico, control de plazos, coordinación de ejecución, legalizaciones, puesta en servicio y gestión de incidencias durante la postventa.',
      'El proyecto integró instalaciones eléctricas de baja y media tensión, climatización, ventilación, protección contra incendios, fontanería, saneamiento y telecomunicaciones.',
    ],
    tags: ['Project Management', 'Ingeniería MEP', 'Build to Rent', 'Gestión técnico-económica', 'Edificación residencial', 'BT / MT', 'HVAC', 'PCI'],
    metricsTitle: 'Magnitud del proyecto · Información aportada por el profesional',
    metrics: [{ value: '413', label: 'Viviendas de alquiler' }, { value: '17', label: 'Apartamentos turísticos adicionales' }, { value: '430', label: 'Unidades totales del proyecto' }],
    phasesTitle: 'Seis fases del ciclo de gestión del proyecto',
    phases: [
      { id: 'development', title: 'Desarrollo técnico', summary: 'Ingeniería y arquitectura', icon: 'engineering', responsibilities: ['Coordinación con estudios de arquitectura e ingenierías.', 'Participación en el desarrollo técnico de las instalaciones.', 'Revisión de documentación y soluciones de ingeniería.', 'Coordinación multidisciplinar.', 'Identificación de cuestiones técnicas durante la definición del proyecto.'] },
      { id: 'procurement', title: 'Licitación y contratación', summary: 'Selección y contratación de empresas', icon: 'procurement', responsibilities: ['Participación en procesos de licitación.', 'Revisión de ofertas técnicas.', 'Coordinación de la contratación de empresas.', 'Participación en los procesos de adjudicación.', 'Seguimiento de los alcances de instalaciones contratados.'] },
      { id: 'control', title: 'Gestión técnica y económica', summary: 'Control presupuestario', icon: 'execution', responsibilities: ['Seguimiento técnico de las instalaciones.', 'Control económico de los trabajos.', 'Seguimiento de presupuestos y costes.', 'Identificación y prevención de desviaciones económicas.', 'Coordinación de soluciones técnicas durante la ejecución.', 'Elaboración de informes técnicos y económicos para la propiedad.'] },
      { id: 'planning', title: 'Planificación y coordinación', summary: 'Seguimiento de plazos', icon: 'planning', responsibilities: ['Seguimiento de los hitos de ejecución.', 'Coordinación entre empresas contratistas e ingenierías.', 'Identificación de incidencias que afectasen a los plazos.', 'Interlocución entre los agentes participantes.', 'Coordinación de soluciones para evitar retrasos.', 'Comunicación de riesgos y desviaciones a la propiedad.'] },
      { id: 'utilities', title: 'Legalizaciones y suministros', summary: 'Puesta en servicio', icon: 'commissioning', responsibilities: ['Coordinación de procedimientos de legalización.', 'Seguimiento de documentación técnica y administrativa.', 'Interlocución con compañías distribuidoras.', 'Gestión de las actuaciones necesarias para disponer de suministros.', 'Seguimiento de la puesta en servicio de instalaciones.'] },
      { id: 'aftercare', title: 'Postventa', summary: 'Repasos e incidencias', icon: 'aftercare', responsibilities: ['Seguimiento de defectos detectados tras la entrega.', 'Coordinación de repasos de instalaciones.', 'Interlocución con empresas contratistas.', 'Seguimiento de las actuaciones correctivas.', 'Gestión de incidencias durante la postventa.'] },
    ],
    disciplinesTitle: 'Disciplinas técnicas gestionadas', disciplines: argosProject.caseStudy!.disciplines,
    management: {
      title: 'Project Management en representación de la propiedad',
      description: ['Gestión técnica, económica y administrativa del ámbito MEP con interlocución directa con la promotora, informes de seguimiento y comunicación de riesgos y desviaciones. Coordinación de arquitectura, ingeniería, constructoras, instaladoras y compañías distribuidoras. El modelo general se desarrolla en la experiencia de Areall.'],
      pillars: [
        { title: 'Interlocución con la propiedad', items: ['Comunicación directa', 'Informes de seguimiento', 'Comunicación de desviaciones', 'Gestión de incidencias'] },
        { title: 'Gestión técnica', items: ['Coordinación de ingeniería', 'Revisión de soluciones', 'Seguimiento de ejecución', 'Coordinación multidisciplinar'] },
        { title: 'Gestión económica', items: ['Control presupuestario', 'Seguimiento de costes', 'Prevención de desviaciones'] },
        { title: 'Gestión administrativa', items: ['Licitaciones', 'Contratación', 'Legalizaciones', 'Suministros', 'Postventa'] },
      ],
    },
    featuresTitle: 'Build to Rent — Edificación residencial para alquiler',
    features: [
      { title: 'Modelo Build to Rent', icon: 'building', description: 'Promoción concebida para su explotación en régimen de alquiler, integrando necesidades de las viviendas, instalaciones generales y servicios comunes del complejo.' },
      { title: 'Coordinación de usos e instalaciones', icon: 'bim', description: 'Unidades residenciales y apartamentos turísticos adicionales, con necesidades de coordinación MEP y un enfoque en funcionalidad y operación del edificio. Mi responsabilidad se centraba en las instalaciones durante el desarrollo del proyecto.' },
    ],
    competencies: argosProject.caseStudy!.competencies,
    images: [], documents: [],
  },
};
