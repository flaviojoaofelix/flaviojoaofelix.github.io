import { Button } from "@heroui/react";
import { Menu } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { useTheme } from "@/hooks/useTheme";
import { useTranslation } from "@/i18n";

const NAV_ITEMS = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "education", href: "#education" },
  { key: "certifications", href: "#certifications" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const;

export function Header() {
  const { theme, resolvedTheme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-border bg-[color-mix(in_oklab,var(--background)_72%,transparent)]/80 backdrop-blur-md"
      data-testid="header"
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <a
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.28em] text-(--foreground) uppercase"
          href="#hero"
        >
          <span className="h-2 w-2 rounded-full bg-(--accent) shadow-[0_0_18px_var(--accent)]" />
          FJF.DEV
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a href={item.href} key={item.key}>
              <Button
                variant="ghost"
                size="sm"
                className="font-mono text-[11px] tracking-[0.18em] text-(--muted-foreground) uppercase transition-colors hover:text-(--foreground)"
              >
                {t(`nav.${item.key}`)}
              </Button>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle theme={theme} resolvedTheme={resolvedTheme} onToggle={toggleTheme} />
          <LanguageSwitcher />

          <Button
            className="md:hidden"
            variant="ghost"
            size="sm"
            isIconOnly
            aria-label="Menu"
            onPress={() => setMobileMenuOpen((prev) => !prev)}
          >
            <Menu size={18} />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-border bg-(--surface)/95 px-4 pb-3 pt-2 md:hidden">
          {NAV_ITEMS.map((item) => (
            <a href={item.href} key={item.key} onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start font-mono text-[11px] tracking-[0.18em] uppercase"
              >
                {t(`nav.${item.key}`)}
              </Button>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
