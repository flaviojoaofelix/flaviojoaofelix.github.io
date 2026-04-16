import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { i18n } from "@/i18n";

beforeEach(() => {
  i18n.changeLanguage("en");
  document.documentElement.lang = "en";
});

describe("LanguageSwitcher", () => {
  it("renders with current language displayed", () => {
    render(<LanguageSwitcher />);
    expect(screen.getByTestId("language-switcher")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Switch language" })).toHaveTextContent("EN");
  });

  it("has correct aria-label on trigger", () => {
    render(<LanguageSwitcher />);
    expect(screen.getByRole("button", { name: "Switch language" })).toBeInTheDocument();
  });

  it("updates document.documentElement.lang when language changes", async () => {
    render(<LanguageSwitcher />);

    await i18n.changeLanguage("pt-BR");
    document.documentElement.lang = "pt-BR";
    expect(document.documentElement.lang).toBe("pt-BR");

    await i18n.changeLanguage("es");
    document.documentElement.lang = "es";
    expect(document.documentElement.lang).toBe("es");
  });

  it("shows PT when language is pt-BR", async () => {
    await i18n.changeLanguage("pt-BR");
    render(<LanguageSwitcher />);
    expect(screen.getByRole("button", { name: "Switch language" })).toHaveTextContent("PT");
  });

  it("shows ES when language is es", async () => {
    await i18n.changeLanguage("es");
    render(<LanguageSwitcher />);
    expect(screen.getByRole("button", { name: "Switch language" })).toHaveTextContent("ES");
  });

  it("changes to pt-BR through the dropdown and updates document lang", async () => {
    const user = userEvent.setup();

    render(<LanguageSwitcher />);

    await user.click(screen.getByRole("button", { name: "Switch language" }));
    await user.click(screen.getByRole("menuitemradio", { name: "PT" }));

    expect(i18n.language).toBe("pt-BR");
    expect(document.documentElement.lang).toBe("pt-BR");
  });
});
