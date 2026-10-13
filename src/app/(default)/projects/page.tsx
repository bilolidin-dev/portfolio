import type { Metadata } from "next";
import ProjectsView, { getMetadata } from "@/views/ProjectsView";
import { defaultLocale } from "@/i18n/config";

export function generateMetadata(): Metadata {
  return getMetadata(defaultLocale);
}

export default function Page() {
  return <ProjectsView locale={defaultLocale} />;
}
