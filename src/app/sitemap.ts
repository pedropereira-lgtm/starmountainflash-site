import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { trabalhosPublicados } from '@/data/trabalhos';
import { todosOsPosts } from '@/lib/posts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();

  const fixas: [string, number, MetadataRoute.Sitemap[number]['changeFrequency']][] = [
    ['/', 1, 'monthly'],
    ['/websites', 0.9, 'monthly'],
    ['/lojas-online', 0.9, 'monthly'],
    ['/automacoes', 0.9, 'monthly'],
    ['/metodo', 0.7, 'yearly'],
    ['/sobre', 0.7, 'yearly'],
    ['/blog', 0.6, 'weekly'],
    ['/privacidade', 0.2, 'yearly'],
    ['/termos', 0.2, 'yearly'],
  ];

  return [
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
