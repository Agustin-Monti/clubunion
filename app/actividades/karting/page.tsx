'use client';

import { useState } from 'react';
import { 
  todosLosPilotosKarting,
  pilotosDelClubKarting,
  posicionesKarting,
  calendarioKarting,
  categoriasKarting 
} from "@/data/karting";
import TablaPosiciones from "@/components/actividades/TablaPosiciones";
import CalendarioCarreras from "@/components/actividades/CalendarioCarreras";
import ListaPilotos from "@/components/actividades/ListaPilotos";
import Link from "next/link";
import Image from "next/image";
import TarjetaInstagram from "@/components/actividades/TarjetaInstagram";

// Función para obtener la próxima carrera
function getProximaCarrera() {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  
  const carrerasFuturas = calendarioKarting
    .filter(carrera => {
      const fechaCarrera = new Date(carrera.fecha);
      fechaCarrera.setHours(0, 0, 0, 0);
      return fechaCarrera >= hoy;
    })
    .sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());

  return carrerasFuturas[0] || null;
}

// Función para formatear fecha en español
function formatearFecha(fechaStr: string) {
  const fecha = new Date(fechaStr);
  return fecha.toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export default function KartingPage() {
  const [categoriaActiva, setCategoriaActiva] = useState<string>('prejunior');
  const proximaCarrera = getProximaCarrera();

  const categorias = [
    { id: 'prejunior', nombre: 'Pre-Junior', color: 'bg-blue-500' },
    { id: 'junior', nombre: 'Junior', color: 'bg-green-500' },
    { id: 'senior', nombre: 'Senior', color: 'bg-purple-500' },
    { id: 'master', nombre: 'Master', color: 'bg-orange-500' }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/actividades" className="text-blue-600 hover:underline">
          ← Volver a Actividades
        </Link>
      </div>

      {/* Header con imagen de fondo */}
      <div className="relative rounded-2xl overflow-hidden mb-8 h-64">
        <Image
          src="/images/karting/header-karting.jpg"
          alt="Karting"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/50 flex items-center">
          <div className="p-8">
            <h1 className="text-5xl font-bold text-white mb-2">Karting</h1>
            <p className="text-xl text-blue-200">La escuela de campeones</p>
          </div>
        </div>
      </div>

      {/* Grid principal */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Columna izquierda: Información del club */}
        <div className="lg:col-span-1 space-y-8">
          {/* Nuestros Pilotos Destacados */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-yellow-400 rounded-full"></span>
              Nuestros Karts
            </h3>
            
            <div className="space-y-4">
              {pilotosDelClubKarting.map(piloto => (
                <div key={piloto.id} className="flex items-center gap-3">
                  <div className="relative">
                    {piloto.foto ? (
                      <div className="w-16 h-16 rounded-xl overflow-hidden relative border-2 border-yellow-400">
                        <Image
                          src={piloto.foto}
                          alt={piloto.nombre}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center text-2xl font-bold text-blue-900">
                        {piloto.nombre.charAt(0)}
                      </div>
                    )}
                    <div className="absolute -top-1 -right-1 bg-yellow-400 text-blue-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs border border-white">
                      #{piloto.numero}
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-bold text-lg">{piloto.nombre}</p>
                    <p className="text-blue-200 text-xs">{piloto.categoria} · {piloto.edad} años</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="bg-yellow-400 text-blue-900 px-2 py-0.5 rounded-full text-xs font-bold">
                        {piloto.puntos} pts
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categorías */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-green-600 rounded-full"></span>
              Categorías
            </h3>
            <ul className="space-y-3">
              {categoriasKarting.map(cat => (
                <li key={cat.id} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {cat.nombre}
                </li>
              ))}
            </ul>
          </div>

          {/* Próxima carrera */}
          {proximaCarrera ? (
            <div className="bg-gradient-to-br from-green-900 to-green-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-yellow-400 rounded-full p-2">
                  <span className="text-green-900 text-xl">⏱️</span>
                </div>
                <h3 className="font-bold text-lg text-white">Próxima carrera</h3>
              </div>
              
              <div className="space-y-3 text-white">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">📅</span>
                  <div>
                    <p className="font-semibold">{formatearFecha(proximaCarrera.fecha)}</p>
                    <p className="text-sm text-green-200">{proximaCarrera.circuito}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 text-xl">🏎️</span>
                  <div>
                    <p className="font-semibold">Categoría {proximaCarrera.categoria}</p>
                    {proximaCarrera.nombreEvento && (
                      <p className="text-sm text-yellow-400 font-medium">{proximaCarrera.nombreEvento}</p>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm text-green-200">
                    Faltan {Math.ceil((new Date(proximaCarrera.fecha).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} días
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-gray-600">
                <span className="w-1 h-6 bg-gray-400 rounded-full"></span>
                Próxima carrera
              </h3>
              <p className="text-gray-500 text-center py-4">
                No hay carreras programadas
              </p>
            </div>
          )}
        </div>

        {/* Columna derecha: Tablas de posiciones con pestañas */}
        <div className="lg:col-span-2">
          {/* Pestañas de categorías */}
          <div className="bg-white rounded-t-xl border border-gray-200 border-b-0 overflow-hidden">
            <div className="flex flex-wrap">
              {categorias.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoriaActiva(cat.id)}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    categoriaActiva === cat.id
                      ? `${cat.color} text-white shadow-lg`
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {cat.nombre}
                </button>
              ))}
            </div>
          </div>

          {/* Contenido de la categoría activa */}
          <div className="bg-white rounded-b-xl border border-gray-200 border-t-0 p-6">
            {categoriaActiva === 'prejunior' && (
              <TablaPosiciones 
                posiciones={posicionesKarting.prejunior}
                pilotos={todosLosPilotosKarting}
                titulo="Pre-Junior"
                mostrarDetalles={false}
              />
            )}
            {categoriaActiva === 'junior' && (
              <TablaPosiciones 
                posiciones={posicionesKarting.junior}
                pilotos={todosLosPilotosKarting}
                titulo="Junior"
                mostrarDetalles={false}
              />
            )}
            {categoriaActiva === 'senior' && (
              <TablaPosiciones 
                posiciones={posicionesKarting.senior}
                pilotos={todosLosPilotosKarting}
                titulo="Senior"
                mostrarDetalles={false}
              />
            )}
            {categoriaActiva === 'master' && (
              <TablaPosiciones 
                posiciones={posicionesKarting.master}
                pilotos={todosLosPilotosKarting}
                titulo="Master"
                mostrarDetalles={false}
              />
            )}
          </div>
        </div>
      </div>

      {/* Calendario de carreras */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Calendario de Carreras</h2>
        <CalendarioCarreras 
          carreras={calendarioKarting}
          tipo="karting"
        />
      </div>

      {/* Nuestros Pilotos (sección completa) */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
          Nuestros Pilotos
          <span className="bg-yellow-400 text-blue-900 text-sm px-3 py-1 rounded-full">
            {pilotosDelClubKarting.length} {pilotosDelClubKarting.length === 1 ? 'piloto' : 'pilotos'}
          </span>
        </h2>
        <ListaPilotos 
          pilotos={pilotosDelClubKarting}
          baseUrl="/actividades/karting"
        />
      </div>

      <div className="mt-12">
        <TarjetaInstagram />
      </div>
    </div>
  );
}