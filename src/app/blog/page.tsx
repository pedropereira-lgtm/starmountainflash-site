import Link from 'next/link';
import type { Metadata } from 'next';
import { HeroSm, JsonLd, NextStep, SectionHead } from '@/components/Blocks';
import { dataPt, todosOsPosts } from '@/lib/posts';
import { site } from '@/data/site';
import { meta, migalhasLd } from '@/lib/seo';

const TITULO = 'Blog | Starmountain Flash';
const DESCRICAO = 'Artigos práticos sobre websites, SEO, GEO e automação para PME portuguesas.';

export const metadata: Metadata = meta({ titulo: TITULO, descricao: DESCRICAO, caminho: '/blog' });

/** Enquanto não houver artigos publicados, mostram-se os temas a caminho. */
const emBreve = [
  {
    cat: 'Websites',
    titulo: 'Quanto custa um site para uma PME em Portugal?',
    texto: 'O que faz variar o preço, o que deve estar incluído e as perguntas a fazer antes de aceitar um orçamento.',
  },
  {
    cat: 'SEO e IA',
    titulo: 'O que é GEO e porque é que o seu site precisa de aparecer no ChatGPT',
    texto: 'Os clientes já não pesquisam só no Google. Como preparar o site para ser recomendado por motores de IA.',
  },
  {
    cat: 'Automação',
    titulo: 'Cinco tarefas que qualquer PME pode automatizar este mês',
    texto: 'Exemplos concretos de trabalho repetitivo que pode deixar de ser feito à mão, sem mudar de ferramentas.',
  },
  {
    cat: 'Lojas online',
    titulo: 'Shopify ou loja à medida: como escolher',
    texto: 'Custos mensais, facilidade de gestão e quando cada opção faz sentido para uma marca portuguesa.',
  },
];

export default function Blog() {
  const posts = todosOsPosts();

  return (
    <>
      <HeroSm
        caminho={[{ label: 'Blog' }]}
        titulo="Notas sobre sites e automação."
        destaque="Para quem gere uma PME."
        descricao="Artigos práticos sobre websites, SEO, motores de IA e automação, sem jargão."
        acoes="nenhuma"
      />

      <section className="sec">
        <SectionHead
          etiqueta="Artigos"
          titulo={posts.length ? 'Publicados.' : 'Brevemente.'}
          destaque={posts.length ? 'Os mais recentes primeiro.' : 'Os primeiros temas.'}
        >
          <p>Artigos curtos e práticos, escritos para quem gere uma PME e não tem tempo a perder.</p>
        </SectionHead>

        <div className="posts">
          {posts.length
            ? posts.map((p) => (
                <Link className="post" href={'/blog/' + p.slug} key={p.slug}>
                  <span className="d">{dataPt(p.data)}</span>
                  <div>
                    <h3>{p.titulo}</h3>
                    <p>{p.descricao}</p>
                  </div>
                  <span className="cat">{p.categoria}</span>
                </Link>
              ))
            : emBreve.map((p) => (
                <article className="post" key={p.titulo}>
                  <span className="d">{p.cat}</span>
                  <div>
                    <h3>{p.titulo}</h3>
                    <p>{p.texto}</p>
                  </div>
                  <span className="soon">Em breve</span>
                </article>
              ))}
        </div>
      </section>

      {posts.length > 0 && <NextStep />}

      <JsonLd
        data={[
          migalhasLd([{ nome: 'Blog', caminho: '/blog' }]),
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            '@id': site.url + '/blog#blog',
            name: 'Blog da Starmountain Flash',
            description: DESCRICAO,
            url: site.url + '/blog',
            publisher: { '@id': site.url + '/#negocio' },
            blogPost: posts.map((p) => ({
              '@type': 'BlogPosting',
              headline: p.titulo,
              url: site.url + '/blog/' + p.slug,
              datePublished: p.data,
            })),
          },
        ]}
      />
    </>
  );
}
