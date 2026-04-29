import { ShaderAnimation } from "./ShaderAnimation";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center md:px-10">

      {/* ── WebGL shader ── */}
      <ShaderAnimation />

      {/* ── Radial vignette for text legibility ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(5,6,20,0.55) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center">
        <h1
          className="mb-8 max-w-[1000px] font-display font-medium leading-none tracking-[-0.045em]"
          style={{ fontSize: "clamp(48px,7.5vw,100px)", color: "rgba(255,255,255,0.95)" }}
        >
          Clear direction.
          <br />
          <span style={{ color: "oklch(0.72 0.18 260)" }}>Clear results.</span>
        </h1>

        <p className="mb-3 max-w-[580px] text-[19px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.55)" }}>
          We build, automate and scale. So you can focus on what matters.
        </p>
        <p className="mb-12 max-w-[520px] text-[15px]" style={{ color: "rgba(255,255,255,0.30)" }}>
          Your growth partner to take you from current state to ideal state.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="https://calendly.com/magnus-clearcruit/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full px-8 py-[15px] text-[15px] font-medium text-white transition-all hover:-translate-y-0.5"
            style={{
              background: "oklch(0.52 0.22 260)",
              boxShadow: "0 8px 32px color-mix(in oklab, oklch(0.52 0.22 260) 40%, transparent)",
            }}
          >
            Book a discovery call
            <ArrowIcon />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2.5 rounded-full px-8 py-[15px] text-[15px] font-medium transition-all hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.80)",
              backdropFilter: "blur(12px)",
            }}
          >
            See what we do
          </a>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ opacity: 0.35 }}
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.7)" }}>Scroll</span>
        <svg width="1" height="28" viewBox="0 0 1 28">
          <line x1="0.5" y1="0" x2="0.5" y2="28" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>
    </section>
  );
}
