import { ArrowUpRight, BrainCircuit, Cloud, Code2, Compass, Database, Smartphone } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const SERVICES = [
  {
    n: "01",
    icon: Code2,
    title: "Custom Software Development",
    desc: "Scalable and secure software solutions designed around your business requirements.",
  },
  {
    n: "02",
    icon: Smartphone,
    title: "Web & Mobile Development",
    desc: "Modern web platforms and mobile applications designed for exceptional user experiences.",
  },
  {
    n: "03",
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Cloud architecture, migration and optimization solutions built for scalability and reliability.",
  },
  {
    n: "04",
    icon: BrainCircuit,
    title: "AI & Automation",
    desc: "AI-powered solutions and intelligent automation that improve efficiency and accelerate growth.",
  },
  {
    n: "05",
    icon: Database,
    title: "Data & Analytics",
    desc: "Transform complex data into actionable insights with modern analytics solutions.",
  },
  {
    n: "06",
    icon: Compass,
    title: "IT Consulting",
    desc: "Strategic technology consulting to help organizations make smarter technology decisions.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Technology Solutions Built for Growth"
          subtitle="From strategy to execution, we help businesses turn technology into measurable business value."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.n} delay={i * 0.06}>
              <article
                className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface/50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-surface"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className="pointer-events-none absolute -top-24 -right-16 size-52 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: "var(--gradient-brand)" }}
                  aria-hidden
                />
                <div className="relative flex items-start justify-between">
                  <span className="bg-brand-gradient flex size-12 items-center justify-center rounded-2xl">
                    <service.icon className="size-6 text-primary-foreground" aria-hidden />
                  </span>
                  <span className="font-display text-sm font-bold tracking-widest text-muted-foreground/60">
                    {service.n}
                  </span>
                </div>
                <h3 className="relative mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
                <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
