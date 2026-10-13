import type { Metadata } from "next";
import ProjectDetailView, { getMetadata } from "@/views/ProjectDetailView";
import { isCustomCaseStudy, projects } from "@/data/projects";
import { prefixedLocales, resolveLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string; id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.flatMap((locale) =>
    projects
      .filter((project) => !isCustomCaseStudy(project))
      .map((project) => ({ locale, id: project.id }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  return getMetadata(resolveLocale(locale), id);
}

export default async function Page({ params }: Props) {
  const { locale, id } = await params;
  return <ProjectDetailView locale={resolveLocale(locale)} id={id} />;
}
