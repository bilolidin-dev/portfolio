import type { Metadata } from "next";
import HomeView, { getMetadata } from "@/views/HomeView";
import { defaultLocale } from "@/i18n/config";

export function generateMetadata(): Metadata {
  return getMetadata(defaultLocale);
}

export default function Page() {
  return <HomeView locale={defaultLocale} />;
}
