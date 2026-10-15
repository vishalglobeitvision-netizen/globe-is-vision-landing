import { SectionHeading } from "./Reveal";

const ALL_TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Node.js",
  "Go",
  "Amazon Web Services",
  "Microsoft Azure",
  "Google Cloud",
  "Kubernetes",
  "Docker",
  "Terraform",
  "PostgreSQL",
  "Redis",
  "Apache Kafka",
  "Snowflake",
  "PyTorch",
  "OpenAI APIs",
  "GraphQL",
  "FastAPI",
  "MongoDB",
  "Tailwind CSS",
  "Flutter",
  "Datadog",
];

export function Technologies() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Technology"
          title="Powered by Modern Technology"
          subtitle="A pragmatic, battle-tested stack chosen for longevity, scalability, and performance."
        />
      </div>

      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        {/* Single Track: Slow slide from right to left */}
        <div className="flex w-max animate-marquee gap-3.5 hover:[animation-play-state:paused]">
          {[...ALL_TECH, ...ALL_TECH, ...ALL_TECH, ...ALL_TECH].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="group/item flex items-center gap-2 rounded-full border border-border/80 bg-surface/50 px-5 py-2.5 text-xs sm:text-sm font-medium whitespace-nowrap text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-surface hover:text-cyan hover:shadow-md hover:shadow-cyan/10 cursor-pointer"
            >
              <span className="size-1.5 rounded-full bg-cyan/50 transition-colors group-hover/item:bg-cyan" />
              <span>{tech}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
