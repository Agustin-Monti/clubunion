'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { calendarioAutomovilismo } from '@/data/automovilismo';
import { calendarioKarting } from '@/data/karting';
import { infoGolfCroquet } from '@/data/golfCroquet';

interface Evento {
  id: string;
  fecha: string;
  titulo: string;
  circuito: string;
  categoria: string;
  imagen: string;
  link: string;
  actividad: 'automovilismo' | 'karting' | 'golf-croquet';
}

export default function ProximosEventos() {
  const [proximosEventos, setProximosEventos] = useState<Evento[]>([]);

  useEffect(() => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    const eventos: Evento[] = [];

    // 1. Obtener próximas carreras de Automovilismo
    const proximasAuto = calendarioAutomovilismo
      .filter(carrera => new Date(carrera.fecha) >= hoy)
      .sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
    
    if (proximasAuto.length > 0) {
      const auto = proximasAuto[0];
      eventos.push({
        id: `auto-${auto.id}`,
        fecha: auto.fecha,
        titulo: `Automovilismo - ${auto.categoria === 'clase1' ? 'Clase 1' : auto.categoria.toUpperCase()}`,
        circuito: auto.circuito,
        categoria: auto.categoria === 'clase1' ? 'Clase 1' : 
                   auto.categoria === 'tp' ? 'Turismo Promocional' : 'Ultra 1600',
        imagen: '/images/eventos/automovilismo.jpg',
        link: '/actividades/automovilismo',
        actividad: 'automovilismo'
      });
    }

    // 2. Obtener próximas carreras de Karting
    const proximasKarting = calendarioKarting
      .filter(carrera => new Date(carrera.fecha) >= hoy)
      .sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
    
    if (proximasKarting.length > 0) {
      const karting = proximasKarting[0];
      eventos.push({
        id: `karting-${karting.id}`,
        fecha: karting.fecha,
        titulo: `Karting - ${karting.categoria}`,
        circuito: karting.circuito,
        categoria: karting.categoria,
        imagen: '/images/eventos/karting.webp',
        link: '/actividades/karting',
        actividad: 'karting'
      });
    }

    // 3. Obtener próximos eventos de Golf Croquet
    const proximosGolf = infoGolfCroquet.proximosEventos
      .filter(evento => new Date(evento.fecha) >= hoy)
      .sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
    
    if (proximosGolf.length > 0) {
      const golf = proximosGolf[0];
      eventos.push({
        id: `golf-${golf.fecha}`,
        fecha: golf.fecha,
        titulo: `Golf Croquet - ${golf.evento}`,
        circuito: golf.lugar,
        categoria: 'Torneo',
        imagen: '/images/eventos/golfcroquet.jpg',
        link: '/actividades/golf-croquet',
        actividad: 'golf-croquet'
      });
    }

    // Ordenar todos los eventos por fecha y tomar los 3 más próximos
    const eventosOrdenados = eventos.sort((a, b) => 
      new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
    ).slice(0, 3);

    setProximosEventos(eventosOrdenados);
  }, []);

  const formatearFecha = (fechaStr: string) => {
    // Dividir la fecha en partes [año, mes, día]
    const [year, month, day] = fechaStr.split('-').map(Number);
    
    // Array de meses en español
    const meses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    
    // Nombres largos de meses
    const mesesLargos = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    
    return {
      dia: day.toString().padStart(2, '0'),
      mes: meses[month - 1],
      completoLargo: `${day} de ${mesesLargos[month - 1]} de ${year}`
    };
  };

  if (proximosEventos.length === 0) {
    return (
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Próximos <span className="text-yellow-400">Eventos</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Próximamente más eventos y actividades
          </p>
        </div>
        <div className="bg-gray-100 rounded-2xl p-12 text-center">
          <p className="text-gray-500">No hay eventos programados próximamente</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Próximos <span className="text-yellow-400">Eventos</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          No te pierdas las próximas competencias y actividades del club
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {proximosEventos.map((evento) => {
          const fecha = formatearFecha(evento.fecha);
          
          return (
            <div
              key={evento.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={evento.imagen}
                  alt={evento.titulo}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay oscuro en hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Tarjeta de fecha */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center min-w-[60px] shadow-md">
                  <span className="block text-2xl font-bold text-blue-900">{fecha.dia}</span>
                  <span className="block text-xs font-semibold text-gray-600">{fecha.mes}</span>
                </div>
                
                {/* Badge de actividad */}
                <div className="absolute top-3 right-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full shadow-md ${
                    evento.actividad === 'automovilismo' ? 'bg-red-500 text-white' :
                    evento.actividad === 'karting' ? 'bg-green-500 text-white' :
                    'bg-emerald-500 text-white'
                  }`}>
                    {evento.actividad === 'automovilismo' ? '🏎️ Auto' :
                     evento.actividad === 'karting' ? '🏁 Karting' :
                     '⛳ Golf'}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">{evento.titulo}</h3>
                <p className="text-sm text-gray-600 mb-1 flex items-center gap-1">
                  <span>📍</span> {evento.circuito}
                </p>
                <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                  <span>🏎️</span> {evento.categoria}
                </p>
                
                {/* Fecha completa - CORREGIDO */}
                <p className="text-xs text-gray-400 mb-4">
                  {fecha.completoLargo}
                </p>
                
                <Link
                  href={evento.link}
                  className="inline-flex items-center gap-2 text-blue-900 font-semibold text-sm group/link"
                >
                  <span>Más información</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/actividades"
          className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
        >
          <span>Ver calendario completo</span>
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}
