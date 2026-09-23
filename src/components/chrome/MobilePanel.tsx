'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { navServicos, site } from '@/data/site';
import { nomesPublicados } from '@/data/trabalhos';
import { ArrowUpRight, Close, Logo, Mail, PanelArrow, Phone, WhatsAppGlyph } from '../Icons';
import LocalTime from './LocalTime';

/** As quatro entradas do menu. "Serviços" abre no sítio, para não perder as páginas. */
const principais = [
  { href: '/#trabalhos', titulo: 'Trabalhos', sub: nomesPublicados(true) },
  { href: '/sobre', titulo: 'Sobre', sub: 'O contabilista que automatiza' },
  { href: '/blog', titulo: 'Blog', sub: 'Sites, SEO e automação para PME' },
];

export default function MobilePanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const servicos = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (open) closeRef.current?.focus();
    // Cada abertura do menu recomeça com os serviços fechados.
    else if (servicos.current) servicos.current.open = false;
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
        <details className="m-svc" ref={servicos}>
          <summary>
            <strong>Serviços</strong>
            <small>Websites, lojas online e automações de IA</small>
          </summary>
          <div className="m-sub">
            {navServicos.map((s) => (
              <Link href={s.href} key={s.href} onClick={onClose}>
                <strong>{s.titulo}</strong>
                <small>{s.sub}</small>
                <PanelArrow />
              </Link>
            ))}
          </div>
        </details>

        {principais.map((l) => (
          <Link href={l.href} key={l.href} onClick={onClose}>
            <strong>{l.titulo}</strong>
            <small>{l.sub}</small>
            <PanelArrow />
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
