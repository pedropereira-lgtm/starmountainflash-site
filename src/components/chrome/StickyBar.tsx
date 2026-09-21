import Link from 'next/link';
import { ArrowUpRight, Logo } from '../Icons';
import { Menu } from '../Nav';

/** Barra que aparece quando o cabeçalho do hero sai do ecrã. */
export default function StickyBar({ show }: { show: boolean }) {
  return (
    <div className={`mbar${show ? ' show' : ''}`} aria-hidden={!show}>
      <Link href="/" className="brand">
        <Logo />
        Starmountain Flash
      </Link>
      <Menu label="Principal (fixo)" />
      <a href="#orcamento" className="btn btn-light">
        Pedir orçamento{' '}
        <span className="ic">
          <ArrowUpRight size={16} />
        </span>
      </a>
      <button className="burger" type="button" aria-expanded="false" aria-controls="menu-mobile">
        Menu{' '}
        <b>
          <i></i>
          <i></i>
        </b>
      </button>
    </div>
  );
}
