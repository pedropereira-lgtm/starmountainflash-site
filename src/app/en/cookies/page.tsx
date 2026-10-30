import Link from 'next/link';
import type { Metadata } from 'next';
import { HeroSm, JsonLd } from '@/components/Blocks';
import Legal, { type Seccao } from '@/components/Legal';
import { site } from '@/data/site';
import { meta, migalhasLd } from '@/lib/seo';

const TITULO = 'Cookie policy | Starmountain Flash';
const DESCRICAO =
  'Which cookies the starmountainflash.pt website uses, what they are for, how long they last and how to change your choice at any time.';

export const metadata: Metadata = meta({
  titulo: TITULO,
  descricao: DESCRICAO,
  caminho: '/en/cookies',
  lang: 'en',
  alternativo: { pt: '/cookies', en: '/en/cookies' },
});

const ATUALIZADO = '23 September 2026';

const seccoes: Seccao[] = [
  {
    id: 'o-que-sao',
    titulo: 'What cookies are',
    corpo: (
      <>
        <p>
          Cookies are small text files that a website stores in your browser. They are used, for example, to remember
          preferences or to count visits. Alongside them there are similar technologies, such as browser local
          storage, which work in the same way but are not sent to the server.
        </p>
        <p>
          <strong>This website does not need cookies to work.</strong> You can refuse them completely and still have
          the whole website available.
        </p>
      </>
    ),
  },
  {
    id: 'que-cookies',
    titulo: 'Which cookies are used',
    corpo: (
      <>
        <h3 id="necessarios">Always present</h3>
        <p>
          Only one entry in browser local storage, which stores your answer to the cookie notice so that you are not
          asked again. It is not a cookie, it is not sent to any server and it cannot be used to identify you.
        </p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>smf-cookies</code>
              </td>
              <td>Stores whether you accepted or declined audience measurement</td>
              <td>Until you clear the site data</td>
            </tr>
          </tbody>
        </table>

        <h3 id="analitica">Only with your consent</h3>
        <p>
          If you click <strong>Accept</strong>, Google Analytics 4 is loaded, with IP address anonymisation. It is
          used to understand which pages are useful and where visits come from. If you decline, none of these cookies
          is created.
        </p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>_ga</code>
              </td>
              <td>Distinguishes visitors from one another</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td>
                <code>_ga_*</code>
              </td>
              <td>Maintains the state of the measurement session</td>
              <td>2 years</td>
            </tr>
          </tbody>
        </table>
        <p>
          These cookies belong to Google Ireland Limited. You can read{' '}
          <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener">
            Google&apos;s information about cookies
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'gerir',
    titulo: 'How to change your choice',
    corpo: (
      <>
        <p>
          To decide again, clear this site&apos;s data in your browser: the notice reappears on your next visit and
          you can choose again. If you decline, the measurement cookies are no longer created.
        </p>
        <p>
          You can also block or delete cookies in your browser settings at any time, without affecting how this
          website works.
        </p>
      </>
    ),
  },
  {
    id: 'contacto',
    titulo: 'Contact',
    corpo: (
      <>
        <p>
          For any question about cookies or privacy, write to <a href={'mailto:' + site.email}>{site.email}</a>.
        </p>
        <p>
          See also the <Link href="/en/privacidade">privacy policy</Link>, the{' '}
          <Link href="/en/aviso-legal">legal notice</Link> and the{' '}
          <Link href="/en/termos">terms and conditions</Link>.
        </p>
      </>
    ),
  },
];

export default function Cookies() {
  return (
    <>
      <HeroSm
        lang="en"
        caminho={[{ label: 'Cookies' }]}
        titulo="Cookie policy."
        destaque="Few, and only with permission."
        descricao="Which cookies this website uses, what they are for, how long they last and how to change your choice at any time."
        acoes="nenhuma"
      />
      <Legal lang="en" atualizado={ATUALIZADO} seccoes={seccoes} />
      <JsonLd data={migalhasLd([{ nome: 'Cookie policy', caminho: '/en/cookies' }], 'en')} />
    </>
  );
}
