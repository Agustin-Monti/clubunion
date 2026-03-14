'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MensajePresidente() {
  const [expandido, setExpandido] = useState(false);

  return (
    <section className="mb-20">
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl overflow-hidden border border-blue-100">
        <div className="grid md:grid-cols-2">
          {/* Columna izquierda - Mensaje */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                <span className="text-2xl text-blue-900">“</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                Palabras del Presidente
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed italic">
                "Ser el primer presidente del Club Unión es un honor y una gran responsabilidad.
              </p>
              
              <p className={`text-gray-600 leading-relaxed transition-all duration-500 ${
                expandido ? 'opacity-100 max-h-96' : 'opacity-70 max-h-24 overflow-hidden'
              }`}>
                Soñamos con un club que sea el corazón de Mansilla, un lugar donde la pasión 
                por el automovilismo y el karting se viva en familia. Estamos construyendo 
                el futuro sobre ruedas, y los invitamos a ser parte de esta historia desde 
                el primer día. Con trabajo, dedicación y el apoyo de toda la comunidad, 
                vamos a hacer de este club un orgullo para todos los mansillenses."
              </p>

              <button
                onClick={() => setExpandido(!expandido)}
                className="text-blue-900 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                <span>{expandido ? 'Leer menos' : 'Leer mensaje completo'}</span>
                <span className="text-lg">{expandido ? '↑' : '↓'}</span>
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-blue-100">
              <p className="font-bold text-xl text-blue-900">Sergio Edgardo Gervasoni</p>
              <p className="text-sm text-gray-500">Presidente - Club Unión (C.C.D.U.M)</p>
              
              <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>2025 - Presente</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Imagen y datos */}
          <div className="relative h-64 md:h-auto bg-gradient-to-br from-blue-900 to-blue-800">
            <Image
              src="/images/presidente/presidente1.png"
              alt="Sergio Edgardo Gervasoni"
              fill
              className="object-cover opacity-60"
            />
            
            {/* Overlay con información */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent p-8 flex flex-col justify-end">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
                    FUNDADOR
                  </span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs">2025</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">Sergio Gervasoni</h3>
                <p className="text-blue-200 text-sm mb-4">
                  Liderando el proyecto del primer club deportivo de Mansilla
                </p>

                <div className="flex gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-1">
                    <span>🏁</span>
                    <span>Automovilismo</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>🏎️</span>
                    <span>Karting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}