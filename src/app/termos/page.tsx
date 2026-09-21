import Link from 'next/link';
import type { Metadata } from 'next';
import { HeroSm, JsonLd } from '@/components/Blocks';
import Legal, { type Seccao } from '@/components/Legal';
import { site } from '@/data/site';
import { meta, migalhasLd } from '@/lib/seo';

const TITULO = 'Termos e condições | Starmountain Flash';
const DESCRICAO =
  'Condições de utilização do site e regras dos serviços da Starmountain Flash: propostas, prazos, pagamentos, propriedade do trabalho e resolução de litígios.';

export const metadata: Metadata = meta({ titulo: TITULO, descricao: DESCRICAO, caminho: '/termos' });

const ATUALIZADO = '21 de setembro de 2026';

const seccoes: Seccao[] = [
  {
    id: 'identificacao',
    titulo: 'Identificação',
    corpo: (
      <>
        <p>
          Este site é propriedade de {site.fundador}, profissional independente que exerce atividade sob a marca
          Starmountain Flash, com sede na {site.localidade}, Portugal, NIF {site.nif}.
        </p>
        <p>
          Contactos: <a href={'mailto:' + site.email}>{site.email}</a> ·{' '}
          <a href={'tel:' + site.telefoneRaw}>{site.telefone}</a>.
        </p>
      </>
    ),
  },
  {
    id: 'ambito',
    titulo: 'Âmbito destes termos',
    corpo: (
      <>
        <p>
          A primeira parte destes termos aplica-se a quem visita o site. A segunda aplica-se a quem contrata serviços,
          sempre em conjunto com a proposta assinada, que prevalece em caso de divergência.
        </p>
        <p>
          A utilização do site implica a aceitação destes termos e da{' '}
          <Link href="/privacidade">política de privacidade</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'utilizacao',
    titulo: 'Utilização do site',
    corpo: (
      <>
        <p>
          Os conteúdos do site são disponibilizados a título informativo. É feito um esforço para os manter corretos e
          atualizados, mas não constituem uma proposta contratual nem dispensam uma análise do caso concreto.
        </p>
        <p>
          Não é permitido usar o site para fins ilícitos, tentar aceder a áreas reservadas, ou enviar através dos
          formulários conteúdo automatizado, publicitário não solicitado ou que viole direitos de terceiros.
        </p>
      </>
    ),
  },
  {
    id: 'propriedade-site',
    titulo: 'Propriedade intelectual do site',
    corpo: (
      <>
        <p>
          O design, os textos, o código e a marca Starmountain Flash são propriedade do responsável identificado
          acima. Os logótipos e marcas de clientes e instituições apresentados no site pertencem aos respetivos
          titulares e são usados apenas para identificar trabalhos realizados.
        </p>
        <p>
          A fotografia usada no topo das páginas é de Ricardo Rocha, obtida no Unsplash e usada ao abrigo da licença
          dessa plataforma.
        </p>
      </>
    ),
  },
  {
    id: 'propostas',
    titulo: 'Propostas, prazos e âmbito',
    corpo: (
      <>
        <p>
          Cada projeto começa com uma proposta escrita que fixa o âmbito, o prazo e o valor. A proposta é válida pelo
          prazo nela indicado e o projeto só avança depois de aceite.
        </p>
        <p>
          O prazo acordado pressupõe que os elementos pedidos ao cliente (textos, imagens, acessos e validações)
          chegam nos momentos combinados. Atrasos nesses elementos adiam o prazo final na mesma medida.
        </p>
        <p>
          Alterações que ultrapassem o âmbito acordado são conversadas antes de serem executadas e, se implicarem
          trabalho adicional, orçamentadas à parte.
        </p>
      </>
    ),
  },
  {
    id: 'pagamentos',
    titulo: 'Pagamentos',
    corpo: (
      <>
        <p>
          As condições de pagamento constam da proposta. Salvo indicação em contrário, o pagamento é dividido entre o
          arranque e a entrega do projeto.
        </p>
        <p>
          Os valores não incluem IVA por a atividade estar isenta ao abrigo do artigo 53.º do Código do IVA. O valor
          da proposta é o valor final.
        </p>
        <p>
          Serviços de terceiros necessários ao projeto — domínio, alojamento, plataformas de comércio eletrónico,
          métodos de pagamento, licenças — são contratados e pagos diretamente pelo cliente a esses fornecedores,
          salvo acordo diferente por escrito.
        </p>
      </>
    ),
  },
  {
    id: 'propriedade-trabalho',
    titulo: 'Propriedade do trabalho entregue',
    corpo: (
      <>
        <p>
          Com o pagamento integral, o cliente passa a ser titular do trabalho desenvolvido especificamente para o
          projeto e pode usá-lo, alterá-lo e transferi-lo sem restrições.
        </p>
        <p>
          O domínio e as contas nos serviços utilizados ficam sempre registados em nome do cliente. Mantêm-se sujeitos
          às respetivas licenças os componentes de terceiros e software de código aberto usados no projeto.
        </p>
        <p>
          Salvo pedido em contrário do cliente, o projeto pode ser apresentado no portefólio da Starmountain Flash.
        </p>
      </>
    ),
  },
  {
    id: 'garantia',
    titulo: 'Garantia e manutenção',
    corpo: (
      <>
        <p>
          Erros de funcionamento imputáveis ao trabalho entregue são corrigidos sem custo durante os 30 dias seguintes
          ao lançamento.
        </p>
        <p>
          Não estão abrangidos por esta garantia problemas causados por alterações feitas por terceiros, falhas de
          serviços externos, ou conteúdos introduzidos pelo cliente. Depois desse período, as alterações são feitas ao
          abrigo de uma avença mensal ou a pedido.
        </p>
      </>
    ),
  },
  {
    id: 'responsabilidade',
    titulo: 'Responsabilidade',
    corpo: (
      <>
        <p>
          Não é garantida a disponibilidade permanente e sem falhas do site nem dos serviços de terceiros de que ele
          depende, nem qualquer resultado comercial específico, como posições em motores de pesquisa ou volume de
          contactos.
        </p>
        <p>
          Nada nestes termos exclui ou limita a responsabilidade nos casos em que a lei não o permite, incluindo dolo
          e negligência grosseira.
        </p>
      </>
    ),
  },
  {
    id: 'litigios',
    titulo: 'Reclamações e resolução de litígios',
    corpo: (
      <>
        <p>
          Qualquer reclamação pode ser enviada para <a href={'mailto:' + site.email}>{site.email}</a> ou registada no{' '}
          <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener">
            Livro de Reclamações Eletrónico
          </a>
          .
        </p>
        <p>
          Em caso de litígio de consumo, o consumidor pode recorrer a uma entidade de resolução alternativa de
          litígios, nos termos da Lei n.º 144/2015, de 8 de setembro. A lista atualizada das entidades está disponível
          no{' '}
          <a href="https://www.consumidor.gov.pt" target="_blank" rel="noopener">
            Portal do Consumidor
          </a>
          . Está também disponível a plataforma europeia de resolução de litígios em linha.
        </p>
      </>
    ),
  },
  {
    id: 'lei',
    titulo: 'Lei aplicável',
    corpo: (
      <p>
        A estes termos aplica-se a lei portuguesa. Para os litígios que não sejam resolvidos por acordo é competente o
        foro da comarca de Castelo Branco, sem prejuízo das regras imperativas aplicáveis a consumidores.
      </p>
    ),
  },
];

export default function Termos() {
  return (
    <>
      <HeroSm
        caminho={[{ label: 'Termos' }]}
        titulo="Termos e condições."
        destaque="O que fica combinado."
        descricao="Condições de utilização do site e regras dos serviços: propostas, prazos, pagamentos, propriedade do trabalho e reclamações."
        acoes="nenhuma"
      />
      <Legal atualizado={ATUALIZADO} seccoes={seccoes} />
      <JsonLd data={migalhasLd([{ nome: 'Termos', caminho: '/termos' }])} />
    </>
  );
}
