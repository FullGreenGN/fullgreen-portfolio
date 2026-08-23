import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { isLocale, LOCALE_COOKIE, routing } from "./routing";

export default getRequestConfig(async () => {
  const store = await cookies();
  const cookieLocale = store.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookieLocale)) {
    return {
      locale: cookieLocale,
      messages: (await import(`../../messages/${cookieLocale}.json`)).default,
    };
  }

  const header = (await headers()).get("accept-language");
  if (header) {
    for (const entry of header.split(",")) {
      const base = entry.split(";")[0]?.trim().split("-")[0]?.toLowerCase();
      if (isLocale(base)) {
        return {
          locale: base,
          messages: (await import(`../../messages/${base}.json`)).default,
        };
      }
    }
  }

  const locale = routing.defaultLocale;
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
