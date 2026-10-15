import {
  ArrowRight,
  Code2,
  Compass,
  Layers,
  Lightbulb,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    icon: Compass,
    desc: "We analyze your business objectives, operational workflows, and technical pain points through collaborative discovery sessions.",
    deliverable: "Needs Assessment & Discovery Brief",
  },
  {
    n: "02",
    title: "Strategize",
    icon: Lightbulb,
    desc: "Our architects map the optimal technical roadmap, evaluate technology stacks, and plan cloud infrastructure for future scale.",
    deliverable: "Architecture Blueprint & Tech Stack",
  },
  {
    n: "03",
    title: "Design",
    icon: Layers,
    desc: "We craft intuitive user journeys, high-fidelity interactive prototypes, and design systems built for seamless engineering handoff.",
    deliverable: "Interactive Prototypes & UI Kit",
  },
  {
    n: "04",
    title: "Build",
    icon: Code2,
    desc: "Our engineering teams develop modular, test-covered codebases using modern frameworks, clean architectures, and agile sprints.",
    deliverable: "Sprint Releases & CI/CD Pipelines",
  },
  {
    n: "05",
    title: "Launch",
    icon: Rocket,
    desc: "We conduct end-to-end QA, security hardening, and zero-downtime deployment pipelines for a reliable, smooth go-live.",
    deliverable: "Production Deployment & Security QA",
  },
  {
    n: "06",
    title: "Grow",
    icon: TrendingUp,
    desc: "We provide continuous 24/7 observability, performance optimizations, SLA support, and iterative feature scaling as you grow.",
    deliverable: "Continuous Telemetry & SLA Evolution",
  },
];

export function Process() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our process"
          title="From Vision to Reality"
          subtitle="A transparent delivery model, from first conversation to continuous improvement."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.n} delay={i * 0.06}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/70 bg-surface/40 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan/40 hover:bg-surface/70 hover:shadow-xl hover:shadow-cyan/5">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                    style={{ background: "var(--gradient-brand)" }}
                    aria-hidden
                  />

                  <div>
                    {/* Header: Icon + Step Pill */}
                    <div className="flex items-center justify-between">
                      <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan transition-colors group-hover:border-cyan/30 group-hover:bg-cyan/10">
                        <Icon className="size-5.5 text-cyan transition-transform duration-300 group-hover:scale-110" aria-hidden />
                      </div>
                      <span className="font-mono text-xs font-bold tracking-wider text-cyan/80 bg-cyan/10 border border-cyan/20 px-3 py-1 rounded-full">
                        PHASE {step.n}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-5 text-lg font-bold text-foreground sm:text-xl transition-colors group-hover:text-cyan">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>

                  {/* Deliverable Footer */}
                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground/80 font-medium">
                    <span className="truncate pr-2">{step.deliverable}</span>
                    <ArrowRight className="size-3.5 shrink-0 text-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
