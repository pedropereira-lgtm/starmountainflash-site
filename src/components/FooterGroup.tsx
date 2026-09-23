'use client';
import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Um grupo de ligações do rodapé.
 *
 * Em ecrãs estreitos fecha-se num acordeão; a partir de 961px fica sempre
 * aberto e o título deixa de ser clicável. O HTML sai do servidor com o grupo
 * aberto, por isso sem JavaScript vê-se tudo, como antes.
 */
export default function FooterGroup({ titulo, children }: { titulo: string; children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const estreito = window.matchMedia('(max-width: 960px)');
    const aplicar = () => {
      if (ref.current) ref.current.open = !estreito.matches;
    };
    aplicar();
    estreito.addEventListener('change', aplicar);
    return () => estreito.removeEventListener('change', aplicar);
  }, []);

  return (
    <details className="f-grupo" ref={ref} open>
      <summary>
        <h3>{titulo}</h3>
      </summary>
      <div className="f-links">{children}</div>
    </details>
  );
}
