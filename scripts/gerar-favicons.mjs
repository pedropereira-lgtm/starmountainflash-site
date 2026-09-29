/**
 * Gera os ícones do site a partir de favicon/favicon.ico, que é o símbolo
 * oficial da marca. Para trocar o ícone, substitui esse ficheiro e corre:
 *
 *   npm run favicons
 *
 * Os ficheiros vão para public/ com nome fixo, sem hash de build, porque o
 * Google e os browsers procuram-nos em caminhos previsíveis — sobretudo o
 * /favicon.ico, pedido na raiz do domínio mesmo sem estar declarado.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const origem = path.join(raiz, 'favicon', 'favicon.ico');
const publico = (nome) => path.join(raiz, 'public', nome);

/** Tira do contentor .ico a maior imagem que lá estiver. */
function maiorImagemDoIco(ficheiro) {
  const b = fs.readFileSync(ficheiro);
  if (b.readUInt16LE(2) !== 1) throw new Error(`${ficheiro} não é um ícone válido`);
  const total = b.readUInt16LE(4);
  let melhor = null;
  for (let i = 0; i < total; i++) {
    const o = 6 + i * 16;
    const lado = b.readUInt8(o) || 256; // 0 significa 256
    if (!melhor || lado > melhor.lado) {
      melhor = { lado, tamanho: b.readUInt32LE(o + 8), inicio: b.readUInt32LE(o + 12) };
    }
  }
  const dados = b.subarray(melhor.inicio, melhor.inicio + melhor.tamanho);
  // Desde o Windows Vista o .ico pode guardar PNG; antes era só bitmap.
  const ehPng = dados.subarray(1, 4).toString('ascii') === 'PNG';
  return { dados, lado: melhor.lado, ehPng, imagens: total };
}

const fonte = maiorImagemDoIco(origem);
if (!fonte.ehPng) throw new Error('A maior imagem do .ico não é PNG; converte o ficheiro antes.');

const png = (lado) => sharp(fonte.dados).resize(lado, lado).png({ compressionLevel: 9 }).toBuffer();

// O .ico original vai tal e qual: já traz vários tamanhos, e cada sítio
// escolhe o que lhe serve melhor. Regerá-lo só perderia qualidade.
fs.copyFileSync(origem, publico('favicon.ico'));

// Nome com versão, para quem tiver o ícone antigo em cache ir buscar este.
fs.writeFileSync(publico('favicon-v2.png'), await png(192));

// Tamanho que o iOS usa ao guardar o site no ecrã principal.
fs.writeFileSync(publico('apple-touch-icon.png'), await png(180));

// O caminho antigo /icon.svg continua a existir, mas passa a mostrar o
// símbolo real: um SVG a embrulhar o PNG, porque o original é uma imagem
// com gradiente e não se reproduz fielmente em vetor.
const embutido = (await png(128)).toString('base64');
fs.writeFileSync(
  publico('icon.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 128">\n` +
    `  <image width="128" height="128" xlink:href="data:image/png;base64,${embutido}"/>\n` +
    `</svg>\n`,
);

console.log(`  origem: favicon/favicon.ico — ${fonte.imagens} tamanhos, maior ${fonte.lado}×${fonte.lado}`);
for (const nome of ['favicon.ico', 'favicon-v2.png', 'apple-touch-icon.png', 'icon.svg']) {
  console.log(`  public/${nome.padEnd(22)} ${(fs.statSync(publico(nome)).size / 1024).toFixed(1)} KB`);
}
