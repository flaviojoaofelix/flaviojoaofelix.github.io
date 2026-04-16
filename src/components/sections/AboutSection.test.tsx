import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AboutSection } from "./AboutSection";

describe("AboutSection", () => {
  it("renders section with correct id", () => {
    render(<AboutSection />);

    const section = screen.getByTestId("about-section");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "about");
  });

  it("renders title About Me", () => {
    render(<AboutSection />);

    const title = screen.getByText("About Me");
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H2");
  });

  it("renders at least 2 paragraphs with bio content", () => {
    render(<AboutSection />);

    const paragraphs = screen.getAllByRole("paragraph");
    expect(paragraphs.length).toBeGreaterThanOrEqual(2);

    const textContent = screen.getByTestId("about-section").textContent ?? "";
    expect(textContent).toContain("Full Stack");
    expect(textContent).toContain("experience");
  });
});
