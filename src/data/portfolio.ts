import { evosProjects } from './projects/evos';
import { evosExperience } from './evos-experience';
import { porscheProject } from './projects/porsche-iberica';
import { sonVidaProject } from './projects/hotel-son-vida';
import { interxionProject } from './projects/interxion-mad3';
import { castellanaProject } from './projects/castellana-85';
import { primarkProject } from './projects/primark';
import { caleidoProject } from './projects/torre-caleido';
import { argosProject } from './projects/residencial-argos-i';
import { argosIIProject } from './projects/residencial-argos-ii';
import { almazaraProject } from './projects/la-almazara';
import { rentalProject } from './projects/residencial-rental';
import { coperoProject } from './projects/edar-el-copero';
import { engineeringGroups } from './projects/soluciones-globales';

export type Language = 'es' | 'en';
export type Text = Record<Language, string>;
export const text = (es: string, en: string): Text => ({ es, en });
export const profile = {
  portrait: { src: 'assets/profile/borja-rejano.png', alt: text('Retrato de Borja Rejano, ingeniero eléctrico', 'Portrait of Borja Rejano, electrical engineer'), width: 1122, height: 1402 },
  name: 'Borja Rejano', headerLabel: text('BORJA REJANO - INGENIERO ELÉCTRICO', 'BORJA REJANO - ELECTRICAL ENGINEER'), headerRole: text('INGENIERO ELÉCTRICO', 'ELECTRICAL ENGINEER'), email: 'borjarejanobenitez@gmail.com', linkedin: 'https://www.linkedin.com/in/borjarejano', cv: 'cv-borja-rejano.pdf', cvIsPlaceholder: false, experienceYearsApprox: 10,
  title: text('Ingeniero eléctrico · Trayectoria profesional', 'Electrical engineer · Professional background'),
  summary: text('Soy ingeniero eléctrico con más de 10 años de experiencia en proyectos de los sectores industrial, edificación e infraestructuras hidráulicas. Mi trayectoria profesional combina la ingeniería de detalle, la ejecución de proyectos, la gestión técnica y económica de instalaciones y el mantenimiento industrial, abarcando todas las fases de desarrollo de un proyecto, desde su concepción y diseño hasta su ejecución, puesta en servicio y legalización.', 'I am an electrical engineer with over 10 years of experience in projects across the industrial, building and water infrastructure sectors. My professional background combines detailed engineering, project delivery, technical and financial management of building services and industrial maintenance, covering every stage of project development, from conception and design through to construction, commissioning and legalisation.'),
  about: text('Mi experiencia me permite conectar las necesidades de la propiedad con el trabajo de ingeniería y ejecución. Combino criterio técnico, seguimiento económico y coordinación entre equipos para desarrollar soluciones viables y resolver incidencias durante el proyecto.', 'My experience allows me to connect the owner’s needs with engineering and project delivery. I combine technical judgement, financial monitoring and coordination across teams to develop practical solutions and resolve issues throughout the project.'),
  approach: text('Abordo cada proyecto conectando las decisiones de diseño con las necesidades de obra: documentación clara, coordinación entre disciplinas y seguimiento técnico hasta la puesta en servicio.', 'I connect design decisions with site requirements: clear documentation, coordination across disciplines and technical follow-through to commissioning.'),
};
export const sectors = [
  { id: 'industry', icon: 'factory', title: text('Industria y energía', 'Industry & energy'), description: text('Instalaciones industriales y terminales Oil & Gas. Ingeniería eléctrica y coordinación técnica de instalaciones.', 'Industrial facilities and Oil & Gas terminals. Electrical engineering and technical systems coordination.'), tags: ['Oil & Gas', 'Industria / Industry', 'Energía / Energy'] },
  { id: 'building', icon: 'building', title: text('Edificación y MEP', 'Buildings & MEP'), description: text('Instalaciones eléctricas y MEP en edificación. Integración de disciplinas, documentación y supervisión de obra.', 'Electrical and MEP systems in buildings. Discipline integration, documentation and site supervision.'), tags: ['MEP', 'Electricidad / Electrical', 'Edificación / Buildings'] },
  { id: 'water', icon: 'water', title: text('Agua e infraestructuras', 'Water & infrastructure'), description: text('EDAR, EBAR e infraestructuras hidráulicas. Instalaciones, coordinación de contratistas y puesta en servicio.', 'Wastewater treatment, pumping stations and water infrastructure. Systems, contractor coordination and commissioning.'), tags: ['EDAR / WWTP', 'EBAR / WWPS', 'Agua / Water'] },
] as const;
export type Sector = typeof sectors[number]['id'];
export const interventions = [
  { id: 'tender', title: text('Estudios y licitaciones', 'Studies & tenders'), description: text('Participación en ofertas de instalaciones', 'Participation in systems tenders') },
  { id: 'design', title: text('Diseño', 'Design'), description: text('Ingeniería y documentación técnica', 'Engineering & technical documentation') },
  { id: 'delivery', title: text('Ejecución', 'Delivery'), description: text('Supervisión y puesta en servicio', 'Supervision & commissioning') },
  { id: 'management', title: text('Gestión', 'Management'), description: text('Planificación y coordinación de contratistas', 'Planning & contractor coordination') },
] as const;
export type Intervention = typeof interventions[number]['id'];
export interface ProjectImage {
  fit?: 'cover' | 'contain';
  src: string;
  alt: Text;
  width: number;
  height: number;
  srcSet?: string;
  sizes?: string;
  caption?: string;
}
export interface ProjectPhase {
  id: string;
  title: string;
  summary: string;
  icon: 'engineering' | 'procurement' | 'execution' | 'commissioning' | 'planning' | 'aftercare';
  responsibilities: string[];
}
export interface ProjectDiscipline {
  id: string;
  title: string;
  icon: 'electrical' | 'mechanical' | 'fire' | 'safety' | 'communications' | 'auxiliary' | 'hydraulic' | 'environmental';
  systems: string[];
}
export interface ProjectCaseStudy {
  groupedProjects?: Project[];
  companyLabel?: string;
  technicalSections?: { id: string; title: string; description: string[]; steps?: { title: string; detail: string }[]; note?: string; icon: 'process' | 'water' }[];
  contractor?: string;
  phasesTitle?: string;
  management?: { title: string; description: string[]; pillars: { title: string; items: string[] }[] };
  client?: string;
  features?: { title: string; subtitle?: string; description: string; icon: 'circular' | 'bim' | 'sustainability' | 'building' | 'fire' }[];
  participation?: { title: string; description: string[]; responsibilities: string[]; outcome?: string; cardLabel?: string };
  featuresTitle?: string;
  metrics?: { value: string; label: string }[];
  metricsTitle?: string;
  sources?: { label: string; url: string }[];
  disciplinesTitle?: string;
  company: string;
  location: string;
  role: string;
  period?: string;
  sectorLabel: string;
  typology: string;
  description: string[];
  activities?: { title: string; description: string }[];
  highlight?: { title: string; description: string[]; groups: ProjectDiscipline[] };
  tags: string[];
  phases: ProjectPhase[];
  disciplines: ProjectDiscipline[];
  competencies: string[];
  images: ProjectImage[];
  documents: { label: string; href: string }[];
}
export interface Project {
  featured?: boolean;
  statusLabel?: Text;
  deliveryLabel?: Text;
  coverLabel?: string;
  coverNote?: string;
  coverIcon?: 'control' | 'fire' | 'solar';
  kind?: 'individual' | 'group';
  id: string;
  reference: string;
  sector: Sector;
  interventions: Intervention[];
  title: Text;
  cardTitle?: Text;
  cardSectorLabel?: Text;
  subtitle?: Text;
  summary: Text;
  status: 'placeholder' | 'verified';
  problem?: Text;
  scope?: Text;
  responsibilities?: Text;
  solution?: Text;
  technologies?: Text;
  results?: Text;
  image?: ProjectImage;
  contentLanguage?: Language;
  caseStudy?: ProjectCaseStudy;
  caseStudyEnglish?: ProjectCaseStudy;
}
// Professional projects confirmed by the user.
export const projects: Project[] = [
  porscheProject,
  sonVidaProject,
  interxionProject,
  castellanaProject,
  primarkProject,
  caleidoProject,
  argosProject,
  argosIIProject,
  almazaraProject,
  rentalProject,
  coperoProject,
  ...engineeringGroups,
  ...evosProjects,
];
export interface Experience {
  contextSource?: { label: Text; href: string };
  catalogLink?: { href: string; label: Text };
  scopeIndicator?: { value: string; description: Text };
  ownerManagement?: { title: Text; emphasis: Text; note?: Text; areas: { title: Text; items: Text[] }[] };
  responsibilities?: Text[];
  valueEngineering?: { title: Text; description: Text[]; areas: Text[]; steps: Text[] };
  period: Text;
  role: Text;
  company: Text;
  description: Text;
  placeholder: boolean;
  projectLinks?: { id: string; label: Text; summary: Text }[];
}
export const experience: Experience[] = [
  evosExperience,
  {
    period: text('Noviembre 2023 – Septiembre 2025', 'November 2023 – September 2025'),
    role: text('Ingeniero eléctrico de diseño', 'Electrical design engineer'),
    company: text('Soluciones Globales', 'Soluciones Globales'),
    description: text('Desarrollo de ingeniería eléctrica para infraestructuras hidráulicas: EDAR, estaciones de bombeo y desaladoras. Definición técnica de instalaciones industriales y soluciones de alimentación, distribución y accionamiento eléctrico. Experiencia en BT/MT, centros de transformación, CCM, variadores, arrancadores suaves, cableados y canalizaciones. Elaboración de memorias, anejos de cálculo, esquemas, planos, mediciones y presupuestos, y revisión técnica de documentación de licitación. Responsabilidad centrada en la disciplina eléctrica dentro de proyectos multidisciplinares.', 'Electrical engineering for water infrastructure: wastewater treatment, pumping stations and desalination plants. Technical definition of industrial systems, power supply, distribution and drives. LV/MV systems, transformers, motor control centres, variable frequency drives, soft starters, cables and containment. Reports, calculation appendices, diagrams, drawings, quantity take-offs, budgets and technical review of tender documentation. Responsibility focused on electrical engineering within multidisciplinary projects.'),
    projectLinks: [
      { id: 'edar-el-copero', label: text('Proyecto 01 · Ampliación EDAR El Copero — Sevilla', 'Project 01 · El Copero WWTP extension — Seville'), summary: text('Ingeniería eléctrica de diseño y detalle BT/MT. Cálculos, equipos, planos, pliegos, mediciones y presupuestos.', 'LV/MV electrical design and detailed engineering. Calculations, equipment, drawings, specifications, quantities and budgets.') },
      { id: 'sg-edar', label: text('Proyectos 02 · EDAR — Estaciones depuradoras de aguas residuales', 'Projects 02 · WWTPs — Wastewater treatment plants'), summary: text('Cinco proyectos: diseño eléctrico y revisión técnica de documentación de licitación.', 'Five projects: electrical design and technical review of tender documentation.') },
      { id: 'sg-ebar', label: text('Proyectos 03 · EBAR — Estaciones de bombeo de aguas residuales', 'Projects 03 · Wastewater pumping stations'), summary: text('Diseño eléctrico de la nueva EBARP San José de La Rinconada.', 'Electrical design of the new San José de La Rinconada wastewater pumping station.') },
      { id: 'sg-desalination', label: text('Proyectos 04 · Desaladoras — Instalaciones de desalación', 'Projects 04 · Desalination plants'), summary: text('Ampliaciones de Marbella y Oropesa-Cabanes. Diseño eléctrico y diseño eléctrico integral.', 'Marbella and Oropesa-Cabanes extensions. Electrical design and complete electrical systems design.') },
    ],
    responsibilities: [text('Diseño eléctrico BT/MT: alimentación, distribución, equipos y materiales', 'LV/MV design: supply, distribution, equipment and materials'), text('Cálculos: líneas, protecciones y anejos justificativos', 'Calculations: lines, protection and supporting appendices'), text('Documentación técnica: memorias, requisitos y pliegos', 'Technical documentation: reports, requirements and specifications'), text('Planimetría: planos eléctricos, esquemas y detalles de ejecución', 'Drawings: electrical plans, diagrams and construction details'), text('Mediciones y presupuestos: unidades de obra, precios y valoración', 'Quantity take-offs and budgets: work items, pricing and valuation'), text('Integración multidisciplinar de la ingeniería eléctrica con necesidades electromecánicas e hidráulicas', 'Multidisciplinary integration of electrical engineering with electromechanical and water project needs')],
    placeholder: false,
  },
  {
    period: text('Julio 2020 – Octubre 2023', 'July 2020 – October 2023'),
    role: text('Project Manager de instalaciones', 'Building services project manager'),
    company: text('Areall', 'Areall'),
    description: text('Desempeño de funciones de Project Manager de Instalaciones en proyectos de edificación, formando parte del equipo encargado de la gestión integral de las obras en representación de la propiedad o promotora. Responsabilidad sobre la gestión técnica, económica y administrativa de las instalaciones MEP, manteniendo interlocución directa con el cliente y coordinando a estudios de arquitectura, ingenierías, empresas constructoras, instaladoras y compañías suministradoras. Participación en todo el ciclo del proyecto, incluyendo desarrollo técnico, licitaciones, contratación, control económico, seguimiento de plazos, gestión de incidencias, legalizaciones y postventa. El trabajo incluía la preparación de informes técnicos y económicos para la propiedad, la comunicación de desviaciones y riesgos, y la coordinación de soluciones para garantizar el avance de los proyectos.', 'Building services Project Manager within the team managing construction projects on behalf of the owner or developer. Responsibility for technical, financial and administrative management of MEP systems, with direct client liaison and coordination of architects, engineers, builders, installers and utility companies. Involvement throughout the project lifecycle, including technical development, tendering, procurement, financial control, schedules, issue management, legalisation and aftercare. Preparation of technical and financial reports for the owner, communication of deviations and risks, and coordination of solutions to support project progress.'),
    ownerManagement: {
      note: text('Areall gestionaba el proyecto por encargo de la propiedad; mi responsabilidad se centraba en las instalaciones MEP. Las funciones de proyecto, dirección facultativa y ejecución correspondían a los equipos responsables de cada ámbito.', 'Areall managed the project on behalf of the owner; my responsibility focused on MEP systems. Design, statutory site supervision and construction remained with the teams responsible for each scope.'),
      title: text('Project Management en representación de la propiedad', 'Project Management on behalf of the owner'),
      emphasis: text('Project Management · Representación de la propiedad · Gestión técnico-económica', 'Project Management · Owner representation · Technical and financial management'),
      areas: [
        { title: text('Interlocución con el cliente', 'Client liaison'), items: [text('Comunicación directa con la promotora', 'Direct developer communication'), text('Seguimiento técnico y económico', 'Technical and financial monitoring'), text('Presentación de informes periódicos', 'Periodic reporting'), text('Comunicación de riesgos e incidencias', 'Risk and issue reporting')] },
        { title: text('Gestión técnica y administrativa', 'Technical and administrative management'), items: [text('Coordinación de ingeniería y arquitectura', 'Engineering and architecture coordination'), text('Supervisión técnica del ámbito de instalaciones', 'Technical oversight of building services'), text('Coordinación con contratistas y empresas instaladoras', 'Contractor and installer coordination'), text('Gestión de trámites relacionados con las instalaciones', 'Building services administrative procedures')] },
        { title: text('Control económico y planificación', 'Financial control and planning'), items: [text('Seguimiento presupuestario', 'Budget monitoring'), text('Prevención de desviaciones económicas', 'Prevention of financial deviations'), text('Control de hitos y plazos', 'Milestone and schedule monitoring'), text('Comunicación de posibles desviaciones a la propiedad', 'Reporting potential deviations to the owner')] },
        { title: text('Gestión integral del proyecto', 'Full project lifecycle management'), items: [text('Desarrollo técnico', 'Technical development'), text('Licitación y contratación', 'Tendering and procurement'), text('Ejecución y coordinación', 'Delivery and coordination'), text('Legalización y suministros', 'Legalisation and utility supplies'), text('Postventa', 'Aftercare')] },
      ],
    },
    projectLinks: [
      { id: 'residencial-argos-i', label: text('Proyecto 01 · Residencial Argos I — Sevilla Este', 'Project 01 · Residencial Argos I — East Seville'), summary: text('230 viviendas. Gestión integral técnico-económica de instalaciones, desde el desarrollo técnico hasta la postventa.', '230 homes. Comprehensive technical and financial management of building services, from technical development through to aftercare.') },
      { id: 'residencial-argos-ii', label: text('Proyecto 02 · Residencial Argos II — Sevilla Este', 'Project 02 · Residencial Argos II — East Seville'), summary: text('290 viviendas. Project Management de instalaciones por encargo de la propiedad. BREEAM Very Good.', '290 homes. Building services Project Management on behalf of the owner. BREEAM Very Good.') },
      { id: 'la-almazara', label: text('Proyecto 03 · LA Almazara — Ronda', 'Project 03 · LA Almazara — Ronda'), summary: text('Project Management de instalaciones MEP e integración coordinada de maquinaria industrial. Aprovechamiento del agua para riego.', 'MEP Project Management and coordinated integration of industrial machinery. Water reuse for irrigation.') },
      { id: 'residencial-rental', label: text('Proyecto 04 · Residencial Rental — Sevilla Este', 'Project 04 · Residencial Rental — East Seville'), summary: text('Build to Rent: 413 viviendas y 17 apartamentos turísticos adicionales. Project Management de instalaciones por encargo de la propiedad.', 'Build to Rent: 413 homes and 17 additional tourist apartments. Building services Project Management on behalf of the owner.') },
    ],
    scopeIndicator: { value: '950', description: text('Unidades residenciales y turísticas. Participación como Project Manager responsable de instalaciones MEP en tres promociones de Sevilla Este: 933 viviendas y 17 apartamentos turísticos adicionales.', 'Residential and tourist units. Building services Project Manager in three developments in East Seville: 933 homes and 17 additional tourist apartments.') },
    placeholder: false,
  },
  {
    period: text('Junio 2018 – Junio 2020', 'June 2018 – June 2020'),
    role: text('Técnico de estudios', 'Tendering and estimating technician'),
    company: text('Construcía Instalaciones', 'Construcía Instalaciones'),
    description: text('Participación en el estudio y preparación de licitaciones de instalaciones técnicas para proyectos de edificación e infraestructuras, incluyendo instalaciones eléctricas, mecánicas y sistemas especiales. Análisis técnico de proyectos y participación en procesos de oferta de diferente complejidad, entre ellos centros de procesamiento de datos e infraestructuras críticas.', 'Participation in studies and tender preparation for building and infrastructure systems, including electrical, mechanical and special systems. Technical project analysis and participation in bids of varying complexity, including data centres and critical infrastructure.'),
    projectLinks: [
      { id: 'interxion-mad3', label: text('Proyecto 01 · Interxion MAD3 — Madrid', 'Project 01 · Interxion MAD3 — Madrid'), summary: text('Participación en la licitación de instalaciones MEP. Paquete adjudicado a Construcía Instalaciones.', 'Participation in the MEP systems tender. Package awarded to Construcía Instalaciones.') },
      { id: 'castellana-85', label: text('Proyecto 02 · Castellana 85 — Madrid', 'Project 02 · Castellana 85 — Madrid'), summary: text('Rehabilitación integral de oficinas. Participación en la licitación adjudicada a Construcía Instalaciones.', 'Complete office refurbishment. Participation in the tender awarded to Construcía Instalaciones.') },
      { id: 'primark', label: text('Proyecto 03 · Primark — Diferentes establecimientos', 'Project 03 · Primark — Various stores'), summary: text('Varias licitaciones de instalaciones MEP adjudicadas a Construcía Instalaciones. Ingeniería de valor y proyectos bajo metodología Lean Construction.', 'Several MEP systems tenders awarded to Construcía Instalaciones. Value engineering and projects developed using Lean Construction.') },
      { id: 'torre-caleido', label: text('Proyecto 04 · Torre Caleido — IE University', 'Project 04 · Torre Caleido — IE University'), summary: text('Licitación integral del complejo. Adjudicación a Construcía de las instalaciones de la torre docente.', 'Tender for the entire complex. Educational tower systems awarded to Construcía.') },
    ],
    valueEngineering: {
      title: text('Ingeniería de valor — Value Engineering', 'Value Engineering'),
      description: [
        text('Desarrollo de actividades de ingeniería de valor durante la fase de estudios y licitaciones, mediante el análisis integral de los proyectos de instalaciones y la identificación de oportunidades de optimización técnica y económica.', 'Value engineering during studies and tendering, through comprehensive analysis of systems projects and identification of technical and financial optimisation opportunities.'),
        text('El objetivo consistía en mejorar las soluciones inicialmente proyectadas, estudiando alternativas que permitieran reducir los costes previstos de ejecución y optimizar las prestaciones técnicas, manteniendo los requisitos de funcionalidad, calidad, seguridad y normativa aplicable.', 'The aim was to improve the initial designs by studying alternatives to reduce expected construction costs and optimise technical performance while maintaining functionality, quality, safety and regulatory requirements.'),
      ],
      areas: [text('Revisión técnica de proyectos de instalaciones', 'Technical review of systems projects'), text('Análisis de soluciones de ingeniería', 'Analysis of engineering solutions'), text('Identificación de oportunidades de mejora', 'Identification of improvement opportunities'), text('Estudio de alternativas técnicas', 'Study of technical alternatives'), text('Optimización de costes', 'Cost optimisation'), text('Evaluación técnico-económica de soluciones', 'Technical and financial evaluation'), text('Preparación de propuestas de valor durante la licitación', 'Preparation of value proposals during tendering')],
      steps: [text('Análisis del proyecto', 'Project analysis'), text('Optimización técnica', 'Technical optimisation'), text('Optimización económica', 'Financial optimisation'), text('Propuesta mejorada', 'Improved proposal')],
    },
    placeholder: false,
  },
  {
    period: text('Mayo 2016 – Mayo 2018', 'May 2016 – May 2018'),
    role: text('Ingeniero de instalaciones', 'Building services engineer'),
    company: text('Constructora San José', 'Constructora San José'),
    projectLinks: [
      { id: 'porsche-iberica', label: text('Proyecto 01 · Porsche Ibérica — Madrid', 'Project 01 · Porsche Ibérica — Madrid'), summary: text('Reforma y ampliación de sede corporativa. Instalaciones MEP, sistemas especiales e instalaciones industriales auxiliares.', 'Corporate headquarters refurbishment and extension. MEP, special systems and auxiliary industrial services.') },
      { id: 'hotel-son-vida', label: text('Proyecto 02 · Hotel Son Vida — Mallorca', 'Project 02 · Hotel Son Vida — Mallorca'), summary: text('Reforma y ampliación del hotel, spa y 16 viviendas de lujo. Instalaciones MEP, tratamiento de agua de piscinas y control ambiental.', 'Hotel refurbishment and extension, spa and 16 luxury homes. MEP systems, pool water treatment and environmental control.') },
    ],
    description: text('Gestión de proyectos de instalaciones eléctricas y mecánicas: planificación, coordinación técnica y supervisión de ejecución. Gestión de proveedores y contratación, control económico y seguimiento presupuestario mensual. Implementación de mejoras técnicas para optimizar costes y eficiencia operativa.', 'Management of electrical and mechanical installation projects: planning, technical coordination and delivery supervision. Supplier management and procurement, financial control and monthly budget tracking. Technical improvements to optimise costs and operational efficiency.'),
    placeholder: false,
  },
];
export const skills: { title: Text; items: Text[]; pending?: boolean }[] = [
  { title: text('Ingeniería eléctrica y de detalle', 'Electrical & detailed engineering'), items: [text('Proyectos eléctricos industriales', 'Industrial electrical projects'), text('Memorias, cálculo, planos y pliegos', 'Reports, calculations, drawings & specifications'), text('Mediciones y documentación para licitaciones', 'Quantity take-offs & tender documentation')] },
  { title: text('Instalaciones y activos', 'Systems & assets'), items: [text('Mantenimiento eléctrico e instrumentación', 'Electrical maintenance & instrumentation'), text('Instalaciones MEP, industriales y Oil & Gas', 'MEP, industrial and Oil & Gas facilities'), text('EDAR, EBAR e infraestructuras hidráulicas', 'Wastewater treatment, pumping & water infrastructure'), text('Mejora, modernización y Due Diligence técnica', 'Improvement, modernisation & technical due diligence')] },
  { title: text('Gestión técnico-económica', 'Technical & financial management'), items: [text('Alcance, planificación y proyectos CAPEX/OPEX', 'Scope, planning & CAPEX/OPEX projects'), text('Licitación, contratación y proveedores', 'Tendering, procurement & suppliers'), text('Control de costes, presupuesto y desviaciones', 'Cost, budget & deviation control'), text('Coordinación de contratistas y puesta en servicio', 'Contractor coordination & commissioning')] },
  { title: text('Herramientas', 'Tools'), items: [text('AutoCAD · Dmelect', 'AutoCAD · Dmelect'), text('Presto · Microsoft Project', 'Presto · Microsoft Project'), text('Microsoft Office · GMAO', 'Microsoft Office · CMMS')] },
  { title: text('Trabajo en equipo', 'Teamwork'), items: [text('Liderazgo y coordinación multidisciplinar', 'Leadership & multidisciplinary coordination'), text('Negociación y toma de decisiones', 'Negotiation & decision-making'), text('Adaptabilidad y gestión del tiempo', 'Adaptability & time management')] },
  { title: text('Idiomas', 'Languages'), items: [text('Inglés B1 · PET — University of Cambridge', 'English B1 · PET — University of Cambridge')] },
];
export const education = [
  { title: text('Grado en Ingeniería Eléctrica', 'Degree in Electrical Engineering'), institution: 'Escuela Politécnica Superior de Algeciras' },
  { title: text('Máster en Prevención de Riesgos Laborales', 'Master’s in Occupational Risk Prevention'), institution: 'Universidad del Atlántico Medio' },
  { title: text('CFGS · Instalaciones electrotécnicas', 'Advanced vocational qualification · Electrotechnical installations'), institution: 'I.E.S. Virgen de la Esperanza' },
  { title: text('C.F.G.S. · Desarrollo de Aplicaciones Web', 'Advanced vocational qualification · Web Application Development'), institution: 'MEDAC' },
];
// The CV lists training hours, not a PMP professional certification.
export const training = [
  text('Curso Project Management Professional · 40 horas', 'Project Management Professional course · 40 hours'),
  text('Gestión ágil de proyectos · 16 horas', 'Agile project management · 16 hours'),
  text('Prevención básica en construcción · 60 horas', 'Basic construction risk prevention · 60 hours'),
];






