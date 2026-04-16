import { useTranslation } from "@/i18n";

const TECH_STACK = [
  { name: "Bun", url: "https://bun.sh" },
  { name: "Vite", url: "https://vite.dev" },
  { name: "React", url: "https://react.dev" },
  { name: "TypeScript", url: "https://www.typescriptlang.org" },
  { name: "HeroUI", url: "https://www.heroui.com" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com" },
] as const;

const AI_TOOLS = [
  { name: "OpenCode", url: "https://opencode.ai" },
  { name: "OMO", url: "https://github.com/OhMyOpenCode" },
] as const;

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      id="footer"
      className="border-t border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_92%,transparent)]"
      data-testid="footer"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-10 text-sm text-[var(--muted-foreground)]">
        <div className="terminal-label">{t("footer.session_closed")}</div>

        <div className="flex flex-col items-center gap-3">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase">
            {t("footer.copyright")}
          </p>

          <p className="flex flex-wrap items-center justify-center gap-1.5 font-mono text-[11px] text-[var(--muted-foreground)]">
            <span>{t("footer.built_with")}</span>
            {TECH_STACK.map((tech, index) => (
              <span key={tech.name} className="inline-flex items-center gap-1">
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] transition-colors hover:text-[var(--accent-foreground)]"
                >
                  {tech.name}
                </a>
                {index < TECH_STACK.length - 1 && <span className="text-[var(--border)]">·</span>}
              </span>
            ))}
          </p>

          <p className="flex flex-wrap items-center justify-center gap-1.5 font-mono text-[11px] text-[var(--muted-foreground)]">
            <span>{t("footer.ai_driven")}</span>
            {AI_TOOLS.map((tool, index) => (
              <span key={tool.name} className="inline-flex items-center gap-1">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] transition-colors hover:text-[var(--accent-foreground)]"
                >
                  {tool.name}
                </a>
                {index < AI_TOOLS.length - 1 && <span className="text-[var(--border)]">·</span>}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
