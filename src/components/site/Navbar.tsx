import { useEffect, useState } from "react";
import { Globe2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-panel border-x-0 border-t-0 py-2" : "border-transparent py-4",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 lg:px-8"
      >
        <a href="#home" className="flex items-center transition-transform duration-300 hover:scale-105" aria-label="Globe IT Vision home">
          <img src="/logo-horizontal.png" alt="Globe IT Vision" className="h-9 w-auto invert hue-rotate-180 brightness-200 lg:h-10" />
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-cyan focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden xl:block">
          <Button asChild size="lg" className="bg-brand-gradient rounded-full font-semibold hover:opacity-90">
            <a href="#contact">Get a Free Consultation</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-10 items-center justify-center rounded-xl border border-border bg-surface/70 xl:hidden"
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </nav>

      {open ? (
        <div className="glass-panel mx-5 mt-3 rounded-2xl p-4 xl:hidden">
          <ul className="grid gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-cyan"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="bg-brand-gradient mt-3 w-full rounded-xl font-semibold"
            onClick={() => setOpen(false)}
          >
            <a href="#contact">Get a Free Consultation</a>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
