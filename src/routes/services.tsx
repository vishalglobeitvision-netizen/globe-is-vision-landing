import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ServiceModal } from "@/components/site/ServiceModal";
import { ConsultationModal } from "@/components/site/ConsultationModal";
import { SERVICES_DATA, type ServiceDetail } from "@/data/servicesData";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const TITLE = "Our Services | Globe IT Vision - Software, Cloud & AI Engineering";
const DESCRIPTION =
  "Comprehensive technology and digital transformation services by Globe IT Vision: Custom Software, Web & Mobile, Cloud Solutions, AI & Automation, Data Analytics, and IT Consulting.";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Architecture",
    desc: "We analyze business workflows, technical dependencies, and compliance goals to design scalable architecture blueprints.",
  },
  {
    step: "02",
    title: "Agile Sprint Engineering",
    desc: "Two-week sprints with automated CI/CD testing, strict code reviews, and visible milestone demonstrations.",
  },
  {
    step: "03",
    title: "Hardened Deployment",
    desc: "Zero-downtime blue/green deployment to resilient cloud infrastructure with automated rollback safety.",
  },
  {
    step: "04",
    title: "24/7 Care & Evolution",
    desc: "Proactive monitoring, APM telemetry, SLA guarantee, and continuous feature enhancements.",
  },
];

function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState("Custom Software Development");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const handleOpenServiceModal = (service: ServiceDetail) => {
    setSelectedService(service);
    setServiceModalOpen(true);
  };

  const handleBookConsultation = (serviceTitle: string) => {
    setConsultationService(serviceTitle);
    setConsultationOpen(true);
  };

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (filterCategory === "all") return true;
    if (filterCategory === "software") return s.id === "custom-software" || s.id === "web-mobile";
    if (filterCategory === "cloud") return s.id === "cloud-solutions";
    if (filterCategory === "ai-data") return s.id === "ai-automation" || s.id === "data-analytics";
    if (filterCategory === "consulting") return s.id === "it-consulting";
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Sticky White Navbar */}
      <Navbar />

      {/* Services Page Hero */}
      <header className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 text-white py-20 lg:py-28">
        {/* Ambient Glow */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[450px] w-[800px] -translate-x-1/2 rounded-full opacity-40 blur-[130px]"
          style={{ background: "linear-gradient(120deg, #2563eb, #06b6d4)" }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md">
            <Sparkles className="size-3.5" />
            <span>Comprehensive Technology Solutions</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Enterprise Technology &amp;{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              Engineering Services
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            From modern full-stack application development to enterprise cloud transformations and custom
            AI workflows, Globe IT Vision builds digital engines that scale organizations forward.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={() => {
                setConsultationService("General Inquiry");
                setConsultationOpen(true);
              }}
              size="lg"
              className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-7 font-semibold text-white shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-indigo-700 cursor-pointer"
            >
              <span>Book a Free Architecture Consultation</span>
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 font-semibold cursor-pointer"
            >
              <a href="#services-list">Browse All Services ↓</a>
            </Button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 sm:grid-cols-4 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">99.99%</div>
              <div className="mt-1 text-xs text-slate-400">Target Uptime Architecture</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">50+</div>
              <div className="mt-1 text-xs text-slate-400">Enterprise Platforms Shipped</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
              <div className="mt-1 text-xs text-slate-400">IP Ownership Transferred</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">24/7</div>
              <div className="mt-1 text-xs text-slate-400">DevOps &amp; SLA Support</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="services-list" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-8">
          {[
            { id: "all", label: "All Services (6)" },
            { id: "software", label: "Software & Mobile" },
            { id: "cloud", label: "Cloud & DevOps" },
            { id: "ai-data", label: "AI & Big Data" },
            { id: "consulting", label: "Strategic Consulting" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilterCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${filterCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                id={service.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-500/40 hover:-translate-y-1.5 scroll-mt-24 text-left"
              >
                {/* Top gradient accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Header: Icon + Badge */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-4 ring-blue-50/60 shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-6" />
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">
                      <Sparkles className="size-3" />
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mt-5 text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors break-words">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDesc || service.fullDesc}
                  </p>

                  {/* Core Capabilities Preview */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <Layers className="size-3 text-blue-600" />
                      <span>Key Capabilities</span>
                    </div>
                    <div className="space-y-1.5">
                      {service.capabilities.slice(0, 3).map((cap) => (
                        <div key={cap} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1 font-medium">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Preview */}
                  <div className="mt-4 pt-3 border-t border-slate-100/80">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-2">
                      <Cpu className="size-3 text-blue-600" />
                      <span>Featured Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-slate-200/90 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                      {service.technologies.length > 4 && (
                        <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[11px] font-semibold text-slate-500">
                          +{service.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Key Outcome / Business Impact Pill */}
                  {service.benefits?.[0] && (
                    <div className="mt-4 rounded-xl border border-blue-100/80 bg-blue-50/40 p-3 text-xs text-slate-700 flex items-start gap-2">
                      <Zap className="size-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-2 leading-relaxed font-medium">
                        {service.benefits[0]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Dual Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <Button
                    onClick={() => handleOpenServiceModal(service)}
                    variant="outline"
                    size="sm"
                    className="flex-1 rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs h-9 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="ml-1 size-3.5" />
                  </Button>
                  <Button
                    onClick={() => handleBookConsultation(service.title)}
                    size="sm"
                    className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xs h-9 shadow-sm shadow-blue-500/20 cursor-pointer"
                  >
                    <span>Consultation</span>
                    <ArrowRight className="ml-1 size-3.5" />
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Delivery Framework */}
        <section className="mt-24 rounded-3xl bg-slate-900 text-white p-8 sm:p-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Our Methodology
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Engineered for Speed, Reliability &amp; Scale
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Every project follows an agile, transparent lifecycle to ensure complete architectural
              clarity, predictable velocity, and production-grade stability.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((p) => (
              <div
                key={p.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs space-y-3"
              >
                <div className="text-3xl font-black text-cyan-400/80">{p.step}</div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Card */}
        <section className="mt-16 text-center rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-10 sm:p-16">
          <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30 mb-4">
            <Calendar className="size-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Have a Specific Project in Mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Schedule a complimentary 30-minute discovery call with our principal solutions architects.
            We will review your requirements, suggest an architecture, and provide preliminary sizing.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              onClick={() => {
                setConsultationService("General Inquiry");
                setConsultationOpen(true);
              }}
              size="lg"
              className="rounded-full bg-blue-600 px-8 font-semibold text-white hover:bg-blue-700 shadow-md shadow-blue-500/25 cursor-pointer"
            >
              <span>Schedule Architecture Session</span>
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold cursor-pointer"
            >
              <a href="/#contact">Send a Direct Message</a>
            </Button>
          </div>
        </section>
      </main>

      {/* Dark Footer */}
      <div className="dark bg-background text-foreground">
        <Footer />
      </div>

      {/* Service Details Modal */}
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
    </div>
  );
}
