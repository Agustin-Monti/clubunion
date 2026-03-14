'use client';

import { useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Logo from "../ui/Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Inicio" },
    { href: "/club", label: "El Club" },
    { href: "/actividades", label: "Actividades" },
    { href: "/contactos", label: "Contacto" },
  ];

  return (
    <header className="bg-[var(--color-primary)] text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Botón menú hamburguesa para móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Menú"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-2'}`} />
              <span className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
            </div>
          </button>

          {/* Menú desktop */}
          <ul className="hidden md:flex gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`relative py-2 transition-colors group ${
                      isActive ? 'text-[var(--color-secondary)]' : 'hover:text-[var(--color-secondary)]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-secondary)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Menú móvil desplegable animado */}
        <div className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}
        `}>
          <ul className="flex flex-col gap-2 border-t border-white/20 pt-4">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`block py-3 px-4 rounded-lg transition-all ${
                      isActive 
                        ? 'bg-white/10 text-[var(--color-secondary)]' 
                        : 'hover:bg-white/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}