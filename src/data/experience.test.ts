import { describe, expect, it } from "vitest";
import { experiences } from "./experience";

describe("experience data", () => {
  it("should have exactly 2 experiences", () => {
    expect(experiences).toHaveLength(2);
  });

  it("should have all required fields for each experience", () => {
    experiences.forEach((exp) => {
      expect(exp).toHaveProperty("id");
      expect(exp).toHaveProperty("company");
      expect(exp).not.toHaveProperty("role");
      expect(exp).toHaveProperty("period");
      expect(exp).toHaveProperty("location");
      expect(exp).toHaveProperty("type");
      expect(exp).toHaveProperty("isCurrent");
      expect(exp).toHaveProperty("technologies");
    });
  });

  it("should have first experience with isCurrent: true", () => {
    expect(experiences[0]?.isCurrent).toBe(true);
  });

  it("should have non-empty technologies array for each experience", () => {
    experiences.forEach((exp) => {
      expect(exp.technologies.length).toBeGreaterThan(0);
    });
  });

  it("should NOT have description field on any experience", () => {
    experiences.forEach((exp) => {
      expect(exp).not.toHaveProperty("description");
    });
  });

  it("should NOT have bullets field on any experience", () => {
    experiences.forEach((exp) => {
      expect(exp).not.toHaveProperty("bullets");
    });
  });
});
