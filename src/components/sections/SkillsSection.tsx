import { Chip, Surface } from "@heroui/react";
import { motion } from "motion/react";
import { memo } from "react";
import { skillCategories } from "@/data/skills";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTranslation } from "@/i18n";
import { fadeUpVariants } from "@/utils/animation";

export const SkillsSection = memo(function SkillsSection() {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  const content = (
    <section id="skills" data-testid="skills-section" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-8 flex justify-center">
          <div className="h-1 w-16 bg-[var(--accent)] rounded-full" />
        </div>

        <div className="mb-8 text-center">
          <span className="terminal-label mb-4">{t("skills.label")}</span>
          <h2 className="text-3xl font-bold md:text-4xl">{t("skills.title")}</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={prefersReducedMotion ? undefined : fadeUpVariants}
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "visible"}
              viewport={{ once: true }}
              transition={prefersReducedMotion ? undefined : { delay: index * 0.1 }}
              data-testid={`skill-category-${category.name}`}
            >
              <Surface
                variant="secondary"
                className="shell-panel h-full rounded-[1.25rem] border border-[var(--border-strong)] bg-[color-mix(in_oklab,var(--surface)_90%,transparent)] shadow-[0_18px_60px_rgba(0,0,0,0.16)]"
              >
                <div className="space-y-5 p-6">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                    <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--muted-foreground)] uppercase">
                      {category.name}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[var(--foreground)]">
                    {category.name}
                  </h3>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        size="sm"
                        variant="secondary"
                        className="border-[var(--border-strong)] bg-[var(--surface-elevated)]/70 font-mono text-[11px] tracking-[0.08em] text-[var(--foreground)]"
                      >
                        {skill}
                      </Chip>
                    ))}
                  </div>
                </div>
              </Surface>
            </motion.div>
          ))}
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
