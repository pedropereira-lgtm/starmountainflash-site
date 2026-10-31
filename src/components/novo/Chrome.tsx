'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RODAPE, RODAPE_EN, TOPO, TOPO_EN } from './chrome';

/**
 * Língua do endereço (/en = inglês). Nas páginas normais o servidor já sabe a
 * língua; na 404 (gerada uma vez) corrige-se depois de abrir, sem erro de hidratação.
 */
function useEn() {
  const caminho = usePathname() ?? '';
  const [en, setEn] = useState(caminho.startsWith('/en'));
  useEffect(() => setEn(window.location.pathname.startsWith('/en')), [caminho]);
  return en;
}

/** Nav, menu do telemóvel e pop-up do novo design, na língua do endereço. */
export function Topo() {
  const en = useEn();
  return <div className="sfc sfc-top" dangerouslySetInnerHTML={{ __html: en ? TOPO_EN : TOPO }} />;
}

/** Footer do novo design, na língua do endereço. */
export function Rodape() {
  const en = useEn();
  return <div className="sfc sfc-foot" dangerouslySetInnerHTML={{ __html: en ? RODAPE_EN : RODAPE }} />;
}
