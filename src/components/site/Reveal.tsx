import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left"
      }
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl leading-[1.1] font-bold text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
