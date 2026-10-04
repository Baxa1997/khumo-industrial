export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-line">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="text-[17px] font-medium tracking-[-0.01em]">{f.q}</span>
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[#eaf0f6] text-lg font-semibold leading-none text-navy-800 transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
