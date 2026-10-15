import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SolutionModal } from "@/components/site/SolutionModal";
import { ConsultationModal } from "@/components/site/ConsultationModal";
import { SOLUTIONS_DATA, type SolutionDetail } from "@/data/solutionsData";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";

const TITLE = "Solutions | Globe IT Vision - Scalable Engineering & Digital Transformation";
const DESCRIPTION =
  "Explore tailored solutions by Globe IT Vision: Startup MVPs, Enterprise Applications, Cloud Transformation, AI Workflows, Legacy Modernization, and Managed Engineering.";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
});

const ENGAGEMENT_MODELS = [
  {
    step: "01",
    title: "Dedicated Engineering Pods",
    desc: "Autonomous, senior cross-functional teams (Tech Lead, Senior Engineers, QA & DevOps) integrated directly into your roadmap.",
  },
  {
    step: "02",
    title: "Fixed-Scope Milestone Delivery",
    desc: "Defined scope, fixed timeline, and guaranteed deliverables for MVP builds, migrations, and major platform feature sets.",
  },
  {
    step: "03",
    title: "Fractional CTO & Advisory",
    desc: "Executive-level architectural leadership, technical due diligence, vendor selection, and engineering mentorship.",
  },
  {
    step: "04",
    title: "Managed SLA Operations",
    desc: "Continuous proactive monitoring, security patching, guaranteed response SLAs, and ongoing infrastructure care.",
  },
];

function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState<SolutionDetail | null>(null);
  const [solutionModalOpen, setSolutionModalOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState("Enterprise Applications");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const handleOpenSolutionModal = (solution: SolutionDetail) => {
    setSelectedSolution(solution);
    setSolutionModalOpen(true);
  };

  const handleBookConsultation = (solutionTitle: string) => {
    setConsultationService(solutionTitle);
    setConsultationOpen(true);
  };

  const filteredSolutions = SOLUTIONS_DATA.filter((s) => {
    if (filterCategory === "all") return true;
    if (filterCategory === "startups") return s.id === "startups-mvp" || s.id === "digital-products";
    if (filterCategory === "enterprise") return s.id === "enterprise-apps" || s.id === "legacy-modernization";
    if (filterCategory === "cloud-ai") return s.id === "cloud-transformation" || s.id === "ai-workflows";
    if (filterCategory === "managed") return s.id === "managed-engineering";
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Sticky White Navbar */}
      <Navbar />

      {/* Solutions Hero */}
      <header className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 text-white py-20 lg:py-28">
        {/* Ambient Glow */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[450px] w-[800px] -translate-x-1/2 rounded-full opacity-40 blur-[130px]"
          style={{ background: "linear-gradient(120deg, #4f46e5, #06b6d4)" }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md">
            <Sparkles className="size-3.5" />
            <span>Tailored Engineering Frameworks</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Purpose-Built Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              Every Stage of Growth
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            From zero-debt startup MVP launches to complex enterprise architecture and cloud transformations,
            we engineer robust platforms that turn technical ambition into enduring business advantage.
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
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 font-semibold cursor-pointer"
            >
              <a href="#solutions-list">Browse All Solutions ↓</a>
            </Button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 sm:grid-cols-4 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">4–8 Wks</div>
              <div className="mt-1 text-xs text-slate-400">Rapid MVP Launch Speed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">99.99%</div>
              <div className="mt-1 text-xs text-slate-400">Enterprise High Availability</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">~30%</div>
              <div className="mt-1 text-xs text-slate-400">Cloud Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
              <div className="mt-1 text-xs text-slate-400">Client IP Ownership</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="solutions-list" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-8">
          {[
            { id: "all", label: "All Solutions (7)" },
            { id: "startups", label: "Startups & MVPs" },
            { id: "enterprise", label: "Enterprise Systems" },
            { id: "cloud-ai", label: "Cloud & AI" },
            { id: "managed", label: "Managed Care" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilterCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                filterCategory === cat.id
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Solutions Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredSolutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <article
                key={solution.id}
                id={solution.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-indigo-500/40 hover:-translate-y-1.5 scroll-mt-24 text-left"
              >
                {/* Top gradient accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Header: Icon + Badge */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-4 ring-indigo-50/60 shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-6" />
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-bold text-indigo-700">
                      <Sparkles className="size-3" />
                      {solution.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mt-5 text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors break-words">
                    {solution.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {solution.shortDesc || solution.fullDesc}
                  </p>

                  {/* Core Capabilities Preview */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <Layers className="size-3 text-indigo-600" />
                      <span>Key Solution Scope</span>
                    </div>
                    <div className="space-y-1.5">
                      {solution.capabilities.slice(0, 3).map((cap) => (
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
                      <Cpu className="size-3 text-indigo-600" />
                      <span>Architecture &amp; Frameworks</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {solution.technologies.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-slate-200/90 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                      {solution.technologies.length > 4 && (
                        <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[11px] font-semibold text-slate-500">
                          +{solution.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Key Outcome Pill */}
                  {solution.benefits?.[0] && (
                    <div className="mt-4 rounded-xl border border-indigo-100/80 bg-indigo-50/40 p-3 text-xs text-slate-700 flex items-start gap-2">
                      <Zap className="size-3.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-2 leading-relaxed font-medium">
                        {solution.benefits[0]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Dual Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <Button
                    onClick={() => handleOpenSolutionModal(solution)}
                    variant="outline"
                    size="sm"
                    className="flex-1 rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs h-9 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="ml-1 size-3.5" />
                  </Button>
                  <Button
                    onClick={() => handleBookConsultation(solution.title)}
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

        {/* Engagement Models Framework */}
        <section className="mt-24 rounded-3xl bg-slate-900 text-white p-8 sm:p-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Engagement Models
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Flexible Partnership Models
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Every organization has unique velocity and governance requirements. Choose the delivery
              structure that best fits your technical and commercial goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ENGAGEMENT_MODELS.map((p) => (
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

        {/* Bottom Consultation CTA */}
        <section className="mt-16 text-center rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-10 sm:p-16">
          <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 mb-4">
            <Calendar className="size-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Ready to Scope Your Solution?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
            Schedule a confidential 30-minute discovery session with our senior solutions engineers.
            We will analyze your requirements, outline an architectural strategy, and provide a clear delivery plan.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              onClick={() => {
                setConsultationService("General Inquiry");
                setConsultationOpen(true);
              }}
              size="lg"
              className="rounded-full bg-indigo-600 px-8 font-semibold text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/25 cursor-pointer"
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

      {/* Solution Details Modal */}
      <SolutionModal
        solution={selectedSolution}
        open={solutionModalOpen}
        onOpenChange={setSolutionModalOpen}
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
