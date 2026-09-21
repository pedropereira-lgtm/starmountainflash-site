import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Faqs, HeroSm, JsonLd, NextStep, SectionHead } from '@/components/Blocks';
import { ArrowUpRight, Logo } from '@/components/Icons';
import { faqsLojas } from '@/data/faqs';
import { faqLd, meta, migalhasLd, servicoLd } from '@/lib/seo';

const TITULO = 'Criação de lojas online em Portugal | Starmountain Flash';
const DESCRICAO =
  'Lojas online em Shopify ou à medida para marcas e PME portuguesas: catálogo, pagamentos, envios, páginas legais e formação incluídos. Prazo fixo e preço fechado.';

export const metadata: Metadata = meta({ titulo: TITULO, descricao: DESCRICAO, caminho: '/lojas-online' });

const incluido = [
  ['01', 'Catálogo organizado', 'Produtos, variantes, categorias e filtros pensados para quem compra.'],
  ['02', 'Pagamentos', 'Métodos de pagamento usados em Portugal, conforme a plataforma escolhida.'],
  ['03', 'Envios e portes', 'Regras de envio, zonas e portes grátis configurados à sua medida.'],
  ['04', 'Emails automáticos', 'Confirmação de encomenda, envio e recuperação de carrinhos.'],
  ['05', 'SEO de produto', 'Páginas de produto preparadas para aparecer no Google e em motores de IA.'],
  ['06', 'Páginas legais', 'Termos, devoluções, privacidade e Livro de Reclamações, como a lei exige.'],
  ['07', 'Faturação', 'Ligação ao programa de faturação, quando a plataforma o permite.'],
  ['08', 'Formação', 'Uma sessão para aprender a gerir produtos, encomendas e clientes sozinho.'],
];

export default function LojasOnline() {
  return (
    <>
      <HeroSm
        caminho={[{ label: 'Lojas online' }]}
        titulo="Lojas online que vendem."
        destaque="Sem complicar a gestão diária."
        descricao="Lojas em Shopify ou à medida, com catálogo, pagamentos e envios configurados para o mercado português, e formação para gerir tudo sozinho."
      />

      <section className="sec">
        <span className="label">
          <i />
          Para quem é
        </span>
        <p className="lead" style={{ marginTop: 18 }}>
          Para marcas que hoje vendem por mensagem no Instagram e querem uma loja própria, para lojas físicas que
          querem vender também online, e para quem já tem uma loja antiga que é difícil de gerir ou não vende.
        </p>
      </section>

      <section className="sec">
        <SectionHead
          etiqueta="Plataforma"
          titulo="Shopify ou à medida."
          destaque="A escolha certa depende do negócio."
        >
          <p>
            Explico as diferenças na fase de reconhecimento, incluindo os custos mensais de cada opção, antes de
            decidir.
          </p>
        </SectionHead>
        <div className="fmt">
          <article style={{ background: '#fff' }}>
            <span className="for">Opção 01</span>
            <Image
              src="/img/shopify.png"
              alt="Shopify"
              width={120}
              height={34}
              style={{ height: 34, width: 'auto', alignSelf: 'flex-start', marginTop: 4 }}
            />
            <h3 style={{ position: 'absolute', left: '-9999px' }}>Shopify</h3>
            <p style={{ color: '#555a57' }}>
              A plataforma de comércio eletrónico mais usada no mundo. Fiável, segura e fácil de gerir no dia a dia,
              mesmo sem conhecimentos técnicos.
            </p>
            <dl>
              <dt>Ideal para</dt>
              <dd>Catálogos de produtos físicos, marcas que querem crescer rápido</dd>
              <dt>Gestão</dt>
              <dd>Painel simples para produtos, encomendas e clientes</dd>
              <dt>Custos</dt>
              <dd>Subscrição mensal da plataforma, paga diretamente pelo cliente</dd>
            </dl>
          </article>
          <article style={{ background: 'var(--ink)', color: '#fff' }}>
            <span className="for">Opção 02</span>
            <h3>Loja à medida</h3>
            <p style={{ color: 'rgba(255,255,255,.72)' }}>
              Desenvolvida de raiz para o que o negócio precisa, quando as plataformas prontas não encaixam no modelo
              de venda.
            </p>
            <dl>
              <dt>Ideal para</dt>
              <dd>Serviços, marcações, subscrições, regras de preço específicas</dd>
              <dt>Gestão</dt>
              <dd>Painel desenhado à volta do seu processo</dd>
              <dt>Custos</dt>
              <dd>Alojamento e serviços usados, definidos na proposta</dd>
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
              Da montra à entrega. <span>Tudo configurado.</span>
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
          <h3>Loja e automação juntas.</h3>
          <p>
            Uma loja gera trabalho repetitivo: encomendas para registar, stock para atualizar, clientes para
            responder. Muito disso pode ficar automatizado desde o início.{' '}
            <Link href="/automacoes" style={{ color: 'var(--emerald)', borderBottom: '1px solid' }}>
              Ver automações →
            </Link>
          </p>
        </div>
      </section>

      <Faqs titulo="Sobre lojas online." destaque="Em poucas palavras." itens={faqsLojas} />
      <NextStep />

      <JsonLd
        data={[
          migalhasLd([{ nome: 'Lojas online', caminho: '/lojas-online' }]),
          servicoLd({
            nome: 'Criação de lojas online',
            tipo: 'Criação de lojas online',
            descricao: DESCRICAO,
            caminho: '/lojas-online',
          }),
          faqLd(faqsLojas),
        ]}
      />
    </>
  );
}
