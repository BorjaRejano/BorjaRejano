import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { ArrowUpRight, RotateCcw, X } from 'lucide-react';
import { interventions, projects, sectors } from '../data/portfolio';
import type { Intervention, Language, Project, Sector } from '../data/portfolio';
import { ui } from '../data/copy';
import { EngineeringDiagram } from './EngineeringDiagram';
export function ProjectCard({ project, lang }: { project: Project; lang: Language }) {
  return <article className="project-card"><div className="project-illustration">{project.image ? <img src={`${import.meta.env.BASE_URL}${project.image.src}`} alt={project.image.alt[lang]} width={project.image.width} height={project.image.height} srcSet={project.image.srcSet} sizes={project.image.sizes} loading="lazy" decoding="async" /> : <EngineeringDiagram sector={project.sector} />}<span className="drawing-reference">{project.reference}</span></div><div className="project-card-body"><p className="technical-label">{sectors.find(s => s.id === project.sector)?.title[lang]}</p><h3>{project.title[lang]}</h3><p>{project.summary[lang]}</p><div className="project-tags">{project.interventions.map(id => <span key={id}>{interventions.find(i => i.id === id)?.title[lang]}</span>)}</div><p className="template-label">{(project.status === 'placeholder' ? ui.template : ui.verified)[lang]}</p><a className="project-link" href={`#project/${project.id}`} aria-label={`${ui.projectLink[lang]}: ${project.title[lang]}`}>{ui.projectLink[lang]}<ArrowUpRight size={18} /></a></div></article>;
}
export function ProjectCollection({ lang }: { lang: Language }) {
  const [sector, setSector] = useState<Sector | 'all'>('all');
  const [intervention, setIntervention] = useState<Intervention | 'all'>('all');
  const filtered = projects.filter(p => (sector === 'all' || p.sector === sector) && (intervention === 'all' || p.interventions.includes(intervention)));
  return <><div className="filters"><fieldset><legend>{ui.sector[lang]}</legend><div className="filter-options">{[{ id: 'all' as const, title: ui.all }, ...sectors].map(s => <button key={s.id} type="button" aria-pressed={sector === s.id} onClick={() => setSector(s.id)}>{s.title[lang]}</button>)}</div></fieldset><fieldset><legend>{ui.intervention[lang]}</legend><div className="filter-options">{[{ id: 'all' as const, title: ui.all }, ...interventions].map(i => <button key={i.id} type="button" aria-pressed={intervention === i.id} onClick={() => setIntervention(i.id)}>{i.title[lang]}</button>)}</div></fieldset></div><div className="project-count" role="status" aria-live="polite">{filtered.length} {ui.projectCount[lang]}</div>{filtered.length ? <div className="project-grid">{filtered.map(p => <ProjectCard key={p.id} project={p} lang={lang} />)}</div> : <div className="empty-state"><p>{ui.empty[lang]}</p><button className="button secondary" onClick={() => { setSector('all'); setIntervention('all'); }}><RotateCcw size={16} />{ui.reset[lang]}</button></div>}</>;
}
export function ProjectDialog({ lang }: { lang: Language }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [project, setProject] = useState<Project | null>(null);
  useEffect(() => {
    const update = () => { const match = projects.find(p => window.location.hash === `#project/${p.id}`); setProject(match ?? null); if (!match && dialog.current?.open) dialog.current.close(); };
    window.addEventListener('hashchange', update); update(); return () => window.removeEventListener('hashchange', update);
  }, []);
  useEffect(() => { if (project && !dialog.current?.open) dialog.current?.showModal(); }, [project]);
  useEffect(() => { if (!project) return; const previous = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = previous; }; }, [project]);
  const close = () => { if (window.location.hash.startsWith('#project/')) { history.replaceState(null, '', '#projects'); document.getElementById('projects')?.scrollIntoView({ behavior: 'instant' }); } setProject(null); };
  const containFocus = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== 'Tab') return;
    const controls = event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex="0"]');
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  };
  return <dialog ref={dialog} className="project-dialog" aria-labelledby="dialog-title" onClose={close} onKeyDown={containFocus} onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }}>{project && <div className="dialog-body"><button autoFocus className="icon-button dialog-close" aria-label={ui.close[lang]} onClick={() => dialog.current?.close()}><X size={22} /></button><p className="technical-label">{project.reference} / {sectors.find(s => s.id === project.sector)?.title[lang]}</p><p className="template-label">{(project.status === 'placeholder' ? ui.template : ui.verified)[lang]}</p><h2 id="dialog-title">{project.title[lang]}</h2><p className="dialog-summary">{project.summary[lang]}</p><div className="detail-grid">{(['problem', 'scope', 'responsibilities', 'solution', 'technologies', 'results'] as const).map(key => <div key={key}><h3>{ui[key][lang]}</h3><p>{project[key][lang]}</p></div>)}</div><button className="button secondary" onClick={() => dialog.current?.close()}>{ui.close[lang]}</button></div>}</dialog>;
}
