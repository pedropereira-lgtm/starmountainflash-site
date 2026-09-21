import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // O painel de gestão e a rota do formulário não têm nada para indexar.
        disallow: ['/admin', '/admin/', '/api/'],
      },
    ],
    sitemap: site.url + '/sitemap.xml',
    host: site.url,
  };
}
