import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useReducedMotion } from "./useReducedMotion";

const mockAddEventListener = vi.fn();
const mockRemoveEventListener = vi.fn();

const createMockMediaQuery = (matches: boolean) => {
  const query = vi.fn().mockReturnValue({
    matches,
    addEventListener: mockAddEventListener,
    removeEventListener: mockRemoveEventListener,
  });
  return query;
};

describe("useReducedMotion", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns false when prefers-reduced-motion does not match", () => {
    window.matchMedia = createMockMediaQuery(false);

    const { result } = renderHook(() => useReducedMotion());

    expect(result.current).toBe(false);
  });

  it("returns true when prefers-reduced-motion matches", () => {
    window.matchMedia = createMockMediaQuery(true);

    const { result } = renderHook(() => useReducedMotion());

    expect(result.current).toBe(true);
  });

  it("adds a change listener on mount and removes on unmount", () => {
    window.matchMedia = createMockMediaQuery(false);

    const { unmount } = renderHook(() => useReducedMotion());

    expect(mockAddEventListener).toHaveBeenCalledWith("change", expect.any(Function));
    unmount();
    expect(mockRemoveEventListener).toHaveBeenCalledWith("change", expect.any(Function));
  });
});
