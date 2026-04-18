import { Chip, Surface } from "@heroui/react";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { certifications } from "@/data/certifications";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTranslation } from "@/i18n";
import { fadeUpVariants } from "@/utils/animation";
import { formatDate, getSafeLocale } from "@/utils/locale";

export function CertificationsSection() {
  const { t, i18n } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const locale = getSafeLocale(i18n.language);

  return (
    <section id="certifications" data-testid="certifications-section" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-8 flex justify-center">
          <div className="h-1 w-16 bg-(--accent) rounded-full" />
        </div>

        <div className="mb-8 text-center">
          <span className="terminal-label mb-4">{t("certifications.label")}</span>
          <h2 className="text-3xl font-bold md:text-4xl">{t("certifications.title")}</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={prefersReducedMotion ? undefined : fadeUpVariants}
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "visible"}
              viewport={{ once: true }}
              transition={prefersReducedMotion ? undefined : { delay: index * 0.1 }}
            >
              <Surface
                variant="secondary"
                className="shell-panel h-full rounded-[1.25rem] border border-(--border-strong) bg-[color-mix(in_oklab,var(--surface)_90%,transparent)] shadow-[0_18px_60px_rgba(0,0,0,0.16)]"
              >
                <div className="space-y-4 p-6">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-(--accent)" />
                    <span className="font-mono text-[11px] tracking-[0.22em] text-(--muted-foreground) uppercase">
                      {cert.issuer}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-(--foreground)">{t(cert.name)}</h3>

                  <div className="flex flex-wrap items-center gap-2">
                    {cert.date && (
                      <Chip
                        size="sm"
                        variant="secondary"
                        className="border-(--border-strong) bg-(--surface-elevated)/70 font-mono text-[11px] tracking-[0.08em] text-(--foreground)"
                      >
                        {formatDate(cert.date, locale)}
                      </Chip>
                    )}
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em] text-(--accent) transition-colors hover:text-(--foreground)"
                      >
                        <ExternalLink size={12} />
                        {t("certifications.viewCertificate")}
                      </a>
                    )}
                  </div>
                </div>
              </Surface>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
