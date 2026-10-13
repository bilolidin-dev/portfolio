import type { Metadata } from "next";
import "@/app/globals.css";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { isLocale, prefixedLocales } from "@/i18n/config";
import { rootMetadata } from "@/i18n/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return rootMetadata(isLocale(locale) ? locale : "en");
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <SiteShell locale={locale}>{children}</SiteShell>;
}
