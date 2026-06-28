import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500 ${
        scrolled ? "w-[min(900px,92vw)]" : "w-[min(1100px,94vw)]"
      }`}
    >
      <div className="glass flex items-center justify-between rounded-full px-3 py-2 pl-5">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-wide">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[#8A5CFF] to-[#00E5FF] text-[10px] font-bold text-black">PP</span>
          <span className="hidden sm:inline">Priyanka Pal</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-xs uppercase tracking-[0.15em] text-white/65 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-transform hover:scale-[1.03]"
        >
          Let's Talk
        </a>
      </div>
    </motion.nav>
  );
}