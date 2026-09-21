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
    return [{ source: '/admin', destination: '/admin/index.html' }];
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
    ];
  },
};

export default nextConfig;
