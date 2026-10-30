'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HeroSm, SectionHead } from '@/components/Blocks';
import { ArrowRight } from '@/components/Icons';

/** Conteúdo da página 404, em inglês quando o endereço começa por /en. */
export default function NaoEncontrada({ trabalhos }: { trabalhos: string }) {
  // A 404 é gerada uma vez (em português); a língua decide-se depois de abrir, pelo endereço.
  const caminho = usePathname();
  const [en, setEn] = useState(false);
  useEffect(() => setEn(window.location.pathname.startsWith('/en')), [caminho]);

  useEffect(() => {
    if (!en) return;
    document.documentElement.lang = 'en';
    document.documentElement.dataset.lang = 'en';
    document.title = 'Page not found | Starmountain Flash';
  }, [en]);

  const atalhos = en
    ? [
        { href: '/en/websites', titulo: 'Websites', texto: 'Landing pages and company websites.' },
        { href: '/en/lojas-online', titulo: 'Online stores', texto: 'Shopify or custom-built, ready to sell.' },
        { href: '/en/automacoes', titulo: 'Custom automations', texto: 'Repetitive work running on its own.' },
        { href: '/en#trabalhos', titulo: 'Work', texto: trabalhos + '.' },
        { href: '/en/metodo', titulo: 'Method', texto: 'Three phases, starting with a free visual proposal.' },
        { href: '/en/blog', titulo: 'Blog', texto: 'Notes on websites, SEO and automation.' },
      ]
    : [
        { href: '/websites', titulo: 'Websites', texto: 'Landing pages e sites institucionais.' },
        { href: '/lojas-online', titulo: 'Lojas online', texto: 'Shopify ou à medida, prontas a vender.' },
        { href: '/automacoes', titulo: 'Automações à medida', texto: 'O trabalho repetitivo a fazer-se sozinho.' },
        { href: '/#trabalhos', titulo: 'Trabalhos', texto: trabalhos + '.' },
        { href: '/metodo', titulo: 'Método', texto: 'Três fases, a começar por uma proposta visual gratuita.' },
        { href: '/blog', titulo: 'Blog', texto: 'Notas sobre sites, SEO e automação.' },
      ];

  return (
    <>
      <HeroSm
        lang={en ? 'en' : 'pt'}
        caminho={[{ label: en ? 'Page not found' : 'Página não encontrada' }]}
        titulo={en ? 'Error 404.' : 'Erro 404.'}
        destaque={en ? "This page doesn't exist." : 'Esta página não existe.'}
        descricao={
          en
            ? 'The address may be mistyped or the page may have moved. Here are the most visited places.'
            : 'O endereço pode estar mal escrito ou a página pode ter mudado de sítio. Deixo aqui os caminhos mais usados.'
        }
        acoes="nenhuma"
      />

      <section className="sec">
        <SectionHead
          etiqueta={en ? 'Where to go' : 'Para onde ir'}
          titulo={en ? 'Perhaps you were looking for' : 'Talvez procurasse'}
          destaque={en ? 'one of these.' : 'uma destas.'}
        />
        <div className="related">
          {atalhos.map((a) => (
            <Link href={a.href} key={a.href}>
              <h3>{a.titulo}</h3>
              <p>{a.texto}</p>
              <span className="d">
                {en ? 'Go' : 'Ir'} <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="note">
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="#0E4B35" strokeWidth="3" strokeLinecap="square">
            <path d="M5 18 L16 7 L27 18" />
            <path d="M5 27 L16 16 L27 27" />
          </svg>
          <h3>{en ? "Didn't find what you were looking for?" : 'Não encontrou o que procurava?'}</h3>
          <p>
            {en
              ? 'Tell me what you need and start with a free visual proposal. '
              : 'Diga-me o que precisa e comece por uma proposta visual gratuita. '}
            <a href="#orcamento" style={{ color: 'var(--emerald)', borderBottom: '1px solid' }}>
              {en ? 'Free proposal →' : 'Proposta gratuita →'}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
