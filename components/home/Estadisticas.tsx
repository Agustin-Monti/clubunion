'use client';

import { useEffect, useState, useRef } from 'react';

interface Stat {
  valor: number;
  label: string;
  icono: string;
  sufijo?: string;
}

const estadisticas: Stat[] = [
  { valor: 2025, label: 'Año de fundación', icono: '📅', sufijo: '' },
  { valor: 3, label: 'Actividades deportivas', icono: '🏎️', sufijo: '' },
  { valor: 19, label: 'Pilotos en campeonato', icono: '👥', sufijo: '' },
  { valor: 8, label: 'Carreras en 2026', icono: '🏁', sufijo: '' },
];

export default function Estadisticas() {
  const [contadores, setContadores] = useState(estadisticas.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);
  const [animado, setAnimado] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animado) {
          setAnimado(true);
          estadisticas.forEach((stat, index) => {
            const incremento = Math.ceil(stat.valor / 50);
            let current = 0;
            const interval = setInterval(() => {
              current += incremento;
              if (current >= stat.valor) {
                setContadores(prev => {
                  const newContadores = [...prev];
                  newContadores[index] = stat.valor;
                  return newContadores;
                });
                clearInterval(interval);
              } else {
                setContadores(prev => {
                  const newContadores = [...prev];
                  newContadores[index] = current;
                  return newContadores;
                });
              }
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animado]);

  return (
    <section ref={sectionRef} className="mb-20">
      <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-3xl p-8 md:p-12 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {estadisticas.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl mb-3">{stat.icono}</div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                {contadores[index]}{stat.sufijo}
              </div>
              <div className="text-sm md:text-base text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}