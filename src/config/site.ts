export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  author: "Jean-Luc Oudart-Sintes",
  jobTitle: {
    fr: "Sysadmin & Développeur Full-Stack",
    en: "Sysadmin & Full-Stack Developer",
  },
  locality: "Perpignan, France",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com",
  knowsAbout: [
    "Linux",
    "Cybersécurité",
    "Administration système",
    "Java",
    "Spring Boot",
    "Oracle",
    "React",
    "TypeScript",
    "Next.js",
    "DevOps",
  ],
};
