import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Faq } from '@/data/faqs';
import { ArrowUpRight, CornerArrow, WhatsAppGlyph } from './Icons';
import Nav from './Nav';
import hero from '@/img/hero-lagoa-comprida.jpg';

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
      placeholder="blur"
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
        <Nav />
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
}: {
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
        <Nav />
        <div className="hero-body">
          <div>
            <nav className="crumb" aria-label="Caminho">
              <Link href="/">Início</Link>
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
                  Pedir orçamento{' '}
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

/** Bloco "Próximo passo" no fim das páginas interiores. */
export function NextStep() {
  return (
    <section className="endcta">
      <div className="sec">
        <div className="igh">
          <div>
            <strong>Starmountain Flash</strong>
            <span>Websites e automação</span>
          </div>
          <CornerArrow />
        </div>
        <div>
          <span className="label">
            <i />
            Próximo passo
          </span>
          <h2>
            Vamos falar do seu projeto? <span>Prazo fixo. Preço fechado.</span>
          </h2>
        </div>
        <div className="btns">
          <a href="#orcamento" className="btn btn-light">
            Pedir orçamento{' '}
            <span className="ic">
              <ArrowUpRight size={16} />
            </span>
          </a>
          <a href="#whatsapp" data-wa className="btn btn-wa">
            WhatsApp{' '}
            <span className="ic">
              <WhatsAppGlyph size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
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
