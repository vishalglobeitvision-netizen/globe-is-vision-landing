import {
  Banknote,
  Building2,
  GraduationCap,
  HeartPulse,
  Factory,
  Plane,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const INDUSTRIES = [
  {
    icon: HeartPulse,
    name: "Healthcare",
    detail: "HIPAA-compliant platforms, telehealth workflows, EHR integrations, and secure clinical telemetry.",
  },
  {
    icon: Banknote,
    name: "Finance & Banking",
    detail: "High-throughput fintech platforms, automated fraud detection, PCI-DSS compliance, and core banking APIs.",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce",
    detail: "High-converting headless storefronts, scalable marketplace engines, and real-time inventory systems.",
  },
  {
    icon: GraduationCap,
    name: "Education",
    detail: "Scalable LMS portals, interactive assessment engines, remote classrooms, and learning analytics.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    detail: "Industrial IoT telemetry, predictive machinery maintenance, ERP sync, and supply chain automation.",
  },
  {
    icon: Building2,
    name: "Real Estate",
    detail: "Modern proptech portals, real-time MLS listings, automated lease workflows, and interactive 3D tours.",
  },
  {
    icon: Truck,
    name: "Logistics",
    detail: "Intelligent fleet route optimization, telematics tracking, automated dispatch, and warehouse WMS.",
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    detail: "High-concurrency booking engines, dynamic pricing algorithms, PMS integration, and loyalty systems.",
  },
];

export function Industries() {
  return (
    <section id="industries" className="section-pad relative">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Technology Across Industries"
          subtitle="Deep domain context, applied to modern engineering."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.05}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/70 bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan/40 hover:bg-surface/70 hover:shadow-xl hover:shadow-cyan/5">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                  style={{ background: "var(--gradient-brand)" }}
                  aria-hidden
                />
                <div>
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan transition-colors group-hover:border-cyan/30 group-hover:bg-cyan/10">
                    <ind.icon className="size-5.5 text-cyan transition-transform duration-300 group-hover:scale-110" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-foreground sm:text-lg transition-colors group-hover:text-cyan">
                    {ind.name}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {ind.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
