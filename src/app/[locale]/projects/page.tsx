import type { Metadata } from "next";
import ProjectsView, { getMetadata } from "@/views/ProjectsView";
import { resolveLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getMetadata(resolveLocale(locale));
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  return <ProjectsView locale={resolveLocale(locale)} />;
}
