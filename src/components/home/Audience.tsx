import { Section } from "@/components/brand/primitives";
import { Reveal } from "@/components/ui/reveal";
import type { UiDictionary } from "@/i18n";

export function Audience({ d }: { d: UiDictionary }) {
  return (
    <Section id="audience" index="05" label={d.audience.label} title={d.audience.title}>
      <ul className="grid gap-10 sm:grid-cols-3 sm:gap-8">
        {d.audience.items.map((item, i) => (
          <li key={item.title}>
            <Reveal delay={i * 80} className="space-y-3 border-t-2 border-ink pt-5">
              <h3 className="text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="leading-relaxed text-muted">{item.description}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
