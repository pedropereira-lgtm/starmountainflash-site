import Link from 'next/link';
import type { Metadata } from 'next';
import { HeroSm, SectionHead } from '@/components/Blocks';
import { ArrowRight } from '@/components/Icons';
import { nomesPublicados } from '@/data/trabalhos';

export const metadata: Metadata = {
  title: 'Página não encontrada | Starmountain Flash',
  description: 'Esta página não existe. Veja os serviços, os trabalhos ou fale diretamente comigo.',
  robots: { index: false, follow: true },
};

const atalhos = [
  { href: '/websites', titulo: 'Websites', texto: 'Landing pages e sites institucionais para PME.' },
  { href: '/lojas-online', titulo: 'Lojas online', texto: 'Shopify ou à medida, prontas a vender.' },
  { href: '/automacoes', titulo: 'Automações de IA', texto: 'O trabalho repetitivo a fazer-se sozinho.' },
  { href: '/#trabalhos', titulo: 'Trabalhos', texto: nomesPublicados() + '.' },
  { href: '/metodo', titulo: 'Método', texto: 'Três fases, prazo fixo e preço fechado.' },
  { href: '/blog', titulo: 'Blog', texto: 'Notas sobre sites, SEO e automação.' },
];

export default function NaoEncontrada() {
  return (
    <>
      <HeroSm
        caminho={[{ label: 'Página não encontrada' }]}
        titulo="Erro 404."
        destaque="Esta página não existe."
        descricao="O endereço pode estar mal escrito ou a página pode ter mudado de sítio. Deixo aqui os caminhos mais usados."
        acoes="nenhuma"
      />

      <section className="sec">
        <SectionHead etiqueta="Para onde ir" titulo="Talvez procurasse" destaque="uma destas." />
        <div className="related">
          {atalhos.map((a) => (
            <Link href={a.href} key={a.href}>
              <h3>{a.titulo}</h3>
              <p>{a.texto}</p>
              <span className="d">
                Ir <ArrowRight />
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
          <h3>Não encontrou o que procurava?</h3>
          <p>
            Diga-me o que precisa e respondo com uma proposta por escrito.{' '}
            <a href="#orcamento" style={{ color: 'var(--emerald)', borderBottom: '1px solid' }}>
              Pedir orçamento →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
