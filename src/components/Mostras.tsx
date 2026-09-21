import Image from 'next/image';
import { imagem } from '@/lib/imagens';

/**
 * Um mockup já vem com a moldura de browser e de telemóvel desenhadas e com
 * fundo próprio: mostra-se inteiro, sem lhe acrescentar mais nenhuma moldura.
 */
export function Mockup({ src, alt }: { src?: string; alt: string }) {
  const img = imagem(src);
  if (!img) return null;
  return (
    <div className="mockup">
      <Image src={img.src} alt={alt} width={img.width} height={img.height} sizes="(max-width: 960px) 100vw, 90vw" />
    </div>
  );
}

/** Screenshot de desktop, dentro da moldura de browser do site. */
function Desktop({ src, alt, dominio }: { src?: string; alt: string; dominio: string }) {
  const img = imagem(src);
  if (!img) return null;
  return (
    <div className="proj">
      <div className="browser">
        <div className="bar">
          <i />
          <i />
          <i />
          <em>{dominio}</em>
        </div>
        <div className="shot">
          <Image
            src={img.src}
            alt={alt}
            className="sc"
            width={img.width}
            height={img.height}
            sizes="(max-width: 760px) 100vw, 60vw"
          />
        </div>
      </div>
    </div>
  );
}

/** Screenshot de telemóvel, dentro da moldura de telemóvel do site. */
function Telemovel({ src, alt }: { src?: string; alt: string }) {
  const img = imagem(src);
  if (!img) return null;
  return (
    <div className="phone-wrap">
      <div className="phone">
        <div className="phone-shot">
          <Image
            src={img.src}
            alt={alt}
            width={img.width}
            height={img.height}
            sizes="(max-width: 760px) 70vw, 280px"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Os dois screenshots lado a lado; no telemóvel, um por baixo do outro.
 * Se só existir um dos ficheiros, mostra-se esse sozinho.
 */
export function Screenshots({
  desktop,
  mobile,
  dominio,
  nome,
}: {
  desktop?: string;
  mobile?: string;
  dominio: string;
  nome: string;
}) {
  const temDesktop = Boolean(imagem(desktop));
  const temMobile = Boolean(imagem(mobile));
  if (!temDesktop && !temMobile) return null;

  return (
    <div className={temDesktop && temMobile ? 'shots' : 'shots shots-um'}>
      <Desktop src={desktop} alt={`${nome} em computador`} dominio={dominio} />
      <Telemovel src={mobile} alt={`${nome} em telemóvel`} />
    </div>
  );
}
