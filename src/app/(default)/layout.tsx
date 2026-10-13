import type { Metadata } from "next";
import "@/app/globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { defaultLocale } from "@/i18n/config";
import { rootMetadata } from "@/i18n/metadata";

export const metadata: Metadata = rootMetadata(defaultLocale);

/** Root layout for the default locale, whose URLs carry no `/{locale}` prefix. */
export default function DefaultLocaleRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteShell locale={defaultLocale}>{children}</SiteShell>;
}
