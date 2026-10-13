import type { Metadata } from "next";
import ContactView, { getMetadata } from "@/views/ContactView";
import { resolveLocale } from "@/i18n/config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return getMetadata(resolveLocale(locale));
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  return <ContactView locale={resolveLocale(locale)} />;
}
