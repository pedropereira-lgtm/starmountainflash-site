import Link from 'next/link';
import type { Metadata } from 'next';
import { HeroSm, JsonLd } from '@/components/Blocks';
import Legal, { type Seccao } from '@/components/Legal';
import { site } from '@/data/site';
import { meta, migalhasLd } from '@/lib/seo';

const TITULO = 'Privacy policy | Starmountain Flash';
const DESCRICAO =
  'What personal data Starmountain Flash collects on its website, what it is used for, how long it is kept and how to exercise your rights.';

export const metadata: Metadata = meta({
  titulo: TITULO,
  descricao: DESCRICAO,
  caminho: '/en/privacidade',
  lang: 'en',
  alternativo: { pt: '/privacidade', en: '/en/privacidade' },
});

const ATUALIZADO = '23 September 2026';

const seccoes: Seccao[] = [
  {
    id: 'responsavel',
    titulo: 'Who processes your data',
    corpo: (
      <>
        <p>
          The controller of the data collected on this website is {site.nomeLegal}, trading under the business name
          Starmountain Flash, based in {site.localidade}, Portugal, tax number (NIF) {site.nif}.
        </p>
        <p>
          For any privacy question, write to <a href={'mailto:' + site.email}>{site.email}</a> or call{' '}
          <a href={'tel:' + site.telefoneRaw}>{site.telefone}</a>.
        </p>
      </>
    ),
  },
  {
    id: 'dados',
    titulo: 'What data is collected',
    corpo: (
      <>
        <p>
          Data is only collected when visitors send it themselves, or when they expressly allow audience measurement.
        </p>
        <h3 id="dados-formulario">Form and quote request</h3>
        <p>When you send a request through the website, the following is stored:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Company, if you provide it</li>
          <li>Phone number, if you provide it</li>
          <li>Service requested</li>
          <li>The message you write</li>
          <li>The page from which the request was sent, and the date and time</li>
          <li>
            A code derived from the IP address, obtained through a cryptographic hash function with a secret. This
            code is used only to limit repeated submissions and cannot be used to reconstruct the IP address.
          </li>
        </ul>
        <h3 id="dados-analytics">Audience measurement</h3>
        <p>
          If you accept in the cookie notice, Google Analytics 4 is loaded, with IP address anonymisation. If you
          decline, no measurement code is loaded and the website works just the same. Your choice is stored only in
          your browser and can be changed by clearing the site data.
        </p>
        <h3 id="dados-servidor">Technical logs</h3>
        <p>
          The hosting provider (Netlify) keeps access logs for security and operational reasons, like any web server.
          They are not used for profiling.
        </p>
      </>
    ),
  },
  {
    id: 'finalidades',
    titulo: 'What it is used for and on what legal basis',
    corpo: (
      <ul>
        <li>
          <strong>Replying to your request and preparing a proposal.</strong> Legal basis: steps taken at your request
          prior to entering into a contract, under Article 6(1)(b) of the GDPR.
        </li>
        <li>
          <strong>Preventing automated submissions and abuse of the form.</strong> Legal basis: legitimate interest in
          keeping the service available, Article 6(1)(f).
        </li>
        <li>
          <strong>Understanding which pages are useful.</strong> Legal basis: your consent, Article 6(1)(a), given in
          the cookie notice and revocable at any time.
        </li>
      </ul>
    ),
  },
  {
    id: 'prazos',
    titulo: 'How long it is kept',
    corpo: (
      <ul>
        <li>
          <strong>Requests that did not lead to a contract:</strong> up to 2 years from the last contact, so that the
          conversation can be resumed.
        </li>
        <li>
          <strong>Requests that led to a contract:</strong> for the period required by tax and commercial law,
          currently 10 years.
        </li>
        <li>
          <strong>Code derived from the IP address:</strong> deleted after 30 days.
        </li>
        <li>
          <strong>Audience data:</strong> according to the retention configured in Google Analytics, up to a maximum
          of 14 months.
        </li>
      </ul>
    ),
  },
  {
    id: 'subcontratantes',
    titulo: 'Who it is shared with',
    corpo: (
      <>
        <p>
          The data is not sold or passed on for advertising purposes. It is processed by the following providers, who
          act as processors and only on instructions:
        </p>
        <ul>
          <li>
            <strong>Netlify</strong>: website hosting. Data may be processed outside the European Union, under the
            European Commission&apos;s standard contractual clauses.
          </li>
          <li>
            <strong>Supabase</strong>: database where requests are stored.
          </li>
          <li>
            <strong>Brevo</strong>: sending the email notification for each new request. A company based in the
            European Union.
          </li>
          <li>
            <strong>Google Ireland</strong>: Google Analytics, only if you accept the measurement cookies.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'direitos',
    titulo: 'Your rights',
    corpo: (
      <>
        <p>
          You may at any time request access to, rectification, erasure or restriction of your data, object to
          certain processing, request data portability and withdraw any consent you have given, without affecting the
          lawfulness of processing carried out before withdrawal.
        </p>
        <p>
          To exercise any of these rights, simply write to <a href={'mailto:' + site.email}>{site.email}</a>. A reply
          is given within one month.
        </p>
        <p>
          If you believe your data is not being processed correctly, you may lodge a complaint with the{' '}
          <a href="https://www.cnpd.pt" target="_blank" rel="noopener">
            Portuguese Data Protection Authority (Comissão Nacional de Proteção de Dados, CNPD)
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    titulo: 'Cookies and local storage',
    corpo: (
      <>
        <p>The website does not use cookies to work. Only two mechanisms are used:</p>
        <ul>
          <li>
            <strong>Browser local storage</strong>, to store your answer to the cookie notice. It is not sent to any
            server.
          </li>
          <li>
            <strong>Google Analytics cookies</strong>, created only if you accept. They are used to distinguish visits
            and measure use of the website.
          </li>
        </ul>
        <p>
          To change your choice, clear this site&apos;s data in your browser: the notice will appear again on your
          next visit. Details of each cookie, with names and durations, are in the{' '}
          <Link href="/en/cookies">cookie policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'seguranca',
    titulo: 'Security',
    corpo: (
      <p>
        The website is served exclusively over an encrypted connection (HTTPS). The access keys to the database and to
        the email service exist only on the server and never reach the browser. Access to stored requests is limited
        to the controller.
      </p>
    ),
  },
  {
    id: 'menores',
    titulo: 'Minors',
    corpo: (
      <>
        <p>
          Starmountain Flash&apos;s services are aimed at businesses and professionals. The website is not intended
          for anyone under 16 and does not knowingly collect data from minors.
        </p>
        <p>
          If you become aware that a minor has sent us personal data without the authorisation of the holder of
          parental responsibility, write to <a href={'mailto:' + site.email}>{site.email}</a> and that data will be
          deleted.
        </p>
      </>
    ),
  },
  {
    id: 'alteracoes',
    titulo: 'Changes to this policy',
    corpo: (
      <>
        <p>
          This policy may be updated whenever the services or the law change. The date of the last update is shown
          alongside.
        </p>
        <p>
          See also the <Link href="/en/cookies">cookie policy</Link>, the{' '}
          <Link href="/en/aviso-legal">legal notice</Link> and the{' '}
          <Link href="/en/termos">terms and conditions</Link>.
        </p>
      </>
    ),
  },
];

export default function Privacidade() {
  return (
    <>
      <HeroSm
        lang="en"
        caminho={[{ label: 'Privacy policy' }]}
        titulo="Privacy policy."
        destaque="No small print."
        descricao="What data is collected on this website, what it is used for, how long it is kept and how you can exercise your rights."
        acoes="nenhuma"
      />
      <Legal lang="en" atualizado={ATUALIZADO} seccoes={seccoes} />
      <JsonLd data={migalhasLd([{ nome: 'Privacy policy', caminho: '/en/privacidade' }], 'en')} />
    </>
  );
}
