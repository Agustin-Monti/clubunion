import Link from "next/link";

interface BotonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Boton({ href, children, variant = "primary", className = "" }: BotonProps) {
  const baseClasses = "px-6 py-3 rounded-full font-semibold transition-colors inline-block";
  
  const variants = {
    primary: "bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-yellow-400",
    secondary: "bg-[var(--color-primary)] text-white hover:bg-blue-900",
    outline: "border-2 border-white hover:bg-white hover:text-[var(--color-primary)]"
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}