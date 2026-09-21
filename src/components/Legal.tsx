import type { ReactNode } from 'react';

export type Seccao = { id: string; titulo: string; corpo: ReactNode };

/**
 * Página legal: índice fixo à esquerda, texto à direita.
 * Reaproveita o layout e os estilos da página de artigo.
 */
export default function Legal({ atualizado, seccoes }: { atualizado: string; seccoes: Seccao[] }) {
  return (
    <section className="sec">
      <div className="art">
        <aside className="art-side">
          <div className="art-meta">
            <span>Última atualização</span>
            <strong style={{ color: 'var(--ink)', fontSize: 15 }}>{atualizado}</strong>
          </div>
          <nav className="toc" aria-label="Índice">
            <h2>Nesta página</h2>
            <ol>
              {seccoes.map((s) => (
                <li key={s.id}>
                  <a href={'#' + s.id}>{s.titulo}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
        <div className="prose">
          {seccoes.map((s) => (
            <section key={s.id}>
              <h2 id={s.id}>{s.titulo}</h2>
              {s.corpo}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
