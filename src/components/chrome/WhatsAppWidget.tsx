'use client';
import { useEffect, useRef, useState } from 'react';
import { site, whatsappMensagens } from '@/data/site';
import { ArrowRight, Close, WhatsAppGlyph } from '../Icons';

export default function WhatsAppWidget({
  open,
  onOpen,
  onClose,
  fabEscondido,
}: {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  fabEscondido: boolean;
}) {
  const [texto, setTexto] = useState('');
  const [escolhida, setEscolhida] = useState<string | null>(null);
  const areaRef = useRef<HTMLTextAreaElement>(null);
  const painel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => painel.current?.querySelector<HTMLButtonElement>('.wa-opts button')?.focus(), 300);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const href =
    'https://wa.me/' + site.whatsapp + (texto.trim() ? '?text=' + encodeURIComponent(texto.trim()) : '');

  return (
    <>
      <button
        className={fabEscondido ? 'wa-fab hide' : 'wa-fab'}
        type="button"
        aria-label="Falar pelo WhatsApp"
        onClick={() => (open ? onClose() : onOpen())}
      >
        <WhatsAppGlyph size={26} />
      </button>
      <div className={open ? 'wa-bg open' : 'wa-bg'} onClick={onClose} />
      <div
        className={open ? 'wa open' : 'wa'}
        id="wa"
        role="dialog"
        aria-label="Conversa por WhatsApp"
        aria-hidden={!open}
        ref={painel}
      >
        <div className="wa-head">
          <span className="wa-av">PP</span>
          <div>
            <strong>Pedro Pereira</strong>
            <span>Starmountain Flash · WhatsApp</span>
          </div>
          <button className="wa-x" type="button" aria-label="Fechar" onClick={onClose}>
            <Close size={13} stroke="#fff" />
          </button>
        </div>
        <div className="wa-body">
          <div className="wa-msg">
            Olá! Sou o Pedro. Escolha um assunto ou escreva a sua mensagem, e continuamos a conversa no WhatsApp.
          </div>
          <div className="wa-opts">
            {whatsappMensagens.map((o) => (
              <button
                key={o.label}
                type="button"
                className={escolhida === o.label ? 'on' : undefined}
                onClick={() => {
                  setEscolhida(o.label);
                  setTexto(o.msg);
                  areaRef.current?.focus();
                }}
              >
                {o.label} <ArrowRight />
              </button>
            ))}
          </div>
          <textarea
            id="wa-text"
            aria-label="Mensagem"
            placeholder="Ou escreva aqui a sua mensagem…"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            ref={areaRef}
          />
          <a
            className="wa-go"
            id="wa-go"
            href={href}
            target="_blank"
            rel="noopener"
            onClick={() => setTimeout(onClose, 300)}
          >
            Continuar no WhatsApp{' '}
            <b>
              <WhatsAppGlyph size={18} />
            </b>
          </a>
          <div className="wa-foot">Abre o WhatsApp com a mensagem pronta a enviar.</div>
        </div>
      </div>
    </>
  );
}
