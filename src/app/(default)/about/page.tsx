import type { Metadata } from "next";
import AboutView, { getMetadata } from "@/views/AboutView";
import { defaultLocale } from "@/i18n/config";

export function generateMetadata(): Metadata {
  return getMetadata(defaultLocale);
}

export default function Page() {
  return <AboutView locale={defaultLocale} />;
}
