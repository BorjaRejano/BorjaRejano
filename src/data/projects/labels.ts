import type { Language } from '../portfolio';
const labels: Record<string, string> = {
  'Empresa': 'Company', 'Empresa constructora': 'Construction company', 'Cliente / Promotor': 'Client / Developer', 'Constructora': 'Contractor', 'Ubicación': 'Location', 'Mi puesto': 'My role', 'Periodo': 'Period', 'Sector': 'Sector', 'Tipología': 'Project type',
  'CONTEXTO / INGENIERÍA DE INSTALACIONES': 'CONTEXT / SYSTEMS ENGINEERING', 'Descripción general': 'Project overview', 'ALCANCE DEL PROYECTO': 'PROJECT SCOPE', 'Museo e industria en un mismo edificio': 'Museum and industry in one building', 'Dos actuaciones principales': 'Two main interventions',
  'Características publicadas del proyecto': 'Published project characteristics', 'Estos indicadores describen el proyecto y no representan logros individuales.': 'These indicators describe the project and are not individual achievements.',
  'MI PARTICIPACIÓN / INGENIERÍA DE OFERTAS': 'MY INVOLVEMENT / TENDER ENGINEERING', 'MI PARTICIPACIÓN / CICLO DEL PROYECTO': 'MY INVOLVEMENT / PROJECT LIFECYCLE', 'Cuatro fases de responsabilidad': 'Four stages of responsibility', 'FASE': 'STAGE', 'ALCANCE TÉCNICO': 'TECHNICAL SCOPE', 'Disciplinas técnicas': 'Technical disciplines', 'ESPECIALIZACIÓN TÉCNICA / SPA': 'SPECIALIST SYSTEMS / SPA',
  'Innovación, industrialización y sostenibilidad': 'Innovation, industrialisation and sustainability', 'Características del proyecto; mi participación corresponde a la fase de licitación.': 'Project characteristics; my involvement relates to the tender stage.',
  'Proyectos de esta categoría': 'Projects in this category', 'EXPERIENCIA APLICADA': 'APPLIED EXPERIENCE', 'Competencias profesionales desarrolladas': 'Professional skills developed', 'Fuentes públicas del proyecto': 'Public project sources', 'Documentación del proyecto': 'Project documentation',
};
export const projectLabel = (value: string, language: Language): string => language === 'en' ? labels[value] ?? value : value;
