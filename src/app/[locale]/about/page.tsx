import type { Metadata } from "next";
import AboutView, { getMetadata } from "@/views/AboutView";
import { resolveLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getMetadata(resolveLocale(locale));
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  return <AboutView locale={resolveLocale(locale)} />;
}
