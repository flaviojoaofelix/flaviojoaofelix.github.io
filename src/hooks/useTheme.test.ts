import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useTheme } from "./useTheme";

const mockSetAttribute = vi.fn();
const mockAddEventListener = vi.fn();
const mockRemoveEventListener = vi.fn();

function setupDOM(themePreference: boolean) {
  Object.defineProperty(document, "documentElement", {
    value: {
      setAttribute: mockSetAttribute,
      classList: {
        add: vi.fn(),
        remove: vi.fn(),
      },
      className: "",
    },
    writable: true,
  });

  window.matchMedia = vi.fn().mockImplementation((query: string) => {
    if (query.includes("prefers-color-scheme: dark")) {
      return {
        matches: themePreference,
        addEventListener: mockAddEventListener,
        removeEventListener: mockRemoveEventListener,
      };
    }
    return { matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() };
  });
}

describe("useTheme", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    setupDOM(false);
  });

  it("defaults to system theme when localStorage is empty", () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("system");
  });

  it("reads theme from localStorage on mount", () => {
    localStorage.setItem("theme", "dark");

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("dark");
    expect(result.current.isDark).toBe(true);
  });

  it("cycles system → light → dark → system", () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("system");

    act(() => result.current.toggleTheme());
    expect(result.current.theme).toBe("light");

    act(() => result.current.toggleTheme());
    expect(result.current.theme).toBe("dark");

    act(() => result.current.toggleTheme());
    expect(result.current.theme).toBe("system");
  });

  it("persists theme to localStorage on toggle", () => {
    const { result } = renderHook(() => useTheme());

    act(() => result.current.toggleTheme());

    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("applies data-theme and className to documentElement", () => {
    setupDOM(false);

    renderHook(() => useTheme());

    expect(mockSetAttribute).toHaveBeenCalledWith("data-theme", "light");
  });

  it("resolves system theme based on OS preference (dark)", () => {
    setupDOM(true);

    const { result } = renderHook(() => useTheme());

    expect(result.current.resolvedTheme).toBe("dark");
    expect(result.current.isDark).toBe(true);
  });

  it("resolves system theme based on OS preference (light)", () => {
    setupDOM(false);

    const { result } = renderHook(() => useTheme());

    expect(result.current.resolvedTheme).toBe("light");
    expect(result.current.isDark).toBe(false);
  });
});
