import { useEffect, useRef, useState } from "react";
import { SectionHead } from "./SectionHead";

const steps = [
  {
    n: "01",
    title: "Intro call",
    time: "30 min · Free · No pitch",
    desc: "We get to know you and your business. You tell us where things are breaking or stalling. We ask the right questions. No deck, no pressure.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Growth plan",
    time: "Where to focus first",
    desc: "We show you what's blocking growth and exactly what we'd do about it. Prioritised, scoped, and ready to act on.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Build and launch",
    time: "Weeks, not months",
    desc: "We build fast and get things live. New site, running campaigns, automation live. Shipped with care, not just speed.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Optimise and grow",
    time: "Ongoing partnership",
    desc: "We stay in it with you. We keep improving what's working and cut what's not. You get a team that treats your growth as their own.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="bg-navy px-6 py-28 md:px-[72px]">
      <SectionHead
        variant="dark"
        tag="How it works"
        title="From first call to"
        accent="real results. Fast."
        sub="A clear, tested process. You always know what's happening, what's next, and why."
      />

      <div className="mx-auto max-w-[1280px]">
        {/* Steps grid with connectors */}
        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line on desktop */}
          <div aria-hidden="true" className="absolute left-0 right-0 top-[52px] hidden h-px lg:block"
            style={{ background: "linear-gradient(to right, transparent, oklch(0.62 0.22 260 / 0.20) 15%, oklch(0.62 0.22 260 / 0.20) 85%, transparent)" }} />

          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-7 transition-all duration-300 hover:border-blue-light/30 hover:bg-blue-light/[0.05]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity .55s ease ${i * 100}ms, transform .55s ease ${i * 100}ms`,
              }}
            >
              {/* Step icon + number */}
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-[42px] w-[42px] items-center justify-center rounded-xl"
                  style={{ background: "oklch(0.62 0.22 260 / 0.15)", color: "oklch(0.72 0.18 260)" }}>
                  {s.icon}
                </div>
                <span className="font-display text-[32px] font-medium leading-none tracking-[-0.03em] text-blue-light/40">
                  {s.n}
                </span>
              </div>

              <h3 className="mb-2 text-[17px] font-semibold tracking-tight text-white">
                {s.title}
              </h3>
              <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.09em] text-blue-light/60">
                {s.time}
              </div>
              <p className="text-[13px] leading-[1.75] text-white/50">{s.desc}</p>

              {/* Active step dot on connector line (desktop) */}
              <div aria-hidden="true"
                className="absolute left-1/2 top-[52px] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full lg:block"
                style={{
                  background: "oklch(0.72 0.18 260)",
                  boxShadow: "0 0 8px oklch(0.62 0.22 260 / 0.6)",
                  opacity: visible ? 1 : 0,
                  transition: `opacity .4s ease ${i * 100 + 400}ms`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
