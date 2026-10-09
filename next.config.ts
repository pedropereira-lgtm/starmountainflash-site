import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Existe um package-lock.json na pasta do utilizador; fixa a raiz neste projeto.
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ['image/avif', 'image/webp'],
    // A partir do Next 15 só são servidas as qualidades declaradas aqui.
    // 75 é o valor por omissão; 90 é o dos screenshots dos trabalhos, onde
    // se lê texto pequeno e a compressão nota-se.
    qualities: [75, 90],
  },
  async rewrites() {
    // O painel Decap e uma pagina estatica em public/admin/.
    // Sem isto, /admin nao resolve para o index.html dessa pasta.
    // A landing page da análise gratuita também é estática, em public/analise-gratuita/.
    return [
      { source: '/admin', destination: '/admin/index.html' },
      { source: '/analise-gratuita', destination: '/analise-gratuita/index.html' },
      { source: '/analise-gratuita/obrigado', destination: '/analise-gratuita/obrigado/index.html' },
    ];
  },
  async redirects() {
    return [
      // URLs do protótipo estático → rotas limpas.
      { source: '/index.html', destination: '/', statusCode: 301 },
      { source: '/websites.html', destination: '/websites', statusCode: 301 },
      { source: '/lojas-online.html', destination: '/lojas-online', statusCode: 301 },
      { source: '/automacoes.html', destination: '/automacoes', statusCode: 301 },
      { source: '/metodo.html', destination: '/metodo', statusCode: 301 },
      { source: '/sobre.html', destination: '/sobre', statusCode: 301 },
      { source: '/blog.html', destination: '/blog', statusCode: 301 },
      { source: '/trabalho-ubi.html', destination: '/trabalhos/ubi', statusCode: 301 },
      { source: '/trabalho-ubi', destination: '/trabalhos/ubi', statusCode: 301 },
      { source: '/trabalho-planet-trading.html', destination: '/trabalhos/planet-trading', statusCode: 301 },
      { source: '/trabalho-planet-trading', destination: '/trabalhos/planet-trading', statusCode: 301 },
      { source: '/trabalho-studyos.html', destination: '/trabalhos/studyos', statusCode: 301 },
      { source: '/trabalho-studyos', destination: '/trabalhos/studyos', statusCode: 301 },

      // URLs do site anterior, retirados do sitemap.xml e das ligações internas
      // de starmountainflash.pt em 23/09/2026.
      { source: '/servicos/sistemas-digitais', destination: '/websites', statusCode: 301 },
      { source: '/servicos/automatizacoes', destination: '/automacoes', statusCode: 301 },
      { source: '/servicos', destination: '/#servicos', statusCode: 301 },
      { source: '/privacy', destination: '/privacidade', statusCode: 301 },
      // Endereços do site anterior que o Search Console ainda mostrava em 09/10/2026.
      { source: '/privacy.html', destination: '/privacidade', statusCode: 301 },
      { source: '/blog-designed-to-be-cited.html', destination: '/blog', statusCode: 301 },
      { source: '/servicos/websites.html', destination: '/websites', statusCode: 301 },
      { source: '/servicos/automatizacao-ia.html', destination: '/automacoes', statusCode: 301 },
      { source: '/terms', destination: '/termos', statusCode: 301 },
      // /aviso-legal, /cookies, /blog e /blog/quando-automatizar-o-teu-negocio
      // continuam a existir com o mesmo endereço: não precisam de redirecionamento.
    ];
  },
};

export default nextConfig;
