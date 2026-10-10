import { Globe2 } from "lucide-react";

const COLUMNS = [
  {
    title: "Company",
    links: ["About Us", "Our Work", "Careers", "Contact"],
  },
  {
    title: "Services",
    links: [
      "Software Development",
      "Web & Mobile",
      "Cloud Solutions",
      "AI & Automation",
      "Data & Analytics",
      "IT Consulting",
    ],
  },
  {
    title: "Resources",
    links: ["Insights", "Case Studies", "Blog", "FAQs"],
  },
  {
    title: "Connect",
    links: ["talent@globeitvision.com", "LinkedIn", "Instagram", "Facebook"],
  },
];

export function Footer() {
  return (
    <footer id="careers" className="relative border-t border-border bg-surface/30">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center transition-transform duration-300 hover:scale-105">
              <img src="/logo-horizontal.png" alt="Globe IT Vision" className="h-10 w-auto invert hue-rotate-180 brightness-200" />
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Transforming Ideas. Powering the Future.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#contact"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © 2026 Globe IT Vision. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap gap-5">
            {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map((item) => (
              <li key={item}>
                <a
                  href="#contact"
                  className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
