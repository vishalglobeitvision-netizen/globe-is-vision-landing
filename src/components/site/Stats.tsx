import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Reveal } from "./Reveal";

// Replace these with real company metrics when available.
const STATS = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Global Clients" },
  { value: 15, suffix: "+", label: "Technology Experts" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support" },
];

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 48;
    const id = setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setDisplay(Math.round(value * progress));
      if (frame >= total) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, [active, value]);

  return (
    <span className="font-display text-4xl font-bold md:text-5xl">
      <span className="text-gradient">{display}</span>
      <span className="text-gradient">{suffix}</span>
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-8" aria-label="Company statistics">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div
            ref={ref}
            className="glass-panel grid gap-8 rounded-3xl p-8 sm:grid-cols-2 md:p-12 lg:grid-cols-5"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <Counter value={stat.value} suffix={stat.suffix} active={inView} />
                <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
