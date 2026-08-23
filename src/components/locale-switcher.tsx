"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { setLocale } from "@/i18n/actions";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const activeLocale = useLocale();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={t("label")}
        aria-haspopup="menu"
        aria-expanded={open}
        disabled={isPending}
        onClick={() => setOpen((value) => !value)}
        className="flex h-8 cursor-pointer items-center gap-1 rounded-full px-2.5 text-sm font-medium text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-foreground"
      >
        {activeLocale.toUpperCase()}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`size-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-[calc(100%+0.5rem)] right-0 z-10 min-w-[5.5rem] rounded-xl border border-black/[.08] bg-background/95 p-1 shadow-lg shadow-black/[.06] backdrop-blur-md dark:border-white/[.145] dark:shadow-black/30">
          {routing.locales
            .filter((locale) => locale !== activeLocale)
            .map((locale) => (
              <button
                key={locale}
                type="button"
                disabled={isPending}
                onClick={() => {
                  setOpen(false);
                  startTransition(() => {
                    setLocale(locale);
                  });
                }}
                className="block w-full cursor-pointer rounded-lg px-3 py-1.5 text-left text-sm font-medium text-zinc-600 transition-colors hover:bg-black/[.04] hover:text-foreground dark:text-zinc-400 dark:hover:bg-white/[.08] dark:hover:text-foreground"
              >
                {locale.toUpperCase()}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
