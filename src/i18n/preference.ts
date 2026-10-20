import { isLocale, type Locale } from "@/i18n/config";

/**
 * Browser-only helpers for the visitor's language choice. The site is a static
 * export, so there is no server-side `Accept-Language` negotiation: the browser
 * suggests a language instead of redirecting, and remembers the answer.
 */
const STORAGE_KEY = "locale-choice";

/** Maps `navigator.languages` (in preference order) to the first supported locale. */
export function detectBrowserLocale(languages: readonly string[]): Locale | null {
  for (const tag of languages) {
    const lower = tag.toLowerCase();
    const primary = lower.split("-")[0];
    if (primary === "uz") return lower.includes("cyrl") ? "uz-cyrl" : "uz";
    if (isLocale(primary)) return primary;
  }
  return null;
}

export function rememberedLocale(): Locale | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value && isLocale(value) ? value : null;
  } catch {
    return null;
  }
}

/** Called on every explicit choice, so the suggestion never shows again. */
export function rememberLocale(locale: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Storage blocked (private mode): the suggestion may simply reappear.
  }
}
