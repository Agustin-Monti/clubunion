export default function ProyectosFuturos() {
  const proyectos = [
    "⚽ Fútbol Infantil",
    "🏐 Vóley Mixto",
    "🏀 Básquet",
    "🎱 Billar y juegos de salón"
  ];

  return (
    <div className="bg-[var(--color-primary)] text-white p-8 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Otras actividades en proyecto</h2>
      <p className="mb-4">
        Creemos en un club polideportivo. Por eso, estamos trabajando para incorporar:
      </p>
      <ul className="list-disc list-inside grid md:grid-cols-2 gap-2">
        {proyectos.map((proyecto, index) => (
          <li key={index}>{proyecto}</li>
        ))}
      </ul>
    </div>
  );
}