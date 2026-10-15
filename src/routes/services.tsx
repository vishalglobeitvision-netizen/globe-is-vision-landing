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

        {/* Detailed Services Grid */}
        <div className="mt-12 space-y-12">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-24 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm transition-all hover:shadow-md"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                  {/* Left Column: Overview */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-4 ring-blue-50/60 shrink-0">
                        <Icon className="size-7" />
                      </div>
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-0.5 text-xs font-bold text-blue-700">
                          <Sparkles className="size-3" />
                          {service.badge}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Core Capabilities */}
                    <div className="pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-3">
                        <Layers className="size-3.5 text-blue-600" />
                        <span>Core Capabilities</span>
                      </h3>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {service.capabilities.map((cap) => (
                          <div
                            key={cap}
                            className="flex items-start gap-2 text-xs font-medium text-slate-700"
                          >
                            <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-2.5">
                        <Cpu className="size-3.5 text-blue-600" />
                        <span>Featured Tech &amp; Frameworks</span>
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Outcomes & Actions */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 rounded-2xl border border-slate-100 bg-slate-50/70 p-6 sm:p-7">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
                        <Zap className="size-4 text-blue-600" />
                        <span>Business Impact &amp; Deliverables</span>
                      </div>

                      <div className="space-y-2">
                        {service.benefits.map((b) => (
                          <div
                            key={b}
                            className="flex items-start gap-2.5 text-xs text-slate-700 font-medium"
                          >
                            <span className="size-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-slate-200/80 pt-4">
                        <span className="text-xs font-semibold text-slate-800 block mb-2">
                          Deliverables Included:
                        </span>
                        <ul className="space-y-1 text-xs text-slate-600">
                          {service.deliverables.map((del) => (
                            <li key={del} className="flex items-center gap-2">
                              <span className="size-1 rounded-full bg-slate-400" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="pt-4 border-t border-slate-200/80 space-y-2.5">
                      <Button
                        onClick={() => handleOpenServiceModal(service)}
                        variant="outline"
                        className="w-full rounded-xl border-slate-300 bg-white hover:bg-slate-100 text-slate-800 font-semibold cursor-pointer"
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="ml-1.5 size-4" />
                      </Button>

                      <Button
                        onClick={() => handleBookConsultation(service.title)}
                        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-md shadow-blue-500/20 cursor-pointer"
                      >
                        <span>Book Consultation for this Service</span>
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
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
