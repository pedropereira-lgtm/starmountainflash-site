export type Trabalho = {
  slug: string;
  nome: string;
  /** Versão curta, para menus e listagens. */
  nomeCurto: string;
  /** Mostrado na lista da home. */
  resumo: string;
  dominio: string;
  tags: string[];
  /** false = não aparece em lado nenhum (nem na home, nem no sitemap, nem no /llms.txt). */
  published: boolean;
  /** "wide" ocupa as duas colunas da grelha de trabalhos. */
  layout: 'wide' | 'normal';
  /** Como se identifica a marca dentro da moldura do browser. */
  marca: { tipo: 'img'; src: string; alt: string } | { tipo: 'texto'; texto: string } | { tipo: 'img-texto'; src: string; texto: string };
  /** Screenshot para os cartões. Sem ele, fica a marca, como no protótipo. */
  screenshot?: string;
  /**
   * Localidade do cliente. Só entra no /llms.txt; não aparece nas páginas.
   * Preencher apenas com autorização do cliente.
   */
  localidade?: string;
};

export const trabalhos: Trabalho[] = [
  {
    slug: 'ubi',
    nomeCurto: 'UBI',
    nome: 'Universidade da Beira Interior',
    resumo: 'Três sites institucionais · dei.ubi.pt · lgbthealth.ubi.pt · 3lgbt.ubi.pt',
    dominio: 'dei.ubi.pt',
    tags: ['Site institucional', 'Ensino superior'],
    published: true,
    layout: 'wide',
    marca: { tipo: 'img', src: '/img/ubi.png', alt: 'Universidade da Beira Interior' },
    screenshot: '/img/trabalhos/ubi-dei-desktop.webp',
    localidade: 'Covilhã',
  },
  {
    // Escondido até o site ser aberto ao público (previsto para a semana de
    // 28 de setembro de 2026). Para o repor: published: true. O conteúdo do
    // caso continua todo em casos.ts e volta a aparecer sozinho.
    slug: 'planet-trading',
    nomeCurto: 'Planet Trading',
    nome: 'Planet Trading',
    resumo: 'Landing page 3D com formulário ligado a CRM',
    dominio: 'comunidadeplanet.pt',
    tags: ['WebGL', 'CRM'],
    published: false,
    layout: 'normal',
    marca: { tipo: 'img-texto', src: '/img/planet-trading.png', texto: 'Planet Trading' },
  },
  {
    slug: 'studyos',
    nomeCurto: 'StudyOS',
    nome: 'StudyOS',
    resumo: 'Plataforma web para estudantes',
    dominio: 'gestaocrew.pt',
    tags: ['Plataforma'],
    published: true,
    layout: 'normal',
    marca: { tipo: 'texto', texto: 'StudyOS' },
    screenshot: '/img/trabalhos/studyos-landing-desktop.webp',
  },
  {
    // Por publicar. Mudar para published: true quando o site estiver no ar
    // e confirmar o domínio real.
    slug: 'diogo-costa',
    nomeCurto: 'Diogo Costa',
    nome: 'Diogo Costa — Personal Trainer',
    resumo: 'Site de conversão para acompanhamento online · Porto',
    dominio: 'diogocosta.pt',
    tags: ['Landing page', 'Conversão'],
    published: false,
    layout: 'wide',
    marca: { tipo: 'texto', texto: 'Diogo Costa' },
  },
];

export const trabalhosPublicados = trabalhos.filter((t) => t.published);

/** "UBI, StudyOS e mais" — para menus. Acompanha sempre o que está publicado. */
export function nomesPublicados(comMais = false) {
  const nomes = trabalhosPublicados.map((t) => t.nomeCurto);
  const lista =
    nomes.length > 1 ? nomes.slice(0, -1).join(', ') + ' e ' + nomes[nomes.length - 1] : (nomes[0] ?? '');
  return comMais ? nomes.join(', ') + ' e mais' : lista;
}

export function trabalhoPorSlug(slug: string) {
  return trabalhos.find((t) => t.slug === slug);
}

/** O "Próximo trabalho" no fim de cada caso, em ciclo pelos publicados. */
export function proximoTrabalho(slug: string) {
  const i = trabalhosPublicados.findIndex((t) => t.slug === slug);
  if (i === -1) return trabalhosPublicados[0];
  return trabalhosPublicados[(i + 1) % trabalhosPublicados.length];
}
