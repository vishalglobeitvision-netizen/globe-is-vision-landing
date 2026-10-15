import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Solutions } from "@/components/site/Solutions";
import { Industries } from "@/components/site/Industries";
import { Process } from "@/components/site/Process";
import { Technologies } from "@/components/site/Technologies";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

const TITLE = "Globe IT Vision | Technology & Digital Transformation Solutions";
const DESCRIPTION =
  "Globe IT Vision delivers innovative software development, cloud, AI, analytics and digital transformation solutions for businesses worldwide.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Globe IT Vision",
          slogan: "Transforming Ideas. Powering the Future.",
          description: DESCRIPTION,
          email: "talent@globeitvision.com",
          logo: "https://www.globeitvision.com/logo-square.png",
          image: "https://www.globeitvision.com/logo-square.png",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      {/* Static White Navbar (Sticky on scroll) */}
      <Navbar />

      {/* Dark Navy Section */}
      <div className="dark bg-background text-foreground">
        <main>
          <Hero />
        </main>
      </div>

      {/* Light White Section */}
      <div className="bg-background text-foreground">
        <Stats />
        <About />
        <Services />
        <WhyUs />
        <Solutions />
      </div>

      {/* Dark Navy Section */}
      <div className="dark bg-background text-foreground">
        <Industries />
        <Process />
        <Technologies />
      </div>

      {/* Light White Section */}
      <div className="bg-background text-foreground">
        <Portfolio />
        <Testimonials />
        <CTA />
      </div>

      {/* Dark Navy Section */}
      <div className="dark bg-background text-foreground">
        <Footer />
      </div>
    </div>
  );
}
