import Link from "@/i18n/Link";
import Icon from "./Icon";
import { getI18n } from "@/i18n/server";
import { industries } from "@/lib/data";

export default async function IndustryGrid() {
  const { loc } = await getI18n();
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {loc(industries).map((i) => (
        <Link
          key={i.slug}
          href={`/industries/${i.slug}`}
          className="group relative flex h-64 flex-col justify-between overflow-hidden rounded-xl bg-steel-400 p-7 text-white transition-colors duration-300 hover:bg-steel-600"
        >
          <div className="relative z-10">
            <span className="display block text-[2rem] leading-tight tracking-[-0.04em]">{i.name}</span>
            <span className="mt-2 block max-w-[16rem] text-sm text-white/85">{i.title}</span>
          </div>
          <span className="relative z-10 text-navy-800 group-hover:text-white">
            <Icon name="arrow" className="h-7 w-7 group-hover:hidden" />
            <Icon name="arrowUpRight" className="hidden h-7 w-7 group-hover:block" />
          </span>
          <Icon name={i.icon} className="absolute -bottom-3 right-2 h-40 w-40 text-white/35" strokeWidth={0.8} />
        </Link>
      ))}
    </div>
  );
}
