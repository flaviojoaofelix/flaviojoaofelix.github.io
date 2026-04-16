import fs from "node:fs";
import path from "node:path";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "@/App";

const indexHtml = fs.readFileSync(path.resolve(process.cwd(), "index.html"), "utf-8");

describe("SEO meta tags", () => {
  it('has title containing "Flávio João Félix"', () => {
    expect(indexHtml).toContain("<title>Flávio João Félix");
  });

  it("has meta description", () => {
    expect(indexHtml).toContain('<meta name="description"');
  });

  it("has og:title", () => {
    expect(indexHtml).toContain('<meta property="og:title"');
  });

  it("has og:description", () => {
    expect(indexHtml).toContain('<meta property="og:description"');
  });

  it("has og:type", () => {
    expect(indexHtml).toContain('<meta property="og:type"');
  });

  it("has og:url", () => {
    expect(indexHtml).toContain('<meta property="og:url"');
  });

  it("has noscript tag in body", () => {
    expect(indexHtml).toContain("<noscript>");
    expect(indexHtml).toContain("Please enable JavaScript to view this site.");
  });
});

describe("Accessibility", () => {
  it("renders skip-to-content link", () => {
    render(<App />);
    const skipLink = screen.getByText("Skip to content");
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it('has main element with id="main-content"', () => {
    render(<App />);
    const main = document.getElementById("main-content");
    expect(main).toBeInTheDocument();
    expect(main?.tagName).toBe("MAIN");
  });

  it("has aria-label on theme toggle button", () => {
    render(<App />);
    const themeToggle = screen.getByTestId("theme-toggle");
    expect(themeToggle).toHaveAttribute("aria-label", "Toggle theme");
  });

  it("has aria-label on mobile menu button", () => {
    render(<App />);
    const menuButton = screen.getByLabelText("Menu");
    expect(menuButton).toBeInTheDocument();
  });

  it("has exactly one h1 heading", () => {
    render(<App />);
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
  });

  it("has multiple h2 headings", () => {
    render(<App />);
    const headings = screen.getAllByRole("heading", { level: 2 });
    expect(headings.length).toBeGreaterThan(1);
  });
});
