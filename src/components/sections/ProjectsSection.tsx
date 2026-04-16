import { Button, Card, Chip } from "@heroui/react";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useTranslation } from "@/i18n";
import { fadeUpVariants } from "@/utils/animation";

export function ProjectsSection() {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" data-testid="projects-section" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-8 flex justify-center">
          <div className="h-1 w-16 rounded-full bg-[var(--accent)]" />
        </div>

        <div className="mb-12 text-center">
          <span className="terminal-label mb-4">{t("projects.label")}</span>
          <h2 className="text-3xl font-bold md:text-4xl">{t("projects.title")}</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              data-testid={`project-card-${project.id}`}
              variants={prefersReducedMotion ? undefined : fadeUpVariants}
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "visible"}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -4,
                      scale: 1.01,
                      transition: { duration: 0.2 },
                    }
              }
              viewport={{ once: true }}
              transition={prefersReducedMotion ? undefined : { delay: index * 0.1 }}
            >
              <Card className="shell-panel flex h-full flex-col overflow-hidden border border-[var(--border-strong)] bg-[color-mix(in_oklab,var(--surface)_90%,transparent)] shadow-[0_18px_60px_rgba(0,0,0,0.16)]">
                <div className="absolute inset-y-0 left-0 w-px bg-[linear-gradient(to_bottom,transparent,var(--accent),transparent)]" />
                <Card.Header className="border-b border-[var(--border)] px-5 py-5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--muted-foreground)] uppercase">
                        {project.id}
                      </span>
                    </div>
                    <Card.Title className="text-xl">{project.title}</Card.Title>
                  </div>
                </Card.Header>
                <Card.Content className="flex-1 px-5 py-5">
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {t(`projects.${project.id}.description`)}
                  </p>
                </Card.Content>
                <Card.Footer className="flex flex-col gap-4 border-t border-[var(--border)] px-5 py-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
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
                  <div className="flex flex-wrap gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="border border-[var(--border)] bg-[var(--surface-elevated)]/65 font-mono text-[11px] tracking-[0.16em] uppercase"
                        >
                          <span className="inline-flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            {t("projects.viewGithub")}
                          </span>
                        </Button>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="border border-[var(--border)] bg-[color-mix(in_oklab,var(--accent)_14%,transparent)] font-mono text-[11px] tracking-[0.16em] uppercase"
                        >
                          <span className="inline-flex items-center gap-2">
                            <ExternalLink size={16} />
                            {t("projects.viewDemo")}
                          </span>
                        </Button>
                      </a>
                    )}
                  </div>
                </Card.Footer>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
