import type { Metadata } from "next";
import { CtaBanner, NewsList, PageIntro } from "@/components/Sections";
import { news } from "@/lib/data";

export const metadata: Metadata = { title: "News & Events" };

export default function NewsPage() {
  return (
    <>
      <PageIntro lines={["Latest News,", "Events & Press."]} text="Company updates, product launches and insights from the world of packaging." crumbs={[{ href: "/resources", label: "Resources" }, { label: "News" }]} />
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <NewsList limit={news.length} />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
