import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { alternatesFor, socialMetadata } from "@/i18n/metadata";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { About } from "@/components/home/About";
import { Audience } from "@/components/home/Audience";
import { Contact } from "@/components/home/Contact";

export function getMetadata(locale: Locale): Metadata {
  const d = getDictionary(locale);
  // `absolute` bypasses the "%s — Bilolidin" template, which would otherwise
  // append the site name a second time.
  return {
    title: { absolute: d.meta.title },
    description: d.meta.description,
    alternates: alternatesFor("/", locale),
    ...socialMetadata("/", locale, d.meta.title, d.meta.description),
  };
}

export default function HomeView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 md:px-8">
      <Hero d={d} />
      <Services d={d} />
      <Process d={d} />
      <About d={d} />
      <Audience d={d} />
      <Contact d={d} />
    </div>
  );
}
