import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#050505]"
        >
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative h-20 w-20">
              <div className="absolute inset-0 animate-spin-slow rounded-full border border-white/10" />
              <div className="absolute inset-2 rounded-full border border-transparent border-t-[#8A5CFF] border-r-[#00E5FF]" style={{ animation: "spin-slow 1.4s linear infinite" }} />
              <div className="absolute inset-0 grid place-items-center text-sm font-semibold tracking-widest text-aurora">PP</div>
            </div>
            <motion.div
              className="h-px w-40 overflow-hidden bg-white/10"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent"
              />
            </motion.div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">Crafting experience</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}