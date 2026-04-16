import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it('renders "FF" initials when no src is provided and name is "Flávio João Félix"', () => {
    render(<Avatar name="Flávio João Félix" />);
    const avatar = screen.getByTestId("avatar");
    expect(avatar.textContent).toBe("FF");
  });

  it('renders "JD" initials when no src is provided and name is "John Doe"', () => {
    render(<Avatar name="John Doe" />);
    const avatar = screen.getByTestId("avatar");
    expect(avatar.textContent).toBe("JD");
  });

  it('renders "S" initial when no src is provided and name is a single word "Single"', () => {
    render(<Avatar name="Single" />);
    const avatar = screen.getByTestId("avatar");
    expect(avatar.textContent).toBe("S");
  });

  it("renders image when src is provided", () => {
    render(<Avatar name="John Doe" src="https://example.com/avatar.jpg" />);
    const avatar = screen.getByTestId("avatar");
    expect(avatar.tagName).toBe("IMG");
    expect(avatar).toHaveAttribute("src", "https://example.com/avatar.jpg");
    expect(avatar).toHaveAttribute("alt", "John Doe");
  });

  it("renders with correct size classes", () => {
    const { rerender } = render(<Avatar name="John Doe" size="sm" />);
    let avatar = screen.getByTestId("avatar");
    expect(avatar).toHaveClass("w-10", "h-10", "text-xs");

    rerender(<Avatar name="John Doe" size="md" />);
    avatar = screen.getByTestId("avatar");
    expect(avatar).toHaveClass("w-16", "h-16", "text-sm");

    rerender(<Avatar name="John Doe" size="lg" />);
    avatar = screen.getByTestId("avatar");
    expect(avatar).toHaveClass("w-24", "h-24", "text-lg");

    rerender(<Avatar name="John Doe" size="xl" />);
    avatar = screen.getByTestId("avatar");
    expect(avatar).toHaveClass("w-32", "h-32", "text-2xl");
  });

  it("falls back to initials when image fails to load", () => {
    render(<Avatar name="John Doe" src="invalid-image.jpg" />);
    const avatar = screen.getByTestId("avatar");
    const img = avatar as HTMLImageElement;
    expect(img.tagName).toBe("IMG");
    act(() => {
      img.dispatchEvent(new Event("error"));
    });
    const avatarAfterError = screen.getByTestId("avatar");
    expect(avatarAfterError.textContent).toBe("JD");
  });

  it("applies gradient background when rendering initials", () => {
    render(<Avatar name="John Doe" />);
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toHaveClass("avatar-gradient");
  });
});
