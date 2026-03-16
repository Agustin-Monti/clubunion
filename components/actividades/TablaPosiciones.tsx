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
  const [dispositivo, setDispositivo] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDispositivo('mobile');
      } else if (width < 1024) {
        setDispositivo('tablet');
      } else {
        setDispositivo('desktop');
      }
    };
    
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
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

  // VERSIÓN ESPECÍFICA PARA IPHONE 11 Y MÓVILES PEQUEÑOS
  if (dispositivo === 'mobile') {
    return (
      <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-100 w-full max-w-[375px] mx-auto">
        {/* Header ultra compacto */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white p-2">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-xs font-bold flex items-center gap-1">
              <span className="text-sm">🏆</span>
              <span className="truncate max-w-[150px]">{titulo}</span>
            </h3>
            <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-[8px] font-normal">
              2026
            </span>
          </div>

          {/* Filtros en fila con iconos solos */}
          <div className="grid grid-cols-3 gap-0.5">
            <button
              onClick={() => setOrdenarPor('posicion')}
              className={`py-1 rounded text-[9px] font-medium transition-all flex items-center justify-center gap-0.5 ${
                ordenarPor === 'posicion' 
                  ? 'bg-white text-blue-900 shadow' 
                  : 'bg-white/10 text-white'
              }`}
            >
              <span>📊</span>
              <span className="text-[8px]">Pos</span>
            </button>
            <button
              onClick={() => setOrdenarPor('puntos')}
              className={`py-1 rounded text-[9px] font-medium transition-all flex items-center justify-center gap-0.5 ${
                ordenarPor === 'puntos' 
                  ? 'bg-white text-blue-900 shadow' 
                  : 'bg-white/10 text-white'
              }`}
            >
              <span>⭐</span>
              <span className="text-[8px]">Pts</span>
            </button>
            <button
              onClick={() => setOrdenarPor('nombre')}
              className={`py-1 rounded text-[9px] font-medium transition-all flex items-center justify-center gap-0.5 ${
                ordenarPor === 'nombre' 
                  ? 'bg-white text-blue-900 shadow' 
                  : 'bg-white/10 text-white'
              }`}
            >
              <span>🔤</span>
              <span className="text-[8px]">A-Z</span>
            </button>
          </div>
        </div>

        {/* Lista de pilotos ultra compacta */}
        <div className="divide-y divide-gray-100 max-h-[350px] overflow-y-auto">
          {posicionesOrdenadas.map((pos) => {
            const piloto = pilotos.find(p => p.id === pos.pilotoId);
            if (!piloto) return null;
            
            const esPilotoDelClub = piloto.esDelClub;
            const tieneFoto = piloto.foto;

            return (
              <div 
                key={pos.posicion}
                className={`p-1.5 ${esPilotoDelClub ? 'bg-yellow-50 border-l-2 border-yellow-500' : ''}`}
              >
                {/* Fila superior ultra compacta */}
                <div className="flex justify-between items-center mb-1">
                  <div className={`flex items-center gap-0.5 ${getPosicionColor(pos.posicion)} px-1 py-0.5 rounded-full border font-bold text-[8px]`}>
                    {getMedalla(pos.posicion) && <span className="text-[9px]">{getMedalla(pos.posicion)}</span>}
                    <span>{pos.posicion}°</span>
                  </div>
                  <div className="flex items-center bg-blue-50 px-1 py-0.5 rounded-full">
                    <span className="font-bold text-[9px] text-blue-900">{pos.puntos}</span>
                    <span className="text-[6px] text-gray-500 ml-0.5">pts</span>
                  </div>
                </div>

                {/* Info del piloto ultra compacta */}
                <div className="flex gap-1.5">
                  {/* Foto o número pequeño */}
                  <div className="relative flex-shrink-0">
                    {tieneFoto ? (
                      <div className={`w-8 h-8 rounded-lg overflow-hidden relative ${
                        esPilotoDelClub ? 'ring-1 ring-yellow-400' : ''
                      }`}>
                        <Image
                          src={piloto.foto!}
                          alt={piloto.nombre}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-[10px] ${
                        esPilotoDelClub 
                          ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 ring-1 ring-yellow-400' 
                          : 'bg-gradient-to-br from-blue-900 to-blue-700'
                      }`}>
                        #{piloto.numero}
                      </div>
                    )}
                  </div>

                  {/* Datos del piloto */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-[9px] text-gray-900 truncate max-w-[70px]">
                        {piloto.nombre}
                      </p>
                      <span className="font-mono font-bold text-[8px] bg-gray-100 px-1 py-0.5 rounded-full">
                        #{piloto.numero}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-0.5 mt-0.5">
                      <span className="bg-blue-100 text-blue-800 text-[7px] px-1 py-0.5 rounded-full">
                        {piloto.categoria}
                      </span>
                      {piloto.auto && (
                        <span className="bg-gray-100 text-gray-700 text-[7px] px-1 py-0.5 rounded-full truncate max-w-[50px]">
                          {piloto.auto}
                        </span>
                      )}
                      {esPilotoDelClub && (
                        <span className="bg-yellow-100 text-yellow-800 text-[6px] px-1 py-0.5 rounded-full font-bold">
                          C
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer ultra compacto */}
        <div className="bg-gray-50 px-2 py-1 border-t border-gray-200">
          <div className="flex justify-between items-center text-[7px]">
            <div className="flex items-center gap-1">
              <span className="w-1 h-1 bg-blue-900 rounded-full"></span>
              <span>{pilotos.length}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1 h-1 bg-yellow-500 rounded-full"></span>
              <span>{pilotos.filter(p => p.esDelClub).length}</span>
            </div>
            <span className="text-gray-400">{new Date().toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit' })}</span>
          </div>
        </div>
      </div>
    );
  }

  // VERSIÓN TABLET (sin cambios)
  if (dispositivo === 'tablet') {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        {/* Header tablet */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-bold flex items-center gap-2">
              <span className="text-lg">🏆</span>
              <span>{titulo}</span>
            </h3>
            <span className="bg-white/20 px-2 py-1 rounded-full text-xs">2026</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setOrdenarPor('posicion')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                ordenarPor === 'posicion' 
                  ? 'bg-white text-blue-900 shadow' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              📊 Posición
            </button>
            <button
              onClick={() => setOrdenarPor('puntos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                ordenarPor === 'puntos' 
                  ? 'bg-white text-blue-900 shadow' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              ⭐ Puntos
            </button>
            <button
              onClick={() => setOrdenarPor('nombre')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                ordenarPor === 'nombre' 
                  ? 'bg-white text-blue-900 shadow' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              🔤 Nombre
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-500">Pos</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-500">Piloto</th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-gray-500">Auto</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-gray-500">N°</th>
                <th className="px-3 py-2 text-center text-xs font-semibold text-gray-500">Pts</th>
              </tr>
            </thead>
            <tbody>
              {posicionesOrdenadas.map((pos) => {
                const piloto = pilotos.find(p => p.id === pos.pilotoId);
                if (!piloto) return null;
                
                const esPilotoDelClub = piloto.esDelClub;

                return (
                  <tr key={pos.posicion} className={`border-b hover:bg-gray-50 ${esPilotoDelClub ? 'bg-yellow-50/50' : ''}`}>
                    <td className="px-3 py-2">
                      <span className={`inline-block ${getPosicionColor(pos.posicion)} px-2 py-1 rounded-full text-xs font-bold`}>
                        {pos.posicion}°
                      </span>
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                          #{piloto.numero}
                        </div>
                        <span className="font-medium text-sm">{piloto.nombre}</span>
                        {esPilotoDelClub && (
                          <span className="bg-yellow-100 text-yellow-800 text-[9px] px-1.5 py-0.5 rounded-full">Club</span>
                        )}
                      </div>
                    </td>
                    <td className="px-3 py-2 text-xs text-gray-600">{piloto.auto || '-'}</td>
                    <td className="px-3 py-2 text-center font-mono font-bold text-sm">#{piloto.numero}</td>
                    <td className="px-3 py-2 text-center font-bold text-blue-900">{pos.puntos}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 px-4 py-2 border-t border-gray-200">
          <div className="flex justify-between text-xs text-gray-600">
            <span>Total: {pilotos.length}</span>
            <span>Club: {pilotos.filter(p => p.esDelClub).length}</span>
            <span className="text-gray-400">{new Date().toLocaleDateString('es-AR')}</span>
          </div>
        </div>
      </div>
    );
  }

  // VERSIÓN DESKTOP (sin cambios)
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            <span>{titulo}</span>
          </h3>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">2026</span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setOrdenarPor('posicion')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              ordenarPor === 'posicion' 
                ? 'bg-white text-blue-900 shadow-lg' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            📊 Por posición
          </button>
          <button
            onClick={() => setOrdenarPor('puntos')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              ordenarPor === 'puntos' 
                ? 'bg-white text-blue-900 shadow-lg' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            ⭐ Por puntos
          </button>
          <button
            onClick={() => setOrdenarPor('nombre')}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              ordenarPor === 'nombre' 
                ? 'bg-white text-blue-900 shadow-lg' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            🔤 Por nombre
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase">Posición</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase">Piloto</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 uppercase">Auto</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-500 uppercase">N°</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-500 uppercase">Puntos</th>
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
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-2 ${getPosicionColor(pos.posicion)} px-4 py-2 rounded-full border font-bold text-sm w-fit`}>
                      {getMedalla(pos.posicion) && <span>{getMedalla(pos.posicion)}</span>}
                      <span>{pos.posicion}°</span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        {tieneFoto ? (
                          <div className={`w-12 h-12 rounded-xl overflow-hidden relative shadow-md ${
                            esPilotoDelClub ? 'ring-2 ring-yellow-400 ring-offset-2' : ''
                          }`}>
                            <Image src={piloto.foto!} alt={piloto.nombre} fill className="object-cover" />
                          </div>
                        ) : (
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md ${
                            esPilotoDelClub 
                              ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 ring-2 ring-yellow-400 ring-offset-2' 
                              : 'bg-gradient-to-br from-blue-900 to-blue-700'
                          }`}>
                            #{piloto.numero}
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-gray-900">{piloto.nombre}</p>
                          {esPilotoDelClub && (
                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full font-medium">
                              Club Unión
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{piloto.categoria}</p>
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4 text-gray-600">{piloto.auto || '-'}</td>
                  
                  <td className="px-6 py-4 text-center">
                    <span className="font-mono font-bold text-lg bg-gray-100 px-3 py-1 rounded-xl">
                      #{piloto.numero}
                    </span>
                  </td>
                  
                  <td className="px-6 py-4 text-center">
                    <span className="font-bold text-2xl text-blue-900">{pos.puntos}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Total pilotos: {pilotos.length}</span>
          <span>Club Unión: {pilotos.filter(p => p.esDelClub).length}</span>
          <span>Actualizado: {new Date().toLocaleDateString('es-AR')}</span>
        </div>
      </div>
    </div>
  );
}
