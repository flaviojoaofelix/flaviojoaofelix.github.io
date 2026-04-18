import type { Certification } from "@/types";

export const certifications: readonly Certification[] = [
  {
    id: "trybe-primeiros-passos",
    name: "certifications.trybe-primeiros-passos.name",
    issuer: "Trybe",
    date: "2021-12",
    url: "https://smartcerts.co/certificate/dylrnkmy",
  },
  {
    id: "trybe-intro-javascript",
    name: "certifications.trybe-intro-javascript.name",
    issuer: "Trybe",
    date: "2022-01",
  },
  {
    id: "trybe-fundamentos-web",
    name: "certifications.trybe-fundamentos-web.name",
    issuer: "Trybe",
    date: "2022-06",
    url: "https://www.credential.net/d717c173-88df-4521-ba51-bd2c90ad907c#acc.G8s3zc6U",
  },
  {
    id: "trybe-frontend",
    name: "certifications.trybe-frontend.name",
    issuer: "Trybe",
    date: "2022-08",
    url: "https://www.credential.net/7dc4fb01-a247-42c1-8f94-41094be88fc3#acc.mNaVjWLJ",
  },
  {
    id: "trybe-backend",
    name: "certifications.trybe-backend.name",
    issuer: "Trybe",
    date: "2023-01",
    url: "https://www.credential.net/2fe53b65-0c32-42c6-83d5-2faeea4270c0#acc.pusfkORE",
  },
  {
    id: "limit-leader",
    name: "certifications.limit-leader.name",
    issuer: "Limit Leader Training",
    date: "",
  },
] as const satisfies readonly Certification[];
