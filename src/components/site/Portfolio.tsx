import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import caseHealthcare from "@/assets/case-healthcare.jpg";
import caseAi from "@/assets/case-ai.jpg";
import caseEcommerce from "@/assets/case-ecommerce.jpg";
import caseCloud from "@/assets/case-cloud.jpg";

// Replace with real case studies when available.
const CASES = [
  {
    image: caseHealthcare,
    industry: "Healthcare",
    title: "Connected Patient Care Platform",
    tech: "React • Node.js • AWS",
    result: "Reduced patient onboarding time by an estimated 40%.",
  },
  {
    image: caseAi,
    industry: "AI & Automation",
    title: "Intelligent Operations Automation",
    tech: "Python • LLMs • Azure",
    result: "Automated repetitive back-office workflows end to end.",
  },
  {
    image: caseEcommerce,
    industry: "E-commerce",
    title: "Headless Commerce Experience",
    tech: "Next.js • PostgreSQL • GCP",
    result: "Faster storefront performance and higher checkout completion.",
  },
  {
    image: caseCloud,
    industry: "Cloud Transformation",
    title: "Enterprise Cloud Migration",
    tech: "Kubernetes • Docker • AWS",
    result: "Improved reliability with a scalable containerized platform.",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="section-pad relative">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our work"
          title="Turning Technology Into Business Impact"
          subtitle="Selected engagements across industries and technology landscapes."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <article
                className="group h-full overflow-hidden rounded-3xl border border-border bg-surface/40 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <img
                    src={c.image}
                    alt={`${c.industry} case study visual`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="glass-panel absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold">
                    {c.industry}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-xs font-medium tracking-wide text-cyan uppercase">{c.tech}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.result}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    View Case Study
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
