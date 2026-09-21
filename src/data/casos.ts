/**
 * Conteúdo dos casos de estudo.
 * O que está entre [ ] é placeholder do protótipo, à espera de conteúdo real.
 */
export type Cor = { nome: string; hex?: string };

export type Caso = {
  slug: string;
  /** Título e descrição da página (metadata). */
  titulo: string;
  descricao: string;
  /** Hero. */
  h1: string;
  h1Destaque: string;
  intro: string;
  /** Ficha técnica no topo. */
  ficha: { dt: string; dd: string }[];
  desafio: string;
  solucao: string;
  resultado: string;
  cores: Cor[];
  fontes: { titulos: string; texto: string };
  estrutura: string[];
  tecnologia: string[];
  visitar: string;
};

export const casos: Record<string, Caso> = {
  ubi: {
    slug: 'ubi',
    titulo: 'Universidade da Beira Interior — Caso de estudo | Starmountain Flash',
    descricao:
      'Três sites para a Universidade da Beira Interior, na Covilhã: o site do Departamento de Informática e dois sites de projetos de investigação e eventos.',
    h1: 'Universidade da Beira Interior.',
    h1Destaque: 'Três sites institucionais.',
    intro:
      'Três sites para a Universidade da Beira Interior, na Covilhã: o site do Departamento de Informática e dois sites de projetos de investigação e eventos.',
    ficha: [
      { dt: 'Cliente', dd: 'Universidade da Beira Interior' },
      { dt: 'Serviço', dd: 'Sites institucionais' },
      { dt: 'Ano', dd: '[Ano]' },
      { dt: 'Sites', dd: 'dei.ubi.pt · lgbthealth.ubi.pt · 3lgbt.ubi.pt' },
    ],
    desafio:
      '[O que a UBI precisava: por exemplo, substituir sites antigos, dar uma imagem coerente aos projetos, facilitar a atualização de conteúdos.]',
    solucao:
      '[Como foi feito: estrutura das páginas, conteúdos principais, como os responsáveis atualizam o site.]',
    resultado:
      'Três sites institucionais no ar e a Starmountain Flash como fornecedor digital da universidade. [Acrescentar um resultado concreto, se houver.]',
    cores: [
      { nome: 'Azul UBI', hex: '#0D2C54' },
      { nome: '[Secundária]' },
      { nome: '[Fundo]' },
      { nome: '[Texto]' },
    ],
    fontes: { titulos: '[Fonte dos títulos]', texto: '[Fonte do texto]' },
    estrutura: ['Início', '[Página]', '[Página]', '[Página]'],
    tecnologia: ['[Tecnologia usada]', '[Alojamento]', '[Outras ferramentas]'],
    visitar: 'https://dei.ubi.pt',
  },

  'planet-trading': {
    slug: 'planet-trading',
    titulo: 'Planet Trading — Caso de estudo | Starmountain Flash',
    descricao:
      'Landing page de página única para a comunidade Planet Trading, construída em 3D com WebGL e com o formulário ligado diretamente a um CRM.',
    h1: 'Planet Trading.',
    h1Destaque: 'Uma landing page em 3D.',
    intro:
      'Landing page de página única para a comunidade Planet Trading, construída em 3D com WebGL e com o formulário ligado diretamente a um CRM.',
    ficha: [
      { dt: 'Cliente', dd: 'Planet Trading' },
      { dt: 'Serviço', dd: 'Landing page + integração CRM' },
      { dt: 'Ano', dd: '2026' },
      { dt: 'Site', dd: 'comunidadeplanet.pt' },
    ],
    desafio:
      'Lançar a nova fase da comunidade, "New Era", com uma página que causasse impacto logo à primeira visita e que transformasse visitas em contactos organizados, prontos a seguir.',
    solucao:
      'Uma página única construída em 3D com WebGL, com vídeos de fundo e animações, e um formulário que envia cada contacto diretamente para o CRM. Tudo desenvolvido em código, sem construtores.',
    resultado:
      'Site em produção em comunidadeplanet.pt, com abertura pública prevista para outubro de 2026. [Acrescentar um resultado concreto depois do lançamento.]',
    cores: [{ nome: '[Primária]' }, { nome: '[Secundária]' }, { nome: '[Fundo]' }, { nome: '[Texto]' }],
    fontes: { titulos: '[Fonte dos títulos]', texto: '[Fonte do texto]' },
    estrutura: ['Hero em 3D', '[Secção]', '[Secção]', 'Formulário de contacto'],
    tecnologia: ['WebGL / 3D', 'Vídeo de fundo', 'Formulário ligado a CRM', '[Alojamento]'],
    visitar: 'https://comunidadeplanet.pt',
  },

  studyos: {
    slug: 'studyos',
    titulo: 'StudyOS — Caso de estudo | Starmountain Flash',
    descricao: 'Caso de estudo StudyOS: como foi feito o projeto da Starmountain Flash.',
    h1: 'StudyOS.',
    h1Destaque: 'Uma plataforma web para estudantes.',
    intro: '[Uma frase sobre o StudyOS: o que é, para quem é e o que resolve.]',
    ficha: [
      { dt: 'Cliente', dd: '[Cliente]' },
      { dt: 'Serviço', dd: 'Plataforma web' },
      { dt: 'Ano', dd: '[Ano]' },
      { dt: 'Site', dd: 'gestaocrew.pt' },
    ],
    desafio: '[O problema que a plataforma resolve.]',
    solucao: '[Como foi construída: funcionalidades principais, área de membros, pagamentos, etc.]',
    resultado: '[Resultado: utilizadores, estado atual, próximos passos.]',
    cores: [{ nome: '[Primária]' }, { nome: '[Secundária]' }, { nome: '[Fundo]' }, { nome: '[Texto]' }],
    fontes: { titulos: '[Fonte dos títulos]', texto: '[Fonte do texto]' },
    estrutura: ['[Página]', '[Página]', '[Página]', '[Página]'],
    tecnologia: ['[Tecnologia usada]', '[Base de dados]', '[Alojamento]'],
    visitar: 'https://gestaocrew.pt',
  },
};

/** Fundo às riscas usado enquanto a cor real não está definida. */
export const AMOSTRA_VAZIA = 'repeating-linear-gradient(135deg,#F6F5F2 0 8px,#ECEAE4 8px 16px)';
