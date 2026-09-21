import type { Lead } from './lead';
import { escaparHtml } from './lead';
import { site } from '@/data/site';

/**
 * Notificação por email através da API transacional da Brevo.
 * Devolve false em vez de lançar: um email que falha não deve fazer o
 * visitante perder o pedido, que já ficou guardado no Supabase.
 */
export async function notificar(lead: Lead): Promise<boolean> {
  const chave = process.env.BREVO_API_KEY;
  const remetente = process.env.BREVO_SENDER || site.email;
  const destino = process.env.LEAD_NOTIFY_TO || site.email;

  if (!chave) {
    console.warn('[lead] BREVO_API_KEY por definir: notificação não enviada.');
    return false;
  }

  const linhas: [string, string][] = [
    ['Nome', lead.nome],
    ['Email', lead.email],
    ['Empresa', lead.empresa || '—'],
    ['Telefone', lead.telefone || '—'],
    ['Serviço', lead.servico || '—'],
    ['Origem', lead.origem],
  ];

  const tabela = linhas
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#8A8E8B;font-size:13px">${k}</td>` +
        `<td style="padding:6px 0;font-size:15px">${escaparHtml(v)}</td></tr>`,
    )
    .join('');

  const html =
    `<div style="font-family:system-ui,sans-serif;color:#0D0F0E">` +
    `<h2 style="font-weight:500;letter-spacing:-.02em">Novo pedido de orçamento</h2>` +
    `<table style="border-collapse:collapse">${tabela}</table>` +
    (lead.mensagem
      ? `<p style="margin-top:18px;color:#8A8E8B;font-size:13px">Mensagem</p>` +
        `<p style="margin:0;font-size:15px;line-height:1.6;white-space:pre-wrap">${escaparHtml(lead.mensagem)}</p>`
      : '') +
    `</div>`;

  try {
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': chave, 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Site Starmountain Flash', email: remetente },
        to: [{ email: destino }],
        // Responder ao email vai direto para o cliente.
        replyTo: { email: lead.email, name: lead.nome },
        subject: `Novo pedido — ${lead.nome}${lead.servico ? ' · ' + lead.servico : ''}`,
        htmlContent: html,
      }),
    });
    if (!r.ok) {
      console.error('[lead] Brevo devolveu', r.status, await r.text().catch(() => ''));
      return false;
    }
    return true;
  } catch (e) {
    console.error('[lead] Falha a contactar a Brevo:', e);
    return false;
  }
}
