'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Piloto {
  id: number;
  nombre: string;
  categoria: string;
  numero: string;
  auto?: string;
  puntos: number;
  esDelClub?: boolean;
  foto?: string;
}

interface Posicion {
  posicion: number;
  pilotoId: number;
  puntos: number;
  categoria?: string;
}

interface TablaPosicionesProps {
  posiciones: Posicion[];
  pilotos: Piloto[];
  titulo: string;
  mostrarDetalles?: boolean;
}

export default function TablaPosiciones({ 
  posiciones, 
  pilotos, 
  titulo,
  mostrarDetalles = true 
}: TablaPosicionesProps) {
  const [ordenarPor, setOrdenarPor] = useState<'posicion' | 'puntos' | 'nombre'>('posicion');
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getPosicionesOrdenadas = () => {
    return [...posiciones].sort((a, b) => {
      if (ordenarPor === 'posicion') return a.posicion - b.posicion;
      if (ordenarPor === 'puntos') return b.puntos - a.puntos;
      if (ordenarPor === 'nombre') {
        const pilotoA = pilotos.find(p => p.id === a.pilotoId)?.nombre || '';
        const pilotoB = pilotos.find(p => p.id === b.pilotoId)?.nombre || '';
        return pilotoA.localeCompare(pilotoB);
      }
      return 0;
    });
  };

  const getPosicionColor = (pos: number) => {
    if (pos === 1) return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    if (pos === 2) return 'bg-gray-100 text-gray-700 border-gray-200';
    if (pos === 3) return 'bg-orange-100 text-orange-700 border-orange-200';
    return 'bg-gray-50 text-gray-700 border-gray-100';
  };

  const getMedalla = (pos: number) => {
    if (pos === 1) return '🥇';
    if (pos === 2) return '🥈';
    if (pos === 3) return '🥉';
    return null;
  };

  const posicionesOrdenadas = getPosicionesOrdenadas();

  // Versión móvil: Tarjetas verticales
  if (isMobile) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="text-xl">🏆</span>
              <span className="truncate">{titulo}</span>
            </h3>
            <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-normal">
              2026
            </span>
          </div>

          {/* Filtros */}
          <div className="flex gap-2">
            <button
              onClick={() => setOrdenarPor('posicion')}
              className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${
                ordenarPor === 'posicion' 
                  ? 'bg-white text-blue-900 shadow' 
                  : 'bg-white/10 text-white'
              }`}
            >
              📊 Pos
            </button>
            
            <button
              onClick={() => setOrdenarPor('nombre')}
              className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${
                ordenarPor === 'nombre' 
                  ? 'bg-white text-blue-900 shadow' 
                  : 'bg-white/10 text-white'
              }`}
            >
              🔤 A-Z
            </button>
          </div>
        </div>

        {/* Lista de pilotos en tarjetas */}
        <div className="divide-y divide-gray-100">
          {posicionesOrdenadas.map((pos) => {
            const piloto = pilotos.find(p => p.id === pos.pilotoId);
            if (!piloto) return null;
            
            const esPilotoDelClub = piloto.esDelClub;
            const tieneFoto = piloto.foto;

            return (
              <div 
                key={pos.posicion}
                className={`p-4 ${esPilotoDelClub ? 'bg-gradient-to-r from-yellow-50 to-yellow-100/50 border-l-4 border-yellow-500' : ''}`}
              >
                {/* Fila superior: Posición y puntos */}
                <div className="flex justify-between items-start mb-3">
                  <div className={`flex items-center gap-2 ${getPosicionColor(pos.posicion)} px-3 py-1.5 rounded-full border font-bold text-sm`}>
                    {getMedalla(pos.posicion) && (
                      <span className="text-base">{getMedalla(pos.posicion)}</span>
                    )}
                    <span>{pos.posicion}°</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-lg text-blue-900">{pos.puntos}</span>
                    <span className="text-xs text-gray-400">pts</span>
                  </div>
                </div>

                {/* Info del piloto */}
                <div className="flex items-center gap-3">
                  {/* Foto o número */}
                  <div className="relative flex-shrink-0">
                    {tieneFoto ? (
                      <div className={`w-16 h-16 rounded-xl overflow-hidden relative shadow-md ${
                        esPilotoDelClub ? 'ring-2 ring-yellow-400 ring-offset-2' : ''
                      }`}>
                        <Image
                          src={piloto.foto!}
                          alt={piloto.nombre}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md ${
                        esPilotoDelClub 
                          ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 ring-2 ring-yellow-400 ring-offset-2' 
                          : 'bg-gradient-to-br from-blue-900 to-blue-700'
                      }`}>
                        #{piloto.numero}
                      </div>
                    )}
                    {esPilotoDelClub && (
                      <div className="absolute -top-1 -right-1 bg-yellow-400 text-blue-900 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border border-white">
                        C
                      </div>
                    )}
                  </div>

                  {/* Datos del piloto */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-gray-900 truncate">
                        {piloto.nombre}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {piloto.categoria}
                      </span>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        #{piloto.numero}
                      </span>
                    </div>

                    {piloto.auto && (
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        {piloto.auto}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-600 flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-900 rounded-full"></span>
              Total: <span className="font-bold text-blue-900">{pilotos.length}</span>
            </span>
            <span className="text-gray-600 flex items-center gap-1">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              Club: <span className="font-bold text-yellow-600">
                {pilotos.filter(p => p.esDelClub).length}
              </span>
            </span>
            <span className="text-gray-400">
              {new Date().toLocaleDateString('es-AR')}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Versión desktop: Tabla original
  return (
    <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl overflow-hidden border border-gray-100">
      {/* Header desktop */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white p-4 lg:p-6">
        <div className="flex items-center justify-between mb-3 lg:mb-4">
          <h3 className="text-lg lg:text-2xl font-bold flex items-center gap-2 lg:gap-3">
            <span className="text-xl lg:text-3xl">🏆</span>
            <span>{titulo}</span>
          </h3>
          <span className="bg-white/20 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm">
            2025
          </span>
        </div>

        {/* Filtros desktop */}
        <div className="flex gap-2">
          <button
            onClick={() => setOrdenarPor('posicion')}
            className={`px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg lg:rounded-xl text-xs lg:text-sm font-medium transition-all ${
              ordenarPor === 'posicion' 
                ? 'bg-white text-blue-900 shadow' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            📊 Por posición
          </button>
          <button
            onClick={() => setOrdenarPor('puntos')}
            className={`px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg lg:rounded-xl text-xs lg:text-sm font-medium transition-all ${
              ordenarPor === 'puntos' 
                ? 'bg-white text-blue-900 shadow' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            ⭐ Por puntos
          </button>
          <button
            onClick={() => setOrdenarPor('nombre')}
            className={`px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg lg:rounded-xl text-xs lg:text-sm font-medium transition-all ${
              ordenarPor === 'nombre' 
                ? 'bg-white text-blue-900 shadow' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            🔤 Por nombre
          </button>
        </div>
      </div>

      {/* Tabla desktop */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-semibold text-gray-500 uppercase">Pos</th>
              <th className="px-4 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-semibold text-gray-500 uppercase">Piloto</th>
              <th className="px-4 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-semibold text-gray-500 uppercase">Auto</th>
              <th className="px-4 lg:px-6 py-3 lg:py-4 text-center text-xs lg:text-sm font-semibold text-gray-500 uppercase">N°</th>
              <th className="px-4 lg:px-6 py-3 lg:py-4 text-center text-xs lg:text-sm font-semibold text-gray-500 uppercase">Puntos</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {posicionesOrdenadas.map((pos) => {
              const piloto = pilotos.find(p => p.id === pos.pilotoId);
              if (!piloto) return null;
              
              const esPilotoDelClub = piloto.esDelClub;
              const tieneFoto = piloto.foto;

              return (
                <tr key={pos.posicion} className={`hover:bg-gray-50 ${esPilotoDelClub ? 'bg-yellow-50/50' : ''}`}>
                  <td className="px-4 lg:px-6 py-3 lg:py-4">
                    <div className={`flex items-center gap-2 ${getPosicionColor(pos.posicion)} px-3 py-1.5 rounded-full border font-bold text-sm w-fit`}>
                      {getMedalla(pos.posicion) && <span>{getMedalla(pos.posicion)}</span>}
                      <span>{pos.posicion}°</span>
                    </div>
                  </td>
                  
                  <td className="px-4 lg:px-6 py-3 lg:py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        {tieneFoto ? (
                          <div className={`w-10 h-10 rounded-lg overflow-hidden relative ${esPilotoDelClub ? 'ring-2 ring-yellow-400' : ''}`}>
                            <Image src={piloto.foto!} alt={piloto.nombre} fill className="object-cover" />
                          </div>
                        ) : (
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm ${
                            esPilotoDelClub ? 'bg-yellow-500' : 'bg-blue-900'
                          }`}>
                            #{piloto.numero}
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{piloto.nombre}</p>
                        {piloto.auto && <p className="text-xs text-gray-500">{piloto.auto}</p>}
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-4 lg:px-6 py-3 lg:py-4">
                    <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {piloto.categoria}
                    </span>
                  </td>
                  
                  <td className="px-4 lg:px-6 py-3 lg:py-4 text-center font-mono font-bold">
                    #{piloto.numero}
                  </td>
                  
                  <td className="px-4 lg:px-6 py-3 lg:py-4 text-center">
                    <span className="font-bold text-xl text-blue-900">{pos.puntos}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer desktop */}
      <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Total pilotos: {pilotos.length}</span>
          <span>Club Unión: {pilotos.filter(p => p.esDelClub).length}</span>
        </div>
      </div>
    </div>
  );
}