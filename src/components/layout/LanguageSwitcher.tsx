"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Check, ChevronDown, Globe } from "lucide-react";
import { SheetClose } from "@/components/ui/sheet";
import { getDictionary } from "@/i18n";
import {
  isLocale,
  localeNames,
  localePath,
  locales,
  type Locale,
} from "@/i18n/config";

/**
 * Language picker. The trigger shows the active language code and clicking it
 * lists every locale by its endonym — the reader can see at a glance that the
 * site is published in three languages instead of guessing what a lone globe
 * icon does.
 *
 * `dropdown` is used in the header, `inline` inside the mobile sheet, where a
 * row of three pills is clearer than a nested overlay.
 */
export default function LanguageSwitcher({
  locale,
  variant = "dropdown",
}: {
  locale: Locale;
  variant?: "dropdown" | "inline";
}) {
  const pathname = usePathname();
  const d = getDictionary(locale);
  // The menu is open only on the route where it was opened: navigating away
  // closes it, which is derived during render rather than by an effect.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const [locationSuffix, setLocationSuffix] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // The query string and hash only exist in the browser. They are carried over
  // when the same route is opened in another language, and tracking them in
  // state keeps `useSearchParams` out of the tree (it would opt every page out
  // of static rendering).
  useEffect(() => {
    const syncLocation = () =>
      setLocationSuffix(`${window.location.search}${window.location.hash}`);
    syncLocation();
    window.addEventListener("hashchange", syncLocation);
    return () => window.removeEventListener("hashchange", syncLocation);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenAt(null);
    };
    const handlePointerDown = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenAt(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [open]);

  // `/ru/projects/lifeos` → `/projects/lifeos`, so the same page opens in the
  // requested language instead of dropping the visitor on the home page.
  const segments = pathname.split("/").filter(Boolean);
  const routeSegments = segments[0] && isLocale(segments[0]) ? segments.slice(1) : segments;
  const currentRoute = routeSegments.length ? `/${routeSegments.join("/")}` : "/";
  const hrefFor = (target: Locale) => `${localePath(currentRoute, target)}${locationSuffix}`;

  if (variant === "inline") {
    return (
      <div className="space-y-2">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
          {d.nav.language}
        </p>
        <div className="flex flex-wrap gap-2">
          {locales.map((item) => (
            <SheetClose asChild key={item}>
              <Link
                href={hrefFor(item)}
                aria-current={item === locale ? "true" : undefined}
                lang={item}
                className={clsx(
                  "inline-flex items-center gap-2 rounded-[var(--radius)] border px-3 py-1.5 font-mono text-xs transition-colors",
                  item === locale
                    ? "border-accent text-ink"
                    : "border-line text-muted hover:border-accent/50 hover:text-ink"
                )}
              >
                {localeNames[item]}
                <span className="text-[10px] uppercase text-muted">{item}</span>
              </Link>
            </SheetClose>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpenAt(open ? null : pathname)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="language-menu"
        aria-label={`${d.nav.languageSwitch}: ${localeNames[locale]}`}
        title={d.nav.languageSwitch}
        className="inline-flex h-8 items-center gap-1 rounded px-1.5 font-mono text-xs tracking-wider text-muted hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        <Globe size={17} aria-hidden="true" />
        <span className="uppercase" aria-hidden="true">{locale}</span>
        <ChevronDown
          size={12}
          aria-hidden="true"
          className={clsx("transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {open && (
        <div
          id="language-menu"
          role="menu"
          aria-label={d.nav.language}
          className="absolute right-0 top-full z-50 mt-2 w-44 rounded-[var(--radius)] border border-line bg-bg-elevated p-1 shadow-lg"
        >
          <p className="px-3 pb-1 pt-1.5 font-mono text-[10px] uppercase tracking-widest text-muted">
            {d.nav.language}
          </p>
          {locales.map((item) => (
            <Link
              key={item}
              href={hrefFor(item)}
              role="menuitem"
              lang={item}
              onClick={() => setOpenAt(null)}
              aria-current={item === locale ? "true" : undefined}
              className={clsx(
                "flex items-center justify-between gap-3 rounded px-3 py-2 text-sm transition-colors",
                item === locale
                  ? "bg-bg text-ink"
                  : "text-muted hover:bg-bg hover:text-ink"
              )}
            >
              <span>{localeNames[item]}</span>
              {item === locale ? (
                <Check size={14} className="text-accent" aria-hidden="true" />
              ) : (
                <span className="font-mono text-[10px] uppercase text-muted" aria-hidden="true">
                  {item}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
