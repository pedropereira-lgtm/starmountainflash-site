'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { site } from '@/data/site';
import { nomesPublicados } from '@/data/trabalhos';
import { ArrowUpRight, Close, Logo, Mail, PanelArrow, Phone, WhatsAppGlyph } from '../Icons';
import LocalTime from './LocalTime';

const links = [
  { n: '01', href: '/websites', titulo: 'Websites', sub: 'Landing pages e sites institucionais' },
  { n: '02', href: '/lojas-online', titulo: 'Lojas online', sub: 'Vender online sem complicar' },
  { n: '03', href: '/automacoes', titulo: 'Automações', sub: 'Processos repetitivos a correr sozinhos' },
];
const empresa = [
  { n: '04', href: '/#trabalhos', titulo: 'Trabalhos', sub: nomesPublicados(true) },
  { n: '05', href: '/sobre', titulo: 'Sobre', sub: 'O contabilista que automatiza' },
  { n: '06', href: '/blog', titulo: 'Blog', sub: 'Sites, SEO e automação para PME' },
];

export default function MobilePanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  return (
    <div className={`panel${open ? ' open' : ''}`} id="menu-mobile" aria-hidden={!open} role="dialog" aria-label="Menu">
      <svg className="mark" viewBox="0 0 32 32" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="square" aria-hidden="true">
        <path d="M5 18 L16 7 L27 18" />
        <path d="M5 27 L16 16 L27 27" />
      </svg>
      <div className="panel-top">
        <Link href="/" className="brand" onClick={onClose}>
          <Logo />
          Starmountain Flash
        </Link>
        <button className="close" type="button" aria-label="Fechar menu" onClick={onClose} ref={closeRef}>
          Fechar{' '}
          <b>
            <Close stroke="#0B0D0C" width={2.4} />
          </b>
        </button>
      </div>
      <nav aria-label="Menu">
        <span className="grp">Serviços</span>
        {links.map((l) => (
          <Link href={l.href} key={l.href} onClick={onClose}>
            <em>{l.n}</em>
            <strong>{l.titulo}</strong>
            <PanelArrow />
            <small>{l.sub}</small>
          </Link>
        ))}
        <span className="grp">Starmountain Flash</span>
        {empresa.map((l) => (
          <Link href={l.href} key={l.href} onClick={onClose}>
            <em>{l.n}</em>
            <strong>{l.titulo}</strong>
            <PanelArrow />
            <small>{l.sub}</small>
          </Link>
        ))}
      </nav>
      <div className="bottom">
        <div className="quick">
          <a href={`tel:${site.telefoneRaw}`}>
            <Phone />
            Ligar
          </a>
          <a href="#whatsapp" data-wa>
            <WhatsAppGlyph />
            WhatsApp
          </a>
          <a href={`mailto:${site.email}`}>
            <Mail />
            Email
          </a>
        </div>
        <a href="#orcamento" className="cta-full" onClick={onClose}>
          Pedir orçamento{' '}
          <span>
            <ArrowUpRight size={16} />
          </span>
        </a>
        <div className="status">
          <span>
            <i></i>Covilhã, Portugal
          </span>
          <LocalTime />
        </div>
      </div>
    </div>
  );
}
