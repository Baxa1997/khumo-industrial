import type { Metadata } from "next";
import { CategoryGrid, CtaBanner, PageIntro } from "@/components/Sections";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        lines={["Products for Every", "End of Line."]}
        text="Stretch wrapping, strapping, case sealing, binding, coding & marking and consumables — from a single handheld tool to fully automated systems."
        crumbs={[{ label: "Products" }]}
      />
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <CategoryGrid />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
