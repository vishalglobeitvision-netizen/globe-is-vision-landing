import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { SolutionDetail } from "@/data/solutionsData";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";

interface SolutionModalProps {
  solution: SolutionDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBookConsultation: (solutionTitle: string) => void;
}

export function SolutionModal({
  solution,
  open,
  onOpenChange,
  onBookConsultation,
}: SolutionModalProps) {
  if (!solution) return null;

  const Icon = solution.icon;

  const handleConsultation = () => {
    onOpenChange(false);
    onBookConsultation(solution.title);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100vw-1.5rem)] sm:w-full max-w-2xl border-slate-200 bg-white p-0 text-slate-900 shadow-2xl rounded-2xl overflow-hidden max-h-[calc(100dvh-2.5rem)] sm:max-h-[90vh] flex flex-col">
        {/* Top colored accent banner */}
        <div className="h-1.5 w-full bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 shrink-0" />

        <div className="overflow-y-auto overscroll-contain flex-1 p-4 sm:p-7 space-y-5">
          {/* Header */}
          <DialogHeader className="text-left space-y-2.5 pr-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-11 sm:size-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-4 ring-indigo-50/60 shrink-0">
                  <Icon className="size-5 sm:size-6" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold text-indigo-700">
                    <Sparkles className="size-3" />
                    {solution.badge}
                  </span>
                </div>
              </div>
            </div>

            <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 pt-0.5 break-words hyphens-auto">
              {solution.title}
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {solution.fullDesc}
            </DialogDescription>
          </DialogHeader>

          {/* Capabilities Grid */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Layers className="size-3.5 text-indigo-600" />
              <span>Core Solution Capabilities</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {solution.capabilities.map((cap) => (
                <div
                  key={cap}
                  className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 p-2.5 sm:p-3 text-xs text-slate-700"
                >
                  <CheckCircle2 className="size-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Business Benefits */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Zap className="size-3.5 text-blue-600" />
              <span>Key Business Outcomes</span>
            </div>
            <div className="rounded-xl border border-blue-100/80 bg-blue-50/40 p-3.5 sm:p-4 space-y-2">
              {solution.benefits.map((b) => (
                <div key={b} className="flex items-start gap-2 text-xs text-slate-700">
                  <span className="size-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Cpu className="size-3.5 text-indigo-600" />
              <span>Architecture &amp; Frameworks</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {solution.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="space-y-2 rounded-xl bg-slate-50 p-3.5 sm:p-4 border border-slate-100">
            <span className="text-xs font-semibold text-slate-800">Included Deliverables:</span>
            <ul className="grid gap-1.5 sm:grid-cols-2 text-xs text-slate-600">
              {solution.deliverables.map((del) => (
                <li key={del} className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-indigo-500 shrink-0" />
                  <span className="leading-normal">{del}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Footer */}
        <div className="border-t border-slate-100 bg-slate-50/95 backdrop-blur-xs p-3.5 sm:p-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <a
            href="/solutions"
            onClick={() => onOpenChange(false)}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 hover:underline order-2 sm:order-1"
          >
            Explore all solutions
            <ArrowRight className="size-3.5" />
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto order-1 sm:order-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenChange(false)}
              className="flex-1 sm:flex-initial rounded-xl border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer h-9 px-4 text-xs font-semibold"
            >
              Close
            </Button>
            <Button
              size="sm"
              onClick={handleConsultation}
              className="flex-1 sm:flex-initial rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 cursor-pointer h-9 px-4 text-xs"
            >
              <span>Book Consultation</span>
              <ArrowRight className="ml-1 size-3.5" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
