import type { EducationInstitution } from "@/types";

export const education: readonly EducationInstitution[] = [
  // {
  //   id: "senai",
  //   courses: [
  //     {
  //       id: "analise-desenvolvimento",
  //       period: { start: "2024-01", end: "present" },
  //       isCurrent: true,
  //       tags: [],
  //     },
  //   ],
  // },
  {
    id: "trybe",
    courses: [
      {
        id: "fullstack",
        period: { start: "2022-03", end: "2023-03" },
        isCurrent: false,
        hours: 1500,
        tags: [
          "JavaScript",
          "React",
          "Redux",
          "Node.js",
          "Express",
          "TypeScript",
          "MySQL",
          "MongoDB",
          "Docker",
          "TDD",
          "SOLID",
          "+34",
        ],
      },
    ],
  },
  {
    id: "acate",
    courses: [
      {
        id: "geracao-tec",
        period: { start: "2012-07", end: "2012-08" },
        isCurrent: false,
        hours: 260,
        tags: ["PHP", "MySQL", "Desenvolvimento Web"],
      },
    ],
  },
] as const satisfies readonly EducationInstitution[];
