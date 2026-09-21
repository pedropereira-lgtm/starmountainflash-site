export type Servico = {
  n: string;
  titulo: string;
  texto: string;
  itens: string[];
  href: string;
  /** Variante de cor do cartão, tal como no protótipo. */
  cor: 'c-light' | 'c-dark' | 'c-em';
};

export const servicos: Servico[] = [
  {
    n: '01',
    titulo: 'Landing pages',
    texto: 'Uma página focada num único objetivo: gerar contactos, marcações ou vendas.',
    itens: ['Estrutura pensada para converter', 'Formulário ligado ao seu email', 'Pronta para campanhas'],
    href: '/websites',
    cor: 'c-light',
  },
  {
    n: '02',
    titulo: 'Sites institucionais',
    texto: 'O site completo da empresa, rápido e preparado para ser encontrado no Google e em motores de IA.',
    itens: ['Várias páginas, design à medida', 'SEO técnico e dados estruturados', 'Fácil de atualizar'],
    href: '/websites',
    cor: 'c-dark',
  },
  {
    n: '03',
    titulo: 'Lojas online',
    texto: 'Venda online com catálogo, pagamentos e envios, sem complicar a gestão diária.',
    itens: ['Shopify ou solução à medida', 'Pagamentos portugueses', 'Formação para gerir a loja'],
    href: '/lojas-online',
    cor: 'c-light',
  },
  {
    n: '04',
    titulo: 'Automações de IA',
    texto:
      'Qualquer processo repetitivo do negócio, com ou sem site. Se é feito à mão todas as semanas, provavelmente pode fazer-se sozinho.',
    itens: [
      'Emails, pedidos e atendimento automáticos',
      'Documentos e dados extraídos sem copiar e colar',
      'Folhas, CRM e relatórios atualizados sozinhos',
      'Integração entre as ferramentas que já usa',
    ],
    href: '/automacoes',
    cor: 'c-em',
  },
];

/** As opções do formulário e do pop-up de orçamento. */
export const opcoesServico = [
  'Landing page',
  'Site institucional',
  'Loja online',
  'Automação de IA',
  'Ainda não sei',
] as const;

/** O pop-up usa "Automação"; o formulário longo usa "Automação de IA". */
export const opcoesPopup = ['Landing page', 'Site institucional', 'Loja online', 'Automação', 'Ainda não sei'] as const;
