import { Quote, Star } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

// Placeholder testimonials — replace with verified client quotes.
const TESTIMONIALS = [
  {
    quote:
      "Globe IT Vision translated a rough product idea into a stable platform our teams rely on every day. The engineering discipline stood out.",
    name: "A. Mehta",
    role: "Head of Digital",
    company: "Client Company",
  },
  {
    quote:
      "Their cloud team mapped our migration carefully and delivered without disrupting operations. Communication was consistently clear.",
    name: "S. Larsen",
    role: "CTO",
    company: "Client Company",
  },
  {
    quote:
      "The automation work removed hours of manual effort each week. They understood the business problem before writing any code.",
    name: "R. Okafor",
    role: "Operations Director",
    company: "Client Company",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="Trusted by Businesses. Built for Results." />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="glass-panel flex h-full flex-col rounded-3xl p-8">
                <Quote className="size-8 text-primary/60" aria-hidden />
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/90">
                  “{t.quote}”
                </blockquote>
                <div className="mt-6 flex gap-1" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-cyan text-cyan" aria-hidden />
                  ))}
                </div>
                <figcaption className="mt-4 border-t border-border pt-4">
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
