import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Khumo Industrial home">
      <svg viewBox="0 0 36 36" className="h-9 w-9" aria-hidden="true">
        <path d="M9 4v28" stroke={light ? "#fff" : "#003063"} strokeWidth="6" strokeLinecap="round" />
        <path d="M30 6L15.5 18 30 30" stroke="#f4511e" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span className={`display text-[1.9rem] leading-none ${light ? "text-white" : "text-navy-800"}`}>
        Khumo
      </span>
    </Link>
  );
}
