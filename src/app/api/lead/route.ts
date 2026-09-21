import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { notificar } from '@/lib/brevo';
import { hashIp, ipDoPedido, pareceRobo, validar } from '@/lib/lead';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** No máximo 5 pedidos por IP por hora. */
const LIMITE = 5;
const JANELA_MS = 60 * 60 * 1000;

function cliente() {
  const url = process.env.SUPABASE_URL;
  const chave = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !chave) return null;
  // Chave de serviço: só corre no servidor, nunca chega ao browser.
  return createClient(url, chave, { auth: { persistSession: false } });
}

export async function POST(pedido: Request) {
  let corpo: unknown;
  try {
    corpo = await pedido.json();
  } catch {
    return NextResponse.json({ erro: 'Pedido inválido.' }, { status: 400 });
  }

  // Robô apanhado na armadilha: responde OK para não lhe dar pistas.
  if (pareceRobo(corpo)) return NextResponse.json({ ok: true });

  const resultado = validar(corpo);
  if (!resultado.ok) {
    return NextResponse.json({ erro: 'Dados em falta ou inválidos.', campos: resultado.erros }, { status: 422 });
  }
  const { lead } = resultado;

  const db = cliente();
  if (!db) {
    console.error('[lead] SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY por definir.');
    return NextResponse.json({ erro: 'Serviço indisponível.' }, { status: 503 });
  }

  const ip = hashIp(ipDoPedido(pedido.headers));

  // Limite por IP, contado na própria tabela para resistir a reinícios da função.
  const desde = new Date(Date.now() - JANELA_MS).toISOString();
  const { count, error: erroContagem } = await db
    .from('leads')
    .select('id', { count: 'exact', head: true })
    .eq('ip_hash', ip)
    .gte('created_at', desde);

  if (erroContagem) {
    console.error('[lead] Falha a contar pedidos recentes:', erroContagem.message);
  } else if ((count ?? 0) >= LIMITE) {
    return NextResponse.json(
      { erro: 'Demasiados pedidos. Tente mais tarde ou escreva-nos por email.' },
      { status: 429 },
    );
  }

  const { error } = await db.from('leads').insert({ ...lead, ip_hash: ip });
  if (error) {
    console.error('[lead] Falha a gravar no Supabase:', error.message);
    return NextResponse.json({ erro: 'Não foi possível guardar o pedido.' }, { status: 500 });
  }

  // O pedido já está guardado; se o email falhar, o pedido não se perde.
  await notificar(lead);

  return NextResponse.json({ ok: true });
}
