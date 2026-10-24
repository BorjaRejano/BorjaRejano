import type { Experience, Text } from './portfolio';
import { evosRole, evosSummary, evosFunctions } from './evos-content';
const t = (es: string, en: string): Text => ({ es, en });
export const evosExperience: Experience = {
  period: t('Junio 2026 – Actualidad', 'June 2026 – Present'),
  // Functional description of the work, not an official contractual job title.
  role: evosRole,
  company: t('EVOS Algeciras · Mantenimiento industrial | Terminal marítima Oil & Gas', 'EVOS Algeciras · Industrial maintenance | Oil & Gas marine terminal'),
  description: evosSummary,
  ownerManagement: {
    title: t('Mantenimiento industrial y mejora de la terminal', 'Industrial maintenance and terminal improvements'),
    emphasis: t('Mantenimiento preventivo y correctivo · Coordinación · Pequeños proyectos', 'Preventive and corrective maintenance · Coordination · Small projects'),
    areas: evosFunctions,
  },
  placeholder: false,
};

