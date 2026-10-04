import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Khumo Industrial home">
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="#0a5cff" />
        <path d="M12 10v20M12 20l12-10M15.5 17.5L26 30" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="29" cy="11" r="3" fill="#ffb000" />
      </svg>
      <span className={`leading-none ${light ? "text-white" : "text-navy-900"}`}>
        <span className="block text-lg font-extrabold tracking-tight">KHUMO</span>
        <span className={`block text-[10px] font-semibold tracking-[0.3em] ${light ? "text-white/60" : "text-muted"}`}>INDUSTRIAL</span>
      </span>
    </Link>
  );
}
