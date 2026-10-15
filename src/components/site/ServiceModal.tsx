import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { ServiceDetail } from "@/data/servicesData";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";

interface ServiceModalProps {
  service: ServiceDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBookConsultation: (serviceTitle: string) => void;
}

export function ServiceModal({
  service,
  open,
  onOpenChange,
  onBookConsultation,
}: ServiceModalProps) {
  if (!service) return null;

  const Icon = service.icon;

  const handleConsultation = () => {
    onOpenChange(false);
    onBookConsultation(service.title);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-slate-200 bg-white p-0 text-slate-900 shadow-2xl sm:rounded-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Top colored accent banner */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 shrink-0" />

        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Header */}
          <DialogHeader className="text-left space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-4 ring-blue-50/60">
                  <Icon className="size-6" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                    <Sparkles className="size-3" />
                    {service.badge}
                  </span>
                </div>
              </div>
            </div>

            <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 pt-1">
              {service.title}
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {service.fullDesc}
            </DialogDescription>
          </DialogHeader>

          {/* Capabilities Grid */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Layers className="size-3.5 text-blue-600" />
              <span>Core Capabilities & Scope</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {service.capabilities.map((cap) => (
                <div
                  key={cap}
                  className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3 text-xs text-slate-700"
                >
                  <CheckCircle2 className="size-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Business Benefits */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Zap className="size-3.5 text-indigo-600" />
              <span>Key Business Benefits</span>
            </div>
            <div className="rounded-xl border border-indigo-100/80 bg-indigo-50/40 p-4 space-y-2">
              {service.benefits.map((b) => (
                <div key={b} className="flex items-start gap-2 text-xs text-slate-700">
                  <span className="size-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Cpu className="size-3.5 text-blue-600" />
              <span>Technologies & Tools</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {service.technologies.map((tech) => (
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
          <div className="space-y-2 rounded-xl bg-slate-50 p-4 border border-slate-100">
            <span className="text-xs font-semibold text-slate-800">Standard Deliverables:</span>
            <ul className="grid gap-1.5 sm:grid-cols-2 text-xs text-slate-600">
              {service.deliverables.map((del) => (
                <li key={del} className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-blue-500" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Footer */}
        <div className="border-t border-slate-100 bg-slate-50/80 p-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <a
            href="/services"
            onClick={() => onOpenChange(false)}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 hover:underline"
          >
            Explore all services
            <ArrowRight className="size-3.5" />
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenChange(false)}
              className="w-1/2 sm:w-auto rounded-xl border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              Close
            </Button>
            <Button
              size="sm"
              onClick={handleConsultation}
              className="w-1/2 sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 cursor-pointer"
            >
              <span>Book Consultation</span>
              <ArrowRight className="ml-1.5 size-3.5" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
