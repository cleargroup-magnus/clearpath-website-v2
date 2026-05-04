import { useEffect, useRef, useState } from "react";

const outcomes = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "More qualified leads",
    desc: "Websites and campaigns built to convert visitors, not just impress them.",
    color: "oklch(0.62 0.22 260)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
    title: "Less manual work",
    desc: "Automation that saves your team hours every week.",
    color: "oklch(0.62 0.20 150)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </svg>
    ),
    title: "Clear visibility",
    desc: "Know what's working, what's not, and where to focus next.",
    color: "oklch(0.65 0.20 50)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18M7 14l4-4 4 4 5-5" />
      </svg>
    ),
    title: "Systems that scale",
    desc: "Build once. Improve continuously. Grow without chaos.",
    color: "oklch(0.62 0.22 260)",
  },
];

/* ── Per-card scroll observer — each card animates independently ── */
function OutcomeCard({ o, index }: { o: typeof outcomes[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      // rootMargin fires the animation slightly before the card is fully on screen
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 rounded-[18px] border border-border-soft bg-background p-6 lg:flex-1
                 transition-[border-color,box-shadow,transform] duration-300
                 hover:-translate-y-0.5
                 hover:border-[color-mix(in_oklab,var(--blue)_25%,transparent)]
                 hover:shadow-[0_12px_32px_color-mix(in_oklab,var(--navy)_6%,transparent)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        // Desktop: stagger left→right. Mobile: stagger is 0 (each card is its own observer)
        transition: `opacity .5s ease ${index * 80}ms, transform .55s cubic-bezier(.22,1,.36,1) ${index * 80}ms`,
      }}
    >
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl ring-1"
        style={{
          background: `${o.color}18`,
          color: o.color,
          ringColor: `${o.color}20`,
        }}
      >
        {o.icon}
      </div>
      <div>
        <h3 className="mb-1.5 text-[15px] font-semibold tracking-tight text-text-base">
          {o.title}
        </h3>
        <p className="text-[13px] leading-[1.7] text-text-muted">{o.desc}</p>
      </div>
    </div>
  );
}

/* ── Animated flow connector (desktop only) ── */
function FlowArrow({ visible, delay = 0 }: { visible: boolean; delay?: number }) {
  return (
    <div
      aria-hidden="true"
      className="hidden lg:flex items-center justify-center self-center"
      style={{ width: 48, flexShrink: 0 }}
    >
      <svg width="48" height="16" viewBox="0 0 48 16" fill="none">
        <line x1="0" y1="8" x2="38" y2="8"
          stroke="var(--border-soft)" strokeWidth="1.5" />
        <line x1="0" y1="8" x2="38" y2="8"
          stroke="oklch(0.62 0.22 260)"
          strokeWidth="1.5"
          strokeDasharray="38"
          strokeDashoffset={visible ? 0 : 38}
          style={{ transition: `stroke-dashoffset .7s ease ${delay}ms` }}
        />
        <polygon
          points="38,8 31,4.5 31,11.5"
          fill="oklch(0.62 0.22 260)"
          style={{
            opacity: visible ? 0.7 : 0,
            transition: `opacity .4s ease ${delay + 500}ms`,
          }}
        />
        {visible && (
          <circle r="2.5" fill="oklch(0.72 0.18 260)" opacity=".8">
            <animateMotion dur="1.8s" begin={`${delay / 1000}s`} repeatCount="indefinite"
              path="M 0 8 L 36 8" />
            <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" begin={`${delay / 1000}s`} repeatCount="indefinite" />
          </circle>
        )}
      </svg>
    </div>
  );
}

export function Outcomes() {
  // Section-level observer — drives the arrows + pipeline label (desktop only)
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSectionVisible(true); obs.disconnect(); } },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-bg-soft px-6 pt-12 pb-16 md:px-[72px]">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-8 text-center">
          <h2 className="mb-3 font-display text-[clamp(24px,3vw,38px)] font-medium leading-tight tracking-tight text-text-base">
            Everything working together{" "}
            <span className="text-blue">to grow your business.</span>
          </h2>
          <p className="mx-auto max-w-[480px] text-[16px] leading-[1.7] text-text-muted">
            No disconnected tools. No wasted effort. One system built to generate results.
          </p>
        </div>

        {/* Cards with flow arrows between them on desktop */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-0">
          {outcomes.map((o, i) => (
            <div key={o.title} className="contents">
              <OutcomeCard o={o} index={i} />
              {i < outcomes.length - 1 && (
                <FlowArrow visible={sectionVisible} delay={i * 100 + 400} />
              )}
            </div>
          ))}
        </div>

        {/* Pipeline label */}
        <p
          className="mt-8 text-center text-[12px] font-medium uppercase tracking-[0.12em] text-text-light"
          style={{ opacity: sectionVisible ? 0.6 : 0, transition: "opacity .6s ease .8s" }}
        >
          One connected pipeline
        </p>
      </div>
    </section>
  );
}
