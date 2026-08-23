export interface LocalizedText {
  fr: string;
  en: string;
}

export interface Experience {
  id: string;
  title: LocalizedText;
  company: string;
  location: LocalizedText;
  period: LocalizedText;
  /** Format ISO "YYYY-MM" pour le tri chronologique */
  startDate: string;
  description: LocalizedText;
  type: LocalizedText[];
  skills: string[];
  current?: boolean;
  link?: string;
}

export interface Education {
  id: string;
  degree: LocalizedText;
  school: string;
  location: LocalizedText;
  period: LocalizedText;
  /** Format ISO "YYYY-MM" pour le tri chronologique */
  startDate: string;
  description: LocalizedText;
  status: LocalizedText;
  current?: boolean;
}

export interface Certification {
  id: string;
  title: LocalizedText;
  organization: string;
  date: LocalizedText;
  status: LocalizedText;
  link: string;
}

export const experiences: Experience[] = [
  {
    id: "polarisdev",
    title: { fr: "Auto Entrepreneur", en: "Freelance" },
    company: "PolarisDEV",
    location: { fr: "Perpignan, France", en: "Perpignan, France" },
    period: { fr: "Août 2024 – Présent", en: "August 2024 – Present" },
    startDate: "2024-08",
    description: {
      fr: "Conception et développement de logiciels sur mesure • Administration Systeme et Reseaux",
      en: "Custom software design and development • System and Network Administration",
    },
    type: [
      { fr: "Auto-entrepreneur", en: "Freelance" },
      { fr: "En cours", en: "Ongoing" },
    ],
    skills: [
      "Linux",
      "Proxmox PVE (v9.2)",
      "Serveurs Dell PowerEdge",
      "TypeScript",
      "Next.js",
      "React",
    ],
    current: true,
    link: "https://polarisdev.fr",
  },
  {
    id: "auchan-2025",
    title: {
      fr: "Stage Correspondant Informatique Locale",
      en: "Local IT Correspondent Intern",
    },
    company: "Auchan Retail",
    location: { fr: "Perpignan, France", en: "Perpignan, France" },
    period: { fr: "Mai 2025 – Juillet 2025", en: "May 2025 – July 2025" },
    startDate: "2025-05",
    description: {
      fr: "Maintenance infrastructure locale et support IT.",
      en: "Local infrastructure maintenance and IT support.",
    },
    type: [{ fr: "Stage", en: "Internship" }],
    skills: ["Support IT", "Maintenance matérielle", "Réseaux"],
  },
  {
    id: "signpost",
    title: {
      fr: "Stage Technicien & Data Analyst",
      en: "Technician & Data Analyst Intern",
    },
    company: "Signpost",
    location: { fr: "Lokeren, Belgique", en: "Lokeren, Belgium" },
    period: { fr: "Mars 2024 – Mars 2024", en: "March 2024" },
    startDate: "2024-03",
    description: {
      fr: "Support technique (système et matériel) et analyse de données pour la Supply Chain.",
      en: "Technical support (system and hardware) and data analysis for the Supply Chain.",
    },
    type: [{ fr: "Stage", en: "Internship" }],
    skills: ["Support technique", "Data Analysis", "Matériel"],
    link: "https://signpost.be/",
  },
  {
    id: "auchan-2023",
    title: {
      fr: "Stage Correspondant Informatique",
      en: "IT Correspondent Intern",
    },
    company: "Auchan Retail",
    location: { fr: "Perpignan, France", en: "Perpignan, France" },
    period: {
      fr: "Novembre 2023 – Décembre 2023",
      en: "November 2023 – December 2023",
    },
    startDate: "2023-11",
    description: {
      fr: "Support et gestion de parc informatique.",
      en: "IT asset management and user support.",
    },
    type: [{ fr: "Stage", en: "Internship" }],
    skills: ["Support", "Gestion de parc", "Système"],
  },
  {
    id: "42-perpignan",
    title: {
      fr: "Stage Développeur FullStack",
      en: "FullStack Developer Intern",
    },
    company: "42",
    location: { fr: "Perpignan, France", en: "Perpignan, France" },
    period: { fr: "Mai 2023 – Juin 2023", en: "May 2023 – June 2023" },
    startDate: "2023-05",
    description: {
      fr: "Développement web et intégration de services.",
      en: "Web development and service integration.",
    },
    type: [{ fr: "Stage", en: "Internship" }],
    skills: ["TypeScript", "JavaScript", "React", "Supabase", "Drizzle ORM"],
    link: "https://42perpignan.fr/",
  },
].sort((a, b) => b.startDate.localeCompare(a.startDate));

export const educations: Education[] = [
  {
    id: "esn-81",
    degree: {
      fr: "Bachelor ASRC (Systèmes, Réseaux et Cybersécurité)",
      en: "Bachelor ASRC (Systems, Networks and Cybersecurity)",
    },
    school: "ESN 81",
    location: { fr: "Castres, France", en: "Castres, France" },
    period: { fr: "Sept. 2026 – Juillet 2027", en: "Sept 2026 – July 2027" },
    startDate: "2026-09",
    description: { fr: "Informatique", en: "Computer Science" },
    status: { fr: "En cours", en: "In progress" },
    current: true,
  },
  {
    id: "bts-ciel",
    degree: {
      fr: "BTS CIEL (Informatique Réseau Cybersécurité)",
      en: "BTS CIEL (IT, Network, Cybersecurity)",
    },
    school: "Lycée Pablo Picasso",
    location: { fr: "Perpignan, France", en: "Perpignan, France" },
    period: {
      fr: "Septembre 2024 – Juin 2026",
      en: "September 2024 – June 2026",
    },
    startDate: "2024-09",
    description: {
      fr: "Cybersécurité et Informatique",
      en: "Cybersecurity and IT",
    },
    status: { fr: "Terminé", en: "Completed" },
  },
  {
    id: "bac-pro-sn",
    degree: { fr: "BAC PRO SN RISC", en: "Vocational Baccalaureate SN RISC" },
    school: "Lycée Sainte Louise de Marillac",
    location: { fr: "Perpignan, France", en: "Perpignan, France" },
    period: {
      fr: "Septembre 2021 – Juin 2024",
      en: "September 2021 – June 2024",
    },
    startDate: "2021-09",
    description: {
      fr: "Réseaux Informatique et Systèmes Communiquant • Informatique et Reseaux",
      en: "Computer Networks and Communicating Systems • IT and Networks",
    },
    status: { fr: "Terminé", en: "Completed" },
  },
].sort((a, b) => b.startDate.localeCompare(a.startDate));

export const certifications: Certification[] = [
  {
    id: "netacad-basics",
    title: { fr: "Notions de base sur les réseaux", en: "Networking Basics" },
    organization: "Cisco Networking Academy",
    date: { fr: "Aout 2026", en: "Aout 2026" },
    status: { fr: "En cours", en: "In progress" },
    link: "https://www.netacad.com/", // Ou le lien vers ton badge Credly si tu en as un
  },
  {
    id: "secnum",
    title: { fr: "SECNUMACADEMIE", en: "SECNUMACADEMIE" },
    organization: "ANSSI",
    date: { fr: "Décembre 2025", en: "December 2025" },
    status: { fr: "Terminé", en: "Completed" },
    link: "https://secnumacademie.gouv.fr",
  },
];
