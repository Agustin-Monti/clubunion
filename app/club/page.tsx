'use client';

import { useState } from 'react';
import Historia from "@/components/club/Historia";
import ComisionDirectiva from "@/components/club/ComisionDirectiva";
import Sede from "@/components/club/Sede";
import { fotosFundacion } from "@/data/historia";
import Image from "next/image";

export default function ElClubPage() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<null | typeof fotosFundacion[0]>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-8">El Club Unión</h1>
      
      {/* Galería de fotos de la fundación */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">El día que comenzó todo</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {fotosFundacion.map((foto) => (
            <div key={foto.id} className="bg-white rounded-xl shadow-lg overflow-hidden group">
              {/* Contenedor con tamaño FIJO y control total */}
              <div className="relative w-full" style={{ height: '280px' }}>
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <Image
                    src={foto.url}
                    alt={foto.titulo}
                    width={400}
                    height={280}
                    className="object-contain max-w-full max-h-full w-auto h-auto"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '100%',
                      maxHeight: '100%'
                    }}
                  />
                </div>
                
                {/* Botón de ampliar */}
                <button 
                  onClick={() => setImagenSeleccionada(foto)}
                  className="absolute bottom-2 right-2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  aria-label="Ver imagen ampliada"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Historia />
        <ComisionDirectiva />
        <Sede />
      </div>

      {/* Modal / Lightbox */}
      {imagenSeleccionada && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setImagenSeleccionada(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <button 
              onClick={() => setImagenSeleccionada(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl"
              aria-label="Cerrar"
            >
              &times;
            </button>
            
            <div className="relative w-full h-[80vh]">
              <Image
                src={imagenSeleccionada.url}
                alt={imagenSeleccionada.titulo}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}