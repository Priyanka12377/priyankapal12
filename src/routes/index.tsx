import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import Lenis from "lenis";
import { AuroraBackground } from "@/components/portfolio/AuroraBackground";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Navbar } from "@/components/portfolio/Navbar";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Loader } from "@/components/portfolio/Loader";
import {
  About, Achievements, Certificates, Contact, Experience,
  Footer, Hero, Projects, Services, TechStack, Testimonials,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyanka Pal — Java Full Stack Developer" },
      { name: "description", content: "Java Full Stack Developer, Backend Engineer and Spring Boot specialist. Building scalable backend systems and enterprise-grade software with clean architecture." },
      { property: "og:title", content: "Priyanka Pal — Java Full Stack Developer" },
      { property: "og:description", content: "Scalable backend systems, modern web apps and enterprise-grade software." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    // anchor links handled natively via CSS smooth-scroll fallback; intercept for lenis
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id) as HTMLElement | null;
      if (el) { e.preventDefault(); lenis.scrollTo(el, { offset: -40 }); }
    };
    document.addEventListener("click", onClick);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); document.removeEventListener("click", onClick); };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      <Loader />
      <ScrollProgress />
      <CursorGlow />
      <AuroraBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Services />
        <Achievements />
        <Certificates />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
