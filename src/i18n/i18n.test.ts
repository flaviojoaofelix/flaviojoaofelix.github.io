import { i18n } from "@/i18n";
import en from "@/i18n/locales/en.json";
import es from "@/i18n/locales/es.json";
import ptBR from "@/i18n/locales/pt-BR.json";

function getAllKeys(obj: unknown, prefix = ""): string[] {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) return [];
  const keys: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    keys.push(fullKey);
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      keys.push(...getAllKeys(value, fullKey));
    }
  }
  return keys;
}

describe("i18n configuration", () => {
  it("detects browser language or falls back to a supported locale", () => {
    const detectedLanguage = i18n.language;
    const supportedLanguages = ["en", "pt-BR", "es"];
    const isSupported =
      supportedLanguages.includes(detectedLanguage) ||
      detectedLanguage.startsWith("en") ||
      detectedLanguage.startsWith("pt") ||
      detectedLanguage.startsWith("es");
    expect(isSupported).toBe(true);
  });

  it("has fallbackLng set to 'en'", () => {
    expect(i18n.options.fallbackLng).toContain("en");
  });

  it("changeLanguage works", async () => {
    await i18n.changeLanguage("pt-BR");
    expect(i18n.language).toBe("pt-BR");
    await i18n.changeLanguage("en");
    expect(i18n.language).toBe("en");
  });
});

describe("translation key parity", () => {
  it("en, pt-BR, and es have identical key structures", () => {
    const enKeys = getAllKeys(en).sort();
    const ptBRKeys = getAllKeys(ptBR).sort();
    const esKeys = getAllKeys(es).sort();

    expect(enKeys).toEqual(ptBRKeys);
    expect(enKeys).toEqual(esKeys);
  });

  it("experience.ifon.bullets is an array in all locales", () => {
    expect(Array.isArray(en.experience.ifon.bullets)).toBe(true);
    expect(Array.isArray(ptBR.experience.ifon.bullets)).toBe(true);
    expect(Array.isArray(es.experience.ifon.bullets)).toBe(true);
  });

  it("all locales have non-empty values for nav keys", () => {
    for (const locale of [en, ptBR, es]) {
      for (const [_key, value] of Object.entries(locale.nav)) {
        expect(value).toBeTruthy();
        expect(typeof value).toBe("string");
        expect(value.length).toBeGreaterThan(0);
      }
    }
  });
});
