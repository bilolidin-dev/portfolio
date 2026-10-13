import type { Metadata } from "next";
import ProLabCaseStudyView, { getMetadata } from "@/views/ProLabCaseStudyView";
import { defaultLocale } from "@/i18n/config";

export function generateMetadata(): Metadata {
  return getMetadata(defaultLocale);
}

export default function Page() {
  return <ProLabCaseStudyView locale={defaultLocale} />;
}
