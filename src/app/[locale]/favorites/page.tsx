import FavoritesList from "@/components/FavoritesList";
import { PageIntro } from "@/components/Sections";
import { getI18n, pageTitle } from "@/i18n/server";

export const generateMetadata = pageTitle("Saved Products");

export default async function FavoritesPage() {
  const { t } = await getI18n();
  return (
    <>
      <PageIntro lines={[t("Saved Products.")]} text={t("Products you saved on this device. Share your list with us when you request a quote.")} />
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <FavoritesList />
        </div>
      </section>
    </>
  );
}
