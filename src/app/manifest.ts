import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jean-Luc Oudart-Sintes — Portfolio",
    short_name: "Portfolio",
    description:
      "Sysadmin & développeur full-stack — parcours, compétences et projets.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
      },
    ],
  };
}
