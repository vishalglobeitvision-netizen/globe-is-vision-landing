import { SectionHeading } from "./Reveal";

const TECH = [
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Python",
  "Java",
  ".NET",
  "Spring Boot",
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
];

export function Technologies() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Technology"
          title="Powered by Modern Technology"
          subtitle="A pragmatic, battle-tested stack chosen for longevity and performance."
        />
      </div>

      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-3">
          {[...TECH, ...TECH].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="rounded-full border border-border bg-surface/50 px-6 py-3 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
