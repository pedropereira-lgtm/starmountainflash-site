/**
 * Gera os ícones do site a partir do símbolo da marca.
 * Correr só quando o símbolo mudar:
 *
 *   npm run favicons
 *
 * Os ficheiros vão para public/ com nome fixo, sem hash de build, porque o
 * Google e os browsers procuram-nos em caminhos previsíveis — sobretudo o
 * /favicon.ico, que é pedido na raiz mesmo sem estar declarado.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const simbolo = path.join(raiz, 'public', 'icon.svg');
const publico = (nome) => path.join(raiz, 'public', nome);

const png = (lado) => sharp(simbolo, { density: 384 }).resize(lado, lado).png({ compressionLevel: 9 }).toBuffer();

/**
 * Empacota um PNG num contentor .ico. O formato aceita PNG lá dentro desde o
 * Windows Vista, por isso não é preciso converter para bitmap.
 */
function paraIco(pngBuffer, lado) {
  const cabecalho = Buffer.alloc(6);
  cabecalho.writeUInt16LE(0, 0); // reservado
  cabecalho.writeUInt16LE(1, 2); // tipo: 1 = ícone
  cabecalho.writeUInt16LE(1, 4); // número de imagens

  const entrada = Buffer.alloc(16);
  entrada.writeUInt8(lado === 256 ? 0 : lado, 0); // largura (0 significa 256)
  entrada.writeUInt8(lado === 256 ? 0 : lado, 1); // altura
  entrada.writeUInt8(0, 2); // cores da paleta
  entrada.writeUInt8(0, 3); // reservado
  entrada.writeUInt16LE(1, 4); // planos
  entrada.writeUInt16LE(32, 6); // bits por pixel
  entrada.writeUInt32LE(pngBuffer.length, 8); // tamanho dos dados
  entrada.writeUInt32LE(6 + 16, 12); // onde começam os dados

  return Buffer.concat([cabecalho, entrada, pngBuffer]);
}

const escritos = [];

// O .ico é o que o Google procura na raiz do domínio.
const ico48 = await png(48);
fs.writeFileSync(publico('favicon.ico'), paraIco(ico48, 48));
escritos.push(['favicon.ico', '48×48']);

// Nome com versão, para forçar quem tiver o ícone antigo em cache a ir buscar este.
fs.writeFileSync(publico('favicon-v2.png'), await png(192));
escritos.push(['favicon-v2.png', '192×192']);

// Tamanho que o iOS usa ao guardar o site no ecrã principal.
fs.writeFileSync(publico('apple-touch-icon.png'), await png(180));
escritos.push(['apple-touch-icon.png', '180×180']);

for (const [nome, tamanho] of escritos) {
  const { size } = fs.statSync(publico(nome));
  console.log(`  public/${nome.padEnd(22)} ${tamanho.padEnd(9)} ${(size / 1024).toFixed(1)} KB`);
}
