export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-50 mix-blend-screen blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, #8A5CFF 0%, transparent 60%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full opacity-40 mix-blend-screen blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, #00E5FF 0%, transparent 60%)", animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full opacity-30 mix-blend-screen blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, #FF4D9E 0%, transparent 60%)", animationDelay: "-12s" }}
      />
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, black 30%, transparent 80%)",
        }}
      />
    </div>
  );
}