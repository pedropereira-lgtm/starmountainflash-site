import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { trabalhosPublicados } from '@/data/trabalhos';
import { temTraducao, todosOsPosts } from '@/lib/posts';

export const dynamic = 'force-static';

type Freq = MetadataRoute.Sitemap[number]['changeFrequency'];

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();
  const alt = (c: string) => ({ languages: { 'pt-PT': site.url + (c || '/'), en: site.url + '/en' + c } });

  /** Página em PT e em EN (/en + caminho), cada uma a indicar a outra. */
  const par = (c: string, priority: number, changeFrequency: Freq, lastModified = agora): MetadataRoute.Sitemap => [
    { url: site.url + (c || '/'), lastModified, changeFrequency, priority, alternates: alt(c) },
    { url: site.url + '/en' + c, lastModified, changeFrequency, priority: Math.max(0.1, priority - 0.1), alternates: alt(c) },
  ];

  const paginas: [string, number, Freq][] = [
    ['', 1, 'monthly'],
    ['/websites', 0.9, 'monthly'],
    ['/lojas-online', 0.9, 'monthly'],
    ['/automacoes', 0.9, 'monthly'],
    ['/starmap', 0.9, 'monthly'],
    ['/visibilidade-ia', 0.9, 'monthly'],
    ['/avaliacoes-google', 0.9, 'monthly'],
    ['/assistente-interno', 0.9, 'monthly'],
    ['/sobre', 0.8, 'yearly'],
    ['/metodo', 0.8, 'yearly'],
    ['/contacto', 0.8, 'yearly'],
    ['/blog', 0.6, 'weekly'],
    ['/privacidade', 0.2, 'yearly'],
    ['/cookies', 0.2, 'yearly'],
    ['/termos', 0.2, 'yearly'],
    ['/aviso-legal', 0.2, 'yearly'],
  ];

  return [
    ...paginas.flatMap(([c, p, f]) => par(c, p, f)),
    ...trabalhosPublicados.flatMap((t) => par('/trabalhos/' + t.slug, 0.6, 'yearly')),
    ...todosOsPosts().flatMap((p) =>
      temTraducao(p.slug, 'en')
        ? par('/blog/' + p.slug, 0.5, 'yearly', new Date(p.data))
        : [{ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.data), changeFrequency: 'yearly' as const, priority: 0.5 }],
    ),
  ];
}
