import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { navigation, ui } from '../data/copy';
import { profile } from '../data/portfolio';
import type { Language } from '../data/portfolio';
export function Header({ lang, setLang, light, setLight }: { lang: Language; setLang: (value: Language) => void; light: boolean; setLight: (value: boolean) => void }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } }; if (open) window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [open]);
  return <header className="header"><div className="header-inner container"><a className="brand" href="#home" onClick={() => setOpen(false)} aria-label={profile.headerLabel[lang]}><span className="brand-monogram">BR<span>.</span></span><span className="brand-caption"><span className="header-name">{profile.name.toUpperCase()}</span><span className="header-role">{profile.headerRole[lang]}</span></span></a><nav id="primary-navigation" className={`nav ${open ? 'is-open' : ''}`} aria-label={ui.menu[lang]}>{navigation.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>{item.label[lang]}</a>)}</nav><div className="header-controls"><button className="language-button" aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'} onClick={() => setLang(lang === 'es' ? 'en' : 'es')}><span className={lang === 'es' ? 'selected' : ''}>ES</span><span aria-hidden="true">/</span><span className={lang === 'en' ? 'selected' : ''}>EN</span></button><button className="icon-button" onClick={() => setLight(!light)} aria-label={(light ? ui.darkTheme : ui.theme)[lang]}>{light ? <Moon size={17} /> : <Sun size={17} />}</button><button id="menu-toggle" className="icon-button mobile-toggle" aria-label={(open ? ui.closeMenu : ui.openMenu)[lang]} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button></div></div></header>;
}


