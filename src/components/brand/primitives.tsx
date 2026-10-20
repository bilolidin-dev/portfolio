import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Section shell with the numbered mono label ("02 — What I do"). */
export function Section({
  id,
  index,
  label,
  title,
  children,
  className,
  stacked = false,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  /** Heading above the content instead of beside it, for wide content. */
  stacked?: boolean;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("border-t border-line py-20 md:py-28", className)}
    >
      <div
        className={cn(
          "grid gap-10",
          stacked ? "md:gap-14" : "md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16"
        )}
      >
        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span className="text-accent">{index}</span> — {label}
          </p>
          <h2
            id={`${id}-heading`}
            className="text-3xl font-semibold leading-[1.1] tracking-tight text-ink md:text-4xl"
          >
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

/** The one primary action on the page. */
export function PrimaryButton({
  href,
  children,
  external = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex h-12 items-center gap-3 rounded-full bg-ink pl-6 pr-5 text-sm font-semibold text-bg transition-opacity hover:opacity-90",
        className
      )}
    >
      {children}
      <ArrowRight
        size={16}
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-0.5"
      />
    </a>
  );
}
