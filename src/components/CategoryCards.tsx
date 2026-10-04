import Link from "@/i18n/Link";
import Icon from "./Icon";
import type { Solution } from "@/lib/data";

/** Steel-blue product category cards. Pass already-localized items. */
export default function CategoryCards({ items }: { items: Solution[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <Link
          key={s.slug}
          href={`/category/${s.slug}`}
          className="group relative flex h-64 flex-col justify-between overflow-hidden rounded-xl bg-steel-400 p-7 text-white transition-colors duration-300 hover:bg-steel-600 lg:h-[18.5rem]"
        >
          <span className="display relative z-10 max-w-[70%] text-[2rem] leading-tight tracking-[-0.04em]">{s.name}</span>
          <span className="relative z-10 text-navy-800 transition-colors group-hover:text-white">
            <Icon name="arrow" className="h-7 w-7 group-hover:hidden" />
            <Icon name="arrowUpRight" className="hidden h-7 w-7 group-hover:block" />
          </span>
          {s.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={s.image} alt="" className="absolute bottom-3 right-3 h-[70%] w-[48%] object-contain object-bottom mix-blend-multiply transition-transform duration-500 group-hover:scale-105" />
          ) : (
            <Icon
              name={s.icon}
              className="absolute -bottom-4 right-2 h-48 w-48 text-white/35 transition-transform duration-500 group-hover:scale-105"
              strokeWidth={0.8}
            />
          )}
        </Link>
      ))}
    </div>
  );
}
