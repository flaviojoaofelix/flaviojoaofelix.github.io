import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ThemeToggle } from "./ThemeToggle";

describe("ThemeToggle", () => {
  it("renders with the Moon icon when theme is dark", () => {
    render(<ThemeToggle theme="dark" resolvedTheme="dark" onToggle={vi.fn()} />);

    const button = screen.getByTestId("theme-toggle");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-label", "Toggle theme");
  });

  it("renders with the Sun icon when theme is light", () => {
    render(<ThemeToggle theme="light" resolvedTheme="light" onToggle={vi.fn()} />);

    const button = screen.getByTestId("theme-toggle");
    expect(button).toBeInTheDocument();
  });

  it("renders with the Monitor icon when theme is system", () => {
    render(<ThemeToggle theme="system" resolvedTheme="dark" onToggle={vi.fn()} />);

    const button = screen.getByTestId("theme-toggle");
    expect(button).toBeInTheDocument();
  });

  it("calls onToggle when pressed", async () => {
    const onToggle = vi.fn();
    const user = userEvent.setup();

    render(<ThemeToggle theme="light" resolvedTheme="light" onToggle={onToggle} />);

    await user.click(screen.getByTestId("theme-toggle"));

    expect(onToggle).toHaveBeenCalledOnce();
  });
});
