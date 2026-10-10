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
  { icon: HeartPulse, name: "Healthcare", detail: "Patient platforms, telehealth and compliant data systems." },
  { icon: Banknote, name: "Finance & Banking", detail: "Secure core integrations, risk tooling and digital onboarding." },
  { icon: ShoppingCart, name: "E-commerce", detail: "High-conversion storefronts and headless commerce architecture." },
  { icon: GraduationCap, name: "Education", detail: "Learning platforms, assessments and student engagement tools." },
  { icon: Factory, name: "Manufacturing", detail: "IoT monitoring, ERP integration and production analytics." },
  { icon: Building2, name: "Real Estate", detail: "Listing platforms, CRM automation and virtual experiences." },
  { icon: Truck, name: "Logistics", detail: "Fleet visibility, route optimization and warehouse systems." },
  { icon: Plane, name: "Travel & Hospitality", detail: "Booking engines, loyalty platforms and guest personalization." },
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
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.05}>
              <div className="group relative h-44 overflow-hidden rounded-3xl border border-border bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                  style={{ background: "var(--gradient-brand)" }}
                  aria-hidden
                />
                <ind.icon className="relative size-7 text-cyan" aria-hidden />
                <h3 className="relative mt-5 text-lg font-semibold">{ind.name}</h3>
                <p className="relative mt-2 translate-y-2 text-sm leading-relaxed text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {ind.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
