'use client';
import { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import StickyBar from './chrome/StickyBar';

// Painéis que não são precisos para o primeiro ecrã: o código vai em ficheiros
// à parte e só é carregado depois de a página ficar pronta (ou ao primeiro
// clique), para não pesar no arranque da página.
const MobilePanel = dynamic(() => import('./chrome/MobilePanel'), { ssr: false });
const QuoteModal = dynamic(() => import('./chrome/QuoteModal'), { ssr: false });
const WhatsAppWidget = dynamic(() => import('./chrome/WhatsAppWidget'), { ssr: false });
const CookieBanner = dynamic(() => import('./chrome/CookieBanner'), { ssr: false });

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
  const [pronto, setPronto] = useState(false);

  // Os painéis só entram quando o browser está livre, depois do carregamento.
  useEffect(() => {
    let idle = 0;
    let t = 0;
    const montar = () => setPronto(true);
    const agendar = () => {
      if ('requestIdleCallback' in window) idle = window.requestIdleCallback(montar, { timeout: 2500 });
      else t = setTimeout(montar, 1200) as unknown as number;
    };
    if (document.readyState === 'complete') agendar();
    else window.addEventListener('load', agendar, { once: true });
    return () => {
      window.removeEventListener('load', agendar);
      if (idle) window.cancelIdleCallback(idle);
      if (t) clearTimeout(t);
    };
  }, []);

  // Um clique antes disso também os monta logo.
  const montado = pronto || menu || orcamento || whatsapp;

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
      {montado && (
        <>
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
      )}
    </>
  );
}
