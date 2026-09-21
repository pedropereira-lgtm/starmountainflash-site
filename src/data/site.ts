/** Dados transversais ao site. Mudar aqui muda em todo o lado. */
export const site = {
  nome: 'Starmountain Flash',
  url: 'https://starmountainflash.pt',
  email: 'geral@starmountainflash.pt',
  telefone: '+351 937 800 553',
  telefoneRaw: '+351937800553',
  whatsapp: '351937800553',
  localidade: 'Covilhã',
  pais: 'PT',
  /** Aparece no rodapé de todas as páginas e nas páginas legais. */
  nif: '251504387',
  fundador: 'Pedro Pereira',
  descricao:
    'Websites, lojas online e automações de IA para PME e marcas portuguesas. Prazo fixo e preço fechado.',
  /** Perfis da empresa. Entram no "sameAs" do JSON-LD; os dois primeiros também no rodapé. */
  redes: {
    instagram: 'https://www.instagram.com/starmountainflash/',
    linkedin: 'https://www.linkedin.com/company/starmountain-flash',
    trustpilot: 'https://www.trustpilot.com/review/starmountainflash.pt',
    // O link curto share.google/loz0HoN2GsDjNjDHH resolve para este endereço.
    // Fica a forma estável, sem os parâmetros de seguimento que o link curto acrescenta.
    googleBusiness: 'https://www.google.com/search?kgmid=/g/11nvdc1v3n',
  },
} as const;

/** Só os links de rede já preenchidos entram no sameAs. */
export const sameAs = Object.values(site.redes).filter(Boolean);

export const whatsappMensagens = [
  { label: 'Quero um site novo', msg: 'Olá Pedro, gostava de ter um site novo para o meu negócio.' },
  { label: 'Quero uma loja online', msg: 'Olá Pedro, gostava de criar uma loja online.' },
  { label: 'Quero automatizar tarefas', msg: 'Olá Pedro, gostava de automatizar algumas tarefas no meu negócio.' },
  { label: 'Tenho outra questão', msg: 'Olá Pedro, tenho uma questão.' },
] as const;

export const navServicos = [
  { href: '/websites', titulo: 'Websites', sub: 'Landing pages e sites institucionais' },
  { href: '/lojas-online', titulo: 'Lojas online', sub: 'Vender online sem complicar' },
  { href: '/automacoes', titulo: 'Automações de IA', sub: 'Processos repetitivos a correr sozinhos' },
] as const;
