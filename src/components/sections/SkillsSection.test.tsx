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

  it("renders exactly 8 category cards", () => {
    render(<SkillsSection />);

    const categories = screen.getAllByTestId(/skill-category-/);
    expect(categories.length).toBe(8);
  });

  it("renders all 8 category titles", () => {
    render(<SkillsSection />);

    expect(screen.getAllByText("Frontend").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Backend").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Quality Assurance").length).toBeGreaterThan(0);
    expect(screen.getAllByText("DevOps & Cloud").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Automation").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Databases").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Others Programming Languages").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Others").length).toBeGreaterThan(0);
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

    const devopsCategory = screen.getByTestId("skill-category-DevOps & Cloud");
    expect(devopsCategory.textContent).toContain("Docker");
    expect(devopsCategory.textContent).toContain("AWS");
    expect(devopsCategory.textContent).toContain("Digital Ocean");
    expect(devopsCategory.textContent).toContain("Gitlab");
    expect(devopsCategory.textContent).toContain("Github");
    expect(devopsCategory.textContent).toContain("Proxmox");

    const qaCategory = screen.getByTestId("skill-category-Quality Assurance");
    expect(qaCategory.textContent).toContain("Vitest");
    expect(qaCategory.textContent).toContain("Playwright");

    const automationCategory = screen.getByTestId("skill-category-Automation");
    expect(automationCategory.textContent).toContain("n8n");
    expect(automationCategory.textContent).toContain("openclaw");

    const databasesCategory = screen.getByTestId("skill-category-Databases");
    expect(databasesCategory.textContent).toContain("MySQL");
    expect(databasesCategory.textContent).toContain("MongoDB");
    expect(databasesCategory.textContent).toContain("PostgreSQL");

    const othersProgrammingCategory = screen.getByTestId(
      "skill-category-Others Programming Languages",
    );
    expect(othersProgrammingCategory.textContent).toContain("PHP");
    expect(othersProgrammingCategory.textContent).toContain("Python");
    expect(othersProgrammingCategory.textContent).toContain("Java");

    const othersCategory = screen.getByTestId("skill-category-Others");
    expect(othersCategory.textContent).toContain("Git");
    expect(othersCategory.textContent).toContain("Linux");
    expect(othersCategory.textContent).toContain("Bash");
    expect(othersCategory.textContent).toContain("WebSockets");
    expect(othersCategory.textContent).toContain("GraphQL");
    expect(othersCategory.textContent).toContain("REST APIs");
    expect(othersCategory.textContent).toContain("WebRTC");
    expect(othersCategory.textContent).toContain("Microservices");
    expect(othersCategory.textContent).toContain("TDD");
    expect(othersCategory.textContent).toContain("CI/CD");
    expect(othersCategory.textContent).toContain("Agile Methodologies");
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
