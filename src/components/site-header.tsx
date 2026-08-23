"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/experiences", key: "experiences" },
  { href: "/achievements", key: "projects" },
  { href: "/#contact", key: "contact" },
] as const;

const CV_HREF = "/CV_Jean-Luc_O.pdf";

export function SiteHeader() {
  const t = useTranslations("Header");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-40 mx-auto w-[calc(100%-2rem)] max-w-4xl">
      <div className="flex h-14 items-center justify-between rounded-full border border-black/[.08] bg-background/80 pr-2 shadow-lg shadow-black/[.04] backdrop-blur-md dark:border-white/[.145] dark:shadow-black/20">
        <Link
          href="/"
          className="flex items-center gap-3 pl-4"
          onClick={() => setMenuOpen(false)}
        >
          <span
            aria-hidden="true"
            className="flex items-center justify-center text-foreground"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-6"
            >
              <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
            </svg>
          </span>
          <span className="text-xl font-black tracking-tight text-foreground uppercase">
            Jean-Luc
          </span>
        </Link>

        <nav
          aria-label={t("navigation")}
          className="hidden items-center gap-6 text-sm md:flex lg:gap-8"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="cursor-pointer font-medium text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400 dark:hover:text-foreground"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <LocaleSwitcher />
          <ThemeToggle />
          <a
            href={CV_HREF}
            download
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-bold text-background transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {t("cv")}
          </a>
          <button
            type="button"
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex size-10 cursor-pointer items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-black/[.04] md:hidden dark:text-zinc-400 dark:hover:bg-white/[.08]"
          >
            {menuOpen ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="size-4"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="size-4"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label={t("navigation")}
          className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-3xl border border-black/[.08] bg-background/95 p-3 shadow-xl shadow-black/[.06] backdrop-blur-md md:hidden dark:border-white/[.145] dark:shadow-black/30"
        >
          <ul className="flex flex-col gap-1 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-4 py-2.5 text-zinc-600 transition-colors hover:bg-black/[.04] hover:text-foreground dark:text-zinc-400 dark:hover:bg-white/[.08] dark:hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
            <li className="mt-1 border-t border-black/[.08] pt-2 dark:border-white/[.08]">
              <a
                href={CV_HREF}
                download
                className="block rounded-xl px-4 py-2.5 font-semibold text-foreground transition-colors hover:bg-black/[.04] dark:hover:bg-white/[.08]"
                onClick={() => setMenuOpen(false)}
              >
                {t("cv")} ↗
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
