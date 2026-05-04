export function CTA() {
  return (
    <section id="cta" className="bg-background px-6 py-14 md:px-[72px]">
      <div className="relative mx-auto max-w-[880px] overflow-hidden rounded-[28px] bg-navy px-8 py-14 text-center md:px-14 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] -top-[40%] h-[400px] w-[400px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--blue) 30%, transparent), transparent 65%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[30%] -left-[10%] h-[320px] w-[320px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--blue) 20%, transparent), transparent 65%)",
          }}
        />

        <div className="relative z-10 mb-4 inline-flex items-center gap-2 text-[12px] font-medium text-blue-light">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-light" />
          Get started
        </div>
        <h2 className="relative z-10 mx-auto mb-5 max-w-[580px] font-display text-[clamp(32px,4vw,52px)] font-medium leading-[1.05] tracking-[-0.035em] text-white">
          Get a clear plan{" "}
          <span className="text-blue-light">for your growth.</span>
        </h2>
        <p className="relative z-10 mx-auto mb-7 max-w-[420px] text-[16px] leading-[1.65] text-white/60">
          One conversation is all it takes to understand what to fix, improve, and prioritise.
        </p>

        <ul className="relative z-10 mx-auto mb-8 max-w-[320px] space-y-2 text-left">
          {[
            "A clear view of your bottlenecks",
            "Where you're losing time or revenue",
            "Practical next steps with no fluff",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[14px] text-white/65">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-blue-light">
                <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <a
          href="https://calendly.com/magnus-clearcruit/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-[13px] text-[14px] font-medium text-navy shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all hover:bg-blue-soft hover:text-blue"
        >
          Book your free intro call
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <p className="relative z-10 mt-4 text-[12px] text-white/40">
          No pressure. No commitment.{" "}
          <a
            href="mailto:magnus@clearscaler.com"
            className="text-white/60 underline decoration-white/20 underline-offset-4 transition-colors hover:text-blue-light"
          >
            Or email us instead.
          </a>
        </p>
      </div>
    </section>
  );
}
