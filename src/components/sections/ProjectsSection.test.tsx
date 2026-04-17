import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ProjectsSection } from "./ProjectsSection";

vi.mock("@/i18n", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        "projects.title": "Projects",
        "projects.viewGithub": "Source Code",
        "projects.viewDemo": "Live Demo",
        "projects.viewSite": "Visit Site",
        "projects.neointeract.description":
          "Contact Center solution for small and medium businesses. Developed the front-end with React, TypeScript, Redux, and Socket.IO.",
        "projects.persona-nocode.description":
          "No-code visual editor for the Persona platform. Led a complete front-end refactoring of the editor with React and TypeScript.",
        "projects.catalogo-movingsale.description":
          "Minimalist landing page for a residential furniture moving sale, built with React, TypeScript, and Vite.",
        "projects.dt-frontend-digitro.description":
          "Technical challenge for Dígitro's hiring process — a React application for managing chat service calls.",
        "projects.trybe-recipes-app.description":
          "Collaborative web application for browsing food and drink recipes using external APIs. Developed as a group project with Scrum.",
      };
      return translations[key] ?? key;
    },
    i18n: {
      language: "en",
    },
  }),
}));

describe("ProjectsSection", () => {
  it("renders section with correct id and data-testid", () => {
    render(<ProjectsSection />);

    const section = screen.getByTestId("projects-section");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "projects");
  });

  it("renders section title from i18n", () => {
    render(<ProjectsSection />);

    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("renders 5 project cards", () => {
    render(<ProjectsSection />);

    expect(screen.getByTestId("project-card-neointeract")).toBeInTheDocument();
    expect(screen.getByTestId("project-card-persona-nocode")).toBeInTheDocument();
    expect(screen.getByTestId("project-card-catalogo-movingsale")).toBeInTheDocument();
    expect(screen.getByTestId("project-card-dt-frontend-digitro")).toBeInTheDocument();
    expect(screen.getByTestId("project-card-trybe-recipes-app")).toBeInTheDocument();
  });

  it("renders project titles from data", () => {
    render(<ProjectsSection />);

    expect(screen.getByText("NeoInteract")).toBeInTheDocument();
    expect(screen.getByText("Persona No-code")).toBeInTheDocument();
    expect(screen.getByText("Catálogo Moving Sale")).toBeInTheDocument();
    expect(screen.getByText("Dígitro Chat Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Recipes App")).toBeInTheDocument();
  });

  it("renders project descriptions from locale JSON via t()", () => {
    render(<ProjectsSection />);

    expect(
      screen.getByText(
        "Contact Center solution for small and medium businesses. Developed the front-end with React, TypeScript, Redux, and Socket.IO.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "No-code visual editor for the Persona platform. Led a complete front-end refactoring of the editor with React and TypeScript.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Minimalist landing page for a residential furniture moving sale, built with React, TypeScript, and Vite.",
      ),
    ).toBeInTheDocument();
  });

  it("renders technology chips for each project", () => {
    render(<ProjectsSection />);

    const reactChips = screen.getAllByText("React");
    expect(reactChips).toHaveLength(5);

    const tsChips = screen.getAllByText("TypeScript");
    expect(tsChips).toHaveLength(3);

    const reduxChips = screen.getAllByText("Redux");
    expect(reduxChips).toHaveLength(2);

    expect(screen.getByText("Socket.IO")).toBeInTheDocument();
    expect(screen.getAllByText("Docker")).toHaveLength(2);
    expect(screen.getByText("Vite")).toBeInTheDocument();
    expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();
    expect(screen.getByText("Scrum")).toBeInTheDocument();
  });

  it("renders GitHub link buttons for open-source projects", () => {
    render(<ProjectsSection />);

    const githubButtons = screen.getAllByText("Source Code");
    expect(githubButtons).toHaveLength(3);

    const githubHrefs = githubButtons.map((button) => {
      const link = button.closest("a");
      if (!link) {
        throw new Error("Button should be wrapped in an anchor tag");
      }
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      return link.getAttribute("href");
    });

    expect(githubHrefs).toContain(
      "https://github.com/flaviojoaofelix/catalogo-venda-moveis-ap-615",
    );
    expect(githubHrefs).toContain("https://github.com/flaviojoaofelix/dt-frontend-digitro");
    expect(githubHrefs).toContain("https://github.com/flaviojoaofelix/trybe-project-recipes-app");
  });

  it("renders Visit Site link buttons for Dígitro products", () => {
    render(<ProjectsSection />);

    const siteButtons = screen.getAllByText("Visit Site");
    expect(siteButtons).toHaveLength(2);

    const siteHrefs = siteButtons.map((button) => {
      const link = button.closest("a");
      if (!link) {
        throw new Error("Button should be wrapped in an anchor tag");
      }
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      return link.getAttribute("href");
    });

    expect(siteHrefs).toContain("https://digitro.com/neointeract");
    expect(siteHrefs).toContain("https://digitro.com/persona");
  });
});
