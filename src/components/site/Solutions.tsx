import { useState } from "react";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { SolutionModal } from "./SolutionModal";
import { ConsultationModal } from "./ConsultationModal";
import { SOLUTIONS_DATA, type SolutionDetail } from "@/data/solutionsData";
import { Button } from "@/components/ui/button";

export function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState<SolutionDetail | null>(null);
  const [solutionModalOpen, setSolutionModalOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState("Enterprise Applications");

  const handleOpenSolution = (solution: SolutionDetail) => {
    setSelectedSolution(solution);
    setSolutionModalOpen(true);
  };

  const handleBookConsultation = (solutionTitle: string) => {
    setConsultationService(solutionTitle);
    setConsultationOpen(true);
  };

  return (
    <>
      <section id="solutions" className="section-pad relative">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Solutions"
            title="Solutions for Every Stage of Your Digital Journey"
            subtitle="Wherever you are on the roadmap, we plug in with the right engineering model."
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS_DATA.slice(0, 6).map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.id} delay={i * 0.09} y={40}>
                  <div
                    onClick={() => handleOpenSolution(s)}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface/40 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface cursor-pointer text-left"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleOpenSolution(s);
                      }
                    }}
                    aria-label={`View details for ${s.title}`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground shrink-0">
                          <Icon className="size-5" aria-hidden />
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary/80 uppercase tracking-wider">
                          <Sparkles className="size-3" />
                          {s.badge}
                        </span>
                      </div>
                      <h3 className="mt-4 text-base font-semibold group-hover:text-primary transition-colors break-words hyphens-auto">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {s.shortDesc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-primary">
                      <span>View details</span>
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
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
                <a href="/solutions">
                  <span>Explore All Solutions</span>
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Solution Modal */}
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
    </>
  );
}
