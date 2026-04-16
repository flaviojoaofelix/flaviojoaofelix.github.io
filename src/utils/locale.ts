const SUPPORTED_LOCALES = new Set(["en", "pt-BR", "es"]);

export function getSafeLocale(language: string): string {
  if (SUPPORTED_LOCALES.has(language)) return language;
  const parts = language.split("-");
  const baseLanguage = parts[0] ?? language;
  if (SUPPORTED_LOCALES.has(baseLanguage)) return baseLanguage;
  const htmlLang = document.documentElement.lang;
  return htmlLang && SUPPORTED_LOCALES.has(htmlLang) ? htmlLang : "en";
}

export function formatDate(iso: string, locale: string): string {
  const parts = iso.split("-").map(Number);
  const year = parts[0] ?? 2024;
  const month = parts[1] ?? 1;
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1));
}
