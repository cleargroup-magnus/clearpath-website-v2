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

      {/* ── Full-screen WebGL shader ── */}
      <ShaderAnimation />

      {/* ── Dark vignette so text stays readable ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="mb-8 max-w-[1000px] font-display text-[clamp(48px,7.5vw,100px)] font-medium leading-none tracking-[-0.045em] text-white">
          Clear direction.
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #a5c8ff 0%, #7eb3ff 40%, #a0c4ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Clear results.
          </span>
        </h1>

        <p className="mb-3 max-w-[580px] text-[19px] leading-[1.65] text-white/70">
          We build, automate and scale. So you can focus on what matters.
        </p>
        <p className="mb-12 max-w-[520px] text-[15px] text-white/45">
          Your growth partner to take you from current state to ideal state.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="https://calendly.com/magnus-clearcruit/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full px-8 py-[15px] text-[15px] font-medium text-white transition-all hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
            }}
          >
            Book a discovery call
            <ArrowIcon />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2.5 rounded-full px-8 py-[15px] text-[15px] font-medium text-white/80 transition-all hover:-translate-y-0.5"
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
            }}
          >
            See what we do
          </a>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40"
        aria-hidden="true"
      >
        <span className="text-[11px] font-medium tracking-widest text-white uppercase">Scroll</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <rect x="6.5" y="0.5" width="3" height="9" rx="1.5" stroke="white" strokeWidth="1"/>
          <path d="M8 14l-3 3h6l-3-3z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
