import type { Metadata } from 'next';
import { HeroSm, JsonLd } from '@/components/Blocks';
import ContactForm from '@/components/ContactForm';
import { ArrowRight } from '@/components/Icons';
import { site } from '@/data/site';
import { meta, migalhasLd } from '@/lib/seo';

const TITULO = 'Contacto | Starmountain Flash';
const DESCRICAO =
  'Contacte a Starmountain Flash por email, telefone ou WhatsApp, ou peça um orçamento para o seu site, loja online ou automação. Covilhã, clientes em todo o país.';

export const metadata: Metadata = meta({ titulo: TITULO, descricao: DESCRICAO, caminho: '/contacto' });

const canais = [
  { etiqueta: 'Email', valor: site.email, href: 'mailto:' + site.email, nota: 'Para pedidos com mais detalhe ou ficheiros.' },
  { etiqueta: 'Telefone', valor: site.telefone, href: 'tel:' + site.telefoneRaw, nota: 'Chamada para a rede móvel nacional.' },
  { etiqueta: 'WhatsApp', valor: 'Enviar mensagem', href: '#whatsapp', wa: true, nota: 'Para uma pergunta rápida.' },
  { etiqueta: 'Horário', valor: '09:00 às 20:30', nota: 'Horário de contacto.' },
];

export default function Contacto() {
  return (
    <>
      <HeroSm
        caminho={[{ label: 'Contacto' }]}
        titulo="Contacto."
        destaque="Fala sempre comigo."
        descricao="Um site novo, uma loja online ou uma tarefa para automatizar. Escolha o canal que lhe der mais jeito, ou peça já um orçamento."
      />

      <section className="sec">
        <div className="canais">
          {canais.map((c) => (
            <div key={c.etiqueta}>
              <span className="label">
                <i />
                {c.etiqueta}
              </span>
              {c.href ? (
                <a href={c.href} {...(c.wa ? { 'data-wa': true } : {})}>
                  {c.valor} <ArrowRight />
                </a>
              ) : (
                <strong>{c.valor}</strong>
              )}
              <p>{c.nota}</p>
            </div>
          ))}
        </div>
        <div className="onde">
          <div>
            <span className="label">
              <i />
              Onde estou
            </span>
            <h2>
              Covilhã, Serra da Estrela. <span>Clientes em todo o país.</span>
            </h2>
          </div>
          <p>
            Trabalho à distância com empresas de todo o país. As reuniões fazem-se online ou nas instalações do
            cliente.
          </p>
        </div>
      </section>

      <section className="cta" id="contacto-form">
        <div className="sec">
          <div>
            <span className="label">
              <i />
              Pedir orçamento
            </span>
            <h2>
              Diga-me o que precisa. <span style={{ color: 'rgba(255,255,255,.6)' }}>Sem compromisso.</span>
            </h2>
            <p
              style={{
                margin: '22px 0 0',
                fontSize: 17,
                lineHeight: 1.55,
                color: 'rgba(255,255,255,.8)',
                maxWidth: 440,
              }}
            >
              Leio cada pedido e respondo com os próximos passos.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <JsonLd
        data={[
          migalhasLd([{ nome: 'Contacto', caminho: '/contacto' }]),
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: TITULO,
            url: site.url + '/contacto',
            about: { '@id': site.url + '/#negocio' },
          },
        ]}
      />
    </>
  );
}
