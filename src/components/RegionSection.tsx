import Link from "@/i18n/Link";
import Icon from "./Icon";
import mapData from "@/lib/map-pins.json";
import { getI18n } from "@/i18n/server";
import { locations } from "@/lib/data";

const pins = mapData.pins as Record<string, { x: number; y: number }>;
// Label placement relative to the pin, so nearby offices don't overlap.
const placement: Record<string, string> = {
  Uzbekistan: "translate-x-3 -translate-y-1/2",
};

export default async function RegionSection() {
  const { t } = await getI18n();
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-[82rem] px-4 sm:px-8">
        <div className="grid items-center gap-12 overflow-hidden rounded-[1.25rem] bg-navy-800 px-6 py-12 text-white sm:px-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <div className="relative w-full" style={{ aspectRatio: mapData.aspect }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/region-dots.svg" alt="" className="absolute inset-0 h-full w-full" />
            {locations.map((l) => {
              const pos = pins[l.label];
              if (!pos) return null;
              return (
                <span key={l.label} className="absolute" style={{ left: `${pos.x}%`, top: `${pos.y}%` }}>
                  <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-orange-500 ring-4 ring-orange-500/25" />
                  <span className={`absolute flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white/20 px-3 py-1.5 backdrop-blur ${placement[l.label] ?? ""}`}>
                    <Icon name="pin" className="h-3.5 w-3.5 text-orange-500" strokeWidth={2.2} />
                    <span className="kicker text-[11px]">{t(l.label)}</span>
                  </span>
                </span>
              );
            })}
          </div>
          <div>
            <h2 className="display text-4xl sm:text-5xl lg:text-[3.4rem]">{t("Here for You Across Uzbekistan.")}</h2>
            <p className="display mt-8 text-lg leading-relaxed tracking-[-0.02em] text-white/90">
              {t("As the official Cyklop partner in Uzbekistan, we bring you the technology of a global packaging leader with local supply, installation, training and service — wherever your production is.")}
            </p>
            <Link href="/contact" className="btn-orange mt-10">{t("Contact Khumo")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
