import type { Text } from './portfolio';
const t = (es: string, en: string): Text => ({ es, en });
// Shared presentation data keeps the timeline and project record aligned.
export const evosRole = t('Ingeniero de mantenimiento y proyectos · Oil & Gas', 'Maintenance and Project Engineer · Oil & Gas');
export const evosSummary = t('Participación en el mantenimiento industrial de una terminal marítima de almacenamiento de productos líquidos del sector Oil & Gas, interviniendo en instalaciones y equipos de distintos ámbitos según las necesidades de la planta. Especialización eléctrica aplicada al diagnóstico de averías, la resolución de incidencias y la mejora de las instalaciones, junto con la coordinación de empresas contratistas y la ejecución de pequeños proyectos.', 'Involvement in industrial maintenance at an Oil & Gas marine liquid storage terminal, working on systems and equipment across different areas according to plant needs. Electrical expertise applied to fault diagnosis, issue resolution and facility improvements, alongside contractor coordination and the delivery of small projects.');
export const evosIntroduction = [
  t('Mi actividad en EVOS se desarrolla en una terminal marítima de almacenamiento de productos líquidos del sector Oil & Gas, combinando el mantenimiento diario de las instalaciones con el desarrollo de mejoras y pequeños proyectos.', 'My work at EVOS takes place at an Oil & Gas marine liquid storage terminal, combining day-to-day facility maintenance with improvements and small projects.'),
  t('Participo en intervenciones sobre instalaciones y equipos de diferentes ámbitos, adaptándome a las necesidades operativas de un entorno industrial y portuario y aportando una especialización técnica en electricidad e instrumentación. El trabajo incluye el análisis de incidencias, la preparación y el seguimiento de actuaciones de mantenimiento y la coordinación de empresas contratistas, atendiendo a las condiciones de seguridad y a la continuidad operativa de la terminal.', 'I take part in work on systems and equipment across different areas, adapting to the operating needs of an industrial and port environment and contributing specialist knowledge of electrical systems and instrumentation. This includes analysing issues, preparing and monitoring maintenance work and coordinating contractors, with attention to safety and terminal operational continuity.'),
];
export const evosFunctions = [
  { title: t('Mantenimiento de instalaciones y equipos', 'Maintenance of systems and equipment'), items: [
    t('Participación en actuaciones de mantenimiento preventivo y correctivo en distintos ámbitos de la terminal.', 'Participation in preventive and corrective maintenance across different areas of the terminal.'),
    t('Identificación de anomalías, diagnóstico de averías y seguimiento de su resolución.', 'Identification of anomalies, fault diagnosis and monitoring of their resolution.'),
    t('Intervención y apoyo técnico en electricidad, instrumentación y otras instalaciones y equipos según las necesidades de mantenimiento.', 'Hands-on involvement and technical support for electrical systems, instrumentation and other systems and equipment according to maintenance needs.'),
    t('Seguimiento de deficiencias detectadas en inspecciones y de las actuaciones para su subsanación.', 'Monitoring of inspection findings and corrective actions.'),
  ] },
  { title: t('Preparación y coordinación de trabajos', 'Work preparation and coordination'), items: [
    t('Definición del alcance de las intervenciones y coordinación con empresas contratistas.', 'Definition of intervention scope and coordination with contractors.'),
    t('Solicitud y revisión de ofertas y elaboración de comparativos técnicos y económicos.', 'Requesting and reviewing quotations and preparing technical and financial comparisons.'),
    t('Gestión y seguimiento de permisos de trabajo y documentación de coordinación de actividades empresariales.', 'Management and monitoring of work permits and contractor safety coordination documentation.'),
    t('Seguimiento de la ejecución y comprobación de los trabajos realizados.', 'Monitoring execution and checking completed work.'),
  ] },
  { title: t('Mejoras y pequeños proyectos', 'Improvements and small projects'), items: [
    t('Desarrollo y seguimiento de modificaciones destinadas a mejorar la funcionalidad, seguridad y mantenibilidad de las instalaciones.', 'Development and monitoring of modifications to improve facility functionality, safety and maintainability.'),
    t('Apoyo técnico durante la ejecución, puesta en servicio y documentación de las actuaciones.', 'Technical support during execution, commissioning and documentation of the work.'),
  ] },
];
export const evosTags = [t('Mantenimiento industrial', 'Industrial maintenance'), t('Oil & Gas', 'Oil & Gas'), t('Terminal marítima', 'Marine terminal'), t('Mantenimiento preventivo y correctivo', 'Preventive and corrective maintenance'), t('Diagnóstico de averías', 'Fault diagnosis'), t('Electricidad e instrumentación', 'Electrical systems and instrumentation'), t('Coordinación de contratistas', 'Contractor coordination'), t('Seguridad y permisos de trabajo', 'Safety and work permits'), t('Mejora de instalaciones', 'Facility improvements'), t('Pequeños proyectos', 'Small projects')];

