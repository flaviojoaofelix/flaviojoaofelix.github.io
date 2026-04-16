import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ContactSection } from "./ContactSection";

vi.mock("@/data/social", () => ({
  socialLinks: [
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/flaviojoaofelix",
      icon: () => null,
      label: "contact.linkedin",
    },
    {
      platform: "github",
      url: "https://github.com/flaviojoaofelix",
      icon: () => null,
      label: "contact.github",
    },
  ],
}));

vi.mock("@/i18n", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        "contact.title": "Contact",
        "contact.subtitle": "Let's connect! Feel free to reach out through the platforms below.",
        "contact.label": "Connect",
        "contact.linkedin": "LinkedIn",
        "contact.github": "GitHub",
      };
      return translations[key] ?? key;
    },
  }),
}));

describe("ContactSection", () => {
  it("renders section with id 'contact'", () => {
    const { container } = render(<ContactSection />);
    const section = container.querySelector("section#contact");
    expect(section).toBeDefined();
  });

  it("renders section with data-testid 'contact-section'", () => {
    const { container } = render(<ContactSection />);
    const section = container.querySelector('[data-testid="contact-section"]');
    expect(section).toBeDefined();
  });

  it("renders title from locale", () => {
    render(<ContactSection />);
    expect(screen.getByText("Contact")).toBeDefined();
  });

  it("renders subtitle from locale", () => {
    render(<ContactSection />);
    expect(screen.getByText(/Let's connect!/)).toBeDefined();
  });

  it("renders LinkedIn link with correct href", () => {
    render(<ContactSection />);
    const linkedinLink = screen.getByTestId("social-link-linkedin");
    expect(linkedinLink).toBeDefined();
    expect(linkedinLink.tagName.toLowerCase()).toBe("a");
    expect(linkedinLink.getAttribute("href")).toBe("https://linkedin.com/in/flaviojoaofelix");
  });

  it("renders GitHub link with correct href", () => {
    render(<ContactSection />);
    const githubLink = screen.getByTestId("social-link-github");
    expect(githubLink).toBeDefined();
    expect(githubLink.tagName.toLowerCase()).toBe("a");
    expect(githubLink.getAttribute("href")).toBe("https://github.com/flaviojoaofelix");
  });

  it("renders LinkedIn link with target='_blank'", () => {
    render(<ContactSection />);
    const linkedinLink = screen.getByTestId("social-link-linkedin");
    expect(linkedinLink.getAttribute("target")).toBe("_blank");
  });

  it("renders GitHub link with target='_blank'", () => {
    render(<ContactSection />);
    const githubLink = screen.getByTestId("social-link-github");
    expect(githubLink.getAttribute("target")).toBe("_blank");
  });

  it("renders LinkedIn link with rel='noopener noreferrer'", () => {
    render(<ContactSection />);
    const linkedinLink = screen.getByTestId("social-link-linkedin");
    expect(linkedinLink.getAttribute("rel")).toBe("noopener noreferrer");
  });

  it("renders GitHub link with rel='noopener noreferrer'", () => {
    render(<ContactSection />);
    const githubLink = screen.getByTestId("social-link-github");
    expect(githubLink.getAttribute("rel")).toBe("noopener noreferrer");
  });

  it("renders LinkedIn label from locale", () => {
    render(<ContactSection />);
    expect(screen.getByText("LinkedIn")).toBeDefined();
  });

  it("renders GitHub label from locale", () => {
    render(<ContactSection />);
    expect(screen.getByText("GitHub")).toBeDefined();
  });
});
