import fs from 'node:fs';
import path from 'node:path';

const avisados = new Set<string>();

/**
 * Confirma, durante o build, que um ficheiro de `public/` existe mesmo.
 *
 * Os screenshots dos trabalhos vão sendo acrescentados aos poucos. Sem esta
 * verificação, um caminho apontado antes de o ficheiro lá estar dava uma
 * imagem partida no site publicado; assim, volta ao logótipo e deixa aviso
 * no build.
 */
export function imagemExiste(caminhoPublico?: string): caminhoPublico is string {
  if (!caminhoPublico) return false;
  const relativo = caminhoPublico.replace(/^\//, '');
  const existe = fs.existsSync(path.join(process.cwd(), 'public', relativo));
  if (!existe && !avisados.has(caminhoPublico)) {
    avisados.add(caminhoPublico);
    console.warn(`[imagens] ${caminhoPublico} não existe em public/. Fica o logótipo no lugar.`);
  }
  return existe;
}
