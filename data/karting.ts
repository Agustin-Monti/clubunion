// Categorías de karting
export const categoriasKarting = [
  { id: "prejunior", nombre: "Pre-Junior" },
  { id: "junior", nombre: "Junior" },
  { id: "senior", nombre: "Senior" },
  { id: "master", nombre: "Master" }
];

type EstadoCarrera = "completado" | "próximo" | "cancelado";

// TODOS los pilotos del campeonato de karting
export const todosLosPilotosKarting = [
  {
    id: 1,
    nombre: "Benicio Korell",
    categoria: "prejunior",
    numero: "32",
    auto: "Kart Pre-Junior",
    puntos: 120,
    esDelClub: true,
    foto: "/images/karting/benicio-korell.jpg",
    edad: 12,
    escuela: "Escuelita de Karting Unión"
  },
  {
    id: 2,
    nombre: "Luciano Fernández",
    categoria: "prejunior",
    numero: "5",
    auto: "Kart Pre-Junior",
    puntos: 98,
    esDelClub: false
  },
  {
    id: 3,
    nombre: "Sofía Acosta",
    categoria: "prejunior",
    numero: "12",
    auto: "Kart Pre-Junior",
    puntos: 87,
    esDelClub: false
  },
  {
    id: 4,
    nombre: "Mateo González",
    categoria: "junior",
    numero: "8",
    auto: "Kart Junior",
    puntos: 115,
    esDelClub: true,
    foto: "/images/karting/mateo-gonzalez.jpg",
    edad: 14,
    escuela: "Escuelita de Karting Unión"
  },
  {
    id: 5,
    nombre: "Valentino Rossi",
    categoria: "junior",
    numero: "46",
    auto: "Kart Junior",
    puntos: 102,
    esDelClub: false
  },
  {
    id: 6,
    nombre: "Franco Colapinto",
    categoria: "senior",
    numero: "21",
    auto: "Kart Senior",
    puntos: 95,
    esDelClub: false
  },
  {
    id: 7,
    nombre: "Juan Manuel Silva",
    categoria: "master",
    numero: "111",
    auto: "Kart Master",
    puntos: 88,
    esDelClub: false
  }
];

// Pilotos del club (filtrados)
export const pilotosDelClubKarting = todosLosPilotosKarting.filter(piloto => piloto.esDelClub);

export const calendarioKarting: {
  id: number;
  fecha: string;
  circuito: string;
  categoria: string;
  estado: EstadoCarrera;
  nombreEvento?: string;
}[] = [
  {
    id: 201,
    fecha: "2026-02-09",
    circuito: "Kartódromo de Rosario del Tala",
    categoria: "Pre-Junior",
    estado: "completado"
  },
  {
    id: 202,
    fecha: "2026-03-16",
    circuito: "Kartódromo de Gobernador Mansilla",
    categoria: "Junior",
    estado: "completado"
  },
  {
    id: 203,
    fecha: "2026-04-20",
    circuito: "Kartódromo Rosario del Tala",
    categoria: "Pre-Junior",
    estado: "próximo"
  },
  {
    id: 204,
    fecha: "2026-05-18",
    circuito: "Kartódromo Gobernador Mansilla",
    categoria: "Junior",
    estado: "próximo"
  },
  {
    id: 205,
    fecha: "2026-06-22",
    circuito: "Kartódromo Rosario del Tala",
    categoria: "Junior",
    estado: "próximo"
  },
  {
    id: 206,
    fecha: "2026-07-20",
    circuito: "Kartódromo Gobernador Mansilla",
    categoria: "Junior",
    estado: "próximo"
  },
  {
    id: 207,
    fecha: "2026-08-24",
    circuito: "Kartódromo Rosario del Tala",
    categoria: "Junior",
    estado: "próximo"
  },
  {
    id: 208,
    fecha: "2026-09-21",
    circuito: "Kartódromo Gobernador Mansilla",
    categoria: "Junior",
    estado: "próximo"
  },
  {
    id: 209,
    fecha: "2026-10-19",
    circuito: "Kartódromo Rosario del Tala",
    categoria: "Junior",
    estado: "próximo",
    nombreEvento: "Gran Pre Coronación"
  },
  {
    id: 210,
    fecha: "2026-11-16",
    circuito: "Kartódromo Gobernador Mansilla",
    categoria: "Junior",
    estado: "próximo",
    nombreEvento: "Gran Coronación"
  }
];

// Tabla de posiciones por categoría
export const posicionesKarting = {
  prejunior: todosLosPilotosKarting
    .filter(p => p.categoria === "prejunior")
    .sort((a, b) => b.puntos - a.puntos)
    .map((piloto, index) => ({
      posicion: index + 1,
      pilotoId: piloto.id,
      puntos: piloto.puntos,
      categoria: "prejunior"
    })),
  junior: todosLosPilotosKarting
    .filter(p => p.categoria === "junior")
    .sort((a, b) => b.puntos - a.puntos)
    .map((piloto, index) => ({
      posicion: index + 1,
      pilotoId: piloto.id,
      puntos: piloto.puntos,
      categoria: "junior"
    })),
  senior: todosLosPilotosKarting
    .filter(p => p.categoria === "senior")
    .sort((a, b) => b.puntos - a.puntos)
    .map((piloto, index) => ({
      posicion: index + 1,
      pilotoId: piloto.id,
      puntos: piloto.puntos,
      categoria: "senior"
    })),
  master: todosLosPilotosKarting
    .filter(p => p.categoria === "master")
    .sort((a, b) => b.puntos - a.puntos)
    .map((piloto, index) => ({
      posicion: index + 1,
      pilotoId: piloto.id,
      puntos: piloto.puntos,
      categoria: "master"
    }))
};