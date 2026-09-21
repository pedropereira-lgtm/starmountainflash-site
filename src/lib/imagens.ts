import fs from 'node:fs';
import path from 'node:path';
import { imageSize } from 'image-size';

export type Imagem = { src: string; width: number; height: number };

const cache = new Map<string, Imagem | null>();
const avisados = new Set<string>();

/**
 * Lê, durante o build, as dimensões reais de um ficheiro de `public/`.
 *
 * Devolve null quando o ficheiro não existe, para quem chama poder esconder
 * o bloco em vez de publicar uma imagem partida. Os screenshots dos trabalhos
 * vão sendo acrescentados aos poucos, por isso isto acontece mesmo.
 */
export function imagem(caminhoPublico?: string): Imagem | null {
  if (!caminhoPublico) return null;
  if (cache.has(caminhoPublico)) return cache.get(caminhoPublico) ?? null;

  const absoluto = path.join(process.cwd(), 'public', caminhoPublico.replace(/^\//, ''));
  let resultado: Imagem | null = null;

  if (fs.existsSync(absoluto)) {
    const { width, height } = imageSize(fs.readFileSync(absoluto));
    resultado = { src: caminhoPublico, width, height };
  } else if (!avisados.has(caminhoPublico)) {
    avisados.add(caminhoPublico);
    console.warn(`[imagens] ${caminhoPublico} não existe em public/. O bloco fica escondido.`);
  }

  cache.set(caminhoPublico, resultado);
  return resultado;
}
