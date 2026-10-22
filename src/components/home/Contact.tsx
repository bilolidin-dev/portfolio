import { PrimaryButton } from "@/components/brand/primitives";
import { channels, primaryChannel } from "@/data/contact";
import type { UiDictionary } from "@/i18n";

export function Contact({ d }: { d: UiDictionary }) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-line py-24 md:py-36"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        <span className="text-accent">07</span> — {d.contact.label}
      </p>
      <h2
        id="contact-heading"
        className="mt-6 max-w-4xl text-5xl font-semibold leading-[1] tracking-[-0.035em] text-ink md:text-7xl"
      >
        {d.contact.title}
      </h2>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{d.contact.description}</p>

      <PrimaryButton
        href={primaryChannel.href}
        external={primaryChannel.external}
        className="mt-10 h-14 pl-7 pr-6 text-base"
      >
        {d.buttons.discuss}
      </PrimaryButton>

      <p className="mt-14 text-sm text-muted">{d.contact.channels}</p>
      <ul className="mt-4 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
        {channels.map((channel) => (
          <li key={channel.id}>
            <a
              href={channel.href}
              {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-12 items-center gap-3 rounded-full border border-line px-5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              <channel.icon size={16} aria-hidden="true" />
              {channel.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
