import { motion } from "motion/react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Briefcase,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MessageCircle,
  MapPin,
  Quote,
  Send,
  Server,
  Sparkles,
  Star,
  Trophy,
  Workflow,
  Zap,
  Plus,
  Bot,
} from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "./MagneticButton";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import { Particles } from "./Particles";
import photo1Asset from "@/assets/photo1.png";
import photo2Asset from "@/assets/photo2.png";
import aboutPicAsset from "@/assets/about-pic.png";
import projInventory from "@/assets/project-inventory.jpg";
import projEmployee from "@/assets/project-employee.jpg";

/* ------------------------------------------------------------------ */
/* SHARED CONTACT INFO                                                 */
/* ------------------------------------------------------------------ */

export const CONTACT = {
  email: "priyankapika0312@gmail.com",
  phone: "+91 8960589060",
  whatsapp: "918960589060", // E.164 without + for wa.me
  github: "https://github.com/Priyanka12377",
  linkedin: "https://linkedin.com/in/priyanka-pal-67854a374",
};

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

function HeroPhotoSlider() {
  const [idx, setIdx] = useState(0);
  const photos = [photo1Asset, photo2Asset];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-full">
      <motion.img
        key={idx}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        src={photos[idx]}
        alt="Priyanka Pal — Java Full Stack Developer"
        className="h-full w-full object-cover cursor-pointer"
        onClick={() => setIdx((idx + 1) % photos.length)}
      />
      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {photos.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-[#00E5FF]" : "w-1.5 bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const roles = ["Java Full Stack Developer", "DSA Enthusiast", "Spring Boot · Node.js"];
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center pt-32">
      <Particles count={50} />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/70"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </motion.div>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-[5.4rem]">
            <Reveal delay={0}><span className="text-white/85">Hi, I'm </span></Reveal>
            <Reveal delay={0.05}><span className="text-aurora">Priyanka</span></Reveal>
            <Reveal delay={0.1}><span className="font-serif italic font-light text-white/90"> Pal.</span></Reveal>
          </h1>

          <div className="mt-6 flex flex-wrap gap-3">
            {roles.map((r, i) => (
              <motion.span
                key={r}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
                className="glass rounded-full px-3.5 py-1.5 text-xs text-white/80 md:text-sm"
              >
                {r}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/60 md:text-lg"
          >
            I build scalable websites with{" "}
            <span className="text-white/85">Java, Spring Boot, SQL, MongoDB</span> and ship
            production-grade software. Currently shipping{" "}
            <span className="text-white/85">CareerAI</span> and exploring AI tooling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#projects" variant="primary">
              View Projects <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" variant="outline">
              <MessageCircle className="h-4 w-4" /> WhatsApp Me
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Contact Me →
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex items-center gap-6 text-xs text-white/40"
          >
            <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Sultanpur, India</span>
            <span className="h-3 w-px bg-white/15" />
            <span>100+ LeetCode · CGPA 8.11 · B.Tech CSE</span>
          </motion.div>
        </div>

        {/* Right visual — stylish profile composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <ProfileShowcase />
        </motion.div>
      </div>
      <div className="mt-14 text-center">
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full glass-strong border border-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#00E5FF]/50 hover:bg-[#00E5FF]/10 hover:text-[#00E5FF]"
        >
          <Sparkles className="h-4 w-4 text-[#00E5FF]" />
          <span>You can see all my verified certs on LinkedIn — check the receipts right here ↗</span>
        </a>
      </div>
    </section>
  );
}

/* Stylish photo composition: rotating aurora ring + glass plate + orbiting chips */
function ProfileShowcase() {
  return (
    <div className="relative aspect-square w-full">
      {/* outer rotating conic ring */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full opacity-80 blur-[2px]"
        style={{
          background:
            "conic-gradient(from 0deg, #8A5CFF, #00E5FF, #FFB36B, #FF4D9E, #8A5CFF)",
          mask: "radial-gradient(circle, transparent 58%, #000 60%, #000 64%, transparent 66%)",
          WebkitMask:
            "radial-gradient(circle, transparent 58%, #000 60%, #000 64%, transparent 66%)",
        }}
      />
      {/* aurora glow behind */}
      <div
        aria-hidden
        className="absolute inset-6 -z-10 rounded-full opacity-60 blur-3xl"
        style={{ background: "conic-gradient(from 0deg, #8A5CFF, #00E5FF, #FFB36B, #FF4D9E, #8A5CFF)" }}
      />
      {/* glass plate + photo */}
      <TiltCard intensity={7} className="absolute inset-[8%]">
        <div className="relative h-full w-full overflow-hidden rounded-full glass-strong p-1">
          <HeroPhotoSlider />
        </div>
      </TiltCard>

      {/* orbiting tech chips */}
      <FloatingChip className="-top-2 left-2" delay={0}>
        <Code2 className="h-3.5 w-3.5 text-[#8A5CFF]" /> Java
      </FloatingChip>
      <FloatingChip className="top-8 -right-4" delay={0.3}>
        <Server className="h-3.5 w-3.5 text-[#00E5FF]" /> Spring Boot
      </FloatingChip>
      <FloatingChip className="bottom-12 -left-6" delay={0.6}>
        <Database className="h-3.5 w-3.5 text-[#FFB36B]" /> MongoDB
      </FloatingChip>
      <FloatingChip className="-bottom-2 right-6" delay={0.9}>
        <Sparkles className="h-3.5 w-3.5 text-[#FF4D9E]" /> React
      </FloatingChip>

      {/* status pill anchored bottom */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full glass-strong px-4 py-2 text-[11px] text-white/85"
      >
        <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 align-middle" />
        Open to Backend / Full-Stack roles
      </motion.div>
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function FloatingChip({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + delay, duration: 0.7 }}
      className={`absolute z-10 ${className}`}
    >
      <div className="glass animate-float flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium text-white/85">
        {children}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* ABOUT                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "100+", label: "LeetCode Solved" },
  { value: "10+", label: "REST APIs Built" },
  { value: "8.11", label: "B.Tech CGPA" },
  { value: "25–30", label: "HAL CV" },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <SectionHeading
        eyebrow="About"
        title={<>Final year engineer shipping <span className="text-aurora">production-grade</span> software.</>}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <TiltCard intensity={5}>
            <div className="relative overflow-hidden rounded-3xl glass-strong">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={aboutPicAsset}
                  alt="Priyanka Pal"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl glass px-4 py-3 text-xs text-white/80">
                <span>Priyanka Pal</span>
                <span className="text-white/50">Java · Spring Boot</span>
              </div>
            </div>
          </TiltCard>
          <div
            className="absolute -inset-4 -z-10 rounded-[2rem] opacity-50 blur-3xl"
            style={{ background: "conic-gradient(from 0deg, #8A5CFF, #00E5FF, #FF4D9E, #8A5CFF)" }}
          />
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-lg leading-relaxed text-white/75 md:text-xl"
          >
            I'm a <strong className="text-white">B.Tech CSE final-year student</strong> at KNIPSS Sultanpur (AKTU),
            having completed my final year and currently training as a Java Full Stack Developer at <strong className="text-white">JSpiders</strong>.
            I build scalable websites with <strong className="text-white">Java, Spring Boot, SQL</strong> and{" "}
            <strong className="text-white">MongoDB</strong>. I shipped <strong className="text-white">CareerAI</strong>{" "}
            — a production full-stack AI platform integrating OpenAI GPT-4o-mini and Gemini 2.0 Flash —
            and gained hands-on practical industrial learning at <strong className="text-white">HAL</strong> defense aerospace workflows. I love clean, secure, optimised enterprise code and 100+ LeetCode keeps my DSA sharp.
          </motion.p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              { icon: GraduationCap, t: "B.Tech CSE · AKTU · CGPA 8.11" },
              { icon: Code2, t: "Java + Spring Boot Full Stack" },
              { icon: Server, t: "Spring Boot · REST · JWT" },
              { icon: Sparkles, t: "100+ LeetCode · DSA enthusiast" },
            ].map(({ icon: Icon, t }, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/80"
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-[#8A5CFF]/30 to-[#00E5FF]/20 text-[#00E5FF]">
                  <Icon className="h-4 w-4" />
                </span>
                {t}
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="glass rounded-2xl p-5 text-center"
              >
                <div className="text-3xl font-semibold text-aurora md:text-4xl">{s.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-white/55">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* TECH STACK                                                          */
/* ------------------------------------------------------------------ */

const stack = [
  "Java", "Spring Boot", "Spring Security", "Servlets",
  "REST API", "JWT", "bcryptjs", "MongoDB", "Mongoose", "MySQL", "SQL",
  "HTML5", "CSS", "JavaScript",
  "DSA", "Git", "GitHub", "Postman", "VS Code",
];

const learning = new Set(["Spring Security"]);

export function TechStack() {
  return (
    <section id="stack" className="relative py-32">
      <SectionHeading
        eyebrow="Tech Stack"
        title={<>Tools I use to ship <span className="text-aurora">real software.</span></>}
        sub="Languages, frameworks and platforms I rely on for production-ready full-stack work."
      />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {stack.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
          >
            <TiltCard intensity={10}>
              <div className="group relative overflow-hidden rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(200px circle at var(--mx,50%) var(--my,50%), rgba(138,92,255,0.18), transparent 60%)",
                  }}
                />
                <div className="flex items-start justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#8A5CFF]/30 to-[#00E5FF]/20 text-white">
                    <Code2 className="h-5 w-5" />
                  </div>
                  {learning.has(s) && (
                    <span className="rounded-full bg-[#FF4D9E]/15 px-2 py-0.5 text-[9px] uppercase tracking-widest text-[#ff8ec0]">
                      Learning
                    </span>
                  )}
                </div>
                <div className="mt-4 text-sm font-medium text-white/90">{s}</div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* EXPERIENCE TIMELINE                                                 */
/* ------------------------------------------------------------------ */

const timeline = [
  {
    icon: Briefcase,
    org: "JSpiders — Training & Development Center",
    role: "Java Full-Stack Developer (Trainee)",
    period: "2025 — Present",
    desc: "Learning real working industry standards and practical developer workflows. Hands-on training in enterprise Java, Spring Boot microservices, database architecture, and Agile collaboration. During this training, actively working on an AI Agent for their websites.",
  },
  {
    icon: Zap,
    org: "AI Full Stack & Backend Freelancing",
    role: "Independent Freelance Engineer",
    period: "2025 — Present",
    desc: "Delivering fast, high-quality full-stack and backend solutions for clients leveraging cutting-edge AI coding workflows. Specialized in rapid prototyping, enterprise Spring Boot APIs, and AI integrations. Open for both Online and Offline opportunities globally.",
  },
  {
    icon: Layers,
    org: "HAL — Hindustan Aeronautics Limited",
    role: "Internship Trainee",
    period: "2025",
    desc: "Worked on practical internship assignments and gained valuable hands-on exposure to enterprise engineering environments, defense aerospace systems workflows, and structured problem solving.",
  },
  {
    icon: Workflow,
    org: "B.Tech — Computer Science & Engineering",
    role: "KNIPSS Sultanpur · AKTU · CGPA 8.11",
    period: "2022 — 2026 (Completed Final Year)",
    desc: "DSA, DBMS, OOP, Operating Systems, Computer Networks, Web Development.  LeetCode problems solved across Arrays, Trees, DP, Graphs and Recursion.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <SectionHeading
        eyebrow="Experience"
        title={<>A trajectory built on <span className="text-aurora">craft.</span></>}
      />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#8A5CFF]/0 via-[#8A5CFF]/40 to-[#00E5FF]/0 md:left-1/2" />
        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={item.org}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className={`relative grid grid-cols-[56px_1fr] items-start gap-6 md:grid-cols-2 md:gap-12 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className={`md:${i % 2 === 0 ? "text-right" : "text-left"}`}>
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl glass-strong">
                  <item.icon className="h-6 w-6 text-[#00E5FF]" />
                  <span className="absolute inset-0 -z-10 rounded-2xl blur-xl opacity-50" style={{ background: "radial-gradient(circle, #8A5CFF, transparent 70%)" }} />
                </div>
              </div>
              <div className={`glass rounded-2xl p-6 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="text-xs uppercase tracking-[0.18em] text-[#00E5FF]">{item.period}</div>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.org}</h3>
                <div className="text-sm text-white/55">{item.role}</div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PROJECTS                                                            */
/* ------------------------------------------------------------------ */

const projects = [
  {
    n: "01",
    title: "CareerAI — Full-Stack AI Career Platform",
    desc: "Production-grade career acceleration platform featuring AI Resume Analyzer, Live Job Search, GitHub Profile Analyzer and AI Career Coach. Engineered a resilient Triple AI Fallback pipeline (OpenAI → Gemini → Smart Mock) ensuring 100% uptime. JWT + bcryptjs secure auth with MongoDB persistence.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI GPT-4o", "Gemini Flash", "JWT"],
    image: projEmployee,
    href: "https://github.com/Priyanka12377",
    live: "https://github.com/Priyanka12377",
  },
  {
    n: "02",
    title: "The Eden Cafe — Premium Cafe Experience",
    desc: "Sleek, responsive modern web application designed for a luxury cafe experience. Features smooth interactive menus, dynamic responsive UI layouts, and fast asset delivery. Optimized for both mobile and desktop screens.",
    tech: ["HTML5", "CSS", "JavaScript", "Responsive UI", "Netlify"],
    image: projInventory,
    href: "https://github.com/Priyanka12377",
    live: "https://theedencafe.netlify.app/",
  },
  {
    n: "03",
    title: "AI Agent — Autonomous Web Assistant",
    desc: "Intelligent autonomous web agent engineered to assist users in real-time. Capable of contextual reasoning, interactive task execution, and dynamic website interaction. Actively developed during industrial training.",
    tech: ["Java", "Spring Boot", "AI Prompting", "REST API", "LLM Integration"],
    image: projInventory,
    href: "https://github.com/Priyanka12377",
    live: "https://github.com/Priyanka12377",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <SectionHeading
        eyebrow="Featured Projects"
        title={<>Selected <span className="text-aurora">work.</span></>}
        sub="Production projects spanning full-stack AI, backend APIs and real-time computer vision."
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
            className="group relative overflow-hidden rounded-3xl glass flex flex-col justify-between"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1280}
                height={800}
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
              <div className="absolute left-5 top-4 font-serif text-2xl italic text-white/80">{p.n}</div>
              <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <a href={p.href} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full glass-strong text-white hover:text-[#00E5FF] shadow-lg" aria-label="GitHub Repo">
                  <Github className="h-4 w-4" />
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-[#00E5FF] text-black hover:scale-105 transition-transform shadow-lg" aria-label="Live Demo">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white md:text-2xl">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4 text-xs font-medium border-t border-white/10 pt-4">
                <a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-white/75 hover:text-[#00E5FF] transition-colors">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[#00E5FF] hover:underline ml-auto">
                    Live Demo <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SERVICES                                                            */
/* ------------------------------------------------------------------ */

const services = [
  { icon: Server, title: "Backend Development", desc: "Robust APIs and microservices engineered for high performance, fault tolerance, and clean modular architecture.", brief: "Backend engineering involves building the core logic, authentication gates, data processing pipelines, and server infrastructure that powers modern software. I specialize in Java & Spring Boot backend systems optimized for low latency and high scalability." },
  { icon: Workflow, title: "REST APIs", desc: "Secure, versioned, well-documented RESTful APIs with clean JSON contracts and robust exception handling.", brief: "REST APIs serve as the reliable communication bridge between frontend client interfaces and database servers. I design stateless, scalable endpoints implementing proper HTTP status codes, pagination, filtering, and JWT authorization headers." },
  { icon: Layers, title: "Full Stack Web Apps", desc: "End-to-end web applications bridging seamless database persistence with responsive modern React frontends.", brief: "Full stack development connects clean user interfaces with solid server foundations. I build snappy React frontends wired seamlessly to Spring Boot backend APIs, ensuring fluid state management and smooth UX transitions." },
  { icon: Database, title: "Database Architecture", desc: "Efficient schema design, query optimization, indexing and relational modeling for SQL and NoSQL databases.", brief: "Data architecture dictates system speed and data integrity. I structure normalized MySQL/SQL schemas with strict foreign key constraints and design high-throughput document structures in MongoDB using Mongoose." },
  { icon: Code2, title: "Enterprise Java", desc: "Idiomatic core Java, advanced multithreading, OOP design patterns and JVM-optimized software engineering.", brief: "Java remains the gold standard for enterprise grade backend systems. I write strict object-oriented code leveraging Java Collections, Streams API, concurrency utilities, and solid memory management principles." },
  { icon: Bot, title: "AI Agent Integration", desc: "Intelligent autonomous web assistants and LLM tooling integrated directly into modern web applications.", brief: "AI agents transform static web pages into interactive, context-aware platforms. I build custom prompt engineering pipelines and wire autonomous LLM endpoints to help web visitors navigate and solve tasks dynamically." },
];

export function Services() {
  const [activeTopic, setActiveTopic] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="relative py-32">
      <SectionHeading
        eyebrow="Services"
        title={<>What I can <span className="text-aurora">build for you.</span></>}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            className="group relative overflow-hidden rounded-3xl glass p-7"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
              style={{ background: "radial-gradient(circle, #8A5CFF, transparent 70%)" }}
            />
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#8A5CFF]/30 to-[#00E5FF]/20 text-[#00E5FF]">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">{s.desc}</p>
            <button
              type="button"
              onClick={() => setActiveTopic(s)}
              className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-[#00E5FF]/80 hover:text-[#00E5FF] transition-colors cursor-pointer"
            >
              Learn more <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal for Learn More Topic Details */}
      {activeTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg glass-strong rounded-3xl p-8 border border-[#00E5FF]/30 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveTopic(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white text-sm bg-white/10 rounded-full h-8 w-8 flex items-center justify-center"
            >
              ✕
            </button>
            <div className="text-xs uppercase tracking-widest text-[#00E5FF] mb-2">Service Brief</div>
            <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <activeTopic.icon className="h-6 w-6 text-[#8A5CFF]" /> {activeTopic.title}
            </h4>
            <p className="text-base text-white/80 leading-relaxed">{activeTopic.brief}</p>
          </div>
        </div>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* ACHIEVEMENTS                                                        */
/* ------------------------------------------------------------------ */

const achievements = [
  { icon: Trophy, t: "1st Place — Badminton", d: "Intra-College Sports Tournament 2023–24." },
  { icon: Code2, t:  "LeetCode Solved", d: "Arrays, Strings, Trees, DP & Graphs." },
  { icon: Server, t: "CareerAI Shipped", d: "Production AI platform · 100% uptime." },
  { icon: GraduationCap, t: "CGPA 8.11 / 10", d: "B.Tech CSE · AKTU 2022–26." },
];

export function Achievements() {
  return (
    <section className="relative py-32">
      <SectionHeading eyebrow="Achievements" title={<>Milestones that <span className="text-aurora">shape me.</span></>} />
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 sm:grid-cols-4">
        {achievements.map((a, i) => (
          <motion.div
            key={a.t}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className="glass rounded-2xl p-5"
          >
            <a.icon className="h-5 w-5 text-[#00E5FF]" />
            <div className="mt-3 text-sm font-semibold text-white">{a.t}</div>
            <div className="mt-1 text-xs text-white/55">{a.d}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CERTIFICATES                                                        */
/* ------------------------------------------------------------------ */

const certs = [
  { t: "Python for Data Science", org: "IBM · Coursera", color: "from-[#8A5CFF] to-[#00E5FF]" },
  { t: "Java Full Stack Developer", org: "JSpiders Training", color: "from-[#00E5FF] to-[#FF4D9E]" },
  { t: "Defense Training Exposure", org: "HAL Aerospace", color: "from-[#FF4D9E] to-[#8A5CFF]" },
  { t: "DSA Problem Solving", org: "LeetCode Platform", color: "from-[#8A5CFF] to-[#FFB36B]" },
  { t: "Spring Boot Backend Systems", org: "Backend Specialization", color: "from-[#00E5FF] to-[#8A5CFF]" },
  { t: "Add Certificate in Future", org: "Pending Recognition", color: "from-[#FF4D9E] to-[#00E5FF]", isFuture: true },
];

export function Certificates() {
  return (
    <section className="relative py-32">
      <SectionHeading eyebrow="Certificates" title={<>Recognised <span className="text-aurora">credentials.</span></>} sub="Verified certificates from industry platforms. You can view all official certs directly on my LinkedIn profile." />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.div
            key={c.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
          >
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-3xl glass min-h-[200px] flex flex-col justify-between p-7 hover:border-[#00E5FF]/40 transition-all block cursor-pointer"
            >
              <div className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${c.color} opacity-25 transition-opacity duration-500 group-hover:opacity-50`} />
              <div className="flex justify-between items-start">
                <div className="text-xs uppercase tracking-[0.18em] text-white/60">{c.org}</div>
                <div className="grid h-10 w-10 place-items-center rounded-full glass-strong group-hover:bg-[#00E5FF] group-hover:text-black transition-colors text-white">
                  {c.isFuture ? (
                    <Plus className="h-5 w-5 animate-pulse" />
                  ) : (
                    <ExternalLink className="h-4 w-4" />
                  )}
                </div>
              </div>
              <div className="mt-6 text-xl font-semibold text-white tracking-tight">{c.t}</div>
              <div className="mt-4 flex items-center gap-1.5 text-[11px] font-medium text-[#00E5FF]/80 group-hover:text-[#00E5FF]">
                <span>View certificate on LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* TESTIMONIALS                                                        */
/* ------------------------------------------------------------------ */

const quotes = [
  {
    q: "Priyanka writes clean, well-structured Spring Boot code and ships features with surprising maturity for a final-year engineer.",
    n: "Project Mentor",
    r: "JSpiders Training",
  },
  {
    q: "Owned the CV pipeline end-to-end — from model integration to deployment on our intranet. Reliable engineer, calm under pressure.",
    n: "Internship Lead",
    r: "HAL Defense Manufacturing",
  },
  {
    q: "Attention to detail in API contracts and database design made the entire CareerAI backend feel professional and predictable.",
    n: "Peer Reviewer",
    r: "CareerAI · Open Source",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = quotes[i];
  return (
    <section className="relative py-32">
      <SectionHeading eyebrow="Testimonials" title={<>Kind <span className="text-aurora">words.</span></>} />
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl glass-strong p-10"
        >
          <Quote className="absolute right-8 top-8 h-16 w-16 text-white/[0.06]" />
          <p className="text-xl leading-relaxed text-white/85 md:text-2xl">"{t.q}"</p>
          <div className="mt-8 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-white">{t.n}</div>
              <div className="text-xs text-white/55">{t.r}</div>
            </div>
            <div className="flex gap-1.5">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Show testimonial ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-to-r from-[#8A5CFF] to-[#00E5FF]" : "w-1.5 bg-white/20"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CONTACT                                                             */
/* ------------------------------------------------------------------ */

const SUBJECTS = ["Backend Role", "Project Collab", "Coffee Chat"] as const;
type Subject = (typeof SUBJECTS)[number];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState<Subject>("Backend Role");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const n = name.trim();
    const em = email.trim();
    const msg = message.trim();
    if (!n || n.length > 100) return setError("Please enter your name (max 100 chars).");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em) || em.length > 200) return setError("Please enter a valid email.");
    if (!msg || msg.length > 1000) return setError("Message is required (max 1000 chars).");

    const text =
      `Hi Priyanka! 👋\n\n` +
      `Name: ${n}\n` +
      `Email: ${em}\n` +
      `Subject: ${subject}\n\n` +
      `${msg}`;
    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative py-32">
      <SectionHeading
        eyebrow="Contact"
        title={<>Let's build something <span className="text-aurora">remarkable.</span></>}
        sub="Backend role, project collab or just a coffee chat — your message lands straight in my WhatsApp."
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          <div className="glass rounded-3xl p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-white/55">Email</div>
            <a href={`mailto:${CONTACT.email}`} className="mt-2 block break-all text-lg text-white hover:text-[#00E5FF]">
              {CONTACT.email}
            </a>
          </div>
          <div className="glass rounded-3xl p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-white/55">WhatsApp</div>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="mt-2 block text-lg text-white hover:text-[#00E5FF]">
              {CONTACT.phone}
            </a>
          </div>
          <div className="glass rounded-3xl p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-white/55">Based in</div>
            <div className="mt-2 text-lg text-white">Sultanpur, India · Open to remote</div>
          </div>
          <div className="glass rounded-3xl p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-white/55">Follow</div>
            <div className="mt-3 flex gap-2">
              {[
                { Icon: Github, label: "GitHub", href: CONTACT.github },
                { Icon: Linkedin, label: "LinkedIn", href: CONTACT.linkedin },
                { Icon: Mail, label: "Email", href: `mailto:${CONTACT.email}` },
                { Icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${CONTACT.whatsapp}` },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full glass-strong transition-all hover:-translate-y-0.5 hover:text-[#00E5FF]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass-strong relative overflow-hidden rounded-3xl p-7">
          <div className="absolute inset-0 -z-10 opacity-50" style={{
            background: "radial-gradient(600px circle at 20% 0%, rgba(138,92,255,0.15), transparent 50%)",
          }} />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" id="name" placeholder="Your name" value={name} onChange={setName} maxLength={100} />
            <Field label="Email" id="email" type="email" placeholder="you@company.com" value={email} onChange={setEmail} maxLength={200} />
          </div>

          <div className="mt-5">
            <span className="text-[11px] uppercase tracking-[0.18em] text-white/55">Subject</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {SUBJECTS.map((s) => {
                const active = subject === s;
                return (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setSubject(s)}
                    className={`rounded-full px-3.5 py-1.5 text-xs transition-all ${
                      active
                        ? "bg-gradient-to-r from-[#8A5CFF] to-[#00E5FF] text-white shadow-[0_4px_24px_-8px_rgba(138,92,255,0.7)]"
                        : "glass text-white/70 hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          <Field
            label="Message"
            id="message"
            textarea
            placeholder="Tell me about your role, project or just say hi…"
            value={message}
            onChange={setMessage}
            maxLength={1000}
          />

          {error && (
            <p className="mt-3 text-xs text-[#ff8ec0]">{error}</p>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-white/40">Opens WhatsApp with your message pre-filled.</p>
            <MagneticButton variant="primary">
              Send via WhatsApp <Send className="h-4 w-4" />
            </MagneticButton>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label, id, placeholder, type = "text", textarea, value, onChange, maxLength,
}: {
  label: string;
  id: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  value?: string;
  onChange?: (v: string) => void;
  maxLength?: number;
}) {
  const cls =
    "peer mt-2 block w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-[#00E5FF]/60 focus:bg-white/[0.06]";
  return (
    <label htmlFor={id} className={textarea ? "mt-5 block" : "block"}>
      <span className="text-[11px] uppercase tracking-[0.18em] text-white/55">{label}</span>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          placeholder={placeholder}
          className={cls}
          value={value}
          maxLength={maxLength}
          onChange={(e) => onChange?.(e.target.value)}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={cls}
          value={value}
          maxLength={maxLength}
          onChange={(e) => onChange?.(e.target.value)}
        />
      )}
    </label>
  );
}

/* ------------------------------------------------------------------ */
/* FOOTER                                                              */
/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 md:flex-row">
        <div className="text-xs text-white/45">© {new Date().getFullYear()} Priyanka Pal. Crafted with care.</div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/45">
          <a href={CONTACT.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href={`mailto:${CONTACT.email}`} className="hover:text-white">Email</a>
          <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-white">
            Back to top <ArrowDownToLine className="h-3 w-3 rotate-180" />
          </a>
        </div>
      </div>
    </footer>
  );
}
