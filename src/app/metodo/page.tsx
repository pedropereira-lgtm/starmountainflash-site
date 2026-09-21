import type { Metadata } from 'next';
import { Faqs, HeroSm, JsonLd, NextStep, SectionHead } from '@/components/Blocks';
import { Logo } from '@/components/Icons';
import { faqsMetodo } from '@/data/faqs';
import { faqLd, meta, migalhasLd } from '@/lib/seo';

const TITULO = 'Método Operação Flash: como funciona um projeto | Starmountain Flash';
const DESCRICAO =
  'Como funciona um projeto de website ou automação com a Starmountain Flash: reconhecimento, execução e automação, com prazo escrito e preço fechado.';

export const metadata: Metadata = meta({ titulo: TITULO, descricao: DESCRICAO, caminho: '/metodo' });

const fases = [
  {
    id: 'reconhecimento',
    n: '01',
    titulo: 'Reconhecimento',
    resumo: 'Antes de desenhar, perceber o negócio, os clientes e onde se está a perder tempo ou oportunidades.',
    acontece: [
      'Conversa sobre objetivos e prioridades',
      'Análise do site atual, se existir',
      'Análise da concorrência e das ferramentas que usa',
    ],
    recebe: [
      'Proposta escrita com âmbito, prazo e valor',
      'Recomendação do formato certo: landing page, site, loja ou automação',
    ],
    preciso: ['Uma conversa de cerca de 30 minutos, online', 'Acesso ao que já existe: site, redes, materiais'],
  },
  {
    id: 'execucao',
    n: '02',
    titulo: 'Execução',
    resumo:
      'Com a proposta aprovada, o projeto avança dentro do prazo acordado, com pontos de validação definidos desde o início.',
    acontece: [
      'Design à medida, com uma primeira validação',
      'Desenvolvimento em código, com uma segunda validação',
      'Testes em telemóvel, velocidade e SEO',
      'Lançamento e configuração do domínio',
    ],
    recebe: ['O site no ar, rápido e preparado para Google e IA', 'Acessos e explicação de como funciona'],
    preciso: [
      'Textos base sobre o negócio',
      'Logótipo e fotografias, se existirem',
      'Feedback nas validações, dentro dos prazos',
    ],
  },
  {
    id: 'automacao',
    n: '03',
    titulo: 'Automação',
    resumo: 'Depois do lançamento, ou como projeto à parte, o trabalho repetitivo do negócio passa a correr sozinho.',
    acontece: [
      'Levantamento das tarefas repetitivas e do tempo que ocupam',
      'Construção da automação com as suas ferramentas',
      'Testes com casos reais antes de entrar em funcionamento',
    ],
    recebe: ['A automação a funcionar', 'Uma explicação simples de como funciona', 'Acompanhamento nas primeiras semanas'],
    preciso: ['Acesso às ferramentas envolvidas', 'Alguém que conheça bem o processo'],
  },
];

const compromissos = [
  ['01', 'Prazo escrito', 'O prazo fica na proposta antes de começar e é cumprido. Se alguma coisa mudar, sabe no próprio dia.'],
  ['02', 'Preço fechado', 'O valor acordado é o valor final. Sem horas extra surpresa nem custos escondidos.'],
  ['03', 'Um só responsável', 'Fala sempre comigo, do primeiro contacto ao lançamento. Quem ouve o pedido é quem o constrói.'],
  ['04', 'Tudo em seu nome', 'O domínio e as contas ficam em nome da empresa. O site é seu, não fica preso a mim.'],
];

export default function Metodo() {
  return (
    <>
      <HeroSm
        caminho={[{ label: 'Método' }]}
        titulo="Operação Flash."
        destaque="Da primeira conversa ao lançamento, sem surpresas."
        descricao="Três fases, cada uma com um fim claro. Sabe o que acontece, o que recebe e o que precisa de fazer da sua parte."
      />

      <section className="sec">
        <SectionHead etiqueta="Visão geral" titulo="Três fases." destaque="Cada uma com um fim claro.">
          <p>Sabe sempre em que ponto está o projeto, o que vem a seguir e o que falta da sua parte.</p>
        </SectionHead>
        <div className="ov">
          {fases.map((f) => (
            <a href={'#' + f.id} key={f.id}>
              <b>{f.n}</b>
              <h3>{f.titulo}</h3>
              <p>{f.resumo}</p>
              <span>Ver fase →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="sec">
        <SectionHead etiqueta="Em detalhe" titulo="Fase a fase." destaque="Sem letras pequenas." />
        <div>
          {fases.map((f) => (
            <article className="ph" id={f.id} key={f.id}>
              <div className="ph-l">
                <b>{f.n}</b>
                <h3>{f.titulo}</h3>
                <p>{f.resumo}</p>
              </div>
              <div className="ph-r">
                <div>
                  <h4>O que acontece</h4>
                  <ul>
                    {f.acontece.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>O que recebe</h4>
                  <ul>
                    {f.recebe.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
                <div className="me">
                  <h4>O que preciso de si</h4>
                  <ul>
                    {f.preciso.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="dark">
        <div className="sec">
          <SectionHead etiqueta="Sempre garantido" titulo="Quatro compromissos." destaque="Em todos os projetos." />
          <div className="princ">
            {compromissos.map(([n, titulo, texto]) => (
              <div key={n}>
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

      <Faqs titulo="Sobre o método." destaque="Em poucas palavras." itens={faqsMetodo} />
      <NextStep />

      <JsonLd data={[migalhasLd([{ nome: 'Método', caminho: '/metodo' }]), faqLd(faqsMetodo)]} />
    </>
  );
}
