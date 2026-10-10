import { motion } from "motion/react";
import { ArrowRight, BarChart3, Bot, Cloud, Shield, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroGlobe from "@/assets/hero-globe.png";

const ORBIT_ITEMS = [
  { icon: Cloud, label: "Cloud", className: "left-0 top-10" },
  { icon: Bot, label: "AI", className: "right-2 top-4" },
  { icon: BarChart3, label: "Analytics", className: "right-0 bottom-24" },
  { icon: Shield, label: "Security", className: "left-2 bottom-12" },
  { icon: Smartphone, label: "Mobile", className: "left-1/2 -translate-x-1/2 bottom-0" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="animate-pulse-glow pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-50 blur-[130px]"
        style={{ background: "var(--gradient-brand)" }}
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase"
          >
            <span className="size-1.5 rounded-full bg-cyan" aria-hidden />
            Global Technology • Digital Innovation
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 text-4xl leading-[1.05] font-bold text-balance sm:text-5xl lg:text-[4.1rem]"
          >
            Transforming Ideas.
            <br />
            <span className="text-gradient">Powering the Future.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Globe IT Vision delivers innovative software, cloud, AI and digital transformation
            solutions that help businesses grow, scale and compete in a rapidly changing digital
            world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="bg-brand-gradient glow-ring group h-12 rounded-full px-7 text-[15px] font-semibold transition-transform hover:-translate-y-0.5 hover:opacity-95"
            >
              <a href="#contact">
                Start Your Project
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-border bg-surface/50 px-7 text-[15px] font-semibold hover:bg-surface"
            >
              <a href="#services">Explore Our Services</a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            Technology solutions built for ambitious businesses.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[540px]"
        >
          <div
            className="animate-pulse-glow absolute inset-8 rounded-full opacity-60 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
            aria-hidden
          />
          <img
            src={heroGlobe}
            alt="Illustration of a glowing digital globe connected by a worldwide technology network"
            width={1024}
            height={1024}
            className="animate-float relative w-full drop-shadow-2xl"
          />
          {ORBIT_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`glass-panel absolute flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold ${item.className}`}
            >
              <item.icon className="size-4 text-cyan" aria-hidden />
              {item.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
