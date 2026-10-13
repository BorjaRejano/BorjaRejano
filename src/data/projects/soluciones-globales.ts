import type { Project, Text } from '../portfolio';
const spanish = (value: string): Text => ({ es: value, en: value });
export type Infrastructure = 'edar' | 'ebar' | 'desalination';
export type EngineeringProject = Project & { infrastructure: Infrastructure; involvement: 'design' | 'integral' | 'review' };

const records: { code: string; id: string; name: string; location: string; type: Infrastructure; typology: string; involvement: EngineeringProject['involvement']; description: string; responsibility: string; scope: string; client?: string }[] = [
  { code: 'SG-01', id: 'edar-fuente-palmera', name: 'EDAR Fuente Palmera', location: 'Fuente Palmera, Córdoba', type: 'edar', typology: 'Estación depuradora y agrupación de vertidos', involvement: 'design', description: 'Participación en el desarrollo de la ingeniería eléctrica asociada al proyecto de agrupación de vertidos y depuración de aguas residuales de Fuente Palmera, dentro de la fase de diseño y definición técnica de las instalaciones.', responsibility: 'Diseño eléctrico del proyecto.', scope: 'Ingeniería eléctrica asociada a la agrupación de vertidos y depuración. Soluciones Globales participó en una licitación de servicios de ingeniería vinculada a la actuación; no se presenta como una obra adjudicada o ejecutada personalmente.' },
  { code: 'SG-02', id: 'ebarp-san-jose-rinconada', name: 'Nueva EBARP San José de La Rinconada', location: 'San José de La Rinconada, Sevilla', type: 'ebar', typology: 'Estación de bombeo de aguas residuales', involvement: 'design', client: 'EMASESA', description: 'Desarrollo de ingeniería eléctrica para el proyecto de una nueva estación de bombeo de aguas residuales, participando en la definición técnica de las instalaciones eléctricas necesarias para la infraestructura.', responsibility: 'Diseño eléctrico de la estación de bombeo.', scope: 'Definición técnica de las instalaciones eléctricas necesarias para la nueva estación de bombeo.' },
  { code: 'SG-03', id: 'edar-la-golondrina', name: 'EDAR La Golondrina', location: 'Córdoba', type: 'edar', typology: 'Estación depuradora de aguas residuales', involvement: 'design', description: 'Participación en el desarrollo de la ingeniería eléctrica correspondiente a una actuación en la EDAR La Golondrina, dentro de la definición técnica de las instalaciones asociadas al proyecto.', responsibility: 'Diseño eléctrico del alcance asignado.', scope: 'Definición técnica de las instalaciones eléctricas del alcance asignado.' },
  { code: 'SG-04', id: 'edar-villaperez', name: 'Ampliación EDAR Villapérez', location: 'Asturias', type: 'edar', typology: 'Ampliación de estación depuradora de aguas residuales', involvement: 'design', description: 'Participación en el diseño de las instalaciones eléctricas asociadas al proyecto de ampliación de la EDAR Villapérez, dentro del desarrollo de ingeniería de una infraestructura de depuración.', responsibility: 'Diseño eléctrico del proyecto de ampliación.', scope: 'Instalaciones eléctricas asociadas a la actuación de ampliación de la EDAR.' },
  { code: 'SG-05', id: 'edar-cerro-aguila', name: 'Ampliación EDAR Cerro del Águila', location: 'Málaga', type: 'edar', typology: 'Ampliación de estación depuradora de aguas residuales', involvement: 'design', description: 'Desarrollo de ingeniería eléctrica para el proyecto de ampliación de la EDAR Cerro del Águila, participando en la definición técnica de las instalaciones eléctricas correspondientes a la actuación.', responsibility: 'Diseño eléctrico.', scope: 'Definición técnica de las instalaciones eléctricas de la ampliación.' },
  { code: 'SG-06', id: 'desaladora-marbella', name: 'Ampliación de la desaladora de Marbella', location: 'Marbella, Málaga', type: 'desalination', typology: 'Ampliación de instalación de desalación', involvement: 'design', description: 'Participación en el desarrollo de ingeniería eléctrica para una actuación de ampliación de la desaladora de Marbella, infraestructura destinada a la producción de agua desalada para abastecimiento.', responsibility: 'Diseño eléctrico de las instalaciones comprendidas en el proyecto.', scope: 'Instalaciones eléctricas comprendidas en el proyecto de ampliación de la desaladora.' },
  { code: 'SG-07', id: 'edar-huelva', name: 'EDAR de Huelva', location: 'Huelva', type: 'edar', typology: 'Estación depuradora de aguas residuales', involvement: 'review', description: 'Participación en la revisión técnica de la documentación de un proyecto de licitación relacionado con la adecuación o ampliación de la infraestructura de depuración de Huelva.', responsibility: 'Revisión técnica del proyecto de licitación.', scope: 'Análisis y revisión técnica de la documentación de licitación.' },
  { code: 'SG-08', id: 'desaladora-oropesa-cabanes', name: 'Ampliación de la desaladora de Oropesa-Cabanes', location: 'Oropesa del Mar / Cabanes, Castellón', type: 'desalination', typology: 'Ampliación de instalación de desalación', involvement: 'integral', description: 'Desarrollo del diseño completo de las instalaciones eléctricas correspondientes al proyecto de ampliación de la desaladora de Oropesa-Cabanes, infraestructura destinada a la producción de agua desalada para abastecimiento.', responsibility: 'Diseño integral de las instalaciones eléctricas del proyecto, incluyendo su definición técnica y documentación de ingeniería.', scope: 'Responsabilidad integral sobre la disciplina eléctrica: definición técnica y documentación de ingeniería de las instalaciones de la ampliación.' },
];

export const engineeringProjects: EngineeringProject[] = records.map(record => {
  const label = record.involvement === 'review' ? 'Revisión técnica de proyecto de licitación' : record.involvement === 'integral' ? 'Diseño eléctrico integral' : 'Diseño eléctrico';
  return {
    id: record.id, reference: `${record.code} — SOLUCIONES GLOBALES`, sector: 'water', infrastructure: record.type, involvement: record.involvement,
    interventions: record.involvement === 'review' ? ['tender'] : ['design'], contentLanguage: 'es',
    title: spanish(record.name), subtitle: spanish(`${record.location} · ${label}`), summary: spanish(record.description),
    status: 'verified', deliveryLabel: spanish(label), coverLabel: `${record.type === 'desalination' ? 'DESALACIÓN' : record.type.toUpperCase()} / ${label.toUpperCase()}`, coverNote: 'ILUSTRACIÓN CONCEPTUAL',
    caseStudy: {
      company: 'Soluciones Globales', companyLabel: 'Empresa de ingeniería', client: record.client,
      role: 'Ingeniero eléctrico de diseño', location: record.location, sectorLabel: 'Infraestructuras hidráulicas', typology: record.typology,
      description: [record.description], tags: [record.type === 'desalination' ? 'Desalación' : record.type.toUpperCase(), label],
      phases: [], disciplines: [], competencies: [], images: [], documents: [],
      technicalSections: [
        { id: 'responsibility', title: 'Responsabilidad personal', icon: 'process', description: [record.responsibility] },
        { id: 'scope', title: 'Alcance técnico confirmado', icon: 'process', description: [record.scope] },
        ...(record.involvement === 'integral' ? [{ id: 'documentation', title: 'Documentación de ingeniería', icon: 'process' as const, description: ['Definición técnica y documentación del diseño completo de las instalaciones eléctricas del proyecto.'] }] : []),
      ],
    },
  };
});

export const engineeringSkills = [
  { title: 'Distribución eléctrica', items: ['Baja y media tensión', 'Centros de transformación', 'Alimentación y distribución eléctrica'] },
  { title: 'Fuerza y maniobra', items: ['Centros de control de motores (CCM)', 'Cuadros eléctricos industriales', 'Protecciones eléctricas', 'Circuitos de fuerza y maniobra'] },
  { title: 'Accionamientos eléctricos', items: ['Variadores de frecuencia', 'Arrancadores suaves', 'Alimentación de motores'] },
  { title: 'Cableados y canalizaciones', items: ['Definición de cableados', 'Dimensionamiento de conductores', 'Canalizaciones y bandejas portacables', 'Distribución de circuitos'] },
  { title: 'Documentación de ingeniería', items: ['Memorias descriptivas', 'Anejos de cálculos eléctricos', 'Planos de instalaciones', 'Esquemas unifilares', 'Mediciones, partidas y presupuestos'] },
  { title: 'Licitaciones', items: ['Revisión técnica de proyectos', 'Análisis de documentación de licitación', 'Revisión de documentación técnica de ingeniería'] },
];

export const engineeringGroups: Project[] = (['edar', 'ebar', 'desalination'] as const).map(category => {
  const members = engineeringProjects.filter(project => project.infrastructure === category);
  const title = category === 'edar' ? 'EDAR' : category === 'ebar' ? 'EBAR' : 'Desaladoras';
  const description = category === 'edar' ? 'Ingeniería eléctrica en depuración de aguas residuales: Fuente Palmera, La Golondrina, Villapérez y Cerro del Águila, y revisión técnica del proyecto de licitación de Huelva.' : category === 'ebar' ? 'Diseño eléctrico de la nueva estación de bombeo de aguas residuales de San José de La Rinconada, Sevilla.' : 'Ingeniería eléctrica de las ampliaciones de Marbella y Oropesa-Cabanes, con diseño integral de la disciplina eléctrica en Oropesa-Cabanes.';
  return {
    id: `sg-${category}`, kind: 'group', reference: `${title.toUpperCase()} — SOLUCIONES GLOBALES`, sector: 'water', interventions: category === 'edar' ? ['design', 'tender'] : ['design'], contentLanguage: 'es',
    title: spanish(title), subtitle: spanish(`${members.length} ${members.length === 1 ? 'proyecto' : 'proyectos'} · Ingeniería eléctrica`), summary: spanish(description),
    image: category === 'edar' ? {
      src: 'assets/projects/sg-edar/infografia.png',
      alt: spanish('Infografía ilustrativa de una estación depuradora de aguas residuales con referencias a distribución eléctrica, cuadros de proceso, alimentación de equipos y alumbrado. Representación de la categoría EDAR, sin identificar un proyecto concreto.'),
      width: 1667,
      height: 943,
      fit: 'contain',
      caption: 'Infografía ilustrativa aportada por Borja Rejano.',
    } : category === 'ebar' ? {
      src: 'assets/projects/sg-ebar/infografia.png',
      alt: spanish('Infografía conceptual de instalaciones eléctricas para la categoría EBAR, con referencias a distribución, cuadros de proceso, alimentación de bombas y alumbrado. No representa la configuración real de un proyecto concreto.'),
      width: 1667,
      height: 943,
      fit: 'contain',
      caption: 'Infografía ilustrativa aportada por Borja Rejano.',
    } : {
      src: 'assets/projects/sg-desalination/infografia.png',
      alt: spanish('Infografía conceptual de una planta desaladora con referencias a distribución eléctrica, cuadros de proceso y alimentación de equipos. Representación de la categoría Desaladoras, sin identificar una instalación concreta.'),
      width: 1667,
      height: 943,
      fit: 'contain',
      caption: 'Infografía ilustrativa aportada por Borja Rejano.',
    },
    status: 'verified', deliveryLabel: spanish(category === 'edar' ? 'Diseño eléctrico y revisión técnico' : 'Diseño eléctrico y revisión técnica'),
    coverLabel: `${title.toUpperCase()} / INGENIERÍA ELÉCTRICA`, coverNote: 'ILUSTRACIÓN CONCEPTUAL',
    caseStudy: {
      company: 'Soluciones Globales', companyLabel: 'Empresa de ingeniería', role: 'Ingeniero eléctrico de diseño',
      location: category === 'edar' ? 'Córdoba, Asturias, Málaga y Huelva' : category === 'ebar' ? 'San José de La Rinconada, Sevilla' : 'Marbella, Málaga · Oropesa del Mar / Cabanes, Castellón',
      sectorLabel: 'Infraestructuras hidráulicas', typology: category === 'edar' ? 'Estaciones depuradoras de aguas residuales' : category === 'ebar' ? 'Estación de bombeo de aguas residuales' : 'Instalaciones de desalación',
      description: [description], tags: [title, 'Ingeniería eléctrica', ...(category === 'edar' ? ['Diseño', 'Revisión técnica'] : ['Diseño'])],
      phases: [], disciplines: [], competencies: [], images: [], documents: [], groupedProjects: members,
    },
  };
});
