import type { Project, Text } from '../portfolio';
const spanish = (value: string): Text => ({ es: value, en: value });

// Personal involvement confirmed by the user; public project features checked 2026-10-12.
// Source: https://www.construciainstalaciones.com/proyecto/castellana-85/
export const castellanaProject: Project = {
  id: 'castellana-85',
  reference: 'PROYECTO 02 — CONSTRUCÍA INSTALACIONES',
  sector: 'building',
  interventions: ['tender'],
  contentLanguage: 'es',
  title: spanish('Rehabilitación integral de instalaciones del edificio Castellana 85'),
  cardTitle: spanish('Castellana 85'),
  subtitle: spanish('Rehabilitación integral de edificio de oficinas — Madrid'),
  summary: spanish('Participación en la licitación adjudicada de las instalaciones MEP de Castellana 85, proyecto de rehabilitación integral de oficinas con Lean2Cradle, prefabricación, BIM y criterios de sostenibilidad LEED y WELL.'),
  status: 'verified',
  image: {
    src: 'assets/projects/castellana-85/infografia.png',
    alt: spanish('Infografía ilustrativa de Castellana 85 con fachada del edificio de oficinas y referencias a instalaciones eléctricas, climatización, protección contra incendios e instalaciones especiales.'),
    width: 1669,
    height: 942,
    fit: 'contain',
    caption: 'Infografía ilustrativa aportada por Borja Rejano.',
  },
  caseStudy: {
    company: 'Construcía Instalaciones',
    client: 'Merlin Properties',
    location: 'Paseo de la Castellana 85, Madrid, España',
    role: 'Técnico de estudios · Ingeniería de estudios y licitaciones',
    sectorLabel: 'Edificación terciaria y oficinas corporativas',
    typology: 'Rehabilitación integral de edificio de oficinas',
    description: [
      'Participación en la licitación del paquete de instalaciones correspondiente a la rehabilitación integral del edificio de oficinas Castellana 85, situado en una de las principales áreas empresariales de Madrid.',
      'El proyecto contemplaba la renovación y adecuación de las instalaciones eléctricas, mecánicas, de protección contra incendios, seguridad y energía solar, dentro de una actuación orientada a la sostenibilidad, la eficiencia y la modernización de los espacios de trabajo.',
      'La actuación incorporaba metodologías de construcción circular, prefabricación de instalaciones y desarrollo BIM, junto con criterios de sostenibilidad y bienestar asociados a las directrices LEED y WELL.',
      'La oferta presentada por Construcía Instalaciones resultó adjudicataria de los trabajos de instalaciones.',
    ],
    tags: ['Ingeniería MEP', 'Licitaciones', 'Value Engineering', 'HVAC', 'PCI', 'CCTV', 'Lean2Cradle', 'BIM', 'LEED / WELL'],
    metrics: [{ value: '≈ 14.000 m²', label: 'Superficie de instalaciones' }],
    participation: {
      title: 'Ingeniería de estudios y licitaciones',
      description: [
        'Participación en la fase de licitación del proyecto Castellana 85, dentro del ámbito de estudios técnicos y preparación de ofertas de instalaciones MEP.',
        'Tras la adjudicación, el equipo de obra asumió la ejecución de las instalaciones. Las características constructivas y metodologías del proyecto no se presentan como responsabilidades personales de ejecución o modelado BIM.',
      ],
      responsibilities: [],
      outcome: 'Licitación adjudicada: los trabajos de instalaciones fueron adjudicados a Construcía Instalaciones.',
    },
    phases: [],
    disciplinesTitle: 'Disciplinas técnicas del proyecto',
    disciplines: [
      { id: 'electrical', title: 'Instalaciones eléctricas y energía', icon: 'electrical', systems: ['Instalaciones eléctricas', 'Instalaciones de energía solar', 'Instalaciones asociadas a suministro de gasóleo'] },
      { id: 'mechanical', title: 'Climatización e instalaciones mecánicas', icon: 'mechanical', systems: ['Instalaciones de climatización', 'Instalaciones de fontanería', 'Instalaciones de saneamiento'] },
      { id: 'fire', title: 'Protección contra incendios', icon: 'fire', systems: ['Sistemas de detección de incendios', 'Sistemas de extinción de incendios'] },
      { id: 'security', title: 'Seguridad y control', icon: 'safety', systems: ['Sistemas de control de accesos', 'Sistemas de videovigilancia CCTV', 'Instalaciones de seguridad'] },
    ],
    features: [
      { title: 'Construcción circular y prefabricación', subtitle: 'Metodología Lean2Cradle', icon: 'circular', description: 'Aplicación de principios de circularidad y prefabricación de instalaciones. Lean2Cradle combina Lean Construction con criterios de reutilización y aprovechamiento de recursos.' },
      { title: 'Metodología BIM', icon: 'bim', description: 'Modelado digital para coordinar la información técnica de las instalaciones y facilitar su mantenimiento futuro.' },
      { title: 'Sostenibilidad y bienestar', subtitle: 'Directrices LEED y WELL', icon: 'sustainability', description: 'Rehabilitación orientada a sostenibilidad, eficiencia y bienestar de los ocupantes. La fuente oficial menciona directrices LEED y WELL; no se afirma una certificación obtenida ni un nivel específico.' },
    ],
    competencies: ['Participación en estudios y licitaciones de instalaciones MEP', 'Experiencia en ofertas para rehabilitación de oficinas'],
    images: [],
    documents: [],
  },
};
