"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import ThemeToggle from "@/components/layout/ThemeToggle";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { contact } from "@/data/contact";
import { getDictionary } from "@/i18n";
import { localeFromPathname, localePath } from "@/i18n/config";

export default function Navbar() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const d = getDictionary(locale);
  const homePath = localePath("/", locale);
  const navLinks = [
    { href: `${homePath}#services`, label: d.nav.services },
    { href: `${homePath}#process`, label: d.nav.process },
    { href: `${homePath}#about`, label: d.nav.about },
    { href: `${homePath}#contact`, label: d.nav.contact },
  ] as const;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 border-b border-line transition-all duration-300 ease-out",
        "bg-bg/70 backdrop-blur-md",
        scrolled && "bg-bg/90 backdrop-blur-lg shadow-[0_1px_0_var(--line)]"
      )}
      role="banner"
    >
      <nav className="mx-auto max-w-7xl px-4 md:px-6" aria-label={d.aria.mainNav}>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Wordmark */}
          <Link
            href={homePath}
            className="text-[15px] font-semibold tracking-tight text-ink hover:opacity-80 transition-opacity"
            aria-label={d.nav.home}
          >
            bilolidin<span className="text-muted">.dev</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm transition-colors relative",
                  isActive(link.href)
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
                {isActive(link.href) && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-accent"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right side: CTA + ThemeToggle */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a
              href={contact.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex h-9 items-center rounded-full bg-ink px-4 text-xs font-semibold text-bg transition-opacity hover:opacity-90"
            >
              {d.buttons.discuss}
            </a>

            <LanguageSwitcher locale={locale} />
            <ThemeToggle className="h-8 w-8" />

            {/* Mobile menu trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="md:hidden inline-flex h-10 w-10 items-center justify-center text-muted hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  aria-label={mobileMenuOpen ? d.nav.closeMenu : d.nav.openMenu}
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-navigation"
                >
                  {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-sm p-6">
                <div className="flex flex-col gap-6">
                  <nav id="mobile-navigation" className="flex flex-col gap-4" aria-label={d.aria.mobileNav}>
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={clsx(
                            "text-2xl font-semibold tracking-tight transition-colors",
                            isActive(link.href) ? "text-ink" : "text-muted hover:text-ink"
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-4 pt-4 border-t border-line">
                    <LanguageSwitcher locale={locale} variant="inline" />
                    <div className="flex items-center justify-between gap-4">
                      <ThemeToggle className="h-10 w-10 text-muted" />
                      <SheetClose asChild>
                        <a
                          href={contact.telegram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-bg"
                        >
                          {d.buttons.discuss}
                        </a>
                      </SheetClose>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}