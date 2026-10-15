import { useState } from "react";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { ServiceModal } from "./ServiceModal";
import { ConsultationModal } from "./ConsultationModal";
import { SERVICES_DATA, type ServiceDetail } from "@/data/servicesData";
import { Button } from "@/components/ui/button";

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState("Custom Software Development");

  const handleOpenService = (service: ServiceDetail) => {
    setSelectedService(service);
    setServiceModalOpen(true);
  };

  const handleBookConsultation = (serviceTitle: string) => {
    setConsultationService(serviceTitle);
    setConsultationOpen(true);
  };

  return (
    <>
      <section id="services" className="section-pad relative">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Technology Solutions Built for Growth"
            subtitle="From strategy to execution, we help businesses turn technology into measurable business value."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES_DATA.slice(0, 6).map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.id} delay={i * 0.09} y={40}>
                  <article
                    onClick={() => handleOpenService(service)}
                    className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface/50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-surface cursor-pointer text-left"
                    style={{ boxShadow: "var(--shadow-card)" }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleOpenService(service);
                      }
                    }}
                    aria-label={`View details for ${service.title}`}
                  >
                    <div
                      className="pointer-events-none absolute -top-24 -right-16 size-52 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                      style={{ background: "var(--gradient-brand)" }}
                      aria-hidden
                    />
                    <div className="relative flex items-center justify-between">
                      <span className="bg-brand-gradient flex size-12 items-center justify-center rounded-2xl">
                        <Icon className="size-6 text-primary-foreground" aria-hidden />
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary uppercase tracking-wider">
                        <Sparkles className="size-3" />
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="relative mt-2 text-xl font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {service.shortDesc}
                    </p>

                    <div className="relative mt-6 flex items-center justify-between pt-2 border-t border-border/40">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        View details
                        <ArrowUpRight
                          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden
                        />
                      </span>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.25} y={20}>
            <div className="mt-12 flex justify-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-primary/25 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3.5 text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/20 gap-2.5"
              >
                <a href="/services">
                  <span>Explore All Services</span>
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        open={serviceModalOpen}
        onOpenChange={setServiceModalOpen}
        onBookConsultation={handleBookConsultation}
      />

      {/* Consultation Modal */}
      <ConsultationModal
        open={consultationOpen}
        onOpenChange={setConsultationOpen}
        initialService={consultationService}
      />
    </>
  );
}
