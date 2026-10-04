import LegalPage from "@/components/LegalPage";
import { pageTitle } from "@/i18n/server";
import { privacySections } from "@/lib/legal";

export const generateMetadata = pageTitle("Privacy Policy");

export default function Page() {
  return <LegalPage title="Privacy Policy" sections={privacySections} other={{ href: "/terms", label: "Terms & Conditions" }} />;
}
