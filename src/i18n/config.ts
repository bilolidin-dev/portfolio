export const locales = ["en", "ru", "uz", "uz-cyrl", "ky", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/**
 * Locales that live under a `/{locale}` URL prefix. The default locale is
 * served from the root (`/`, `/about`, …) so its URLs stay prefix-free.
 */
export const prefixedLocales = locales.filter(
  (locale): locale is Locale => locale !== defaultLocale
);

/** Endonyms, so every option in the language menu reads in its own language. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  uz: "O'zbekcha",
  "uz-cyrl": "Ўзбекча",
  ky: "Кыргызча",
  es: "Español",
};

/** Short code on the language button. */
export const localeShortNames: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  uz: "UZ",
  "uz-cyrl": "ЎЗ",
  ky: "KY",
  es: "ES",
};

/** BCP 47 tag for `<html lang>`, `lang=` attributes and hreflang. */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  ru: "ru",
  uz: "uz",
  "uz-cyrl": "uz-Cyrl",
  ky: "ky",
  es: "es",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Narrows an untrusted route param (or `null` from `usePathname`) to a locale. */
export function resolveLocale(value: string | null | undefined): Locale {
  return value && isLocale(value) ? value : defaultLocale;
}

export function localeFromPathname(pathname: string | null | undefined): Locale {
  const firstSegment = (pathname ?? "").split("/").filter(Boolean)[0];
  return firstSegment && isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function localePath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path === "/" ? "" : path}`;
}
