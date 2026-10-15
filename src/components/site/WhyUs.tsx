import { motion } from "motion/react";
import { Globe2, Layers, Lightbulb, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const PILLARS = [
  {
    icon: Globe2,
    title: "Global Perspective",
    desc: "Technology solutions designed with global business needs in mind.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We continuously explore emerging technologies to create better solutions.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    desc: "Every solution starts with understanding the customer's business.",
  },
  {
    icon: Layers,
    title: "Built for Scale",
    desc: "Architecture and technology designed to grow with your business.",
  },
];

export function WhyUs() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/3 -left-40 size-[420px] rounded-full opacity-25 blur-[140px]"
        style={{ background: "var(--gradient-brand)" }}
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Why us" title="Why Businesses Choose Globe IT Vision" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12} y={45}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="glass-panel h-full rounded-3xl p-7"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
                  <p.icon className="size-6 text-cyan" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
