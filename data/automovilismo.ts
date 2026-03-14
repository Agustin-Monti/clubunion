// Categorías de automovilismo
export const categoriasAutomovilismo = [
  { id: "CEE", nombre: "Competición Especial Entrerriana" },
  { id: "tp", nombre: "Turismo Promocional" },
  { id: "ultra", nombre: "Ultra 1600" }
];

export const todosLosPilotos = [
  {
    id: 1,
    nombre: "Mariano Marozzini",
    categoria: "tc",
    numero: "81",
    auto: "Gordini",
    puntos: 0,
    esDelClub: true, // ¡Este es el piloto del club!
    foto: "/images/pilotos/juan-perez.jpg"
  },
  {
    id: 2,
    nombre: "Aníbal Vitasse",
    categoria: "tp",
    numero: "15",
    auto: "Chevrolet Chevy",
    puntos: 0,
    esDelClub: false
  },
  {
    id: 3,
    nombre: "Marcelo García",
    categoria: "ultra",
    numero: "23",
    auto: "Fiat 128",
    puntos: 0,
    esDelClub: false
  },
  {
    id: 4,
    nombre: "Ismael Tofolon",
    categoria: "tc",
    numero: "10",
    auto: "Dodge GTX",
    puntos: 0,
    esDelClub: false
  },
  {
    id: 5,
    nombre: "Sebastián Bauer",
    categoria: "tp",
    numero: "21",
    auto: "Chevrolet Chevy",
    puntos: 0,
    esDelClub: false
  },
  {
    id: 6,
    nombre: "Benicio Korell",
    categoria: "ultra",
    numero: "32",
    auto: "Renault 18",
    puntos: 0,
    esDelClub: false
  },
  {
    id: 7,
    nombre: "Valentin Scharton",
    categoria: "tc",
    numero: "47",
    auto: "Torino",
    puntos: 0,
    esDelClub: false
  },
  {
    id: 8,
    nombre: "Jeremías Munilla",
    categoria: "tp",
    numero: "8",
    auto: "Ford Falcon",
    puntos: 0,
    esDelClub: false
  },
  {
    id: 9,
    nombre: "Santiago Bornaticci",
    categoria: "ultra",
    numero: "19",
    auto: "Volkswagen Gol",
    puntos: 0,
    esDelClub: false
  },
  {
    id: 10,
    nombre: "Angel Landaburo",
    categoria: "tc",
    numero: "11",
    auto: "Dodge GTX",
    puntos: 0,
    esDelClub: false
  },
  {
    id: 11,
    nombre: "Santino Nabone",
    categoria: "tp",
    numero: "27",
    auto: "Chevrolet Chevy",
    puntos: 0,
    esDelClub: false
  },
  {
    id: 12,
    nombre: "Eduardo González",
    categoria: "ultra",
    numero: "54",
    auto: "Fiat 128",
    puntos: 0,
    esDelClub: false
  },
  {
    id: 13,
    nombre: "Brian Muller",
    categoria: "tc",
    numero: "3",
    auto: "Ford Falcon",
    puntos: 0,
    esDelClub: false
  },
  {
    id: 14,
    nombre: "Bautista Veglianzone",
    categoria: "tp",
    numero: "16",
    auto: "Chevrolet Chevy",
    puntos: 0,    esDelClub: false
  },
  {
    id: 15,
    nombre: "Nicolás Zubillaga",
    categoria: "ultra",
    numero: "22",
    auto: "Renault 12",
    puntos: 0,
    esDelClub: false
  },
  {
    id: 16,
    nombre: "Facundo Troncoso",
    categoria: "tc",
    numero: "31",
    auto: "Torino",
    puntos: 0,
    esDelClub: false
  },
  {
    id: 17,
    nombre: "Gastón Rebora",
    categoria: "tp",
    numero: "44",
    auto: "Ford Falcon",
    puntos: 0,
    esDelClub: false
  },
  {
    id: 18,
    nombre: "Marcelo Martínez",
    categoria: "ultra",
    numero: "77",
    auto: "Volkswagen Gol",
    puntos: 0,
    esDelClub: false
  },
  {
    id: 19,
    nombre: "Leonel Medina",
    categoria: "tc",
    numero: "99",
    auto: "Dodge GTX",
    puntos: 0,
    esDelClub: false
  }
];

// Pilotos del club (filtrados)
export const pilotosDelClub = todosLosPilotos.filter(piloto => piloto.esDelClub);

type EstadoCarrera = "completado" | "próximo" | "cancelado";

// Calendario de automovilismo (actualizado con los datos de la imagen)
export const calendarioAutomovilismo: {
  id: number;
  fecha: string;
  circuito: string;
  categoria: string;
  estado: EstadoCarrera;
  ganador?: string;     // Opcional
  nombreEvento?: string; // Opcional
}[] = [
  {
    id: 1,
    fecha: "2026-03-15",
    circuito: "C. del Uruguay",
    categoria: "tc",
    estado: "próximo"  // Sin ganador porque no se corrió
  },
  {
    id: 2,
    fecha: "2026-04-12",
    circuito: "C. del Uruguay",
    categoria: "tp",
    estado: "próximo"
  },
  {
    id: 3,
    fecha: "2026-05-24",
    circuito: "Concordia",
    categoria: "ultra",
    estado: "próximo"
  },
  {
    id: 4,
    fecha: "2026-06-28",
    circuito: "CDU",
    categoria: "tc",
    estado: "próximo",
    nombreEvento: "GRAN PREMIO RUS - CARRERA DE PILOTOS INVITADOS"
  },
  {
    id: 5,
    fecha: "2026-08-02",
    circuito: "C. del Uruguay",
    categoria: "tp",
    estado: "próximo"
  },
  {
    id: 6,
    fecha: "2026-09-06",
    circuito: "Concordia",
    categoria: "ultra",
    estado: "próximo"
  },
  {
    id: 7,
    fecha: "2026-10-11",
    circuito: "CDU",
    categoria: "tc",
    estado: "próximo",
    nombreEvento: "GRAN PREMIO LÚSQTOFF - LA CARRERA DE LOS $4 MILLONES"
  },
  {
    id: 8,
    fecha: "2026-11-22",
    circuito: "CDU",
    categoria: "tc",
    estado: "próximo",
    nombreEvento: "GRAN CORONACIÓN"
  }
];

// Tabla de posiciones (generada desde todosLosPilotos)
export const posicionesAutomovilismo = todosLosPilotos
  .sort((a, b) => b.puntos - a.puntos)
  .map((piloto, index) => ({
    posicion: index + 1,
    pilotoId: piloto.id,
    puntos: piloto.puntos,
    categoria: piloto.categoria
  }));