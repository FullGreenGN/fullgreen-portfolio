import { type Project, projects } from "@/config/projects";

const featuredProject = projects.find((project) => project.featured);
const secondaryProjects = projects.filter((project) => !project.featured);

function TagBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-emerald-600/40 px-3 py-1 text-xs text-emerald-700 dark:border-emerald-800 dark:text-emerald-400">
      {label}
    </span>
  );
}

function NeutralBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-black/[.08] px-3 py-1 text-xs text-zinc-500 dark:border-white/[.1] dark:text-zinc-400">
      {label}
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

const CARD_CLASSES =
  "rounded-2xl border border-black/[.08] bg-surface transition-colors hover:border-black/[.16] dark:border-white/[.08] dark:bg-zinc-900/60 dark:hover:border-white/[.16]";

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article
      className={`${CARD_CLASSES} flex flex-col justify-between gap-8 p-8 md:col-span-3 md:flex-row`}
    >
      <div>
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) =>
            tag === "Projet" ? (
              <TagBadge key={tag} label={tag} />
            ) : (
              <NeutralBadge key={tag} label={tag} />
            ),
          )}
        </div>
        <h3 className="mt-4 mb-4 font-display text-4xl font-black text-foreground">
          {project.title}
        </h3>
        <p className="max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-sm font-semibold text-foreground hover:underline"
          >
            Voir le projet ↗
          </a>
        )}
      </div>

      <div className="shrink-0 md:w-64">
        <p className="text-sm text-zinc-500 md:text-right">{project.period}</p>
        <p className="mt-8 mb-3 text-xs tracking-widest text-zinc-500 uppercase md:mt-0">
          Stack
        </p>
        <div className="flex flex-wrap gap-2 md:justify-end">
          {project.stack.map((tech) => (
            <StackChip key={tech} label={tech} />
          ))}
        </div>
      </div>
    </article>
  );
}

function SecondaryCard({ project }: { project: Project }) {
  return (
    <article
      className={`${CARD_CLASSES} flex flex-col justify-between p-6 md:col-span-1`}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag) =>
              tag === "Projet" ? (
                <TagBadge key={tag} label={tag} />
              ) : (
                <NeutralBadge key={tag} label={tag} />
              ),
            )}
          </div>
          <span className="shrink-0 text-sm text-zinc-500">
            {project.period}
          </span>
        </div>
        <h3 className="mt-4 mb-2 font-display text-2xl font-bold text-foreground">
          {project.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <StackChip key={tech} label={tech} />
        ))}
      </div>
    </article>
  );
}

export function HomeProjects() {
  return (
    <section id="projects" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-4 text-center font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase">
          PORTFOLIO & PROJETS
        </p>
        <h2 className="mb-16 flex items-center justify-center gap-x-3 text-5xl font-black tracking-tight whitespace-nowrap uppercase md:gap-x-4 md:text-7xl">
          <span className="text-foreground">MES</span>
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px var(--foreground)" }}
          >
            PROJETS
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredProject && <FeaturedCard project={featuredProject} />}
          {secondaryProjects.map((project) => (
            <SecondaryCard key={project.id} project={project} />
          ))}

          <a
            href="/achievements"
            className="group flex cursor-pointer items-center justify-between rounded-2xl border border-black/[.08] bg-surface p-6 transition-colors hover:bg-black/[.04] md:col-span-1 dark:border-white/[.08] dark:bg-zinc-900/60 dark:hover:bg-zinc-800/60"
          >
            <div>
              <p className="mb-1 text-xs font-semibold text-zinc-500 uppercase">
                {projects.length} projets
              </p>
              <p className="max-w-[150px] font-display text-xl font-bold text-foreground">
                Voir tous mes projets
              </p>
            </div>
            <span className="flex shrink-0 items-center justify-center rounded-full bg-black/[.05] p-3 text-foreground transition-colors group-hover:bg-foreground group-hover:text-background dark:bg-white/[.08]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
