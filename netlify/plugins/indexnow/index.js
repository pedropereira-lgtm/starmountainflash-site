// IndexNow: depois de cada publicação em produção, avisa o Bing (e outros motores
// que usam IndexNow) das páginas que mudaram nesse deploy.
// Nunca faz falhar o build: qualquer erro fica só no registo.
const { execSync } = require('child_process');

const SITE = 'https://starmountainflash.pt';
const KEY = 'ae16856d6d45de9e0f759a724df9957f';
// Páginas que não devem ser indexadas.
const EXCLUIR = [/^\/analise-gratuita/, /^\/en\/analise-gratuita/, /^\/admin/, /^\/inicio$/];

function urlDeFicheiro(f) {
  let m;
  if ((m = f.match(/^content\/blog\/en\/(.+)\.mdx?$/))) return ['/en/blog/' + m[1], '/en/blog'];
  if ((m = f.match(/^content\/blog\/(.+)\.mdx?$/))) return ['/blog/' + m[1], '/blog'];
  if (f === 'public/inicio/index.html') return ['/'];
  if (f === 'public/en/index.html') return ['/en'];
  if ((m = f.match(/^public\/(.+)\/index\.html$/))) return ['/' + m[1]];
  return [];
}

function alterados() {
  const antes = process.env.CACHED_COMMIT_REF;
  const agora = process.env.COMMIT_REF;
  if (!antes || !agora || antes === agora) return null;
  try {
    const out = execSync(`git diff --name-only ${antes} ${agora}`, { encoding: 'utf8' });
    return out.split('\n').filter(Boolean);
  } catch {
    return null;
  }
}

async function todosDoSitemap() {
  const xml = await (await fetch(SITE + '/sitemap.xml')).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, '') || '/');
}

module.exports = {
  async onSuccess() {
    if (process.env.CONTEXT !== 'production') return;
    try {
      const ficheiros = alterados();
      let caminhos;
      if (ficheiros === null) {
        console.log('[indexnow] sem diferença de commits disponível; a enviar o sitemap todo');
        caminhos = await todosDoSitemap();
      } else {
        caminhos = ficheiros.flatMap(urlDeFicheiro);
      }
      caminhos = [...new Set(caminhos)].filter((c) => !EXCLUIR.some((r) => r.test(c)));
      if (!caminhos.length) {
        console.log('[indexnow] nenhuma página alterada neste deploy');
        return;
      }
      const urlList = caminhos.map((c) => SITE + (c === '/' ? '/' : c));
      const res = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ host: 'starmountainflash.pt', key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
      });
      console.log(`[indexnow] ${urlList.length} endereços enviados, resposta ${res.status}`);
    } catch (e) {
      console.log('[indexnow] falhou, sem impacto no site:', e.message);
    }
  },
};
