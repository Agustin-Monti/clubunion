export default function ComisionDirectiva() {
  const directivos = [
    { cargo: "Presidente", nombre: "Sergio Edgardo Gervasoni" },
    { cargo: "Vicepresidente", nombre: "(A designar)" },
    { cargo: "Secretario", nombre: "(A designar)" },
    { cargo: "Tesorero", nombre: "(A designar)" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Comisión Directiva</h2>
      <ul className="space-y-2">
        {directivos.map((directivo, index) => (
          <li key={index}>
            <span className="font-semibold">{directivo.cargo}:</span> {directivo.nombre}
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-500 mt-4">Comisión en formación, abierta a nuevos miembros.</p>
    </div>
  );
}