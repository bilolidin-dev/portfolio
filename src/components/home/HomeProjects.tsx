import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard, projectTier } from "@/components/project/ProjectCard";
import { localizeProjects, projects } from "@/data/projects";
import { Reveal } from "@/components/ui/reveal";
import { getDictionary, type UiDictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";

/**
 * Selected work on the home page. The data comes from `src/data/projects.ts`
 * only — the array order decides which project leads the section.
 */
export function HomeProjects({ locale, dictionary }: { locale: Locale; dictionary?: UiDictionary }) {
  const d = dictionary ?? getDictionary(locale);
  const featured = localizeProjects(projects, locale).filter(
    (project) => projectTier(project) === "secondary"
  );
  const [lead, ...rest] = featured;
  if (!lead) return null;

  return (
    <section className="mt-24 md:mt-32" id="work" aria-labelledby="work-heading">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 id="work-heading" className="font-mono text-xs tracking-widest text-muted uppercase">
              {d.home.featuredTitle}
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl leading-relaxed">
              {d.home.featuredDescription}
            </p>
          </div>
          <Button asChild variant="outline" size="sm" className="font-mono text-xs">
            <Link href={localePath("/projects", locale)}>
              {d.buttons.projects}
              <ArrowRight size={14} className="ml-1.5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Reveal>

      <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
        <Reveal>
          <ProjectCard project={lead} variant="selected" dictionary={d} />
        </Reveal>
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {rest.map((project, index) => (
              <Reveal key={project.id} delay={index * 80} className="h-full">
                <ProjectCard project={project} variant="standard" dictionary={d} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
