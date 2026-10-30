import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

export const dynamic = 'force-static';

/**
 * Motores de pesquisa e assistentes de IA têm acesso a todo o site, menos ao
 * painel de gestão e à rota do formulário. Os robôs de IA ficam nomeados um a
 * um: quem tem um grupo próprio ignora o "*", por isso cada grupo repete as
 * mesmas exclusões. É o mesmo que recomendo aos clientes em /visibilidade-ia.
 */
const fechado = ['/admin', '/admin/', '/api/'];

const robosIa = [
  // OpenAI: pesquisa do ChatGPT, pedidos de utilizadores e treino
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  // Anthropic (Claude)
  'Claude-SearchBot',
  'Claude-User',
  'ClaudeBot',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google (Gemini e resumos de IA) e Apple (Apple Intelligence)
  'Google-Extended',
  'Applebot-Extended',
  // Microsoft (Bing, que alimenta o Copilot e parte do ChatGPT)
  'Bingbot',
  // Outros assistentes e índices usados por modelos de linguagem
  'Meta-ExternalAgent',
  'Amazonbot',
  'DuckAssistBot',
  'MistralAI-User',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: fechado },
      { userAgent: robosIa, allow: '/', disallow: fechado },
    ],
    sitemap: site.url + '/sitemap.xml',
  };
}
