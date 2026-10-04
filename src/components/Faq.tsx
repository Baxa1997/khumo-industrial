export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-line">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-line py-7">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
            <span className="display text-xl tracking-[-0.03em] sm:text-2xl">{f.q}</span>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line text-2xl transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
