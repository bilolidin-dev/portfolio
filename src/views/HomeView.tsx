import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { alternatesFor, socialMetadata } from "@/i18n/metadata";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeProjects } from "@/components/home/HomeProjects";
import { HomeCollab } from "@/components/home/HomeCollab";
import { HomeAbout } from "@/components/home/HomeAbout";
import { HomePrinciples } from "@/components/home/HomePrinciples";
import { HomeExperience } from "@/components/home/HomeExperience";
import { HomeStack } from "@/components/home/HomeStack";
import { HomeContact } from "@/components/home/HomeContact";

export function getMetadata(locale: Locale): Metadata {
  const d = getDictionary(locale);
  const title = `Bilolidin — ${d.home.heroTitle}`;
  // `absolute` bypasses the "%s — Bilolidin" template, which would otherwise
  // append the site name a second time.
  return { title: { absolute: title }, description: d.home.heroDescription, alternates: alternatesFor("/", locale), ...socialMetadata("/", locale, title, d.home.heroDescription) };
}

export default function HomeView({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pb-24 font-sans">
      <HomeHero dictionary={dictionary} />
      <HomeProjects locale={locale} dictionary={dictionary} />
      <HomeCollab dictionary={dictionary} />
      <HomeStack dictionary={dictionary} />
      <HomePrinciples dictionary={dictionary} />
      <HomeAbout dictionary={dictionary} />
      <HomeExperience dictionary={dictionary} />
      <HomeContact dictionary={dictionary} />
    </div>
  );
}
