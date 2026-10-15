import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const toMail = import.meta.env.VITE_TO_MAIL || "talent@globeitvision.com";

      if (!serviceId || !templateId || !publicKey) {
        console.warn("EmailJS configuration is missing. Falling back to console log (mock mode).");
        console.log("Mock sending email to:", toMail, "with data:", formData);
        
        // Simulating delay
        await new Promise((resolve) => setTimeout(resolve, 800));
        
        toast.success("Thank you! Your message has been sent (Mock Mode).");
        setFormData({ name: "", email: "", service: "", message: "" });
        setLoading(false);
        return;
      }

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_email: toMail,
            from_name: formData.name,
            from_email: formData.email,
            service: formData.service || "General Inquiry",
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        toast.success("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to send email");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send the message. Please check config or try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal y={40} scale={0.97}>
          <div className="relative overflow-hidden rounded-[2rem] border border-border px-7 py-16 text-center md:px-16 md:py-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-95"
              style={{ background: "var(--gradient-brand)" }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 120%, oklch(0 0 0 / 55%), transparent 70%)",
              }}
              aria-hidden
            />
            <div className="relative mx-auto max-w-3xl">
              <h2 className="text-3xl leading-tight font-bold text-balance text-primary-foreground sm:text-4xl md:text-5xl">
                Have a Vision? Let's Build It.
              </h2>
              <p className="mt-4 text-base text-primary-foreground/85 md:text-lg">
                Whether you're launching a new digital product, modernizing existing technology or
                exploring what's possible with AI, Globe IT Vision is ready to help.
              </p>

              {/* Glassmorphic Contact Form Card */}
              <div className="relative mx-auto mt-10 max-w-xl rounded-2xl border border-white/20 bg-black/30 p-6 text-left shadow-2xl backdrop-blur-md md:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold tracking-wider uppercase text-white/80">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-10 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus-visible:border-white/40 focus-visible:ring-white/40"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold tracking-wider uppercase text-white/80">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-10 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus-visible:border-white/40 focus-visible:ring-white/40"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold tracking-wider uppercase text-white/80">
                      Interested Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white shadow-sm transition-colors focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/40 cursor-pointer [&>option]:bg-neutral-900 [&>option]:text-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="Software Development">Software Development</option>
                      <option value="Web & Mobile">Web & Mobile Apps</option>
                      <option value="Cloud Solutions">Cloud Solutions</option>
                      <option value="AI & Automation">AI & Automation</option>
                      <option value="Data & Analytics">Data & Analytics</option>
                      <option value="IT Consulting">IT Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold tracking-wider uppercase text-white/80">
                      Message *
                    </label>
                    <Textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[100px] border-white/20 bg-white/10 text-white placeholder:text-white/40 focus-visible:border-white/40 focus-visible:ring-white/40"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 rounded-xl bg-white text-black hover:bg-white/90 font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md mt-6"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
