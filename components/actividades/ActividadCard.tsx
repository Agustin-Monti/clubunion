interface ActividadCardProps {
  title: string;
  description: string;
  details: string;
  icon: string;
  reverse?: boolean;
}

export default function ActividadCard({ title, description, details, icon, reverse = false }: ActividadCardProps) {
  const flexDirection = reverse ? "md:flex-row-reverse" : "md:flex-row";
  
  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden mb-12 flex flex-col ${flexDirection}`}>
      <div className="md:w-1/3 bg-gray-200 flex items-center justify-center p-8">
        <div className="text-8xl">{icon}</div>
      </div>
      <div className="md:w-2/3 p-8">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-3">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-700">{details}</p>
      </div>
    </div>
  );
}