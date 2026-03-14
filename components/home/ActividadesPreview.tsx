'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const actividades = [
  {
    id: 'automovilismo',
    titulo: 'Automovilismo',
    descripcion: 'Pasión y velocidad en cada curva. Formando pilotos para el Zonal Entrerriano.',
    descripcionCorta: 'Velocidad y adrenalina',
    imagen: '/images/actividades/automovilismo-preview1.jpg',
    color: 'red',
    stats: '3 categorías • 8 pilotos',
    href: '/actividades/automovilismo'
  },
  {
    id: 'karting',
    titulo: 'Karting Zonal',
    descripcion: 'La cantera de campeones. Competencias para las futuras estrellas del deporte motor.',
    descripcionCorta: 'Semillero de campeones',
    imagen: '/images/actividades/karting-preview.jpg',
    color: 'green',
    stats: '2 categorías • 12 karts',
    href: '/actividades/karting'
  },
  {
    id: 'golf-croquet',
    titulo: 'Golf Croquet',
    descripcion: 'Precisión, estrategia y diversión. Una actividad para todas las edades.',
    descripcionCorta: 'Elegancia y precisión',
    imagen: '/images/actividades/golfcroquet-preview.jpg',
    color: 'emerald',
    stats: 'Entrenamientos • Torneos',
    href: '/actividades/golf-croquet'
  }
];

export default function ActividadesPreview() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="mb-20">
      {/* Header de la sección */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Nuestras <span className="text-yellow-400">Actividades</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Descubrí todas las disciplinas que ofrecemos en Club Unión. 
          Desde la velocidad del automovilismo hasta la precisión del golf croquet.
        </p>
      </div>

      {/* Grid de actividades */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {actividades.map((actividad) => (
          <Link
            key={actividad.id}
            href={actividad.href}
            className="group relative block h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            onMouseEnter={() => setHoveredId(actividad.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Imagen de fondo */}
            <Image
              src={actividad.imagen}
              alt={actividad.titulo}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay gradiente */}
            <div className={`absolute inset-0 bg-gradient-to-t from-${actividad.color}-900/90 via-${actividad.color}-800/50 to-black/30 transition-opacity duration-500 ${
              hoveredId === actividad.id ? 'opacity-90' : 'opacity-100'
            }`} />

            {/* Contenido */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              {/* Icono flotante */}
              <div className={`absolute top-4 right-4 text-5xl transition-all duration-500 ${
                hoveredId === actividad.id ? 'scale-110 rotate-6' : ''
              }`}>
              </div>

              {/* Badge de categoría */}
              <div className="mb-3">
                <span className={`bg-${actividad.color}-500/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-white/30`}>
                  {actividad.descripcionCorta}
                </span>
              </div>

              {/* Título */}
              <h3 className="text-3xl font-bold mb-2">{actividad.titulo}</h3>

              {/* Descripción */}
              <p className={`text-white/90 text-sm mb-4 transition-all duration-500 ${
                hoveredId === actividad.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                {actividad.descripcion}
              </p>

              {/* Stats y botón */}
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  {actividad.stats}
                </span>
                <div className={`flex items-center gap-2 transition-all duration-500 ${
                  hoveredId === actividad.id ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}>
                  <span className="text-sm font-semibold">Ver más</span>
                  <span className="text-xl">→</span>
                </div>
              </div>
            </div>

            {/* Borde luminoso en hover */}
            <div className={`absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-2xl transition-all duration-500`} />
          </Link>
        ))}
      </div>
    </section>
  );
}