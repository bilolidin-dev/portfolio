import { Github, Instagram, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, mailtoHref } from "@/data/contact";
import { getDictionary, type UiDictionary } from "@/i18n";

export function HomeContact({ dictionary }: { dictionary?: UiDictionary }) {
  const d = dictionary ?? getDictionary();
  return (
    <section className="mt-24 md:mt-32 relative" id="contact" aria-labelledby="contact-heading">
      <div className="absolute inset-0 glow-surface pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
        <h2 id="contact-heading" className="font-sans font-bold text-ink text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
          {d.home.contactTitle}
        </h2>
        <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed whitespace-pre-line">
          {d.home.contactDescription}
        </p>
        {/* Primary ways to reach out first, social profiles after. */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
          <Button asChild variant="outline" size="lg" className="font-bold">
            <a
              href={mailtoHref}
              className="flex items-center gap-2"
            >
              <Mail size={18} aria-hidden="true" />
              {contact.email}
            </a>
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent transition-colors"
          >
            <Instagram size={16} aria-hidden="true" />
            Instagram
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent transition-colors"
          >
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
