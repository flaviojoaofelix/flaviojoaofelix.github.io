import type { ComponentType } from "react";

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export type SocialPlatform = "linkedin" | "github" | "email";

export interface SocialLink {
  readonly platform: SocialPlatform;
  readonly url: string;
  readonly icon: ComponentType<{ size?: number }>;
  readonly label: string;
}

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly period: {
    readonly start: string; // ISO format: "YYYY-MM"
    readonly end: string; // ISO format: "YYYY-MM" or "present"
  };
  readonly location: string;
  readonly type: "fulltime" | "freelance";
  readonly isCurrent: boolean;
  readonly technologies: readonly string[];
  // role comes from i18n: t(`experience.${id}.role`)
}

export interface SkillCategory {
  readonly name: string;
  readonly skills: readonly string[];
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly technologies: readonly string[];
  readonly github?: string;
  readonly liveUrl?: string;
  readonly linkLabel?: string;
  readonly image?: string;
  // description comes from i18n: t(`projects.${id}.description`)
}

export type Language = "en" | "pt-BR" | "es";
