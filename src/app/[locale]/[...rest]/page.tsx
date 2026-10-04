import { notFound } from "next/navigation";

// Unknown paths inside a language show the localized 404 page.
export default function CatchAll() {
  notFound();
}
