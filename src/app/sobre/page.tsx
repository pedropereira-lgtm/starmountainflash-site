import Image from 'next/image';
import type { Metadata } from 'next';
import { HeroFoto, JsonLd, NextStep, SectionHead } from '@/components/Blocks';
import { HeroSm } from '@/components/Blocks';
import { meta, migalhasLd, pessoaLd } from '@/lib/seo';

const TITULO = 'Sobre Pedro Pereira | Starmountain Flash';
const DESCRICAO =
  'Pedro Pereira, fundador da Starmountain Flash: técnico de contabilidade, formação militar e websites e automações de IA para PME, a partir da Covilhã.';

export const metadata: Metadata = meta({ titulo: TITULO, descricao: DESCRICAO, caminho: '/sobre' });

const numeros = [
  { n: '7', t: 'Projetos entregues', p: 'Sites, landing pages e plataformas já no ar.' },
  { n: '3', t: 'Sites para a UBI', p: 'Fornecedor digital da Universidade da Beira Interior.' },
  { n: '2', t: 'Serviços', p: 'Websites e automações de IA. Nada mais.' },
  { n: '1', t: 'Responsável', p: 'Fala sempre comigo, do início ao fim.' },
];

const percurso = [
  ['01', 'Formação militar', 'Missão internacional e medalha de reconhecimento nacional. Aprendi a planear, a cumprir prazos e a não deixar nada a meio.'],
  ['02', 'Lisboa e Estados Unidos', 'Anos a viver fora do Porto e fora do país, que me deram outra forma de ver negócios, clientes e maneiras de trabalhar.'],
  ['03', 'Contabilidade', 'Técnico de contabilidade. O dia a dia das PME visto por dentro: números, prazos, documentos e muito trabalho repetitivo.'],
  ['04', 'Starmountain Flash', 'De hobby de web design a serviço profissional de websites e automações de IA, a partir da Covilhã.'],
  ['05', 'Universidade da Beira Interior', 'Fornecedor digital da UBI, com três sites institucionais no ar.'],
];

const regras = [
  ['01', 'Prazo é prazo', 'O prazo fica escrito na proposta e é cumprido. Se alguma coisa mudar, sabe no próprio dia.'],
  ['02', 'Preço fechado', 'O valor acordado é o valor final. Sem horas extra surpresa nem custos escondidos.'],
  ['03', 'Sem intermediários', 'Fala sempre comigo. Quem ouve o pedido é quem o constrói.'],
  ['04', 'Franqueza', 'Se alguma coisa não compensa, digo-lhe. Mesmo que isso signifique um projeto mais pequeno.'],
];

export default function Sobre() {
  return (
    <>
      <HeroSm
        caminho={[{ label: 'Sobre' }]}
        titulo="O contabilista que automatiza."
        destaque="E constrói sites para PME."
        descricao="Contabilidade, formação militar e muitas horas a construir sites e automações. É isso que está por trás de cada projeto da Starmountain Flash."
      />

      <section className="sec">
        <div className="bio">
          <div className="photo has">
            <Image
              src="/img/pedro-pereira.jpg"
              alt="Pedro Pereira, fundador da Starmountain Flash, no escritório"
              width={1100}
              height={1379}
              sizes="(max-width: 960px) 100vw, 42vw"
            />
          </div>
          <div className="bio-t">
            <span className="label">
              <i style={{ background: 'var(--emerald)' }} />
              Quem sou
            </span>
            <h2>
              Olá, sou o Pedro. <span>Fundador da Starmountain Flash.</span>
            </h2>
            <p>
              Nasci no Porto, vivi em Lisboa e nos Estados Unidos, e hoje trabalho a partir da Covilhã, junto à Serra
              da Estrela.
            </p>
            <p>
              Sou técnico de contabilidade. Passo os dias dentro dos processos das empresas, e vejo de perto onde se
              perde tempo: dados copiados à mão, pedidos esquecidos, relatórios montados à pressa. É daí que vem a
              parte das automações.
            </p>
            <p>
              A parte dos sites começou como um gosto pessoal por web design. Tornou-se serviço quando percebi que
              muitas PME tinham bons produtos e nenhuma forma de serem encontradas.
            </p>
            <div className="sig">
              <strong>Pedro Pereira</strong>Covilhã, Serra da Estrela
            </div>
          </div>
        </div>
      </section>

      <section className="nums" style={{ paddingTop: 110 }}>
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

      <section className="sec">
        <SectionHead etiqueta="Percurso" titulo="Do Porto à Serra da Estrela." destaque="Pelo caminho mais longo." />
        <div className="path">
          {percurso.map(([n, titulo, texto]) => (
            <div key={n}>
              <i>{n}</i>
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="name" style={{ marginTop: 130 }}>
        <HeroFoto />
        <div>
          <div>
            <span className="label">
              <i />O nome
            </span>
            <h2>
              Starmountain Flash. <span>A serra e a rapidez.</span>
            </h2>
          </div>
          <p>
            &quot;Starmountain&quot; vem da Serra da Estrela, onde a empresa está. &quot;Flash&quot; vem da rapidez de
            execução e da inteligência artificial que está no centro das automações.
          </p>
        </div>
      </div>

      <section className="sec">
        <SectionHead etiqueta="Formação e certificações" titulo="Sempre a aprender." destaque="Com provas dadas.">
          <p>Formação académica, profissional e militar que está por trás de cada projeto.</p>
        </SectionHead>
        <div className="certs">
          <article className="cert">
            <div className="c-top">
              <span className="st">
                <b className="o" />
                Em curso
              </span>
              <Image className="c-logo" src="/img/universidade-aberta.png" alt="Universidade Aberta" width={150} height={26} />
            </div>
            <h3>Licenciatura em Gestão</h3>
            <p>Gestão de empresas, finanças e organização.</p>
            <span className="by">Universidade Aberta</span>
          </article>

          <article className="cert">
            <div className="c-top">
              <span className="st">
                <b />
                Certificado · 2026
              </span>
              <Image
                className="c-badge"
                src="/img/google-analytics.png"
                alt="Selo Google Analytics Certified"
                width={62}
                height={62}
              />
            </div>
            <h3>Google Analytics</h3>
            <p>Medição e análise de tráfego, comportamento e conversões em sites.</p>
            <span className="by">Google · válido até agosto de 2027 · ID 192548880</span>
          </article>

          <article className="cert">
            <div className="c-top">
              <span className="st">
                <b />
                Concluído · 2026
              </span>
              <Image className="c-logo" src="/img/politecnico-lisboa.png" alt="Politécnico de Lisboa" width={150} height={26} />
            </div>
            <h3>Programação para a Web</h3>
            <p>Curso de 25 horas sobre desenvolvimento web.</p>
            <span className="by">
              Politécnico de Lisboa · Plataforma NAU ·{' '}
              <a
                href="https://lms.nau.edu.pt/certificates/6f516acd627b42f9aa5cf1917f6f161a"
                target="_blank"
                rel="noopener"
                style={{ color: 'var(--emerald)' }}
              >
                Verificar ↗
              </a>
            </span>
          </article>

          <article className="cert">
            <div className="c-top">
              <span className="st">
                <b />
                Atribuída
              </span>
              <span className="c-logos">
                <Image src="/img/exercito.png" alt="Exército Português" width={28} height={28} />
                <Image src="/img/nato-otan.png" alt="NATO / OTAN" width={28} height={28} />
              </span>
            </div>
            <h3>Medalha de reconhecimento nacional</h3>
            <p>Missão internacional ao serviço da NATO.</p>
            <span className="by">Exército Português · NATO / OTAN</span>
          </article>

          <article className="cert">
            <div className="c-top">
              <span className="st">
                <b />
                Profissão
              </span>
            </div>
            <h3>Técnico de contabilidade</h3>
            <p>Processos, faturação e obrigações das PME.</p>
            {/* Por preencher: nome da certificação ou do curso. */}
            <span className="by">[Certificação ou curso]</span>
          </article>

          <article className="cert">
            <div className="c-top">
              <span className="st">
                <b />
                Parceiro
              </span>
              <Image className="c-logo" src="/img/shopify.png" alt="Shopify" width={150} height={26} />
            </div>
            <h3>Shopify Partner</h3>
            <p>Programa de parceiros para criação de lojas online.</p>
            <span className="by">Shopify</span>
          </article>
        </div>
      </section>

      <section className="dark">
        <div className="sec">
          <SectionHead etiqueta="Como trabalho" titulo="Quatro regras." destaque="Sem exceções." />
          <div className="princ">
            {regras.map(([n, titulo, texto]) => (
              <div key={n}>
                <i>{n}</i>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NextStep />

      <JsonLd data={[migalhasLd([{ nome: 'Sobre', caminho: '/sobre' }]), pessoaLd]} />
    </>
  );
}
