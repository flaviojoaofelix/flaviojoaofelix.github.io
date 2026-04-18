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
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "FastAPI",
      "Socket.IO",
      "GraphQL",
      "REST APIs",
      "WebSockets",
      "WebRTC",
      "n8n",
      "openclaw",
    ],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    name: "Programming Languages",
    skills: ["Python", "PHP", "Java"],
  },
  {
    name: "Testing & Quality",
    skills: ["Jest", "Vitest", "Mocha", "Chai", "Cypress", "Playwright", "TDD"],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "AWS",
      "DigitalOcean",
      "Proxmox",
      "Linux",
      "Bash",
      "CI/CD",
    ],
  },
  {
    name: "Architecture & Practices",
    skills: ["Microservices", "Agile Methodologies"],
  },
];
