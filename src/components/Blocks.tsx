import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Faq } from '@/data/faqs';
import { ArrowUpRight } from './Icons';
import hero from '@/img/hero-lagoa-comprida.jpg';

/**
 * Pré-visualização da foto (32 px, já desfocada) enquanto a original carrega.
 * Substitui o placeholder="blur" do next/image, que desenha um SVG com
 * feGaussianBlur em ecrã inteiro e bloqueava a thread principal em CPUs lentos.
 */
const HERO_PREVIEW = 'data:image/jpeg;base64,/9j/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAVACADASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBBAUG/8QAIRAAAgICAgEFAAAAAAAAAAAAAQIAEQMEEiEFExQyM0H/xAAXAQEBAQEAAAAAAAAAAAAAAAACBAED/8QAGxEAAwACAwAAAAAAAAAAAAAAAAECAyERMVH/2gAMAwEAAhEDEQA/AOWCMrTS1l9WlYzOXYYn67lvWGV2+JSVKk+iVx6O2NXiepX9o92BG7IyYzTPcE2HRemiVcBeNMnxGNM2yqsooC4zbYtkajxAP5CEE7Z1rUlLIzA9m4vI5EITWFH/2Q==';

/** A fotografia do hero, servida localmente a partir do original do Unsplash. */
export function HeroFoto({ priority = false }: { priority?: boolean }) {
  return (
    <Image
      src={hero}
      alt=""
      className="hero-bg"
      priority={priority}
      // O next/image faz o preload, mas nao marca a prioridade na propria tag.
      fetchPriority={priority ? 'high' : undefined}
      sizes="100vw"
      placeholder={HERO_PREVIEW}
      aria-hidden="true"
    />
  );
}

/** Hero grande, só na página inicial. */
export function Hero({ children }: { children: ReactNode }) {
  return (
    <div className="wrap">
      <section className="hero" id="topo">
        <HeroFoto priority />
        {children}
      </section>
    </div>
  );
}

/** Hero curto das páginas interiores, com caminho de navegação. */
export function HeroSm({
  caminho,
  titulo,
  destaque,
  descricao,
  acoes = 'orcamento-whatsapp',
  lang = 'pt',
}: {
  lang?: 'pt' | 'en';
  caminho: { label: string; href?: string }[];
  titulo: string;
  destaque?: string;
  descricao: string;
  acoes?: 'orcamento-whatsapp' | 'nenhuma';
}) {
  return (
    <div className="wrap">
      <section className="hero hero-sm" id="topo">
        <HeroFoto priority />
        <div className="hero-body">
          <div>
            <nav className="crumb" aria-label={lang === 'en' ? 'Breadcrumb' : 'Caminho'}>
              <Link href={lang === 'en' ? '/en' : '/'}>{lang === 'en' ? 'Home' : 'Início'}</Link>
              {caminho.map((c) => (
                <span key={c.label} style={{ display: 'contents' }}>
                  <span>/</span>
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
                </span>
              ))}
            </nav>
            <h1>
              {titulo} {destaque && <span>{destaque}</span>}
            </h1>
          </div>
          <div className="hero-side">
            <p>{descricao}</p>
            {acoes === 'orcamento-whatsapp' && (
              <div className="ctas">
                <a href="#orcamento" className="btn btn-light">
                  {lang === 'en' ? 'Free proposal' : 'Proposta gratuita'}{' '}
                  <span className="ic">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
                <a href="#whatsapp" data-wa className="btn btn-ghost">
                  WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

/** Cabeçalho de secção: etiqueta + título (+ texto à direita). */
export function SectionHead({
  etiqueta,
  titulo,
  destaque,
  children,
}: {
  etiqueta: string;
  titulo?: string;
  destaque?: string;
  children?: ReactNode;
}) {
  return (
    <div className="sec-head">
      <div>
        <span className="label">
          <i />
          {etiqueta}
        </span>
        {titulo && (
          <h2>
            {titulo} {destaque && <span>{destaque}</span>}
          </h2>
        )}
      </div>
      {children}
    </div>
  );
}

/** Perguntas frequentes. A primeira abre por omissão, como no protótipo. */
export function Faqs({ etiqueta = 'Perguntas frequentes', titulo, destaque, itens }: {
  etiqueta?: string;
  titulo: string;
  destaque?: string;
  itens: Faq[];
}) {
  return (
    <section className="sec">
      <div className="faq">
        <div>
          <span className="label">
            <i />
            {etiqueta}
          </span>
          <h2>
            {titulo} {destaque && <span>{destaque}</span>}
          </h2>
        </div>
        <div>
          {itens.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Bloco "Próximo passo" no fim das páginas interiores.
 * O footer novo já abre com "Comece por uma proposta gratuita", por isso deixou de ser preciso.
 */
export function NextStep() {
  return null;
}

/** Aviso de carrossel horizontal, visível apenas em telemóvel. */
export function Swipe() {
  return (
    <div className="swipe">
      Deslize para ver mais{' '}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </div>
  );
}

/** Dados estruturados. O conteúdo vem sempre do código, nunca do visitante. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
