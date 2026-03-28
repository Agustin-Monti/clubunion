// Categorías de automovilismo
export const categoriasAutomovilismo = [
  { id: "clase1", nombre: "Clase 1" },
  { id: "tp", nombre: "Turismo Promocional" },
  { id: "ultra", nombre: "Ultra 1600" }
];

export const todosLosPilotos = [
  // Pilotos de la Clase 1 con puntos actualizados
  {
    id: 1,
    nombre: "Marco Risso",
    categoria: "clase1",
    numero: "25",
    auto: "Clase 1",
    puntos: 39, // 1° puesto
    esDelClub: false
  },
  {
    id: 2,
    nombre: "Mariano Marozzini",
    categoria: "clase1",
    numero: "81",
    auto: "Clase 1",
    puntos: 34, // 2° puesto
    esDelClub: true, // ¡Piloto del club!
    foto: "/images/pilotos/mariano-marozzini.jpg"
  },
  {
    id: 3,
    nombre: "Nicolas Galvarini",
    categoria: "clase1",
    numero: "57",
    auto: "Clase 1",
    puntos: 25, // 3° puesto
    esDelClub: false
  },
  {
    id: 4,
    nombre: "Martin Solari",
    categoria: "clase1",
    numero: "8",
    auto: "Clase 1",
    puntos: 25, // 4° puesto
    esDelClub: false
  },
  {
    id: 5,
    nombre: "Ricardo Droqui",
    categoria: "clase1",
    numero: "6",
    auto: "Clase 1 (S)",
    puntos: 23, // 5° puesto
    esDelClub: false
  },
  {
    id: 6,
    nombre: "Jorge Lambert",
    categoria: "clase1",
    numero: "20",
    auto: "Clase 1 (S)",
    puntos: 17, // 8° puesto
    esDelClub: false
  },
  {
    id: 7,
    nombre: "Diego Saipert",
    categoria: "clase1",
    numero: "100",
    auto: "Clase 1",
    puntos: 15, // 11° puesto
    esDelClub: false
  },
  {
    id: 8,
    nombre: "Oscar Elola",
    categoria: "clase1",
    numero: "52",
    auto: "Clase 1 (S)",
    puntos: 18, // 7° puesto
    esDelClub: false
  },
  {
    id: 9,
    nombre: "Carlos Ariel Montañana",
    categoria: "clase1",
    numero: "19",
    auto: "Clase 1",
    puntos: 17, // 9° puesto
    esDelClub: false
  },
  {
    id: 10,
    nombre: "Vittorio Herbel",
    categoria: "clase1",
    numero: "118",
    auto: "Clase 1",
    puntos: 23, // 6° puesto
    esDelClub: false
  },
  {
    id: 11,
    nombre: "Nicolas Barreto",
    categoria: "clase1",
    numero: "1",
    auto: "Clase 1",
    puntos: 16, // 10° puesto
    esDelClub: false
  },
  {
    id: 12,
    nombre: "Armando Cleppe",
    categoria: "clase1",
    numero: "28",
    auto: "Clase 1 (S)",
    puntos: 9, // 14° puesto
    esDelClub: false
  },
  {
    id: 13,
    nombre: "Guillermo Suarez",
    categoria: "clase1",
    numero: "34",
    auto: "Clase 1",
    puntos: 8, // 16° puesto
    esDelClub: false
  },
  {
    id: 14,
    nombre: "Pablo Desanto",
    categoria: "clase1",
    numero: "5",
    auto: "Clase 1",
    puntos: 16, // 15° puesto
    esDelClub: false
  },
  {
    id: 15,
    nombre: "Fernando Elola",
    categoria: "clase1",
    numero: "39",
    auto: "Clase 1",
    puntos: 14, // 12° puesto
    esDelClub: false
  },
  {
    id: 16,
    nombre: "Franco Cecchini",
    categoria: "clase1",
    numero: "77",
    auto: "Clase 1",
    puntos: 12, // 13° puesto
    esDelClub: false
  },
  {
    id: 17,
    nombre: "Eduardo Recalde",
    categoria: "clase1",
    numero: "138",
    auto: "Clase 1",
    puntos: 6, // 18° puesto
    esDelClub: false
  },
  {
    id: 18,
    nombre: "Esteban Gonzalez",
    categoria: "clase1",
    numero: "108",
    auto: "Clase 1 (S)",
    puntos: 7, // 17° puesto
    esDelClub: false
  },
  {
    id: 19,
    nombre: "Brisa Ramos",
    categoria: "clase1",
    numero: "221",
    auto: "Clase 1",
    puntos: 2, // 21° puesto
    esDelClub: false
  },
  {
    id: 20,
    nombre: "Patricio Lambert",
    categoria: "clase1",
    numero: "22",
    auto: "Clase 1",
    puntos: 1, // 22° puesto
    esDelClub: false
  },
  {
    id: 21,
    nombre: "Sebastian Braida",
    categoria: "clase1",
    numero: "66",
    auto: "Clase 1",
    puntos: 3, // 20° puesto
    esDelClub: false
  },
  {
    id: 22,
    nombre: "Diego Braida",
    categoria: "clase1",
    numero: "88",
    auto: "Clase 1 (S)",
    puntos: 0, // 23° puesto
    esDelClub: false
  },
  {
    id: 23,
    nombre: "Martin Jacob",
    categoria: "clase1",
    numero: "47",
    auto: "Clase 1",
    puntos: 3, // 19° puesto
    esDelClub: false
  }
];

// Pilotos del club (filtrados)
export const pilotosDelClub = todosLosPilotos.filter(piloto => piloto.esDelClub);

type EstadoCarrera = "completado" | "próximo" | "cancelado";

// Calendario de automovilismo
export const calendarioAutomovilismo: {
  id: number;
  fecha: string;
  circuito: string;
  categoria: string;
  estado: EstadoCarrera;
  ganador?: string;
  nombreEvento?: string;
  tieneResultados?: boolean;
}[] = [
  {
    id: 1,
    fecha: "2026-03-15",
    circuito: "C. del Uruguay",
    categoria: "clase1",
    estado: "completado",
    ganador: "Marco Risso",
    tieneResultados: true
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
    categoria: "clase1",
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
    categoria: "clase1",
    estado: "próximo",
    nombreEvento: "GRAN PREMIO LÚSQTOFF - LA CARRERA DE LOS $4 MILLONES"
  },
  {
    id: 8,
    fecha: "2026-11-22",
    circuito: "CDU",
    categoria: "clase1",
    estado: "próximo",
    nombreEvento: "GRAN CORONACIÓN"
  }
];

// Tabla de posiciones (inicializada con pilotos pero sin puntos aún)
export const posicionesAutomovilismo = todosLosPilotos
  .sort((a, b) => {
    // Ordenar por puntos (todos 0 por ahora)
    if (a.puntos === b.puntos) return a.nombre.localeCompare(b.nombre);
    return b.puntos - a.puntos;
  })
  .map((piloto, index) => ({
    posicion: index + 1,
    pilotoId: piloto.id,
    puntos: piloto.puntos,
    categoria: piloto.categoria
  }));
