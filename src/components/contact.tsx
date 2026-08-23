import { siteConfig } from "@/config/site";

const EMAIL = "jeanluc.o@proton.me";

const SOCIAL_LINK_CLASSES =
  "inline-flex items-center gap-2 transition-colors hover:text-foreground";

export function Contact() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-background px-6 py-32">
      <p className="mb-4 font-mono text-xs tracking-[0.2em] text-zinc-500 uppercase">
        PRENONS CONTACT
      </p>
      <h2 className="mb-8 text-center font-display text-5xl font-black tracking-tight text-foreground uppercase md:text-7xl">
        CONTACT
      </h2>

      <a
        href={`mailto:${EMAIL}`}
        className="relative mb-24 cursor-pointer text-3xl font-bold break-all text-foreground transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 md:text-5xl lg:text-6xl dark:hover:text-zinc-400"
      >
        {EMAIL}
      </a>

      <div className="mb-8 w-full max-w-4xl border-t border-foreground/10" />

      <div className="flex w-full max-w-4xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className={SOCIAL_LINK_CLASSES}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className={SOCIAL_LINK_CLASSES}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <span>Perpignan, France</span>
        </div>

        <a
          href="/CV_Jean-Luc_O.pdf"
          download
          className="flex items-center gap-2 rounded-full border border-black/[.15] px-5 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-foreground hover:text-background dark:border-white/[.15] dark:text-zinc-300"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
            <path d="M5 21h14" />
          </svg>
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
}
