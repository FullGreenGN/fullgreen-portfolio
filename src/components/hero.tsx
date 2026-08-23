"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const MARQUEE_ITEMS = Array.from({ length: 8 }, (_, i) => i);

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="relative flex min-h-[calc(100svh-3.5rem)] flex-col items-center justify-center overflow-hidden px-6">
      {/* 1. Lumière de fond subtile */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-20 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-foreground/[.06] blur-[120px]" />

      {/* 2. Titre principal */}
      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="flex flex-row items-baseline gap-x-3 whitespace-nowrap text-center font-display text-[clamp(2.25rem,6vw,5rem)] font-bold uppercase tracking-tighter text-foreground md:gap-x-4"
      >
        <span>Jean-Luc</span>
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: "2px var(--foreground)" }}
        >
          Oudart-Sintes
        </span>
      </motion.h1>

      {/* 3. Marquee sous le nom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: easeOut }}
        className="pointer-events-none -mx-6 mt-8 w-[calc(100%+3rem)] select-none overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee font-mono text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500 md:text-base dark:text-zinc-400">
          {MARQUEE_ITEMS.map((item) => (
            <span key={item} className="shrink-0 pr-10">
              {t("marquee")}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 4. Boutons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.8, ease: easeOut }}
        className="mt-12 flex flex-col gap-4 sm:flex-row"
      >
        <motion.a
          href="#about"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-lg shadow-black/[.08] dark:shadow-black/40"
        >
          {t("ctaProfile")}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.a>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="group inline-flex items-center justify-center gap-2 rounded-full border border-black/[.15] bg-background/60 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-foreground hover:text-background dark:border-white/[.2]"
        >
          {t("ctaProjects")}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </motion.a>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1], y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.8 },
          y: { delay: 1, duration: 1.6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-400"
        aria-hidden="true"
      >
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
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
