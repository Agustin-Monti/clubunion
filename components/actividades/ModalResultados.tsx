'use client';

import { useEffect } from 'react';
import { ResultadoCarrera } from '@/data/resultadosAutomovilismo';

interface ModalResultadosProps {
  isOpen: boolean;
  onClose: () => void;
  carrera: {
    id: number;
    fecha: string;
    circuito: string;
    categoria: string;
    nombreEvento?: string;
  };
  resultados: ResultadoCarrera[];
  clasificacion?: string;
}

export default function ModalResultados({ isOpen, onClose, carrera, resultados, clasificacion }: ModalResultadosProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const formatFecha = (fechaStr: string) => {
    const fecha = new Date(fechaStr);
    return fecha.toLocaleDateString('es-AR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getPosicionColor = (pos: number) => {
    if (pos === 1) return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    if (pos === 2) return 'bg-gray-100 text-gray-700 border-gray-200';
    if (pos === 3) return 'bg-orange-100 text-orange-700 border-orange-200';
    return 'text-gray-700';
  };

  const getMedalla = (pos: number) => {
    if (pos === 1) return '🥇';
    if (pos === 2) return '🥈';
    if (pos === 3) return '🥉';
    return null;
  };

  const resultadosOrdenados = [...resultados].sort((a, b) => a.posicion - b.posicion);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/70 transition-opacity"
        onClick={onClose}
      />

      {/* Modal - centrado y responsive */}
      <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
        <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
          
          {/* Header con gradiente */}
          <div className="relative h-24 sm:h-32 bg-gradient-to-r from-blue-900 to-blue-800">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 text-2xl sm:text-3xl z-10 w-8 h-8 sm:w-auto sm:h-auto flex items-center justify-center bg-black/20 rounded-full sm:bg-transparent"
            >
              ×
            </button>
            
            <div className="absolute bottom-2 left-3 sm:bottom-4 sm:left-6 text-white">
              <div className="flex flex-col xs:flex-row xs:items-center gap-1 sm:gap-3">
                <h3 className="text-base sm:text-xl lg:text-2xl font-bold">
                  {carrera.circuito}
                </h3>
                {clasificacion && (
                  <span className="bg-yellow-400 text-blue-900 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold w-fit">
                    {clasificacion}
                  </span>
                )}
              </div>
              
              <p className="text-[10px] sm:text-sm text-white/80">
                {formatFecha(carrera.fecha)} • {carrera.categoria}
              </p>
              
              {carrera.nombreEvento && (
                <p className="text-[8px] sm:text-xs text-yellow-400 mt-0.5 sm:mt-1">
                  {carrera.nombreEvento}
                </p>
              )}
            </div>
          </div>

          {/* Tabla de resultados */}
          <div className="p-3 sm:p-6 overflow-y-auto max-h-[calc(95vh-6rem)] sm:max-h-[calc(90vh-8rem)]">
            <div className="overflow-x-auto -mx-3 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="sticky left-0 bg-gray-50 px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-gray-500 uppercase">
                        POS
                      </th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-gray-500 uppercase">
                        AUTO
                      </th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-gray-500 uppercase whitespace-nowrap">
                        PILOTO
                      </th>
                      <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-gray-500 uppercase whitespace-nowrap">
                        TIEMPO/DIF.
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {resultadosOrdenados.map((r) => (
                      <tr key={r.posicion} className="hover:bg-gray-50">
                        {/* Posición - fija a la izquierda en móvil */}
                        <td className="sticky left-0 bg-white px-2 sm:px-4 py-2 sm:py-3">
                          <div className={`inline-flex items-center gap-1 ${getPosicionColor(r.posicion)} px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border text-[9px] sm:text-xs font-bold`}>
                            {getMedalla(r.posicion) && (
                              <span className="text-[10px] sm:text-sm">{getMedalla(r.posicion)}</span>
                            )}
                            <span>{r.posicion}</span>
                          </div>
                        </td>
                        
                        {/* Auto */}
                        <td className="px-2 sm:px-4 py-2 sm:py-3">
                          <span className="font-mono font-bold text-blue-900 text-[10px] sm:text-sm">
                            #{r.numero || r.pilotoId}
                          </span>
                        </td>
                        
                        {/* Piloto - MÁS ANCHO EN MÓVIL */}
                        <td className="px-2 sm:px-4 py-2 sm:py-3">
                          <div className="flex flex-col xs:flex-row xs:items-center gap-0.5 xs:gap-2">
                            <span className={`
                              font-medium 
                              text-[11px] sm:text-sm 
                              ${window.innerWidth < 640 ? 'max-w-[120px]' : 'max-w-none'}
                              ${window.innerWidth < 640 ? '' : 'whitespace-nowrap'}
                            `}>
                              {r.nombre}
                            </span>
                            {r.auto && r.auto.includes('(S)') && (
                              <span className="bg-gray-100 text-gray-600 text-[8px] sm:text-xs px-1 sm:px-2 py-0.5 rounded-full w-fit">
                                S
                              </span>
                            )}
                          </div>
                        </td>
                        
                        {/* Tiempo */}
                        <td className="px-2 sm:px-4 py-2 sm:py-3">
                          <span className="font-mono text-[9px] sm:text-sm whitespace-nowrap">
                            {r.tiempo || r.diferencia || '-'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Leyenda */}
            <div className="mt-3 sm:mt-4 p-2 sm:p-4 bg-blue-50 rounded-lg sm:rounded-xl">
              <div className="flex flex-wrap gap-2 sm:gap-4 text-[8px] sm:text-xs text-gray-600">
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></span>
                  NC: No clasificado
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1 h-1 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></span>
                  (S): Suplente
                </span>
              </div>
            </div>

            {/* Botón cerrar móvil */}
            <div className="mt-3 sm:hidden">
              <button
                onClick={onClose}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-lg text-sm transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}