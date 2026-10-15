import { Mail } from "lucide-react";

function LinkedinIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/globe-it-vision/home/",
    icon: LinkedinIcon,
    ariaLabel: "Globe IT Vision on LinkedIn",
    color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: InstagramIcon,
    ariaLabel: "Globe IT Vision on Instagram",
    color: "hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: FacebookIcon,
    ariaLabel: "Globe IT Vision on Facebook",
    color: "hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10",
  },
];

const NAV_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Our Work", href: "/#work" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Software Development", href: "/services" },
      { label: "Web & Mobile", href: "/services" },
      { label: "Cloud Solutions", href: "/services" },
      { label: "AI & Automation", href: "/services" },
      { label: "Data & Analytics", href: "/services" },
      { label: "IT Consulting", href: "/services" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Startups & MVPs", href: "/solutions" },
      { label: "Enterprise Applications", href: "/solutions" },
      { label: "Cloud Transformation", href: "/solutions" },
      { label: "AI Workflows", href: "/solutions" },
      { label: "Legacy Modernization", href: "/solutions" },
      { label: "Managed Engineering", href: "/solutions" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/30">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-1">
            <div className="flex items-center transition-transform duration-300 hover:scale-105">
              <img
                src="/logo-horizontal-white.png"
                alt="Globe IT Vision"
                className="h-10 w-auto"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              Transforming Ideas. Powering the Future. High-velocity engineering, scalable cloud systems, and AI-driven platforms.
            </p>
            {/* Quick Social Icons Row */}
            <div className="mt-6 flex items-center gap-2.5">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.ariaLabel}
                    className={`flex size-8.5 items-center justify-center rounded-xl border border-border/80 bg-surface/50 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs ${item.color}`}
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Columns 2-4: Company, Services, Solutions */}
          {NAV_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Column 5: Connect */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <div className="mt-4 space-y-4">
              {/* Email */}
              <a
                href="mailto:talent@globeitvision.com"
                className="group flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <div className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-border bg-surface/50 text-muted-foreground transition-colors group-hover:border-blue-500/50 group-hover:bg-blue-500/10 group-hover:text-blue-500">
                  <Mail className="size-3.5" />
                </div>
                <span className="truncate text-xs sm:text-sm font-medium">talent@globeitvision.com</span>
              </a>

              {/* Social Media Links with Icons */}
              <div className="pt-2 border-t border-border/50">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 block mb-2.5">
                  Social Channels
                </span>
                <ul className="space-y-2">
                  {SOCIAL_LINKS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={item.ariaLabel}
                          className="group flex items-center gap-2.5 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground"
                        >
                          <div className={`flex size-7 shrink-0 items-center justify-center rounded-lg border border-border bg-surface/50 text-muted-foreground transition-all duration-200 ${item.color}`}>
                            <Icon className="size-3.5 transition-transform duration-200 group-hover:scale-110" />
                          </div>
                          <span className="font-medium text-xs sm:text-sm">{item.name}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © 2026 Globe IT Vision. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap gap-5">
            <li>
              <a
                href="/privacy-policy"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground hover:underline"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
