import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub?: string }) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/70"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="text-balance text-4xl font-semibold leading-[1.05] text-gradient md:text-6xl"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-5 max-w-2xl text-base text-white/60 md:text-lg"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}