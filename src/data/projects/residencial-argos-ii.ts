import type { Project, Text } from '../portfolio';
import { argosProject } from './residencial-argos-i';
const spanish = (value: string): Text => ({ es: value, en: value });

// Reuse the confirmed management structure, not Argos I's image or project-specific figures.
export const argosIIProject: Project = {
  id: 'residencial-argos-ii', reference: 'PROYECTO 02 — AREALL', sector: 'building', interventions: ['management'], contentLanguage: 'es',
  title: spanish('Residencial Argos II'), subtitle: spanish('290 viviendas — Sevilla Este'),
  summary: spanish('Gestión integral técnica y económica de instalaciones MEP en una promoción de 290 viviendas, actuando por encargo de la propiedad durante las fases de ingeniería, contratación, ejecución, legalizaciones y postventa.'),
  status: 'verified', deliveryLabel: spanish('Project Management'),
  image: {
    src: 'assets/projects/residencial-argos-ii/infografia.png',
    alt: spanish('Infografía ilustrativa de Residencial Argos II con referencias a climatización, instalaciones eléctricas, fontanería, saneamiento, protección contra incendios y comunicaciones.'),
    width: 1668,
    height: 943,
    fit: 'contain',
    caption: 'Infografía ilustrativa aportada por Borja Rejano.',
  },
  coverLabel: 'PROJECT MANAGEMENT / MEP / BT · MT', coverNote: 'GRÁFICO CONCEPTUAL',
  caseStudy: {
    company: 'Areall', client: 'ASG Homes', contractor: 'Sorigué',
    location: 'Avenida de las Ciencias, 19, Sevilla Este, Sevilla', role: 'Project Manager de Instalaciones',
    sectorLabel: 'Edificación residencial', typology: 'Promoción residencial de obra nueva',
    description: [
      'Participación como Project Manager de Instalaciones en Residencial Argos II, promoción de 290 viviendas situada en Sevilla Este, con locales comerciales, garajes, trasteros y zonas comunes, incluyendo piscinas, jardines, gimnasio y salón social.',
      'Gestión integral técnica, económica y administrativa de las instalaciones MEP por encargo de la propiedad, manteniendo interlocución directa con la promotora y coordinando los distintos agentes intervinientes.',
      'La responsabilidad comprendió las diferentes fases del proyecto, desde el desarrollo inicial de ingeniería y la contratación de empresas hasta el seguimiento de ejecución, control presupuestario, coordinación de plazos, legalizaciones, puesta en servicio y gestión de incidencias durante la postventa.',
      'El proyecto integró instalaciones eléctricas de baja y media tensión, climatización, ventilación, protección contra incendios, fontanería, saneamiento y telecomunicaciones, dentro de una promoción residencial con certificación BREEAM Very Good.',
      'La documentación de Sorigué sitúa la construcción entre diciembre de 2019 y febrero de 2022, con un edificio principal de 244 viviendas y dos módulos de 23 viviendas cada uno. Estas fechas describen la obra, no mi periodo de participación personal.',
    ],
    tags: ['Project Management', 'Ingeniería MEP', 'Gestión técnico-económica', 'Representación de la propiedad', 'Edificación residencial', 'BT / MT', 'HVAC', 'PCI', 'BREEAM Very Good'],
    metrics: [{ value: '290', label: 'Viviendas del proyecto gestionado' }, { value: '≈ 27,3 M€', label: 'Presupuesto publicado de construcción completa, sin IVA; no del ámbito MEP gestionado' }, { value: 'Very Good', label: 'Certificación BREEAM definitiva' }, { value: 'Sevilla Este', label: 'Ubicación' }],
    phasesTitle: 'Seis fases del ciclo de gestión del proyecto',
    phases: [
      { id: 'development', title: 'Desarrollo técnico', summary: 'Ingeniería y arquitectura', icon: 'engineering', responsibilities: ['Coordinación con los equipos de ingeniería y arquitectura.', 'Participación en el desarrollo técnico de los proyectos de instalaciones.', 'Revisión de soluciones y documentación técnica.', 'Coordinación entre disciplinas.', 'Resolución de cuestiones técnicas durante la definición del proyecto.'] },
      { id: 'procurement', title: 'Licitación y contratación', summary: 'Contratación de empresas', icon: 'procurement', responsibilities: ['Participación en la preparación de licitaciones.', 'Análisis de propuestas de constructoras y empresas instaladoras.', 'Coordinación del proceso de contratación.', 'Participación en la adjudicación de trabajos.', 'Seguimiento de los alcances contratados.'] },
      { id: 'control', title: 'Gestión técnica y económica', summary: 'Control presupuestario', icon: 'execution', responsibilities: ['Seguimiento técnico de las instalaciones.', 'Control económico de los trabajos.', 'Seguimiento de presupuestos.', 'Identificación y prevención de desviaciones.', 'Coordinación de soluciones técnicas durante la ejecución.', 'Preparación de informes de seguimiento económico.'] },
      { id: 'planning', title: 'Planificación y coordinación', summary: 'Seguimiento de plazos', icon: 'planning', responsibilities: ['Seguimiento del cumplimiento de la planificación.', 'Coordinación de empresas contratistas e instaladoras.', 'Interlocución con ingeniería y arquitectura.', 'Identificación de incidencias que afectasen a los plazos.', 'Coordinación de soluciones para agilizar los trabajos.', 'Comunicación de riesgos y desviaciones a la propiedad.'] },
      { id: 'utilities', title: 'Legalizaciones y suministros', summary: 'Puesta en servicio', icon: 'commissioning', responsibilities: ['Coordinación de los procesos de legalización de instalaciones.', 'Seguimiento de documentación técnica y administrativa.', 'Interlocución con compañías distribuidoras.', 'Coordinación de gestiones necesarias para disponer de los suministros.', 'Seguimiento de la puesta en servicio.'] },
      { id: 'aftercare', title: 'Postventa', summary: 'Repasos e incidencias', icon: 'aftercare', responsibilities: ['Seguimiento de defectos detectados tras la entrega.', 'Coordinación de repasos de instalaciones.', 'Interlocución con contratistas responsables.', 'Seguimiento de actuaciones correctivas.', 'Gestión de incidencias durante la postventa.'] },
    ],
    disciplinesTitle: 'Disciplinas técnicas gestionadas',
    disciplines: argosProject.caseStudy!.disciplines,
    management: {
      title: 'Project Management en representación de la propiedad',
      description: ['Responsable del ámbito de instalaciones MEP dentro del equipo de gestión de Areall por encargo de la propiedad. Interlocución directa con la promotora, informes técnicos y económicos, comunicación de riesgos y desviaciones y coordinación de soluciones. El modelo general de gestión se desarrolla en la experiencia de Areall.'],
      pillars: [
        { title: 'Interlocución con la propiedad', items: ['Comunicación directa con la promotora', 'Informes técnicos y económicos', 'Comunicación de riesgos', 'Seguimiento de incidencias'] },
        { title: 'Gestión técnica', items: ['Coordinación con ingenierías y arquitectura', 'Seguimiento de instalaciones', 'Resolución de cuestiones técnicas'] },
        { title: 'Gestión económica', items: ['Control presupuestario', 'Seguimiento de costes', 'Prevención de desviaciones', 'Información económica a la propiedad'] },
        { title: 'Gestión administrativa', items: ['Coordinación de documentación', 'Tramitación de legalizaciones', 'Gestión de suministros', 'Seguimiento de postventa'] },
      ],
    },
    featuresTitle: 'Sostenibilidad del proyecto',
    features: [{ title: 'Edificación sostenible — BREEAM Very Good', icon: 'sustainability', description: 'Certificación definitiva del proyecto: Very Good, 61,05 %, emitida el 21 de septiembre de 2022, certificado BV-0120-005/CF. El registro identifica AREALL BASE DE PROYECTOS S.L. como entidad evaluadora; esta característica del proyecto no atribuye al usuario funciones personales de auditoría o responsabilidad de certificación.' }],
    competencies: argosProject.caseStudy!.competencies,
    images: [], documents: [],
  },
};
