import LegalPage from "@/components/LegalPage";
import { pageTitle } from "@/i18n/server";
import { termsSections } from "@/lib/legal";

export const generateMetadata = pageTitle("Terms & Conditions");

export default function Page() {
  return <LegalPage title="Terms & Conditions" sections={termsSections} other={{ href: "/privacy", label: "Privacy Policy" }} />;
}
