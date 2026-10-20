import { Section } from "@/components/brand/primitives";
import { Reveal } from "@/components/ui/reveal";
import type { UiDictionary } from "@/i18n";

export function Services({ d }: { d: UiDictionary }) {
  return (
    <Section id="services" index="02" label={d.services.label} title={d.services.title}>
      <ol className="divide-y divide-line border-y border-line">
        {d.services.items.map((item, i) => (
          <li key={item.title}>
            <Reveal delay={i * 60}>
              <div className="grid gap-2 py-6 sm:grid-cols-[3rem_minmax(0,14rem)_minmax(0,1fr)] sm:gap-6 md:py-7">
                <span className="font-mono text-xs text-muted sm:pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="leading-relaxed text-muted sm:pt-0.5">{item.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
