import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const SOLUTIONS = [
  { title: "Startups", desc: "MVPs and product foundations built fast, without technical debt." },
  { title: "Digital Products", desc: "End-to-end product engineering from concept to continuous delivery." },
  { title: "Enterprise Applications", desc: "Secure, integrated systems that support complex operations." },
  { title: "Cloud Transformation", desc: "Migration, architecture and cost optimization across major clouds." },
  { title: "AI & Automation", desc: "Intelligent workflows, copilots and automation for measurable efficiency." },
  { title: "Legacy Modernization", desc: "Re-platform ageing systems into modern, maintainable architectures." },
  { title: "Managed Technology", desc: "Ongoing engineering, monitoring and support for critical platforms." },
];

export function Solutions() {
  return (
    <section id="solutions" className="section-pad relative">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Solutions"
          title="Solutions for Every Stage of Your Digital Journey"
          subtitle="Wherever you are on the roadmap, we plug in with the right engineering model."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-primary/40 hover:bg-surface">
                <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowRight className="size-4" aria-hidden />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
