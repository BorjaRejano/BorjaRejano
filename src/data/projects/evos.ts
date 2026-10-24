import { evosRole, evosSummary, evosIntroduction, evosFunctions, evosTags } from '../evos-content';
import type { Project, ProjectCaseStudy, Text } from '../portfolio';
const t = (es: string, en: string): Text => ({ es, en });
const records = [
  {
    id: 'evos-ccr', title: t('Modernización Sala CCR', 'CCR control room modernisation'),
    subtitle: t('Control industrial y continuidad operativa', 'Industrial control and operational continuity'),
    summary: t('Reforma y modernización de la sala de control principal: renovación del sistema de visualización, reorganización de equipos y adaptación de instalaciones eléctricas y comunicaciones. Planificación y coordinación de trabajos sobre instalaciones existentes.', 'Main control room refurbishment and modernisation: renewal of the display system, equipment rearrangement and adaptation of electrical and communications systems. Planning and coordination of work on existing systems.'),
    typology: t('Reforma de instalaciones existentes', 'Existing systems refurbishment'),
    tags: [t('Sala CCR', 'CCR room'), t('Videowall', 'Video wall'), t('Electricidad', 'Electrical systems'), t('Comunicaciones', 'Communications'), t('Continuidad operativa', 'Operational continuity')],
    disciplines: [
      { id: 'display', icon: 'communications' as const, title: t('Sistema de visualización', 'Display system'), systems: [t('Sustitución del sistema existente por un nuevo videowall', 'Replacement of the existing system with a new video wall'), t('Adaptación de conexiones y equipos asociados', 'Adaptation of connections and associated equipment')] },
      { id: 'electrical', icon: 'electrical' as const, title: t('Electricidad y comunicaciones', 'Electrical systems and communications'), systems: [t('Adecuación de alimentación, cableado y comunicaciones', 'Adaptation of power supply, wiring and communications'), t('Reorganización, instalación y conexionado de equipos', 'Equipment rearrangement, installation and connection')] },
      { id: 'room', icon: 'auxiliary' as const, title: t('Adecuación y coordinación', 'Adaptation and coordination'), systems: [t('Distribución de equipamiento y mesas de operación', 'Equipment layout and operator desks'), t('Coordinación con obra civil y elementos de seguridad afectados', 'Coordination with civil works and affected safety elements'), t('Planificación, contratistas y trabajos en paralelo', 'Planning, contractors and concurrent work')] },
    ],
    sectionTitle: t('Intervención en una sala de control en operación', 'Work in an operational control room'),
    sectionDescription: t('La planificación requirió coordinar las modificaciones con las necesidades operativas de la terminal, estableciendo medidas preventivas y alternativas de funcionamiento para minimizar el riesgo de interrupciones durante los trabajos.', 'Planning required coordination of modifications with terminal operating needs, establishing preventive measures and operational alternatives to minimise interruption risks during the work.'),
    responsibilities: [t('Coordinación con Operaciones y planificación por fases', 'Operations coordination and phased planning'), t('Identificación de interferencias y seguimiento de contratistas', 'Interference identification and contractor monitoring'), t('Comprobaciones previas y preparación de medidas de contingencia', 'Preliminary checks and contingency preparation'), t('Verificaciones antes de finalizar la intervención', 'Verification before completing the intervention')],
  },
  {
    id: 'evos-co2', title: t('Extinción CO₂', 'CO₂ fire suppression'),
    subtitle: t('Protección contra incendios en sala eléctrica', 'Fire protection in an electrical room'),
    summary: t('Participación en la implantación de un sistema de extinción mediante dióxido de carbono (CO₂) para una sala eléctrica industrial, coordinando su instalación e integración en las condiciones operativas y de seguridad de la terminal.', 'Participation in the implementation of a carbon dioxide (CO₂) fire suppression system for an industrial electrical room, coordinating installation and integration with terminal operating and safety conditions.'),
    typology: t('Mejora de seguridad industrial', 'Industrial safety improvement'),
    tags: [t('CO₂', 'CO₂'), t('Protección contra incendios', 'Fire protection'), t('Sala eléctrica', 'Electrical room'), t('Coordinación técnica', 'Technical coordination')],
    disciplines: [{ id: 'fire', icon: 'fire' as const, title: t('Protección contra incendios', 'Fire protection'), systems: [t('Extinción mediante agente gaseoso CO₂', 'CO₂ gaseous fire suppression'), t('Protección de una sala eléctrica existente', 'Protection of an existing electrical room'), t('Coordinación de instalación e integración', 'Installation and integration coordination')] }],
    sectionTitle: t('Coordinación y seguridad industrial', 'Coordination and industrial safety'),
    sectionDescription: t('Actuación sobre instalaciones existentes, abordada desde la coordinación técnica y la seguridad industrial. La participación descrita no implica autoría del cálculo o diseño completo del sistema.', 'Work on existing systems, addressed through technical coordination and industrial safety. The described involvement does not imply authorship of complete system calculations or design.'),
    responsibilities: [t('Coordinación de los trabajos de implantación', 'Coordination of implementation work'), t('Integración con las condiciones operativas y de seguridad de la terminal', 'Integration with terminal operating and safety conditions')],
  },
  {
    id: 'evos-photovoltaic', title: t('Instalación Fotovoltaica', 'Solar photovoltaic installation'),
    subtitle: t('Integración de generación renovable', 'Renewable generation integration'),
    summary: t('Participación en el desarrollo de una instalación solar fotovoltaica en un área de la terminal. Coordinación de la solución técnica y su integración con las instalaciones eléctricas existentes, atendiendo a las condiciones del entorno industrial.', 'Participation in the development of a solar photovoltaic installation in an area of the terminal. Coordination of the technical solution and integration with existing electrical systems, considering industrial operating conditions.'),
    typology: t('Generación renovable en instalación industrial existente', 'Renewable generation in an existing industrial facility'),
    tags: [t('Energía fotovoltaica', 'Solar photovoltaics'), t('Electricidad industrial', 'Industrial electrical systems'), t('Ingeniería de proyectos', 'Project engineering'), t('Coordinación', 'Coordination')],
    disciplines: [{ id: 'solar', icon: 'electrical' as const, title: t('Integración eléctrica', 'Electrical integration'), systems: [t('Definición y seguimiento de necesidades técnicas', 'Definition and monitoring of technical needs'), t('Integración de generación renovable en la terminal', 'Integration of renewable generation in the terminal')] }],
    sectionTitle: t('Desarrollo y coordinación del proyecto', 'Project development and coordination'),
    sectionDescription: t('Proyecto en curso. La planificación y coordinación de trabajos se desarrolla conforme avanza la actuación; no se presenta como instalación finalizada o puesta en servicio.', 'Project in progress. Work planning and coordination develops as the project advances; it is not presented as completed or commissioned.'),
    responsibilities: [t('Desarrollo y coordinación del proyecto', 'Project development and coordination'), t('Definición y seguimiento de necesidades técnicas', 'Definition and monitoring of technical needs'), t('Planificación e integración según avance del proyecto', 'Planning and integration as the project progresses')],
  },
];

const makeCase = (lang: 'es' | 'en'): ProjectCaseStudy => ({
  company: 'EVOS Algeciras', companyLabel: lang === 'es' ? 'Entorno profesional' : 'Professional setting',
  location: 'Algeciras, Cádiz', role: evosRole[lang],
  sectorLabel: 'Oil & Gas', typology: lang === 'es' ? 'Mantenimiento industrial, mejoras y pequeños proyectos' : 'Industrial maintenance, improvements and small projects',
  description: evosIntroduction.map(p => p[lang]), tags: evosTags.slice(0, 6).map(tag => tag[lang]),
  phases: [],
  disciplinesTitle: lang === 'es' ? 'Funciones de mantenimiento y coordinación' : 'Maintenance and coordination responsibilities',
  disciplines: evosFunctions.map((area, index) => ({ id: `evos-function-${index}`, title: area.title[lang], icon: index === 0 ? 'auxiliary' : index === 1 ? 'communications' : 'electrical', systems: area.items.map(item => item[lang]) })),
  technicalSections: [{
    id: 'work-examples', title: lang === 'es' ? 'Ejemplos de actuaciones de mantenimiento y mejora' : 'Examples of maintenance and improvement work', icon: 'process',
    description: [lang === 'es' ? 'Actuaciones concretas dentro de una actividad más amplia de mantenimiento y mejora de planta.' : 'Specific interventions within a broader role in plant maintenance and improvement.'],
    steps: [...records.map((r, index) => ({ title: r.title[lang], detail: `${r.summary[lang]} ${index === 2 ? (lang === 'es' ? 'En desarrollo.' : 'In development.') : (lang === 'es' ? 'Actuación realizada.' : 'Completed intervention.')}` })), { title: lang === 'es' ? 'Deficiencias detectadas en inspecciones' : 'Inspection findings', detail: lang === 'es' ? 'Análisis técnico, definición de medidas correctivas y seguimiento de trabajos para su subsanación.' : 'Technical analysis, definition of corrective measures and monitoring of corrective work.' }],
  }],
  competencies: evosTags.slice(3).map(tag => tag[lang]), images: [], documents: [],
});
export const evosProjects: Project[] = [{
  id: 'evos-project-management', reference: 'PROYECTOS — EVOS ALGECIRAS', sector: 'industry', interventions: ['design', 'delivery', 'management'],
  title: t('EVOS Algeciras · Mantenimiento industrial en Oil & Gas', 'EVOS Algeciras · Industrial maintenance in Oil & Gas'),
  subtitle: t('Mantenimiento de instalaciones y equipos · Mejoras y pequeños proyectos', 'Systems and equipment maintenance · Improvements and small projects'),
  summary: evosSummary, status: 'verified', deliveryLabel: t('Mantenimiento industrial y mejora de instalaciones', 'Industrial maintenance and facility improvements'),
  image: { src: 'assets/projects/evos/infografia.png', alt: t('Infografía ilustrativa de una terminal marítima Oil & Gas con almacenamiento y sistemas eléctricos, de instrumentación y seguridad. Representación conceptual.', 'Illustrative infographic of an Oil & Gas marine terminal with storage, electrical, instrumentation and safety systems. Conceptual representation.'), width: 1667, height: 943, fit: 'contain' },
  coverLabel: 'OIL & GAS / MAINTENANCE', coverNote: '',
  caseStudy: makeCase('es'), caseStudyEnglish: makeCase('en'),
}];



