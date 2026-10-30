'use client';
import { usePathname } from 'next/navigation';
import { RODAPE, RODAPE_EN, TOPO, TOPO_EN } from './chrome';

/** Nav, menu do telemóvel e pop-up do novo design, na língua do endereço (/en = inglês). */
export function Topo() {
  const en = usePathname()?.startsWith('/en') ?? false;
  return <div className="sfc sfc-top" dangerouslySetInnerHTML={{ __html: en ? TOPO_EN : TOPO }} />;
}

/** Footer do novo design, na língua do endereço. */
export function Rodape() {
  const en = usePathname()?.startsWith('/en') ?? false;
  return <div className="sfc sfc-foot" dangerouslySetInnerHTML={{ __html: en ? RODAPE_EN : RODAPE }} />;
}
