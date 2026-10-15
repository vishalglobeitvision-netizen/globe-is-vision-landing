import { useState, useEffect } from "react";
import { Cookie, X, Check, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "gitv_cookie_consent";

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (!consent) {
        // Small delay so it smoothly glides in after initial page load
        const timer = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore localStorage issues in restricted browser modes
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
      document.cookie = `${STORAGE_KEY}=accepted; path=/; max-age=31536000; SameSite=Lax`;
    } catch {}
    setVisible(false);
  };

  const handleNecessaryOnly = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "necessary_only");
      document.cookie = `${STORAGE_KEY}=necessary_only; path=/; max-age=31536000; SameSite=Lax`;
    } catch {}
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:bottom-6 z-50 sm:max-w-md w-auto"
    >
      <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-surface/95 backdrop-blur-2xl p-5 sm:p-6 shadow-2xl shadow-black/40 text-foreground transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute -top-12 -right-12 size-32 rounded-full bg-primary/20 blur-2xl" />

        <div className="relative">
          {/* Top Bar with Icon & Title */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary shadow-sm border border-primary/20">
                <Cookie className="size-5" aria-hidden />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Cookie Preferences
                </h3>
                <span className="text-[11px] text-muted-foreground flex items-center gap-1 font-medium">
                  <ShieldCheck className="size-3 text-emerald-500" />
                  Your privacy is protected
                </span>
              </div>
            </div>

            <button
              onClick={handleNecessaryOnly}
              className="text-muted-foreground hover:text-foreground rounded-lg p-1 transition-colors"
              aria-label="Close cookie banner"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Description */}
          <p className="mt-3.5 text-xs text-muted-foreground leading-relaxed">
            We use cookies to optimize site navigation, analyze performance, and deliver tailored engineering services in accordance with our{" "}
            <a
              href="/privacy-policy"
              className="text-primary underline underline-offset-2 font-medium hover:text-primary/80 transition-colors"
            >
              Privacy Policy
            </a>
            .
          </p>

          {/* Collapsible Cookie Categories */}
          {showPreferences && (
            <div className="mt-3.5 space-y-2 border-t border-border/60 pt-3 text-xs">
              <div className="flex items-center justify-between rounded-xl bg-surface-2/60 p-2.5">
                <div>
                  <span className="font-semibold text-foreground block">Essential Cookies</span>
                  <span className="text-[11px] text-muted-foreground">Required for core system security & navigation</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-500 font-semibold uppercase bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  Always Active
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-surface-2/40 p-2.5">
                <div>
                  <span className="font-semibold text-foreground block">Analytics & Performance</span>
                  <span className="text-[11px] text-muted-foreground">Helps us evaluate speed and user journeys</span>
                </div>
                <span className="text-[10px] font-mono text-primary font-semibold uppercase bg-primary/10 px-2 py-0.5 rounded-full">
                  Optional
                </span>
              </div>
            </div>
          )}

          {/* Buttons Row */}
          <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <Button
              onClick={handleAcceptAll}
              size="sm"
              className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-semibold shadow-md shadow-primary/20 gap-1.5"
            >
              <Check className="size-3.5" />
              <span>Accept All</span>
            </Button>

            <Button
              onClick={handleNecessaryOnly}
              variant="outline"
              size="sm"
              className="rounded-full border-border bg-surface/50 hover:bg-surface text-muted-foreground hover:text-foreground text-xs font-medium"
            >
              <span>Necessary Only</span>
            </Button>

            <button
              type="button"
              onClick={() => setShowPreferences(!showPreferences)}
              className="text-[11px] font-medium text-muted-foreground hover:text-primary text-center px-1.5 py-1 transition-colors flex items-center justify-center gap-1"
            >
              <span>{showPreferences ? "Less" : "Preferences"}</span>
              {showPreferences ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
