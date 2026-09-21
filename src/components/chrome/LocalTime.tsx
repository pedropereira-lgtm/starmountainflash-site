'use client';
import { useEffect, useState } from 'react';

/** Hora de Lisboa, atualizada de 30 em 30 segundos (como no protótipo). */
export default function LocalTime() {
  const [hora, setHora] = useState('');
  useEffect(() => {
    const t = () =>
      setHora(
        new Date().toLocaleTimeString('pt-PT', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Europe/Lisbon',
        }) + ' hora local',
      );
    t();
    const id = setInterval(t, 30000);
    return () => clearInterval(id);
  }, []);
  return <span id="hora">{hora}</span>;
}
