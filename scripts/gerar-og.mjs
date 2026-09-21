/**
 * Gera a imagem Open Graph por defeito (1200×630) a partir da marca e da Onest.
 * Correr só quando a marca ou o texto mudarem:
 *
 *   npm run og
 *
 * O resultado fica em public/img/og-starmountain-flash.jpg e é commitado,
 * para não haver trabalho nenhum no build nem em cada pedido.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { decompress } from 'wawoff2';

// next/og só é exposto como CommonJS.
const { ImageResponse } = createRequire(import.meta.url)('next/og');

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const destino = path.join(raiz, 'public', 'img', 'og-starmountain-flash.jpg');

// O satori não lê woff2 nem fontes variáveis, e a Onest do site é variável.
// Por isso ficam aqui duas instâncias estáticas (400 e 500), só para esta imagem.
// Uma de cada vez: o wawoff2 é um módulo WASM com estado partilhado e as
// descompressões em paralelo saem corrompidas.
const carregar = async (peso) =>
  Buffer.from(await decompress(fs.readFileSync(path.join(raiz, `scripts/fontes/onest-${peso}.woff2`))));
const onest400 = await carregar(400);
const onest500 = await carregar(500);

// O símbolo da marca como imagem: o satori é exigente com SVG inline.
const marca =
  'data:image/svg+xml;base64,' +
  Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 32 32" fill="none" ' +
      'stroke="#fff" stroke-width="3" stroke-linecap="square">' +
      '<path d="M5 18 L16 7 L27 18"/><path d="M5 27 L16 16 L27 27"/></svg>',
  ).toString('base64');

const div = (style, children) => ({ type: 'div', props: { style: { display: 'flex', ...style }, children } });

const cartao = div(
  {
    width: '1200px',
    height: '630px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#0E4B35',
    color: '#fff',
    padding: '64px 72px',
    fontFamily: 'Onest',
    position: 'relative',
  },
  [
    // O mesmo halo verde que fecha as páginas do site.
    div({
      position: 'absolute',
      right: '-120px',
      bottom: '-260px',
      width: '760px',
      height: '760px',
      borderRadius: '760px',
      backgroundImage:
        'radial-gradient(circle, rgba(0,168,112,0.85) 0%, rgba(0,168,112,0.22) 42%, rgba(0,168,112,0) 68%)',
    }),
    div({ alignItems: 'center', gap: '18px' }, [
      { type: 'img', props: { src: marca, width: 46, height: 46 } },
      div({ fontSize: 30, fontWeight: 500, letterSpacing: '-0.01em' }, 'Starmountain Flash'),
    ]),
    div({ flexDirection: 'column', gap: '26px' }, [
      div(
        { fontSize: 76, fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.045em', maxWidth: '900px' },
        'Websites e automações de IA para PME',
      ),
      div({ alignItems: 'center', gap: '14px', fontSize: 26, color: 'rgba(255,255,255,0.72)' }, [
        div({ width: '10px', height: '10px', backgroundColor: '#00A870' }),
        div({}, 'Covilhã · Prazo fixo, preço fechado'),
      ]),
    ]),
  ],
);

const resposta = new ImageResponse(cartao, {
  width: 1200,
  height: 630,
  fonts: [
    { name: 'Onest', data: onest400, weight: 400, style: 'normal' },
    { name: 'Onest', data: onest500, weight: 500, style: 'normal' },
  ],
});

const png = Buffer.from(await resposta.arrayBuffer());
await sharp(png).jpeg({ quality: 88, mozjpeg: true }).toFile(destino);
console.log('Imagem Open Graph escrita em', path.relative(raiz, destino));
