import { Card, Chip } from "@heroui/react";
import { motion } from "motion/react";
import { education } from "@/data/education";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTranslation } from "@/i18n";
import { fadeUpVariants } from "@/utils/animation";
import { formatDate, getSafeLocale } from "@/utils/locale";

export function EducationSection() {
  const { t, i18n } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const locale = getSafeLocale(i18n.language);

  return (
    <section id="education" data-testid="education-section" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-8 flex justify-center">
          <div className="h-1 w-16 rounded-full bg-(--accent)" />
        </div>

        <div className="mb-10 text-center">
          <span className="terminal-label mb-4">{t("education.label")}</span>
          <h2 className="text-3xl font-bold md:text-4xl">{t("education.title")}</h2>
        </div>

        <div className="space-y-5">
          {education.map((inst, index) => (
            <motion.div
              key={inst.id}
              variants={prefersReducedMotion ? undefined : fadeUpVariants}
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "visible"}
              viewport={{ once: true }}
              transition={prefersReducedMotion ? undefined : { delay: index * 0.08 }}
              className="mx-auto w-full max-w-4xl"
            >
              <Card className="shell-panel relative border border-(--border-strong) bg-[color-mix(in_oklab,var(--surface)_90%,transparent)] shadow-[0_18px_60px_rgba(0,0,0,0.16)]">
                <div className="absolute inset-y-0 left-0 w-px bg-[linear-gradient(to_bottom,transparent,var(--accent),transparent)]" />

                <Card.Header className="border-b border-border px-5 py-5 md:px-7">
                  <div className="w-full">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-(--accent)">
                        {inst.id}
                      </span>
                      {inst.courses.some((c) => c.isCurrent) && (
                        <span className="inline-flex shrink-0 items-center rounded-full bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-emerald-400">
                          {t("common.present")}
                        </span>
                      )}
                    </div>
                    <Card.Title className="text-xl md:text-2xl">
                      {t(`education.${inst.id}.institution`)}
                    </Card.Title>
                    <Card.Description className="text-sm md:text-base">
                      {t(`education.${inst.id}.location`)}
                    </Card.Description>
                  </div>
                </Card.Header>

                <Card.Content className="space-y-0 divide-y divide-border px-0">
                  {inst.courses.map((course) => {
                    const startDate = formatDate(course.period.start, locale);
                    const endDate =
                      course.period.end === "present"
                        ? t("common.present")
                        : formatDate(course.period.end, locale);
                    const dateDisplay =
                      course.period.start === course.period.end
                        ? startDate
                        : `${startDate} - ${endDate}`;

                    return (
                      <div key={course.id} className="px-5 py-4 md:px-7">
                        <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0 space-y-1">
                            <h4 className="text-base font-semibold leading-snug text-(--foreground)">
                              {t(`education.${inst.id}.${course.id}.degree`)}
                            </h4>
                            {course.hours != null && (
                              <span className="font-mono text-[11px] text-(--muted-foreground)">
                                {course.hours.toLocaleString()}h
                              </span>
                            )}
                          </div>
                          <div className="shrink-0 inline-flex items-center rounded-full border border-border bg-(--surface-elevated) px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-(--muted-foreground)">
                            {dateDisplay}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Card.Content>

                {(() => {
                  const allTags = [...new Set(inst.courses.flatMap((c) => c.tags))];
                  return allTags.length > 0 ? (
                    <Card.Footer className="border-t border-border px-5 py-4 md:px-7">
                      <div className="flex flex-wrap gap-2">
                        {allTags.map((tag) => (
                          <Chip
                            key={tag}
                            size="sm"
                            variant="secondary"
                            className="border-(--border-strong) bg-(--surface-elevated)/70 font-mono text-[11px] tracking-[0.08em] text-(--foreground)"
                          >
                            {tag}
                          </Chip>
                        ))}
                      </div>
                    </Card.Footer>
                  ) : null;
                })()}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
