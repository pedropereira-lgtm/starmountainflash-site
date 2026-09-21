'use client';
import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import StickyBar from './chrome/StickyBar';
import MobilePanel from './chrome/MobilePanel';
import QuoteModal from './chrome/QuoteModal';
import WhatsAppWidget from './chrome/WhatsAppWidget';
import CookieBanner from './chrome/CookieBanner';

/**
 * Tudo o que é interativo e partilhado por todas as páginas.
 *
 * Os botões que abrem estes painéis estão espalhados pelo conteúdo de cada
 * página (que é servido como HTML estático). Em vez de os transformar todos em
 * componentes de cliente, apanham-se os cliques no documento, exatamente como
 * fazia o JavaScript do protótipo.
 */
export default function SiteChrome() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [orcamento, setOrcamento] = useState(false);
  const [whatsapp, setWhatsapp] = useState(false);
  const [barra, setBarra] = useState(false);

  const fecharTudo = useCallback(() => {
    setMenu(false);
    setOrcamento(false);
    setWhatsapp(false);
  }, []);

  // Mudar de página fecha o que estiver aberto.
  useEffect(() => {
    fecharTudo();
  }, [pathname, fecharTudo]);

  // O menu e o pop-up bloqueiam o scroll da página por baixo.
  useEffect(() => {
    document.body.style.overflow = menu || orcamento ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menu, orcamento]);

  // Cliques delegados: "Pedir orçamento", WhatsApp, burger e dropdown Serviços.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const alvo = e.target as HTMLElement | null;
      if (!alvo) return;

      const wa = alvo.closest('[data-wa]');
      if (wa) {
        e.preventDefault();
        setMenu(false);
        setOrcamento(false);
        setWhatsapp((v) => !v);
        return;
      }

      const orc = alvo.closest<HTMLAnchorElement>('a[href="#orcamento"]');
      // Na home, os links dentro da própria secção de contacto são âncoras a sério.
      if (orc && !orc.closest('#orcamento')) {
        e.preventDefault();
        setWhatsapp(false);
        setMenu(false);
        setOrcamento(true);
        return;
      }

      if (alvo.closest('.burger')) {
        e.preventDefault();
        setMenu(true);
        return;
      }

      const ddBtn = alvo.closest<HTMLButtonElement>('.dd-btn');
      if (ddBtn) {
        e.stopPropagation();
        const dd = ddBtn.closest('.dd');
        const abrir = !dd?.classList.contains('open');
        document.querySelectorAll('.dd.open').forEach((x) => {
          x.classList.remove('open');
          x.querySelector('.dd-btn')?.setAttribute('aria-expanded', 'false');
        });
        if (dd && abrir) {
          dd.classList.add('open');
          ddBtn.setAttribute('aria-expanded', 'true');
        }
        return;
      }

      // Clicar fora fecha o dropdown.
      document.querySelectorAll('.dd.open').forEach((x) => {
        x.classList.remove('open');
        x.querySelector('.dd-btn')?.setAttribute('aria-expanded', 'false');
      });
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Esc fecha o menu (o pop-up e o WhatsApp tratam do seu próprio Esc).
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenu(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menu]);

  // A barra fixa aparece quando o cabeçalho do hero deixa de estar visível.
  useEffect(() => {
    const cabecalho = document.querySelector('.hero .nav');
    if (!cabecalho) {
      setBarra(false);
      return;
    }
    const obs = new IntersectionObserver((entradas) => setBarra(!entradas[0].isIntersecting));
    obs.observe(cabecalho);
    return () => obs.disconnect();
  }, [pathname]);

  return (
    <>
      <StickyBar show={barra} />
      <MobilePanel open={menu} onClose={() => setMenu(false)} />
      <QuoteModal open={orcamento} onClose={() => setOrcamento(false)} />
      <WhatsAppWidget
        open={whatsapp}
        onOpen={() => {
          setMenu(false);
          setOrcamento(false);
          setWhatsapp(true);
        }}
        onClose={() => setWhatsapp(false)}
        fabEscondido={menu || whatsapp}
      />
      <CookieBanner />
    </>
  );
}
