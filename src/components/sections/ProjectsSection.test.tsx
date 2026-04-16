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
        "projects.project-1.description":
          "A comprehensive dashboard for the NeoInteract Contact Center platform, featuring real-time communication metrics and agent management.",
        "projects.project-2.description":
          "Full-stack e-commerce platform with product catalog, shopping cart, payment integration, and admin panel.",
        "projects.project-3.description":
          "RESTful API for task management with authentication, role-based access control, and real-time notifications.",
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

  it("renders 3 project cards", () => {
    render(<ProjectsSection />);

    expect(screen.getByTestId("project-card-project-1")).toBeInTheDocument();
    expect(screen.getByTestId("project-card-project-2")).toBeInTheDocument();
    expect(screen.getByTestId("project-card-project-3")).toBeInTheDocument();
  });

  it("renders project titles from data", () => {
    render(<ProjectsSection />);

    expect(screen.getByText("NeoInteract Dashboard")).toBeInTheDocument();
    expect(screen.getByText("E-Commerce Platform")).toBeInTheDocument();
    expect(screen.getByText("Task Management API")).toBeInTheDocument();
  });

  it("renders project descriptions from locale JSON via t()", () => {
    render(<ProjectsSection />);

    expect(
      screen.getByText(
        "A comprehensive dashboard for the NeoInteract Contact Center platform, featuring real-time communication metrics and agent management.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Full-stack e-commerce platform with product catalog, shopping cart, payment integration, and admin panel.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "RESTful API for task management with authentication, role-based access control, and real-time notifications.",
      ),
    ).toBeInTheDocument();
  });

  it("renders technology chips for each project", () => {
    render(<ProjectsSection />);

    const reactChips = screen.getAllByText("React");
    expect(reactChips).toHaveLength(2);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Redux")).toBeInTheDocument();
    expect(screen.getByText("Socket.IO")).toBeInTheDocument();

    const nodejsChips = screen.getAllByText("Node.js");
    expect(nodejsChips).toHaveLength(2);
    expect(screen.getByText("MongoDB")).toBeInTheDocument();
    expect(screen.getByText("Docker")).toBeInTheDocument();

    expect(screen.getByText("Express")).toBeInTheDocument();
    expect(screen.getByText("MySQL")).toBeInTheDocument();
    expect(screen.getByText("JWT")).toBeInTheDocument();
  });

  it("renders GitHub link button for all projects", () => {
    render(<ProjectsSection />);

    const githubButtons = screen.getAllByText("Source Code");
    expect(githubButtons).toHaveLength(3);

    githubButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
      const link = button.closest("a");
      if (link === null) {
        throw new Error("Button should be wrapped in an anchor tag");
      }
      expect(link).toHaveAttribute("href", "https://github.com/flaviojoaofelix");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("renders Live Demo link button only for project-2", () => {
    render(<ProjectsSection />);

    const demoButtons = screen.getAllByText("Live Demo");
    expect(demoButtons).toHaveLength(1);

    const demoButton = demoButtons[0];
    if (!demoButton) {
      throw new Error("Demo button not found");
    }
    expect(demoButton).toBeInTheDocument();
    const link = demoButton.closest("a");
    if (link === null) {
      throw new Error("Button should be wrapped in an anchor tag");
    }
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
