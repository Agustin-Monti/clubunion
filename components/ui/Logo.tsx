import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-10 h-10 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-[var(--color-primary)] font-bold text-xl">
        U
      </div>
      <span className="font-bold text-xl">CLUB UNIÓN</span>
    </Link>
  );
}