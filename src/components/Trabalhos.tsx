import Image from 'next/image';
import Link from 'next/link';
import { trabalhosPublicados, type Trabalho } from '@/data/trabalhos';

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
        <div className="shot">
          {t.screenshot ? (
            <Image src={t.screenshot} alt={'Site ' + t.nome} className="sc" width={1600} height={900} />
          ) : (
            <Marca marca={t.marca} />
          )}
        </div>
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
