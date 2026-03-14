export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Club Unión (C.C.D.U.M) - Gobernador Mansilla, Entre Ríos.</p>
        <p className="text-sm mt-2 text-gray-300">Presidente: Sergio Edgardo Gervasoni</p>
      </div>
    </footer>
  );
}