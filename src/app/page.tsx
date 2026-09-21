import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Faqs, Hero, JsonLd, SectionHead, Swipe } from '@/components/Blocks';
import ContactForm from '@/components/ContactForm';
import TrabalhosGrid, { Marca } from '@/components/Trabalhos';
import { ArrowRight, ArrowUpRight, CornerArrow, Logo } from '@/components/Icons';
import { servicos } from '@/data/servicos';
import { faqsHome } from '@/data/faqs';
import { testemunhos } from '@/data/testemunhos';
import { trabalhosPublicados } from '@/data/trabalhos';
import { site } from '@/data/site';
import { faqLd, meta } from '@/lib/seo';

export const metadata: Metadata = meta({
  titulo: 'Starmountain Flash — Websites e automações de IA para PME',
  descricao:
    'Websites, lojas online e automações de IA para PME e marcas portuguesas. Prazo fixo e preço fechado. Covilhã, Serra da Estrela.',
  caminho: '/',
});

const numeros = [
  { n: '7', t: 'Projetos entregues', p: 'Sites, landing pages e plataformas já no ar.' },
  { n: '2', t: 'Serviços, feitos a fundo', p: 'Websites e automações de IA. Nada mais, para fazer bem estes dois.' },
  { n: '3', t: 'Sites para a UBI', p: 'Fornecedor digital da Universidade da Beira Interior.' },
  { n: '1', t: 'Responsável', p: 'Fala sempre comigo, do primeiro contacto ao lançamento.' },
];

const fases = [
  {
    n: '01',
    titulo: 'Reconhecimento',
    sum: 'Antes de desenhar, perceber.',
    ps: [
      'Começo por conhecer o negócio: o que vende, a quem, e onde está a perder clientes ou horas. Analiso o site atual, se existir, a concorrência e as ferramentas que já usa no dia a dia.',
      'No fim desta fase recebe uma proposta por escrito com o âmbito, o prazo e o valor fechados. Só avançamos se fizer sentido para os dois.',
    ],
    deliv: [
      ['1.1', 'Conversa sobre objetivos'],
      ['1.2', 'Análise do site e da concorrência'],
      ['1.3', 'Proposta com prazo e valor'],
    ],
  },
  {
    n: '02',
    titulo: 'Execução',
    sum: 'Construir dentro do prazo.',
    ps: [
      'Com a proposta aprovada, avanço para o design e o desenvolvimento. Há pontos de validação definidos desde o início, para ver o trabalho a meio e pedir ajustes antes do lançamento.',
      'O site é pensado para telemóvel, rápido a carregar e preparado para aparecer no Google e nas respostas dos motores de IA.',
    ],
    deliv: [
      ['2.1', 'Design à medida com validação'],
      ['2.2', 'Desenvolvimento e SEO'],
      ['2.3', 'Lançamento e entrega'],
    ],
  },
  {
    n: '03',
    titulo: 'Automação',
    sum: 'Tirar trabalho das suas mãos.',
    ps: [
      'Olho para os processos do negócio: pedidos, emails, documentos, folhas de cálculo. O que é feito à mão todas as semanas passa a correr sozinho, ligado às ferramentas que já usa.',
      'Pode ser a continuação natural do site ou um projeto à parte, para quem já tem site e só quer ganhar tempo.',
    ],
    deliv: [
      ['3.1', 'Levantamento das tarefas repetitivas'],
      ['3.2', 'Automação à medida'],
      ['3.3', 'Acompanhamento e ajustes'],
    ],
  },
];

export default function Home() {
  return (
    <>
      <Hero>
        <div className="hero-body">
          <div>
            <span className="label">
              <i />
              Websites e automações de IA · Covilhã
            </span>
            <h1>
              Sites que trazem clientes. <span>Automações que devolvem tempo ao seu negócio.</span>
            </h1>
          </div>
          <div className="hero-side">
            <p>
              Para PME e marcas portuguesas. Um só responsável do primeiro esboço ao lançamento, com prazo fixo e
              preço fechado.
            </p>
            <div className="ctas">
              <a href="#orcamento" className="btn btn-light">
                Pedir orçamento
                <span className="ic">
                  <ArrowUpRight />
                </span>
              </a>
              <a href="#trabalhos" className="btn btn-ghost">
                Ver trabalhos
              </a>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <span>+ Reconhecimento</span>
          <span>+ Execução</span>
          <span>+ Automação</span>
          <small>Foto: Lagoa Comprida, Serra da Estrela — Ricardo Rocha / Unsplash</small>
        </div>
      </Hero>

      <div className="strip">
        <div className="lead">
          <Logo size={22} stroke="#0E4B35" />
          Fornecedor digital da
          <br />
          Universidade da Beira Interior
        </div>
        <div className="names">
          {trabalhosPublicados.map((t) => (
            <Marca marca={t.marca} key={t.slug} />
          ))}
        </div>
      </div>

      <section className="intro">
        <span className="label">
          <i />O que faço
        </span>
        <h2>
          Construo sites rápidos, pensados para aparecer no Google e nas respostas do ChatGPT,{' '}
          <span>e automatizo o trabalho repetitivo que ocupa horas às PME todas as semanas.</span>
        </h2>
        <Link href="/metodo" className="more">
          <ArrowRight size={16} />
          CONHECER O MÉTODO
        </Link>
      </section>

      <section className="nums">
        <span className="label">
          <i />
          Em números
        </span>
        <div className="nums-grid">
          {numeros.map((n) => (
            <div className="num" key={n.t}>
              <b>{n.n}</b>
              <strong>{n.t}</strong>
              <p>{n.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec" id="servicos">
        <SectionHead etiqueta="Serviços" titulo="Dois serviços." destaque="Feitos a fundo, sem dispersão.">
          <p>
            Não faço gestão de redes sociais, fotografia nem publicidade. Faço websites e automações, e faço-os bem.
          </p>
        </SectionHead>
        <div className="svc">
          {servicos.map((s) => (
            <article className={'card ' + s.cor} key={s.n}>
              <span className="n">{s.n}</span>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
              <ul>
                {s.itens.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <Link className="go" href={s.href}>
                Saber mais <ArrowRight />
              </Link>
            </article>
          ))}
        </div>
        <Swipe />
      </section>

      <section className="sec" id="trabalhos">
        <SectionHead etiqueta="Trabalhos" titulo="Projetos no ar." destaque="Clientes reais.">
          <p>Da Universidade da Beira Interior a marcas pessoais e comunidades online.</p>
        </SectionHead>
        <TrabalhosGrid />
      </section>

      <section className="dark" id="metodo">
        <div className="sec">
          <SectionHead etiqueta="Método" titulo="Operação Flash." destaque="Três fases, sem surpresas.">
            <p>
              Prazo e preço ficam escritos na proposta antes de começar. Não mudam a meio.
              <br />
              <Link
                href="/metodo"
                style={{
                  display: 'inline-flex',
                  marginTop: 14,
                  color: '#fff',
                  borderBottom: '1px dashed var(--jade)',
                  paddingBottom: 4,
                }}
              >
                Ver o método em detalhe →
              </Link>
            </p>
          </SectionHead>
          <div className="steps">
            {fases.map((f) => (
              <div className="step" key={f.n}>
                <b>{f.n}</b>
                <div>
                  <h3>{f.titulo}</h3>
                  <span className="sum">{f.sum}</span>
                </div>
                <div className="txt">
                  {f.ps.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                  <div className="deliv">
                    <span>Nesta fase</span>
                    <ol>
                      {f.deliv.map(([num, texto]) => (
                        <li key={num}>
                          <i>{num}</i>
                          {texto}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <SectionHead etiqueta="Clientes" titulo="O que dizem os clientes." destaque="Avaliações reais." />
        <div className="quotes">
          {testemunhos.map((t) => (
            <figure className="q" key={t.nome}>
              {t.titulo && <strong className="qt">{t.titulo}</strong>}
              <blockquote>{t.texto}</blockquote>
              <figcaption className="who">
                <span className="av">{t.iniciais}</span>
                <div>
                  <strong>{t.nome}</strong>
                  <span>{t.fonte}</span>
                </div>
                <a
                  className="src"
                  href={t.link}
                  target="_blank"
                  rel="noopener"
                  aria-label={'Ver avaliação de ' + t.nome}
                >
                  Ver ↗
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
        <Swipe />
      </section>

      <section className="sec" id="sobre">
        <div className="about">
          <div className="photo has">
            <Image
              src="/img/pedro-pereira.jpg"
              alt="Pedro Pereira, fundador da Starmountain Flash, no escritório"
              width={1100}
              height={1379}
              sizes="(max-width: 960px) 100vw, 36vw"
            />
          </div>
          <div className="about-txt">
            <span className="label">
              <i />
              Sobre
            </span>
            <h2 style={{ margin: 0 }}>
              O contabilista <span>que automatiza.</span>
            </h2>
            <p>
              Sou o Pedro Pereira. Trabalho em contabilidade e vejo todos os dias as horas que as empresas perdem em
              tarefas que uma máquina fazia melhor. A Starmountain Flash nasceu daí.
            </p>
            <p>
              Tenho formação militar, com missão internacional. Prazos são para cumprir. O nome vem da Serra da
              Estrela, onde trabalho, e da rapidez de execução.
            </p>
            <p>
              Hoje trabalho com PME e marcas de todo o país. Quem ouve o pedido é quem o constrói, do primeiro
              contacto ao lançamento.
            </p>
            <Link
              href="/sobre"
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                gap: 10,
                alignItems: 'center',
                fontSize: 15,
                fontWeight: 500,
                paddingBottom: 6,
                borderBottom: '1px dashed var(--emerald)',
              }}
            >
              Conhecer o percurso <ArrowRight />
            </Link>
            <div className="facts">
              <div>
                <strong>Covilhã</strong>
                <span>Clientes em todo o país</span>
              </div>
              <div>
                <strong>Sem intermediários</strong>
                <span>Fala sempre comigo</span>
              </div>
              <div>
                <strong>Contabilidade</strong>
                <span>Conheço os processos das PME</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faqs titulo="Antes de" destaque="pedir orçamento." itens={faqsHome} />

      <section className="cta" id="orcamento">
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
              Contacto
            </span>
            <h2>
              Prazo fixo. <span style={{ color: 'rgba(255,255,255,.6)' }}>Preço fechado.</span>
            </h2>
            <p
              style={{
                margin: '22px 0 0',
                fontSize: 17,
                lineHeight: 1.55,
                color: 'rgba(255,255,255,.8)',
                maxWidth: 440,
              }}
            >
              Diga-me o que precisa. Respondo com uma proposta por escrito, com prazo e valor.
            </p>
            <div className="direct">
              <a href={'mailto:' + site.email}>
                {site.email} <ArrowRight />
              </a>
              <a href={'tel:' + site.telefoneRaw}>
                {site.telefone} <ArrowRight />
              </a>
              <a href="#whatsapp" data-wa>
                WhatsApp <ArrowRight />
              </a>
              <small>Chamada para a rede móvel nacional.</small>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <JsonLd data={faqLd(faqsHome)} />
    </>
  );
}
