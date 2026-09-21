'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { site } from '@/data/site';
import { opcoesPopup } from '@/data/servicos';
import { ArrowRight, Check, Close } from '../Icons';

type Passo = 1 | 2 | 3;

export default function QuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const card = useRef<HTMLDivElement>(null);
  const nomeRef = useRef<HTMLInputElement>(null);

  const [passo, setPasso] = useState<Passo>(1);
  const [servico, setServico] = useState('');
  const [chipsErr, setChipsErr] = useState(false);
  const [erros, setErros] = useState<{ nome?: boolean; email?: boolean }>({});
  const [envio, setEnvio] = useState<'idle' | 'a-enviar' | 'erro'>('idle');
  const [primeiroNome, setPrimeiroNome] = useState('');
  const [campos, setCampos] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    mensagem: '',
    website: '',
  });

  // Cada abertura recomeça no passo 1 e põe o foco na primeira opção.
  useEffect(() => {
    if (!open) return;
    setPasso(1);
    setEnvio('idle');
    const id = setTimeout(() => card.current?.querySelector<HTMLInputElement>('#qm-svc input')?.focus(), 350);
    return () => clearTimeout(id);
  }, [open]);

  // Esc fecha; Tab fica preso dentro do pop-up.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !card.current) return;
      const alvos = Array.from(card.current.querySelectorAll<HTMLElement>('button,input,textarea,a')).filter(
        (x) => x.offsetParent !== null,
      );
      const primeiro = alvos[0];
      const ultimo = alvos[alvos.length - 1];
      if (!primeiro) return;
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  function continuar() {
    if (!servico) {
      setChipsErr(true);
      setTimeout(() => setChipsErr(false), 900);
      return;
    }
    setPasso(2);
    setTimeout(() => nomeRef.current?.focus(), 50);
  }

  async function submeter(e: React.FormEvent) {
    e.preventDefault();
    const err = {
      nome: !campos.nome.trim(),
      email: !/^\S+@\S+\.\S+$/.test(campos.email),
    };
    setErros(err);
    if (err.nome || err.email) return;

    setEnvio('a-enviar');
    try {
      const r = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...campos, servico, origem: 'Pop-up · ' + pathname }),
      });
      if (!r.ok) throw new Error(String(r.status));
      setPrimeiroNome(campos.nome.trim().split(' ')[0]);
      setPasso(3);
      setCampos({ nome: '', empresa: '', email: '', telefone: '', mensagem: '', website: '' });
      setServico('');
      setEnvio('idle');
    } catch {
      setEnvio('erro');
    }
  }

  const set =
    (k: keyof typeof campos) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setCampos((c) => ({ ...c, [k]: e.target.value }));

  return (
    <div className={open ? 'qm open' : 'qm'} id="qm" aria-hidden={!open}>
      <div className="qm-bg" onClick={onClose} />
      <div className="qm-card" role="dialog" aria-modal="true" aria-labelledby="qm-title" ref={card}>
        <div className="qm-head">
          <div>
            <span className="label">
              <i style={{ background: 'var(--emerald)' }} />
              Pedir orçamento
            </span>
            <h3 id="qm-title">
              Vamos falar do seu projeto. <span>Leva um minuto.</span>
            </h3>
          </div>
          <button className="qm-x" type="button" aria-label="Fechar" onClick={onClose}>
            <Close />
          </button>
        </div>

        <div className="qm-steps" aria-hidden="true" style={{ visibility: passo === 3 ? 'hidden' : 'visible' }}>
          <i className={passo >= 1 ? 'on' : undefined} />
          <i className={passo >= 2 ? 'on' : undefined} />
        </div>

        {passo !== 3 && (
          <form id="qm-form" noValidate onSubmit={submeter}>
            <div className={passo === 1 ? 'qm-step on' : 'qm-step'} data-step="1">
              <div className="qm-q">O que precisa?</div>
              <div className="chips" id="qm-svc">
                {opcoesPopup.map((o) => (
                  <label key={o}>
                    <input
                      type="radio"
                      name="servico"
                      value={o}
                      checked={servico === o}
                      onChange={() => setServico(o)}
                    />
                    <span className={chipsErr ? 'err' : undefined}>{o}</span>
                  </label>
                ))}
              </div>
              <label className="f">
                Conte-me em duas linhas
                <textarea
                  name="mensagem"
                  value={campos.mensagem}
                  onChange={set('mensagem')}
                  placeholder="Ex.: Tenho uma clínica e quero um site que traga marcações."
                />
              </label>
              <div className="qm-actions">
                <button type="button" className="qm-next" onClick={continuar}>
                  Continuar{' '}
                  <b>
                    <ArrowRight stroke="#fff" width={2.2} />
                  </b>
                </button>
              </div>
            </div>

            <div className={passo === 2 ? 'qm-step on' : 'qm-step'} data-step="2">
              <div className="row">
                <label className="f">
                  Nome
                  <input
                    type="text"
                    name="nome"
                    autoComplete="name"
                    placeholder="O seu nome"
                    className={erros.nome ? 'err' : undefined}
                    value={campos.nome}
                    onChange={set('nome')}
                    ref={nomeRef}
                  />
                </label>
                <label className="f">
                  Empresa
                  <input
                    type="text"
                    name="empresa"
                    autoComplete="organization"
                    placeholder="Opcional"
                    value={campos.empresa}
                    onChange={set('empresa')}
                  />
                </label>
              </div>
              <label className="f">
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="nome@empresa.pt"
                  className={erros.email ? 'err' : undefined}
                  value={campos.email}
                  onChange={set('email')}
                />
              </label>
              <label className="f">
                Telefone
                <input
                  type="tel"
                  name="telefone"
                  autoComplete="tel"
                  placeholder="Opcional, se preferir que ligue"
                  value={campos.telefone}
                  onChange={set('telefone')}
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
              <p className="qm-note">
                {envio === 'erro'
                  ? 'Não foi possível enviar o pedido. Tente outra vez, ou escreva para ' + site.email + '.'
                  : 'Uso os dados só para responder ao pedido.'}
              </p>
              <div className="qm-actions">
                <button type="button" className="qm-back" onClick={() => setPasso(1)}>
                  ← Voltar
                </button>
                <button type="submit" className="qm-next" disabled={envio === 'a-enviar'}>
                  {envio === 'a-enviar' ? 'A enviar…' : 'Enviar pedido'}{' '}
                  <b>
                    <ArrowRight stroke="#fff" width={2.2} />
                  </b>
                </button>
              </div>
            </div>
          </form>
        )}

        {passo === 3 && (
          <div className="qm-step qm-done on" data-step="3">
            <span className="ok">
              <Check />
            </span>
            <h4>Pedido recebido.</h4>
            <p>
              Obrigado, <span id="qm-nome">{primeiroNome}</span>. Vou analisar o que me enviou e respondo com os
              próximos passos.
            </p>
            <div className="qm-actions">
              <button type="button" className="qm-next" onClick={onClose}>
                Fechar{' '}
                <b>
                  <ArrowRight stroke="#fff" width={2.2} />
                </b>
              </button>
            </div>
          </div>
        )}

        <div className="qm-alt">
          <span>Prefere falar diretamente?</span>
          <span>
            <a href={'tel:' + site.telefoneRaw}>{site.telefone}</a>
            {' · '}
            <a href="#whatsapp" data-wa>
              WhatsApp
            </a>
            {' · '}
            <a href={'mailto:' + site.email}>Email</a>
          </span>
        </div>
      </div>
    </div>
  );
}
