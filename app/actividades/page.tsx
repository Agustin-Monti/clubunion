'use client';

import Link from "next/link";
import Image from "next/image";

const actividades = [
  {
    id: "automovilismo",
    titulo: "Automovilismo",
    descripcion: "Seguí el campeonato, pilotos y próximas carreras",
    descripcionCorta: "Pasión y velocidad en cada curva",
    imagen: "/images/actividades/automovilismo.jpg",
    color: "red",
    href: "/actividades/automovilismo"
  },
  {
    id: "karting",
    titulo: "Karting",
    descripcion: "La escuelita de campeones - Posiciones y calendario",
    descripcionCorta: "Semillero de futuros campeones",
    imagen: "/images/actividades/karting.jpg",
    color: "green",
    href: "/actividades/karting"
  },
  {
    id: "golf-croquet",
    titulo: "Golf Croquet",
    descripcion: "Horarios de entrenamiento y torneos",
    descripcionCorta: "Precisión, estrategia y diversión",
    imagen: "/images/actividades/golfcroquet.webp",
    color: "emerald",
    href: "/actividades/golf-croquet"
  }
];

export default function ActividadesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-8 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8a] bg-clip-text text-transparent mb-3 md:mb-4">
          Nuestras Actividades
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
          En Club Unión tenemos actividades para todos los gustos. 
          Desde la velocidad del automovilismo hasta la precisión del golf croquet.
        </p>
      </div>
      
      {/* Grid de actividades - responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
        {actividades.map((actividad) => (
          <Link 
            key={actividad.id}
            href={actividad.href} 
            className="group block"
          >
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
              
              {/* Contenedor de imagen */}
              <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={actividad.imagen}
                  alt={actividad.titulo}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              
              {/* Contenido de la tarjeta */}
              <div className="p-4 md:p-5 lg:p-6 flex-1 flex flex-col">
                {/* Título y descripción corta */}
                <div className="mb-3 md:mb-4">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1e3a5f] mb-1">
                    {actividad.titulo}
                  </h2>
                  <p className={`text-xs md:text-sm font-semibold uppercase tracking-wider text-${actividad.color}-600`}>
                    {actividad.descripcionCorta}
                  </p>
                </div>
                
                {/* Descripción principal */}
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4 md:mb-5 flex-1">
                  {actividad.descripcion}
                </p>
                
                {/* Botón explorar */}
                <div className="flex items-center justify-end gap-2 pt-3 md:pt-4 border-t border-gray-100">
                  <span className={`text-xs md:text-sm font-semibold text-${actividad.color}-600 group-hover:mr-1 transition-all`}>
                    Explorar
                  </span>
                  <span className={`text-lg md:text-xl text-${actividad.color}-600 group-hover:translate-x-1 transition-transform`}>
                    →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Sección de proyectos futuros */}
      <div className="relative bg-gradient-to-br from-[#1e3a5f] to-[#0f2a44] rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 text-white overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-40 md:w-56 lg:w-72 h-40 md:h-56 lg:h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <span className="text-3xl md:text-4xl lg:text-5xl">🚀</span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Próximas actividades
            </h2>
          </div>
          
          <p className="text-sm md:text-base lg:text-lg text-white/80 max-w-2xl mb-6 md:mb-8">
            Estamos creciendo. Muy pronto sumaremos nuevas disciplinas para que toda la familia pueda disfrutar del club.
          </p>
          
          {/* Grid de actividades futuras */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { icon: "⚽", nombre: "Fútbol Infantil" },
              { icon: "🏐", nombre: "Vóley Mixto" },
              { icon: "🏀", nombre: "Básquet" },
              { icon: "🎱", nombre: "Billar" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg md:rounded-xl text-center border border-white/20 hover:bg-white/20 transition-colors group"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-2 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-xs md:text-sm font-medium">
                  {item.nombre}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}