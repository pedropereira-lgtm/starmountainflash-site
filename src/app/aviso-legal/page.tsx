import Link from 'next/link';
import type { Metadata } from 'next';
import { HeroSm, JsonLd } from '@/components/Blocks';
import Legal, { type Seccao } from '@/components/Legal';
import { site } from '@/data/site';
import { meta, migalhasLd } from '@/lib/seo';

const TITULO = 'Aviso legal | Starmountain Flash';
const DESCRICAO =
  'Identificação do titular do site starmountainflash.pt, âmbito, propriedade intelectual, responsabilidade e lei aplicável.';

export const metadata: Metadata = meta({ titulo: TITULO, descricao: DESCRICAO, caminho: '/aviso-legal' });

const ATUALIZADO = '23 de setembro de 2026';

const seccoes: Seccao[] = [
  {
    id: 'titular',
    titulo: 'Identificação do titular',
    corpo: (
      <>
        <p>
          O presente website, disponível em starmountainflash.pt, é propriedade de {site.nomeLegal}, que exerce
          atividade sob o nome comercial Starmountain Flash.
        </p>
        <ul>
          <li>
            <strong>Nome:</strong> {site.nomeLegal}
          </li>
          <li>
            <strong>Nome comercial:</strong> {site.nome}
          </li>
          <li>
            <strong>NIF:</strong> {site.nif}
          </li>
          <li>
            <strong>Sede:</strong> {site.localidade}, Portugal
          </li>
          <li>
            <strong>Email:</strong> <a href={'mailto:' + site.email}>{site.email}</a>
          </li>
          <li>
            <strong>Telefone:</strong> <a href={'tel:' + site.telefoneRaw}>{site.telefone}</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'objeto',
    titulo: 'Objeto e âmbito',
    corpo: (
      <>
        <p>
          Este website tem como finalidade apresentar os serviços de criação de websites, lojas online e automações de
          IA prestados pela Starmountain Flash, e facilitar o contacto com potenciais clientes.
        </p>
        <p>
          O acesso e a utilização do website estão sujeitos às condições descritas neste aviso legal. O simples acesso
          implica a aceitação integral destas condições.
        </p>
      </>
    ),
  },
  {
    id: 'propriedade',
    titulo: 'Propriedade intelectual',
    corpo: (
      <>
        <p>
          Os textos, imagens, logótipo, design, código-fonte e estrutura deste website são propriedade de{' '}
          {site.nomeLegal} / Starmountain Flash, ou são usados com autorização dos respetivos titulares.
        </p>
        <p>
          É proibida a reprodução, distribuição, transformação ou comunicação pública de qualquer conteúdo sem
          autorização prévia e por escrito do titular.
        </p>
        <p>
          Os logótipos e marcas de clientes e instituições apresentados nas páginas de trabalhos pertencem aos
          respetivos titulares e são usados apenas para identificar projetos realizados. A fotografia do topo das
          páginas é de Ricardo Rocha, obtida no Unsplash e usada ao abrigo da licença dessa plataforma.
        </p>
      </>
    ),
  },
  {
    id: 'responsabilidade',
    titulo: 'Responsabilidade',
    corpo: (
      <>
        <p>A Starmountain Flash não se responsabiliza por:</p>
        <ul>
          <li>interrupções, atrasos ou erros de acesso ao website resultantes de causas que não controla;</li>
          <li>conteúdos de sites de terceiros para os quais este website remeta;</li>
          <li>danos resultantes do uso indevido das informações aqui publicadas.</li>
        </ul>
        <p>
          As informações do website são disponibilizadas a título informativo e não constituem uma proposta
          contratual. Cada projeto é objeto de proposta escrita, nos termos descritos nos{' '}
          <Link href="/termos">termos e condições</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'lei',
    titulo: 'Lei aplicável e foro',
    corpo: (
      <p>
        A este aviso legal aplica-se a lei portuguesa. Para os litígios que não sejam resolvidos por acordo é
        competente o foro da comarca de Castelo Branco, sem prejuízo das regras imperativas aplicáveis a consumidores.
      </p>
    ),
  },
  {
    id: 'alteracoes',
    titulo: 'Alterações',
    corpo: (
      <>
        <p>
          Este aviso legal pode ser atualizado sempre que a atividade ou a lei mudem. A data da última atualização
          está indicada ao lado.
        </p>
        <p>
          Veja também a <Link href="/privacidade">política de privacidade</Link>, a{' '}
          <Link href="/cookies">política de cookies</Link> e os <Link href="/termos">termos e condições</Link>.
        </p>
      </>
    ),
  },
];

export default function AvisoLegal() {
  return (
    <>
      <HeroSm
        caminho={[{ label: 'Aviso legal' }]}
        titulo="Aviso legal."
        destaque="Quem é o titular deste site."
        descricao="Identificação, âmbito, propriedade intelectual, responsabilidade e lei aplicável ao site starmountainflash.pt."
        acoes="nenhuma"
      />
      <Legal atualizado={ATUALIZADO} seccoes={seccoes} />
      <JsonLd data={migalhasLd([{ nome: 'Aviso legal', caminho: '/aviso-legal' }])} />
    </>
  );
}
