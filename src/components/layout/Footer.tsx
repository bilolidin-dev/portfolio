import { channels } from "@/data/contact";
import { getDictionary } from "@/i18n";
import { defaultLocale, type Locale } from "@/i18n/config";

export default function Footer({ locale = defaultLocale }: { locale?: Locale }) {
  const d = getDictionary(locale);
  return (
    <footer className="border-t border-line" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="space-y-1">
          <p className="text-[15px] font-semibold tracking-tight text-ink">
            bilolidin<span className="text-muted">.dev</span>
          </p>
          <p className="text-sm text-muted">
            Digital Product Developer · {d.footer.tagline}
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {channels.map((channel) => (
              <li key={channel.id}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  <channel.icon size={14} aria-hidden="true" />
                  {channel.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="font-mono text-xs text-muted">© {new Date().getFullYear()} Bilolidin</p>
        </div>
      </div>
    </footer>
  );
}
