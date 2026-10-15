import { Quote, Star, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./Reveal";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  impactBadge: string;
  quote: string;
  initials: string;
  avatarGradient: string;
}

const CLIENT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "marcus-thorne",
    name: "Marcus Thorne",
    role: "Chief Technology Officer",
    company: "FinEdge Global",
    location: "New York, USA",
    impactBadge: "99.999% SLA Uptime",
    quote:
      "Globe IT Vision completely revolutionized our transaction processing backbone. Moving to a high-concurrency event-driven microservices architecture allowed us to scale from 50k to over 2M transactions per minute without a hitch.",
    initials: "MT",
    avatarGradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "elena-rostova",
    name: "Dr. Elena Rostova",
    role: "VP of Digital Health",
    company: "MediPulse Healthcare",
    location: "London, UK",
    impactBadge: "HIPAA & SOC2 Compliant",
    quote:
      "Their engineering discipline is unmatched. They helped us architect and launch an AI-driven triage workflow that handles 25,000+ patient records daily with zero data leaks and flawless security compliance.",
    initials: "ER",
    avatarGradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "david-vance",
    name: "David Vance",
    role: "Head of Engineering",
    company: "Omnia Retail Systems",
    location: "Austin, USA",
    impactBadge: "3.8x Faster Checkout",
    quote:
      "Before partnering with Globe IT Vision, our legacy e-commerce platform buckled under peak traffic. Their cloud modernization team rebuilt our catalog and checkout in 4 months, yielding 38% higher conversions.",
    initials: "DV",
    avatarGradient: "from-amber-500 to-orange-500",
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Director of Cloud & DevOps",
    company: "NexaGen Capital",
    location: "Singapore",
    impactBadge: "$1.4M Cloud Cost Savings",
    quote:
      "Their multi-cloud architecture and automated Kubernetes optimization slashed our AWS expenditure by 34% within the first two quarters. Consistently transparent, communicative, and technically brilliant.",
    initials: "PS",
    avatarGradient: "from-indigo-500 to-purple-500",
  },
  {
    id: "carlos-mendez",
    name: "Carlos Mendez",
    role: "Chief Product Officer",
    company: "LogisticsIQ",
    location: "Toronto, Canada",
    impactBadge: "45% Operational Gain",
    quote:
      "The automated dispatch and real-time fleet analytics pipeline Globe IT Vision developed turned our manual operations into an automated machine. The ROI was evident within 60 days of go-live.",
    initials: "CM",
    avatarGradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Founder & CEO",
    company: "AutoSync Mobility",
    location: "Berlin, Germany",
    impactBadge: "1.2M Connected Devices",
    quote:
      "Finding an engineering partner who understands low-latency telematics and scalable IoT ingestion at this scale was a game changer. Globe IT Vision delivered on time, within budget, and exceeded our SLA goals.",
    initials: "SJ",
    avatarGradient: "from-violet-500 to-pink-500",
  },
  {
    id: "hiroshi-tanaka",
    name: "Hiroshi Tanaka",
    role: "VP of Enterprise Solutions",
    company: "CloudScale AI",
    location: "Tokyo, Japan",
    impactBadge: "Zero Downtime Migration",
    quote:
      "They seamlessly migrated our monolithic database into an elastic distributed setup while our production SaaS continued serving over 800 enterprise accounts. Flawless execution and zero downtime.",
    initials: "HT",
    avatarGradient: "from-rose-500 to-red-500",
  },
];

export function Testimonials() {
  // Duplicating the 7 client items creates an exact 50% shift loop for smooth right-to-left marquee
  const loopedClients = [...CLIENT_TESTIMONIALS, ...CLIENT_TESTIMONIALS];

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Businesses Worldwide. Built for Results."
          subtitle="Discover how our engineering solutions empower global enterprises, scale-ups, and innovators to achieve measurable business impact."
        />
      </div>

      {/* Marquee slider track container with gradient fade masks */}
      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)]">
        <div className="flex w-max gap-6 animate-marquee-testimonials hover:[animation-play-state:paused] py-4">
          {loopedClients.map((client, i) => (
            <figure
              key={`${client.id}-${i}`}
              className="group relative flex w-[350px] sm:w-[420px] shrink-0 flex-col justify-between rounded-3xl border border-border/80 bg-surface/50 p-7 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-surface hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/5"
            >
              <div>
                {/* Header: Star Rating & Impact Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1" aria-label="Rated 5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-amber-400 text-amber-400" aria-hidden />
                    ))}
                  </div>
                  <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                    {client.impactBadge}
                  </span>
                </div>

                {/* Quote Icon & Text */}
                <div className="relative mt-5">
                  <Quote className="size-8 text-primary/20 absolute -top-2 -left-1 -z-10" aria-hidden />
                  <blockquote className="text-sm sm:text-base leading-relaxed text-foreground/90 font-normal">
                    “{client.quote}”
                  </blockquote>
                </div>
              </div>

              {/* Client Info Footer */}
              <figcaption className="mt-6 flex items-center gap-3.5 border-t border-border/60 pt-4">
                <div
                  className={`flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${client.avatarGradient} text-white font-bold text-sm shadow-md`}
                  aria-hidden
                >
                  {client.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="truncate text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {client.name}
                    </span>
                    <CheckCircle2 className="size-3.5 shrink-0 text-primary" aria-label="Verified Client" />
                  </div>
                  <span className="block truncate text-xs text-muted-foreground">
                    {client.role} • <strong className="text-foreground/80 font-medium">{client.company}</strong>
                  </span>
                  <span className="block text-[11px] text-muted-foreground/75 font-mono">
                    {client.location}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
