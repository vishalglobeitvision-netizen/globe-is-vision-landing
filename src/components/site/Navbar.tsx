import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  Menu,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ConsultationModal } from "./ConsultationModal";
import { ServiceModal } from "./ServiceModal";
import { SolutionModal } from "./SolutionModal";
import { SERVICES_DATA, type ServiceDetail } from "@/data/servicesData";
import { SOLUTIONS_DATA, type SolutionDetail } from "@/data/solutionsData";

const SIMPLE_NAV_LINKS = [
  { label: "Industries", href: "/#industries", id: "industries" },
  { label: "About Us", href: "/#about", id: "about" },
  { label: "Our Work", href: "/#work", id: "work" },
  { label: "Blogs", href: "/blogs", id: "blogs" },
];

const HOME_SECTIONS_IN_ORDER = [
  "home",
  "about",
  "services",
  "solutions",
  "industries",
  "work",
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [activeDropdown, setActiveDropdown] = useState<"services" | "solutions" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  // Modals state
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState<string>("Custom Software Development");

  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);

  const [selectedSolution, setSelectedSolution] = useState<SolutionDetail | null>(null);
  const [solutionModalOpen, setSolutionModalOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  // Active section scroll spy & scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Dedicated pages
      if (window.location.pathname.startsWith("/services")) {
        setActiveSection("services");
        return;
      }
      if (window.location.pathname.startsWith("/solutions")) {
        setActiveSection("solutions");
        return;
      }
      if (window.location.pathname.startsWith("/blogs")) {
        setActiveSection("blogs");
        return;
      }

      // Home page scroll-spy
      if (window.location.pathname === "/" || window.location.pathname === "") {
        // If near bottom of page, activate last footer section
        const isNearBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 80;
        if (isNearBottom) {
          setActiveSection("work");
          return;
        }

        // Header offset
        const scrollPos = window.scrollY + 160;
        let current = "home";

        for (const id of HOME_SECTIONS_IN_ORDER) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            if (scrollPos >= elementTop) {
              current = id;
            }
          }
        }

        setActiveSection(current);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Stable hover handling with generous buffer
  const handleMouseEnter = (type: "services" | "solutions") => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setActiveDropdown(type);
  };

  const handleMouseLeave = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    // 350ms buffer prevents accidental closure when moving mouse across cards
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 350);
  };

  const handleServiceClick = (service: ServiceDetail) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setSelectedService(service);
    setServiceModalOpen(true);
  };

  const handleSolutionClick = (solution: SolutionDetail) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setSelectedSolution(solution);
    setSolutionModalOpen(true);
  };

  const handleBookConsultation = (title: string) => {
    setConsultationService(title);
    setConsultationOpen(true);
  };

  const handleLinkClick = (href: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      if (window.location.pathname === "/" || window.location.pathname === "") {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      window.location.href = href;
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      <header
        ref={navRef}
        className={cn(
          "sticky top-0 z-40 w-full bg-white transition-all duration-200 border-b",
          scrolled
            ? "border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] py-2.5"
            : "border-slate-100 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] py-3.5",
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/" || window.location.pathname === "") {
                e.preventDefault();
                handleLinkClick("/#home");
              }
            }}
            className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Globe IT Vision Home"
          >
            <img
              src="/logo-horizontal.png"
              alt="Globe IT Vision"
              className="h-9 w-auto lg:h-10 transition-opacity"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden xl:flex items-center gap-1.5">
            {/* Home link */}
            <a
              href="/#home"
              onClick={(e) => {
                if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
                  e.preventDefault();
                  handleLinkClick("/#home");
                }
              }}
              className={cn(
                "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-150",
                activeSection === "home" && (typeof window === "undefined" || window.location?.pathname === "/" || window.location?.pathname === "")
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70",
              )}
            >
              Home
            </a>

            {/* Services with Hover/Click Dropdown - Slow & Smooth Animation */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => {
                  setActiveDropdown((prev) => (prev === "services" ? null : "services"));
                }}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-150 cursor-pointer",
                  activeSection === "services" || activeDropdown === "services"
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70",
                )}
                aria-expanded={activeDropdown === "services"}
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-500 ease-out",
                    activeDropdown === "services" && "rotate-180 text-blue-600",
                  )}
                />
              </button>

              {/* Services Dropdown Panel with Slow Smooth Animation */}
              {activeDropdown === "services" && (
                <div
                  className="absolute left-1/2 top-full -translate-x-1/2 pt-2.5 w-[640px] animate-dropdown-slow before:absolute before:-top-3 before:inset-x-0 before:h-4 before:content-['']"
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xl ring-1 ring-slate-900/5">
                    {/* Header */}
                    <div className="mb-3.5 flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="size-4 text-blue-600" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                          Engineering & Digital Services
                        </span>
                      </div>
                      <a
                        href="/services"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/link"
                      >
                        <span>Explore All Services</span>
                        <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5" />
                      </a>
                    </div>

                    {/* 6 Services Clickable items */}
                    <div className="grid grid-cols-2 gap-2">
                      {SERVICES_DATA.map((service) => {
                        const Icon = service.icon;
                        return (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => handleServiceClick(service)}
                            className="group flex items-start gap-3 rounded-xl p-3 text-left transition-all hover:bg-blue-50/50 hover:shadow-2xs cursor-pointer border border-transparent hover:border-blue-100"
                          >
                            <div className="flex size-9.5 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                              <Icon className="size-5" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-blue-600 flex items-center gap-1">
                                <span>{service.title}</span>
                              </div>
                              <p className="mt-0.5 text-xs text-slate-500 line-clamp-1 leading-relaxed">
                                {service.shortDesc}
                              </p>
                              <span className="mt-1 inline-flex items-center text-[11px] font-semibold text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                                View details →
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Dropdown Footer */}
                    <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 p-3 border border-slate-100">
                      <div className="text-xs text-slate-600">
                        Looking for a custom scope, architecture audit, or team extension?
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          onClick={() => {
                            setActiveDropdown(null);
                            handleBookConsultation("Custom Software Development");
                          }}
                          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold h-8 px-3.5 cursor-pointer shadow-xs"
                        >
                          Book Consultation
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions with Hover/Click Dropdown - Slow & Smooth Animation */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => {
                  setActiveDropdown((prev) => (prev === "solutions" ? null : "solutions"));
                }}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-150 cursor-pointer",
                  activeSection === "solutions" || activeDropdown === "solutions"
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70",
                )}
                aria-expanded={activeDropdown === "solutions"}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-500 ease-out",
                    activeDropdown === "solutions" && "rotate-180 text-blue-600",
                  )}
                />
              </button>

              {/* Solutions Dropdown Panel with Slow Smooth Animation */}
              {activeDropdown === "solutions" && (
                <div
                  className="absolute left-1/2 top-full -translate-x-1/2 pt-2.5 w-[660px] animate-dropdown-slow before:absolute before:-top-3 before:inset-x-0 before:h-4 before:content-['']"
                  onMouseEnter={() => handleMouseEnter("solutions")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xl ring-1 ring-slate-900/5">
                    {/* Header */}
                    <div className="mb-3.5 flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="size-4 text-indigo-600" />
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                          Industry & Enterprise Solutions
                        </span>
                      </div>
                      <a
                        href="/solutions"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group/link"
                      >
                        <span>Explore All Solutions</span>
                        <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5" />
                      </a>
                    </div>

                    {/* Solutions Clickable Items */}
                    <div className="grid grid-cols-2 gap-2">
                      {SOLUTIONS_DATA.slice(0, 6).map((solution) => {
                        const Icon = solution.icon;
                        return (
                          <button
                            key={solution.id}
                            type="button"
                            onClick={() => handleSolutionClick(solution)}
                            className="group flex items-start gap-3 rounded-xl p-3 text-left transition-all hover:bg-indigo-50/50 hover:shadow-2xs cursor-pointer border border-transparent hover:border-indigo-100"
                          >
                            <div className="flex size-9.5 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                              <Icon className="size-5" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-indigo-600 flex items-center gap-1">
                                <span>{solution.title}</span>
                              </div>
                              <p className="mt-0.5 text-xs text-slate-500 line-clamp-1 leading-relaxed">
                                {solution.shortDesc}
                              </p>
                              <span className="mt-1 inline-flex items-center text-[11px] font-semibold text-indigo-600 opacity-0 transition-opacity group-hover:opacity-100">
                                View details →
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Solutions Dropdown Footer */}
                    <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-50 p-3 border border-slate-100">
                      <div className="text-xs text-slate-600">
                        Tailored engineering frameworks for founders and enterprise leaders.
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          onClick={() => {
                            setActiveDropdown(null);
                            handleBookConsultation("Enterprise Applications");
                          }}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold h-8 px-3.5 cursor-pointer shadow-xs"
                        >
                          Book Consultation
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Simple Nav Links */}
            {SIMPLE_NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-150",
                    isActive
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70",
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Consultation CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <Button
              onClick={() => {
                handleBookConsultation("General Inquiry");
              }}
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xs transition-colors hover:bg-slate-50 xl:hidden cursor-pointer"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 xl:hidden shadow-xl animate-in slide-in-from-top-3 duration-200 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <a
                href="/#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("/#home");
                }}
                className={cn(
                  "block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                  activeSection === "home"
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-slate-700 hover:bg-slate-50",
                )}
              >
                Home
              </a>

              {/* Mobile Accordion: Services */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  <span className={activeSection === "services" ? "text-blue-600 font-semibold" : ""}>
                    Services
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-4 text-slate-400 transition-transform duration-200",
                      mobileServicesOpen && "rotate-180 text-blue-600",
                    )}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="ml-3 my-1 border-l-2 border-blue-100 pl-3 space-y-1">
                    <a
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-lg bg-blue-50/70 px-3 py-2 text-xs font-bold text-blue-700 mb-2"
                    >
                      <span>Explore All Services</span>
                      <ArrowRight className="size-3" />
                    </a>

                    {SERVICES_DATA.map((service) => {
                      const Icon = service.icon;
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => handleServiceClick(service)}
                          className="flex w-full items-center justify-between gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-600 hover:bg-blue-50/70 hover:text-blue-600 text-left cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className="size-4 text-blue-600 shrink-0" />
                            <span>{service.title}</span>
                          </div>
                          <span className="text-[10px] text-blue-600 font-medium">Details →</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Mobile Accordion: Solutions */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  <span className={activeSection === "solutions" ? "text-indigo-600 font-semibold" : ""}>
                    Solutions
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-4 text-slate-400 transition-transform duration-200",
                      mobileSolutionsOpen && "rotate-180 text-indigo-600",
                    )}
                  />
                </button>
                {mobileSolutionsOpen && (
                  <div className="ml-3 my-1 border-l-2 border-indigo-100 pl-3 space-y-1">
                    <a
                      href="/solutions"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-lg bg-indigo-50/70 px-3 py-2 text-xs font-bold text-indigo-700 mb-2"
                    >
                      <span>Explore All Solutions</span>
                      <ArrowRight className="size-3" />
                    </a>

                    {SOLUTIONS_DATA.map((solution) => {
                      const Icon = solution.icon;
                      return (
                        <button
                          key={solution.id}
                          type="button"
                          onClick={() => handleSolutionClick(solution)}
                          className="flex w-full items-center justify-between gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-600 hover:bg-indigo-50/70 hover:text-indigo-600 text-left cursor-pointer"
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className="size-4 text-indigo-600 shrink-0" />
                            <span>{solution.title}</span>
                          </div>
                          <span className="text-[10px] text-indigo-600 font-medium">Details →</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Mobile Simple Links */}
              {SIMPLE_NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={cn(
                    "block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                    activeSection === link.id
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-slate-700 hover:bg-slate-50",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Consultation CTA */}
            <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleBookConsultation("General Inquiry");
                }}
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 hover:from-blue-700 hover:to-indigo-700 cursor-pointer"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="ml-2 size-4" />
              </Button>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-1">
                <a
                  href="mailto:talent@globeitvision.com"
                  className="flex items-center gap-1.5 hover:text-blue-600"
                >
                  <Mail className="size-3.5" />
                  <span>talent@globeitvision.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        open={serviceModalOpen}
        onOpenChange={setServiceModalOpen}
        onBookConsultation={handleBookConsultation}
      />

      {/* Solution Details Modal */}
      <SolutionModal
        solution={selectedSolution}
        open={solutionModalOpen}
        onOpenChange={setSolutionModalOpen}
        onBookConsultation={handleBookConsultation}
      />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        open={consultationOpen}
        onOpenChange={setConsultationOpen}
        initialService={consultationService}
      />
    </>
  );
}
