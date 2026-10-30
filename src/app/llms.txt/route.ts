import { site } from '@/data/site';
import { trabalhosPublicados } from '@/data/trabalhos';
import { dataPt, todosOsPosts } from '@/lib/posts';

export const dynamic = 'force-static';

/**
 * /llms.txt — resumo do site em texto simples, para motores de IA.
 * É gerado a partir dos mesmos dados das páginas, por isso não fica
 * desatualizado quando se acrescenta um trabalho ou um artigo.
 */
/** As mesmas perguntas da página inicial. */
const faqs = [
  { q: 'Quanto custa um site?', a: 'Depende do tipo de site e do que precisa de fazer. Começo por uma proposta visual gratuita. Se gostar e quiser avançar, envio o orçamento ajustado ao que pedir.' },
  { q: 'Quanto tempo demora?', a: 'O prazo fica combinado antes de começar. Landing pages são o formato mais rápido; lojas online e automações levam mais tempo.' },
  { q: 'O que é aparecer no ChatGPT, na prática?', a: 'Quando alguém pede ao ChatGPT uma recomendação no seu setor, a resposta traz dois ou três nomes. O trabalho é fazer com que o seu esteja entre eles mais vezes, e medi-lo todos os meses.' },
  { q: 'Preciso de site para automatizar?', a: 'Não. As automações ligam-se às ferramentas que a empresa já usa: email, Excel, programa de faturação, CRM.' },
  { q: 'Os valores incluem IVA?', a: 'Não há IVA a acrescentar: a atividade está isenta ao abrigo do artigo 53.º do CIVA. O valor do orçamento é o valor final.' },
  { q: 'Trabalha só com empresas da Covilhã?', a: 'Não. Estou na Covilhã, mas trabalho com clientes em todo o país. As reuniões fazem-se online.' },
];

export function GET() {
  const posts = todosOsPosts();
  const u = site.url;

  const linhas = [
    '# Starmountain Flash',
    '',
    `> ${site.descricao} Um só responsável, do primeiro esboço ao lançamento.`,
    '',
    `- Fundador: ${site.fundador}, técnico de contabilidade com formação militar`,
    `- Base: ${site.localidade}, Serra da Estrela, Portugal · clientes em todo o país`,
    `- Contacto: ${site.email} · ${site.telefone} · https://wa.me/${site.whatsapp}`,
    '- Isento de IVA ao abrigo do artigo 53.º do CIVA',
    '',
    '## Serviços',
    '',
    'Começa sempre por uma proposta visual gratuita (ou, nos serviços de IA, por uma verificação ou análise gratuita). O orçamento só é enviado depois, se o cliente quiser avançar, ajustado ao que pediu.',
    '',
    '### Presença digital',
    '',
    `- **Websites** (${u}/websites): landing pages e sites institucionais desenhados à medida e feitos em código (Next.js), pensados para telemóvel, com SEO técnico, dados estruturados e conteúdo preparado para motores de IA.`,
    `- **Lojas online** (${u}/lojas-online): lojas em Shopify ou à medida, com catálogo, pagamentos usados em Portugal (MB WAY, Multibanco, cartão), envios, emails automáticos, páginas legais e formação para gerir a loja.`,
    `- **Visibilidade em IA (GEO)** (${u}/visibilidade-ia): auditoria com 20 a 30 perguntas reais do setor e da zona em 4 assistentes (ChatGPT, Perplexity, Gemini e Google AI), correções técnicas no site (dados estruturados, llms.txt, acesso dos robôs de IA, conteúdo que responde) e relatório mensal com as mesmas perguntas. Verificação gratuita.`,
    `- **Avaliações Google** (${u}/avaliacoes-google): pedido automático de avaliação a todos os clientes depois do serviço (WhatsApp, SMS, email ou QR code) e resposta a todas as avaliações do Perfil Google; as negativas só são publicadas com aprovação da empresa. Nada em troca de estrelas e nenhuma avaliação escrita pela Starmountain Flash. Análise gratuita ao perfil.`,
    '',
    '### Automações com IA',
    '',
    `- **Método StarMap** (${u}/starmap): diagnóstico de automação. Reunião presencial, uma semana de registo das tarefas da equipa numa plataforma própria (diagnostico.starmountainflash.pt), relatório e reunião com o que automatizar primeiro.`,
    `- **Automações à medida** (${u}/automacoes): processos repetitivos (emails, faturas, relatórios, marcações, CRM, portais sem integração) passam a correr sozinhos, ligados às ferramentas que a empresa já usa. Com ou sem site.`,
    `- **Assistente interno** (${u}/assistente-interno): para empresas de maior dimensão. Assistente de IA privado que responde com base nos documentos internos da empresa (Vault + RAG), com a fonte citada em cada resposta e as permissões de cada equipa.`,
    '',
    '## Método: Operação Flash',
    '',
    'Três fases. Começa sempre por uma proposta visual gratuita; o orçamento só é enviado depois, se o cliente quiser avançar:',
    '',
    '1. **Reconhecimento** — perceber o negócio, o site atual e a concorrência. Termina com uma proposta visual gratuita.',
    '2. **Execução** — design e desenvolvimento em código, com pontos de validação, até ao lançamento.',
    '3. **Automação** — o trabalho repetitivo passa a correr sozinho, ligado às ferramentas que a empresa já usa.',
    '',
    `Detalhe: ${u}/metodo`,
    '',
    '## Trabalhos',
    '',
    ...trabalhosPublicados.map(
      (t) => `- **${t.nome}**${t.localidade ? `, ${t.localidade}` : ''} (${u}/trabalhos/${t.slug}): ${t.resumo}`,
    ),
    '',
    '## Páginas principais',
    '',
    `- Início: ${u}/`,
    `- Websites: ${u}/websites`,
    `- Lojas online: ${u}/lojas-online`,
    `- Automações à medida: ${u}/automacoes`,
    `- Visibilidade em IA (GEO): ${u}/visibilidade-ia`,
    `- Avaliações Google: ${u}/avaliacoes-google`,
    `- Método StarMap: ${u}/starmap`,
    `- Assistente interno: ${u}/assistente-interno`,
    `- English version: ${u}/en`,
    `- Método: ${u}/metodo`,
    `- Sobre: ${u}/sobre`,
    `- Blog: ${u}/blog`,
    `- Contacto: ${u}/contacto`,
    `- Privacidade: ${u}/privacidade`,
    `- Cookies: ${u}/cookies`,
    `- Termos: ${u}/termos`,
    `- Aviso legal: ${u}/aviso-legal`,
    '',
    '## Artigos',
    '',
    ...(posts.length
      ? posts.map((p) => `- [${p.titulo}](${u}/blog/${p.slug}) — ${p.categoria}, ${dataPt(p.data)}. ${p.descricao}`)
      : ['Ainda sem artigos publicados.']),
    '',
    '## Perguntas frequentes',
    '',
    ...faqs.flatMap((f) => [`**${f.q}**`, f.a, '']),
    '## English',
    '',
    `An English version of the main pages is available at ${u}/en (home), ${u}/en/websites, ${u}/en/lojas-online, ${u}/en/visibilidade-ia, ${u}/en/avaliacoes-google, ${u}/en/starmap, ${u}/en/automacoes, ${u}/en/assistente-interno, ${u}/en/sobre (about), ${u}/en/metodo (method) and ${u}/en/contacto (contact). The blog (${u}/en/blog), the case studies (${u}/en/trabalhos/<slug>) and the legal pages also have English versions under /en.`,
    '',
    `Última atualização: ${dataPt(new Date().toISOString())}`,
    '',
  ];

  return new Response(linhas.join('\n'), {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate',
    },
  });
}
