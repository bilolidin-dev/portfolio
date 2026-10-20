import { existsSync } from "node:fs";
import { join } from "node:path";
import { cn } from "@/lib/utils";

/** Drop a 4:5 portrait here; until it exists a monogram is rendered instead. */
const PORTRAIT_PATH = "/brand/portrait.jpg";

// Checked once at build time: the site is a static export, so this decides
// what ends up in the HTML.
const hasPortrait = existsSync(join(process.cwd(), "public", PORTRAIT_PATH));

export function Portrait({
  alt,
  variant = "card",
  className,
}: {
  alt: string;
  variant?: "card" | "avatar";
  className?: string;
}) {
  const shape =
    variant === "avatar"
      ? "aspect-square rounded-full"
      : "aspect-[4/5] rounded-[28px]";

  return (
    <div
      className={cn(
        "relative overflow-hidden border border-line bg-bg-elevated",
        shape,
        className
      )}
    >
      {hasPortrait ? (
        // eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer
        <img
          src={PORTRAIT_PATH}
          alt={alt}
          width={1200}
          height={1500}
          className={cn(
            "h-full w-full object-cover",
            // The face sits in the upper third of the 4:5 original, so the
            // round avatar zooms in on it instead of showing the suit.
            variant === "avatar"
              ? "origin-[50%_30%] scale-[1.7] object-[50%_22%]"
              : "object-[50%_30%]"
          )}
          loading={variant === "avatar" ? "eager" : "lazy"}
          decoding="async"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full items-center justify-center bg-[radial-gradient(120%_80%_at_30%_0%,var(--surface-tint),transparent_70%)]"
        >
          <span
            className={cn(
              "font-semibold tracking-tighter text-ink",
              variant === "avatar" ? "text-base" : "text-[9rem] leading-none"
            )}
          >
            B
          </span>
        </div>
      )}
    </div>
  );
}
