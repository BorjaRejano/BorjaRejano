import type { Project, Text } from '../portfolio';
const spanish = (value: string): Text => ({ es: value, en: value });

export const coperoProject: Project = {
  id: 'edar-el-copero', reference: 'PROYECTO 01 — SOLUCIONES GLOBALES', sector: 'water', interventions: ['design'], contentLanguage: 'es',
  title: spanish('Ampliación de la EDAR El Copero'), subtitle: spanish('Ingeniería eléctrica de detalle BT / MT — Dos Hermanas, Sevilla'),
  summary: spanish('Desarrollo de ingeniería eléctrica de detalle de baja y media tensión para la ampliación de la EDAR El Copero: transformación, respaldo, CCM, accionamientos, distribución y alumbrado, con cálculos, especificaciones, planos, pliegos, mediciones y presupuestos.'),
  status: 'verified', deliveryLabel: spanish('Ingeniería eléctrica de diseño y detalle'),
  image: {
    src: 'assets/projects/edar-el-copero/infografia.png',
    alt: spanish('Infografía ilustrativa de la EDAR El Copero con referencias a centros de transformación, distribución eléctrica, cuadros de proceso, canalizaciones y alumbrado exterior. Representación conceptual.'),
    width: 1667,
    height: 943,
    fit: 'contain',
    caption: 'Infografía ilustrativa aportada por Borja Rejano.',
  },
  coverLabel: 'INGENIERÍA ELÉCTRICA / BT · MT / EDAR', coverNote: 'GRÁFICO CONCEPTUAL',
  caseStudy: {
    company: 'Soluciones Globales', companyLabel: 'Empresa de ingeniería', client: 'EMASESA', location: 'Dos Hermanas, Sevilla, España', role: 'Ingeniero Eléctrico',
    sectorLabel: 'Infraestructuras hidráulicas y ciclo integral del agua', typology: 'Ampliación y modernización de estación depuradora de aguas residuales',
    description: [
      'Participación en el desarrollo de la ingeniería eléctrica de detalle del proyecto de ampliación de la Estación Depuradora de Aguas Residuales (EDAR) El Copero, infraestructura destinada al tratamiento de aguas residuales del área metropolitana de Sevilla.',
      'La intervención comprendió el diseño y dimensionamiento de las instalaciones eléctricas de baja y media tensión, incluyendo la definición de equipos, materiales y componentes necesarios para el funcionamiento de la infraestructura.',
      'El alcance técnico incluyó la ingeniería de centros de transformación, grupos electrógenos, centros de control de motores, variadores de frecuencia, arrancadores suaves, líneas de distribución eléctrica y sistemas de alumbrado interior, exterior y de viales.',
      'El trabajo abarcó la elaboración de cálculos justificativos, anejos técnicos, memorias descriptivas, pliegos de prescripciones técnicas, planos de detalle, mediciones y presupuestos.',
      'La documentación desarrollada estaba orientada a facilitar la contratación, adquisición de equipos y materiales y posterior ejecución de las instalaciones por parte de la empresa constructora. Mi responsabilidad correspondía a la ingeniería eléctrica, dentro del proyecto multidisciplinar hidráulico.',
    ],
    tags: ['Ingeniería eléctrica', 'Ingeniería de detalle', 'BT / MT', 'Centros de transformación', 'Grupos electrógenos', 'CCM', 'Variadores de frecuencia', 'Arrancadores suaves', 'Distribución eléctrica', 'Alumbrado'],
    metricsTitle: 'Contexto general de la EDAR · Datos publicados por EMASESA',
    metrics: [{ value: '255.000 m³/día', label: 'Capacidad actual de tratamiento de la infraestructura; no capacidad añadida por esta ampliación' }, { value: '950.000 h-e', label: 'Población equivalente de diseño de la EDAR' }],
    phases: [], disciplinesTitle: 'Instalaciones eléctricas diseñadas y dimensionadas',
    disciplines: [
      { id: 'transformation', title: 'Media tensión y transformación', icon: 'electrical', systems: ['Centros de transformación', 'Instalaciones de media tensión asociadas', 'Alimentación y distribución en MT dentro del alcance del proyecto'] },
      { id: 'backup', title: 'Generación y respaldo eléctrico', icon: 'electrical', systems: ['Grupos electrógenos', 'Instalaciones eléctricas asociadas a los sistemas de respaldo'] },
      { id: 'distribution', title: 'Distribución eléctrica', icon: 'electrical', systems: ['Líneas de distribución', 'Alimentación a cuadros y equipos', 'Redes de baja tensión', 'Definición y dimensionamiento de cables y componentes'] },
      { id: 'mcc', title: 'Centros de control de motores', icon: 'auxiliary', systems: ['Centros de Control de Motores (CCM)', 'Definición de equipos y componentes eléctricos asociados', 'Distribución y alimentación de receptores eléctricos'] },
      { id: 'drives', title: 'Accionamientos eléctricos', icon: 'auxiliary', systems: ['Variadores de frecuencia (VFD)', 'Arrancadores suaves', 'Instalaciones eléctricas asociadas a motores y equipos electromecánicos'] },
      { id: 'lighting', title: 'Alumbrado', icon: 'electrical', systems: ['Alumbrado interior', 'Alumbrado exterior', 'Alumbrado de viales', 'Alimentación y distribución de sistemas de alumbrado'] },
    ],
    technicalSections: [
      { id: 'design-process', title: 'Proceso de ingeniería eléctrica', icon: 'process', description: ['Diseño eléctrico de baja y media tensión, integrado con las necesidades del proyecto general y de sus equipos electromecánicos.'], steps: [{ title: 'Definición técnica', detail: 'Soluciones, equipos, componentes y materiales' }, { title: 'Cálculos', detail: 'Dimensionamiento y justificación' }, { title: 'Documentación', detail: 'Memorias, anejos y pliegos' }, { title: 'Planos', detail: 'Esquemas y detalles de ejecución' }, { title: 'Mediciones y presupuestos', detail: 'Unidades de obra y valoración económica' }] },
      { id: 'calculations', title: 'Ingeniería de cálculo y dimensionamiento', icon: 'process', description: ['Desarrollo de los cálculos eléctricos necesarios para justificar y dimensionar las instalaciones de baja y media tensión, definiendo soluciones técnicas adecuadas a las necesidades de los equipos y procesos de la estación depuradora.'], steps: [{ title: 'Circuitos y líneas', detail: 'Dimensionamiento de circuitos y selección de secciones de conductores' }, { title: 'Caídas de tensión', detail: 'Comprobación de caídas de tensión' }, { title: 'Protecciones', detail: 'Selección y comprobación de protecciones' }, { title: 'Equipos y distribución', detail: 'Definición técnica de equipos y dimensionamiento de sistemas de distribución' }, { title: 'Anejos justificativos', detail: 'Documentación de cálculos y soluciones adoptadas' }] },
      { id: 'deliverables', title: 'Documentación técnica de ingeniería de detalle', icon: 'process', description: ['Entregables desarrollados para definir las instalaciones eléctricas y preparar su contratación y ejecución.'], steps: [{ title: 'Memorias descriptivas', detail: 'Descripción de instalaciones y definición de soluciones técnicas' }, { title: 'Anejos de cálculo', detail: 'Justificación de dimensionamientos, cálculos BT/MT y comprobaciones' }, { title: 'Pliegos de prescripciones técnicas', detail: 'Requisitos de equipos, materiales y condiciones de contratación y suministro' }, { title: 'Planos eléctricos', detail: 'Planos generales, esquemas y detalles de ejecución' }, { title: 'Mediciones', detail: 'Cuantificación de equipos y materiales y definición de unidades de obra' }, { title: 'Presupuestos', detail: 'Precios, valoración de partidas y presupuesto de instalaciones' }], note: 'Los entregables se describen como resultados de ingeniería; no se publican documentos ni archivos del proyecto.' },
      { id: 'construction', title: 'Ingeniería de detalle para contratación y ejecución', icon: 'process', description: ['Definición de instalaciones con detalle suficiente para facilitar la adquisición de equipos y materiales, la contratación de suministros y la posterior ejecución por la empresa constructora.', 'Documentación integrada de especificaciones técnicas, planos, mediciones y valoración económica. La responsabilidad personal se centró en el desarrollo de ingeniería eléctrica.'] },
    ],
    competencies: ['Diseño y dimensionamiento eléctrico BT y MT', 'Definición de equipos, componentes y materiales', 'Cálculos y documentación justificativa', 'Planos, pliegos, mediciones y presupuestos', 'Integración eléctrica en infraestructuras del ciclo del agua'],
    images: [], documents: [],
  },
};
