'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Piloto {
  id: number;
  nombre: string;
  categoria: string;
  numero: string;
  auto?: string;
  sponsor?: string;
  foto?: string;
  puntos: number;
  carrerasGanadas?: number;
}

interface ListaPilotosProps {
  pilotos: Piloto[];
  baseUrl: string;
}

export default function ListaPilotos({ pilotos, baseUrl }: ListaPilotosProps) {
  const [filtroCategoria, setFiltroCategoria] = useState<string>('todas');
  const [busqueda, setBusqueda] = useState<string>('');

  // Obtener categorías únicas
  const categorias = ['todas', ...new Set(pilotos.map(p => p.categoria))];

  // Filtrar pilotos
  const pilotosFiltrados = pilotos.filter(piloto => {
    if (filtroCategoria !== 'todas' && piloto.categoria !== filtroCategoria) return false;
    if (busqueda && !piloto.nombre.toLowerCase().includes(busqueda.toLowerCase())) return false;
    return true;
  });

  // Ordenar por puntos
  const pilotosOrdenados = [...pilotosFiltrados].sort((a, b) => b.puntos - a.puntos);

  return (
    <div className="space-y-4">
      {/* Barra de búsqueda y filtros */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Buscar piloto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
        />
        
        <select
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
        >
          {categorias.map(cat => (
            <option key={cat} value={cat}>
              {cat === 'todas' ? 'Todas las categorías' : cat}
            </option>
          ))}
        </select>
      </div>

      {/* Grid de pilotos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pilotosOrdenados.map((piloto, index) => (
          <Link 
            href={`/`}
            key={piloto.id}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="relative h-32 bg-gradient-to-r from-[var(--color-primary)] to-blue-800">
              {/* Número destacado */}
              <div className="absolute top-2 right-2 text-6xl font-black text-white/20">
                #{piloto.numero}
              </div>
              
              {/* Foto o inicial */}
              <div className="absolute -bottom-8 left-4">
                {piloto.foto ? (
                  <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden relative shadow-lg">
                    <Image
                      src={piloto.foto}
                      alt={piloto.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full border-4 border-white bg-[var(--color-secondary)] flex items-center justify-center text-2xl font-bold text-[var(--color-primary)] shadow-lg">
                    {piloto.nombre.charAt(0)}
                  </div>
                )}
              </div>
            </div>

            <div className="pt-12 p-4">
              <h4 className="font-bold text-xl group-hover:text-[var(--color-primary)] transition-colors">
                {piloto.nombre}
              </h4>
              
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {piloto.categoria}
                </span>
                {piloto.auto && (
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                    {piloto.auto}
                  </span>
                )}
              </div>

              {piloto.sponsor && (
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-semibold">Sponsor:</span> {piloto.sponsor}
                </p>
              )}

              <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-500">Puntos</p>
                  <p className="font-bold text-lg">{piloto.puntos}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Victorias</p>
                  <p className="font-bold text-lg">{piloto.carrerasGanadas || 0}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mensaje si no hay resultados */}
      {pilotosOrdenados.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No se encontraron pilotos con esos filtros
        </div>
      )}
    </div>
  );
}
