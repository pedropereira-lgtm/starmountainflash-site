import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Faqs, HeroSm, JsonLd, NextStep, SectionHead } from '@/components/Blocks';
import { OG_PADRAO, faqLd, meta, migalhasLd, pessoaLd } from '@/lib/seo';
import { site } from '@/data/site';
import {
  dataPt,
  indice,
  paraHtml,
  postPorSlug,
  relacionados,
  temIndice,
  tempoDeLeitura,
  todosOsPosts,
} from '@/lib/posts';

export function generateStaticParams() {
  return todosOsPosts().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = postPorSlug(slug);
  if (!post) return {};
  return meta({
    titulo: post.titulo + ' | Starmountain Flash',
    descricao: post.descricao,
    caminho: '/blog/' + post.slug,
    imagem: post.capa || OG_PADRAO,
    tipo: 'article',
    publicadoEm: post.data,
  });
}

export default async function Artigo({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postPorSlug(slug);
  if (!post) notFound();

  const html = await paraHtml(post.markdown);
  const titulos = indice(post.markdown);
  const mostrarIndice = temIndice(post.markdown);
  const minutos = tempoDeLeitura(post.markdown);
  const outros = relacionados(post);
  const url = site.url + '/blog/' + post.slug;

  return (
    <>
      <HeroSm
        caminho={[{ label: 'Blog', href: '/blog' }, { label: post.titulo }]}
        titulo={post.titulo}
        descricao={post.descricao}
        acoes="nenhuma"
      />

      <section className="sec">
        <div className="art">
          <aside className="art-side">
            <Link href="/sobre" className="author">
              <Image src="/img/pedro-avatar.jpg" alt="Pedro Pereira" width={128} height={128} />
              <span>
                <strong>Pedro Pereira</strong>
                <span>Starmountain Flash</span>
              </span>
            </Link>
            <div className="art-meta">
              <time dateTime={post.data}>{dataPt(post.data)}</time>
              <span>{minutos} min de leitura</span>
              <span>{post.categoria}</span>
            </div>
            {mostrarIndice && (
              <nav className="toc" aria-label="Índice do artigo">
                <h2>Neste artigo</h2>
                <ol>
                  {titulos.map((t) => (
                    <li key={t.id} className={t.nivel === 3 ? 'lv3' : undefined}>
                      <a href={'#' + t.id}>{t.texto}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
          </aside>

          <div>
            {post.capa && (
              <figure className="cover">
                <Image src={post.capa} alt={post.capaAlt || ''} width={1600} height={900} priority sizes="(max-width: 960px) 100vw, 60vw" />
                {post.capaAlt && <figcaption>{post.capaAlt}</figcaption>}
              </figure>
            )}
            {/* O Markdown vem dos ficheiros do repositório, escritos no /admin. */}
            <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </section>

      {post.faq.length > 0 && (
        <Faqs
          titulo="Sobre este tema."
          destaque="Em poucas palavras."
          itens={post.faq.map((f) => ({ q: f.pergunta, a: f.resposta }))}
        />
      )}

      {outros.length > 0 && (
        <section className="sec">
          <SectionHead etiqueta="Continuar a ler" titulo="Artigos relacionados." />
          <div className="related">
            {outros.map((p) => (
              <Link href={'/blog/' + p.slug} key={p.slug}>
                <span className="cat">{p.categoria}</span>
                <h3>{p.titulo}</h3>
                <p>{p.descricao}</p>
                <span className="d">{dataPt(p.data)}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <NextStep />

      <JsonLd
        data={[
          migalhasLd([
            { nome: 'Blog', caminho: '/blog' },
            { nome: post.titulo, caminho: '/blog/' + post.slug },
          ]),
          pessoaLd,
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            '@id': url + '#artigo',
            headline: post.titulo,
            description: post.descricao,
            url,
            mainEntityOfPage: url,
            datePublished: post.data,
            dateModified: post.data,
            articleSection: post.categoria,
            inLanguage: 'pt-PT',
            wordCount: post.markdown.trim().split(/\s+/).filter(Boolean).length,
            author: { '@id': site.url + '/sobre#pedro-pereira' },
            publisher: { '@id': site.url + '/#negocio' },
            image: site.url + (post.capa || OG_PADRAO),
            isPartOf: { '@id': site.url + '/blog#blog' },
          },
          ...(post.faq.length > 0 ? [faqLd(post.faq.map((f) => ({ q: f.pergunta, a: f.resposta })))] : []),
        ]}
      />
    </>
  );
}
