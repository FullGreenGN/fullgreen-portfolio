import { getTranslations } from "next-intl/server";

type Fact = { title: string; subtitle: string };
type Action = { label: string; href: string };

export async function About() {
  const t = await getTranslations("About");
  const facts = t.raw("facts") as Fact[];
  const actions = t.raw("actions") as Action[];

  return (
    <section id="about" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Séparateur avec le hero */}
        <div className="mb-16 h-px w-full bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Colonne gauche : label + infos clés */}
          <div className="md:col-span-4">
            <p className="mb-12 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              {t("label")}
            </p>

            {facts.map((fact) => (
              <div
                key={fact.title}
                className="mb-8 space-y-1 border-l-2 border-foreground pl-4"
              >
                <p className="font-display text-2xl font-bold text-foreground">
                  {fact.title}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {fact.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Colonne droite : texte + actions */}
          <div className="md:col-span-8">
            <p className="mb-8 text-2xl leading-relaxed font-medium text-zinc-800 md:text-3xl dark:text-zinc-200">
              {t("intro")}
            </p>

            <div className="mb-8 w-16 border-t border-black/[.08] dark:border-white/[.10]" />

            <p className="mb-8 leading-relaxed text-base text-zinc-600 dark:text-zinc-400">
              {t("details")}
            </p>

            <div className="flex gap-8 text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              {actions.map((action) => (
                <a
                  key={action.href}
                  href={action.href}
                  className="transition-colors hover:text-foreground"
                >
                  {action.label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
