import { motion } from "motion/react";
import { memo } from "react";
import { socialLinks } from "@/data/social";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTranslation } from "@/i18n";

export const ContactSection = memo(function ContactSection() {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  const content = (
    <section id="contact" data-testid="contact-section" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="mb-8 flex justify-center">
          <div className="h-1 w-16 rounded-full bg-[var(--accent)]" />
        </div>

        <div className="mb-8 text-center">
          <span className="terminal-label mb-4">{t("contact.label")}</span>
          <h2 className="text-3xl font-bold md:text-4xl">{t("contact.title")}</h2>
        </div>

        <p className="mb-8 text-center text-[var(--muted-foreground)] leading-relaxed">
          {t("contact.subtitle")}
        </p>

        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          {socialLinks.map((media) => {
            const Icon = media.icon;
            const isEmail = media.platform === "email";

            return (
              <a
                key={media.platform}
                href={media.url}
                {...(isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                data-testid={`social-link-${media.platform}`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface-elevated)]/70 px-5 py-2.5 font-mono text-[11px] tracking-[0.16em] text-[var(--foreground)] uppercase transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Icon size={16} />
                {t(media.label as "contact.linkedin" | "contact.github" | "contact.email")}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );

  if (prefersReducedMotion) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {content}
    </motion.div>
  );
});
