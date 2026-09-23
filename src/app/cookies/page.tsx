import Link from 'next/link';
import type { Metadata } from 'next';
import { HeroSm, JsonLd } from '@/components/Blocks';
import Legal, { type Seccao } from '@/components/Legal';
import { site } from '@/data/site';
import { meta, migalhasLd } from '@/lib/seo';

const TITULO = 'Política de cookies | Starmountain Flash';
const DESCRICAO =
  'Que cookies o site starmountainflash.pt usa, para que servem, quanto tempo duram e como mudar a sua escolha a qualquer momento.';

export const metadata: Metadata = meta({ titulo: TITULO, descricao: DESCRICAO, caminho: '/cookies' });

const ATUALIZADO = '23 de setembro de 2026';

const seccoes: Seccao[] = [
  {
    id: 'o-que-sao',
    titulo: 'O que são cookies',
    corpo: (
      <>
        <p>
          Cookies são pequenos ficheiros de texto que um site guarda no seu navegador. Servem, por exemplo, para
          lembrar preferências ou para contar visitas. Junto deles há tecnologias semelhantes, como o armazenamento
          local do navegador, que funcionam da mesma maneira mas não são enviadas ao servidor.
        </p>
        <p>
          <strong>Este site não precisa de cookies para funcionar.</strong> Pode recusá-los por completo e continua a
          ter o site inteiro disponível.
        </p>
      </>
    ),
  },
  {
    id: 'que-cookies',
    titulo: 'Que cookies são usados',
    corpo: (
      <>
        <h3 id="necessarios">Sempre presentes</h3>
        <p>
          Apenas um registo no armazenamento local do navegador, que guarda a sua resposta ao aviso de cookies para
          não voltar a perguntar. Não é um cookie, não é enviado para nenhum servidor e não permite identificá-lo.
        </p>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Para que serve</th>
              <th>Duração</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>smf-cookies</code>
              </td>
              <td>Guarda se aceitou ou recusou a medição de audiências</td>
              <td>Até limpar os dados do site</td>
            </tr>
          </tbody>
        </table>

        <h3 id="analitica">Só com o seu consentimento</h3>
        <p>
          Se carregar em <strong>Aceitar</strong>, é carregado o Google Analytics 4, com anonimização do endereço IP.
          Serve para perceber que páginas são úteis e de onde chegam as visitas. Se recusar, nenhum destes cookies é
          criado.
        </p>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Para que serve</th>
              <th>Duração</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>_ga</code>
              </td>
              <td>Distingue visitantes entre si</td>
              <td>2 anos</td>
            </tr>
            <tr>
              <td>
                <code>_ga_*</code>
              </td>
              <td>Mantém o estado da sessão de medição</td>
              <td>2 anos</td>
            </tr>
          </tbody>
        </table>
        <p>
          Estes cookies são do Google Ireland Limited. Pode consultar a{' '}
          <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener">
            informação do Google sobre cookies
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'gerir',
    titulo: 'Como mudar a sua escolha',
    corpo: (
      <>
        <p>
          Para voltar a decidir, limpe os dados deste site no seu navegador: o aviso reaparece na visita seguinte e
          pode escolher outra vez. Ao recusar, os cookies de medição deixam de ser criados.
        </p>
        <p>
          Pode também bloquear ou apagar cookies nas definições do navegador, a qualquer momento, sem que isso afete o
          funcionamento deste site.
        </p>
      </>
    ),
  },
  {
    id: 'contacto',
    titulo: 'Contacto',
    corpo: (
      <>
        <p>
          Para qualquer questão sobre cookies ou privacidade, escreva para{' '}
          <a href={'mailto:' + site.email}>{site.email}</a>.
        </p>
        <p>
          Veja também a <Link href="/privacidade">política de privacidade</Link>, o{' '}
          <Link href="/aviso-legal">aviso legal</Link> e os <Link href="/termos">termos e condições</Link>.
        </p>
      </>
    ),
  },
];

export default function Cookies() {
  return (
    <>
      <HeroSm
        caminho={[{ label: 'Cookies' }]}
        titulo="Política de cookies."
        destaque="Poucos, e só com autorização."
        descricao="Que cookies este site usa, para que servem, quanto tempo duram e como mudar a sua escolha a qualquer momento."
        acoes="nenhuma"
      />
      <Legal atualizado={ATUALIZADO} seccoes={seccoes} />
      <JsonLd data={migalhasLd([{ nome: 'Política de cookies', caminho: '/cookies' }])} />
    </>
  );
}
