import "@testing-library/jest-dom/vitest";

const OriginalLocale = Intl.Locale;

const PatchedLocale = class extends OriginalLocale {
  maximize() {
    try {
      return super.maximize();
    } catch {
      return new OriginalLocale(this.toString());
    }
  }

  minimize() {
    try {
      return super.minimize();
    } catch {
      return new OriginalLocale(this.toString());
    }
  }
};

Object.defineProperty(Intl, "Locale", {
  writable: true,
  configurable: true,
  value: PatchedLocale,
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

class IntersectionObserver {
  root = null;
  rootMargin = "";
  thresholds = [];
  observe = () => {};
  unobserve = () => {};
  disconnect = () => {};
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});
