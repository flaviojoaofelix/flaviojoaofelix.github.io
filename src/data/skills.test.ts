import { describe, expect, it } from "vitest";
import { skillCategories } from "./skills";

describe("skills data", () => {
  it("should have exactly 8 categories", () => {
    expect(skillCategories).toHaveLength(8);
  });

  it("should have correct category names", () => {
    const categoryNames = skillCategories.map((cat) => cat.name);
    expect(categoryNames).toContain("Frontend");
    expect(categoryNames).toContain("Backend");
    expect(categoryNames).toContain("Quality Assurance");
    expect(categoryNames).toContain("DevOps & Cloud");
    expect(categoryNames).toContain("Automation");
    expect(categoryNames).toContain("Databases");
    expect(categoryNames).toContain("Others Programming Languages");
    expect(categoryNames).toContain("Others");
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

  it("should have MySQL in Databases skills", () => {
    const databasesCategory = skillCategories.find((cat) => cat.name === "Databases");
    expect(databasesCategory?.skills).toContain("MySQL");
  });
});
