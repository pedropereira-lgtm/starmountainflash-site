import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { HeroSm, JsonLd, NextStep, SectionHead } from '@/components/Blocks';
import { Marca } from '@/components/Trabalhos';
import { ArrowRight, ArrowUpRight } from '@/components/Icons';
import { AMOSTRA_VAZIA, casos } from '@/data/casos';
import { proximoTrabalho, trabalhosPublicados, trabalhoPorSlug } from '@/data/trabalhos';
import { meta, migalhasLd } from '@/lib/seo';

/** Só os trabalhos publicados geram página. */
export function generateStaticParams() {
  return trabalhosPublicados.map((t) => ({ slug: t.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caso = casos[slug];
  if (!caso) return {};
  return meta({ titulo: caso.titulo, descricao: caso.descricao, caminho: '/trabalhos/' + slug });
}

export default async function Caso({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caso = casos[slug];
  const trabalho = trabalhoPorSlug(slug);
  if (!caso || !trabalho || !trabalho.published) notFound();

  const proximo = proximoTrabalho(slug);

  return (
    <>
      <HeroSm
        caminho={[{ label: 'Trabalhos', href: '/#trabalhos' }, { label: trabalho.nome }]}
        titulo={caso.h1}
        destaque={caso.h1Destaque}
        descricao={caso.intro}
        acoes="nenhuma"
      />

      <section className="sec">
        <dl className="cmeta">
          {caso.ficha.map((f) => (
            <div key={f.dt}>
              <dt>{f.dt}</dt>
              <dd>{f.dd}</dd>
            </div>
          ))}
        </dl>
        <div className="proj wide" style={{ marginTop: 28 }}>
          <div className="browser">
            <div className="bar">
              <i />
              <i />
              <i />
              <em>{trabalho.dominio}</em>
            </div>
            <div className="shot big">
              <Marca marca={trabalho.marca} />
            </div>
          </div>
        </div>
        {/* Por substituir quando houver screenshot real em public/img. */}
        <p className="shot-note">Screenshot do site por inserir.</p>
      </section>

      <section className="sec">
        <div className="story">
          <div>
            <span className="label">
              <i />O desafio
            </span>
            <p>{caso.desafio}</p>
          </div>
          <div>
            <span className="label">
              <i />A solução
            </span>
            <p>{caso.solucao}</p>
          </div>
          <div>
            <span className="label">
              <i />O resultado
            </span>
            <p>{caso.resultado}</p>
          </div>
        </div>
      </section>

      <section className="sec">
        <SectionHead etiqueta="Identidade visual" titulo="Cores e tipografia." destaque="As escolhas do projeto." />
        <div className="ident">
          <div className="swatches">
            {caso.cores.map((c) => (
              <div className="sw" key={c.nome}>
                <span style={{ background: c.hex ?? AMOSTRA_VAZIA }} />
                <strong>{c.nome}</strong>
                <em>{c.hex ?? '[#HEX]'}</em>
              </div>
            ))}
          </div>
          <div className="fonts">
            <div className="fo">
              <span className="aa">Aa</span>
              <strong>{caso.fontes.titulos}</strong>
              <em>Títulos</em>
            </div>
            <div className="fo">
              <span className="aa">Aa</span>
              <strong>{caso.fontes.texto}</strong>
              <em>Texto corrido</em>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="cgrid">
          <div className="cbox">
            <span className="label">
              <i />
              Estrutura
            </span>
            <ol className="cpages">
              {caso.estrutura.map((p, i) => (
                <li key={p + i}>
                  <i>{String(i + 1).padStart(2, '0')}</i>
                  {p}
                </li>
              ))}
            </ol>
          </div>
          <div className="cbox dk">
            <span className="label">
              <i />
              Tecnologia
            </span>
            <ul className="cstack">
              {caso.tecnologia.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <a
              href={caso.visitar}
              target="_blank"
              rel="noopener"
              className="btn btn-light"
              style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
            >
              Visitar o site{' '}
              <span className="ic">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <Link className="nextc" href={'/trabalhos/' + proximo.slug}>
          <span className="label">
            <i />
            Próximo trabalho
          </span>
          <strong>{proximo.nome}</strong>
          <ArrowRight />
        </Link>
      </section>

      <NextStep />

      <JsonLd
        data={migalhasLd([
          { nome: 'Trabalhos', caminho: '/#trabalhos' },
          { nome: trabalho.nome, caminho: '/trabalhos/' + slug },
        ])}
      />
    </>
  );
}
