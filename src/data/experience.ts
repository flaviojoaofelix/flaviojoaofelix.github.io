import type { Experience } from "@/types";

export const experiences: readonly Experience[] = [
  {
    id: "digitro",
    company: "Dígitro Tecnologia",
    period: { start: "2023-03", end: "present" },
    location: "Florianópolis, SC, Brasil",
    type: "fulltime",
    isCurrent: true,
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Redux",
      "Socket.IO",
      "Jest",
      "Material UI",
      "Docker",
    ],
  },
  {
    id: "ifon",
    company: "iFon",
    period: { start: "2012-03", end: "2023-03" },
    location: "Florianópolis e Região",
    type: "freelance",
    isCurrent: false,
    technologies: ["PHP", "HTML", "CSS", "WordPress", "Linux", "Windows", "CPanel", "Plesk"],
  },
] as const satisfies readonly Experience[];
