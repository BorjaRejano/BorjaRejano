import { ArrowRight, Boxes, Building2, CalendarCheck, ClipboardCheck, FileSearch, FileText, Flame, HardHat, Layers, Leaf, Network, PackageCheck, Recycle, ShieldCheck, Waves, Wind, Wrench, Zap } from 'lucide-react';
import type { ProjectCaseStudy as CaseStudyData, ProjectDiscipline, Language } from '../data/portfolio';
import { projectLabel } from '../data/projects/labels';
import { ProjectCard } from './Projects';

const phaseIcons = { engineering: FileSearch, procurement: PackageCheck, execution: HardHat, commissioning: ClipboardCheck, planning: CalendarCheck, aftercare: Wrench };
const featureIcons = { circular: Recycle, bim: Boxes, sustainability: Leaf, building: Building2, fire: Flame };
const disciplineIcons = { electrical: Zap, mechanical: Wind, fire: Flame, safety: ShieldCheck, communications: Network, auxiliary: Wrench, hydraulic: Waves, environmental: Wind };

function DisciplineCards({ items }: { items: ProjectDiscipline[] }) {
  return <div className="case-disciplines">
    {items.map(discipline => { const Icon = disciplineIcons[discipline.icon]; return <article key={discipline.id}>
      <Icon size={25} strokeWidth={1.5} aria-hidden="true" /><h4>{discipline.title}</h4>
      <ul>{discipline.systems.map(system => <li key={system}>{system}</li>)}</ul>
    </article>; })}
  </div>;
}

export function ProjectCaseStudy({ data, projectId, lang }: { data: CaseStudyData; projectId: string; lang: Language }) {
  return <div className="case-study" lang={lang}>
    <dl className="case-meta">
      <div><dt>{data.companyLabel ?? (data.management ? projectLabel('Empresa', lang) : projectLabel('Empresa constructora', lang))}</dt><dd>{data.company}</dd></div>
      {data.client && <div><dt>{projectLabel('Cliente / Promotor', lang)}</dt><dd>{data.client}</dd></div>}
      {data.contractor && <div><dt>{projectLabel('Constructora', lang)}</dt><dd>{data.contractor}</dd></div>}
      <div><dt>{projectLabel('Ubicación', lang)}</dt><dd>{data.location}</dd></div>
      <div><dt>{projectLabel('Mi puesto', lang)}</dt><dd>{data.role}</dd></div>
      {data.period && <div><dt>{projectLabel('Periodo', lang)}</dt><dd>{data.period}</dd></div>}
      <div><dt>{projectLabel('Sector', lang)}</dt><dd>{data.sectorLabel}</dd></div>
      <div><dt>{projectLabel('Tipología', lang)}</dt><dd>{data.typology}</dd></div>
    </dl>
    <section className="case-section" aria-labelledby={`${projectId}-context`}>
      <p className="technical-label">{projectLabel('CONTEXTO / INGENIERÍA DE INSTALACIONES', lang)}</p>
      <h3 id={`${projectId}-context`}>{projectLabel('Descripción general', lang)}</h3>
      {data.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    </section>
    {data.activities && <section className="case-section" aria-labelledby={`${projectId}-activities`}>
      <p className="technical-label">{projectLabel('ALCANCE DEL PROYECTO', lang)}</p>
      <h3 id={`${projectId}-activities`}>{projectId === 'la-almazara' ? projectLabel('Museo e industria en un mismo edificio', lang) : projectLabel('Dos actuaciones principales', lang)}</h3>
      <div className="case-responsibilities case-activities">{data.activities.map(activity => <article key={activity.title}><h4>{activity.title}</h4><p>{activity.description}</p></article>)}</div>
    </section>}
    {data.metrics && <section className="case-section" aria-labelledby={`${projectId}-metrics`}>
      <h3 id={`${projectId}-metrics`}>{data.metricsTitle ?? projectLabel('Características publicadas del proyecto', lang)}</h3>
      <p>{projectLabel('Estos indicadores describen el proyecto y no representan logros individuales.', lang)}</p>
      <dl className="case-project-metrics">{data.metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>
    </section>}
    {data.participation && <section className="case-section" aria-labelledby={`${projectId}-participation`}>
      <p className="technical-label">{projectLabel('MI PARTICIPACIÓN / INGENIERÍA DE OFERTAS', lang)}</p>
      <h3 id={`${projectId}-participation`}>{data.participation.title}</h3>
      {data.participation.description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      {data.participation.responsibilities.length > 0 && <ul>{data.participation.responsibilities.map(item => <li key={item}>{item}</li>)}</ul>}
      {data.participation.outcome && <p className="tender-outcome">{data.participation.outcome}</p>}
    </section>}
    {data.phases.length > 0 && <section className="case-section" aria-labelledby={`${projectId}-phases`}>
      <p className="technical-label">{projectLabel('MI PARTICIPACIÓN / CICLO DEL PROYECTO', lang)}</p>
      <h3 id={`${projectId}-phases`}>{data.phasesTitle ?? projectLabel('Cuatro fases de responsabilidad', lang)}</h3>
      <ol className={`case-phase-timeline${data.phases.length === 6 ? ' case-phase-timeline--six' : ''}`}>
        {data.phases.map((phase, index) => { const Icon = phaseIcons[phase.icon]; return <li key={phase.id}>
          <div className="phase-marker"><span>{String(index + 1).padStart(2, '0')}</span><Icon size={20} aria-hidden="true" /></div>
          <h4>{phase.title}</h4><p>{phase.summary}</p>
        </li>; })}
      </ol>
      <div className="case-responsibilities">
        {data.phases.map((phase, index) => <article key={phase.id}>
          <p className="technical-label">{projectLabel('FASE', lang)} {String(index + 1).padStart(2, '0')}</p>
          <h4>{phase.title}</h4>
          <ul>{phase.responsibilities.map(item => <li key={item}>{item}</li>)}</ul>
        </article>)}
      </div>
    </section>}
    {data.management && <section className="case-section" aria-labelledby={`${projectId}-management`}>
      <h3 id={`${projectId}-management`}>{data.management.title}</h3>
      {data.management.description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      <div className="case-disciplines case-management-pillars">{data.management.pillars.map(pillar => <article key={pillar.title}><h4>{pillar.title}</h4><ul>{pillar.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
    </section>}
    {data.disciplines.length > 0 && <section className="case-section" aria-labelledby={`${projectId}-disciplines`}>
      <p className="technical-label">{projectLabel('ALCANCE TÉCNICO', lang)}</p>
      <h3 id={`${projectId}-disciplines`}>{data.disciplinesTitle ?? projectLabel('Disciplinas técnicas', lang)}</h3>
      <DisciplineCards items={data.disciplines} />
    </section>}
    {data.highlight && <section className="case-section case-highlight" aria-labelledby={`${projectId}-highlight`}>
      <p className="technical-label">{projectLabel('ESPECIALIZACIÓN TÉCNICA / SPA', lang)}</p>
      <h3 id={`${projectId}-highlight`}>{data.highlight.title}</h3>
      {data.highlight.description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      <DisciplineCards items={data.highlight.groups} />
    </section>}
    {data.features && <section className="case-section" aria-labelledby={`${projectId}-features`}>
      <h3 id={`${projectId}-features`}>{data.featuresTitle ?? projectLabel('Innovación, industrialización y sostenibilidad', lang)}</h3>
      {data.participation && <p>{projectLabel('Características del proyecto; mi participación corresponde a la fase de licitación.', lang)}</p>}
      <div className="case-disciplines">{data.features.map(feature => { const Icon = featureIcons[feature.icon]; return <article key={feature.title}><Icon size={25} strokeWidth={1.5} aria-hidden="true" /><h4>{feature.title}</h4>{feature.subtitle && <p className="technical-label">{feature.subtitle}</p>}<p>{feature.description}</p></article>; })}</div>
    </section>}
    {data.technicalSections?.map(section => <section className="case-section case-technical-section" key={section.id} aria-labelledby={`${projectId}-${section.id}`}>
      {section.icon === 'water' ? <Waves size={27} aria-hidden="true" /> : <Wrench size={27} aria-hidden="true" />}
      <h3 id={`${projectId}-${section.id}`}>{section.title}</h3>
      {section.description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      {section.steps && <ol className="case-functional-flow">{section.steps.map((step, index) => <li key={step.title}><span className="technical-label">{String(index + 1).padStart(2, '0')}</span><h4>{step.title}</h4><p>{step.detail}</p>{index < section.steps!.length - 1 && <ArrowRight size={18} aria-hidden="true" />}</li>)}</ol>}
      {section.note && <p className="case-flow-note">{section.note}</p>}
    </section>)}
    {data.groupedProjects && <section className="case-section" aria-labelledby={`${projectId}-projects`}>
      <h3 id={`${projectId}-projects`}>{projectLabel('Proyectos de esta categoría', lang)}</h3>
      <div className="project-grid case-project-cards">{data.groupedProjects.map(project => <ProjectCard key={project.id} project={project} lang={lang} />)}</div>
    </section>}
    {data.competencies.length > 0 && <section className="case-section" aria-labelledby={`${projectId}-competencies`}>
      <p className="technical-label">{projectLabel('EXPERIENCIA APLICADA', lang)}</p>
      <h3 id={`${projectId}-competencies`}>{projectLabel('Competencias profesionales desarrolladas', lang)}</h3>
      <ul className="case-competencies">{data.competencies.map(item => <li key={item}><Layers size={17} aria-hidden="true" /><span>{item}</span></li>)}</ul>
    </section>}
    {data.sources && <section className="case-section" aria-labelledby={`${projectId}-sources`}>
      <h3 id={`${projectId}-sources`}>{projectLabel('Fuentes públicas del proyecto', lang)}</h3>
      <ul>{data.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul>
    </section>}
    {data.documents.length > 0 && <section className="case-section" aria-labelledby={`${projectId}-documents`}>
      <h3 id={`${projectId}-documents`}>{projectLabel('Documentación del proyecto', lang)}</h3>
      <ul className="case-documents">{data.documents.map(document => <li key={document.href}><a href={`${import.meta.env.BASE_URL}${document.href}`} target="_blank" rel="noopener noreferrer"><FileText size={17} aria-hidden="true" />{document.label}</a></li>)}</ul>
    </section>}
  </div>;
}
