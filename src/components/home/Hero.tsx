import { SiInstagram } from "react-icons/si";
import { Portrait } from "@/components/brand/Portrait";
import { PrimaryButton } from "@/components/brand/primitives";
import { contact, primaryChannel } from "@/data/contact";
import type { UiDictionary } from "@/i18n";

export function Hero({ d }: { d: UiDictionary }) {
  return (
    <section className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 md:py-24">
      {/* Mirrors the Instagram profile header: same face, same handle. */}
      <a
        href={contact.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex w-fit items-center gap-3 rounded-full border border-line bg-bg-elevated py-1.5 pl-1.5 pr-4 transition-colors hover:border-muted"
      >
        <Portrait alt="" variant="avatar" className="h-8 w-8" />
        <span className="font-mono text-xs text-muted transition-colors group-hover:text-ink">
          {contact.instagramHandle}
        </span>
      </a>

      <p className="mt-10 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        {d.hero.role}
      </p>

      <h1 className="mt-4 text-[clamp(4rem,15vw,10rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-ink">
        Bilolidin
      </h1>

      <p className="mt-8 max-w-3xl text-2xl font-medium leading-snug tracking-tight text-ink md:text-4xl">
        {d.hero.statement}
      </p>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        {d.hero.description}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <PrimaryButton href={primaryChannel.href} external>
          {d.buttons.discuss}
        </PrimaryButton>
        <a
          href={contact.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
        >
          <SiInstagram size={16} aria-hidden="true" />
          Instagram
        </a>
      </div>

      <p className="mt-16 max-w-md border-l border-accent pl-4 text-sm leading-relaxed text-muted">
        {d.hero.credibility}
      </p>
    </section>
  );
}
