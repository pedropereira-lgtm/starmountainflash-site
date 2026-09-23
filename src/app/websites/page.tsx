import Link from 'next/link';
import type { Metadata } from 'next';
import { Faqs, HeroSm, JsonLd, NextStep, SectionHead } from '@/components/Blocks';
import { Shot } from '@/components/Trabalhos';
import { ArrowUpRight, Logo } from '@/components/Icons';
import { faqsWebsites } from '@/data/faqs';
import { trabalhosPublicados } from '@/data/trabalhos';
import { faqLd, meta, migalhasLd, servicoLd } from '@/lib/seo';

const TITULO = 'Criação de websites para PME | Starmountain Flash';
const DESCRICAO =
  'Landing pages e sites institucionais à medida para PME portuguesas: rápidos, pensados para telemóvel e preparados para o Google e para motores de IA. Prazo fixo e preço fechado.';

export const metadata: Metadata = meta({ titulo: TITULO, descricao: DESCRICAO, caminho: '/websites' });

const incluido = [
  ['01', 'Design à medida', 'Desenhado para a sua marca e para o seu cliente, não um tema comprado com o logótipo trocado.'],
  ['02', 'Feito em código', 'Desenvolvido em código (Next.js), não num construtor de arrastar. Páginas leves, rápidas e seguras.'],
  ['03', 'Pensado para telemóvel', 'A maioria das visitas chega pelo telemóvel. O site é desenhado primeiro para aí.'],
  ['04', 'SEO técnico', 'Títulos, descrições, sitemap, dados estruturados e URLs limpos, prontos para o Google.'],
  ['05', 'Preparado para IA', 'Conteúdo organizado para ser compreendido e citado por ChatGPT, Gemini e Perplexity.'],
  ['06', 'Contactos ligados', 'Formulário que chega ao seu email, botão de WhatsApp e telefone com um toque.'],
  ['07', 'Páginas legais', 'Política de privacidade, cookies e ligação ao Livro de Reclamações, como a lei exige.'],
  ['08', 'Domínio em seu nome', 'Ajudo a registar e configurar. O domínio fica sempre em nome da empresa.'],
];

// Os dois primeiros trabalhos publicados. Um trabalho escondido nunca
// aparece aqui, mesmo que estivesse escolhido a dedo.
const destaques = trabalhosPublicados.slice(0, 2);

export default function Websites() {
  return (
    <>
      <HeroSm
        caminho={[{ label: 'Websites' }]}
        titulo="Websites que trazem clientes."
        destaque="Rápidos, claros e fáceis de encontrar."
        descricao="Landing pages e sites institucionais para PME e marcas portuguesas. Desenhados à medida, pensados para telemóvel e preparados para aparecer no Google e nas respostas do ChatGPT."
      />

      <section className="sec">
        <span className="label">
          <i />
          Para quem é
        </span>
        <p className="lead" style={{ marginTop: 18 }}>
          Para empresas que ainda não têm site, que têm um site antigo que não traz contactos, ou que precisam de uma
          página para lançar um serviço ou uma campanha. Se os clientes o procuram no Google e não o encontram, é aqui
          que começamos.
        </p>
      </section>

      <section className="sec">
        <SectionHead etiqueta="Dois formatos" titulo="Uma página ou um site completo." destaque="Depende do objetivo.">
          <p>
            Na fase de reconhecimento percebemos juntos qual faz mais sentido. Às vezes é começar por uma landing page
            e crescer depois.
          </p>
        </SectionHead>
        <div className="fmt">
          <article className="c-light" style={{ background: '#fff' }}>
            <span className="for">Formato 01</span>
            <h3>Landing page</h3>
            <p style={{ color: '#555a57' }}>
              Uma única página com um único objetivo: pedir contacto, marcar, comprar ou inscrever-se. Tudo o que está
              na página empurra nessa direção.
            </p>
            <dl>
              <dt>Ideal para</dt>
              <dd>Lançar um serviço, campanhas pagas, eventos, profissionais independentes</dd>
              <dt>Estrutura</dt>
              <dd>Uma página longa, secções pensadas para converter</dd>
              <dt>Contacto</dt>
              <dd>Formulário, WhatsApp ou marcação direta</dd>
            </dl>
          </article>
          <article className="c-dark" style={{ background: 'var(--ink)', color: '#fff' }}>
            <span className="for">Formato 02</span>
            <h3>Site institucional</h3>
            <p style={{ color: 'rgba(255,255,255,.72)' }}>
              O site completo da empresa, com várias páginas. Explica quem é, o que faz, para quem, e dá ao Google e
              aos motores de IA conteúdo suficiente para o recomendarem.
            </p>
            <dl>
              <dt>Ideal para</dt>
              <dd>PME com vários serviços, equipas, clínicas, escritórios, instituições</dd>
              <dt>Estrutura</dt>
              <dd>Início, serviços, sobre, trabalhos, contactos e blog, se fizer sentido</dd>
              <dt>Contacto</dt>
              <dd>Formulário, WhatsApp, telefone e mapa</dd>
            </dl>
          </article>
        </div>
      </section>

      <section className="sec">
        <div className="spec">
          <div className="spec-l">
            <span className="label">
              <i />O que está incluído
            </span>
            <h2>
              Tudo o que um site precisa. <span>Sem extras escondidos.</span>
            </h2>
            <p>Cada ponto fica descrito na proposta, para saber exatamente o que recebe antes de começar.</p>
            <a
              href="#orcamento"
              className="btn btn-light"
              style={{ background: 'var(--ink)', color: '#fff', alignSelf: 'flex-start' }}
            >
              Pedir orçamento{' '}
              <span className="ic">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>
          <div className="spec-r">
            {incluido.map(([n, titulo, texto]) => (
              <div className="ri" key={n}>
                <i>{n}</i>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="note">
          <Logo size={26} stroke="#0E4B35" />
          <h3>Depois do lançamento.</h3>
          <div className="opts">
            <div>
              <strong>Avença mensal</strong>
              <span>Atualizações e pequenas alterações, com um valor fixo por mês.</span>
            </div>
            <div>
              <strong>Alterações pontuais</strong>
              <span>Sem compromisso mensal. Pede só quando precisar.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <SectionHead etiqueta="Trabalhos" titulo="Sites no ar." destaque="Clientes reais.">
          <p>
            <Link href="/#trabalhos" style={{ borderBottom: '1px dashed var(--emerald)', paddingBottom: 4 }}>
              Ver todos os trabalhos →
            </Link>
          </p>
        </SectionHead>
        <div className="work">
          {destaques.map((t) => (
            <Link className="proj" href={'/trabalhos/' + t.slug} key={t.slug}>
              <div className="browser">
                <div className="bar">
                  <i />
                  <i />
                  <i />
                  <em>{t.dominio}</em>
                </div>
                <Shot t={t} />
              </div>
              <div className="meta">
                <div>
                  <h3>{t.nome}</h3>
                  <p>{t.slug === 'ubi' ? 'Três sites institucionais' : t.resumo}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Faqs titulo="Sobre websites." destaque="Em poucas palavras." itens={faqsWebsites} />
      <NextStep />

      <JsonLd
        data={[
          migalhasLd([{ nome: 'Websites', caminho: '/websites' }]),
          servicoLd({
            nome: 'Criação de websites',
            tipo: 'Criação de websites',
            descricao: DESCRICAO,
            caminho: '/websites',
          }),
          faqLd(faqsWebsites),
        ]}
      />
    </>
  );
}
