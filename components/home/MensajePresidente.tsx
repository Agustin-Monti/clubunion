'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MensajePresidente() {
  const [expandido, setExpandido] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar móvil de forma segura (solo en el cliente)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="mb-20">
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl overflow-hidden border border-blue-100">
        <div className="grid md:grid-cols-2">
          {/* Columna izquierda - Mensaje */}
          <div className="p-6 md:p-12">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                <span className="text-xl md:text-2xl text-blue-900">“</span>
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900">
                Palabras del Presidente
              </h2>
            </div>

            <div className="space-y-3 md:space-y-4">
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed italic">
                "Ser el primer presidente del Club Unión es un honor y una gran responsabilidad.
              </p>
              
              <p className={`text-xs md:text-base text-gray-600 leading-relaxed transition-all duration-500 ${
                expandido ? 'opacity-100 max-h-96' : 'opacity-70 max-h-20 md:max-h-24 overflow-hidden'
              }`}>
                Soñamos con un club que sea el corazón de Mansilla, un lugar donde la pasión 
                por el automovilismo y el karting se viva en familia. Estamos construyendo 
                el futuro sobre ruedas, y los invitamos a ser parte de esta historia desde 
                el primer día. Con trabajo, dedicación y el apoyo de toda la comunidad, 
                vamos a hacer de este club un orgullo para todos los mansillenses."
              </p>

              <button
                onClick={() => setExpandido(!expandido)}
                className="text-blue-900 font-semibold text-xs md:text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                <span>{expandido ? 'Leer menos' : 'Leer mensaje completo'}</span>
                <span className="text-sm md:text-lg">{expandido ? '↑' : '↓'}</span>
              </button>
            </div>

            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-blue-100">
              <p className="font-bold text-base md:text-xl text-blue-900">Sergio Edgardo Gervasoni</p>
              <p className="text-xs md:text-sm text-gray-500">Presidente - Club Unión (C.C.D.U.M)</p>
              
              <div className="flex gap-4 mt-3 md:mt-4">
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></span>
                  <span>2025 - Presente</span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Imagen y datos */}
          <div className="relative h-48 md:h-auto bg-gradient-to-br from-blue-900 to-blue-800">
            {/* Imagen con clases CSS para controlar la posición - SIN JavaScript */}
            <Image
              src="/images/presidente/presidente1.png"
              alt="Sergio Edgardo Gervasoni"
              fill
              className={`object-cover ${isMobile ? 'object-[center_30%]' : 'object-center'}`}
            />
            
            {/* Overlay con información - más compacto en móvil */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent p-4 md:p-8 flex flex-col justify-end">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-2 md:mb-4">
                  <span className="bg-yellow-400 text-blue-900 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-xs font-bold">
                    FUNDADOR
                  </span>
                  <span className="bg-white/20 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-xs">2025</span>
                </div>
                
                <h3 className="text-lg md:text-2xl font-bold mb-0.5 md:mb-2">Sergio Gervasoni</h3>
                <p className="text-blue-200 text-[10px] md:text-sm mb-2 md:mb-4">
                  Liderando el proyecto del primer club deportivo de Mansilla
                </p>

                <div className="flex gap-3 md:gap-4 text-[10px] md:text-sm text-white/80">
                  <div className="flex items-center gap-1">
                    <span>🏁</span>
                    <span className="hidden xs:inline">Automovilismo</span>
                    <span className="xs:hidden">Auto</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>🏎️</span>
                    <span className="hidden xs:inline">Karting</span>
                    <span className="xs:hidden">Kart</span>
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
