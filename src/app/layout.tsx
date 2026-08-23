import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  const locale = await getLocale();

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("title"),
      template: `%s · ${t("title")}`,
    },
    description: t("description"),
    keywords: t("keywords")
      .split(",")
      .map((keyword) => keyword.trim()),
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    applicationName: t("title"),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      url: "/",
      siteName: t("title"),
      title: t("title"),
      description: t("description"),
      locale: locale === "en" ? "en_US" : "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author,
    url: siteConfig.url,
    jobTitle: locale === "en" ? siteConfig.jobTitle.en : siteConfig.jobTitle.fr,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toulouse",
      addressCountry: "FR",
    },
    knowsAbout: siteConfig.knowsAbout,
  };

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: données structurées JSON-LD statiques requises pour le SEO
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <SiteHeader />
            {children}
            <SiteFooter />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
