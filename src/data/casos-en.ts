/**
 * English version of the case studies (/en/trabalhos/[slug]).
 *
 * Same shape and keys as `casos` in casos.ts. URLs, domains, hex codes,
 * font names and image paths stay identical; only the visible text changes.
 * Client quotes (testemunhos) are not translated: they are the clients' own words.
 */
import type { Caso } from './casos';
import { trabalhoPorSlug, type Trabalho } from './trabalhos';

/** The fields of trabalhos.ts that the English pages show, translated. */
const trabalhosTexto: Record<string, Pick<Trabalho, 'nome' | 'resumo'>> = {
  ubi: {
    nome: 'University of Beira Interior',
    resumo: 'Three institutional websites · dei.ubi.pt · lgbthealth.ubi.pt · 3lgbt.ubi.pt',
  },
  'planet-trading': {
    nome: 'Planet Trading',
    resumo: '3D landing page with a form connected to a CRM',
  },
  studyos: {
    nome: 'StudyOS',
    resumo: 'Web platform for students',
  },
  'beatriz-nunes': {
    nome: 'Beatriz Nunes, Personal Trainer',
    resumo: 'Redesign of a personal trainer website, with enquiries sent by email',
  },
  'diogo-costa': {
    nome: 'Diogo Costa, Personal Trainer',
    resumo: 'Conversion-focused website for online coaching · Porto',
  },
};

/** The entry from trabalhos.ts with the English name and summary, when they exist. */
export function trabalhoEn(t: Trabalho): Trabalho {
  const texto = trabalhosTexto[t.slug];
  return texto ? { ...t, ...texto } : t;
}

/** Same as trabalhoPorSlug, in English. */
export function trabalhoPorSlugEn(slug: string) {
  const t = trabalhoPorSlug(slug);
  return t ? trabalhoEn(t) : undefined;
}

export const casosEn: Record<string, Caso> = {
  ubi: {
    slug: 'ubi',
    titulo: 'University of Beira Interior: case study | Starmountain Flash',
    descricao:
      'Three websites for three University of Beira Interior initiatives: the Mostra UBI Equidade, the 3rd Seminar on LGBTQIA+ Visibility and the launch of a book.',
    h1: 'University of Beira Interior.',
    h1Destaque: 'Three websites, three initiatives.',
    intro:
      'Three websites for three UBI initiatives in Covilhã: the Mostra UBI Equidade, the 3rd International Interdisciplinary Seminar on LGBTQIA+ Visibility and the launch of a book on occupational health in LGBTQIA+ populations.',
    ficha: [
      { dt: 'Client', dd: 'University of Beira Interior' },
      { dt: 'Service', dd: 'Event and publication websites' },
      { dt: 'Year', dd: '2026' },
      { dt: 'Websites', dd: 'dei.ubi.pt · 3lgbt.ubi.pt · lgbthealth.ubi.pt' },
    ],
    desafio:
      'Three different initiatives (an event, an international seminar and a book launch) each needed a website of its own, with its own visual identity and a set date, but all with the same level of quality.',
    solucao:
      'One website per initiative, each with its own visual language: a countdown and a rotating title for the Mostra, a rainbow identity and practical information for the Seminar, and an editorial page with a free download of the book. All of them fast and designed for mobile.',
    resultado: 'Three websites live and Starmountain Flash as the university’s digital supplier.',
    mockupTopo: '/img/trabalhos/ubi-dei-mockup-completo.webp',
    tecnologia: ['Custom development', 'Responsive design', 'Technical SEO'],
    visitar: [
      { label: 'Mostra UBI Equidade', href: 'https://dei.ubi.pt' },
      { label: '3rd LGBTQIA+ Seminar', href: 'https://3lgbt.ubi.pt' },
      { label: 'LGBTQIA+ Health book', href: 'https://lgbthealth.ubi.pt' },
    ],
    testemunhoDepoisDe: 'lgbthealth',
    testemunhoNome: 'Henrique Pereira',
    testemunhoLegenda: 'Henrique Pereira, co-author of the book published at lgbthealth.ubi.pt',
    sites: [
      {
        id: 'dei',
        nome: 'Mostra UBI Equidade',
        dominio: 'dei.ubi.pt',
        href: 'https://dei.ubi.pt',
        descricao:
          'Website for the event that brings together research on diversity, equity and inclusion carried out at UBI. 23 October 2026, 10:00 to 18:00, UBI Central Library, free registration.',
        destaques: [
          'Countdown to the event.',
          'A title that rotates between words (Equidade, Inclusão…), each in its own colour.',
        ],
        estrutura: ['Introduction', 'Programme', 'Submissions', 'Venue', 'Registration'],
        cores: [
          { nome: 'Background', hex: '#1A3A52' },
          { nome: 'Red', hex: '#EF4444' },
          { nome: 'Green', hex: '#22C55E' },
          { nome: 'Blue', hex: '#3B82F6' },
          { nome: 'Text', hex: '#FFFFFF' },
        ],
        fontes: [
          { nome: 'Space Grotesk', papel: 'Headings' },
          { nome: 'Inter', papel: 'Body text' },
        ],
        mockup: '/img/trabalhos/ubi-dei-mockup.webp',
        desktop: '/img/trabalhos/ubi-dei-desktop.webp',
        mobile: '/img/trabalhos/ubi-dei-mobile.webp',
      },
      {
        id: '3lgbt',
        nome: '3rd LGBTQIA+ Seminar',
        dominio: '3lgbt.ubi.pt',
        href: 'https://3lgbt.ubi.pt',
        descricao:
          'Website for the 3rd International Interdisciplinary Seminar on LGBTQIA+ Visibility. 22 May 2026, UBI Central Library, in person only.',
        destaques: [
          'Title and navigation line with a rainbow gradient.',
          'Key information (venue, date, format) highlighted right at the top.',
        ],
        estrutura: ['Committees', 'Programme', 'Submission and Publications', 'Registration', 'Contact', 'Venue'],
        cores: [
          { nome: 'Background', hex: '#1A1A2F' },
          { nome: 'Blue', hex: '#13294C' },
          { nome: 'Orange', hex: '#FF8C00' },
          { nome: 'Sections', hex: '#FAFAFA' },
          {
            nome: 'Rainbow',
            gradiente:
              'linear-gradient(90deg,#E40303,#FF8C00,#FFED00,#008026,#24408E,#732982)',
          },
        ],
        fontes: [
          { nome: 'Montserrat', papel: 'Headings' },
          { nome: 'Open Sans', papel: 'Body text' },
        ],
        mockup: '/img/trabalhos/ubi-3lgbt-mockup.webp',
        desktop: '/img/trabalhos/ubi-3lgbt-desktop.webp',
        mobile: '/img/trabalhos/ubi-3lgbt-mobile.webp',
      },
      {
        id: 'lgbthealth',
        nome: 'LGBTQIA+ Health book',
        dominio: 'lgbthealth.ubi.pt',
        href: 'https://lgbthealth.ubi.pt',
        descricao:
          'Launch page for the book “Occupational Health, Psychosocial Risks and Prevention Factors in LGBTQIA+ Populations in Portugal”, by Henrique Pereira and Iara Teixeira (June 2026), with a free PDF download.',
        destaques: [
          'Editorial look with serif typography.',
          'A 3D book cover as the main element.',
        ],
        cores: [
          { nome: 'Background', hex: '#FDFBF7' },
          { nome: 'Text', hex: '#1B1B1B' },
          { nome: 'Purple', hex: '#7209B7' },
          { nome: 'Label', hex: '#F5EDF3' },
          { nome: 'Gradient', gradiente: 'linear-gradient(90deg,#E74148,#EFB165)' },
        ],
        fontes: [
          { nome: 'Cormorant Garamond', papel: 'Headings' },
          { nome: 'Manrope', papel: 'Body text' },
        ],
        mockup: '/img/trabalhos/ubi-lgbthealth-mockup.webp',
        desktop: '/img/trabalhos/ubi-lgbthealth-desktop.webp',
        mobile: '/img/trabalhos/ubi-lgbthealth-mobile.webp',
      },
    ],
  },

  'planet-trading': {
    slug: 'planet-trading',
    titulo: 'Planet Trading: case study | Starmountain Flash',
    descricao:
      'Single-page landing page for the Planet Trading community, built in 3D with WebGL and with the form connected directly to a CRM.',
    h1: 'Planet Trading.',
    h1Destaque: 'A 3D landing page.',
    intro:
      'Single-page landing page for the Planet Trading community, built in 3D with WebGL and with the form connected directly to a CRM.',
    ficha: [
      { dt: 'Client', dd: 'Planet Trading' },
      { dt: 'Service', dd: 'Landing page + CRM integration' },
      { dt: 'Year', dd: '2026' },
      { dt: 'Website', dd: 'comunidadeplanet.pt' },
    ],
    desafio:
      'Launch the community’s new phase, "New Era", with a page that made an impact on the very first visit and turned visits into organised leads, ready for follow-up.',
    solucao:
      'A single page built in 3D with WebGL, with background videos and animations, and a form that sends every lead straight to the CRM. All of it developed in code, without page builders.',
    resultado:
      'Live at comunidadeplanet.pt since October 2026, serving as the gateway to the community’s new phase.',
    desktop: '/img/trabalhos/planet-trading-desktop.webp',
    mobile: '/img/trabalhos/planet-trading-mobile.webp',
    construcao: {
      titulo: 'A 3D intro in WebGL.',
      destaque: 'How it was built.',
      numeros: [
        { valor: '120,000', legenda: 'particles animated in real time' },
        { valor: '4', legenda: 'phases in the intro, driven by scrolling' },
        { valor: 'GLSL', legenda: 'custom-written shaders' },
        { valor: '0', legenda: 'visual builders: everything in code' },
      ],
      fases: [
        { titulo: 'Phase 01', nome: 'Sphere', texto: 'The particles form a sphere that breaks apart.' },
        { titulo: 'Phase 02', nome: 'Wave', texto: 'They spread out into a moving wave.' },
        { titulo: 'Phase 03', nome: 'Tunnel', texto: 'The wave curves into a hyperspace tunnel.' },
        { titulo: 'Phase 04', nome: 'Galaxy', texto: 'A flash gives rise to a spiral galaxy.' },
      ],
      blocos: [
        {
          titulo: '3D rendering',
          texto:
            'The intro is built in WebGL with Three.js. The particles are animated by custom-written GLSL shaders, and the glow comes from Unreal Bloom post-processing. The colours shift from cool to warm depending on the distance from the centre of the galaxy.',
          stack: ['Three.js', 'WebGL', 'GLSL', 'Unreal Bloom'],
        },
        {
          titulo: 'Scrolling and animation',
          texto:
            'The whole sequence depends on the scroll position, so scrolling was smoothed with Lenis to keep the movement continuous on a mouse, a trackpad and a touchscreen.',
          pontos: [
            'Each phase’s titles synchronised with the animation',
            'The intro runs only once and then gives way to the rest of the page',
            'Following sections animate in only when they become visible',
          ],
          stack: ['Lenis', 'Intersection Observer'],
        },
        {
          titulo: 'Performance and accessibility',
          texto:
            'After the intro, the page is a landing page in sections: results, how it works, what is included, a platform demo, plans, team, testimonials and FAQ.',
          pontos: [
            'Images below the fold are lazy-loaded',
            'The community video only starts when it appears on screen',
            'Pixel density of the 3D capped on high-resolution screens',
            'No animations for anyone with reduced motion turned on',
          ],
          stack: ['Lazy loading', 'prefers-reduced-motion'],
        },
      ],
    },
    tecnologia: ['WebGL / 3D', 'Background video', 'Form connected to a CRM'],
    visitar: [{ label: 'Visit the website', href: 'https://comunidadeplanet.pt' }],
  },

  'beatriz-nunes': {
    slug: 'beatriz-nunes',
    titulo: 'Beatriz Nunes: case study | Starmountain Flash',
    descricao:
      'Redesign of personal trainer Beatriz Nunes’s website: more visual impact in every section, keeping her copy and her identity, with the technical side taken care of.',
    h1: 'Beatriz Nunes.',
    h1Destaque: 'The redesign of an existing website.',
    intro:
      'Beatriz built her own website and asked me to take it further. I redesigned every section without touching her copy or her identity, and took care of the part nobody sees.',
    ficha: [
      { dt: 'Client', dd: 'Beatriz Nunes, personal trainer' },
      { dt: 'Service', dd: 'Redesign + technical work' },
      { dt: 'Year', dd: '2026' },
      { dt: 'Website', dd: 'personaltrainerbeatriznunes.pt' },
    ],
    desafio:
      'The website already had Beatriz’s copy and identity, but the sections lacked impact, navigation on mobile was limited and training enquiries had no direct route to her.',
    solucao:
      'A section-by-section redesign, using the colours and typefaces she chose: an opening with an arched photo, rounded panels, results cards and a gallery strip. Behind the scenes, the form now sends enquiries to her email, the menu was designed for mobile, the link shows a photo and description when shared on WhatsApp, and the legal side was taken care of.',
    resultado:
      'Live at personaltrainerbeatriznunes.pt since October 2026, with its own domain and trial session requests arriving straight in her inbox.',
    desktop: '/img/trabalhos/beatriz-nunes-desktop.webp',
    seccoesExtra: [
      {
        etiqueta: 'Before and after',
        titulo: 'The starting point.',
        destaque: 'The website Beatriz had built.',
        descricao:
          'The copy, the photos and the colours were already hers. The redesign started from here: the opening now has the arched photo and the sections gained panels, cards and a clearer hierarchy.',
        dominio: 'personaltrainerbeatriznunes.pt',
        nome: 'Beatriz Nunes’s website before the redesign',
        desktop: '/img/trabalhos/beatriz-nunes-antes-desktop.webp',
      },
    ],
    estrutura: ['About me', 'How it works', 'Training', 'Results', 'Testimonials', 'Questions', 'Trial session'],
    tecnologia: [
      'Form with enquiries sent by email',
      'Navigation designed for mobile',
      'Preview when the link is shared',
      'Privacy, Complaints Book (Livro de Reclamações) and dispute resolution',
    ],
    visitar: [{ label: 'Visit the website', href: 'https://personaltrainerbeatriznunes.pt' }],
  },

  studyos: {
    slug: 'studyos',
    titulo: 'StudyOS: case study | Starmountain Flash',
    descricao:
      'Subscription study platform for a community of Management students at Universidade Aberta: materials by course unit, study tools and AI.',
    h1: 'StudyOS.',
    h1Destaque: 'A subscription study platform.',
    intro:
      'The study hub for a community of Management students at Universidade Aberta: materials organised by course unit, study tools and an AI that helps each student study from their own materials.',
    ficha: [
      { dt: 'Client', dd: 'Community of Management students (Universidade Aberta)' },
      { dt: 'Service', dd: 'Web platform + members’ area' },
      { dt: 'Year', dd: '2026' },
      { dt: 'Website', dd: 'gestaocrew.pt' },
    ],
    desafio:
      'Bring a student community’s study materials together in one place, organised by course unit, and give them tools to study as a group, with access by subscription.',
    solucao:
      'A simple subscription page with a complete platform behind it: textbooks, summaries and exams by course unit, an exam simulator, flashcards with spaced repetition, AI based on the student’s materials, a general chat, events, a calendar, a study room with real-time presence, a focus timer, quick search (Ctrl K), notifications, dark mode and an admin panel. On mobile, its own bottom navigation, like an app.',
    resultado:
      'Platform up and running, with 29 course units and 166 documents organised, and a monthly subscription of €10 with no tie-in, paid by card, Apple Pay or Google Pay.',
    mockupTopo: '/img/trabalhos/studyos-landing-mockup.webp',
    desktop: '/img/trabalhos/studyos-landing-desktop.webp',
    mobile: '/img/trabalhos/studyos-landing-mobile.webp',
    seccoesExtra: [
      {
        etiqueta: 'Inside the platform',
        titulo: 'The members’ area.',
        destaque: 'What students see after logging in.',
        dominio: 'gestaocrew.pt',
        nome: 'StudyOS members’ area',
        mockup: '/img/trabalhos/studyos-app-mockup.webp',
        desktop: '/img/trabalhos/studyos-app-desktop.webp',
        mobile: '/img/trabalhos/studyos-app-mobile.webp',
      },
    ],
    estrutura: ['Subscription page', 'Home', 'Course units', 'General chat', 'Events', 'Calendar', 'Guide', 'Admin'],
    cores: [
      { nome: 'Background', hex: '#F1EFE9' },
      { nome: 'Indigo', hex: '#6366F1' },
      { nome: 'Text', hex: '#15151A' },
      { nome: 'Sidebar', hex: '#131316' },
      { nome: 'Orange', hex: '#F97316' },
      { nome: 'Cards', hex: '#FFFFFF' },
    ],
    fontes: [
      { nome: 'Plus Jakarta Sans', papel: 'Text and headings' },
      { nome: 'Fraunces', papel: 'Greeting and numbers on the dashboard' },
    ],
    tecnologia: [
      'Custom platform',
      'Members’ area',
      'Subscriptions with online payments',
      'Built-in AI',
    ],
    visitar: [{ label: 'Visit the website', href: 'https://gestaocrew.pt' }],
  },
};
