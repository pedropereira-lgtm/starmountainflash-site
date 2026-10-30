import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { trabalhosPublicados } from '@/data/trabalhos';
import { todosOsPosts } from '@/lib/posts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();

  const fixas: [string, number, MetadataRoute.Sitemap[number]['changeFrequency']][] = [
    ['/blog', 0.6, 'weekly'],
    ['/privacidade', 0.2, 'yearly'],
    ['/cookies', 0.2, 'yearly'],
    ['/termos', 0.2, 'yearly'],
    ['/aviso-legal', 0.2, 'yearly'],
  ];

  // Páginas com versão inglesa em /en: cada uma indica a alternativa.
  const bilingues: [string, number][] = [
    ['', 1],
    ['/websites', 0.9],
    ['/lojas-online', 0.9],
    ['/automacoes', 0.9],
    ['/starmap', 0.9],
    ['/visibilidade-ia', 0.9],
    ['/avaliacoes-google', 0.9],
    ['/assistente-interno', 0.9],
    ['/sobre', 0.8],
    ['/metodo', 0.8],
    ['/contacto', 0.8],
  ];
  const alt = (c: string) => ({ languages: { 'pt-PT': site.url + (c || '/'), en: site.url + '/en' + c } });

  return [
    ...bilingues.flatMap(([c, priority]) => [
      { url: site.url + (c || '/'), lastModified: agora, changeFrequency: 'monthly' as const, priority, alternates: alt(c) },
      { url: site.url + '/en' + c, lastModified: agora, changeFrequency: 'monthly' as const, priority: priority - 0.1, alternates: alt(c) },
    ]),
    ...fixas.map(([url, priority, changeFrequency]) => ({
      url: site.url + url,
      lastModified: agora,
      changeFrequency,
      priority,
    })),
    ...trabalhosPublicados.map((t) => ({
      url: `${site.url}/trabalhos/${t.slug}`,
      lastModified: agora,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
    ...todosOsPosts().map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.data),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
  ];
}
