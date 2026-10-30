import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { HeroSm, JsonLd, NextStep, SectionHead } from '@/components/Blocks';
import { Mockup, Screenshots } from '@/components/Mostras';
import { SIZES_CARTAO, Shot } from '@/components/Trabalhos';
import { ArrowRight, ArrowUpRight } from '@/components/Icons';
import type { Construcao, Cor, Fonte, SiteDoCaso } from '@/data/casos';
import { casosEn, trabalhoEn, trabalhoPorSlugEn } from '@/data/casos-en';
import { proximoTrabalho, trabalhosPublicados } from '@/data/trabalhos';
import { testemunhos } from '@/data/testemunhos';
import { imagem } from '@/lib/imagens';
import { meta, migalhasLd } from '@/lib/seo';

/** Only published work gets a page. */
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
  const caso = casosEn[slug];
  if (!caso) return {};
  return meta({
    titulo: caso.titulo,
    descricao: caso.descricao,
    caminho: '/en/trabalhos/' + slug,
    lang: 'en',
    alternativo: { pt: '/trabalhos/' + slug, en: '/en/trabalhos/' + slug },
  });
}

function Amostras({ cores }: { cores: Cor[] }) {
  return (
    <div className="swatches">
      {cores.map((c) => (
        <div className={c.gradiente ? 'sw grad' : 'sw'} key={c.nome}>
          <span style={{ background: c.gradiente ?? c.hex }} />
          <strong>{c.nome}</strong>
          {c.hex && <em>{c.hex}</em>}
        </div>
      ))}
    </div>
  );
}

function Tipografia({ fontes }: { fontes: Fonte[] }) {
  return (
    <div className="fonts">
      {fontes.map((f) => (
        <div className="fo" key={f.nome}>
          <span className="aa">Aa</span>
          <strong>{f.nome}</strong>
          <em>{f.papel}</em>
        </div>
      ))}
    </div>
  );
}

/** One sub-section per website, when the case covers more than one. */
function SubSite({ s }: { s: SiteDoCaso }) {
  return (
    <article className="site" id={s.id}>
      <div className="site-head">
        <div>
          <h3>{s.nome}</h3>
          <a className="url" href={s.href} target="_blank" rel="noopener">
            {s.dominio} <ArrowUpRight size={13} stroke="currentColor" width={2} />
          </a>
        </div>
        <div>
          <p>{s.descricao}</p>
          {s.destaques && s.destaques.length > 0 && (
            <ul>
              {s.destaques.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          )}
          {s.estrutura && s.estrutura.length > 0 && (
            <div className="site-estrutura">
              {s.estrutura.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      <Mockup src={s.mockup} alt={`${s.nome} on desktop and mobile`} />
      <Screenshots desktop={s.desktop} mobile={s.mobile} dominio={s.dominio} nome={s.nome} lang="en" />

      {(s.cores || s.fontes) && (
        <div className="site-ficha">
          {s.cores && s.cores.length > 0 ? <Amostras cores={s.cores} /> : <div />}
          {s.fontes && s.fontes.length > 0 && <Tipografia fontes={s.fontes} />}
        </div>
      )}
    </article>
  );
}

/** The co-author's review, highlighted after the book's website. The quote stays in Portuguese. */
function TestemunhoDestacado({ nome, legenda }: { nome: string; legenda: string }) {
  const t = testemunhos.find((x) => x.nome === nome);
  if (!t) return null;
  return (
    <div className="destaque-q">
      <div>
        {t.titulo && (
          <p className="qt" lang="pt-PT">
            {t.titulo}
          </p>
        )}
        <a className="src" href={t.link} target="_blank" rel="noopener">
          Read the review <ArrowUpRight size={13} stroke="currentColor" width={2} />
        </a>
      </div>
      <div>
        <blockquote lang="pt-PT">{t.texto}</blockquote>
        <div className="who">
          <span className="av">{t.iniciais}</span>
          <div>
            <strong>{t.nome}</strong>
            <span>{legenda}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConstrucaoBlocos({ c }: { c: Construcao }) {
  return (
    <div className="cons">
      <dl className="cons-nums">
        {c.numeros.map((n) => (
          <div key={n.legenda}>
            <dt>{n.valor}</dt>
            <dd>{n.legenda}</dd>
          </div>
        ))}
      </dl>

      {c.fases && c.fases.length > 0 && (
        <ol className="cons-fases">
          {c.fases.map((f) => (
            <li key={f.nome}>
              <span>{f.titulo}</span>
              <strong>{f.nome}</strong>
              <p>{f.texto}</p>
            </li>
          ))}
        </ol>
      )}

      <div className="cons-blocos">
        {c.blocos.map((b) => (
          <article key={b.titulo}>
            <h3>{b.titulo}</h3>
            <p>{b.texto}</p>
            {b.pontos && (
              <ul>
                {b.pontos.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
            {b.stack && (
              <div className="cons-stack">
                {b.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export default async function CasoEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caso = casosEn[slug];
  const trabalho = trabalhoPorSlugEn(slug);
  if (!caso || !trabalho || !trabalho.published) notFound();

  const proximo = trabalhoEn(proximoTrabalho(slug));
  const temMockupTopo = Boolean(imagem(caso.mockupTopo));
  const temIdentidade = Boolean(caso.cores?.length || caso.fontes?.length);
  const temEstrutura = Boolean(caso.estrutura?.length);

  return (
    <>
      <HeroSm
        lang="en"
        caminho={[{ label: 'Work', href: '/en#trabalhos' }, { label: trabalho.nome }]}
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
        <div style={{ marginTop: 28 }}>
          {temMockupTopo ? (
            <Mockup src={caso.mockupTopo} alt={`${trabalho.nome} on desktop and mobile`} />
          ) : (
            // Without a mockup, the prototype's browser frame with the brand is shown.
            <div className="proj wide">
              <div className="browser">
                <div className="bar">
                  <i />
                  <i />
                  <i />
                  <em>{trabalho.dominio}</em>
                </div>
                <Shot t={trabalho} grande sizes={SIZES_CARTAO.largo} lang="en" />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="sec">
        <div className="story">
          <div>
            <span className="label">
              <i />The challenge
            </span>
            <p>{caso.desafio}</p>
          </div>
          <div>
            <span className="label">
              <i />The solution
            </span>
            <p>{caso.solucao}</p>
          </div>
          <div>
            <span className="label">
              <i />The result
            </span>
            <p>{caso.resultado}</p>
          </div>
        </div>
      </section>

      {/* Screenshots of the main page, for single-website cases. */}
      {(caso.desktop || caso.mobile) && (
        <section className="sec">
          <Screenshots
            desktop={caso.desktop}
            mobile={caso.mobile}
            dominio={trabalho.dominio}
            nome={trabalho.nome}
            lang="en"
          />
        </section>
      )}

      {caso.construcao && (
        <section className="sec">
          <SectionHead etiqueta="Inside the code" titulo={caso.construcao.titulo} destaque={caso.construcao.destaque} />
          <ConstrucaoBlocos c={caso.construcao} />
        </section>
      )}

      {caso.seccoesExtra?.map((e) => (
        <section className="sec" key={e.etiqueta}>
          <SectionHead etiqueta={e.etiqueta} titulo={e.titulo} destaque={e.destaque}>
            {e.descricao && <p>{e.descricao}</p>}
          </SectionHead>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Mockup src={e.mockup} alt={`${e.nome} on desktop and mobile`} />
            <Screenshots desktop={e.desktop} mobile={e.mobile} dominio={e.dominio} nome={e.nome} lang="en" />
          </div>
        </section>
      ))}

      {/* A case with several websites: one sub-section for each. */}
      {caso.sites && caso.sites.length > 0 && (
        <section className="sec">
          <SectionHead etiqueta="The websites" titulo="One by one." destaque="Each initiative with its own identity." />
          <div className="sites">
            {caso.sites.map((s) => (
              <div key={s.id}>
                <SubSite s={s} />
                {caso.testemunhoDepoisDe === s.id && caso.testemunhoNome && caso.testemunhoLegenda && (
                  <TestemunhoDestacado nome={caso.testemunhoNome} legenda={caso.testemunhoLegenda} />
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {temIdentidade && (
        <section className="sec">
          <SectionHead etiqueta="Visual identity" titulo="Colours and typography." destaque="The project's choices." />
          <div className="ident">
            {caso.cores && caso.cores.length > 0 ? <Amostras cores={caso.cores} /> : <div />}
            {caso.fontes && caso.fontes.length > 0 && <Tipografia fontes={caso.fontes} />}
          </div>
        </section>
      )}

      <section className="sec">
        <div className={temEstrutura ? 'cgrid' : undefined}>
          {temEstrutura && (
            <div className="cbox">
              <span className="label">
                <i />
                Structure
              </span>
              <ol className="cpages">
                {caso.estrutura!.map((p, i) => (
                  <li key={p + i}>
                    <i>{String(i + 1).padStart(2, '0')}</i>
                    {p}
                  </li>
                ))}
              </ol>
            </div>
          )}
          <div className="cbox dk">
            <span className="label">
              <i />
              Technology
            </span>
            <ul className="cstack">
              {caso.tecnologia.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="visitas">
              {caso.visitar.map((v) => (
                <a href={v.href} target="_blank" rel="noopener" className="btn btn-light" key={v.href}>
                  {v.label}{' '}
                  <span className="ic">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <Link className="nextc" href={'/en/trabalhos/' + proximo.slug}>
          <span className="label">
            <i />
            Next project
          </span>
          <strong>{proximo.nome}</strong>
          <ArrowRight />
        </Link>
      </section>

      <NextStep />

      <JsonLd
        data={migalhasLd(
          [
            { nome: 'Work', caminho: '/en#trabalhos' },
            { nome: trabalho.nome, caminho: '/en/trabalhos/' + slug },
          ],
          'en',
        )}
      />
    </>
  );
}
