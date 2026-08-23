export function AchievementsHero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-16 text-left">
        <p className="mb-4 font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase">
          PORTFOLIO & PROJETS
        </p>
        <h1 className="flex items-center text-5xl font-black tracking-tight whitespace-nowrap uppercase md:text-7xl lg:text-[7rem]">
          <span className="text-foreground">RÉALI</span>
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px var(--foreground)" }}
          >
            SATIONS
          </span>
        </h1>
        <p className="mt-8 text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
          Mes principaux projets et contributions.
        </p>
      </div>

      {/* Séparateur avec le contenu */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
    </section>
  );
}
