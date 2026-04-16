import { motion } from "motion/react";
import { memo } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTranslation } from "@/i18n";

export const AboutSection = memo(function AboutSection() {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  const content = (
    <section id="about" data-testid="about-section" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="mb-8 flex justify-center">
          <div className="h-1 w-16 bg-[var(--accent)] rounded-full" />
        </div>

        <div className="mb-8 text-center">
          <span className="terminal-label mb-4">{t("about.label")}</span>
          <h2 className="text-3xl font-bold md:text-4xl">{t("about.title")}</h2>
        </div>

        <div className="shell-panel rounded-[1.25rem] border border-[var(--border-strong)] bg-[color-mix(in_oklab,var(--surface)_90%,transparent)] px-6 py-6 text-[var(--muted-foreground)] shadow-[0_18px_60px_rgba(0,0,0,0.16)] md:px-8 md:py-8">
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span className="font-mono text-[11px] tracking-[0.24em] text-[var(--muted-foreground)] uppercase">
              {t("about.file_label")}
            </span>
          </div>

          <div className="space-y-6 leading-relaxed">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>
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
