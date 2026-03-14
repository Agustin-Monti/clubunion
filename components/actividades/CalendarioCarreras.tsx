'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Carrera {
  id: number;
  fecha: string;
  circuito: string;
  categoria: string;
  estado: 'completado' | 'próximo' | 'cancelado';
  ganador?: string;
  nombreEvento?: string; // Para eventos especiales como "GRAN PREMIO RUS"
}

interface CalendarioProps {
  carreras: Carrera[];
  tipo: "automovilismo" | "karting";
}

export default function CalendarioCarreras({ carreras, tipo }: CalendarioProps) {
  const [filtroCategoria, setFiltroCategoria] = useState<string>('todas');
  const [filtroEstado, setFiltroEstado] = useState<string>('todos');
  const [imagenesError, setImagenesError] = useState<Record<string, boolean>>({});

  // Obtener categorías únicas
  const categorias = ['todas', ...new Set(carreras.map(c => c.categoria))];

  // Filtrar carreras
  const carrerasFiltradas = carreras.filter(carrera => {
    if (filtroCategoria !== 'todas' && carrera.categoria !== filtroCategoria) return false;
    if (filtroEstado !== 'todos' && carrera.estado !== filtroEstado) return false;
    return true;
  });

  // Ordenar por fecha
  const carrerasOrdenadas = [...carrerasFiltradas].sort((a, b) => 
    new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
  );

  const formatoFecha = (fechaStr: string) => {
    // Dividir la fecha en partes [año, mes, día]
    const [year, month, day] = fechaStr.split('-').map(Number);
    
    // Crear fecha usando los componentes numéricos (esto evita problemas de zona horaria)
    const fecha = new Date(year, month - 1, day); // month - 1 porque los meses van de 0-11
    
    return {
      dia: day.toString().padStart(2, '0'), // Usamos el día original del string
      mes: fecha.toLocaleDateString('es-AR', { month: 'short' }).toUpperCase().replace('.', ''),
      completo: fecha.toLocaleDateString('es-AR', { 
        day: 'numeric', 
        month: 'long',
        year: 'numeric'
      })
    };
  };

  const getImagenFondo = (circuito: string) => {
    const circuitoLower = circuito.toLowerCase();
    
    // Mapeo de circuitos a nombres de archivo
    if (circuitoLower.includes('concepción') || circuitoLower.includes('c. del uruguay') || circuitoLower.includes('cdu')) {
      return '/images/circuitos/cdu.jpg';
    }
    if (circuitoLower.includes('paraná')) {
      return '/images/circuitos/parana.jpg';
    }
    if (circuitoLower.includes('villaguay')) {
      return '/images/circuitos/villaguay.jpg';
    }
    if (circuitoLower.includes('concordia')) {
      return '/images/circuitos/concordia.jpg';
    }
    if (circuitoLower.includes('kartódromo de rosario del tala') || circuitoLower.includes('kartódromo rosario del tala')) {
      return '/images/circuitos/krt.webp';
    }
    if (circuitoLower.includes('kartódromo de gobernador mansilla') || circuitoLower.includes('kartódromo gobernador mansilla')) {
      return '/images/circuitos/mansilla.jpg';
    }
    return '/images/circuitos/default.jpg';
  };

  const handleImageError = (carreraId: number) => {
    setImagenesError(prev => ({ ...prev, [carreraId]: true }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="text-3xl">📅</span>
              Calendario de Carreras
            </h3>
            <p className="text-white/80 text-sm mt-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Temporada 2026 · {carreras.length} fechas
            </p>
          </div>
          
          
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mt-5">
          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
            className="text-sm bg-white/10 rounded-xl px-4 py-2 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            {categorias.map(cat => (
              <option key={cat} value={cat} className="text-gray-800">
                {cat === 'todas' ? 'Todas las categorías' : cat}
              </option>
            ))}
          </select>

          <select
            value={filtroEstado}
            onChange={(e) => setFiltroEstado(e.target.value)}
            className="text-sm bg-white/10 rounded-xl px-4 py-2 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <option value="todos" className="text-gray-800">Todos los estados</option>
            <option value="completado" className="text-gray-800">Completadas</option>
            <option value="próximo" className="text-gray-800">Próximas</option>
          </select>
        </div>
      </div>

      {/* Grid de carreras estilo "tarjetas" */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {carrerasOrdenadas.map((carrera, index) => {
          const fecha = formatoFecha(carrera.fecha);
          const imagenFondo = getImagenFondo(carrera.circuito);
          const esEspecial = carrera.nombreEvento || carrera.circuito.includes('GRAN PREMIO');

          return (
            <div
              key={carrera.id}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Imagen de fondo con overlay oscuro */}
              <div className="absolute inset-0">
                <Image
                  src={imagenFondo}
                  alt={carrera.circuito}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
              </div>

              {/* Número de fecha (estilo como en la imagen) */}
              <div className="absolute top-3 left-3 bg-yellow-400 text-blue-900 font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                {index + 1}
              </div>

              {/* Badge de estado */}
              <div className="absolute top-3 right-3">
                {carrera.estado === "completado" ? (
                  <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    ✓ Finalizado
                  </span>
                ) : (
                  <span className="bg-yellow-400/90 text-blue-900 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                    ⏳ Próximo
                  </span>
                )}
              </div>

              {/* Contenido de la tarjeta */}
              <div className="relative p-5 pt-16 text-white">
                {/* Fecha destacada */}
                <div className="mb-3">
                  <span className="text-4xl font-black text-yellow-400">
                    {fecha.dia}
                  </span>
                  <span className="text-lg font-semibold text-white/80 ml-1">
                    {fecha.mes}
                  </span>
                </div>

                {/* Circuito y evento */}
                <h4 className="font-bold text-xl mb-1 line-clamp-1">
                  {carrera.circuito}
                </h4>
                
                {esEspecial && (
                  <p className="text-yellow-400 text-sm font-medium mb-2">
                    ⭐ {carrera.nombreEvento || 'Evento Especial'}
                  </p>
                )}

                {/* Detalles */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-white/30">
                    {carrera.categoria}
                  </span>
                </div>

                {/* Ganador (si existe) */}
                {carrera.ganador && (
                  <div className="mt-2 pt-2 border-t border-white/20">
                    <p className="text-sm flex items-center gap-1">
                      <span className="text-yellow-400">🏆</span>
                      <span className="text-white/90">Ganador:</span>
                      <span className="font-semibold">{carrera.ganador}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer con resumen */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 px-6 py-4 border-t border-gray-200">
        <div className="flex flex-wrap justify-between items-center gap-3 text-sm">
          <div className="flex items-center gap-4">
            <span className="text-gray-600 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-blue-900 rounded-full"></span>
              Total carreras: <span className="font-bold text-blue-900">{carreras.length}</span>
            </span>
            <span className="text-gray-300 hidden sm:block">|</span>
            <span className="text-gray-600 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Completadas: <span className="font-bold text-green-600">
                {carreras.filter(c => c.estado === 'completado').length}
              </span>
            </span>
            <span className="text-gray-600 flex items-center gap-1.5">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              Próximas: <span className="font-bold text-yellow-600">
                {carreras.filter(c => c.estado === 'próximo').length}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Actualizado: {new Date().toLocaleDateString('es-AR')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}