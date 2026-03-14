import Link from 'next/link';
import Image from 'next/image';

export default function TarjetaInstagram() {
  return (
    <div className="mt-12">
      <Link 
        href="https://www.instagram.com/mansillamotokart/" 
        target="_blank"
        className="group block relative h-64 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
      >
        {/* Imagen de fondo */}
        <Image
          src="/images/motokart.png"
          alt="MotoKart Mansilla"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay oscuro con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        
        {/* Contenido centrado */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          {/* Icono de Instagram grande */}
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
            </svg>
          </div>
          
          <h3 className="text-3xl font-bold mb-2">MotoKart Mansilla</h3>
          <p className="text-white/80 text-lg mb-4">Seguinos en Instagram</p>
          
          {/* Botón que aparece en hover */}
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-medium">@motokartmansilla</span>
          </div>
        </div>
      </Link>
    </div>
  );
}