import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import GithubSlugger from 'github-slugger';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';

export const CATEGORIAS = ['Websites', 'Lojas online', 'Automação', 'SEO e IA'] as const;
export type Categoria = (typeof CATEGORIAS)[number];

const PASTA = path.join(process.cwd(), 'content', 'blog');

export type PerguntaDoPost = { pergunta: string; resposta: string };

export type Post = {
  slug: string;
  titulo: string;
  descricao: string;
  categoria: Categoria;
  data: string;
  capa?: string;
  capaAlt?: string;
  publicado: boolean;
  /** Perguntas frequentes do artigo, que também geram o FAQPage. */
  faq: PerguntaDoPost[];
  markdown: string;
};

export type Titulo = { texto: string; id: string; nivel: 2 | 3 };

/** Um artigo longo justifica índice. O limiar é o mesmo que a página usa. */
const MINIMO_INDICE = 3;

function ler(ficheiro: string): Post | null {
  const bruto = fs.readFileSync(path.join(PASTA, ficheiro), 'utf8');
  const { data, content } = matter(bruto);
  const slug = String(data.slug || ficheiro.replace(/\.mdx?$/, ''));
  if (!data.titulo || !data.data) return null;

  const categoria = CATEGORIAS.includes(data.categoria) ? (data.categoria as Categoria) : 'Websites';

  return {
    slug,
    titulo: String(data.titulo),
    descricao: String(data.descricao || '').slice(0, 155),
    categoria,
    data: new Date(data.data).toISOString(),
    capa: data.capa ? String(data.capa) : undefined,
    capaAlt: data.capaAlt ? String(data.capaAlt) : undefined,
    // No CMS o campo chama-se "estado"; aqui interessa só publicado ou não.
    publicado: data.estado ? data.estado === 'publicado' : false,
    faq: Array.isArray(data.faq)
      ? data.faq
          .map((f: { pergunta?: string; resposta?: string }) => ({
            pergunta: String(f?.pergunta ?? '').trim(),
            resposta: String(f?.resposta ?? '').trim(),
          }))
          .filter((f: PerguntaDoPost) => f.pergunta && f.resposta)
      : [],
    markdown: content,
  };
}

/** Todos os artigos publicados, do mais recente para o mais antigo. */
export function todosOsPosts(): Post[] {
  if (!fs.existsSync(PASTA)) return [];
  return fs
    .readdirSync(PASTA)
    .filter((f) => /\.mdx?$/.test(f))
    .map(ler)
    .filter((p): p is Post => p !== null && p.publicado)
    .sort((a, b) => b.data.localeCompare(a.data));
}

export function postPorSlug(slug: string): Post | undefined {
  return todosOsPosts().find((p) => p.slug === slug);
}

/** Até três artigos da mesma categoria; completa com os mais recentes. */
export function relacionados(post: Post, quantos = 3): Post[] {
  const outros = todosOsPosts().filter((p) => p.slug !== post.slug);
  const mesma = outros.filter((p) => p.categoria === post.categoria);
  const resto = outros.filter((p) => p.categoria !== post.categoria);
  return [...mesma, ...resto].slice(0, quantos);
}

/** Títulos de nível 2 e 3, com os mesmos ids que o rehype-slug gera no HTML. */
export function indice(markdown: string): Titulo[] {
  const slugger = new GithubSlugger();
  const titulos: Titulo[] = [];
  let dentroDeCodigo = false;

  for (const linha of markdown.split('\n')) {
    if (/^\s*(```|~~~)/.test(linha)) {
      dentroDeCodigo = !dentroDeCodigo;
      continue;
    }
    if (dentroDeCodigo) continue;
    const m = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(linha);
    if (!m) continue;
    // Tira a marcação inline (**negrito**, `código`, [links](url)) do texto do índice.
    const texto = m[2]
      .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/[*_`~]/g, '')
      .trim();
    titulos.push({ texto, id: slugger.slug(texto), nivel: m[1].length as 2 | 3 });
  }
  return titulos;
}

export function temIndice(markdown: string) {
  return indice(markdown).length >= MINIMO_INDICE;
}

/** Minutos de leitura, a 200 palavras por minuto. */
export function tempoDeLeitura(markdown: string) {
  const palavras = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palavras / 200));
}

export async function paraHtml(markdown: string) {
  const ficheiro = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(markdown);
  return String(ficheiro);
}

export function dataPt(iso: string) {
  return new Date(iso).toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' });
}
