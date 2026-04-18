import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SkillsSection } from "./SkillsSection";

describe("SkillsSection", () => {
  it("renders section with correct id and data-testid", () => {
    render(<SkillsSection />);

    const section = screen.getByTestId("skills-section");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "skills");
  });

  it("renders section title Skills", () => {
    render(<SkillsSection />);

    const title = screen.getByText("Skills");
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H2");
  });

  it("renders exactly 7 category cards", () => {
    render(<SkillsSection />);

    const categories = screen.getAllByTestId(/skill-category-/);
    expect(categories.length).toBe(7);
  });

  it("renders all 7 category titles", () => {
    render(<SkillsSection />);

    expect(screen.getAllByText("Frontend").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Backend").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Databases").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Programming Languages").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Testing & Quality").length).toBeGreaterThan(0);
    expect(screen.getAllByText("DevOps & Cloud").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Architecture & Practices").length).toBeGreaterThan(0);
  });

  it("renders skill chips for each category", () => {
    render(<SkillsSection />);

    const frontendCategory = screen.getByTestId("skill-category-Frontend");
    expect(frontendCategory.textContent).toContain("React");
    expect(frontendCategory.textContent).toContain("TypeScript");
    expect(frontendCategory.textContent).toContain("JavaScript");
    expect(frontendCategory.textContent).toContain("Redux");
    expect(frontendCategory.textContent).toContain("Zustand");
    expect(frontendCategory.textContent).toContain("Material UI");

    const backendCategory = screen.getByTestId("skill-category-Backend");
    expect(backendCategory.textContent).toContain("Node.js");
    expect(backendCategory.textContent).toContain("Express");
    expect(backendCategory.textContent).toContain("NestJS");
    expect(backendCategory.textContent).toContain("FastAPI");
    expect(backendCategory.textContent).toContain("Socket.IO");
    expect(backendCategory.textContent).toContain("GraphQL");
    expect(backendCategory.textContent).toContain("REST APIs");
    expect(backendCategory.textContent).toContain("WebSockets");
    expect(backendCategory.textContent).toContain("WebRTC");
    expect(backendCategory.textContent).toContain("n8n");
    expect(backendCategory.textContent).toContain("openclaw");

    const databasesCategory = screen.getByTestId("skill-category-Databases");
    expect(databasesCategory.textContent).toContain("PostgreSQL");
    expect(databasesCategory.textContent).toContain("MySQL");
    expect(databasesCategory.textContent).toContain("MongoDB");

    const programmingCategory = screen.getByTestId("skill-category-Programming Languages");
    expect(programmingCategory.textContent).toContain("Python");
    expect(programmingCategory.textContent).toContain("PHP");
    expect(programmingCategory.textContent).toContain("Java");

    const testingCategory = screen.getByTestId("skill-category-Testing & Quality");
    expect(testingCategory.textContent).toContain("Jest");
    expect(testingCategory.textContent).toContain("Vitest");
    expect(testingCategory.textContent).toContain("Playwright");
    expect(testingCategory.textContent).toContain("TDD");

    const devopsCategory = screen.getByTestId("skill-category-DevOps & Cloud");
    expect(devopsCategory.textContent).toContain("Git");
    expect(devopsCategory.textContent).toContain("GitHub");
    expect(devopsCategory.textContent).toContain("GitLab");
    expect(devopsCategory.textContent).toContain("Docker");
    expect(devopsCategory.textContent).toContain("AWS");
    expect(devopsCategory.textContent).toContain("DigitalOcean");
    expect(devopsCategory.textContent).toContain("Proxmox");
    expect(devopsCategory.textContent).toContain("Linux");
    expect(devopsCategory.textContent).toContain("Bash");
    expect(devopsCategory.textContent).toContain("CI/CD");

    const archCategory = screen.getByTestId("skill-category-Architecture & Practices");
    expect(archCategory.textContent).toContain("Microservices");
    expect(archCategory.textContent).toContain("Agile Methodologies");
  });

  it("renders section with responsive grid layout", () => {
    render(<SkillsSection />);

    const section = screen.getByTestId("skills-section");
    const gridContainer = section.querySelector(".grid");

    expect(gridContainer).toBeInTheDocument();
    expect(gridContainer?.className).toContain("grid-cols-1");
    expect(gridContainer?.className).toContain("md:grid-cols-2");
  });
});
