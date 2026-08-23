export interface Project {
  id: string;
  title: string;
  period: string;
  tags: string[];
  description: string;
  link?: string;
  stack: string[];
  team?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "shoteat",
    title: "ShotEat",
    period: "2026",
    tags: ["Projet", "Équipe"],
    description:
      "Plateforme SaaS de commande pour la restauration et de streaming en direct lors d'événements. Architecture en microservices.",
    link: "https://shoteat.live",
    stack: ["Next.js", "Expo", "Stripe Connect", "Docker"],
    featured: true,
  },
  {
    id: "knp-bot",
    title: "Kernel Panic Bot",
    period: "2026",
    tags: ["Projet", "Solo"],
    description:
      "Bot Discord sur mesure pour l'équipe esport Rainbow Six Siege KNP. Gestion automatisée des tickets de recrutement et intégration des statistiques des joueurs.",
    stack: ["Node.js", "Discord.js", "TypeScript"],
  },
  {
    id: "polarisdev-web",
    title: "PolarisDEV Web",
    period: "2026",
    tags: ["Projet", "Solo"],
    link: "https://polarisdev.fr",
    description:
      "Refonte complète du site vitrine de PolarisDEV avec animations au scroll, composants UI sur mesure et intégration de réservation.",
    stack: ["React", "Tailwind CSS", "Next.js"],
  },
];
