import { useEffect, useRef } from "react";

export function Particles({ count = 40 }: { count?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      const size = Math.random() * 2 + 1;
      p.style.cssText = `
        position:absolute;
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        width:${size}px;height:${size}px;
        background:white;border-radius:9999px;
        opacity:${Math.random() * 0.6 + 0.1};
        box-shadow:0 0 ${size * 4}px rgba(138,92,255,0.6);
        animation: float-y ${6 + Math.random() * 10}s ease-in-out ${Math.random() * -10}s infinite;
      `;
      el.appendChild(p);
    }
  }, [count]);
  return <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" />;
}