import type { Metadata } from 'next';
import { sameAs, site } from '@/data/site';
import type { Faq } from '@/data/faqs';

export const OG_PADRAO = '/img/og-starmountain-flash.jpg';

/** Metadata de uma página, com canonical e Open Graph sempre preenchidos. */
export function meta({
  titulo,
  descricao,
  caminho,
  imagem = OG_PADRAO,
  tipo = 'website',
  publicadoEm,
  atualizadoEm,
}: {
  titulo: string;
  descricao: string;
  caminho: string;
  imagem?: string;
  tipo?: 'website' | 'article';
  publicadoEm?: string;
  atualizadoEm?: string;
}): Metadata {
  const url = site.url + caminho;
  return {
    title: titulo,
    description: descricao,
    alternates: { canonical: caminho },
    openGraph: {
      type: tipo,
      url,
      title: titulo,
      description: descricao,
      siteName: site.nome,
      locale: 'pt_PT',
      images: [{ url: imagem, width: 1200, height: 630, alt: site.nome }],
      ...(tipo === 'article'
        ? { publishedTime: publicadoEm, modifiedTime: atualizadoEm ?? publicadoEm, authors: [site.fundador] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: titulo,
      description: descricao,
      images: [imagem],
    },
  };
}

/** A empresa. Referenciada por @id a partir dos outros blocos. */
export const negocioLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': site.url + '/#negocio',
  name: site.nome,
  url: site.url,
  email: site.email,
  telephone: site.telefoneRaw.replace(/\s/g, ''),
  // Repetido em vez de só referenciado, para o bloco fazer sentido isolado,
  // e com @id para os artigos poderem ligar o autor a esta mesma pessoa.
  founder: { '@type': 'Person', '@id': site.url + '/sobre#pedro-pereira', name: site.fundador },
  address: { '@type': 'PostalAddress', addressLocality: site.localidade, addressCountry: site.pais },
  areaServed: 'PT',
  description: site.descricao,
  knowsAbout: ['Criação de websites', 'Lojas online', 'Automações de IA', 'SEO'],
  ...(sameAs.length ? { sameAs } : {}),
};

/** O Pedro. Usado no /sobre e como autor dos artigos. */
export const pessoaLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': site.url + '/sobre#pedro-pereira',
  name: site.fundador,
  url: site.url + '/sobre',
  jobTitle: 'Fundador',
  worksFor: { '@id': site.url + '/#negocio' },
  address: { '@type': 'PostalAddress', addressLocality: site.localidade, addressCountry: site.pais },
  // Só perfis pessoais. Os da empresa estão no negocioLd.
  sameAs: ['https://www.linkedin.com/in/pedro-silva-pereira-89782a313/'],
};

export function migalhasLd(itens: { nome: string; caminho: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ nome: 'Início', caminho: '/' }, ...itens].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.nome,
      item: site.url + (it.caminho === '/' ? '/' : it.caminho),
    })),
  };
}

export function faqLd(itens: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: itens.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function servicoLd({
  nome,
  descricao,
  caminho,
  tipo,
}: {
  nome: string;
  descricao: string;
  caminho: string;
  tipo: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: nome,
    description: descricao,
    serviceType: tipo,
    url: site.url + caminho,
    provider: { '@id': site.url + '/#negocio' },
    areaServed: { '@type': 'Country', name: 'Portugal' },
  };
}
