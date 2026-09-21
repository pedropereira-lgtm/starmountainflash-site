import type { Metadata } from 'next';
import { Faqs, HeroSm, JsonLd, NextStep, SectionHead } from '@/components/Blocks';
import { Logo } from '@/components/Icons';
import { faqsAutomacoes } from '@/data/faqs';
import { faqLd, meta, migalhasLd, servicoLd } from '@/lib/seo';

const TITULO = 'Automações de IA para PME | Starmountain Flash';
const DESCRICAO =
  'Automações de IA para PME portuguesas: emails, documentos, relatórios, CRM e integrações entre ferramentas. O trabalho repetitivo passa a fazer-se sozinho, com ou sem site.';

export const metadata: Metadata = meta({ titulo: TITULO, descricao: DESCRICAO, caminho: '/automacoes' });

const exemplos = [
  {
    area: 'Atendimento',
    titulo: 'Perguntas repetidas respondidas',
    antes: 'Responde à mão às mesmas perguntas sobre horários, preços e disponibilidade.',
    depois: 'As perguntas frequentes têm resposta imediata. Só as outras chegam até si.',
  },
  {
    area: 'Pedidos',
    titulo: 'Contactos que não se perdem',
    antes: 'Os pedidos chegam por email, formulário e telefone, e alguns ficam esquecidos.',
    depois: 'Cada pedido entra no CRM com origem e data, e recebe resposta automática.',
  },
  {
    area: 'Documentos',
    titulo: 'Faturas sem copiar e colar',
    antes: 'Os dados de cada fatura são copiados um a um para o Excel.',
    depois: 'Os documentos são lidos e os dados entram na folha sozinhos.',
  },
  {
    area: 'Relatórios',
    titulo: 'O relatório de segunda-feira',
    antes: 'Todas as semanas alguém junta números de várias folhas para montar o relatório.',
    depois: 'O relatório é gerado e enviado sozinho, sempre à mesma hora.',
  },
  {
    area: 'Agenda',
    titulo: 'Menos faltas às marcações',
    antes: 'Os lembretes aos clientes são enviados à mão, quando há tempo.',
    depois: 'Cada cliente recebe confirmação e lembrete automáticos.',
  },
  {
    area: 'Integrações',
    titulo: 'Ferramentas que falam entre si',
    antes: 'A mesma informação é escrita em três sítios diferentes.',
    depois: 'Escreve uma vez. As outras ferramentas atualizam-se sozinhas.',
  },
  {
    area: 'Clientes novos',
    titulo: 'Entrada de clientes automática',
    antes: 'Cada cliente novo obriga a criar pastas, registos e tarefas à mão.',
    depois: 'Tudo é criado no momento em que o cliente entra.',
  },
  {
    area: 'Portais',
    titulo: 'Portais sem integração',
    antes: 'Documentos descarregados um a um de portais que não se ligam a nada.',
    depois: 'Um robô entra no portal, descarrega e organiza os documentos por si.',
  },
];

const passos = [
  ['01', 'Levantamento', 'Mapeio as tarefas repetitivas, quanto tempo ocupam e quem as faz. Fica claro o que compensa automatizar.'],
  ['02', 'Construção', 'Desenvolvo a automação com as suas ferramentas e testo-a com casos reais antes de entrar em funcionamento.'],
  ['03', 'Acompanhamento', 'Acompanho as primeiras semanas e ajusto o que for preciso. A forma de acompanhamento fica na proposta.'],
];

const ferramentas = [
  'Google Workspace',
  'Microsoft 365',
  'Gmail e Outlook',
  'Excel e Google Sheets',
  'Notion',
  'Trello',
  'Brevo',
  'CRMs',
];

export default function Automacoes() {
  return (
    <>
      <HeroSm
        caminho={[{ label: 'Automações de IA' }]}
        titulo="Automações de IA para PME."
        destaque="O trabalho repetitivo passa a fazer-se sozinho."
        descricao="Processos que hoje são feitos à mão, todas as semanas, passam a correr sozinhos, ligados às ferramentas que a empresa já usa. Com ou sem site."
      />

      <section className="sec">
        <span className="label">
          <i />
          Para quem é
        </span>
        <p className="lead" style={{ marginTop: 18 }}>
          Se alguém na empresa passa horas por semana a copiar dados de um lado para o outro, a responder às mesmas
          perguntas ou a preencher folhas à mão, há uma boa probabilidade de esse trabalho poder ser feito sozinho.
          Não é preciso ter site.
        </p>
      </section>

      <section className="sec">
        <SectionHead etiqueta="Exemplos" titulo="O que pode ser automatizado." destaque="Antes e depois.">
          <p>Casos típicos em PME. Cada automação é desenhada à volta do seu processo e das ferramentas que já usa.</p>
        </SectionHead>
        <div className="ba">
          {exemplos.map((e) => (
            <article key={e.titulo}>
              <span className="area">{e.area}</span>
              <h3>{e.titulo}</h3>
              <div className="ba-row">
                <span>Antes</span>
                <p>{e.antes}</p>
              </div>
              <div className="ba-row now">
                <span>Depois</span>
                <p>{e.depois}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sec">
        <SectionHead etiqueta="Como funciona" titulo="Primeiro perceber." destaque="Depois automatizar." />
        <div className="mini">
          {passos.map(([n, titulo, texto]) => (
            <div key={n}>
              <b>{n}</b>
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec">
        <SectionHead etiqueta="Tecnologia" titulo="Com o que já usa." destaque="Ou construído de raiz." />
        <div className="stack">
          <article className="st-l">
            <span className="for">Integração</span>
            <h3>As ferramentas da empresa</h3>
            <p>
              Sempre que possível, a automação liga-se ao que a empresa já usa. Sem mudar hábitos nem pagar software
              novo.
            </p>
            <ul>
              {ferramentas.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </article>
          <article className="st-d">
            <span className="for">Framework próprio</span>
            <h3>Construído à medida</h3>
            <p>
              Quando não existe integração, ou o processo é demasiado específico, desenvolvo a automação de raiz, com
              código próprio e sem depender de plataformas intermédias.
            </p>
            <dl>
              <dt>Robôs web</dt>
              <dd>Node.js e Playwright, para operar portais sem ligação oficial</dd>
              <dt>Dados</dt>
              <dd>Supabase, para guardar e organizar a informação</dd>
              <dt>IA</dt>
              <dd>Modelos de linguagem para ler, classificar e resumir</dd>
              <dt>Ligações</dt>
              <dd>APIs e webhooks entre sistemas</dd>
            </dl>
          </article>
        </div>
      </section>

      <section className="sec">
        <div className="note">
          <Logo size={26} stroke="#0E4B35" />
          <h3>Nem tudo deve ser automatizado.</h3>
          <p>
            Se uma tarefa leva cinco minutos por mês, não compensa. Na fase de levantamento digo-lhe com franqueza o
            que vale a pena e o que não vale.
          </p>
        </div>
      </section>

      <Faqs titulo="Sobre automações." destaque="Em poucas palavras." itens={faqsAutomacoes} />
      <NextStep />

      <JsonLd
        data={[
          migalhasLd([{ nome: 'Automações de IA', caminho: '/automacoes' }]),
          servicoLd({
            nome: 'Automações de IA',
            tipo: 'Automações de IA',
            descricao: DESCRICAO,
            caminho: '/automacoes',
          }),
          faqLd(faqsAutomacoes),
        ]}
      />
    </>
  );
}
