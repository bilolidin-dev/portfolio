import { defaultLocale, type Locale } from "@/i18n/config";
import { en } from "@/i18n/en";
import { es } from "@/i18n/es";
import { ky } from "@/i18n/ky";
import { ru } from "@/i18n/ru";
import { uz } from "@/i18n/uz";
import { uzCyrl } from "@/i18n/uz-cyrl";
import type { UiDictionary } from "@/i18n/types";

export type { UiDictionary } from "@/i18n/types";

const dictionaries: Record<Locale, UiDictionary> = { en, ru, uz, "uz-cyrl": uzCyrl, ky, es };

export function getDictionary(locale: Locale = defaultLocale): UiDictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
