import Image from 'next/image';
import Link from 'next/link';
import { trabalhosPublicados, type Trabalho } from '@/data/trabalhos';
import { imagemExiste } from '@/lib/imagens';

/** A marca do cliente, como aparece dentro da moldura do browser e na barra de logótipos. */
export function Marca({ marca }: { marca: Trabalho['marca'] }) {
  if (marca.tipo === 'img') {
    return <Image src={marca.src} alt={marca.alt} className="lg-ubi" width={220} height={64} />;
  }
  if (marca.tipo === 'img-texto') {
    return (
      <span className="lg-pt">
        <Image src={marca.src} alt="" width={60} height={60} />
        {marca.texto}
      </span>
    );
  }
  return <span className="lg-txt">{marca.texto}</span>;
}

/**
 * O interior da moldura do browser: o screenshot quando existe, senão a marca.
 * `variante` escolhe entre o screenshot dos cartões e o da página de caso.
 */
export function Shot({
  t,
  variante = 'cartao',
  grande = false,
}: {
  t: Trabalho;
  variante?: 'cartao' | 'caso';
  grande?: boolean;
}) {
  const caminho = variante === 'caso' ? (t.screenshotCaso ?? t.screenshot) : t.screenshot;
  const classe = 'shot' + (grande ? ' big' : '');

  if (!imagemExiste(caminho)) {
    return (
      <div className={classe}>
        <Marca marca={t.marca} />
      </div>
    );
  }

  // O mockup é uma composição pronta e não pode ser cortado; um screenshot
  // do site enche a moldura a partir do topo da página.
  const mockup = variante === 'caso' && Boolean(t.screenshotCaso);
  return (
    <div className={classe}>
      <Image
        src={caminho}
        alt={'Site ' + t.nome}
        className={mockup ? 'sc sc-mockup' : 'sc'}
        width={2000}
        height={1125}
        sizes={grande ? '(max-width: 960px) 100vw, 90vw' : '(max-width: 960px) 100vw, 45vw'}
      />
    </div>
  );
}

function Cartao({ t }: { t: Trabalho }) {
  return (
    <Link className={t.layout === 'wide' ? 'proj wide' : 'proj'} href={'/trabalhos/' + t.slug}>
      <div className="browser">
        <div className="bar">
          <i />
          <i />
          <i />
          <em>{t.dominio}</em>
        </div>
        <Shot t={t} />
      </div>
      <div className="meta">
        <div>
          <h3>{t.nome}</h3>
          <p>{t.resumo}</p>
        </div>
        <div className="tags">
          {t.tags.map((tag) => (
            <span className="pill" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

/** Grelha de trabalhos da página inicial. Só mostra os que têm published: true. */
export default function TrabalhosGrid() {
  return (
    <div className="work">
      {trabalhosPublicados.map((t) => (
        <Cartao t={t} key={t.slug} />
      ))}
    </div>
  );
}
