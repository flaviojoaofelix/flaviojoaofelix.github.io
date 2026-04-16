import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Zustand",
      "Material UI",
      "React Flow",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "NestJS", "FastAPI", "Socket.IO"],
  },
  {
    name: "Others Programming Languages",
    skills: ["PHP", "Python", "Java"],
  },
  {
    name: "Quality Assurance",
    skills: ["Jest", "Vitest", "Mocha", "Chai", "Cypress", "Playwright"],
  },
  {
    name: "DevOps & Cloud",
    skills: ["Gitlab", "Github", "Proxmox", "Docker", "AWS", "Digital Ocean"],
  },
  {
    name: "Automation",
    skills: ["n8n", "openclaw"],
  },
  {
    name: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    name: "Others",
    skills: [
      "Git",
      "Linux",
      "Bash",
      "WebSockets",
      "GraphQL",
      "REST APIs",
      "WebRTC",
      "Microservices",
      "TDD",
      "CI/CD",
      "Agile Methodologies",
    ],
  },
];
