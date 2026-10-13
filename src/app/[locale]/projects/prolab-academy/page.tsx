import type { Metadata } from "next";
import ProLabCaseStudyView, { getMetadata } from "@/views/ProLabCaseStudyView";
import { resolveLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getMetadata(resolveLocale(locale));
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  return <ProLabCaseStudyView locale={resolveLocale(locale)} />;
}
