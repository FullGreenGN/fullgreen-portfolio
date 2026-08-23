export const routing = {
  locales: ["fr", "en"],
  defaultLocale: "fr",
} as const;

export type Locale = (typeof routing.locales)[number];

export const LOCALE_COOKIE = "NEXT_LOCALE";

export function isLocale(value: string | undefined): value is Locale {
  return routing.locales.includes(value as Locale);
}
