'use client';
import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useState } from 'react';

const CHAVE = 'smf-cookies';
const GA = process.env.NEXT_PUBLIC_GA_ID;

type Estado = 'a-carregar' | 'por-decidir' | 'sim' | 'nao';

/**
 * RGPD: o Google Analytics só carrega depois de "Aceitar".
 * A escolha fica no localStorage do visitante e não sai do browser.
 */
export default function CookieBanner() {
  const [estado, setEstado] = useState<Estado>('a-carregar');
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    let guardado: string | null = null;
    try {
      guardado = window.localStorage.getItem(CHAVE);
    } catch {
      // Navegação privada ou cookies bloqueados: trata-se como "por decidir".
    }
    if (guardado === 'sim' || guardado === 'nao') {
      setEstado(guardado);
      return;
    }
    setEstado('por-decidir');
    const id = setTimeout(() => setVisivel(true), 900);
    return () => clearTimeout(id);
  }, []);

  function decidir(resposta: 'sim' | 'nao') {
    try {
      window.localStorage.setItem(CHAVE, resposta);
    } catch {
      // Sem localStorage a escolha vale só para esta visita.
    }
    setVisivel(false);
    setTimeout(() => setEstado(resposta), 350);
  }

  return (
    <>
      {estado === 'sim' && GA && (
        <>
          <Script src={'https://www.googletagmanager.com/gtag/js?id=' + GA} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA}',{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {estado === 'por-decidir' && (
        <div className={visivel ? 'ck show' : 'ck'} role="dialog" aria-label="Cookies">
          <h4>Um pedido rápido sobre cookies.</h4>
          <p>
            Gostava de usar o Google Analytics para perceber que páginas são úteis. Só com a sua autorização. O site
            funciona na mesma se recusar. Mais detalhes na{' '}
            <Link href="/privacidade">política de privacidade</Link>.
          </p>
          <div className="ck-acts">
            <button type="button" className="ok" onClick={() => decidir('sim')}>
              Aceitar
            </button>
            <button type="button" onClick={() => decidir('nao')}>
              Recusar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
