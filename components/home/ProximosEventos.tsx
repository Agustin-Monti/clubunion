'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Datos de ejemplo - después vendrán de un archivo data
const eventos = [
  {
    id: 1,
    fecha: '2026-03-15',
    titulo: 'Automovilismo - Fecha 1',
    circuito: 'C. del Uruguay',
    categoria: 'Turismo Carretera',
    imagen: '/images/eventos/automovilismo.jpg'
  },
  {
    id: 2,
    fecha: '2026-03-22',
    titulo: 'Karting - Fecha 1',
    circuito: 'Kartódromo Rosario del Tala',
    categoria: 'Pre-Junior y Junior',
    imagen: '/images/eventos/karting.webp'
  },
  {
    id: 3,
    fecha: '2026-04-20',
    titulo: 'Torneo Golf Croquet',
    circuito: 'Cancha principal',
    categoria: 'Apertura',
    imagen: '/images/eventos/golfcroquet.jpg'
  }
];

export default function ProximosEventos() {
  const [proximosEventos, setProximosEventos] = useState(eventos);

  const formatearFecha = (fechaStr: string) => {
    const fecha = new Date(fechaStr);
    return {
      dia: fecha.getDate().toString().padStart(2, '0'),
      mes: fecha.toLocaleDateString('es-AR', { month: 'short' }).toUpperCase(),
      completo: fecha.toLocaleDateString('es-AR', { day: 'numeric', month: 'long' })
    };
  };

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Próximos <span className="text-yellow-400">Eventos</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          No te pierdas las próximas competencias y actividades del club
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {proximosEventos.map((evento) => {
          const fecha = formatearFecha(evento.fecha);
          
          return (
            <div
              key={evento.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={evento.imagen}
                  alt={evento.titulo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center min-w-[60px]">
                  <span className="block text-2xl font-bold text-blue-900">{fecha.dia}</span>
                  <span className="block text-xs font-semibold text-gray-600">{fecha.mes}</span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{evento.titulo}</h3>
                <p className="text-sm text-gray-600 mb-1">📍 {evento.circuito}</p>
                <p className="text-sm text-gray-500 mb-4">🏎️ {evento.categoria}</p>
                
                <Link
                  href={`/actividades/${evento.id === 1 ? 'automovilismo' : evento.id === 2 ? 'karting' : 'golf-croquet'}`}
                  className="inline-flex items-center gap-2 text-blue-900 font-semibold text-sm group/link"
                >
                  <span>Más información</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/actividades"
          className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors"
        >
          <span>Ver calendario completo</span>
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}