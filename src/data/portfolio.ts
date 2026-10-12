export type Language = 'es' | 'en';
export type Text = Record<Language, string>;
export const text = (es: string, en: string): Text => ({ es, en });
export const profile = {
  name: 'Borja Rejano', email: 'borjarejanobenitez@gmail.com', linkedin: 'https://www.linkedin.com/in/borjarejano/', cv: 'cv-provisional.txt', cvIsPlaceholder: true, experienceYearsApprox: 10,
  title: text('Ingeniería eléctrica e industrial', 'Electrical & industrial engineering'),
  summary: text('Aproximadamente 10 años de experiencia en diseño, ejecución y gestión de proyectos en industria, edificación e infraestructuras hidráulicas.', 'Approximately 10 years of experience in project design, delivery and management across industry, buildings and water infrastructure.'),
  about: text('Mi experiencia reúne ingeniería eléctrica, instalaciones MEP, EDAR y EBAR, instalaciones industriales y terminales Oil & Gas. He trabajado en coordinación de contratistas, planificación, documentación técnica, supervisión y puesta en servicio.', 'My experience spans electrical engineering, MEP systems, wastewater treatment and pumping stations, industrial facilities and Oil & Gas terminals. My work includes contractor coordination, planning, technical documentation, supervision and commissioning.'),
  approach: text('Abordo cada proyecto conectando las decisiones de diseño con las necesidades de obra: documentación clara, coordinación entre disciplinas y seguimiento técnico hasta la puesta en servicio.', 'I connect design decisions with site requirements: clear documentation, coordination across disciplines and technical follow-through to commissioning.'),
};
export const sectors = [
  { id: 'industry', icon: 'factory', title: text('Industria y energía', 'Industry & energy'), description: text('Instalaciones industriales y terminales Oil & Gas. Ingeniería eléctrica y coordinación técnica de instalaciones.', 'Industrial facilities and Oil & Gas terminals. Electrical engineering and technical systems coordination.'), tags: ['Oil & Gas', 'Industria / Industry', 'Energía / Energy'] },
  { id: 'building', icon: 'building', title: text('Edificación y MEP', 'Buildings & MEP'), description: text('Instalaciones eléctricas y MEP en edificación. Integración de disciplinas, documentación y supervisión de obra.', 'Electrical and MEP systems in buildings. Discipline integration, documentation and site supervision.'), tags: ['MEP', 'Electricidad / Electrical', 'Edificación / Buildings'] },
  { id: 'water', icon: 'water', title: text('Agua e infraestructuras', 'Water & infrastructure'), description: text('EDAR, EBAR e infraestructuras hidráulicas. Instalaciones, coordinación de contratistas y puesta en servicio.', 'Wastewater treatment, pumping stations and water infrastructure. Systems, contractor coordination and commissioning.'), tags: ['EDAR / WWTP', 'EBAR / WWPS', 'Agua / Water'] },
] as const;
export type Sector = typeof sectors[number]['id'];
export const interventions = [
  { id: 'design', title: text('Diseño', 'Design'), description: text('Ingeniería y documentación técnica', 'Engineering & technical documentation') },
  { id: 'delivery', title: text('Ejecución', 'Delivery'), description: text('Supervisión y puesta en servicio', 'Supervision & commissioning') },
  { id: 'management', title: text('Gestión', 'Management'), description: text('Planificación y coordinación de contratistas', 'Planning & contractor coordination') },
] as const;
export type Intervention = typeof interventions[number]['id'];
export interface Project {
  id: string;
  reference: string;
  sector: Sector;
  interventions: Intervention[];
  title: Text;
  summary: Text;
  status: 'placeholder' | 'verified';
  problem: Text;
  scope: Text;
  responsibilities: Text;
  solution: Text;
  technologies: Text;
  results: Text;
  image?: { src: string; alt: Text; width: number; height: number; srcSet?: string; sizes?: string };
}
const pending = text('Pendiente de completar con información verificable y autorizada para su publicación.', 'To be completed with verifiable information cleared for publication.');
// Templates, not claims of completed projects. Replace only with approved real cases.
export const projects: Project[] = [
  { id: 'industrial', reference: 'PRJ—01', sector: 'industry', interventions: ['design', 'management'], title: text('Instalaciones eléctricas industriales', 'Industrial electrical systems'), summary: text('Plantilla para un caso real de industria o energía. El sector y la intervención son categorías de ejemplo.', 'Template for a real industry or energy case. Sector and involvement are example categories.'), status: 'placeholder', problem: pending, scope: pending, responsibilities: pending, solution: pending, technologies: pending, results: pending },
  { id: 'mep', reference: 'PRJ—02', sector: 'building', interventions: ['design', 'delivery'], title: text('Integración de instalaciones MEP', 'MEP systems integration'), summary: text('Plantilla para documentar un proyecto real de edificación y su coordinación de instalaciones.', 'Template for documenting a real building project and its systems coordination.'), status: 'placeholder', problem: pending, scope: pending, responsibilities: pending, solution: pending, technologies: pending, results: pending },
  { id: 'water', reference: 'PRJ—03', sector: 'water', interventions: ['delivery', 'management'], title: text('Infraestructuras hidráulicas · EDAR / EBAR', 'Water infrastructure · WWTP / WWPS'), summary: text('Plantilla para un caso real de tratamiento o bombeo de aguas. Añadir alcance y resultados contrastables.', 'Template for a real water treatment or pumping case. Add verifiable scope and outcomes.'), status: 'placeholder', problem: pending, scope: pending, responsibilities: pending, solution: pending, technologies: pending, results: pending },
];
export const experience = [
  { period: text('Aproximadamente 10 años', 'Approximately 10 years'), role: text('Diseño, ejecución y gestión de proyectos', 'Project design, delivery & management'), company: text('Resumen de trayectoria · empresas y fechas por completar', 'Career overview · companies and dates to be completed'), description: profile.about, placeholder: false },
  { period: text('[Fechas por completar]', '[Dates to complete]'), role: text('[Puesto y empresa por completar]', '[Role and company to complete]'), company: text('Entrada pendiente de completar', 'Entry to be completed'), description: text('Añadir puestos, periodos, responsabilidades y proyectos reales. Esta entrada es una plantilla y no representa un empleo concreto.', 'Add actual roles, periods, responsibilities and projects. This entry is a template and does not represent a specific employment.'), placeholder: true },
];
export const skills = [
  { title: text('Ingeniería eléctrica', 'Electrical engineering'), items: [text('Diseño de instalaciones eléctricas', 'Electrical systems design'), text('Documentación técnica', 'Technical documentation'), text('Supervisión y puesta en servicio', 'Supervision & commissioning')] },
  { title: text('Instalaciones e integración', 'Systems & integration'), items: [text('Instalaciones MEP', 'MEP systems'), text('Instalaciones industriales y Oil & Gas', 'Industrial and Oil & Gas facilities'), text('EDAR, EBAR e infraestructuras hidráulicas', 'Wastewater treatment, pumping & water infrastructure')] },
  { title: text('Gestión de proyectos', 'Project management'), items: [text('Planificación y seguimiento', 'Planning & tracking'), text('Coordinación de contratistas', 'Contractor coordination'), text('Supervisión técnica de ejecución', 'Technical delivery supervision')] },
  { title: text('Herramientas', 'Tools'), items: [text('Software de diseño: por confirmar', 'Design software: to confirm'), text('Cálculo y simulación: por confirmar', 'Calculation & simulation: to confirm'), text('Planificación y gestión: por confirmar', 'Planning & management: to confirm')], pending: true },
];
