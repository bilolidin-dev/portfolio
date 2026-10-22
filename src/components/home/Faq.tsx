import { Section } from "@/components/brand/primitives";
import { Reveal } from "@/components/ui/reveal";
import type { UiDictionary } from "@/i18n";

/**
 * Native `<details>` items: the answers are in the HTML whether or not the
 * visitor expands them, so search engines and LLM crawlers read the full copy.
 */
export function Faq({ d }: { d: UiDictionary }) {
  return (
    <Section id="faq" index="06" label={d.faq.label} title={d.faq.title}>
      <ul className="divide-y divide-line border-y border-line">
        {d.faq.items.map((item, i) => (
          <li key={item.question}>
            <Reveal delay={i * 40}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium text-ink [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 font-mono text-xl leading-none text-muted transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">{item.answer}</p>
              </details>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
