import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { ArrowUpRight, Layers, Monitor, Flame, Sun, RotateCcw, X } from 'lucide-react';
import { interventions, projects, sectors } from '../data/portfolio';
import type { Intervention, Language, Project, Sector } from '../data/portfolio';
import { ui } from '../data/copy';
import { EngineeringDiagram } from './EngineeringDiagram';
import { ProjectCaseStudy } from './ProjectCaseStudy';
import { adaptiveSources, assetUrl, projectCover } from '../lib/project-images';
import { engineeringProjects } from '../data/projects/soluciones-globales';
import { localizeProject } from '../data/projects/english';
const allProjects = [...projects, ...engineeringProjects];
export function ProjectCard({ project: sourceProject, lang }: { project: Project; lang: Language }) {
  const project = localizeProject(sourceProject, lang); const contentLang = lang;
  const data = project.caseStudy;
  const cover = projectCover(project);
  const CoverIcon = project.coverIcon === 'control' ? Monitor : project.coverIcon === 'fire' ? Flame : project.coverIcon === 'solar' ? Sun : Layers;
  return <article className={`project-card${project.featured ? ' project-card--featured' : ''}`} lang={contentLang}>
    <div className={`project-illustration${cover?.fit === 'contain' ? ' project-illustration--infographic' : ''}`}>
      {cover ? <img src={assetUrl(cover.src)} alt={cover.alt[contentLang]} width={cover.width} height={cover.height} srcSet={adaptiveSources(cover)} sizes={cover.sizes ?? "(max-width: 700px) 100vw, 33vw"} loading="lazy" decoding="async" />
        : data ? <div className="case-cover" aria-hidden="true"><CoverIcon size={38} strokeWidth={1.2} /><span>{project.coverLabel ?? 'MEP / BT · MT / HVAC / BMS'}</span><small>{project.coverNote ?? 'GRÁFICO CONCEPTUAL'}</small></div>
        : <EngineeringDiagram sector={project.sector} />}
      <span className="drawing-reference">{project.reference}</span>
    </div>
    <div className="project-card-body">
      <p className="technical-label">{project.cardSectorLabel?.[contentLang] ?? data?.sectorLabel ?? sectors.find(s => s.id === project.sector)?.title[contentLang]}</p>
      <h3>{(project.cardTitle ?? project.title)[contentLang]}</h3>
      {project.subtitle && <p className="project-card-subtitle">{project.subtitle[contentLang]}</p>}
      {data && <dl className="project-card-meta"><div><dt>{lang === 'es' ? 'Empresa' : 'Company'}</dt><dd>{data.company}</dd></div><div><dt>{lang === 'es' ? 'Ubicación' : 'Location'}</dt><dd>{data.location}</dd></div><div><dt>{lang === 'es' ? 'Puesto' : 'Role'}</dt><dd>{data.role}</dd></div></dl>}
      <p>{project.summary[contentLang]}</p>
      <div className="project-tags">{data ? data.tags.map(tag => <span key={tag}>{tag}</span>) : project.interventions.map(id => <span key={id}>{interventions.find(i => i.id === id)?.title[contentLang]}</span>)}</div>
      <div className="project-card-footer">
      <p className="template-label">{project.statusLabel?.[contentLang] ?? (project.status === 'placeholder' ? ui.template : ui.verified)[contentLang]}</p>
      <div className="project-card-result">
      {data?.participation && <p className="tender-outcome">{data.participation.cardLabel ?? (lang === 'es' ? 'Licitación adjudicada' : 'Tender awarded')}</p>}
      {project.deliveryLabel && <p className="tender-outcome">{project.deliveryLabel[contentLang]}</p>}
      </div>
      <a className="project-link" href={`#project/${project.id}`} aria-label={`${ui.projectLink[contentLang]}: ${project.title[contentLang]}`}>{ui.projectLink[contentLang]}<ArrowUpRight size={18} /></a>
      </div>
    </div>
  </article>;
}
export function ProjectCollection({ lang }: { lang: Language }) {
  const [sector, setSector] = useState<Sector | 'all'>('all');
  const [intervention, setIntervention] = useState<Intervention | 'all'>('all');
  const filtered = projects.filter(p => (sector === 'all' || p.sector === sector) && (intervention === 'all' || p.interventions.includes(intervention)));
  return <><div className="filters"><fieldset><legend>{ui.sector[lang]}</legend><div className="filter-options">{[{ id: 'all' as const, title: ui.all }, ...sectors].map(s => <button key={s.id} type="button" aria-pressed={sector === s.id} onClick={() => setSector(s.id)}>{s.title[lang]}</button>)}</div></fieldset><fieldset><legend>{ui.intervention[lang]}</legend><div className="filter-options">{[{ id: 'all' as const, title: ui.all }, ...interventions].map(i => <button key={i.id} type="button" aria-pressed={intervention === i.id} onClick={() => setIntervention(i.id)}>{i.title[lang]}</button>)}</div></fieldset></div><div className="project-count" role="status" aria-live="polite">{filtered.length} {ui.projectCount[lang]}</div>{filtered.length ? <div className="project-grid">{filtered.map(p => <ProjectCard key={p.id} project={p} lang={lang} />)}</div> : <div className="empty-state"><p>{ui.empty[lang]}</p><button className="button secondary" onClick={() => { setSector('all'); setIntervention('all'); }}><RotateCcw size={16} />{ui.reset[lang]}</button></div>}</>;
}
export function ProjectDialog({ lang }: { lang: Language }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [sourceProject, setProject] = useState<Project | null>(null); const project = sourceProject ? localizeProject(sourceProject, lang) : null;
  useEffect(() => {
    const update = () => { const match = allProjects.find(p => window.location.hash === `#project/${p.id}`); setProject(match ?? null); if (!match && dialog.current?.open) dialog.current.close(); };
    window.addEventListener('hashchange', update); update(); return () => window.removeEventListener('hashchange', update);
  }, [projects]);
  useEffect(() => { if (project) { if (!dialog.current?.open) dialog.current?.showModal(); if (dialog.current) dialog.current.scrollTop = 0; document.getElementById('dialog-title')?.focus({ preventScroll: true }); } }, [sourceProject, lang]);
  useEffect(() => { if (!project) return; const previous = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = previous; }; }, [sourceProject, lang]);
  const close = () => { if (window.location.hash.startsWith('#project/')) { history.replaceState(null, '', '#projects'); document.getElementById('projects')?.scrollIntoView({ behavior: 'instant' }); } setProject(null); };
  const containFocus = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== 'Tab') return;
    const controls = event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex="0"]');
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  };
  const contentLang = lang;
  const parentGroup = project && projects.find(group => group.caseStudy?.groupedProjects?.some(item => item.id === project.id));
  return <dialog ref={dialog} lang={contentLang} className={`project-dialog ${project?.caseStudy ? 'project-case-dialog' : ''}`} aria-labelledby="dialog-title" onClose={close} onKeyDown={containFocus} onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }}>
    {project && <div className="dialog-body">
      <button autoFocus className="icon-button dialog-close" aria-label={ui.close[contentLang]} onClick={() => dialog.current?.close()}><X size={22} /></button>
      <p className="technical-label">{project.reference} / {sectors.find(s => s.id === project.sector)?.title[contentLang]}</p>
      <p className="template-label">{project.statusLabel?.[contentLang] ?? (project.status === 'placeholder' ? ui.template : ui.verified)[contentLang]}</p>
      {parentGroup && <a className="button secondary category-back" href={`#project/${parentGroup.id}`}>{lang === 'es' ? 'Volver a' : 'Back to'} {localizeProject(parentGroup, lang).title[contentLang]}</a>}
      <h2 id="dialog-title" tabIndex={-1}>{project.title[contentLang]}</h2>
      {!project.caseStudy && <p className="dialog-summary">{project.summary[contentLang]}</p>}
      {project.caseStudy ? <ProjectCaseStudy data={project.caseStudy} projectId={project.id} lang={lang} />
        : <div className="detail-grid">{(['problem', 'scope', 'responsibilities', 'solution', 'technologies', 'results'] as const).filter(key => project[key]).map(key => <div key={key}><h3>{ui[key][contentLang]}</h3><p>{project[key]?.[contentLang]}</p></div>)}</div>}
      <button className="button secondary" onClick={() => dialog.current?.close()}>{ui.close[contentLang]}</button>
    </div>}
  </dialog>;
}


