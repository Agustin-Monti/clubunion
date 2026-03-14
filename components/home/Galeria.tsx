'use client';

import { useState } from 'react';
import Image from 'next/image';

const imagenes = [
  { id: 1, src: '/images/galeria/auto-1.jpg', titulo: 'Automovilismo en acción', categoria: 'Deporte' },
  { id: 2, src: '/images/galeria/kart-1.jpg', titulo: 'Futuros campeones', categoria: 'Karting' },
  { id: 3, src: '/images/galeria/golf-1.jpg', titulo: 'Golf Croquet', categoria: 'Recreación' },
  { id: 4, src: '/images/galeria/auto-2.jpg', titulo: 'Carrera en Concepción', categoria: 'Deporte' },
  { id: 5, src: '/images/galeria/club-1.jpg', titulo: 'Nuestra sede', categoria: 'Club' },
  { id: 6, src: '/images/galeria/pilotos.jpg', titulo: 'Equipo de pilotos', categoria: 'Deporte' },
];

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<null | typeof imagenes[0]>(null);

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Galería <span className="text-yellow-400">Club Unión</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Momentos inolvidables de nuestras actividades y eventos
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {imagenes.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelectedImage(img)}
            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
          >
            <Image
              src={img.src}
              alt={img.titulo}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-center text-white">
                <p className="font-bold text-sm md:text-base">{img.titulo}</p>
                <p className="text-xs md:text-sm text-white/70">{img.categoria}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl"
            >
              ×
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.titulo}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-white text-center p-4">
              <h3 className="text-xl font-bold">{selectedImage.titulo}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}