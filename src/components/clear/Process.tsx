import { useEffect, useRef, useState, useCallback } from "react";
import { SectionHead } from "./SectionHead";

const stroke = {
  fill: "none" as const, stroke: "currentColor", strokeWidth: 1.6,
  strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const steps = [
  {
    n: "01",
    title: "Intro call",
    label: "30 min · Free · No pitch",
    desc: "We get to know your business, your goals, and what's currently blocking growth. It's a real conversation, not a pitch. By the end, we know exactly where to look.",
    outcome: "A clear picture of where things stand.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Find the gaps",
    label: "Where growth is being lost",
    desc: "We audit your funnel, systems, and workflows. Missing automations, broken tracking, weak conversion points, inefficient processes. We map exactly what's costing you leads and time.",
    outcome: "A prioritised view of what to fix first.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Build the solution",
    label: "Weeks, not months",
    desc: "We build the right combination of web, automation, AI, ads, integrations, or GTM systems. Not everything at once. The highest-impact pieces first, done properly.",
    outcome: "Built, tested, and live.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Launch and improve",
    label: "Ongoing partnership",
    desc: "We launch fast, track what's working, and keep improving. Results compound over time. We treat your growth as our own and stay accountable to the numbers.",
    outcome: "Compounding results that improve every month.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

/** Return the index of the step whose card midpoint is closest to `clientY`. */
function closestStepToY(
  stepRefs: React.MutableRefObject<(HTMLDivElement | null)[]>,
  clientY: number,
): number {
  let closest = 0;
  let closestDist = Infinity;
  stepRefs.current.forEach((el, i) => {
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mid = r.top + r.height / 2;
    const dist = Math.abs(mid - clientY);
    if (dist < closestDist) { closestDist = dist; closest = i; }
  });
  return closest;
}

export function Process() {
  // activeStep: which step is currently highlighted (0–3). Starts at 0.
  const [activeStep, setActiveStep] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Whether the mouse is currently over the section (desktop priority mode)
  const mouseInSection = useRef(false);

  // ── Section fade-in ────────────────────────────────────────────────────────
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSectionVisible(true); obs.disconnect(); } },
      { threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // ── Mobile / no-mouse: scroll-driven ──────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      // On desktop with mouse in section, mouse wins.
      if (mouseInSection.current) return;
      // Only respond when section is at least partially visible.
      const section = sectionRef.current;
      if (!section) return;
      const sr = section.getBoundingClientRect();
      if (sr.bottom < 0 || sr.top > window.innerHeight) return;

      const viewMid = window.innerHeight * 0.48;
      setActiveStep(closestStepToY(stepRefs, viewMid));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Desktop: mouse-driven ─────────────────────────────────────────────────
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    setActiveStep(closestStepToY(stepRefs, e.clientY));
  }, []);

  const handleMouseEnter = useCallback(() => {
    mouseInSection.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseInSection.current = false;
    // Snap back to step 1 so there's always a sensible default when idle.
    setActiveStep(0);
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-navy px-6 pt-20 pb-16 md:px-[72px]"
      style={{
        opacity: sectionVisible ? 1 : 0,
        transform: sectionVisible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* Section header */}
      <SectionHead
        variant="dark"
        tag="How it works"
        title="From confusion"
        accent="to clarity."
        sub="Four steps that take you from not knowing what's broken to a business that scales."
      />

      {/* Journey timeline */}
      <div className="mx-auto max-w-[800px]">
        {steps.map((s, i) => {
          const isDone    = i < activeStep;
          const isActive  = i === activeStep;
          const isPending = i > activeStep;
          const isLast    = i === steps.length - 1;

          return (
            <div key={s.n} className="flex gap-5 md:gap-7">

              {/* ── Left: node + spine ── */}
              <div className="flex flex-col items-center" style={{ width: 52, flexShrink: 0 }}>

                {/* Node circle */}
                <div
                  className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full"
                  style={{
                    background: isDone
                      ? "oklch(0.62 0.22 260 / 0.18)"
                      : isActive
                      ? "oklch(0.62 0.22 260)"
                      : "oklch(0.28 0.06 260 / 0.6)",
                    border: isDone
                      ? "1.5px solid oklch(0.62 0.22 260 / 0.35)"
                      : isActive
                      ? "1.5px solid oklch(0.78 0.16 260)"
                      : "1.5px solid oklch(0.40 0.08 260 / 0.4)",
                    boxShadow: isActive
                      ? "0 0 0 7px oklch(0.62 0.22 260 / 0.10), 0 0 24px oklch(0.62 0.22 260 / 0.30)"
                      : "none",
                    transition: "background 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease",
                  }}
                >
                  {isDone ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                      stroke="oklch(0.72 0.18 260)" strokeWidth="2.2"
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8l3.5 3.5L13 4" />
                    </svg>
                  ) : (
                    <span
                      className="font-display text-[13px] font-semibold leading-none"
                      style={{
                        color: isActive ? "white" : "oklch(0.50 0.10 260 / 0.7)",
                        transition: "color 0.28s ease",
                      }}
                    >
                      {s.n}
                    </span>
                  )}

                  {/* Pulse ring — active only */}
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: "2px solid oklch(0.72 0.18 260 / 0.5)",
                        animation: "workflow-node-ping 2.2s ease-out infinite",
                      }}
                    />
                  )}
                </div>

                {/* Connector spine */}
                {!isLast && (
                  <div className="relative mt-1 w-0.5 flex-1" style={{ minHeight: 56 }}>
                    {/* Track */}
                    <div className="absolute inset-0"
                      style={{ background: "oklch(0.62 0.22 260 / 0.10)" }} />
                    {/* Fill — follows active step */}
                    <div
                      className="absolute inset-x-0 top-0"
                      style={{
                        background: "linear-gradient(to bottom, oklch(0.72 0.18 260), oklch(0.62 0.22 260 / 0.4))",
                        height: isDone ? "100%" : isActive ? "48%" : "0%",
                        transition: "height 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />
                    {/* Travelling dot — active only */}
                    {isActive && (
                      <div
                        className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
                        style={{
                          background: "oklch(0.80 0.16 260)",
                          boxShadow: "0 0 6px oklch(0.72 0.18 260)",
                          animation: "processSpineDot 1.8s ease-in-out infinite",
                        }}
                      />
                    )}
                  </div>
                )}
              </div>

              {/* ── Right: step card ── */}
              <div
                ref={(el) => { stepRefs.current[i] = el; }}
                className="flex-1"
                style={{ paddingBottom: isLast ? 0 : 28 }}
              >
                <div
                  className="rounded-[22px] p-6 md:p-8"
                  style={{
                    background: isActive
                      ? "oklch(0.62 0.22 260 / 0.11)"
                      : isDone
                      ? "oklch(0.62 0.22 260 / 0.05)"
                      : "oklch(0.20 0.04 260 / 0.40)",
                    border: isActive
                      ? "1px solid oklch(0.62 0.22 260 / 0.38)"
                      : isDone
                      ? "1px solid oklch(0.62 0.22 260 / 0.14)"
                      : "1px solid oklch(0.62 0.22 260 / 0.07)",
                    opacity: isPending ? 0.38 : 1,
                    transform: isActive ? "translateX(3px)" : "translateX(0)",
                    transition:
                      "background 0.28s ease, border-color 0.28s ease, opacity 0.28s ease, transform 0.28s ease",
                  }}
                >
                  {/* Card header */}
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div
                        className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.11em]"
                        style={{
                          color: isActive
                            ? "oklch(0.72 0.18 260)"
                            : "oklch(0.52 0.10 260 / 0.65)",
                          transition: "color 0.28s ease",
                        }}
                      >
                        {s.label}
                      </div>
                      <h3
                        className="text-[19px] font-semibold leading-snug tracking-tight md:text-[21px]"
                        style={{
                          color: isActive
                            ? "rgba(255,255,255,0.97)"
                            : isDone
                            ? "rgba(255,255,255,0.68)"
                            : "rgba(255,255,255,0.38)",
                          transition: "color 0.28s ease",
                        }}
                      >
                        {s.title}
                      </h3>
                    </div>
                    {/* Icon */}
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        background: isActive
                          ? "oklch(0.62 0.22 260 / 0.22)"
                          : "oklch(0.62 0.22 260 / 0.06)",
                        color: isActive
                          ? "oklch(0.78 0.16 260)"
                          : "oklch(0.50 0.10 260 / 0.55)",
                        transition: "background 0.28s ease, color 0.28s ease",
                      }}
                    >
                      {s.icon}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="text-[14px] leading-[1.85] md:text-[15px]"
                    style={{
                      color: isActive
                        ? "rgba(255,255,255,0.58)"
                        : isDone
                        ? "rgba(255,255,255,0.38)"
                        : "rgba(255,255,255,0.22)",
                      transition: "color 0.28s ease",
                    }}
                  >
                    {s.desc}
                  </p>

                  {/* Outcome chip */}
                  <div
                    style={{
                      maxHeight: isDone || isActive ? 48 : 0,
                      opacity: isDone || isActive ? 1 : 0,
                      overflow: "hidden",
                      marginTop: isDone || isActive ? 16 : 0,
                      transition:
                        "max-height 0.28s ease, opacity 0.28s ease, margin-top 0.28s ease",
                    }}
                  >
                    <div
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-medium"
                      style={{
                        background: isActive
                          ? "oklch(0.62 0.22 260 / 0.18)"
                          : "oklch(0.62 0.22 260 / 0.08)",
                        color: isActive
                          ? "oklch(0.80 0.16 260)"
                          : "oklch(0.62 0.18 260 / 0.65)",
                        border: isActive
                          ? "1px solid oklch(0.62 0.22 260 / 0.32)"
                          : "1px solid oklch(0.62 0.22 260 / 0.14)",
                        transition: "background 0.28s ease, color 0.28s ease, border-color 0.28s ease",
                      }}
                    >
                      <svg width="11" height="11" viewBox="0 0 16 16" fill="none"
                        stroke="currentColor" strokeWidth="2.2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8l3.5 3.5L13 4" />
                      </svg>
                      {s.outcome}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA — always visible once section is in view */}
      <div
        className="mx-auto mt-10 max-w-[800px] flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between"
        style={{
          opacity: sectionVisible ? 1 : 0,
          transform: sectionVisible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
        }}
      >
        <p className="text-[14px] text-white/40">
          Ready to start the journey?
        </p>
        <a
          href="https://calendly.com/magnus-clearcruit/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[13px] font-medium text-white transition-all hover:-translate-y-px"
          style={{
            background: "oklch(0.52 0.22 260)",
            boxShadow: "0 4px 20px oklch(0.52 0.22 260 / 0.35)",
          }}
        >
          Book your free intro call
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <style>{`
        @keyframes processSpineDot {
          0%   { top: 0%;   opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 0.8; }
          100% { top: 48%;  opacity: 0; }
        }
      `}</style>
    </section>
  );
}
