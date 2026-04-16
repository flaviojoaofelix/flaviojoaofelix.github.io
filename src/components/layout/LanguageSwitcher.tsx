import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownPopover,
  DropdownTrigger,
} from "@heroui/react";
import { useTranslation } from "@/i18n";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "pt-BR", label: "PT" },
  { code: "es", label: "ES" },
] as const;

type LanguageCode = (typeof LANGUAGES)[number]["code"];

const LANGUAGE_CODES = new Set<LanguageCode>(LANGUAGES.map((language) => language.code));

const languageLabels: Record<string, string> = {
  en: "EN",
  "pt-BR": "PT",
  es: "ES",
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (key: string) => {
    if (!LANGUAGE_CODES.has(key as LanguageCode)) {
      return;
    }

    i18n.changeLanguage(key);
    document.documentElement.lang = key;
  };

  return (
    <div data-testid="language-switcher">
      <Dropdown>
        <DropdownTrigger aria-label="Switch language" data-testid="language-switcher-trigger">
          <span className="inline-flex min-w-0 items-center rounded-md border border-[var(--border)] bg-[var(--surface-elevated)]/70 px-2.5 py-1.5 font-mono text-[11px] tracking-[0.24em] text-[var(--muted-foreground)] uppercase">
            {languageLabels[i18n.language] ?? "EN"}
          </span>
        </DropdownTrigger>
        <DropdownPopover>
          <DropdownMenu
            aria-label="Select language"
            selectionMode="single"
            selectedKeys={[i18n.language]}
          >
            {LANGUAGES.map((language) => (
              <DropdownItem key={language.code} onPress={() => handleLanguageChange(language.code)}>
                {language.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </DropdownPopover>
      </Dropdown>
    </div>
  );
}

export { LanguageSwitcher };
