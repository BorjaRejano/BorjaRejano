import type { Experience, Language } from '../data/portfolio';

export function OwnerManagement({ data, lang }: { data: NonNullable<Experience['ownerManagement']>; lang: Language }) {
  return <section className="owner-management" aria-label={data.title[lang]}>
    <p className="technical-label">{data.emphasis[lang]}</p>
    <h4>{data.title[lang]}</h4>
    <div className="case-disciplines case-management-pillars">{data.areas.map(area => <article key={area.title.es}><h5>{area.title[lang]}</h5><ul>{area.items.map(item => <li key={item.es}>{item[lang]}</li>)}</ul></article>)}</div>
    {data.note && <p>{data.note[lang]}</p>}
  </section>;
}

