import Link from 'next/link';
import type { Metadata } from 'next';
import { HeroSm, JsonLd } from '@/components/Blocks';
import Legal, { type Seccao } from '@/components/Legal';
import { site } from '@/data/site';
import { meta, migalhasLd } from '@/lib/seo';

const TITULO = 'Política de privacidade | Starmountain Flash';
const DESCRICAO =
  'Que dados pessoais a Starmountain Flash recolhe no site, para que servem, quanto tempo ficam guardados e como exercer os seus direitos.';

export const metadata: Metadata = meta({ titulo: TITULO, descricao: DESCRICAO, caminho: '/privacidade' });

const ATUALIZADO = '23 de setembro de 2026';

const seccoes: Seccao[] = [
  {
    id: 'responsavel',
    titulo: 'Quem trata os seus dados',
    corpo: (
      <>
        <p>
          O responsável pelo tratamento dos dados recolhidos neste site é {site.nomeLegal}, que exerce atividade sob o
          nome comercial Starmountain Flash, com sede na {site.localidade}, Portugal, NIF {site.nif}.
        </p>
        <p>
          Para qualquer questão sobre privacidade, escreva para <a href={'mailto:' + site.email}>{site.email}</a> ou
          ligue para <a href={'tel:' + site.telefoneRaw}>{site.telefone}</a>.
        </p>
      </>
    ),
  },
  {
    id: 'dados',
    titulo: 'Que dados são recolhidos',
    corpo: (
      <>
        <p>
          Só são recolhidos dados quando o próprio visitante os envia, ou quando autoriza expressamente a medição de
          audiências.
        </p>
        <h3 id="dados-formulario">Formulário e pedido de orçamento</h3>
        <p>Ao enviar um pedido através do site, são guardados:</p>
        <ul>
          <li>Nome</li>
          <li>Endereço de email</li>
          <li>Empresa, se a indicar</li>
          <li>Telefone, se o indicar</li>
          <li>Serviço pretendido</li>
          <li>A mensagem que escrever</li>
          <li>A página a partir da qual o pedido foi enviado e a data e hora</li>
          <li>
            Um código derivado do endereço IP, obtido por função de dispersão criptográfica com um segredo. Esse
            código serve apenas para limitar envios repetidos e não permite reconstruir o endereço IP.
          </li>
        </ul>
        <h3 id="dados-analytics">Medição de audiências</h3>
        <p>
          Se aceitar no aviso de cookies, é carregado o Google Analytics 4, com anonimização do endereço IP. Se
          recusar, nenhum código de medição é carregado e o site funciona na mesma. A escolha fica guardada apenas no
          seu navegador e pode ser alterada limpando os dados do site.
        </p>
        <h3 id="dados-servidor">Registos técnicos</h3>
        <p>
          O alojamento (Netlify) mantém registos de acesso por motivos de segurança e funcionamento, como qualquer
          servidor web. Não são usados para perfilagem.
        </p>
      </>
    ),
  },
  {
    id: 'finalidades',
    titulo: 'Para que servem e com que fundamento',
    corpo: (
      <ul>
        <li>
          <strong>Responder ao seu pedido e preparar uma proposta.</strong> Fundamento: diligências pré-contratuais a
          seu pedido, nos termos do artigo 6.º, n.º 1, alínea b) do RGPD.
        </li>
        <li>
          <strong>Evitar envios automáticos e abuso do formulário.</strong> Fundamento: interesse legítimo em manter o
          serviço disponível, artigo 6.º, n.º 1, alínea f).
        </li>
        <li>
          <strong>Perceber que páginas são úteis.</strong> Fundamento: o seu consentimento, artigo 6.º, n.º 1, alínea
          a), dado no aviso de cookies e revogável a qualquer momento.
        </li>
      </ul>
    ),
  },
  {
    id: 'prazos',
    titulo: 'Quanto tempo ficam guardados',
    corpo: (
      <ul>
        <li>
          <strong>Pedidos que não deram origem a contrato:</strong> até 2 anos a contar do último contacto, para poder
          retomar a conversa.
        </li>
        <li>
          <strong>Pedidos que deram origem a contrato:</strong> pelo prazo exigido pela legislação fiscal e
          comercial, atualmente 10 anos.
        </li>
        <li>
          <strong>Código derivado do IP:</strong> apagado ao fim de 30 dias.
        </li>
        <li>
          <strong>Dados de audiência:</strong> conforme a retenção configurada no Google Analytics, no máximo 14
          meses.
        </li>
      </ul>
    ),
  },
  {
    id: 'subcontratantes',
    titulo: 'Com quem são partilhados',
    corpo: (
      <>
        <p>
          Os dados não são vendidos nem cedidos para fins publicitários. São tratados pelos seguintes prestadores, que
          atuam como subcontratantes e apenas segundo instruções:
        </p>
        <ul>
          <li>
            <strong>Netlify</strong> — alojamento do site. Dados podem ser tratados fora da União Europeia, ao abrigo
            das cláusulas contratuais-tipo da Comissão Europeia.
          </li>
          <li>
            <strong>Supabase</strong> — base de dados onde ficam guardados os pedidos.
          </li>
          <li>
            <strong>Brevo</strong> — envio da notificação por email de cada novo pedido. Empresa sediada na União
            Europeia.
          </li>
          <li>
            <strong>Google Ireland</strong> — Google Analytics, apenas se aceitar os cookies de medição.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'direitos',
    titulo: 'Os seus direitos',
    corpo: (
      <>
        <p>
          Pode a qualquer momento pedir o acesso, a retificação, o apagamento ou a limitação dos seus dados, opor-se a
          determinado tratamento, pedir a portabilidade dos dados e retirar o consentimento que tenha dado, sem que
          isso afete a licitude do tratamento anterior.
        </p>
        <p>
          Para exercer qualquer destes direitos, basta escrever para{' '}
          <a href={'mailto:' + site.email}>{site.email}</a>. A resposta é dada no prazo de um mês.
        </p>
        <p>
          Se considerar que os seus dados não estão a ser tratados corretamente, pode apresentar reclamação à{' '}
          <a href="https://www.cnpd.pt" target="_blank" rel="noopener">
            Comissão Nacional de Proteção de Dados
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    titulo: 'Cookies e armazenamento local',
    corpo: (
      <>
        <p>O site não usa cookies para funcionar. São usados apenas dois mecanismos:</p>
        <ul>
          <li>
            <strong>Armazenamento local do navegador</strong>, para guardar a sua resposta ao aviso de cookies. Não é
            enviado para nenhum servidor.
          </li>
          <li>
            <strong>Cookies do Google Analytics</strong>, criados apenas se aceitar. Servem para distinguir visitas e
            medir a utilização do site.
          </li>
        </ul>
        <p>
          Para mudar a sua escolha, limpe os dados deste site no navegador: o aviso volta a aparecer na visita
          seguinte. O detalhe de cada cookie, com nomes e durações, está na{' '}
          <Link href="/cookies">política de cookies</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'seguranca',
    titulo: 'Segurança',
    corpo: (
      <p>
        O site é servido exclusivamente por ligação cifrada (HTTPS). As chaves de acesso à base de dados e ao serviço
        de email existem apenas no servidor e nunca chegam ao navegador. O acesso aos pedidos guardados está limitado
        ao responsável pelo tratamento.
      </p>
    ),
  },
  {
    id: 'menores',
    titulo: 'Menores',
    corpo: (
      <>
        <p>
          Os serviços da Starmountain Flash dirigem-se a empresas e profissionais. O site não se destina a menores de
          16 anos e não recolhe intencionalmente dados de menores.
        </p>
        <p>
          Se souber que um menor nos enviou dados pessoais sem autorização de quem exerce as responsabilidades
          parentais, escreva para <a href={'mailto:' + site.email}>{site.email}</a> e esses dados são apagados.
        </p>
      </>
    ),
  },
  {
    id: 'alteracoes',
    titulo: 'Alterações a esta política',
    corpo: (
      <>
        <p>
          Esta política pode ser atualizada sempre que os serviços ou a lei mudem. A data da última atualização está
          indicada ao lado.
        </p>
        <p>
          Veja também a <Link href="/cookies">política de cookies</Link>, o{' '}
          <Link href="/aviso-legal">aviso legal</Link> e os <Link href="/termos">termos e condições</Link>.
        </p>
      </>
    ),
  },
];

export default function Privacidade() {
  return (
    <>
      <HeroSm
        caminho={[{ label: 'Política de privacidade' }]}
        titulo="Política de privacidade."
        destaque="Sem letras pequenas."
        descricao="Que dados são recolhidos neste site, para que servem, quanto tempo ficam guardados e como pode exercer os seus direitos."
        acoes="nenhuma"
      />
      <Legal atualizado={ATUALIZADO} seccoes={seccoes} />
      <JsonLd data={migalhasLd([{ nome: 'Política de privacidade', caminho: '/privacidade' }])} />
    </>
  );
}
