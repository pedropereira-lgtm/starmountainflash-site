import { servicos } from '@/data/servicos';
import { site } from '@/data/site';
import { trabalhosPublicados } from '@/data/trabalhos';
import { faqsHome } from '@/data/faqs';
import { dataPt, todosOsPosts } from '@/lib/posts';

export const dynamic = 'force-static';

/**
 * /llms.txt — resumo do site em texto simples, para motores de IA.
 * É gerado a partir dos mesmos dados das páginas, por isso não fica
 * desatualizado quando se acrescenta um trabalho ou um artigo.
 */
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
    ...servicos.map((s) => `- **${s.titulo}** (${u}${s.href}): ${s.texto}`),
    '',
    '## Método: Operação Flash',
    '',
    'Três fases, com prazo e preço fechados por escrito antes de começar:',
    '',
    '1. **Reconhecimento** — perceber o negócio, o site atual e a concorrência. Termina com uma proposta escrita.',
    '2. **Execução** — design e desenvolvimento em código, com pontos de validação, até ao lançamento.',
    '3. **Automação** — o trabalho repetitivo passa a correr sozinho, ligado às ferramentas que a empresa já usa.',
    '',
    `Detalhe: ${u}/metodo`,
    '',
    '## Trabalhos',
    '',
    ...trabalhosPublicados.map((t) => `- **${t.nome}** (${u}/trabalhos/${t.slug}): ${t.resumo}`),
    '',
    '## Páginas principais',
    '',
    `- Início: ${u}/`,
    `- Websites: ${u}/websites`,
    `- Lojas online: ${u}/lojas-online`,
    `- Automações de IA: ${u}/automacoes`,
    `- Método: ${u}/metodo`,
    `- Sobre: ${u}/sobre`,
    `- Blog: ${u}/blog`,
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
    ...faqsHome.flatMap((f) => [`**${f.q}**`, f.a, '']),
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
