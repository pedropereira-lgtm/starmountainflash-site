import Link from 'next/link';
import { navServicos } from '@/data/site';
import { ArrowRight, ArrowUpRight, Chevron, Logo } from './Icons';

/** O menu "Serviços", usado no cabeçalho do hero e na barra fixa. */
export function ServicesDropdown() {
  return (
    <div className="dd">
      <button className="dd-btn" type="button" aria-expanded="false">
        Serviços <Chevron />
      </button>
      <div className="dd-menu">
        {navServicos.map((s) => (
          <Link className="i" href={s.href} key={s.href}>
            <strong>{s.titulo}</strong>
            <span>{s.sub}</span>
            <ArrowRight />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Menu({ label }: { label: string }) {
  return (
    <nav className="menu" aria-label={label}>
      <ServicesDropdown />
      <Link href="/#trabalhos">Trabalhos</Link>
      <Link href="/metodo">Método</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
}

/** Cabeçalho dentro do hero. Presente em todas as páginas. */
export default function Nav() {
  return (
    <header className="nav">
      <Link href="/" className="brand" aria-label="Starmountain Flash — início">
        <Logo />
        Starmountain Flash
      </Link>
      <Menu label="Principal" />
      <div className="nav-r">
        <a href="#orcamento" className="btn btn-light">
          Pedir orçamento
          <span className="ic">
            <ArrowUpRight />
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
    </header>
  );
}
