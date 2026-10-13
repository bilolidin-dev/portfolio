export const locales = ["en", "ru", "uz"] as const;
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
