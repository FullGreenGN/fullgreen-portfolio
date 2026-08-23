"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { type Project, projects } from "@/config/projects";
import { siteConfig } from "@/config/site";

const FILTERS = ["Tout", ...new Set(projects.flatMap((p) => p.tags))];

const easeOut = [0.16, 1, 0.3, 1] as const;

function TagBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-emerald-600/40 px-3 py-1 text-xs text-emerald-700 dark:border-emerald-800 dark:text-emerald-400">
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

function TeamBadge({ name }: { name: string }) {
  return (
    <span className="rounded-full border border-indigo-600/30 bg-indigo-100/50 px-3 py-1 text-xs text-indigo-900 dark:border-indigo-800/60 dark:bg-indigo-950/40 dark:text-indigo-300">
      {name}
    </span>
  );
}

function ProjectRow({
  project,
  isOpen,
  onToggle,
}: {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <li className="border-b border-foreground/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${project.id}-details`}
        className="-mx-4 flex w-[calc(100%+2rem)] cursor-pointer items-center justify-between gap-4 px-4 py-6 text-left transition-colors hover:bg-foreground/[.03]"
      >
        <span className="flex min-w-0 items-center gap-3">
          {project.featured && (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 shrink-0 text-amber-500"
            >
              <path d="M12 2l2.94 6.32 6.91.8-5.11 4.72 1.37 6.83L12 17.25l-6.11 3.42 1.37-6.83L2.15 9.12l6.91-.8L12 2z" />
            </svg>
          )}
          <span className="truncate font-display text-2xl font-black uppercase md:text-3xl">
            {project.title}
          </span>
        </span>

        <span className="hidden shrink-0 text-sm text-zinc-500 sm:block">
          {project.period}
        </span>

        <span className="flex shrink-0 flex-wrap items-center justify-end gap-2">
          {project.tags.map((tag) => (
            <TagBadge key={tag} label={tag} />
          ))}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className={`size-4 text-zinc-500 transition-transform duration-300 dark:text-zinc-400 ${isOpen ? "rotate-45" : ""}`}
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={`${project.id}-details`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-8 pt-4 pb-8 md:grid-cols-2">
              <div>
                <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-foreground hover:underline"
                  >
                    Voir le projet ↗
                  </a>
                )}
                {project.team && project.team.length > 0 && (
                  <div className="mt-6">
                    <p className="mb-3 text-xs tracking-widest text-zinc-500 uppercase">
                      Équipe
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.team.map((member) => (
                        <TeamBadge key={member} name={member} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <p className="mb-3 text-xs tracking-widest text-zinc-500 uppercase">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <StackChip key={tech} label={tech} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function ProjectList() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("Tout");

  const visibleProjects =
    activeFilter === "Tout"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24">
        {/* Filtres */}
        <div className="mb-8 flex gap-x-6 overflow-x-auto border-b border-foreground/15">
          {FILTERS.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`relative cursor-pointer pb-4 whitespace-nowrap text-sm font-semibold transition-colors ${isActive ? "text-foreground" : "text-zinc-500 hover:text-foreground dark:text-zinc-400"}`}
              >
                {filter}
                {isActive && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-foreground" />
                )}
              </button>
            );
          })}
        </div>

        {/* Liste des projets */}
        <ul>
          {visibleProjects.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              isOpen={expandedId === project.id}
              onToggle={() =>
                setExpandedId(expandedId === project.id ? null : project.id)
              }
            />
          ))}
        </ul>

        {/* Bloc Open Source */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-black uppercase md:text-3xl">
            Open Source
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Plus de projets disponibles sur GitHub
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              GitHub ↗
            </a>
            <a
              href="/#contact"
              className="rounded-full border border-black/[.15] px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background dark:border-white/[.2]"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
