import { Section } from "@/components/brand/primitives";
import { Reveal } from "@/components/ui/reveal";
import type { UiDictionary } from "@/i18n";

export function Process({ d }: { d: UiDictionary }) {
  return (
    <Section id="process" index="03" label={d.process.label} title={d.process.title} stacked>
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {d.process.steps.map((step, i) => (
          <li key={step.title} className="bg-bg">
            <Reveal delay={i * 80} className="h-full">
              <div className="flex h-full flex-col gap-6 p-6">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
