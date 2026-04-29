export function CTA() {
  return (
    <section id="cta" className="bg-background px-6 py-32 md:px-[72px]">
      <div className="relative mx-auto max-w-[1080px] overflow-hidden rounded-[32px] bg-navy px-8 py-24 text-center md:px-16 md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] -top-[40%] h-[500px] w-[500px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--blue) 35%, transparent), transparent 65%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[30%] -left-[10%] h-[400px] w-[400px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--blue) 22%, transparent), transparent 65%)",
          }}
        />

        <div className="relative z-10 mb-5 inline-flex items-center gap-2 text-[13px] font-medium text-blue-light">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-light" />
          Get started
        </div>
        <h2 className="relative z-10 mx-auto mb-6 max-w-[680px] font-display text-[clamp(40px,5vw,60px)] font-medium leading-[1.05] tracking-[-0.035em] text-white">
          Stop guessing. <span className="text-blue-light">Start growing.</span>
        </h2>
        <p className="relative z-10 mx-auto mb-10 max-w-[520px] text-[18px] leading-[1.65] text-white/60">
          One conversation is all it takes to get a clear picture of what's possible for your business.
        </p>
        <a
          href="https://calendly.com/magnus-clearcruit/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-[15px] text-[15px] font-medium text-navy shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all hover:bg-blue-soft hover:text-blue"
        >
          Book your free discovery call
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <p className="relative z-10 mt-6 text-[14px] text-white/50">
          Or email{" "}
          <a
            href="mailto:magnus@clearcruit.com"
            className="text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-blue-light"
          >
            magnus@clearcruit.com
          </a>
        </p>
      </div>
    </section>
  );
}