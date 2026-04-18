import { describe, expect, it } from "vitest";
import { skillCategories } from "./skills";

describe("skills data", () => {
  it("should have exactly 7 categories", () => {
    expect(skillCategories).toHaveLength(7);
  });

  it("should have correct category names", () => {
    const categoryNames = skillCategories.map((cat) => cat.name);
    expect(categoryNames).toContain("Frontend");
    expect(categoryNames).toContain("Backend");
    expect(categoryNames).toContain("Databases");
    expect(categoryNames).toContain("Programming Languages");
    expect(categoryNames).toContain("Testing & Quality");
    expect(categoryNames).toContain("DevOps & Cloud");
    expect(categoryNames).toContain("Architecture & Practices");
  });

  it("should have non-empty skills array for each category", () => {
    skillCategories.forEach((cat) => {
      expect(cat.skills.length).toBeGreaterThan(0);
    });
  });

  it("should have React in Frontend skills", () => {
    const frontendCategory = skillCategories.find((cat) => cat.name === "Frontend");
    expect(frontendCategory?.skills).toContain("React");
  });

  it("should have PostgreSQL in Databases skills", () => {
    const databasesCategory = skillCategories.find((cat) => cat.name === "Databases");
    expect(databasesCategory?.skills).toContain("PostgreSQL");
  });

  it("should have GraphQL in Backend skills", () => {
    const backendCategory = skillCategories.find((cat) => cat.name === "Backend");
    expect(backendCategory?.skills).toContain("GraphQL");
  });

  it("should have TDD in Testing & Quality skills", () => {
    const testingCategory = skillCategories.find((cat) => cat.name === "Testing & Quality");
    expect(testingCategory?.skills).toContain("TDD");
  });

  it("should have Git in DevOps & Cloud skills", () => {
    const devopsCategory = skillCategories.find((cat) => cat.name === "DevOps & Cloud");
    expect(devopsCategory?.skills).toContain("Git");
  });

  it("should have Microservices in Architecture & Practices skills", () => {
    const archCategory = skillCategories.find((cat) => cat.name === "Architecture & Practices");
    expect(archCategory?.skills).toContain("Microservices");
  });
});
