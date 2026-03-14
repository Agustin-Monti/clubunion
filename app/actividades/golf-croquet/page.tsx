'use client';

import { useState } from 'react';
import { infoGolfCroquet } from "@/data/golfCroquet";
import Link from "next/link";
import Image from "next/image";

export default function GolfCroquetPage() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-6 md:py-12">
      {/* Botón volver */}
      <div className="mb-6 md:mb-8">
        <Link href="/actividades" className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium group text-sm md:text-base">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Volver a Actividades
        </Link>
      </div>

      {/* Header con imagen de fondo */}
      <div className="relative rounded-xl md:rounded-3xl overflow-hidden mb-8 md:mb-12 h-48 md:h-64 lg:h-80">
        <Image
          src={infoGolfCroquet.imagenPrincipal || "/images/golf-croquet/header.jpg"}
          alt="Golf Croquet en Club Unión"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/70 to-transparent flex items-center">
          <div className="p-4 md:p-8 lg:p-12 max-w-2xl">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 md:mb-4">
              Golf Croquet
            </h1>
            <p className="text-sm md:text-base lg:text-xl text-green-100 leading-relaxed">
              Precisión, estrategia y diversión en un ambiente único
            </p>
          </div>
        </div>
      </div>

      {/* Grid principal - responsive */}
      <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
        {/* Columna izquierda - Información principal */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          {/* Sobre la actividad */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-xl md:text-2xl">⛳</span>
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">Sobre la actividad</h2>
            </div>
            
            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
              {infoGolfCroquet.descripcion}
            </p>
            <p className="text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed">
              {infoGolfCroquet.descripcionLarga}
            </p>

            {/* Equipamiento */}
            <div className="mt-6 md:mt-8 bg-green-50 rounded-lg md:rounded-xl p-4 md:p-6">
              <h3 className="font-bold text-lg md:text-xl text-green-800 mb-3 md:mb-4 flex items-center gap-2">
                <span>🛠️</span>
                Equipamiento disponible
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {infoGolfCroquet.equipamiento.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm lg:text-base text-gray-700">
                    <span className="text-green-600 text-base md:text-lg">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Galería de imágenes */}
          {infoGolfCroquet.imagenesGaleria && (
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 border border-gray-100">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                <span>📸</span>
                Galería
              </h3>
              <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-4">
                {infoGolfCroquet.imagenesGaleria.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setImagenSeleccionada(index)}
                    className="relative aspect-square rounded-lg md:rounded-xl overflow-hidden cursor-pointer group"
                  >
                    <Image
                      src={img}
                      alt={`Golf Croquet ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-lg md:text-2xl">🔍</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ubicación */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 lg:p-8 border border-gray-100">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <span>📍</span>
              Donde entrenamos
            </h3>
            
            <div className="bg-blue-50 rounded-lg md:rounded-xl p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl md:text-2xl">📍</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-base md:text-lg text-gray-800">{infoGolfCroquet.ubicacion.direccion}</p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">{infoGolfCroquet.ubicacion.referencia}</p>
                  <div className="mt-3 md:mt-4 flex flex-wrap gap-2">
                    {infoGolfCroquet.ubicacion.like.split(' - ').map((item, i) => (
                      <span key={i} className="bg-white px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm text-gray-600 shadow-sm">
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa placeholder */}
            <div className="mt-4 h-32 md:h-40 lg:h-48 bg-gray-200 rounded-lg md:rounded-xl flex items-center justify-center text-gray-500">
              <div className="text-center">
                <span className="text-2xl md:text-4xl block mb-1 md:mb-2">🗺️</span>
                <p className="text-xs md:text-sm">Mapa de ubicación (próximamente)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha - Horarios y eventos */}
        <div className="lg:col-span-1 space-y-6 md:space-y-8">
          {/* Horarios */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 border border-green-100">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg md:text-2xl">⏰</span>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-green-800">Horarios</h3>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              {infoGolfCroquet.horarios.map((horario, i) => (
                <div key={i} className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm">
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-1 mb-2">
                    <span className="font-bold text-sm md:text-base text-gray-800">{horario.dia}</span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full self-start">
                      {horario.nivel}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 flex items-center gap-2">
                    <span>🕐</span>
                    {horario.horario}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <span>📍</span>
                    {horario.lugar}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Profesores */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 border border-gray-100">
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2">
              <span>👨‍🏫</span>
              Nuestros profesores
            </h3>
            
            <div className="space-y-3 md:space-y-4">
              {infoGolfCroquet.profesores.map((prof, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4">
                  <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg md:rounded-xl overflow-hidden bg-green-100 flex-shrink-0">
                    {prof.foto ? (
                      <Image
                        src={prof.foto}
                        alt={prof.nombre}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xl md:text-2xl text-green-600">
                        👤
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-sm md:text-base text-gray-800 truncate">{prof.nombre}</p>
                    <p className="text-xs text-green-600 truncate">{prof.especialidad}</p>
                    <p className="text-xs text-gray-500">{prof.experiencia} experiencia</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Próximos eventos */}
          <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 border border-yellow-100">
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2">
              <span>📅</span>
              Próximos eventos
            </h3>
            
            <div className="space-y-3">
              {infoGolfCroquet.proximosEventos.map((evento, i) => (
                <div key={i} className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm">
                  <div className="flex flex-wrap justify-between items-start gap-1 mb-2">
                    <span className="font-bold text-sm md:text-base text-gray-800">{evento.evento}</span>
                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
                      {new Date(evento.fecha).toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit' })}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 flex items-center gap-2">
                    <span>🕐</span>
                    {evento.hora}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <span>📍</span>
                    {evento.lugar}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contacto rápido */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6">
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2">¿Querés sumarte?</h3>
            <p className="text-xs md:text-sm text-blue-100 mb-3 md:mb-4">
              Escribinos para más información sobre horarios y costos
            </p>
            <Link
              href="/contactos"
              className="block w-full bg-white text-blue-600 text-center font-bold text-sm md:text-base py-2 md:py-3 rounded-lg md:rounded-xl hover:bg-blue-50 transition-colors"
            >
              Contactar ahora →
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox para galería */}
      {imagenSeleccionada !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 md:p-4"
          onClick={() => setImagenSeleccionada(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <button
              onClick={() => setImagenSeleccionada(null)}
              className="absolute -top-8 md:-top-12 right-0 text-white hover:text-gray-300 text-2xl md:text-4xl"
            >
              ×
            </button>
            <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
              <Image
                src={infoGolfCroquet.imagenesGaleria[imagenSeleccionada]}
                alt="Galería Golf Croquet"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}