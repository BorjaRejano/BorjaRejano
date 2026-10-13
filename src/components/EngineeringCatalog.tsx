import { useState } from 'react';
import { engineeringProjects, engineeringSkills } from '../data/projects/soluciones-globales';
import type { Infrastructure } from '../data/projects/soluciones-globales';
import type { Language } from '../data/portfolio';
import { ProjectCard } from './Projects';

export function EngineeringCatalog({ lang }: { lang: Language }) {
  const [category, setCategory] = useState<Infrastructure | 'all'>('all');
  const filtered = engineeringProjects.filter(project => category === 'all' || project.infrastructure === category);
  return <div lang="es">
    <div className="engineering-metrics"><div><strong>8</strong><span>Proyectos seleccionados</span></div><div><strong>7</strong><span>Proyectos de diseño eléctrico</span></div><div><strong>1</strong><span>Proyecto de revisión técnica</span></div></div>
    <p className="engineering-scope-note">Indicadores correspondientes únicamente a esta selección de ocho proyectos.</p>
    <div className="filters"><fieldset><legend>Tipo de infraestructura</legend><div className="filter-options">{([{ id: 'all', label: 'Todos (8)' }, { id: 'edar', label: 'EDAR (5)' }, { id: 'ebar', label: 'EBAR (1)' }, { id: 'desalination', label: 'Desaladoras (2)' }] as const).map(filter => <button key={filter.id} type="button" aria-pressed={category === filter.id} onClick={() => setCategory(filter.id)}>{filter.label}</button>)}</div></fieldset></div>
    <p className="project-count" role="status" aria-live="polite">{filtered.length} proyectos</p>
    <div className="project-grid">{filtered.map(project => <ProjectCard key={project.id} project={project} lang={lang} />)}</div>
    <div className="engineering-competencies"><h3>Competencias de la etapa en Soluciones Globales</h3><p>Experiencia general de ingeniería eléctrica; cada ficha describe su alcance individual confirmado.</p><div className="case-disciplines">{engineeringSkills.map(skill => <article key={skill.title}><h4>{skill.title}</h4><ul>{skill.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></div>
  </div>;
}
