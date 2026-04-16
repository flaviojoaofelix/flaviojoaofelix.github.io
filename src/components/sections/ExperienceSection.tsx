import { Card, Chip } from "@heroui/react";
import { motion } from "motion/react";
import { experiences } from "@/data/experience";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTranslation } from "@/i18n";
import { fadeUpVariants } from "@/utils/animation";
import { formatDate, getSafeLocale } from "@/utils/locale";

export function ExperienceSection() {
  const { t, i18n } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const locale = getSafeLocale(i18n.language);

  return (
    <section id="experience" data-testid="experience-section" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-8 flex justify-center">
          <div className="h-1 w-16 rounded-full bg-[var(--accent)]" />
        </div>

        <div className="mb-10 text-center">
          <span className="terminal-label mb-4">{t("experience.label")}</span>
          <h2 className="text-3xl font-bold md:text-4xl">{t("experience.title")}</h2>
        </div>

        <div className="space-y-5">
          {experiences.map((exp, index) => {
            const startDate = formatDate(exp.period.start, locale);
            const endDate =
              exp.period.end === "present"
                ? t("common.present")
                : formatDate(exp.period.end, locale);

            const dateRange = `${startDate} - ${endDate}`;

            return (
              <motion.div
                key={exp.id}
                variants={prefersReducedMotion ? undefined : fadeUpVariants}
                initial={prefersReducedMotion ? undefined : "hidden"}
                whileInView={prefersReducedMotion ? undefined : "visible"}
                viewport={{ once: true }}
                transition={prefersReducedMotion ? undefined : { delay: index * 0.08 }}
                className="mx-auto w-full max-w-4xl"
              >
                <Card className="shell-panel relative border border-[var(--border-strong)] bg-[color-mix(in_oklab,var(--surface)_90%,transparent)] shadow-[0_18px_60px_rgba(0,0,0,0.16)]">
                  <div className="absolute inset-y-0 left-0 w-px bg-[linear-gradient(to_bottom,transparent,var(--accent),transparent)]" />
                  <Card.Header className="border-b border-[var(--border)] px-5 py-5 md:px-7">
                    <div className="flex w-full flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="space-y-2 text-left">
                        <div className="flex min-w-0 items-center gap-3">
                          <span className="font-mono text-[11px] tracking-[0.28em] text-[var(--accent)] uppercase">
                            {exp.id}
                          </span>
                          {exp.isCurrent && (
                            <span className="inline-flex shrink-0 items-center rounded-full bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[10px] font-medium tracking-[0.08em] text-emerald-400 uppercase">
                              {t("common.present")}
                            </span>
                          )}
                        </div>
                        <Card.Title className="text-xl md:text-2xl">{exp.company}</Card.Title>
                        <Card.Description className="text-sm md:text-base">
                          {t(`experience.${exp.id}.role`)} &middot; {exp.location}
                        </Card.Description>
                      </div>

                      <div className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1.5 font-mono text-xs tracking-[0.12em] text-[var(--muted-foreground)] md:self-start">
                        {dateRange}
                      </div>
                    </div>
                  </Card.Header>

                  <Card.Content className="space-y-4 px-5 py-5 md:px-7">
                    {exp.id === "ifon" ? (
                      <ul className="space-y-3 text-sm leading-relaxed text-[var(--muted-foreground)] md:text-base">
                        {(
                          t("experience.ifon.bullets", {
                            returnObjects: true,
                          }) as string[]
                        ).map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm leading-relaxed text-[var(--muted-foreground)] md:text-base">
                        {t(`experience.${exp.id}.description`)}
                      </p>
                    )}
                  </Card.Content>

                  <Card.Footer className="border-t border-[var(--border)] px-5 py-4 md:px-7">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          size="sm"
                          variant="secondary"
                          className="border-[var(--border-strong)] bg-[var(--surface-elevated)]/70 font-mono text-[11px] tracking-[0.08em] text-[var(--foreground)]"
                        >
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </Card.Footer>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
