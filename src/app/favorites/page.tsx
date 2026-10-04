import type { Metadata } from "next";
import FavoritesList from "@/components/FavoritesList";
import { PageIntro } from "@/components/Sections";

export const metadata: Metadata = { title: "Saved Products" };

export default function FavoritesPage() {
  return (
    <>
      <PageIntro lines={["Saved Products."]} text="Products you saved on this device. Share your list with us when you request a quote." />
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <FavoritesList />
        </div>
      </section>
    </>
  );
}
