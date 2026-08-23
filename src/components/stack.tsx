import type { Technology } from "@/config/stack";
import { technologies } from "@/config/stack";

const half = Math.ceil(technologies.length / 2);

/** Répétitions par moitié de piste : garantit une largeur > n'importe quel viewport */
const REPEATS = 4;

const rows = [
  { id: "row-1", items: technologies.slice(0, half), reverse: false },
  { id: "row-2", items: technologies.slice(half), reverse: true },
];

function TechIcon({ tech }: { tech: Technology }) {
  if (!tech.icon) {
    return (
      <span
        aria-hidden="true"
        className="flex size-4 shrink-0 items-center justify-center text-[10px] font-black"
      >
        {tech.name.charAt(0)}
      </span>
    );
  }
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4 shrink-0"
    >
      <path d={tech.icon.path} />
    </svg>
  );
}

function TechBadge({ tech }: { tech: Technology }) {
  const mastered =
    "border-indigo-500/40 bg-indigo-500/[.06] text-foreground shadow-[0_0_12px_rgba(99,102,241,0.12)]";
  const practiced =
    "border-black/[.08] bg-black/[.03] text-zinc-600 dark:border-white/[.08] dark:bg-zinc-900/50 dark:text-zinc-300";

  return (
    <div
      className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap ${tech.level === "mastered" ? mastered : practiced}`}
    >
      <TechIcon tech={tech} />
      {tech.name}
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: Technology[];
  reverse?: boolean;
}) {
  const sequence = Array.from({ length: REPEATS }, () => items).flat();

  return (
    <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div
        className={`flex w-max ${reverse ? "animate-marquee-stack-reverse" : "animate-marquee-stack"}`}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 gap-4 pr-4"
          >
            {sequence.map((tech, index) => (
              <TechBadge key={`${tech.name}-${index}`} tech={tech} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Stack() {
  return (
    <section className="bg-background">
      <div className="mb-24 w-full border-t border-foreground/10" />

      <div className="mx-auto max-w-7xl px-6 pb-6">
        <p className="mb-4 text-center font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase">
          STACK TECHNIQUE
        </p>
        <h2 className="mb-8 flex justify-center font-display text-5xl font-black tracking-tight text-foreground uppercase md:text-7xl">
          TECHNOS
        </h2>

        <div className="mb-16 flex items-center justify-center gap-6 text-xs text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-2">
            <span className="h-[2px] w-6 rounded-full bg-indigo-500" />
            Maîtrisé
          </span>
          <span className="flex items-center gap-2">
            <span className="h-[2px] w-6 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            Pratiqué
          </span>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 pb-24">
        {rows.map((row) => (
          <MarqueeRow key={row.id} items={row.items} reverse={row.reverse} />
        ))}
      </div>
    </section>
  );
}
