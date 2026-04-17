<div align="center">

# Flávio João Félix — Portfolio

[![Deploy to GitHub Pages](https://github.com/flaviojoaofelix/flaviojoaofelix.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/flaviojoaofelix/flaviojoaofelix.github.io/actions/workflows/deploy.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Bun](https://img.shields.io/badge/Bun-runtime-000?logo=bun&logoColor=white)](https://bun.sh/)
[![Vitest](https://img.shields.io/badge/Vitest-4-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)

**Personal portfolio & resume website** with a terminal-inspired UI, built with modern web technologies and deployed via CI/CD to GitHub Pages.

[**Live Demo → flaviojoaofelix.dev**](https://flaviojoaofelix.dev)

</div>

---

## About

Full Stack Developer portfolio featuring a distinctive **terminal/shell-inspired design** that reflects a developer's daily environment. The site showcases professional experience, technical skills, projects, and contact information — all with smooth animations, internationalization, and accessibility in mind.

> Built with ❤️ and AI-driven development. Designed to serve as a professional reference for recruiters and peers.

---

## Features

- **Terminal-Inspired UI** — Shell-panel layout with monospace typography, status tags, and a dark-first aesthetic
- **Dark / Light / System Theme** — Persistent theme toggle that respects the user's OS preference and saves to `localStorage`
- **i18n — 3 Languages** — Automatic browser language detection with support for **English**, **Portuguese (BR)**, and **Spanish**
- **Responsive Design** — Mobile-first layout that adapts seamlessly from phones to ultrawide monitors
- **Motion Animations** — Staggered fade-in animations powered by [Motion](https://motion.dev/) with full `prefers-reduced-motion` support
- **SEO Optimized** — Open Graph meta tags, semantic HTML, and proper `<title>` / `<meta description>`
- **Accessibility (a11y)** — Skip-to-content link, ARIA attributes, keyboard navigation, and high-contrast color tokens
- **Contact Spam Protection** — Email address split in source to prevent bot scraping
- **CI/CD Pipeline** — Automated type checking, linting, testing, building, and deployment via GitHub Actions

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Terminal-style panel with avatar, name, role, and call-to-action buttons |
| **About** | Professional summary with technical background and career highlights |
| **Experience** | Timeline of work history with roles, companies, and tech stacks |
| **Skills** | Categorized skill grid covering Frontend, Backend, QA, DevOps, Databases, and more |
| **Projects** | Showcase of featured projects with links to source code and live demos |
| **Contact** | Social links (LinkedIn, GitHub, Email) with animated icons |

---

## Tech Stack

### Core

| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev/) | UI library with the latest features |
| [TypeScript 6](https://www.typescriptlang.org/) | Static type safety |
| [Vite 8](https://vite.dev/) | Build tool with HMR |
| [Bun](https://bun.sh/) | JavaScript runtime & package manager |

### UI & Styling

| Technology | Purpose |
|------------|---------|
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS framework |
| [HeroUI](https://www.heroui.com/) | React component library |
| [Motion](https://motion.dev/) | Animation library (Framer Motion successor) |
| [Lucide React](https://lucide.dev/) | Icon library |

### Internationalization

| Technology | Purpose |
|------------|---------|
| [i18next](https://www.i18next.com/) | Internationalization framework |
| [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector) | Automatic browser language detection |

### Quality Assurance

| Technology | Purpose |
|------------|---------|
| [Vitest](https://vitest.dev/) | Unit & integration testing |
| [Testing Library](https://testing-library.com/) | React component testing utilities |
| [Biome](https://biomejs.dev/) | Linting, formatting, and import organization |
| [Husky](https://typicode.github.io/husky/) | Git pre-commit hooks (lint + type-check + test) |

### Infrastructure

| Technology | Purpose |
|------------|---------|
| [GitHub Actions](https://github.com/features/actions) | CI/CD pipeline |
| [GitHub Pages](https://pages.github.com/) | Static site hosting |
| [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) | Deployment action |

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 20+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/flaviojoaofelix/flaviojoaofelix.github.io.git
cd flaviojoaofelix.github.io

# Install dependencies
bun install
```

### Development

```bash
# Start the development server (with HMR)
bun run dev

# Run type checking
bunx tsc --noEmit

# Run linting
bun run lint

# Run tests
bun run test

# Run tests in watch mode
bun run test:watch
```

### Production Build

```bash
# Build for production
bun run build

# Preview the production build locally
bun run preview
```

---

## Project Structure

```
src/
├── __tests__/              # Integration & SEO/accessibility tests
│   ├── integration.test.tsx
│   └── seo-a11y.test.tsx
├── components/
│   ├── layout/             # Header, Footer, LanguageSwitcher, ThemeToggle
│   ├── sections/           # Hero, About, Experience, Skills, Projects, Contact
│   └── ui/                 # Avatar, SocialIcons
├── data/                   # Static data (experience, skills, projects, social links)
├── hooks/                  # Custom hooks (useTheme, useReducedMotion)
├── i18n/                   # i18n configuration & locale files
│   └── locales/            # en.json, pt-BR.json, es.json
├── types/                  # TypeScript type definitions
├── utils/                  # Utility functions (animation variants, locale helpers)
├── App.tsx                 # Root component
├── index.css               # Global styles & CSS custom properties
├── main.tsx                # Application entry point
└── test-setup.ts           # Vitest setup with Testing Library matchers
```

---

## CI/CD Pipeline

Every push to the `main` branch triggers an automated pipeline:

```
Checkout → Setup Bun → Install → Type Check → Lint → Test → Build → Deploy
```

The pipeline runs:
1. **TypeScript type checking** (`tsc --noEmit`)
2. **Biome lint & format check** (`biome check ./src`)
3. **Vitest test suite** (`vitest run`)
4. **Production build** (`vite build`)
5. **Deploy to `gh-pages` branch** with custom domain (`flaviojoaofelix.dev`)

Pre-commit hooks (via Husky) also enforce quality gates locally before any commit is created.

---

## Architecture Decisions

| Decision | Rationale |
|----------|-----------|
| **Bun over npm/yarn** | Faster installs, native TypeScript support, built-in test runner compatibility |
| **Biome over ESLint** | Unified lint + format in a single tool, faster via Rust-based engine |
| **Tailwind CSS v4** | CSS-first configuration, Vite plugin integration, smaller bundle |
| **Motion over Framer Motion** | Successor library with smaller bundle size and improved API |
| **i18next + browser detection** | Industry-standard i18n with seamless locale auto-detection |
| **Data layer separation** | Static data in `src/data/` keeps components clean and testable |
| **CSS custom properties** | Theme tokens via `data-theme` attribute for zero-JS theme switching |

---

## Testing Strategy

- **Unit Tests** — Individual components, hooks, and data validation
- **Integration Tests** — Full App rendering, navigation, and section visibility
- **SEO & Accessibility Tests** — Meta tag verification, heading hierarchy, skip links, and ARIA attributes
- **Pre-commit Gate** — Husky runs type-check + lint + test before every commit
- **CI Gate** — GitHub Actions enforces the same checks on every push to `main`

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**[flaviojoaofelix.dev](https://flaviojoaofelix.dev)** · [LinkedIn](https://linkedin.com/in/flaviojoaofelix) · [GitHub](https://github.com/flaviojoaofelix) · [Email](mailto:flaviojoaofelix.dev@gmail.com)

</div>
