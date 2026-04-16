import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders the footer element", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/2026 FJF\.DEV/)).toBeInTheDocument();
  });

  it("renders tech stack with links", () => {
    render(<Footer />);
    const techLinks = screen.getAllByRole("link");
    const techNames = [
      "Bun",
      "React",
      "TypeScript",
      "HeroUI",
      "Tailwind CSS",
      "Vite",
      "OpenCode",
      "OMO",
    ];
    for (const name of techNames) {
      const link = techLinks.find((link) => link.textContent === name);
      expect(link).toBeTruthy();
      expect(link?.getAttribute("href")).toBeTruthy();
    }
  });

  it("renders AI-driven development line", () => {
    render(<Footer />);
    expect(screen.getByText("OpenCode")).toBeInTheDocument();
    expect(screen.getByText("OMO")).toBeInTheDocument();
  });

  it("renders session_closed label", () => {
    render(<Footer />);
    expect(screen.getByText("Session Closed")).toBeInTheDocument();
  });
});
