import {
  siCoolify,
  siCplusplus,
  siDocker,
  siGnubash,
  siKubernetes,
  siLinux,
  siLua,
  siNextdotjs,
  siOpenjdk,
  siProxmox,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

export interface Technology {
  name: string;
  level: "mastered" | "practiced";
  /** Logo de marque issu de simple-icons ; absent -> repli monogramme */
  icon?: { path: string };
}

export const technologies: Technology[] = [
  { name: "Linux", level: "mastered", icon: siLinux },
  { name: "Proxmox VE", level: "mastered", icon: siProxmox },
  { name: "TypeScript", level: "mastered", icon: siTypescript },
  { name: "React", level: "mastered", icon: siReact },
  { name: "Next.js", level: "mastered", icon: siNextdotjs },
  { name: "Tailwind CSS", level: "mastered", icon: siTailwindcss },
  { name: "Shell", level: "mastered", icon: siGnubash },
  { name: "Docker", level: "practiced", icon: siDocker },
  { name: "Java", level: "practiced", icon: siOpenjdk },
  { name: "Python", level: "practiced", icon: siPython },
  { name: "C++", level: "practiced", icon: siCplusplus },
  { name: "Lua", level: "practiced", icon: siLua },
  { name: "Kubernetes", level: "practiced", icon: siKubernetes },
  { name: "AWS", level: "practiced" },
  { name: "Dokploy", level: "practiced" },
  { name: "Coolify", level: "practiced", icon: siCoolify },
];
