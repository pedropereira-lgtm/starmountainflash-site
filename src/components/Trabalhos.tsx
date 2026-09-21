import Image from 'next/image';
import Link from 'next/link';
import { trabalhosPublicados, type Trabalho } from '@/data/trabalhos';
import { imagem } from '@/lib/imagens';

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
 * Sem screenshot, o cartão fica como no protótipo, com o logótipo do cliente.
 */
export function Shot({ t, grande = false }: { t: Trabalho; grande?: boolean }) {
  const classe = 'shot' + (grande ? ' big' : '');
  const img = imagem(t.screenshot);

  if (!img) {
    return (
      <div className={classe}>
        <Marca marca={t.marca} />
      </div>
    );
  }

  return (
    <div className={classe}>
      <Image
        src={img.src}
        alt={'Site ' + t.nome}
        className="sc"
        width={img.width}
        height={img.height}
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
