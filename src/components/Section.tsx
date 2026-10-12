import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
export function Section({ id, number, label, title, intro, children, className = '' }: { id: string; number: string; label: string; title: string; intro?: string; children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.section id={id} aria-labelledby={`${id}-title`} className={`section container ${className}`} initial={reduced ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ duration: 0.35 }}><div className="section-heading"><p className="eyebrow"><span>{number}</span> / {label}</p><h2 id={`${id}-title`}>{title}</h2>{intro && <p className="section-intro">{intro}</p>}</div>{children}</motion.section>;
}
