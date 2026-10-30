import Link from 'next/link';
import type { Metadata } from 'next';
import { HeroSm, JsonLd } from '@/components/Blocks';
import Legal, { type Seccao } from '@/components/Legal';
import { site } from '@/data/site';
import { meta, migalhasLd } from '@/lib/seo';

const TITULO = 'Legal notice | Starmountain Flash';
const DESCRICAO =
  'Identification of the owner of the starmountainflash.pt website, scope, intellectual property, liability and governing law.';

export const metadata: Metadata = meta({
  titulo: TITULO,
  descricao: DESCRICAO,
  caminho: '/en/aviso-legal',
  lang: 'en',
  alternativo: { pt: '/aviso-legal', en: '/en/aviso-legal' },
});

const ATUALIZADO = '23 September 2026';

const seccoes: Seccao[] = [
  {
    id: 'titular',
    titulo: 'Identification of the owner',
    corpo: (
      <>
        <p>
          This website, available at starmountainflash.pt, is owned by {site.nomeLegal}, trading under the business
          name Starmountain Flash.
        </p>
        <ul>
          <li>
            <strong>Name:</strong> {site.nomeLegal}
          </li>
          <li>
            <strong>Business name:</strong> {site.nome}
          </li>
          <li>
            <strong>Tax number (NIF):</strong> {site.nif}
          </li>
          <li>
            <strong>Registered address:</strong> {site.localidade}, Portugal
          </li>
          <li>
            <strong>Email:</strong> <a href={'mailto:' + site.email}>{site.email}</a>
          </li>
          <li>
            <strong>Phone:</strong> <a href={'tel:' + site.telefoneRaw}>{site.telefone}</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'objeto',
    titulo: 'Purpose and scope',
    corpo: (
      <>
        <p>
          The purpose of this website is to present the website design, online shop and AI automation services
          provided by Starmountain Flash, and to make it easier for potential clients to get in touch.
        </p>
        <p>
          Access to and use of the website are subject to the conditions described in this legal notice. Simply
          accessing the website implies full acceptance of these conditions.
        </p>
      </>
    ),
  },
  {
    id: 'propriedade',
    titulo: 'Intellectual property',
    corpo: (
      <>
        <p>
          The text, images, logo, design, source code and structure of this website are the property of{' '}
          {site.nomeLegal} / Starmountain Flash, or are used with the permission of their respective owners.
        </p>
        <p>
          Reproduction, distribution, transformation or public communication of any content without the prior written
          permission of the owner is prohibited.
        </p>
        <p>
          The logos and trademarks of clients and institutions shown on the work pages belong to their respective
          owners and are used only to identify projects carried out. The photograph at the top of the pages is by
          Ricardo Rocha, obtained from Unsplash and used under that platform&apos;s licence.
        </p>
      </>
    ),
  },
  {
    id: 'responsabilidade',
    titulo: 'Liability',
    corpo: (
      <>
        <p>Starmountain Flash is not liable for:</p>
        <ul>
          <li>interruptions, delays or errors in accessing the website resulting from causes beyond its control;</li>
          <li>the content of third-party websites to which this website links;</li>
          <li>damage resulting from improper use of the information published here.</li>
        </ul>
        <p>
          The information on the website is provided for information purposes and does not constitute a contractual
          offer. Each project is the subject of a written proposal, as described in the{' '}
          <Link href="/en/termos">terms and conditions</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'lei',
    titulo: 'Governing law and jurisdiction',
    corpo: (
      <p>
        This legal notice is governed by Portuguese law. Disputes that are not resolved by agreement fall under the
        jurisdiction of the courts of the district of Castelo Branco, without prejudice to the mandatory rules
        applicable to consumers.
      </p>
    ),
  },
  {
    id: 'alteracoes',
    titulo: 'Changes',
    corpo: (
      <>
        <p>
          This legal notice may be updated whenever the business or the law changes. The date of the last update is
          shown alongside.
        </p>
        <p>
          See also the <Link href="/en/privacidade">privacy policy</Link>, the{' '}
          <Link href="/en/cookies">cookie policy</Link> and the <Link href="/en/termos">terms and conditions</Link>.
        </p>
      </>
    ),
  },
];

export default function AvisoLegal() {
  return (
    <>
      <HeroSm
        lang="en"
        caminho={[{ label: 'Legal notice' }]}
        titulo="Legal notice."
        destaque="Who owns this website."
        descricao="Identification, scope, intellectual property, liability and governing law for the starmountainflash.pt website."
        acoes="nenhuma"
      />
      <Legal lang="en" atualizado={ATUALIZADO} seccoes={seccoes} />
      <JsonLd data={migalhasLd([{ nome: 'Legal notice', caminho: '/en/aviso-legal' }], 'en')} />
    </>
  );
}
