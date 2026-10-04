import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Khumo Industrial home">
      <svg viewBox="0 0 44 36" className="h-8 w-auto" aria-hidden="true">
        {/* KH monogram */}
        <path d="M4 3v30M4 19L18 3M9.5 13.5L19 33" stroke={light ? "#fff" : "#0b1f3f"} strokeWidth="6" strokeLinecap="square" fill="none" />
        <path d="M27 3v30M41 3v30M27 18h14" stroke="#f4511e" strokeWidth="6" strokeLinecap="square" fill="none" />
      </svg>
      <span className="leading-none">
        <span className={`block text-[1.15rem] font-extrabold tracking-[0.04em] ${light ? "text-white" : "text-[#0b1f3f]"}`}>KHUMO</span>
        <span className="mt-0.5 block text-[0.56rem] font-bold tracking-[0.34em] text-orange-500">INDUSTRIAL</span>
      </span>
    </Link>
  );
}
