import Link from "@/i18n/Link";
import { getI18n } from "@/i18n/server";

export default async function NotFound() {
  const { t } = await getI18n();
  return (
    <section className="container-x py-32">
      <p className="text-orange-500">404</p>
      <h1 className="display mt-3 text-5xl sm:text-6xl">{t("Page not found.")}</h1>
      <p className="mt-6 text-lg text-muted">{t("The page you are looking for does not exist or has been moved.")}</p>
      <Link href="/" className="btn-orange mt-10">{t("Back to Home")}</Link>
    </section>
  );
}
