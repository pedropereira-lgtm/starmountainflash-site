export type Faq = { q: string; a: string };

/** Cada conjunto alimenta o bloco <details> da página e o respetivo FAQPage (JSON-LD). */
export const faqsHome: Faq[] = [
  { q: 'Quanto custa um site?', a: 'Depende do tipo de site e do que precisa de fazer. Depois de perceber o projeto, envio uma proposta com o valor fechado. Esse valor não muda a meio.' },
  { q: 'Quanto tempo demora?', a: 'O prazo é definido na proposta, antes de começar, e é cumprido. Landing pages são o formato mais rápido; lojas online e automações levam mais tempo.' },
  { q: 'Os valores incluem IVA?', a: 'Não há IVA a acrescentar: a atividade está isenta ao abrigo do artigo 53.º do CIVA. O valor da proposta é o valor final.' },
  { q: 'O domínio fica em nome de quem?', a: 'Em nome do cliente. Ajudo na compra e na configuração, mas a titularidade e a renovação ficam sempre do seu lado.' },
  { q: 'Trabalha só com empresas da Covilhã?', a: 'Não. Estou na Covilhã, mas trabalho com clientes em todo o país. As reuniões fazem-se online.' },
  { q: 'Também gere redes sociais?', a: 'Não. Faço apenas websites e automações de IA, para fazer bem essas duas coisas.' },
];

export const faqsWebsites: Faq[] = [
  { q: 'Quanto custa um site?', a: 'Depende do formato e do que o site precisa de fazer. Depois de perceber o projeto, envio uma proposta com o valor fechado, que não muda a meio.' },
  { q: 'Quanto tempo demora?', a: 'O prazo é definido na proposta, antes de começar, e é cumprido. Uma landing page é o formato mais rápido; um site institucional leva mais tempo, conforme o número de páginas.' },
  { q: 'Preciso de ter os textos e as fotografias?', a: 'Ajuda, mas não é obrigatório. Estruturo os textos a partir do que me conta sobre o negócio. Fotografias próprias funcionam sempre melhor do que imagens de banco.' },
  { q: 'Consigo atualizar o site sozinho?', a: 'Se precisar de atualizar com frequência, por exemplo notícias, produtos ou equipa, isso fica previsto na proposta. Para o resto, há a manutenção mensal ou alterações pontuais.' },
  { q: 'O que é GEO?', a: 'GEO (Generative Engine Optimization) é preparar o site para ser compreendido e citado por motores de IA como o ChatGPT, o Gemini ou o Perplexity. Passa por conteúdo claro, perguntas frequentes e dados estruturados, além do SEO tradicional.' },
  { q: 'Os valores incluem IVA?', a: 'Não há IVA a acrescentar: a atividade está isenta ao abrigo do artigo 53.º do CIVA. O valor da proposta é o valor final.' },
];

export const faqsLojas: Faq[] = [
  { q: 'Quanto custa uma loja online?', a: 'Depende da plataforma, do número de produtos e das integrações. O valor fica fechado na proposta, antes de começar.' },
  { q: 'Que custos mensais tem uma loja?', a: 'A plataforma e os métodos de pagamento têm custos próprios, pagos diretamente pelo cliente a esses serviços. Explico-os na proposta para não haver surpresas.' },
  { q: 'Consigo gerir os produtos sozinho?', a: 'Sim. A formação para gerir produtos, encomendas e clientes está incluída.' },
  { q: 'Posso passar os produtos da loja antiga?', a: 'Sim, sempre que a plataforma antiga permita exportar os dados. Avalio isso na fase de reconhecimento.' },
  { q: 'Os valores incluem IVA?', a: 'Não há IVA a acrescentar sobre o meu trabalho: a atividade está isenta ao abrigo do artigo 53.º do CIVA.' },
];

export const faqsAutomacoes: Faq[] = [
  { q: 'Preciso de ter site para automatizar?', a: 'Não. As automações funcionam com as ferramentas que já usa: email, folhas de cálculo, CRM, programas de gestão. O site é só uma das possíveis ligações.' },
  { q: 'Quanto custa uma automação?', a: 'Depende da complexidade e do número de ferramentas envolvidas. No levantamento estimo o tempo que poupa, para que a decisão seja fácil. O valor fica fechado na proposta.' },
  { q: 'Os meus dados ficam seguros?', a: 'As automações usam as contas e ferramentas da empresa, com acesso apenas ao que é necessário para funcionarem.' },
  { q: 'E se alguma coisa falhar?', a: 'As automações são testadas com casos reais antes de entrarem em funcionamento. A forma de acompanhamento e ajustes fica definida na proposta.' },
  { q: 'Onde entra a inteligência artificial?', a: 'Nas tarefas que envolvem texto: classificar emails, resumir documentos, extrair dados ou preparar respostas. Quando é importante, há sempre revisão humana antes de sair alguma coisa.' },
];

export const faqsMetodo: Faq[] = [
  { q: 'E se quiser mudar alguma coisa a meio?', a: 'As validações existem para isso: os ajustes pedidos nesses momentos fazem parte do projeto. Mudanças que alterem o âmbito acordado são conversadas antes e, se for preciso, orçamentadas à parte.' },
  { q: 'Quantas rondas de alterações estão incluídas?', a: 'Ficam definidas na proposta, de acordo com o tipo de projeto, para que ambos saibam desde o início com o que contar.' },
  { q: 'Como são feitos os pagamentos?', a: 'As condições ficam na proposta. O mais comum é dividir o pagamento entre o arranque e a entrega do projeto.' },
  { q: 'Quanto tempo demora um projeto?', a: 'Depende do formato. O prazo exato fica escrito na proposta antes de começar. Landing pages são o formato mais rápido; lojas online e automações levam mais tempo.' },
  { q: 'As reuniões são presenciais ou online?', a: 'Online, o que permite trabalhar com empresas de todo o país. Estou na Covilhã e, quando faz sentido, também é possível reunir presencialmente.' },
  { q: 'O que acontece se o projeto não avançar depois da proposta?', a: 'Nada. A fase de reconhecimento serve precisamente para perceber se faz sentido para os dois. Só avançamos com a proposta aceite.' },
];
