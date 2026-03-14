'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Boton from "../ui/Boton";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const imagenes = [
    '/images/hero/automovilismo.jpeg',
    '/images/hero/karting.jpg',
    '/images/hero/club.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imagenes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden mb-16">
      {/* Imagen de fondo con cambio automático */}
      {imagenes.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img}
            alt={`Club Unión ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      
      {/* Contenido */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            {/* Badge de bienvenida */}
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-yellow-400 text-sm font-medium">Bienvenidos al Club Unión</span>
            </div>
            
            {/* Título principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              La nueva casa del{' '}
              <span className="text-yellow-400">deporte motor</span>
            </h1>
            
            {/* Descripción */}
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              En Gobernador Mansilla, construimos el futuro sobre ruedas. 
              Automovilismo, karting y mucho más para toda la familia.
            </p>
            
            {/* Botones */}
            <div className="flex flex-wrap gap-4">
              <Boton href="/actividades" variant="primary" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">
                Explorar actividades
              </Boton>
              <Boton href="/club" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Conocé el club
              </Boton>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores de imagen */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {imagenes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImage 
                ? 'w-8 bg-yellow-400' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ver imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}