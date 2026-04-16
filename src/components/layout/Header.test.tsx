import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Header } from "./Header";

vi.mock("@/hooks/useTheme", () => ({
  useTheme: () => ({
    theme: "dark",
    resolvedTheme: "dark",
    isDark: true,
    setTheme: vi.fn(),
    toggleTheme: vi.fn(),
  }),
}));

describe("Header", () => {
  it("renders the header element", () => {
    render(<Header />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("renders the logo link to #hero", () => {
    render(<Header />);
    const logo = screen.getByText("FJF.DEV").closest("a");
    expect(logo).toHaveAttribute("href", "#hero");
  });

  it("renders all 6 navigation links with correct hrefs", () => {
    render(<Header />);
    const nav = screen.getByTestId("header").querySelector("nav");
    expect(nav).toBeTruthy();

    const links = nav?.querySelectorAll("a");
    expect(links?.length).toBe(6);

    const hrefs = Array.from(links ?? []).map((link) => link.getAttribute("href"));
    expect(hrefs).toContain("#hero");
    expect(hrefs).toContain("#about");
    expect(hrefs).toContain("#experience");
    expect(hrefs).toContain("#skills");
    expect(hrefs).toContain("#projects");
    expect(hrefs).toContain("#contact");
  });

  it("renders ThemeToggle", () => {
    render(<Header />);
    expect(screen.getByTestId("theme-toggle")).toBeInTheDocument();
  });

  it("renders LanguageSwitcher", () => {
    render(<Header />);
    expect(screen.getByTestId("language-switcher")).toBeInTheDocument();
  });
});
