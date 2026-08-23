import {
  type Certification,
  certifications,
  type Education,
  type Experience,
  educations,
  experiences,
} from "@/config/experiences";

type BadgeVariant = "violet" | "green" | "orange" | "neutral";

interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
  school?: string;
  badges: { label: string; variant: BadgeVariant }[];
  stack?: string[];
  link?: string;
  accent: "emerald" | "amber" | "zinc";
}

const DOT_COLORS = {
  emerald: "bg-emerald-500",
  amber: "bg-amber-500",
  zinc: "bg-zinc-400 dark:bg-zinc-600",
} as const;

const BADGE_VARIANTS: Record<BadgeVariant, string> = {
  violet:
    "border-indigo-600/30 bg-indigo-100/50 text-indigo-900 dark:border-indigo-800/60 dark:bg-indigo-950/40 dark:text-indigo-300",
  green:
    "border-emerald-600/40 text-emerald-700 dark:border-emerald-800 dark:text-emerald-400",
  orange:
    "border-amber-600/40 bg-amber-100/40 text-amber-800 dark:border-amber-700/50 dark:bg-amber-950/30 dark:text-amber-400",
  neutral:
    "border-black/[.08] text-zinc-500 dark:border-white/[.1] dark:text-zinc-400",
};

function badgeVariant(label: string): BadgeVariant {
  if (label === "Auto-entrepreneur") {
    return "violet";
  }
  if (label === "En cours") {
    return "green";
  }
  return "neutral";
}

const byStartDateDesc = (a: { startDate: string }, b: { startDate: string }) =>
  b.startDate.localeCompare(a.startDate);

function experienceToEntry(experience: Experience): TimelineEntry {
  return {
    id: experience.id,
    date: experience.period.fr,
    title: experience.company,
    subtitle: experience.title.fr,
    description: experience.description.fr,
    badges: experience.type.map((type) => ({
      label: type.fr,
      variant: badgeVariant(type.fr),
    })),
    stack: experience.skills,
    link: experience.link,
    accent: experience.current ? "emerald" : "zinc",
  };
}

function educationToEntry(education: Education): TimelineEntry {
  return {
    id: education.id,
    date: education.period.fr,
    title: education.degree.fr,
    subtitle: education.description.fr,
    school: `${education.school} - ${education.location.fr}`,
    badges: [
      {
        label: education.status.fr,
        variant: education.current ? "orange" : "green",
      },
    ],
    accent: education.current ? "amber" : "zinc",
  };
}

const experienceEntries = [...experiences]
  .sort(
    (a, b) =>
      Number(Boolean(b.current)) - Number(Boolean(a.current)) ||
      byStartDateDesc(a, b),
  )
  .map(experienceToEntry);

const educationEntries = [...educations]
  .sort(byStartDateDesc)
  .map(educationToEntry);

function Badge({ badge }: { badge: TimelineEntry["badges"][number] }) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs ${BADGE_VARIANTS[badge.variant]}`}
    >
      {badge.label}
    </span>
  );
}

function StackChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-black/[.08] bg-black/[.04] px-3 py-1.5 text-xs text-zinc-600 dark:border-zinc-700/50 dark:bg-zinc-800/60 dark:text-zinc-300">
      {label}
    </span>
  );
}

function TimelineItem({ item }: { item: TimelineEntry }) {
  return (
    <div className="relative mb-16 flex flex-col gap-4 pl-8 md:flex-row md:gap-0 md:pl-0">
      {/* Point sur la ligne */}
      <span
        aria-hidden="true"
        className={`absolute top-1.5 left-0 z-10 size-3 -translate-x-1/2 rounded-full ring-4 ring-background md:left-1/4 ${DOT_COLORS[item.accent]}`}
      />

      {/* Date + badges */}
      <div className="shrink-0 md:w-1/4 md:pr-10 md:text-right">
        <p className="font-mono text-sm text-zinc-500">{item.date}</p>
        <div className="mt-2 flex flex-wrap gap-2 md:justify-end">
          {item.badges.map((badge) => (
            <Badge key={badge.label} badge={badge} />
          ))}
        </div>
      </div>

      {/* Contenu */}
      <div className="md:w-3/4 md:pl-10">
        <div className="rounded-2xl p-5 transition-colors hover:bg-foreground/[.03]">
          <h3 className="font-display text-3xl font-black uppercase text-foreground">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="mt-1 font-medium text-zinc-700 dark:text-zinc-300">
              {item.subtitle}
            </p>
          )}
          {item.subtitle && (
            <div className="my-4 w-12 border-t border-foreground/20" />
          )}
          {item.description && (
            <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
          )}
          {item.school && (
            <p className="text-sm text-zinc-500">{item.school}</p>
          )}
          {item.stack && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <StackChip key={tech} label={tech} />
              ))}
            </div>
          )}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-foreground hover:underline"
            >
              Site web ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <a
      href={certification.link}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col rounded-2xl border border-black/[.08] bg-surface p-6 transition-colors hover:border-black/[.16] dark:border-white/[.08] dark:bg-zinc-900/60 dark:hover:border-white/[.16]"
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className={`rounded-full border px-3 py-1 text-xs ${BADGE_VARIANTS[certification.status.fr === "En cours" ? "orange" : "green"]}`}
        >
          {certification.status.fr}
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4 shrink-0 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
        >
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      </div>

      <h3 className="mt-4 font-display text-xl font-black uppercase text-foreground">
        {certification.title.fr}
      </h3>
      <div className="my-3 w-12 border-t border-foreground/20" />
      <p className="font-medium text-zinc-700 dark:text-zinc-300">
        {certification.organization}
      </p>
      <p className="mt-auto pt-4 font-mono text-xs text-zinc-500">
        {certification.date.fr}
      </p>
    </a>
  );
}

export function ExperienceTimeline() {
  return (
    <section className="bg-background">
      <div className="mx-auto mt-24 max-w-4xl px-6 pb-32">
        <div className="relative">
          {/* Ligne verticale */}
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-px bg-foreground/10 md:left-1/4"
          />

          {experienceEntries.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}

          {/* Titre FORMATION au milieu de la ligne */}
          <div className="relative mb-16 flex flex-col gap-4 pl-8 md:flex-row md:items-center md:gap-0 md:pl-0">
            <div className="hidden md:block md:w-1/4" />
            <h2 className="flex items-center gap-x-3 text-5xl font-black tracking-tight whitespace-nowrap uppercase md:pl-10 md:text-7xl">
              <span className="text-foreground">FOR</span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "2px var(--foreground)" }}
              >
                MATION
              </span>
            </h2>
          </div>

          {educationEntries.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-32">
          <h2 className="mb-16 flex justify-center text-center font-display text-4xl font-black tracking-tight whitespace-nowrap uppercase md:text-6xl">
            <span className="text-foreground">CERTIFI</span>
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px var(--foreground)" }}
            >
              CATIONS
            </span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {certifications.map((certification) => (
              <CertificationCard
                key={certification.id}
                certification={certification}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
