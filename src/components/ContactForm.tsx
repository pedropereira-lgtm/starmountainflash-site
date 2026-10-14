'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { opcoesServico } from '@/data/servicos';
import { site } from '@/data/site';
import { ArrowUpRight, Check } from './Icons';

const vazio = { nome: '', email: '', empresa: '', telefone: '', servico: opcoesServico[0], mensagem: '', website: '' };

/** Formulário da secção de contacto da página inicial. */
export default function ContactForm() {
  const [campos, setCampos] = useState(vazio);
  const [estado, setEstado] = useState<'idle' | 'a-enviar' | 'enviado' | 'erro'>('idle');
  const [nomeEnviado, setNomeEnviado] = useState('');
  const confirmacao = useRef<HTMLDivElement>(null);

  // Depois de enviar, a confirmação ocupa o lugar do formulário e fica à vista.
  useEffect(() => {
    if (estado !== 'enviado' || !confirmacao.current) return;
    confirmacao.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    confirmacao.current.focus({ preventScroll: true });
  }, [estado]);

  const set =
    (k: keyof typeof vazio) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setCampos((c) => ({ ...c, [k]: e.target.value }));

  async function submeter(e: React.FormEvent) {
    e.preventDefault();
    setEstado('a-enviar');
    try {
      const r = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...campos, origem: 'Formulário de contacto' }),
      });
      if (!r.ok) throw new Error(String(r.status));
      setNomeEnviado(campos.nome.trim().split(/\s+/)[0] ?? '');
      setCampos(vazio);
      setEstado('enviado');
    } catch {
      setEstado('erro');
    }
  }

  if (estado === 'enviado') {
    return (
      <div className="cf-ok" ref={confirmacao} tabIndex={-1} role="status">
        <span className="ok">
          <Check />
        </span>
        <h3>Pedido recebido.</h3>
        <p>
          Obrigado{nomeEnviado ? ', ' + nomeEnviado : ''}. Vou analisar o que me enviou e respondo com os próximos
          passos, para o email que indicou.
        </p>
        <p className="cf-ok-alt">
          Se for urgente, fale comigo pelo{' '}
          <a href="#whatsapp" data-wa>
            WhatsApp
          </a>{' '}
          ou pelo <a href={'tel:' + site.telefoneRaw}>{site.telefone}</a>.
        </p>
        <button type="button" className="cf-ok-novo" onClick={() => setEstado('idle')}>
          Enviar outro pedido
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submeter}>
      <div className="row">
        <label>
          Nome
          <input type="text" placeholder="O seu nome" required value={campos.nome} onChange={set('nome')} />
        </label>
        <label>
          Email
          <input type="email" placeholder="nome@empresa.pt" required value={campos.email} onChange={set('email')} />
        </label>
      </div>
      <div className="row">
        <label>
          Empresa
          <input type="text" placeholder="Nome da empresa" value={campos.empresa} onChange={set('empresa')} />
        </label>
        <label>
          Telefone
          <input type="tel" placeholder="Opcional" value={campos.telefone} onChange={set('telefone')} />
        </label>
      </div>
      <label>
        O que precisa
        <select value={campos.servico} onChange={set('servico')}>
          {opcoesServico.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <label>
        Sobre o projeto
        <textarea
          placeholder="Objetivo, prazo pretendido, site atual se tiver…"
          value={campos.mensagem}
          onChange={set('mensagem')}
        />
      </label>
      {/* Armadilha anti-spam: invisivel e fora da ordem de tabulacao. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={campos.website}
        onChange={set('website')}
        style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
      />
      <button type="submit" className="btn btn-light" disabled={estado === 'a-enviar'}>
        {estado === 'a-enviar' ? 'A enviar…' : 'Enviar pedido'}{' '}
        <span className="ic">
          <ArrowUpRight />
        </span>
      </button>
      <small aria-live="polite">
        {estado === 'erro' ? (
          <>Não foi possível enviar. Tente outra vez, ou escreva para {site.email}.</>
        ) : (
          <>
            Os dados são usados apenas para responder ao pedido.{' '}
            <Link href="/privacidade" style={{ textDecoration: 'underline' }}>
              Política de privacidade
            </Link>
            .
          </>
        )}
      </small>
    </form>
  );
}
