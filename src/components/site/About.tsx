import { Compass, Eye, Heart } from "lucide-react";
import { Reveal } from "./Reveal";
import aboutWorld from "@/assets/about-world.jpg";

const VALUES = [
  {
    icon: Compass,
    title: "Mission",
    desc: "Help organizations turn ambitious ideas into reliable, scalable technology.",
  },
  {
    icon: Eye,
    title: "Vision",
    desc: "To be a trusted global technology partner for businesses building their digital future.",
  },
  {
    icon: Heart,
    title: "Values",
    desc: "Integrity, craftsmanship, transparency and long-term partnership.",
  },
];

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-border"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <img
              src={aboutWorld}
              alt="Glowing world map connected by a global technology network"
              loading="lazy"
              width={1024}
              height={896}
              className="w-full object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{ background: "var(--gradient-brand)" }}
              aria-hidden
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              About us
            </span>
            <h2 className="mt-5 text-3xl leading-[1.1] font-bold text-balance sm:text-4xl md:text-5xl">
              Technology With a <span className="text-gradient">Global Vision</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Globe IT Vision is a technology services company focused on helping organizations
              navigate digital transformation through innovative software, cloud, AI and technology
              solutions.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={0.1 + i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface/40 p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                    <v.icon className="size-5 text-cyan" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
