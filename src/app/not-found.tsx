import type { Metadata } from 'next';
import NaoEncontrada from '@/components/novo/NaoEncontrada';
import { nomesPublicados } from '@/data/trabalhos';

export const metadata: Metadata = {
  title: 'Página não encontrada | Starmountain Flash',
  description: 'Esta página não existe. Veja os serviços, os trabalhos ou fale diretamente comigo.',
  robots: { index: false, follow: true },
};

/** 404 em português ou inglês, conforme o endereço (o conteúdo decide no cliente). */
export default function PaginaNaoEncontrada() {
  return <NaoEncontrada trabalhos={nomesPublicados()} />;
}
