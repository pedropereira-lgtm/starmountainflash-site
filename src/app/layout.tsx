import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import Footer from '@/components/Footer';
import SiteChrome from '@/components/SiteChrome';
import { JsonLd } from '@/components/Blocks';
import { negocioLd } from '@/lib/seo';
import { site } from '@/data/site';

/** Onest alojada no próprio site (era servida pelo Google Fonts no protótipo). */
const onest = localFont({
  src: [
    { path: '../fonts/onest-latin.woff2', weight: '400 600', style: 'normal' },
    { path: '../fonts/onest-latin-ext.woff2', weight: '400 600', style: 'normal' },
  ],
  variable: '--font-onest',
  display: 'swap',
  fallback: ['-apple-system', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Starmountain Flash — Websites e automações de IA para PME',
    template: '%s',
  },
  description: site.descricao,
  authors: [{ name: site.fundador, url: site.url + '/sobre' }],
  creator: site.fundador,
  publisher: site.nome,
  formatDetection: { telephone: false },
  // Caminhos fixos em public/, sem hash de build: o Google e os browsers
  // procuram-nos em endereços previsíveis, e o /favicon.ico é pedido na raiz
  // mesmo quando não está declarado.
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon-v2.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
};

export const viewport: Viewport = {
  themeColor: '#F2F1ED',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={onest.variable}>
      <body>
        {children}
        <Footer />
        <SiteChrome />
        <JsonLd data={negocioLd} />
      </body>
    </html>
  );
}
