import Link from 'next/link';
import type { Metadata } from 'next';
import { HeroSm, JsonLd } from '@/components/Blocks';
import Legal, { type Seccao } from '@/components/Legal';
import { site } from '@/data/site';
import { meta, migalhasLd } from '@/lib/seo';

const TITULO = 'Terms and conditions | Starmountain Flash';
const DESCRICAO =
  'Terms of use of the website and rules for Starmountain Flash services: proposals, deadlines, payments, ownership of the work and dispute resolution.';

export const metadata: Metadata = meta({
  titulo: TITULO,
  descricao: DESCRICAO,
  caminho: '/en/termos',
  lang: 'en',
  alternativo: { pt: '/termos', en: '/en/termos' },
});

const ATUALIZADO = '23 September 2026';

const seccoes: Seccao[] = [
  {
    id: 'identificacao',
    titulo: 'Identification',
    corpo: (
      <>
        <p>
          This website is owned by {site.nomeLegal}, an independent professional trading under the business name
          Starmountain Flash, based in {site.localidade}, Portugal, tax number (NIF) {site.nif}.
        </p>
        <p>
          Contact: <a href={'mailto:' + site.email}>{site.email}</a> ·{' '}
          <a href={'tel:' + site.telefoneRaw}>{site.telefone}</a>.
        </p>
      </>
    ),
  },
  {
    id: 'ambito',
    titulo: 'Scope of these terms',
    corpo: (
      <>
        <p>
          The first part of these terms applies to anyone visiting the website. The second applies to anyone engaging
          services, always together with the signed proposal, which prevails in the event of any discrepancy.
        </p>
        <p>
          Use of the website implies acceptance of these terms and of the{' '}
          <Link href="/en/privacidade">privacy policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'utilizacao',
    titulo: 'Use of the website',
    corpo: (
      <>
        <p>
          The content of the website is provided for information purposes. Every effort is made to keep it accurate
          and up to date, but it does not constitute a contractual offer, nor does it replace an analysis of the
          specific case.
        </p>
        <p>
          You may not use the website for unlawful purposes, attempt to access restricted areas, or send through the
          forms automated content, unsolicited advertising or content that infringes the rights of third parties.
        </p>
      </>
    ),
  },
  {
    id: 'propriedade-site',
    titulo: 'Intellectual property of the website',
    corpo: (
      <>
        <p>
          The design, text, code and the Starmountain Flash brand are the property of the owner identified above. The
          logos and trademarks of clients and institutions shown on the website belong to their respective owners and
          are used only to identify work carried out.
        </p>
        <p>
          The photograph used at the top of the pages is by Ricardo Rocha, obtained from Unsplash and used under that
          platform&apos;s licence.
        </p>
      </>
    ),
  },
  {
    id: 'propostas',
    titulo: 'Proposals, deadlines and scope',
    corpo: (
      <>
        <p>
          Each project begins with a written proposal setting out the scope, the deadline and the price. The proposal
          is valid for the period stated in it and the project only goes ahead once it has been accepted.
        </p>
        <p>
          The agreed deadline assumes that the materials requested from the client (text, images, access and
          approvals) arrive at the agreed times. Delays in those materials push back the final deadline by the same
          amount.
        </p>
        <p>
          Changes that go beyond the agreed scope are discussed before being carried out and, if they involve
          additional work, are quoted separately.
        </p>
      </>
    ),
  },
  {
    id: 'cliente',
    titulo: 'What the client is responsible for',
    corpo: (
      <>
        <p>For the project to move forward within the agreed deadline, the client is responsible for:</p>
        <ul>
          <li>
            delivering text, images, logos and access at the agreed times, and ensuring they have the right to use
            them;
          </li>
          <li>appointing a person responsible for approving the work and responding at the approval points;</li>
          <li>keeping the credentials for the services created in their name secure;</li>
          <li>using the website and the automations in accordance with the law, including data protection rules.</li>
        </ul>
        <p>
          The content provided by the client is the client&apos;s responsibility. No content is published that is
          unlawful, infringes the rights of third parties or is prohibited by law.
        </p>
      </>
    ),
  },
  {
    id: 'pagamentos',
    titulo: 'Payments',
    corpo: (
      <>
        <p>
          The payment terms are set out in the proposal. Unless otherwise stated, payment is split between the start
          and the delivery of the project.
        </p>
        <p>
          Prices do not include VAT, as the activity is exempt under Article 53 of the Portuguese VAT Code (Código do
          IVA). The price in the proposal is the final price.
        </p>
        <p>
          Third-party services needed for the project (domain, hosting, e-commerce platforms, payment methods,
          licences) are contracted and paid for directly by the client with those suppliers, unless otherwise agreed
          in writing.
        </p>
      </>
    ),
  },
  {
    id: 'propriedade-trabalho',
    titulo: 'Ownership of the delivered work',
    corpo: (
      <>
        <p>
          Upon payment in full, the client becomes the owner of the work developed specifically for the project and
          may use, modify and transfer it without restriction.
        </p>
        <p>
          The domain and the accounts on the services used are always registered in the client&apos;s name.
          Third-party components and open-source software used in the project remain subject to their respective
          licences.
        </p>
        <p>
          Unless the client requests otherwise, the project may be shown in the Starmountain Flash portfolio.
        </p>
      </>
    ),
  },
  {
    id: 'garantia',
    titulo: 'Warranty and maintenance',
    corpo: (
      <>
        <p>
          Malfunctions attributable to the delivered work are corrected free of charge during the 30 days following
          the launch.
        </p>
        <p>
          This warranty does not cover problems caused by changes made by third parties, failures of external
          services, or content entered by the client. After that period, changes are made under a monthly retainer or
          on request.
        </p>
      </>
    ),
  },
  {
    id: 'confidencialidade',
    titulo: 'Confidentiality',
    corpo: (
      <>
        <p>
          Everything shared during a project (figures, internal processes, credentials, unannounced plans) is treated
          as confidential and is not disclosed to third parties, nor used for any purpose other than the project
          itself.
        </p>
        <p>
          This obligation continues after the project ends. It does not cover information that is already public,
          that the client authorises to be disclosed, or whose disclosure is required by law or by a competent
          authority.
        </p>
      </>
    ),
  },
  {
    id: 'rescisao',
    titulo: 'Suspension and termination',
    corpo: (
      <>
        <p>
          Either party may end the project in writing. In that case, the work carried out up to that date is
          invoiced, and the amounts paid that correspond to it are not refunded.
        </p>
        <p>
          Work may be suspended for as long as there is a failure to pay or a prolonged failure to provide the
          materials requested from the client. The suspension is notified in advance and the final deadline is pushed
          back by the same amount.
        </p>
        <p>
          Once the project has been paid in full, ownership of the work and of the accounts remains with the client,
          under the previous section, regardless of whether the contract has ended.
        </p>
      </>
    ),
  },
  {
    id: 'responsabilidade',
    titulo: 'Liability',
    corpo: (
      <>
        <p>
          Permanent and fault-free availability of the website, or of the third-party services it depends on, is not
          guaranteed, nor is any specific commercial result, such as search engine rankings or the volume of enquiries.
        </p>
        <p>
          Nothing in these terms excludes or limits liability where the law does not allow it, including wilful
          misconduct and gross negligence.
        </p>
      </>
    ),
  },
  {
    id: 'litigios',
    titulo: 'Complaints and dispute resolution',
    corpo: (
      <>
        <p>
          Any complaint can be sent to <a href={'mailto:' + site.email}>{site.email}</a> or recorded in the{' '}
          <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener">
            Electronic Complaints Book (Livro de Reclamações Eletrónico)
          </a>
          .
        </p>
        <p>
          In the event of a consumer dispute, the consumer may turn to an alternative dispute resolution entity, under
          Portuguese Law No. 144/2015 of 8 September. The up-to-date list of entities is available on the{' '}
          <a href="https://www.consumidor.gov.pt" target="_blank" rel="noopener">
            Consumer Portal (Portal do Consumidor)
          </a>
          . The European online dispute resolution platform is also available.
        </p>
      </>
    ),
  },
  {
    id: 'lei',
    titulo: 'Governing law',
    corpo: (
      <p>
        These terms are governed by Portuguese law. Disputes that are not resolved by agreement fall under the
        jurisdiction of the courts of the district of Castelo Branco, without prejudice to the mandatory rules
        applicable to consumers.
      </p>
    ),
  },
];

export default function Termos() {
  return (
    <>
      <HeroSm
        lang="en"
        caminho={[{ label: 'Terms' }]}
        titulo="Terms and conditions."
        destaque="What we agree on."
        descricao="Terms of use of the website and rules for the services: proposals, deadlines, payments, ownership of the work and complaints."
        acoes="nenhuma"
      />
      <Legal lang="en" atualizado={ATUALIZADO} seccoes={seccoes} />
      <JsonLd data={migalhasLd([{ nome: 'Terms', caminho: '/en/termos' }], 'en')} />
    </>
  );
}
