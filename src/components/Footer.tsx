import Link from 'next/link';
import { site } from '@/data/site';
import { Logo } from './Icons';

export default function Footer() {
  const { redes } = site;
  return (
    <footer>
      <div className="f-top">
        <div>
          <Link href="/" className="brand" style={{ color: 'var(--ink)', marginBottom: 16 }}>
            <Logo size={24} stroke="#0E4B35" />
            Starmountain Flash
          </Link>
          <p>Websites e automações de IA para PME e marcas portuguesas. Covilhã, Serra da Estrela.</p>
        </div>
        <div>
          <h3>Serviços</h3>
          <Link href="/websites">Websites</Link>
          <Link href="/lojas-online">Lojas online</Link>
          <Link href="/automacoes">Automações de IA</Link>
        </div>
        <div>
          <h3>Empresa</h3>
          <Link href="/#trabalhos">Trabalhos</Link>
          <Link href="/metodo">Método</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div>
          <h3>Contacto</h3>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.telefoneRaw}`}>{site.telefone}</a>
          <a href="#whatsapp" data-wa>
            WhatsApp
          </a>
          {/* Links por confirmar: ficam sem href enquanto não existirem. */}
          {redes.instagram ? (
            <a href={redes.instagram} target="_blank" rel="noopener">
              Instagram
            </a>
          ) : (
            <a href="#">Instagram</a>
          )}
          {redes.linkedin ? (
            <a href={redes.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
          ) : (
            <a href="#">LinkedIn</a>
          )}
        </div>
      </div>
      <div className="f-bot">
        <span>
          © {new Date().getFullYear()} Starmountain Flash · {site.fundador} · NIF {site.nif}
        </span>
        <div>
          <Link href="/privacidade">Política de privacidade</Link>
          <Link href="/termos">Termos</Link>
          <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener">
            Livro de Reclamações
          </a>
        </div>
      </div>
    </footer>
  );
}
