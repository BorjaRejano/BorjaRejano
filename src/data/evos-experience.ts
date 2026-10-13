import type { Experience, Text } from './portfolio';
const t = (es: string, en: string): Text => ({ es, en });
export const evosExperience: Experience = {
  period: t('Junio 2026 – Actualidad', 'June 2026 – Present'),
  role: t('Ingeniería y gestión de proyectos industriales', 'Industrial project engineering and management'),
  company: t('EVOS Algeciras · Oil & Gas', 'EVOS Algeciras · Oil & Gas'),
  description: t('Desarrollo y gestión de proyectos de mejora y modificación de instalaciones en una planta Oil & Gas en operación. Definición de soluciones técnicas, preparación de documentación para contratación, planificación, coordinación de contratistas y seguimiento de la ejecución, en colaboración con Operaciones y Mantenimiento. Trabajo en mantenimiento preventivo y correctivo de distintos tipos de instalaciones de la planta, con especial dedicación al ámbito eléctrico.', 'Development and management of improvement and modification projects at an operating Oil & Gas facility. Technical solutions, procurement documentation, planning, contractor coordination and execution monitoring in collaboration with Operations and Maintenance. Work on preventive and corrective maintenance across different plant systems, with a particular focus on electrical systems.'),
  ownerManagement: {
    title: t('Proyectos de mejora y mantenimiento industrial', 'Improvement projects and industrial maintenance'),
    emphasis: t('Desarrollo de proyectos · Mantenimiento preventivo y correctivo', 'Project development · Preventive and corrective maintenance'),
    areas: [
      { title: t('Desarrollo de nuevos proyectos de mejora', 'Development of new improvement projects'), items: [t('Identificación de necesidades y definición de soluciones técnicas para mejorar las instalaciones de la planta.', 'Identification of needs and technical solutions to improve plant systems.'), t('Preparación de documentación técnica y para contratación.', 'Preparation of technical and procurement documentation.'), t('Planificación, coordinación de empresas contratistas y seguimiento de los trabajos.', 'Planning, contractor coordination and work monitoring.'), t('Integración de modificaciones con la actividad de la planta, en coordinación con Operaciones y Mantenimiento.', 'Integration of modifications with plant operations, in coordination with Operations and Maintenance.')] },
      { title: t('Mantenimiento preventivo y correctivo', 'Preventive and corrective maintenance'), items: [t('Trabajo en mantenimiento de diferentes tipos de instalaciones industriales, principalmente eléctricas.', 'Maintenance work across different industrial systems, primarily electrical systems.'), t('Seguimiento de actuaciones preventivas y análisis de averías e incidencias.', 'Monitoring of preventive work and analysis of faults and technical issues.'), t('Evaluación de soluciones y coordinación de actuaciones correctivas.', 'Solution assessment and coordination of corrective work.'), t('Colaboración con los equipos de mantenimiento para conservar el funcionamiento de las instalaciones.', 'Collaboration with maintenance teams to maintain system operation.')] },
    ],
  },
  placeholder: false,
};
