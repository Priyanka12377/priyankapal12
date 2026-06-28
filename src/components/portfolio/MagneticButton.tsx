import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  onClick?: () => void;
  download?: boolean;
  target?: string;
};

export function MagneticButton({ children, href, variant = "primary", className, onClick, download, target }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 });
  const inner = useTransform([sx, sy], ([vx, vy]) => `translate3d(${(vx as number) * 0.4}px, ${(vy as number) * 0.4}px, 0)`);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - (r.left + r.width / 2));
    y.set(e.clientY - (r.top + r.height / 2));
  };
  const reset = () => { x.set(0); y.set(0); };

  const styles = {
    primary:
      "text-white bg-gradient-to-r from-[#8A5CFF] via-[#7c3aed] to-[#00E5FF] shadow-[0_8px_40px_-12px_rgba(138,92,255,0.6)] hover:shadow-[0_8px_50px_-8px_rgba(0,229,255,0.55)]",
    outline:
      "text-white glass hover:bg-white/10",
    ghost:
      "text-white/80 hover:text-white",
  }[variant];

  const content = (
    <motion.span style={{ transform: inner as unknown as string }} className="block">
      {children}
    </motion.span>
  );

  const Tag: any = href ? "a" : "button";
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      <Tag
        href={href}
        download={download}
        target={target}
        onClick={onClick}
        className={cn(
          "group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300",
          styles,
          className,
        )}
      >
        {content}
      </Tag>
    </motion.div>
  );
}