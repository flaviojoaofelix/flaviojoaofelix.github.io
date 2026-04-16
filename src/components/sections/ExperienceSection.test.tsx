import { render, screen } from "@testing-library/react";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { i18n } from "@/i18n";

beforeEach(() => {
  i18n.changeLanguage("en");
  document.documentElement.lang = "en";
});

describe("ExperienceSection", () => {
  it("renders section with id experience", () => {
    render(<ExperienceSection />);
    const section = screen.getByTestId("experience-section");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "experience");
  });

  it('renders title "Experience"', () => {
    render(<ExperienceSection />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });

  it("renders 2 Card components for Dígitro and iFon", () => {
    render(<ExperienceSection />);
    expect(screen.getByText("Dígitro Tecnologia")).toBeInTheDocument();
    expect(screen.getByText("iFon")).toBeInTheDocument();
  });

  it("renders company name, role, and location for each card", () => {
    render(<ExperienceSection />);

    expect(screen.getByText("Dígitro Tecnologia")).toBeInTheDocument();
    expect(screen.getByText(/Developer/)).toBeInTheDocument();
    expect(screen.getByText(/Florianópolis, SC, Brasil/)).toBeInTheDocument();

    expect(screen.getByText("iFon")).toBeInTheDocument();
    expect(screen.getByText(/Freelance Professional/)).toBeInTheDocument();
    expect(screen.getByText(/Florianópolis e Região/)).toBeInTheDocument();
  });

  it("renders technologies as chips", () => {
    render(<ExperienceSection />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("PHP")).toBeInTheDocument();
    expect(screen.getByText("WordPress")).toBeInTheDocument();
  });

  it("shows current position indicator for Dígitro", () => {
    render(<ExperienceSection />);
    expect(screen.getByText("Present")).toBeInTheDocument();
  });

  it("renders date range for Dígitro ending with Present", () => {
    render(<ExperienceSection />);
    expect(screen.getByText(/Mar 2023 - Present/)).toBeInTheDocument();
  });

  it("renders iFon bullets list", () => {
    render(<ExperienceSection />);
    expect(screen.getByText("Website development on the WordPress platform")).toBeInTheDocument();
  });

  it("falls back to a safe locale when i18n.language is invalid", async () => {
    await i18n.changeLanguage("react-aria-3");
    document.documentElement.lang = "en";

    render(<ExperienceSection />);

    expect(screen.getByText(/Mar 2023 - Present/)).toBeInTheDocument();
  });
});
