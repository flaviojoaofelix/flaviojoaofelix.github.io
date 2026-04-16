import { Button } from "@heroui/react";
import { motion } from "motion/react";
import { Avatar } from "@/components/ui/Avatar";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTranslation } from "@/i18n";

const variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export function HeroSection() {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  const animationProps = prefersReducedMotion
    ? undefined
    : {
        initial: "hidden",
        animate: "visible",
        variants,
        transition: { duration: 0.5 },
      };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="flex min-h-screen items-center justify-center px-4 py-20"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="shell-panel relative overflow-hidden rounded-[1.5rem] border border-[var(--border-strong)] bg-[color-mix(in_oklab,var(--surface)_92%,transparent)] px-6 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.22)] md:px-10 md:py-14">
          <div className="mb-8 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--border-strong)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--border-strong)]" />
            <span className="ml-3 font-mono text-[11px] tracking-[0.26em] text-[var(--muted-foreground)] uppercase">
              {t("hero.label")}
            </span>
          </div>

          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
            <motion.div {...animationProps} transition={{ delay: 0 }}>
              <Avatar name="Flávio João Félix" size="xl" src="/images/avatar-fjf.png" />
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <motion.div
                {...animationProps}
                transition={{ delay: prefersReducedMotion ? 0 : 0.1 }}
              >
                <p className="mb-2 text-lg font-mono tracking-[0.18em] text-[var(--accent)] uppercase md:text-xl">
                  {t("hero.greeting")}
                </p>
              </motion.div>

              <motion.div
                {...animationProps}
                transition={{ delay: prefersReducedMotion ? 0 : 0.2 }}
              >
                <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
                  Flávio João Félix
                </h1>
              </motion.div>

              <motion.div
                {...animationProps}
                transition={{ delay: prefersReducedMotion ? 0 : 0.3 }}
              >
                <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]/88 md:text-4xl">
                  {t("hero.title")}
                </h2>
              </motion.div>

              <motion.div
                {...animationProps}
                transition={{ delay: prefersReducedMotion ? 0 : 0.4 }}
              >
                <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[var(--muted-foreground)]">
                  {t("hero.subtitle")}
                </p>
              </motion.div>

              <motion.div
                {...animationProps}
                transition={{ delay: prefersReducedMotion ? 0 : 0.5 }}
                className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
              >
                <a href="#projects">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[var(--border-strong)] bg-[var(--surface-elevated)]/70 font-mono text-sm tracking-[0.16em] uppercase"
                  >
                    {t("hero.cta_projects")}
                  </Button>
                </a>
                <a href="#contact">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-[color-mix(in_oklab,var(--accent)_18%,transparent)] font-mono text-sm tracking-[0.16em] uppercase text-[var(--foreground)]"
                  >
                    {t("hero.cta_contact")}
                  </Button>
                </a>
              </motion.div>

              <motion.div
                {...animationProps}
                transition={{ delay: prefersReducedMotion ? 0 : 0.6 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
              >
                {[t("hero.tag_online"), t("hero.tag_stack"), t("hero.tag_focus")].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface-elevated)]/75 px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] text-[var(--muted-foreground)] uppercase"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
