import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Calendar, CheckCircle2, Loader2, Mail, Phone, Send, Sparkles } from "lucide-react";

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialService?: string;
}

const SERVICE_OPTIONS = [
  "Custom Software Development",
  "Web & Mobile App Development",
  "Cloud Solutions & Migration",
  "AI & Process Automation",
  "Data Engineering & Analytics",
  "IT & Tech Strategy Consulting",
  "General Inquiry",
];

export function ConsultationModal({
  open,
  onOpenChange,
  initialService,
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: initialService || "Custom Software Development",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in your name, email, and project details.");
      return;
    }

    setLoading(true);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const toMail = import.meta.env.VITE_TO_MAIL || "talent@globeitvision.com";

      if (!serviceId || !templateId || !publicKey) {
        // Fallback demo mode
        console.log("Consultation submitted (mock mode):", { toMail, ...formData });
        await new Promise((resolve) => setTimeout(resolve, 800));
        setSubmitted(true);
        toast.success("Consultation request received! Our team will reach out within 24 hours.");
        return;
      }

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_email: toMail,
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone || "Not provided",
            service: formData.service,
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success("Consultation request sent successfully! We will contact you soon.");
      } else {
        throw new Error(await response.text());
      }
    } catch (err) {
      console.error("Consultation submit error:", err);
      toast.error("Failed to submit request. Please reach us directly at talent@globeitvision.com");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Custom Software Development",
      message: "",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl border-slate-200 bg-white p-0 text-slate-900 shadow-2xl sm:rounded-2xl overflow-hidden">
        {/* Header accent strip */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/50">
                <CheckCircle2 className="size-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Consultation Request Received!</h3>
              <p className="mx-auto max-w-md text-sm text-slate-600 leading-relaxed">
                Thank you for reaching out, <span className="font-semibold text-slate-800">{formData.name}</span>. One of our senior solutions architects will contact you within 24 hours at{" "}
                <span className="font-semibold text-slate-800">{formData.email}</span>.
              </p>
              <div className="pt-4">
                <Button onClick={handleReset} className="rounded-xl bg-blue-600 px-6 font-semibold text-white hover:bg-blue-700">
                  Close Window
                </Button>
              </div>
            </div>
          ) : (
            <>
              <DialogHeader className="text-left space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-700/10">
                  <Sparkles className="size-3.5" />
                  Free 30-Minute Architecture & Strategy Session
                </div>
                <DialogTitle className="text-2xl font-bold tracking-tight text-slate-900">
                  Book a Free Consultation
                </DialogTitle>
                <DialogDescription className="text-sm text-slate-600 leading-relaxed">
                  Discuss your project scope, architecture, or digital roadmap with Globe IT Vision specialists.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="modal-name" className="text-xs font-semibold text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="modal-name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-slate-200 bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="modal-email" className="text-xs font-semibold text-slate-700">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="modal-email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-slate-200 bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="modal-phone" className="text-xs font-semibold text-slate-700">
                      Phone Number (Optional)
                    </label>
                    <Input
                      id="modal-phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-slate-200 bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="modal-service" className="text-xs font-semibold text-slate-700">
                      Area of Interest
                    </label>
                    <select
                      id="modal-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="flex h-9 w-full rounded-md border border-slate-200 bg-slate-50/50 px-3 py-1.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="modal-message" className="text-xs font-semibold text-slate-700">
                    Project Overview & Goals <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="modal-message"
                    required
                    rows={3}
                    placeholder="Briefly describe what you're building, key challenges, or preferred timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-slate-200 bg-slate-50/50 focus:bg-white text-slate-900 placeholder:text-slate-400 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Mail className="size-3.5 text-blue-600" />
                    <span>talent@globeitvision.com</span>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto rounded-xl bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-lg disabled:opacity-70 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 size-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request Consultation
                        <Send className="ml-2 size-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
