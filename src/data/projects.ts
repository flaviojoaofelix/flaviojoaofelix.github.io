import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "neointeract",
    title: "NeoInteract",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Material UI",
      "Socket.IO",
      "OpenAPI",
      "Jest",
      "Docker",
    ],
    liveUrl: "https://digitro.com/neointeract",
    linkLabel: "projects.viewSite",
  },
  {
    id: "persona-nocode",
    title: "Persona No-code",
    technologies: ["React", "TypeScript", "Zustand", "Material UI"],
    liveUrl: "https://digitro.com/persona",
    linkLabel: "projects.viewSite",
  },
  {
    id: "catalogo-movingsale",
    title: "Catálogo Moving Sale",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/flaviojoaofelix/catalogo-venda-moveis-ap-615",
  },
  {
    id: "dt-frontend-digitro",
    title: "DT Frontend Dígitro",
    technologies: ["React", "JavaScript", "CSS/Bootstrap", "Socket.io"],
    github: "https://github.com/flaviojoaofelix/dt-frontend-digitro",
  },
  {
    id: "trybe-recipes-app",
    title: "Recipes App",
    technologies: ["React", "JavaScript", "Redux", "REST APIs", "Scrum"],
    github: "https://github.com/flaviojoaofelix/trybe-project-recipes-app",
  },
];
