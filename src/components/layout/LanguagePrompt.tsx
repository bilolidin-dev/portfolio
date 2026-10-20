"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, X } from "lucide-react";
import { getDictionary } from "@/i18n";
import { htmlLang, isLocale, localePath, type Locale } from "@/i18n/config";
import { detectBrowserLocale, rememberLocale, rememberedLocale } from "@/i18n/preference";

/**
 * First-visit suggestion: if the browser prefers one of the site's languages
 * and the visitor is on another one, offer it — in that language, so it can be
 * read. Never redirects on its own; any answer is remembered.
 */
export function LanguagePrompt({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [suggested, setSuggested] = useState<Locale | null>(null);

  useEffect(() => {
    if (rememberedLocale()) return;
    const preferred = detectBrowserLocale(navigator.languages ?? [navigator.language]);
    if (!preferred || preferred === locale) return;
    // Deferred so the card appears after first paint and does not compete with the hero.
    const timer = window.setTimeout(() => setSuggested(preferred), 600);
    return () => window.clearTimeout(timer);
  }, [locale]);

  if (!suggested) return null;

  const t = getDictionary(suggested).langPrompt;
  const segments = pathname.split("/").filter(Boolean);
  const route = segments[0] && isLocale(segments[0]) ? segments.slice(1) : segments;
  const href = localePath(route.length ? `/${route.join("/")}` : "/", suggested);

  const dismiss = () => {
    rememberLocale(locale);
    setSuggested(null);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.message}
      lang={htmlLang[suggested]}
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-line bg-bg-elevated p-3 pl-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)] animate-in fade-in slide-in-from-bottom-2 duration-300 sm:left-auto sm:right-6 sm:bottom-6 sm:mx-0"
    >
      <Globe size={18} className="shrink-0 text-accent" aria-hidden="true" />
      <p className="flex-1 text-sm leading-snug text-ink">{t.message}</p>
      <Link
        href={href}
        onClick={() => {
          rememberLocale(suggested);
          setSuggested(null);
        }}
        className="shrink-0 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-bg transition-opacity hover:opacity-90"
      >
        {t.accept}
      </Link>
      <button
        type="button"
        onClick={dismiss}
        aria-label={t.dismiss}
        className="shrink-0 rounded-full p-1.5 text-muted transition-colors hover:text-ink"
      >
        <X size={16} aria-hidden="true" />
      </button>
    </div>
  );
}
