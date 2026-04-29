function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 pb-12 pt-36 text-center md:px-10 md:pb-16 md:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, color-mix(in oklab, var(--blue) 8%, transparent), transparent)",
        }}
      />
      {/* Animated gradient mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[15%] top-[5%] h-[520px] w-[520px] rounded-full opacity-90 blur-[90px] motion-safe:animate-mesh-1"
        style={{ background: "color-mix(in oklab, var(--blue) 25%, transparent)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[15%] top-[20%] h-[560px] w-[560px] rounded-full opacity-90 blur-[100px] motion-safe:animate-mesh-2"
        style={{ background: "color-mix(in oklab, var(--navy) 25%, transparent)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10%] left-[30%] h-[480px] w-[480px] rounded-full opacity-80 blur-[90px] motion-safe:animate-mesh-3"
        style={{ background: "color-mix(in oklab, var(--blue-light) 25%, transparent)" }}
      />

      {/* Tile grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--navy) 100%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--navy) 100%, transparent) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          opacity: 0.07,
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <h1 className="relative z-10 mb-9 max-w-[1100px] font-display text-[clamp(52px,8vw,104px)] font-medium leading-none tracking-[-0.045em] text-navy">
        Clear direction.
        <br />
        <span className="text-blue">Clear results.</span>
      </h1>

      <p className="relative z-10 mb-3 max-w-[620px] text-[19px] leading-[1.65] text-text-muted">
        We build, automate and scale. So you can focus on what matters.
      </p>
      <p className="relative z-10 mb-13 max-w-[560px] text-[16px] text-text-light" style={{ marginBottom: "52px" }}>
        Your growth partner to take you from current state to ideal state.
      </p>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3.5">
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
    </section>
  );
}