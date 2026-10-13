import type { Metadata } from "next";
import ProjectDetailView, { getMetadata } from "@/views/ProjectDetailView";
import { isCustomCaseStudy, projects } from "@/data/projects";
import { defaultLocale } from "@/i18n/config";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects
    .filter((project) => !isCustomCaseStudy(project))
    .map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return getMetadata(defaultLocale, id);
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  return <ProjectDetailView locale={defaultLocale} id={id} />;
}
