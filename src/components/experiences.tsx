import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import {
  certifications,
  type Experience,
  experiences,
} from "@/config/experiences";

function TypeBadges({ experience }: { experience: Experience }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {experience.type.map((label) => (
        <span
          key={label.fr}
          className="rounded-full border border-black/[.08] bg-black/[.04] px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700/50 dark:bg-zinc-800/60 dark:text-zinc-300"
        >
          {label.en === "Ongoing" || label.fr === "En cours" ? (
            <span className="mr-2 inline-flex translate-y-px items-center">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
            </span>
          ) : null}
          {label.en}
        </span>
      ))}
    </div>
  );
}

export async function Experiences() {
  const t = await getTranslations("Experiences");
  const locale = await getLocale();

  const sorted = [...experiences].sort((a, b) =>
    b.startDate.localeCompare(a.startDate),
  );
  const featured = sorted.find((experience) => experience.current) ?? sorted[0];
  const rest = sorted
    .filter((experience) => experience.id !== featured.id)
    .slice(0, 1);

  const pick = (text: { fr: string; en: string }) =>
    locale === "en" ? text.en : text.fr;

  return (
    <section id="experiences" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* En-tête de section */}
        <p className="mb-2 text-center font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          {t("overline")}
        </p>
        <h2 className="mb-16 text-center font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Carte principale (expérience courante) */}
          <article className="rounded-2xl border border-black/[.08] bg-gradient-to-br from-indigo-100/60 via-transparent to-indigo-200/30 p-8 lg:col-span-7 dark:border-white/[.08] dark:from-zinc-900/90 dark:via-zinc-900/50 dark:to-indigo-950/30">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <TypeBadges experience={featured} />
              <span className="font-mono text-sm text-zinc-500">
                {pick(featured.period)}
              </span>
            </div>

            <h3 className="mt-6 font-display text-2xl font-bold text-foreground md:text-3xl">
              {pick(featured.title)}
            </h3>
            <p className="mt-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              {featured.company}
              <span className="font-normal text-zinc-500">
                {" "}
                · {pick(featured.location)}
              </span>
            </p>

            <p className="mt-5 leading-relaxed text-zinc-600 dark:text-zinc-400">
              {pick(featured.description)}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {featured.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-black/[.08] bg-black/[.04] px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700/50 dark:bg-zinc-800/60 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>

          {/* Colonne droite : autres expériences + résumé */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {rest.map((experience) => (
              <article
                key={experience.id}
                className="rounded-2xl border border-black/[.08] bg-surface p-6 transition-colors hover:border-black/[.16] dark:border-white/[.08] dark:bg-zinc-900/60 dark:hover:border-white/[.16]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <TypeBadges experience={experience} />
                  <span className="font-mono text-xs text-zinc-500">
                    {pick(experience.period)}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {pick(experience.title)}
                </h3>
                <p className="mt-0.5 text-sm text-zinc-500">
                  {experience.company} · {pick(experience.location)}
                </p>
              </article>
            ))}

            <Link
              href="/experiences"
              className="group mt-auto flex flex-col rounded-2xl border border-dashed border-black/[.15] p-6 transition-colors hover:border-foreground dark:border-white/[.15] dark:hover:border-foreground"
            >
              <span className="font-display text-3xl font-bold text-foreground">
                {t("experienceCount", { count: experiences.length })}
              </span>
              <span className="flex items-center justify-between pt-3 text-sm font-semibold text-zinc-600 dark:text-zinc-400 dark:hover:text-foreground">
                {t("viewAll")}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              {t("certifications")}
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((certification) => (
                <a
                  key={certification.id}
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-black/[.08] bg-surface p-6 transition-colors hover:border-black/[.16] dark:border-white/[.08] dark:bg-zinc-900/60 dark:hover:border-white/[.16]"
                >
                  <div>
                    <p className="font-display font-bold text-foreground">
                      {pick(certification.title)}
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">
                      {certification.organization} · {pick(certification.date)}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-zinc-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
