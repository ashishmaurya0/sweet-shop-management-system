import { useRef, useState } from "react";
import {
  ArrowRight,
  Bot,
  ChevronDown,
  LayoutDashboard,
  Menu,
  Search,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import dashboardImage from "@/assets/hero-dashboard.png";
import logoImage from "@/assets/logo.png";
import quoteSymbol from "@/assets/quote-symbol.png";
import avatarImage from "@/assets/testimonial-avatar.png";
import { Button } from "@/components/ui/button";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

const services = [
  {
    icon: LayoutDashboard,
    title: "Web Development",
    text: "Fast, responsive, SEO-ready websites and web apps built to convert visitors into customers.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    text: "Invoice, follow-up, scheduling, reporting, and data-entry workflows that run without manual chasing.",
  },
  {
    icon: Bot,
    title: "AI Integrations",
    text: "Chatbots, lead qualification, content workflows, and GPT-powered internal tools for busy teams.",
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    text: "Local SEO, paid campaigns, analytics, and conversion systems tuned for measurable SMB growth.",
  },
  {
    icon: ShieldCheck,
    title: "CRM & Support",
    text: "Cleaner pipelines, reliable reminders, unified customer records, and post-launch technology support.",
  },
];

const stats = [
  ["15+", "Years empowering SMBs"],
  ["200+", "Businesses transformed"],
  ["20+", "Hours saved per week"],
  ["24/7", "Automation uptime"],
];

// Keep as a plain string; we will animate word-by-word without creating extra wrapping/newlines.
const testimonial =
  "Shivanaya transformed our scattered tools into one smart operating system. Leads, reports, reminders, and dashboards now update automatically, helping our team move faster with far less manual work.";

const navLinks = ["Home", "Services", "Reviews", "Contact us"];

type RevealWordProps = {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
};

function RevealWord({ word, index, total, progress }: RevealWordProps) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const color = useTransform(
    progress,
    [start, end],
    ["hsl(0 0% 35%)", "hsl(0 0% 100%)"],
  );

  return (
    <motion.span className="mr-[0.3em]" style={{ opacity, color }}>
      {word}
    </motion.span>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-40 px-4 py-4 sm:px-6 md:px-28">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-8 md:gap-20">
        <a className="flex items-center gap-3" href="#home" aria-label="Embtel home">
          <img src={logoImage} alt="" className="h-9 w-9 rounded-lg" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Shivanya
          </span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => (
            <a
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-foreground/5 hover:text-foreground"
              key={item}
            >
              {item}
              {item === "Services" ? <ChevronDown className="h-4 w-4" /> : null}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button
          className="hidden border-white/20 bg-white/[0.06] text-foreground hover:bg-white/[0.12] md:inline-flex"
          variant="outline"
        >
          Contact
        </Button>
        <Button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="border-white/20 bg-white/[0.06] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          size="icon"
          variant="outline"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      </div>
      {menuOpen ? (
        <motion.div
          className="absolute left-4 right-4 top-[calc(100%+.5rem)] z-50 rounded-lg border border-white/15 bg-black/95 p-3 shadow-2xl shadow-black/40 backdrop-blur md:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((item) => (
            <a
              className="block rounded-lg px-4 py-3 text-base font-medium text-foreground/90 transition hover:bg-white/[0.08]"
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              key={item}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            className="mt-2 flex h-11 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-semibold text-background"
            href="#contact-us"
            onClick={() => setMenuOpen(false)}
          >
            Get Free Audit
          </a>
        </motion.div>
      ) : null}
    </nav>
  );
}

function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[760px] overflow-hidden bg-background sm:min-h-[820px] lg:min-h-[100svh]"
    >
      <Navbar />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_75%)]" />
      <motion.div
        className="relative z-10 mx-auto mt-10 flex max-w-5xl flex-col items-center px-4 text-center sm:mt-14 md:mt-20"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.div
          className="liquid-glass mb-6 flex flex-wrap items-center justify-center gap-2 rounded-lg px-3 py-2 sm:gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="rounded-md bg-foreground px-2 py-0.5 text-sm font-medium text-background">
            New
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            Say hello to smarter SMB automation
          </span>
        </motion.div>
        <motion.h1
          className="mb-3 text-[clamp(2.75rem,12vw,4.5rem)] font-medium leading-[1.05] tracking-[-1px] text-foreground md:text-7xl md:leading-[1.15] md:tracking-[-2px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Your Business. <br />
          One Clear{" "}
          <span className="font-serif italic font-normal">Overview.</span>
        </motion.h1>
        <motion.p
          className="mb-8 max-w-2xl text-base font-normal leading-6 text-hero-subtitle opacity-90 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Shivanya helps teams connect websites, marketing, workflows, and goals,
          <br className="hidden sm:block" /> with automation built for real SMB operations.
        </motion.p>
        <motion.div
          className="flex w-full justify-center px-4 sm:w-auto sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="w-full max-w-xs sm:w-auto" size="lg">
            Get Your Free Audit <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 aspect-video w-screen -translate-x-1/2 overflow-hidden sm:bottom-[-10vw] md:bottom-[-16vw] lg:bottom-[-14vw]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          autoPlay
          muted
          playsInline
          loop
          src={VIDEO_URL}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(26,107,255,.35),transparent_35%),linear-gradient(180deg,transparent,black_88%)]" />
        <motion.img
          src={dashboardImage}
          alt=" automation dashboard preview"
          className="absolute left-1/2 top-[8%] w-[96%] max-w-5xl -translate-x-1/2 rounded-2xl border border-white/15 shadow-2xl shadow-embtel-blue/20 sm:w-[92%] md:top-[12%] md:w-[90%]"
          style={{ y: dashboardY, mixBlendMode: "luminosity" }}
        />
      </motion.div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-y border-border bg-card/40 px-4 py-16 sm:px-6 sm:py-20 md:px-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-embtel-teal">
            What We Do
          </p>
          <h2 className="text-3xl font-semibold tracking-[-1px] text-foreground sm:text-4xl md:text-5xl">
            Technology services that grow with you.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            From your first website to fully automated dashboards, Shivanya brings
            web, marketing, CRM, AI, and support into one practical system.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {stats.map(([value, label]) => (
              <div className="rounded-lg border border-border bg-background p-4" key={label}>
                <div className="text-2xl font-bold text-foreground">{value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                className="rounded-lg border border-border bg-background p-5"
                key={service.title}
                whileHover={{ y: -4, borderColor: "rgba(255,255,255,.35)" }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-foreground text-background">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {service.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  const containerRef = useRef<HTMLElement>(null);
  const words = testimonial.split(" ");
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  return (
    <section
      ref={containerRef}
      id="reviews"
      className="flex min-h-[720px] items-center px-4 py-20 sm:px-6 sm:py-24 md:min-h-screen md:px-28 md:py-32"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-8 sm:gap-10">
        <img src={quoteSymbol} alt="" className="h-10 w-14 object-contain" />
        <p className="flex flex-wrap text-3xl font-medium leading-[1.2] text-foreground sm:text-4xl md:text-5xl">
          {words.map((word, index) => {
            return (
              <RevealWord
                index={index}
                key={`${word}-${index}`}
                progress={scrollYProgress}
                total={words.length}
                word={word}
              />
            );
          })}
          <span className="ml-2 text-muted-foreground">"</span>
        </p>
        <div className="flex items-center gap-4">
          <img
            src={avatarImage}
            alt="Brooklyn Simmons"
            className="h-14 w-14 rounded-full border-[3px] border-foreground object-cover"
          />
          <div>
            <div className="text-base font-semibold leading-7 text-foreground">
              Brooklyn Simmons
            </div>
            <div className="text-sm font-normal leading-5 text-muted-foreground">
              Operations Manager
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact-us" className="px-4 pb-20 sm:px-6 sm:pb-24 md:px-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center border-t border-border pt-16 text-center sm:pt-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-embtel-blue">
          Ready to automate?
        </p>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-1px] text-foreground sm:text-4xl md:text-6xl">
          Put your business on{" "}
          <span className="font-serif italic font-normal">autopilot.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          Get a practical audit of the workflows, dashboards, and marketing
          systems that can save your team time this month.
        </p>
        <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Button className="w-full sm:w-auto" size="lg">
            Schedule Free Consultation
          </Button>
          <Button className="w-full sm:w-auto" size="lg" variant="outline">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Services />
      <Testimonial />
      <Contact />
    </main>
  );
}
