import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { App } from "@/App";

vi.mock("@/i18n", () => ({
  useTranslation: () => ({
    t: (key: string, options?: { returnObjects?: boolean }) => {
      if (options?.returnObjects) return [key];
      return key;
    },
    i18n: { language: "en" },
  }),
}));

vi.mock("@/hooks/useReducedMotion", () => ({
  useReducedMotion: () => false,
}));

vi.mock("@/hooks/useTheme", () => ({
  useTheme: () => ({
    theme: "dark",
    resolvedTheme: "dark",
    isDark: true,
    setTheme: vi.fn(),
    toggleTheme: vi.fn(),
  }),
}));

const SECTION_IDS = [
  "hero",
  "about",
  "experience",
  "skills",
  "projects",
  "contact",
  "footer",
] as const;

describe("App integration", () => {
  it("renders all 7 section IDs", () => {
    render(<App />);
    for (const id of SECTION_IDS) {
      expect(document.getElementById(id)).toBeInTheDocument();
    }
  });

  it("renders Header with data-testid", () => {
    render(<App />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("renders Footer with data-testid", () => {
    render(<App />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders main element with id main-content", () => {
    render(<App />);
    expect(document.getElementById("main-content")).toBeInTheDocument();
  });

  it("renders skip-to-content link", () => {
    render(<App />);
    const link = document.querySelector('a[href="#main-content"]');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent("common.skip_to_content");
  });

  it("renders each section in order", () => {
    const { container } = render(<App />);
    const main = container.querySelector("#main-content");
    expect(main).toBeInTheDocument();
    const children = main?.children;
    expect(children).toHaveLength(8);
  });
});
