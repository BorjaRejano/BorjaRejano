import { ArrowRight } from 'lucide-react';
import type { Experience, Language } from '../data/portfolio';

export function ValueEngineering({ data, lang }: { data: NonNullable<Experience['valueEngineering']>; lang: Language }) {
  return <section className="value-engineering" aria-label={data.title[lang]}>
    <h4>{data.title[lang]}</h4>
    {data.description.map(paragraph => <p key={paragraph.es}>{paragraph[lang]}</p>)}
    <ul className="value-areas">{data.areas.map(area => <li key={area.es}>{area[lang]}</li>)}</ul>
    <ol className="value-process">{data.steps.map((step, index) => <li key={step.es}><span>{step[lang]}</span>{index < data.steps.length - 1 && <ArrowRight size={16} aria-hidden="true" />}</li>)}</ol>
  </section>;
}
