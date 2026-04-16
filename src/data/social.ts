import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/SocialIcons";
import type { SocialLink } from "@/types";

// Email split into parts to prevent spam bots from scraping
const EMAIL_USER = "flaviojoaofelix.dev";
const EMAIL_DOMAIN = "gmail.com";

function buildMailtoLink(): string {
  const email = `${EMAIL_USER}@${EMAIL_DOMAIN}`;
  return `mailto:${email}`;
}

export const socialLinks: readonly SocialLink[] = [
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/flaviojoaofelix",
    icon: LinkedinIcon,
    label: "contact.linkedin",
  },
  {
    platform: "github",
    url: "https://github.com/flaviojoaofelix",
    icon: GithubIcon,
    label: "contact.github",
  },
  {
    platform: "email",
    url: buildMailtoLink(),
    icon: MailIcon,
    label: "contact.email",
  },
] as const satisfies readonly SocialLink[];
