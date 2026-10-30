import Link from 'next/link';
import type { Metadata } from 'next';
import { HeroSm, JsonLd, NextStep, SectionHead } from '@/components/Blocks';
import { CATEGORIA_EN, dataEn, todosOsPosts } from '@/lib/posts';
import { site } from '@/data/site';
import { meta, migalhasLd } from '@/lib/seo';

const TITULO = 'Blog | Starmountain Flash';
const DESCRICAO = 'Practical articles on websites, SEO, GEO and automation for companies in Portugal.';

export const metadata: Metadata = meta({ titulo: TITULO, descricao: DESCRICAO, caminho: '/en/blog', lang: 'en', alternativo: { pt: '/blog', en: '/en/blog' } });

/** Enquanto não houver artigos publicados, mostram-se os temas a caminho. */
const emBreve: { cat: string; titulo: string; texto: string }[] = [];

export default function BlogEn() {
  const posts = todosOsPosts('en');

  return (
    <>
      <HeroSm
        lang="en"
        caminho={[{ label: 'Blog' }]}
        titulo="Notes on websites and automation."
        destaque="For people running a business."
        descricao="Practical articles on websites, SEO, AI engines and automation, without the jargon."
        acoes="nenhuma"
      />

      <section className="sec">
        <SectionHead
          etiqueta="Articles"
          titulo={posts.length ? 'Published.' : 'Coming soon.'}
          destaque={posts.length ? 'Most recent first.' : 'The first topics.'}
        >
          <p>Short, practical articles for people who run a business and have no time to waste.</p>
        </SectionHead>

        <div className="posts">
          {posts.length
            ? posts.map((p) => (
                <Link className="post" href={'/en/blog/' + p.slug} key={p.slug}>
                  <span className="d">{dataEn(p.data)}</span>
                  <div>
                    <h3>{p.titulo}</h3>
                    <p>{p.descricao}</p>
                  </div>
                  <span className="cat">{CATEGORIA_EN[p.categoria]}</span>
                </Link>
              ))
            : emBreve.map((p) => (
                <article className="post" key={p.titulo}>
                  <span className="d">{p.cat}</span>
                  <div>
                    <h3>{p.titulo}</h3>
                    <p>{p.texto}</p>
                  </div>
                  <span className="soon">Coming soon</span>
                </article>
              ))}
        </div>
      </section>

      {posts.length > 0 && <NextStep />}

      <JsonLd
        data={[
          migalhasLd([{ nome: 'Blog', caminho: '/en/blog' }], 'en'),
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            '@id': site.url + '/en/blog#blog',
            name: 'Starmountain Flash blog',
            inLanguage: 'en',
            description: DESCRICAO,
            url: site.url + '/en/blog',
            publisher: { '@id': site.url + '/#negocio' },
            blogPost: posts.map((p) => ({
              '@type': 'BlogPosting',
              headline: p.titulo,
              url: site.url + '/en/blog/' + p.slug,
              datePublished: p.data,
            })),
          },
        ]}
      />
    </>
  );
}
