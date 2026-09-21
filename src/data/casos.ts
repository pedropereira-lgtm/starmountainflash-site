/**
 * Conteúdo dos casos de estudo.
 *
 * Tudo o que for opcional e não estiver preenchido desaparece da página:
 * não pode ir para o site publicado nenhum texto por preencher.
 */
export type Cor = { nome: string; hex?: string; gradiente?: string };
/** O papel é livre: nem sempre é só "títulos" e "texto corrido". */
export type Fonte = { nome: string; papel: string };

/** Um caso pode cobrir mais do que um site; cada um tem a sua sub-secção. */
export type SiteDoCaso = {
  id: string;
  nome: string;
  dominio: string;
  href: string;
  descricao: string;
  destaques?: string[];
  estrutura?: string[];
  cores?: Cor[];
  fontes?: Fonte[];
  mockup?: string;
  desktop?: string;
  mobile?: string;
};

/** Bloco extra depois da história, para mostrar outra parte do projeto. */
export type SeccaoExtra = {
  etiqueta: string;
  titulo: string;
  destaque?: string;
  descricao?: string;
  dominio: string;
  nome: string;
  mockup?: string;
  desktop?: string;
  mobile?: string;
};

export type Caso = {
  slug: string;
  titulo: string;
  descricao: string;
  h1: string;
  h1Destaque: string;
  intro: string;
  ficha: { dt: string; dd: string }[];
  desafio: string;
  solucao: string;
  resultado: string;
  tecnologia: string[];
  /** Imagem do topo da página, já com moldura própria. */
  mockupTopo?: string;
  /** Screenshots da página principal, logo a seguir à história. */
  desktop?: string;
  mobile?: string;
  seccoesExtra?: SeccaoExtra[];
  /** Para casos de um só site. */
  cores?: Cor[];
  fontes?: Fonte[];
  estrutura?: string[];
  /** Para casos com vários sites. */
  sites?: SiteDoCaso[];
  /** Um botão por site. */
  visitar: { label: string; href: string }[];
  /** Avaliação a destacar, e a seguir a que sub-secção. */
  testemunhoDepoisDe?: string;
  testemunhoNome?: string;
  testemunhoLegenda?: string;
};

export const casos: Record<string, Caso> = {
  ubi: {
    slug: 'ubi',
    titulo: 'Universidade da Beira Interior — Caso de estudo | Starmountain Flash',
    descricao:
      'Três sites para três iniciativas da Universidade da Beira Interior: a Mostra UBI Equidade, o 3.º Seminário à Visibilidade LGBTQIA+ e o lançamento de um livro.',
    h1: 'Universidade da Beira Interior.',
    h1Destaque: 'Três sites, três iniciativas.',
    intro:
      'Três sites para três iniciativas da UBI, na Covilhã: a Mostra UBI Equidade, o 3.º Seminário Internacional Interdisciplinar à Visibilidade LGBTQIA+ e o lançamento de um livro sobre saúde ocupacional em populações LGBTQIA+.',
    ficha: [
      { dt: 'Cliente', dd: 'Universidade da Beira Interior' },
      { dt: 'Serviço', dd: 'Websites de eventos e publicações' },
      { dt: 'Ano', dd: '2026' },
      { dt: 'Sites', dd: 'dei.ubi.pt · 3lgbt.ubi.pt · lgbthealth.ubi.pt' },
    ],
    desafio:
      'Três iniciativas diferentes (um evento, um seminário internacional e o lançamento de um livro) precisavam cada uma de um site próprio, com identidade visual própria e data marcada, mas com o mesmo nível de qualidade.',
    solucao:
      'Um site por iniciativa, cada um com a sua linguagem visual: contagem decrescente e título dinâmico na Mostra, identidade arco-íris e informação prática no Seminário, e uma página editorial com download gratuito do livro. Todos rápidos e pensados para telemóvel.',
    resultado: 'Três sites no ar e a Starmountain Flash como fornecedor digital da universidade.',
    mockupTopo: '/img/trabalhos/ubi-dei-mockup-completo.webp',
    tecnologia: ['Desenvolvimento à medida', 'Design responsivo', 'SEO técnico'],
    visitar: [
      { label: 'Mostra UBI Equidade', href: 'https://dei.ubi.pt' },
      { label: '3.º Seminário LGBTQIA+', href: 'https://3lgbt.ubi.pt' },
      { label: 'Livro LGBTQIA+ Health', href: 'https://lgbthealth.ubi.pt' },
    ],
    testemunhoDepoisDe: 'lgbthealth',
    testemunhoNome: 'Henrique Pereira',
    testemunhoLegenda: 'Henrique Pereira, coautor do livro publicado em lgbthealth.ubi.pt',
    sites: [
      {
        id: 'dei',
        nome: 'Mostra UBI Equidade',
        dominio: 'dei.ubi.pt',
        href: 'https://dei.ubi.pt',
        descricao:
          'Site do evento que reúne investigações em diversidade, equidade e inclusão desenvolvidas na UBI. 23 de outubro de 2026, 10h00–18h00, Biblioteca Central UBI, inscrição gratuita.',
        destaques: [
          'Contagem decrescente até ao evento.',
          'Título que alterna entre palavras (Equidade, Inclusão…), cada uma com a sua cor.',
        ],
        estrutura: ['Apresentação', 'Programa', 'Submissões', 'Local', 'Inscrição'],
        cores: [
          { nome: 'Fundo', hex: '#1A3A52' },
          { nome: 'Vermelho', hex: '#EF4444' },
          { nome: 'Verde', hex: '#22C55E' },
          { nome: 'Azul', hex: '#3B82F6' },
          { nome: 'Texto', hex: '#FFFFFF' },
        ],
        fontes: [
          { nome: 'Space Grotesk', papel: 'Títulos' },
          { nome: 'Inter', papel: 'Texto corrido' },
        ],
        mockup: '/img/trabalhos/ubi-dei-mockup.webp',
        desktop: '/img/trabalhos/ubi-dei-desktop.webp',
        mobile: '/img/trabalhos/ubi-dei-mobile.webp',
      },
      {
        id: '3lgbt',
        nome: '3.º Seminário LGBTQIA+',
        dominio: '3lgbt.ubi.pt',
        href: 'https://3lgbt.ubi.pt',
        descricao:
          'Site do 3.º Seminário Internacional Interdisciplinar à Visibilidade LGBTQIA+. 22 de maio de 2026, Biblioteca Central UBI, exclusivamente presencial.',
        destaques: [
          'Título e linha de navegação com gradiente arco-íris.',
          'Informação essencial (local, data, formato) em destaque logo no topo.',
        ],
        estrutura: ['Comissões', 'Programa', 'Submissão e Publicações', 'Inscrições', 'Contacto', 'Local'],
        cores: [
          { nome: 'Fundo', hex: '#1A1A2F' },
          { nome: 'Azul', hex: '#13294C' },
          { nome: 'Laranja', hex: '#FF8C00' },
          { nome: 'Secções', hex: '#FAFAFA' },
          {
            nome: 'Arco-íris',
            gradiente:
              'linear-gradient(90deg,#E40303,#FF8C00,#FFED00,#008026,#24408E,#732982)',
          },
        ],
        fontes: [
          { nome: 'Montserrat', papel: 'Títulos' },
          { nome: 'Open Sans', papel: 'Texto corrido' },
        ],
        mockup: '/img/trabalhos/ubi-3lgbt-mockup.webp',
        desktop: '/img/trabalhos/ubi-3lgbt-desktop.webp',
        mobile: '/img/trabalhos/ubi-3lgbt-mobile.webp',
      },
      {
        id: 'lgbthealth',
        nome: 'Livro LGBTQIA+ Health',
        dominio: 'lgbthealth.ubi.pt',
        href: 'https://lgbthealth.ubi.pt',
        descricao:
          'Página de lançamento do livro «Occupational Health, Psychosocial Risks and Prevention Factors in LGBTQIA+ Populations in Portugal», de Henrique Pereira e Iara Teixeira (junho de 2026), com download gratuito em PDF.',
        destaques: [
          'Linguagem editorial com tipografia serifada.',
          'Capa do livro em 3D como elemento principal.',
        ],
        cores: [
          { nome: 'Fundo', hex: '#FDFBF7' },
          { nome: 'Texto', hex: '#1B1B1B' },
          { nome: 'Roxo', hex: '#7209B7' },
          { nome: 'Etiqueta', hex: '#F5EDF3' },
          { nome: 'Gradiente', gradiente: 'linear-gradient(90deg,#E74148,#EFB165)' },
        ],
        fontes: [
          { nome: 'Cormorant Garamond', papel: 'Títulos' },
          { nome: 'Manrope', papel: 'Texto corrido' },
        ],
        mockup: '/img/trabalhos/ubi-lgbthealth-mockup.webp',
        desktop: '/img/trabalhos/ubi-lgbthealth-desktop.webp',
        mobile: '/img/trabalhos/ubi-lgbthealth-mobile.webp',
      },
    ],
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
    resultado: 'Site em produção em comunidadeplanet.pt, com abertura pública prevista para outubro de 2026.',
    // Sem cores, fontes nem estrutura: esses blocos ficam escondidos até haver dados.
    tecnologia: ['WebGL / 3D', 'Vídeo de fundo', 'Formulário ligado a CRM'],
    visitar: [{ label: 'Visitar o site', href: 'https://comunidadeplanet.pt' }],
  },

  studyos: {
    slug: 'studyos',
    titulo: 'StudyOS — Caso de estudo | Starmountain Flash',
    descricao:
      'Plataforma de estudo por subscrição para uma comunidade de estudantes de Gestão da Universidade Aberta: materiais por cadeira, ferramentas de estudo e IA.',
    h1: 'StudyOS.',
    h1Destaque: 'Uma plataforma de estudo por subscrição.',
    intro:
      'O hub de estudo de uma comunidade de estudantes de Gestão da Universidade Aberta: materiais organizados por cadeira, ferramentas de estudo e uma IA que estuda com base nos materiais de cada aluno.',
    ficha: [
      { dt: 'Cliente', dd: 'Comunidade de estudantes de Gestão (Universidade Aberta)' },
      { dt: 'Serviço', dd: 'Plataforma web + área de membros' },
      { dt: 'Ano', dd: '2026' },
      { dt: 'Site', dd: 'gestaocrew.pt' },
    ],
    desafio:
      'Reunir num só lugar os materiais de estudo de uma comunidade de estudantes, organizados por cadeira, e dar-lhes ferramentas para estudar em grupo, com acesso por subscrição.',
    solucao:
      'Uma página de subscrição simples e uma plataforma completa por trás: manuais, resumos e exames por cadeira, simulador de exame, flashcards com repetição espaçada, IA com base nos materiais do aluno, chat geral, eventos, calendário, sala de estudo com presença em tempo real, temporizador de foco, pesquisa rápida (Ctrl K), notificações, modo escuro e painel de administração. No telemóvel, navegação inferior própria, como uma app.',
    resultado:
      'Plataforma em funcionamento, com 29 cadeiras e 166 documentos organizados, e subscrição mensal de 10 € sem fidelização, com pagamento por cartão, Apple Pay e Google Pay.',
    mockupTopo: '/img/trabalhos/studyos-landing-mockup.webp',
    desktop: '/img/trabalhos/studyos-landing-desktop.webp',
    mobile: '/img/trabalhos/studyos-landing-mobile.webp',
    seccoesExtra: [
      {
        etiqueta: 'Por dentro da plataforma',
        titulo: 'A área de membros.',
        destaque: 'O que o aluno vê depois de entrar.',
        dominio: 'gestaocrew.pt',
        nome: 'Área de membros do StudyOS',
        mockup: '/img/trabalhos/studyos-app-mockup.webp',
        desktop: '/img/trabalhos/studyos-app-desktop.webp',
        mobile: '/img/trabalhos/studyos-app-mobile.webp',
      },
    ],
    estrutura: ['Página de subscrição', 'Início', 'Cadeiras', 'Chat geral', 'Eventos', 'Calendário', 'Guia', 'Admin'],
    cores: [
      { nome: 'Fundo', hex: '#F1EFE9' },
      { nome: 'Índigo', hex: '#6366F1' },
      { nome: 'Texto', hex: '#15151A' },
      { nome: 'Barra lateral', hex: '#131316' },
      { nome: 'Laranja', hex: '#F97316' },
      { nome: 'Cartões', hex: '#FFFFFF' },
    ],
    fontes: [
      { nome: 'Plus Jakarta Sans', papel: 'Texto e títulos' },
      { nome: 'Fraunces', papel: 'Saudação e números no painel' },
    ],
    tecnologia: [
      'Plataforma à medida',
      'Área de membros',
      'Subscrições com pagamentos online',
      'IA integrada',
    ],
    visitar: [{ label: 'Visitar o site', href: 'https://gestaocrew.pt' }],
  },
};
