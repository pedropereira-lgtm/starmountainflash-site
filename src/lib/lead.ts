import crypto from 'node:crypto';

export type Lead = {
  nome: string;
  email: string;
  empresa: string;
  telefone: string;
  servico: string;
  mensagem: string;
  origem: string;
};

const LIMITES = {
  nome: 120,
  email: 160,
  empresa: 160,
  telefone: 40,
  servico: 60,
  mensagem: 4000,
  origem: 120,
} as const;

function texto(v: unknown, max: number) {
  if (typeof v !== 'string') return '';
  // Tira caracteres de controlo (incluindo quebras usadas em injeção de cabeçalhos).
  return v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max);
}

/**
 * Valida e normaliza o que chega do formulário.
 * Devolve os erros em vez de os lançar, para a resposta poder ser específica.
 */
export function validar(corpo: unknown): { ok: true; lead: Lead } | { ok: false; erros: string[] } {
  const c = (corpo ?? {}) as Record<string, unknown>;
  const erros: string[] = [];

  const lead: Lead = {
    nome: texto(c.nome, LIMITES.nome),
    email: texto(c.email, LIMITES.email).toLowerCase(),
    empresa: texto(c.empresa, LIMITES.empresa),
    telefone: texto(c.telefone, LIMITES.telefone),
    servico: texto(c.servico, LIMITES.servico),
    mensagem: texto(c.mensagem, LIMITES.mensagem),
    origem: texto(c.origem, LIMITES.origem) || 'Desconhecida',
  };

  if (lead.nome.length < 2) erros.push('nome');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email)) erros.push('email');
  if (lead.mensagem.length > LIMITES.mensagem) erros.push('mensagem');

  return erros.length ? { ok: false, erros } : { ok: true, lead };
}

/** O campo "website" é invisível no formulário: se vier preenchido, é um robô. */
export function pareceRobo(corpo: unknown) {
  const c = (corpo ?? {}) as Record<string, unknown>;
  return typeof c.website === 'string' && c.website.trim() !== '';
}

/**
 * O IP nunca é guardado em claro: só um hash com sal, que serve para
 * contar pedidos e não permite reconstruir o endereço.
 */
export function hashIp(ip: string) {
  const sal = process.env.LEAD_IP_SALT || '';
  return crypto.createHash('sha256').update(sal + '|' + ip).digest('hex').slice(0, 32);
}

/** O IP de quem faz o pedido, atrás da CDN da Netlify. */
export function ipDoPedido(headers: Headers) {
  const encadeado = headers.get('x-nf-client-connection-ip') || headers.get('x-forwarded-for') || '';
  return encadeado.split(',')[0].trim() || 'desconhecido';
}

export function escaparHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
