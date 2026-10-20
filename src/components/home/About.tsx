import { MapPin } from "lucide-react";
import { Portrait } from "@/components/brand/Portrait";
import { Section } from "@/components/brand/primitives";
import { Reveal } from "@/components/ui/reveal";
import type { UiDictionary } from "@/i18n";

export function About({ d }: { d: UiDictionary }) {
  return (
    <Section id="about" index="04" label={d.about.label} title={d.about.title} stacked>
      <div className="grid gap-10 md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] md:gap-16 lg:gap-24">
        <Reveal>
          <Portrait alt={d.aria.portrait} className="w-full max-w-xs" />
          <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-muted">
            <MapPin size={14} aria-hidden="true" />
            {d.about.location}
          </p>
        </Reveal>

        <Reveal delay={100} className="md:pt-2">
          <p className="max-w-2xl text-2xl font-medium md:text-3xl leading-snug tracking-tight text-ink">
            {d.about.lead}
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{d.about.body}</p>

          <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {d.about.values.map((value) => (
              <div key={value.title} className="space-y-1.5">
                <dt className="font-semibold text-ink">{value.title}</dt>
                <dd className="text-sm leading-relaxed text-muted">{value.description}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
