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
  MapPin,
  Quote,
  Send,
  Server,
  Sparkles,
  Star,
  Trophy,
  Workflow,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "./MagneticButton";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import { Particles } from "./Particles";
import profileAsset from "@/assets/profile.jpeg.asset.json";
const profileImg = profileAsset.url;
import hero3d from "@/assets/hero-3d.jpg";
import projInventory from "@/assets/project-inventory.jpg";
import projChatbot from "@/assets/project-chatbot.jpg";
import projStudent from "@/assets/project-student.jpg";
import projEmployee from "@/assets/project-employee.jpg";
import projPortfolio from "@/assets/project-portfolio.jpg";

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

export function Hero() {
  const roles = ["Java Full Stack Developer", "Backend Engineer", "Spring Boot Specialist"];
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
            <Reveal delay={0.05}><span className="text-aurora">Priyanka Pal.</span></Reveal>
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
            I build scalable backend systems, modern web applications, and
            enterprise-grade software with clean architecture.
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
            <MagneticButton href="#" variant="outline">
              <Download className="h-4 w-4" /> Download Resume
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
            <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> India</span>
            <span className="h-3 w-px bg-white/15" />
            <span>Open to internships & remote roles</span>
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <TiltCard intensity={6} className="relative">
            <div className="relative overflow-hidden rounded-3xl glass-strong">
              <img
                src={hero3d}
                alt="Abstract 3D code visualization"
                width={1280}
                height={1280}
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl glass px-4 py-3">
                <div className="flex items-center gap-2 text-xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-white/80">backend.service</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-white/50">SpringBoot · 200 OK</span>
              </div>
            </div>
            <FloatingChip className="-top-4 -left-4" delay={0}>
              <Code2 className="h-3.5 w-3.5 text-[#8A5CFF]" /> Clean Architecture
            </FloatingChip>
            <FloatingChip className="-right-6 top-1/3" delay={0.4}>
              <Server className="h-3.5 w-3.5 text-[#00E5FF]" /> REST APIs
            </FloatingChip>
            <FloatingChip className="-bottom-3 left-10" delay={0.8}>
              <Database className="h-3.5 w-3.5 text-[#FF4D9E]" /> SQL · JPA
            </FloatingChip>
          </TiltCard>
        </motion.div>
      </div>
    </section>
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
  { value: "15+", label: "Projects Built" },
  { value: "20+", label: "Technologies" },
  { value: "30+", label: "GitHub Repos" },
  { value: "2", label: "Internships" },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <SectionHeading
        eyebrow="About"
        title={<>Final year engineer crafting <span className="text-aurora">production-grade</span> software.</>}
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
              <img
                src={profileImg}
                alt="Portrait of Priyanka Pal"
                width={896}
                height={1152}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl glass px-4 py-3 text-xs text-white/80">
                <span>Priyanka Pal</span>
                <span className="text-white/50">Java · Spring · React</span>
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
            I'm a <strong className="text-white">final-year engineering student</strong> and a
            Java Full Stack Developer specialising in backend API development with
            Spring Boot. I love designing scalable systems with clean architecture,
            and I'm actively exploring <strong className="text-white">AI & Machine Learning</strong> to
            ship the next generation of intelligent products.
          </motion.p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              { icon: GraduationCap, t: "Final-year engineering student" },
              { icon: Code2, t: "Java Full Stack Developer" },
              { icon: Server, t: "Backend & REST API engineer" },
              { icon: Sparkles, t: "Curious about AI & ML" },
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
  "Java", "Spring Boot", "Spring MVC", "Hibernate", "REST API", "MySQL",
  "Oracle SQL", "HTML", "CSS", "JavaScript", "React", "Git", "GitHub",
  "Postman", "Maven", "IntelliJ IDEA", "VS Code", "Docker", "Python", "SQL", "DSA", "Machine Learning",
];

const learning = new Set(["Docker", "Machine Learning"]);

export function TechStack() {
  return (
    <section id="stack" className="relative py-32">
      <SectionHeading
        eyebrow="Tech Stack"
        title={<>Tools I use to ship <span className="text-aurora">real software.</span></>}
        sub="A curated set of languages, frameworks, and platforms I rely on for production-ready full-stack work."
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
    org: "HAL — Hindustan Aeronautics Limited",
    role: "Internship · Software Development",
    period: "2024",
    desc: "Hands-on exposure to enterprise software workflows, version control, and structured development inside a leading aerospace organisation.",
  },
  {
    icon: Layers,
    org: "Java Full Stack Training",
    role: "Spring Boot · REST APIs · React",
    period: "2024",
    desc: "Intensive training covering Java, Spring Boot, Hibernate, REST architecture, MySQL and modern React frontends with project-based learning.",
  },
  {
    icon: Workflow,
    org: "Software Development Training",
    role: "Algorithms · System Design · DSA",
    period: "2023",
    desc: "Strong foundations in data structures, algorithms and design principles — preparation for scalable, maintainable production systems.",
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
    title: "Inventory Demand Prediction System",
    desc: "Machine learning system forecasting inventory demand from historical sales data, helping retailers optimise stock and reduce waste.",
    tech: ["Python", "Machine Learning", "Pandas"],
    image: projInventory,
    span: "lg:col-span-2",
  },
  {
    title: "AI Chatbot",
    desc: "Conversational chatbot with NLP-powered intent recognition built in Python using Tkinter for a fully native desktop experience.",
    tech: ["Python", "Tkinter", "NLP"],
    image: projChatbot,
    span: "",
  },
  {
    title: "Student Management System",
    desc: "End-to-end CRUD application with secure REST APIs, MySQL persistence and role-based dashboards built in Spring Boot.",
    tech: ["Java", "Spring Boot", "MySQL"],
    image: projStudent,
    span: "",
  },
  {
    title: "Employee Management System",
    desc: "Full-stack employee directory with a React frontend consuming a Spring Boot REST API and persisted to a relational database.",
    tech: ["React", "Spring Boot", "REST API"],
    image: projEmployee,
    span: "lg:col-span-2",
  },
  {
    title: "Portfolio Website",
    desc: "This very site — designed and engineered as a premium, motion-driven experience with React and Framer Motion.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image: projPortfolio,
    span: "lg:col-span-3",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <SectionHeading
        eyebrow="Featured Projects"
        title={<>Selected <span className="text-aurora">work.</span></>}
        sub="A glance at recent projects spanning full-stack web, backend APIs and machine learning."
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
            className={`group relative overflow-hidden rounded-3xl glass ${p.span}`}
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
              <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <a href="#" className="grid h-9 w-9 place-items-center rounded-full glass-strong text-white hover:text-[#00E5FF]" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
                <a href="#" className="grid h-9 w-9 place-items-center rounded-full glass-strong text-white hover:text-[#00E5FF]" aria-label="Live demo">
                  <ExternalLink className="h-4 w-4" />
                </a>
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
              <div className="mt-5 flex items-center gap-4 text-xs text-white/60">
                <a href="#" className="inline-flex items-center gap-1 hover:text-[#00E5FF]">
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
                <a href="#" className="inline-flex items-center gap-1 hover:text-[#00E5FF]">
                  <ExternalLink className="h-3.5 w-3.5" /> Live
                </a>
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
  { icon: Server, title: "Backend Development", desc: "Robust APIs and services engineered for performance and maintainability." },
  { icon: Workflow, title: "REST APIs", desc: "Versioned, well-documented APIs with clean contracts and proper error handling." },
  { icon: Layers, title: "Full Stack Applications", desc: "End-to-end web apps from data model to polished React frontends." },
  { icon: Database, title: "Database Design", desc: "Schema design, indexing and migrations for MySQL and Oracle SQL." },
  { icon: Code2, title: "Java Development", desc: "Idiomatic Java, OOP, design patterns and JVM-friendly architecture." },
  { icon: Zap, title: "Spring Boot Systems", desc: "Production-ready Spring Boot apps with security, JPA and best practices." },
];

export function Services() {
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
            <div className="mt-6 inline-flex items-center gap-1 text-xs text-white/45 transition-colors group-hover:text-[#00E5FF]">
              Learn more <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* ACHIEVEMENTS                                                        */
/* ------------------------------------------------------------------ */

const achievements = [
  { icon: Trophy, t: "HAL Internship", d: "Hands-on at a national aerospace org." },
  { icon: GraduationCap, t: "Engineering Student", d: "Final-year, top of cohort projects." },
  { icon: Code2, t: "Java Full Stack Training", d: "Certified backend & frontend track." },
  { icon: Sparkles, t: "Python Projects", d: "ML, NLP and automation tooling." },
  { icon: Github, t: "GitHub Contributions", d: "Consistent open-source activity." },
];

export function Achievements() {
  return (
    <section className="relative py-32">
      <SectionHeading eyebrow="Achievements" title={<>Milestones that <span className="text-aurora">shape me.</span></>} />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-6 md:grid-cols-3 lg:grid-cols-5">
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
  { t: "Java Full Stack Developer", org: "Certified Program", color: "from-[#8A5CFF] to-[#00E5FF]", h: "h-64" },
  { t: "Spring Boot Masterclass", org: "Backend Track", color: "from-[#00E5FF] to-[#FF4D9E]", h: "h-80" },
  { t: "HAL Internship", org: "Hindustan Aeronautics Ltd.", color: "from-[#FF4D9E] to-[#8A5CFF]", h: "h-72" },
  { t: "Python for ML", org: "Machine Learning Foundations", color: "from-[#8A5CFF] to-[#FF4D9E]", h: "h-60" },
  { t: "Data Structures & Algorithms", org: "Software Training", color: "from-[#00E5FF] to-[#8A5CFF]", h: "h-72" },
  { t: "REST API Design", org: "Backend Engineering", color: "from-[#FF4D9E] to-[#00E5FF]", h: "h-64" },
];

export function Certificates() {
  return (
    <section className="relative py-32">
      <SectionHeading eyebrow="Certificates" title={<>Recognised <span className="text-aurora">credentials.</span></>} />
      <div className="mx-auto columns-1 gap-4 px-6 sm:columns-2 lg:columns-3 max-w-6xl">
        {certs.map((c, i) => (
          <motion.div
            key={c.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
            className="mb-4 break-inside-avoid"
          >
            <div className={`group relative overflow-hidden rounded-3xl glass ${c.h} flex flex-col justify-end p-6`}>
              <div className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${c.color} opacity-25 transition-opacity duration-500 group-hover:opacity-50`} />
              <div className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full glass-strong">
                <Star className="h-3.5 w-3.5 text-white" />
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/55">{c.org}</div>
              <div className="mt-1 text-lg font-semibold text-white">{c.t}</div>
            </div>
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
    r: "Java Full Stack Training",
  },
  {
    q: "Sharp problem-solver. Took ownership end-to-end, from API design to React integration, with great communication along the way.",
    n: "Internship Lead",
    r: "HAL Software Team",
  },
  {
    q: "Her attention to detail in database design and API contracts made the entire backend feel professional and predictable.",
    n: "Peer Reviewer",
    r: "Open Source Collab",
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

export function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    setTimeout(() => setState("sent"), 1200);
  };
  return (
    <section id="contact" className="relative py-32">
      <SectionHeading
        eyebrow="Contact"
        title={<>Let's build something <span className="text-aurora">remarkable.</span></>}
        sub="Have a role, project or collaboration in mind? Drop a message — I read everything."
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          <div className="glass rounded-3xl p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-white/55">Email</div>
            <a href="mailto:hello@priyankapal.dev" className="mt-2 block text-lg text-white hover:text-[#00E5FF]">
              hello@priyankapal.dev
            </a>
          </div>
          <div className="glass rounded-3xl p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-white/55">Based in</div>
            <div className="mt-2 text-lg text-white">India · Open to remote</div>
          </div>
          <div className="glass rounded-3xl p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-white/55">Follow</div>
            <div className="mt-3 flex gap-2">
              {[
                { Icon: Github, label: "GitHub", href: "#" },
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
                { Icon: Mail, label: "Email", href: "mailto:hello@priyankapal.dev" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
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
            <Field label="Name" id="name" placeholder="Your name" />
            <Field label="Email" id="email" type="email" placeholder="you@company.com" />
          </div>
          <Field label="Message" id="message" textarea placeholder="Tell me about your project or role…" />
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-white/40">I'll get back within 24 hours.</p>
            <MagneticButton variant="primary" onClick={() => undefined}>
              {state === "sending" ? "Sending…" : state === "sent" ? "Sent ✓" : (<>Send message <Send className="h-4 w-4" /></>)}
            </MagneticButton>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label, id, placeholder, type = "text", textarea,
}: { label: string; id: string; placeholder?: string; type?: string; textarea?: boolean }) {
  const cls =
    "peer mt-2 block w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-[#00E5FF]/60 focus:bg-white/[0.06]";
  return (
    <label htmlFor={id} className={textarea ? "mt-5 block" : "block"}>
      <span className="text-[11px] uppercase tracking-[0.18em] text-white/55">{label}</span>
      {textarea ? (
        <textarea id={id} rows={5} placeholder={placeholder} className={cls} />
      ) : (
        <input id={id} type={type} placeholder={placeholder} className={cls} />
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
        <div className="flex items-center gap-4 text-xs text-white/45">
          <a href="#top" className="inline-flex items-center gap-1 hover:text-white">
            Back to top <ArrowDownToLine className="h-3 w-3 rotate-180" />
          </a>
        </div>
      </div>
    </footer>
  );
}