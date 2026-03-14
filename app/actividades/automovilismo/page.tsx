import { 
  todosLosPilotos,
  pilotosDelClub,
  posicionesAutomovilismo, 
  calendarioAutomovilismo,
  categoriasAutomovilismo 
} from "@/data/automovilismo";
import TablaPosiciones from "@/components/actividades/TablaPosiciones";
import CalendarioCarreras from "@/components/actividades/CalendarioCarreras";
import ListaPilotos from "@/components/actividades/ListaPilotos";
import Link from "next/link";
import Image from "next/image";

// Función para obtener la próxima carrera
function getProximaCarrera() {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  
  const carrerasFuturas = calendarioAutomovilismo
    .filter(carrera => {
      const fechaCarrera = new Date(carrera.fecha);
      fechaCarrera.setHours(0, 0, 0, 0);
      return fechaCarrera >= hoy;
    })
    .sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());

  return carrerasFuturas[0] || null;
}

// Función para formatear fecha en español
function formatearFecha(fechaStr: string) {
  const fecha = new Date(fechaStr);
  return fecha.toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export default function AutomovilismoPage() {
  const proximaCarrera = getProximaCarrera();

  return (
    <div className="container mx-auto px-4 py-6 md:py-12">
      {/* Botón volver */}
      <div className="mb-4 md:mb-8">
        <Link href="/actividades" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium group text-sm md:text-base">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Volver a Actividades
        </Link>
      </div>

      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-2">Automovilismo</h1>
        <p className="text-sm md:text-base text-gray-600">Seguí el campeonato, pilotos y próximas carreras</p>
      </div>
      
      {/* Grid - responsive */}
      <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
        {/* Columna izquierda: Tabla de posiciones */}
        <div className="lg:col-span-2">
          <TablaPosiciones 
            posiciones={posicionesAutomovilismo}
            pilotos={todosLosPilotos}
            titulo="Competición Especial Entrerriana 2026"
          />
        </div>

        {/* Columna derecha: Información del club */}
        <div className="lg:col-span-1 space-y-6 md:space-y-8">
          {/* Nuestro Piloto Destacado */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-4 md:p-6 rounded-xl shadow-lg">
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2">
              <span className="w-1 h-5 md:h-6 bg-yellow-400 rounded-full"></span>
              Nuestro Piloto
            </h3>
            
            {pilotosDelClub.map(piloto => (
              <div key={piloto.id} className="flex flex-col xs:flex-row items-center xs:items-start gap-3 md:gap-4">
                <div className="relative flex-shrink-0">
                  {piloto.foto ? (
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden relative border-2 md:border-3 border-yellow-400">
                      <Image
                        src={piloto.foto}
                        alt={piloto.nombre}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400 rounded-xl flex items-center justify-center text-xl md:text-2xl font-bold text-blue-900">
                      {piloto.nombre.charAt(0)}
                    </div>
                  )}
                  <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-yellow-400 text-blue-900 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-xs md:text-sm border-2 border-white">
                    #{piloto.numero}
                  </div>
                </div>
                
                <div className="text-center xs:text-left">
                  <p className="font-bold text-base md:text-xl">{piloto.nombre}</p>
                  <p className="text-blue-200 text-xs md:text-sm">{piloto.auto}</p>
                  <div className="flex flex-wrap justify-center xs:justify-start items-center gap-2 mt-2">
                    <span className="bg-yellow-400 text-blue-900 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold">
                      {piloto.puntos} pts
                    </span>
                    <span className="bg-blue-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                      {piloto.categoria}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Categorías */}
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2">
              <span className="w-1 h-5 md:h-6 bg-blue-900 rounded-full"></span>
              Categorías
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {categoriasAutomovilismo.map(cat => (
                <li key={cat.id} className="flex items-center gap-2 text-xs md:text-sm lg:text-base text-gray-700">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></span>
                  {cat.nombre}
                </li>
              ))}
            </ul>
          </div>

          {/* Próxima carrera */}
          {proximaCarrera ? (
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-4 md:p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="bg-yellow-400 rounded-full p-1.5 md:p-2">
                  <span className="text-blue-900 text-base md:text-xl">⏱️</span>
                </div>
                <h3 className="font-bold text-base md:text-lg text-white">Próxima carrera</h3>
              </div>
              
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-start gap-2 md:gap-3 text-white">
                  <span className="text-yellow-400 text-lg md:text-xl flex-shrink-0">📅</span>
                  <div>
                    <p className="font-semibold text-sm md:text-base">{formatearFecha(proximaCarrera.fecha)}</p>
                    <p className="text-xs md:text-sm text-blue-200">{proximaCarrera.circuito}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 md:gap-3 text-white">
                  <span className="text-yellow-400 text-lg md:text-xl flex-shrink-0">🏎️</span>
                  <div>
                    <p className="font-semibold text-sm md:text-base">Categoría {proximaCarrera.categoria}</p>
                    {proximaCarrera.nombreEvento && (
                      <p className="text-xs md:text-sm text-yellow-400 font-medium">{proximaCarrera.nombreEvento}</p>
                    )}
                  </div>
                </div>

                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white/20">
                  <p className="text-xs md:text-sm text-blue-200">
                    Faltan {Math.ceil((new Date(proximaCarrera.fecha).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} días
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-4 md:p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-base md:text-lg mb-3 flex items-center gap-2 text-gray-600">
                <span className="w-1 h-5 md:h-6 bg-gray-400 rounded-full"></span>
                Próxima carrera
              </h3>
              <p className="text-gray-500 text-center py-4 text-sm md:text-base">
                No hay carreras programadas
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Calendario y Nuestros Pilotos */}
      <div className="mt-8 md:mt-12 space-y-8 md:space-y-12">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 md:mb-6">Calendario de Carreras</h2>
          <CalendarioCarreras 
            carreras={calendarioAutomovilismo}
            tipo="automovilismo"
          />
        </div>
        
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 md:mb-6 flex flex-wrap items-center gap-3">
            Nuestros Pilotos
            <span className="bg-yellow-400 text-blue-900 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full">
              {pilotosDelClub.length} {pilotosDelClub.length === 1 ? 'piloto' : 'pilotos'}
            </span>
          </h2>
          <ListaPilotos 
            pilotos={pilotosDelClub}
            baseUrl="/actividades/automovilismo"
          />
        </div>
      </div>
    </div>
  );
}