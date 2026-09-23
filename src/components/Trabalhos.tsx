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

/** Largura real de um cartão: a toda a largura, ou metade da grelha de dois. */
export const SIZES_CARTAO = {
  largo: '100vw',
  duasColunas: '(max-width: 960px) 100vw, 50vw',
} as const;

/**
 * O interior da moldura do browser: o screenshot quando existe, senão a marca.
 * Sem screenshot, o cartão fica como no protótipo, com o logótipo do cliente.
 */
export function Shot({
  t,
  grande = false,
  sizes = SIZES_CARTAO.duasColunas,
}: {
  t: Trabalho;
  grande?: boolean;
  sizes?: string;
}) {
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
        sizes={sizes}
        // Texto pequeno dentro do screenshot: menos compressão.
        quality={90}
      />
    </div>
  );
}

/**
 * A grelha tem duas colunas. Um cartão normal que ficasse sozinho na última
 * linha deixava metade dela vazia, por isso passa a ocupar a linha toda.
 * Quando houver mais trabalhos publicados, volta sozinho a meia largura.
 */
function larguras(lista: Trabalho[]): Trabalho['layout'][] {
  const out = lista.map((t) => t.layout);
  const inicioDeLinha: boolean[] = [];
  let coluna = 0;
  out.forEach((l, i) => {
    inicioDeLinha[i] = coluna === 0;
    coluna = (coluna + (l === 'wide' ? 2 : 1)) % 2;
  });
  const ultimo = out.length - 1;
  if (ultimo >= 0 && out[ultimo] === 'normal' && inicioDeLinha[ultimo]) out[ultimo] = 'wide';
  return out;
}

function Cartao({ t, layout }: { t: Trabalho; layout: Trabalho['layout'] }) {
  return (
    <Link className={layout === 'wide' ? 'proj wide' : 'proj'} href={'/trabalhos/' + t.slug}>
      <div className="browser">
        <div className="bar">
          <i />
          <i />
          <i />
          <em>{t.dominio}</em>
        </div>
        <Shot t={t} sizes={layout === 'wide' ? SIZES_CARTAO.largo : SIZES_CARTAO.duasColunas} />
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
  const larg = larguras(trabalhosPublicados);
  return (
    <div className="work">
      {trabalhosPublicados.map((t, i) => (
        <Cartao t={t} layout={larg[i]} key={t.slug} />
      ))}
    </div>
  );
}
