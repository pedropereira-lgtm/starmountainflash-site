export type Testemunho = {
  titulo?: string;
  texto: string;
  nome: string;
  iniciais: string;
  /** Linha por baixo do nome. */
  fonte: string;
  /** Onde está a avaliação, para o link dizer para onde vai. */
  plataforma: string;
  link: string;
};

export const testemunhos: Testemunho[] = [
  {
    titulo: 'Recomendo vivamente',
    texto:
      'Impecavelmente bem feito o trabalho, sem falhas, com melhoramentos ao que se pede e se torna necessário. Recomendo vivamente! Profissional de excelência!',
    nome: 'João Rebordão',
    iniciais: 'JR',
    fonte: 'Avaliação no Trustpilot',
    plataforma: 'Trustpilot',
    link: 'https://www.trustpilot.com/reviews/6a85d2b5c50db450c227695c',
  },
  {
    titulo: 'Excelente experiência do início ao fim!',
    texto:
      'Fiquei muito satisfeito com o serviço da Star Mountain Flash. Todo o processo foi simples, rápido e profissional, desde o primeiro contacto até à conclusão do serviço. A equipa demonstrou grande atenção ao detalhe, simpatia e disponibilidade para esclarecer todas as dúvidas. Recomendo vivamente a quem procura um serviço eficiente, sério e de confiança. Sem dúvida, uma experiência de 5 estrelas!',
    nome: 'Henrique Pereira',
    iniciais: 'HP',
    fonte: 'Coautor do livro publicado em lgbthealth.ubi.pt',
    plataforma: 'Trustpilot',
    link: 'https://www.trustpilot.com/reviews/6a2fde4eec482bf7be526d36',
  },
  {
    texto:
      'Uma experiência muito positiva com a Starmountain Flash. Destaco o profissionalismo, a simpatia e a qualidade do serviço prestado. Recomendo!',
    nome: 'Débora Baêta',
    iniciais: 'DB',
    fonte: 'Avaliação no Google',
    plataforma: 'Google',
    link: 'https://www.google.com/maps/contrib/116236321279869004351/reviews?hl=pt-PT',
  },
];
