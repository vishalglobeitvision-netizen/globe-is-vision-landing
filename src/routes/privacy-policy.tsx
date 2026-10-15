import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import {
  Shield,
  ShieldCheck,
  Lock,
  FileText,
  Cookie,
  UserCheck,
  Share2,
  Database,
  RefreshCw,
  Mail,
  ExternalLink,
  ChevronRight,
  ArrowLeft,
  Printer,
  Calendar,
  Globe,
  CheckCircle2,
} from "lucide-react";

const TITLE = "Privacy Policy | Globe IT Vision";
const DESCRIPTION =
  "Learn how Globe IT Vision collects, uses, protects, and handles your personal data across our website and digital services.";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

const SECTIONS = [
  { id: "definitions", title: "1. Interpretation & Definitions", icon: FileText },
  { id: "collection", title: "2. Collecting Your Personal Data", icon: Database },
  { id: "cookies", title: "3. Cookies & Tracking Technologies", icon: Cookie },
  { id: "usage", title: "4. Use of Your Personal Data", icon: UserCheck },
  { id: "sharing", title: "5. Sharing of Personal Data", icon: Share2 },
  { id: "retention", title: "6. Retention of Your Data", icon: Calendar },
  { id: "transfer", title: "7. Transfer of Your Data", icon: Globe },
  { id: "deletion", title: "8. Delete Your Personal Data", icon: RefreshCw },
  { id: "disclosure", title: "9. Disclosure of Personal Data", icon: Lock },
  { id: "security", title: "10. Security of Your Data", icon: ShieldCheck },
  { id: "children", title: "11. Children's Privacy", icon: Shield },
  { id: "external-links", title: "12. Links to Other Websites", icon: ExternalLink },
  { id: "changes", title: "13. Changes to this Privacy Policy", icon: RefreshCw },
  { id: "contact-privacy", title: "14. Contact Us", icon: Mail },
];

export function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>("definitions");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 via-background to-background py-16 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]" />

          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground mb-6">
              <a href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
                <ArrowLeft className="size-3.5" />
                Back to Home
              </a>
              <span>/</span>
              <span className="text-foreground">Legal</span>
              <span>/</span>
              <span className="text-primary font-semibold">Privacy Policy</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary mb-4">
                  <ShieldCheck className="size-3.5" />
                  <span>Official Legal Notice</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                  Privacy Policy
                </h1>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use our Service, and tells You about Your privacy rights and how the law protects You.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5 rounded-full bg-surface border border-border px-3 py-1">
                    <Calendar className="size-3.5 text-primary" />
                    <span>Last updated: <strong>October 15, 2026</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-surface border border-border px-3 py-1">
                    <Globe className="size-3.5 text-primary" />
                    <span>Jurisdiction: <strong>Madhya Pradesh, India & Global</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-surface border border-border px-3 py-1 text-emerald-500 font-medium">
                    <CheckCircle2 className="size-3.5" />
                    <span>Status: Active & Enforceable</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Button
                  onClick={handlePrint}
                  variant="outline"
                  size="sm"
                  className="rounded-full gap-2 border-border hover:bg-surface font-medium"
                >
                  <Printer className="size-3.5" />
                  <span>Print Document</span>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="rounded-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                >
                  <a href="mailto:talent@globeitvision.com">
                    <Mail className="size-3.5" />
                    <span>Contact Privacy Officer</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Table of Contents Sticky Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="rounded-2xl border border-border bg-surface/40 p-5 backdrop-blur-sm">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <FileText className="size-3.5 text-primary" />
                    Table of Contents
                  </h2>
                  <nav className="space-y-1">
                    {SECTIONS.map((sec) => {
                      const Icon = sec.icon;
                      const isActive = activeSection === sec.id;
                      return (
                        <button
                          key={sec.id}
                          onClick={() => scrollTo(sec.id)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 flex items-center justify-between group ${
                            isActive
                              ? "bg-primary/15 text-primary font-semibold shadow-sm"
                              : "text-muted-foreground hover:text-foreground hover:bg-surface-2/60"
                          }`}
                        >
                          <span className="flex items-center gap-2 truncate">
                            <Icon className={`size-3.5 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`} />
                            <span className="truncate">{sec.title}</span>
                          </span>
                          <ChevronRight className={`size-3 shrink-0 transition-transform ${isActive ? "translate-x-0.5 text-primary" : "opacity-0 group-hover:opacity-100"}`} />
                        </button>
                      );
                    })}
                  </nav>
                </div>

                {/* Quick Help Card */}
                <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-surface/40 to-surface/20 p-5">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/20 text-primary mb-3">
                    <Mail className="size-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">Have Privacy Questions?</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    Our compliance and data security team is ready to help resolve your questions or handle erasure requests.
                  </p>
                  <a
                    href="mailto:talent@globeitvision.com"
                    className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    talent@globeitvision.com
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Policy Body */}
            <div className="lg:col-span-3 space-y-10">
              {/* Introduction Card */}
              <div className="rounded-3xl border border-border bg-surface/50 p-6 sm:p-8 backdrop-blur-sm leading-relaxed">
                <p className="text-sm sm:text-base text-foreground/90">
                  We use Your Personal data to provide and improve the Service. By accessing or using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </div>

              {/* 1. Interpretation & Definitions */}
              <section id="definitions" className="scroll-mt-28 rounded-3xl border border-border bg-surface/40 p-6 sm:p-8">
                <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <FileText className="size-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    1. Interpretation and Definitions
                  </h2>
                </div>

                <div className="mt-6 space-y-6 text-sm text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Interpretation</h3>
                    <p className="mt-1">
                      The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-3">Definitions</h3>
                    <p className="mb-4">For the purposes of this Privacy Policy:</p>

                    <div className="grid gap-3">
                      <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                        <strong className="text-foreground">Account</strong> means a unique account created for You to access our Service or parts of our Service.
                      </div>

                      <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                        <strong className="text-foreground">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.
                      </div>

                      <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                        <strong className="text-foreground">Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot; in this Agreement) refers to <strong>Globe IT Vision Pvt. Ltd.</strong>, Indore, Madhya Pradesh, India.
                      </div>

                      <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                        <strong className="text-foreground">Cookies</strong> are small files placed on Your computer, mobile device, or any other device by a website, containing the details of Your browsing history on that website among its many uses.
                      </div>

                      <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                        <strong className="text-foreground">Country</strong> refers to: Madhya Pradesh, India.
                      </div>

                      <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                        <strong className="text-foreground">Device</strong> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.
                      </div>

                      <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                        <strong className="text-foreground">Personal Data</strong> is any information that relates to an identified or identifiable individual.
                      </div>

                      <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                        <strong className="text-foreground">Service</strong> refers to the Website and digital consulting services provided by Globe IT Vision.
                      </div>

                      <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                        <strong className="text-foreground">Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used.
                      </div>

                      <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                        <strong className="text-foreground">Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                      </div>

                      <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                        <strong className="text-foreground">Website</strong> refers to Globe IT Vision, accessible from{" "}
                        <a href="https://www.globeitvision.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          https://www.globeitvision.com
                        </a>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                        <strong className="text-foreground">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. Collecting Your Personal Data */}
              <section id="collection" className="scroll-mt-28 rounded-3xl border border-border bg-surface/40 p-6 sm:p-8">
                <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Database className="size-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    2. Collecting and Using Your Personal Data
                  </h2>
                </div>

                <div className="mt-6 space-y-6 text-sm text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Types of Data Collected</h3>
                    <h4 className="mt-3 font-semibold text-foreground">Personal Data</h4>
                    <p className="mt-1">
                      While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                    </p>
                    <ul className="mt-3 list-disc list-inside space-y-1.5 pl-2 text-foreground/90">
                      <li>Email address</li>
                      <li>First name and last name</li>
                      <li>Phone number</li>
                      <li>Address, State, Province, ZIP/Postal code, City, Country</li>
                      <li>Company name and job title</li>
                      <li>Usage Data and consultation project requirements</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground">Usage Data</h4>
                    <p className="mt-1">Usage Data is collected automatically when using the Service.</p>
                    <p className="mt-2">
                      Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
                    </p>
                    <p className="mt-2">
                      When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers, and other diagnostic data.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. Tracking Technologies and Cookies */}
              <section id="cookies" className="scroll-mt-28 rounded-3xl border border-border bg-surface/40 p-6 sm:p-8">
                <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Cookie className="size-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    3. Tracking Technologies and Cookies
                  </h2>
                </div>

                <div className="mt-6 space-y-5 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
                  </p>

                  <div className="grid gap-3">
                    <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                      <strong className="text-foreground">Cookies or Browser Cookies:</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
                    </div>
                    <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                      <strong className="text-foreground">Web Beacons:</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics.
                    </div>
                  </div>

                  <p>
                    Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
                  </p>

                  <h4 className="font-semibold text-foreground pt-2">Purposes for Cookies We Use:</h4>
                  <div className="space-y-3">
                    <div className="rounded-xl border border-border/60 bg-surface/40 p-4">
                      <div className="font-semibold text-foreground flex items-center justify-between">
                        <span>Necessary / Essential Cookies</span>
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">Session</span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Administered by Us. These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. Without these Cookies, the services that You have asked for cannot be provided.
                      </p>
                    </div>

                    <div className="rounded-xl border border-border/60 bg-surface/40 p-4">
                      <div className="font-semibold text-foreground flex items-center justify-between">
                        <span>Cookies Policy / Notice Acceptance Cookies</span>
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">Persistent</span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Administered by Us. These Cookies identify if users have accepted the use of cookies on the Website.
                      </p>
                    </div>

                    <div className="rounded-xl border border-border/60 bg-surface/40 p-4">
                      <div className="font-semibold text-foreground flex items-center justify-between">
                        <span>Functionality Cookies</span>
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">Persistent</span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Administered by Us. These Cookies allow us to remember choices You make when You use the Website, such as remembering your language preference or dark mode theme settings.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. Use of Your Personal Data */}
              <section id="usage" className="scroll-mt-28 rounded-3xl border border-border bg-surface/40 p-6 sm:p-8">
                <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <UserCheck className="size-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    4. Use of Your Personal Data
                  </h2>
                </div>

                <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>The Company may use Personal Data for the following purposes:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5">
                      <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <strong className="text-foreground">To provide and maintain our Service:</strong> including to monitor the usage of our Service and ensure peak performance and reliability.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <strong className="text-foreground">To manage Your Account:</strong> to manage Your registration and authorized access as a client or partner of Globe IT Vision.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <strong className="text-foreground">For the performance of a contract:</strong> the development, compliance, and undertaking of service agreements, master service contracts (MSAs), or statements of work (SOWs) for products or engineering services You have engaged us for.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <strong className="text-foreground">To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication regarding updates or informative communications related to our functionalities, security alerts, and technical project milestones.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <strong className="text-foreground">To provide You with updates and insights:</strong> news, special industry briefs, technical whitepapers, and general information about other engineering services which we offer, unless You have opted not to receive such notifications.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <strong className="text-foreground">To manage Your requests:</strong> To attend to, prioritize, and manage Your consultation bookings, RFPs, and customer support queries.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <strong className="text-foreground">For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <strong className="text-foreground">For analytics and optimization:</strong> data analysis, identifying usage trends, measuring the effectiveness of campaigns, and evaluating and improving our services, solutions, marketing, and user experience.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 5. Sharing of Personal Data */}
              <section id="sharing" className="scroll-mt-28 rounded-3xl border border-border bg-surface/40 p-6 sm:p-8">
                <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Share2 className="size-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    5. Sharing of Your Personal Data
                  </h2>
                </div>

                <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>We may share Your personal information in the following situations:</p>
                  <div className="grid gap-3">
                    <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                      <strong className="text-foreground">With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, host cloud infrastructure, and to contact You.
                    </div>
                    <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                      <strong className="text-foreground">For Business Transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business.
                    </div>
                    <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                      <strong className="text-foreground">With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy.
                    </div>
                    <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                      <strong className="text-foreground">With Business Partners:</strong> We may share Your information with Our trusted technology partners to offer You certain integrated cloud or software solutions.
                    </div>
                    <div className="rounded-xl border border-border/70 bg-surface/60 p-4">
                      <strong className="text-foreground">With Your Consent:</strong> We may disclose Your personal information for any other purpose with Your explicit consent.
                    </div>
                  </div>
                </div>
              </section>

              {/* 6. Retention of Your Data */}
              <section id="retention" className="scroll-mt-28 rounded-3xl border border-border bg-surface/40 p-6 sm:p-8">
                <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Calendar className="size-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    6. Retention of Your Personal Data
                  </h2>
                </div>

                <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                  </p>
                  <p>
                    The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                  </p>
                </div>
              </section>

              {/* 7. Transfer of Your Data */}
              <section id="transfer" className="scroll-mt-28 rounded-3xl border border-border bg-surface/40 p-6 sm:p-8">
                <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Globe className="size-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    7. Transfer of Your Personal Data
                  </h2>
                </div>

                <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Your information, including Personal Data, is processed at the Company&apos;s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country, or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
                  </p>
                  <p>
                    Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
                  </p>
                  <p>
                    The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                  </p>
                </div>
              </section>

              {/* 8. Delete Your Personal Data */}
              <section id="deletion" className="scroll-mt-28 rounded-3xl border border-border bg-surface/40 p-6 sm:p-8">
                <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <RefreshCw className="size-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    8. Delete Your Personal Data
                  </h2>
                </div>

                <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
                  </p>
                  <p>
                    Our Service may give You the ability to delete certain information about You from within the Service. You may update, amend, or delete Your information at any time by contacting Us directly at{" "}
                    <a href="mailto:talent@globeitvision.com" className="text-primary hover:underline font-semibold">
                      talent@globeitvision.com
                    </a>{" "}
                    to request access to, correct, or delete any personal information that You have provided to Us.
                  </p>
                  <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-200 text-xs">
                    <strong>Please note:</strong> We may need to retain certain information when we have a statutory legal obligation, active contract requirement, or lawful basis to do so under applicable law.
                  </div>
                </div>
              </section>

              {/* 9. Disclosure of Personal Data */}
              <section id="disclosure" className="scroll-mt-28 rounded-3xl border border-border bg-surface/40 p-6 sm:p-8">
                <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Lock className="size-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    9. Disclosure of Your Personal Data
                  </h2>
                </div>

                <div className="mt-6 space-y-5 text-sm text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Business Transactions</h3>
                    <p className="mt-1">
                      If the Company is involved in a merger, acquisition, or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-foreground">Law Enforcement</h3>
                    <p className="mt-1">
                      Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-foreground">Other Legal Requirements</h3>
                    <p className="mt-1">The Company may disclose Your Personal Data in good faith belief that such action is necessary to:</p>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-foreground/90 pl-2">
                      <li>Comply with a statutory legal obligation</li>
                      <li>Protect and defend the rights or property of the Company</li>
                      <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                      <li>Protect the personal safety of Users of the Service or the public</li>
                      <li>Protect against legal liability</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 10. Security of Your Personal Data */}
              <section id="security" className="scroll-mt-28 rounded-3xl border border-border bg-surface/40 p-6 sm:p-8">
                <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <ShieldCheck className="size-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    10. Security of Your Personal Data
                  </h2>
                </div>

                <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    The security of Your Personal Data is of paramount importance to Us. We implement industry-standard encryption protocols (TLS/SSL in transit, AES-256 at rest), strict role-based access control (RBAC), and automated continuous vulnerability auditing across all infrastructure.
                  </p>
                  <p>
                    However, remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable and rigorous means to protect Your Personal Data, We cannot guarantee its absolute security.
                  </p>
                </div>
              </section>

              {/* 11. Children's Privacy */}
              <section id="children" className="scroll-mt-28 rounded-3xl border border-border bg-surface/40 p-6 sm:p-8">
                <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Shield className="size-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    11. Children&apos;s Privacy
                  </h2>
                </div>

                <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.
                  </p>
                  <p>
                    If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take swift steps to purge and remove that information from Our servers.
                  </p>
                </div>
              </section>

              {/* 12. Links to Other Websites */}
              <section id="external-links" className="scroll-mt-28 rounded-3xl border border-border bg-surface/40 p-6 sm:p-8">
                <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <ExternalLink className="size-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    12. Links to Other Websites
                  </h2>
                </div>

                <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Our Service may contain links to other websites that are not operated by Us. If You click on a third-party link, You will be directed to that third party&apos;s site. We strongly advise You to review the Privacy Policy of every site You visit.
                  </p>
                  <p>
                    We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                  </p>
                </div>
              </section>

              {/* 13. Changes to this Privacy Policy */}
              <section id="changes" className="scroll-mt-28 rounded-3xl border border-border bg-surface/40 p-6 sm:p-8">
                <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <RefreshCw className="size-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    13. Changes to this Privacy Policy
                  </h2>
                </div>

                <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy.
                  </p>
                  <p>
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                </div>
              </section>

              {/* 14. Contact Us */}
              <section id="contact-privacy" className="scroll-mt-28 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface/60 to-surface/30 p-6 sm:p-8">
                <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Mail className="size-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    14. Contact Us
                  </h2>
                </div>

                <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p className="text-foreground">
                    If you have any questions, inquiries, or data access requests regarding this Privacy Policy, You can contact us:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="rounded-2xl border border-border/80 bg-surface/80 p-5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">By Email</span>
                      <p className="mt-2 text-foreground font-semibold">
                        <a href="mailto:talent@globeitvision.com" className="hover:text-primary transition-colors">
                          talent@globeitvision.com
                        </a>
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">Response time: within 24–48 business hours</p>
                    </div>

                    <div className="rounded-2xl border border-border/80 bg-surface/80 p-5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">By Official Website</span>
                      <p className="mt-2 text-foreground font-semibold">
                        <a href="https://www.globeitvision.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1">
                          www.globeitvision.com
                          <ExternalLink className="size-3.5" />
                        </a>
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">Online contact and consultation requests</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-surface/50 p-5 mt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Office Address</span>
                    <p className="mt-1 text-foreground font-medium">
                      Globe IT Vision Pvt. Ltd.
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Indore, Madhya Pradesh, India
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
