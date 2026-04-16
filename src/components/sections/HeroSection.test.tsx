import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { HeroSection } from "./HeroSection";

vi.mock("@/i18n", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        "hero.greeting": "Hello, I'm",
        "hero.title": "Full Stack Developer",
        "hero.subtitle": "Building modern web experiences with passion and precision",
        "hero.cta_projects": "View Projects",
        "hero.cta_contact": "Contact Me",
        "hero.label": "Session",
        "hero.tag_online": "status: online",
        "hero.tag_stack": "stack: react + ts",
        "hero.tag_focus": "focus: product systems",
      };
      return translations[key] ?? key;
    },
  }),
}));

vi.mock("@/hooks/useReducedMotion", () => ({
  useReducedMotion: () => ({ prefersReducedMotion: false }),
}));

describe("HeroSection", () => {
  it("renders with correct id attribute", () => {
    render(<HeroSection />);
    const section = screen.getByTestId("hero-section");
    expect(section).toHaveAttribute("id", "hero");
  });

  it("renders greeting text", () => {
    render(<HeroSection />);
    expect(screen.getByText("Hello, I'm")).toBeInTheDocument();
  });

  it('renders name "Flávio João Félix"', () => {
    render(<HeroSection />);
    expect(screen.getByText("Flávio João Félix")).toBeInTheDocument();
  });

  it("renders title 'Full Stack Developer'", () => {
    render(<HeroSection />);
    expect(screen.getByText("Full Stack Developer")).toBeInTheDocument();
  });

  it("renders subtitle", () => {
    render(<HeroSection />);
    expect(
      screen.getByText("Building modern web experiences with passion and precision"),
    ).toBeInTheDocument();
  });

  it("renders 'View Projects' CTA button", () => {
    render(<HeroSection />);
    const button = screen.getByText("View Projects");
    expect(button).toBeInTheDocument();
    expect(button.closest("a")).toHaveAttribute("href", "#projects");
  });

  it("renders 'Contact Me' CTA button", () => {
    render(<HeroSection />);
    const button = screen.getByText("Contact Me");
    expect(button).toBeInTheDocument();
    expect(button.closest("a")).toHaveAttribute("href", "#contact");
  });

  it("renders avatar component", () => {
    render(<HeroSection />);
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toBeInTheDocument();
  });
});
