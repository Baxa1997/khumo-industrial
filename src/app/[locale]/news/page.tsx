import { CtaBanner, NewsList, PageIntro } from "@/components/Sections";
import { getI18n, pageTitle } from "@/i18n/server";
import { news } from "@/lib/data";

export const generateMetadata = pageTitle("News & Events");

export default async function NewsPage() {
  const { t } = await getI18n();
  return (
    <>
      <PageIntro
        lines={[t("Latest News,\nEvents & Press.")]}
        text={t("Company updates, product launches and insights from the world of packaging.")}
        crumbs={[{ href: "/resources", label: t("Resources") }, { label: t("News") }]}
      />
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <NewsList limit={news.length} />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
