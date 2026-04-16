import { Button } from "@heroui/react";
import { Monitor, Moon, Sun } from "lucide-react";
import type { ResolvedTheme, Theme } from "@/types";

interface ThemeToggleProps {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  onToggle: () => void;
}

const iconMap: Record<ResolvedTheme, typeof Sun> = {
  light: Sun,
  dark: Moon,
};

export function ThemeToggle({ theme, resolvedTheme, onToggle }: ThemeToggleProps) {
  const Icon = theme === "system" ? Monitor : iconMap[resolvedTheme];

  return (
    <Button
      variant="ghost"
      size="sm"
      onPress={onToggle}
      aria-label="Toggle theme"
      data-testid="theme-toggle"
      isIconOnly
    >
      <Icon size={18} />
    </Button>
  );
}
