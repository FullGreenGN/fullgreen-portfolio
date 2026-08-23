export function ExperiencesHero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-16 text-left">
        <p className="mb-4 font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase">
          PARCOURS PROFESSIONNEL
        </p>
        <h1 className="mb-6 flex items-center text-5xl font-black tracking-tight whitespace-nowrap uppercase md:text-7xl lg:text-[7rem]">
          <span className="text-foreground">EXPÉ</span>
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px var(--foreground)" }}
          >
            RIENCES
          </span>
        </h1>
        <p className="text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
          Mon parcours professionnel et mes expériences en entreprise.
        </p>
      </div>
    </section>
  );
}
