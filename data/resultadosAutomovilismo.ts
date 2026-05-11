// Definir el tipo para los resultados
export interface ResultadoCarrera {
  posicion: number;
  pilotoId: number;
  nombre: string;
  numero?: string;
  tiempo?: string;
  vueltas?: number;
  diferencia?: string;
  auto?: string;
}

export interface ResultadosPorCarrera {
  carreraId: number;
  fecha: string;
  circuito: string;
  categoria: string;
  resultados: ResultadoCarrera[];
  clasificacion?: string; // "FINAL" o "CLASIFICACION"
}

// Resultados de cada carrera
export const resultadosAutomovilismo: ResultadosPorCarrera[] = [
  {
    carreraId: 1,
    fecha: "2026-03-15",
    circuito: "C. del Uruguay",
    categoria: "clase1",
    clasificacion: "FINAL",
    resultados: [
      { posicion: 1, pilotoId: 1, nombre: "Marco Risso", numero: "25", tiempo: "22:11.027" },
      { posicion: 2, pilotoId: 2, nombre: "Mariano Marozzini", numero: "81", diferencia: "+0.144" },
      { posicion: 3, pilotoId: 3, nombre: "Nicolas Galvarini", numero: "57", diferencia: "+1.973" },
      { posicion: 4, pilotoId: 4, nombre: "Martin Solari", numero: "8", diferencia: "+4.126" },
      { posicion: 5, pilotoId: 5, nombre: "Ricardo Droqui", numero: "6", diferencia: "+4.950" },
      { posicion: 6, pilotoId: 6, nombre: "Jorge Lambert", numero: "20", diferencia: "+5.158" },
      { posicion: 7, pilotoId: 7, nombre: "Diego Saipert", numero: "100", diferencia: "+7.403" },
      { posicion: 8, pilotoId: 8, nombre: "Oscar Elola", numero: "52", diferencia: "+7.620" },
      { posicion: 9, pilotoId: 9, nombre: "Carlos Ariel Montañana", numero: "19", diferencia: "+11.104" },
      { posicion: 10, pilotoId: 10, nombre: "Vittorio Herbel", numero: "118", diferencia: "+11.381" },
      { posicion: 11, pilotoId: 11, nombre: "Nicolas Barreto", numero: "1", diferencia: "+11.963" },
      { posicion: 12, pilotoId: 12, nombre: "Armando Cleppe", numero: "28", diferencia: "+14.242" },
      { posicion: 13, pilotoId: 13, nombre: "Guillermo Suarez", numero: "34", diferencia: "+19.200" },
      { posicion: 14, pilotoId: 14, nombre: "Pablo Desanto", numero: "5", diferencia: "+0.001" },
      { posicion: 15, pilotoId: 15, nombre: "Fernando Elola", numero: "39", tiempo: "1Vuelta" },
      { posicion: 16, pilotoId: 16, nombre: "Franco Cecchini", numero: "77", tiempo: "1Vuelta" },
      { posicion: 17, pilotoId: 17, nombre: "Eduardo Recalde", numero: "138", tiempo: "1Vuelta" },
      { posicion: 18, pilotoId: 18, nombre: "Esteban Gonzalez", numero: "108", tiempo: "NC" },
      { posicion: 19, pilotoId: 19, nombre: "Brisa Ramos", numero: "221", tiempo: "NC" },
      { posicion: 20, pilotoId: 20, nombre: "Patricio Lambert", numero: "22", tiempo: "NC" },
      { posicion: 21, pilotoId: 21, nombre: "Sebastian Braida", numero: "99", tiempo: "NC" },
      { posicion: 22, pilotoId: 22, nombre: "Diego Braida", numero: "88", tiempo: "NC" },
      { posicion: 23, pilotoId: 23, nombre: "Martin Jacob", numero: "47", tiempo: "NC" }
    ]
  },
  {
    carreraId: 2,
    fecha: "2026-04-26",
    circuito: "C. del Uruguay",
    categoria: "clase1",
    clasificacion: "FINAL",
    resultados: [
      { posicion: 1, pilotoId: 1, nombre: "Marco Risso", numero: "25", tiempo: "21:42.255" },
      { posicion: 2, pilotoId: 10, nombre: "Vittorio Herbel", numero: "118", diferencia: "+3.136" },
      { posicion: 3, pilotoId: 2, nombre: "Mariano Marozzini", numero: "81", diferencia: "+3.397" },
      { posicion: 4, pilotoId: 3, nombre: "Nicolas Galvarini", numero: "57", diferencia: "+8.347" },
      { posicion: 5, pilotoId: 24, nombre: "Sergio Beorda", numero: "98", diferencia: "+9.439" },
      { posicion: 6, pilotoId: 5, nombre: "Ricardo Droqui", numero: "6", diferencia: "+9.654", auto: "(S)" },
      { posicion: 7, pilotoId: 6, nombre: "Jorge Lambert", numero: "20", diferencia: "+9.833", auto: "(S)" },
      { posicion: 8, pilotoId: 20, nombre: "Patricio Lambert", numero: "22", diferencia: "+10.226" },
      { posicion: 9, pilotoId: 4, nombre: "Martin Solari", numero: "8", diferencia: "+10.474" },
      { posicion: 10, pilotoId: 23, nombre: "Martin Jacob", numero: "47", diferencia: "+10.822" },
      { posicion: 11, pilotoId: 9, nombre: "Carlos Ariel Montañana", numero: "19", diferencia: "+11.159" },
      { posicion: 12, pilotoId: 7, nombre: "Diego Saipert", numero: "100", diferencia: "+11.217" },
      { posicion: 13, pilotoId: 16, nombre: "Franco Cecchini", numero: "77", diferencia: "+17.011" },
      { posicion: 14, pilotoId: 17, nombre: "Eduardo Recalde", numero: "138", diferencia: "+20.236" },
      { posicion: 15, pilotoId: 18, nombre: "Esteban Gonzalez", numero: "108", diferencia: "+46.945", auto: "(S)" },
      { posicion: 16, pilotoId: 19, nombre: "Brisa Ramos", numero: "221", diferencia: "+52.060" },
      { posicion: 17, pilotoId: 15, nombre: "Fernando Elola", numero: "39", tiempo: "3Vueltas" },
      { posicion: 18, pilotoId: 12, nombre: "Armando Cleppe", numero: "28", tiempo: "NC", auto: "(S)" },
      { posicion: 19, pilotoId: 25, nombre: "Claudio Lambert", numero: "38", tiempo: "NC" },
      { posicion: 20, pilotoId: 11, nombre: "Nicolas Barreto", numero: "1", tiempo: "NC" },
      { posicion: 21, pilotoId: 13, nombre: "Guillermo Suarez", numero: "34", tiempo: "NC" },
      { posicion: 22, pilotoId: 14, nombre: "Pablo Desanto", numero: "5", tiempo: "NC" },
      { posicion: 23, pilotoId: 8, nombre: "Oscar Elola", numero: "52", tiempo: "NC", auto: "(S)" }
      // Nota: Los pilotos que no aparecen en la carrera (Sebastian Braida, Diego Braida) no están listados
    ]
  }

];

// Para calcular puntos automáticamente según posición (si quieres usar esta función)
export const calcularPuntosPorPosicion = (posicion: number): number => {
  const tablaPuntos: { [key: number]: number } = {
    1: 25, 2: 20, 3: 16, 4: 14, 5: 12,
    6: 10, 7: 9, 8: 8, 9: 7, 10: 6,
    11: 5, 12: 4, 13: 3, 14: 2, 15: 1
  };
  return tablaPuntos[posicion] || 0;
};
