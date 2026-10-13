import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { contact } from "@/data/contact";
import { getDictionary, type UiDictionary } from "@/i18n";

/**
 * Ways to work together. Texts live in the i18n dictionaries (`home.collabTitle`
 * and the `collab` array), so all three locales stay in sync.
 */
export function HomeCollab({ dictionary }: { dictionary?: UiDictionary }) {
  const d = dictionary ?? getDictionary();
  return (
    <section className="mt-24 md:mt-32" id="collab" aria-labelledby="collab-heading">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <Reveal>
          <h2 id="collab-heading" className="font-mono text-xs tracking-widest text-muted uppercase">
            {d.home.collabTitle}
          </h2>
        </Reveal>
        <div className="mt-8 md:mt-12 grid md:grid-cols-3 gap-6">
          {d.collab.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="h-full">
              <article className="h-full bg-bg-elevated border border-line rounded-[var(--radius)] p-6 hover:border-accent/50 transition-colors duration-300">
                <h3 className="font-sans font-semibold text-ink text-lg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="shadow-none font-bold">
            <a
              href={contact.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Send size={18} aria-hidden="true" />
              {d.buttons.telegram}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
