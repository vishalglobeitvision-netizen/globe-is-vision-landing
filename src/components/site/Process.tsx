import { Reveal, SectionHeading } from "./Reveal";

const STEPS = [
  { n: "01", title: "Discover", desc: "Understand your business, goals and challenges." },
  { n: "02", title: "Strategize", desc: "Create the right technology roadmap." },
  { n: "03", title: "Design", desc: "Design intuitive and scalable experiences." },
  { n: "04", title: "Build", desc: "Develop using modern engineering practices." },
  { n: "05", title: "Launch", desc: "Deploy securely and efficiently." },
  { n: "06", title: "Grow", desc: "Continuously optimize and support the solution." },
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

        <ol className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div
            className="pointer-events-none absolute inset-x-0 top-6 hidden h-px md:block"
            style={{ background: "var(--gradient-brand)", opacity: 0.35 }}
            aria-hidden
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.07}>
              <li className="relative list-none">
                <span className="bg-brand-gradient font-display relative z-10 flex size-12 items-center justify-center rounded-2xl text-sm font-bold text-primary-foreground">
                  {step.n}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
