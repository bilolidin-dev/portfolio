import type { Metadata } from "next";
import ContactView, { getMetadata } from "@/views/ContactView";
import { defaultLocale } from "@/i18n/config";

export function generateMetadata(): Metadata {
  return getMetadata(defaultLocale);
}

export default function Page() {
  return <ContactView locale={defaultLocale} />;
}
