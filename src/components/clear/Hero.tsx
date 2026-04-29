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

      {/* ── WebGL shader — now renders white bg with dark ring lines ── */}
      <ShaderAnimation />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="mb-8 max-w-[1000px] font-display text-[clamp(48px,7.5vw,100px)] font-medium leading-none tracking-[-0.045em] text-navy">
          Clear direction.
          <br />
          <span className="text-blue">Clear results.</span>
        </h1>

        <p className="mb-3 max-w-[580px] text-[19px] leading-[1.65] text-text-muted">
          We build, automate and scale. So you can focus on what matters.
        </p>
        <p className="mb-12 max-w-[520px] text-[15px] text-text-light">
          Your growth partner to take you from current state to ideal state.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="https://calendly.com/magnus-clearcruit/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-blue px-8 py-[15px] text-[15px] font-medium text-white shadow-[0_8px_24px_color-mix(in_oklab,var(--blue)_25%,transparent)] transition-all hover:-translate-y-0.5 hover:bg-[oklch(0.5_0.22_260)] hover:shadow-[0_12px_30px_color-mix(in_oklab,var(--blue)_35%,transparent)]"
          >
            Book a discovery call
            <ArrowIcon />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2.5 rounded-full border border-border-soft bg-background px-8 py-[15px] text-[15px] font-medium text-text-base transition-all hover:-translate-y-0.5 hover:border-navy"
          >
            See what we do
          </a>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30"
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold tracking-[0.18em] text-navy uppercase">Scroll</span>
        <svg width="1" height="28" viewBox="0 0 1 28">
          <line x1="0.5" y1="0" x2="0.5" y2="28" stroke="currentColor" strokeWidth="1" className="text-navy" strokeDasharray="3 3" />
        </svg>
      </div>
    </section>
  );
}
