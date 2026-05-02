import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { SectionHead } from "./SectionHead";

type Service = { title: string; desc: string; icon: ReactNode; tag: string; back: ReactNode };

const stroke = {
  fill: "none" as const, stroke: "currentColor", strokeWidth: 1.6,
  strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const B = "oklch(0.62 0.22 260)";
const BL = "oklch(0.72 0.18 260)";

/* ─────────────────────────── Back animations ───────────────────────── */

/* 1. Web Dev — wireframe → filled design, looping */
function WebDevBack() {
  const row = (delay: number, w = "100%", h = 8, opacity = 0.25) => ({
    height: h, width: w, borderRadius: 4, marginBottom: 4,
    background: `oklch(0.62 0.22 260 / ${opacity})`,
    animation: `webdev-loop 5s ease ${delay}s infinite`,
  });
  return (
    <div style={{ width: "100%", maxWidth: 168 }}>
      {/* Browser chrome */}
      <div style={{ border: `1px solid ${B}40`, borderRadius: 10, overflow: "hidden", animation: "card-fade-up .4s ease .05s both" }}>
        {/* Title bar */}
        <div style={{ background: `${B}14`, padding: "6px 8px", display: "flex", alignItems: "center", gap: 4, borderBottom: `1px solid ${B}22` }}>
          {[B+"99", B+"66", B+"44"].map((c, i) => <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />)}
          <div style={{ flex: 1, height: 5, borderRadius: 3, background: `${B}18`, marginLeft: 4 }} />
        </div>
        {/* Page content */}
        <div style={{ padding: 8, background: `${B}05` }}>
          {/* Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6, animation: `webdev-loop 5s ease .1s infinite` }}>
            <div style={{ width: 20, height: 6, borderRadius: 3, background: `${B}50` }} />
            <div style={{ flex: 1 }} />
            <div style={{ width: 14, height: 5, borderRadius: 3, background: `${B}25` }} />
            <div style={{ width: 14, height: 5, borderRadius: 3, background: `${B}25` }} />
            <div style={{ width: 22, height: 6, borderRadius: 3, background: `${B}45` }} />
          </div>
          {/* Hero block */}
          <div style={{ background: `${B}12`, borderRadius: 6, padding: 8, marginBottom: 6, animation: `webdev-loop 5s ease .25s infinite` }}>
            <div style={{ ...row(.25, "70%", 9, 0.4), marginBottom: 5 }} />
            <div style={{ ...row(.25, "50%", 6, 0.22), marginBottom: 6 }} />
            <div style={{ width: 40, height: 14, borderRadius: 6, background: `${B}55`, animation: `webdev-loop 5s ease .4s infinite` }} />
          </div>
          {/* 3 cards */}
          <div style={{ display: "flex", gap: 5, marginBottom: 4 }}>
            {[.5, .6, .7].map((d, i) => (
              <div key={i} style={{ flex: 1, height: 24, borderRadius: 5, border: `1px solid ${B}28`, background: `${B}08`, animation: `webdev-loop 5s ease ${d}s infinite` }}>
                <div style={{ width: "60%", height: 4, borderRadius: 3, background: `${B}30`, margin: "5px auto 3px" }} />
                <div style={{ width: "80%", height: 3, borderRadius: 3, background: `${B}18`, margin: "0 auto" }} />
              </div>
            ))}
          </div>
          {/* Cursor */}
          <div style={{ display: "inline-block", width: 1.5, height: 9, background: B, animation: "cursor-blink .8s step-end infinite", marginLeft: 2 }} />
        </div>
      </div>
    </div>
  );
}

/* 2. AI Integration — data flowing into neural core */
function AIBack() {
  return (
    <div style={{ width: "100%", maxWidth: 168, display: "flex", flexDirection: "column", gap: 8 }}>
      {/* Chat bubbles — loop */}
      {[
        { txt: "Automate my support", self: false, d: 0.1 },
        { txt: "Setting it up now…", self: true, d: 0.6 },
        { txt: "Done. 3 hrs saved/day.", self: false, d: 1.1 },
      ].map(({ txt, self, d }) => (
        <div key={d} style={{
          alignSelf: self ? "flex-end" : "flex-start",
          background: self ? `${B}38` : `${B}20`,
          padding: "7px 11px",
          borderRadius: self ? "14px 14px 3px 14px" : "14px 14px 14px 3px",
          fontSize: 11, color: BL,
          animation: `chat-loop 5s ease ${d}s infinite`,
        }}>{txt}</div>
      ))}
      {/* Typing dots */}
      <div style={{ display: "flex", gap: 4, padding: "4px 10px", animation: `chat-loop 5s ease 1.7s infinite` }}>
        {[2.2, 2.4, 2.6].map((d) => (
          <span key={d} style={{ width: 5, height: 5, borderRadius: "50%", background: `${B}55`, display: "block", animation: `card-pulse-dot .7s ease ${d}s infinite` }} />
        ))}
      </div>
      {/* Neural activity bar */}
      <div style={{ height: 3, borderRadius: 2, background: `${B}15`, overflow: "hidden", animation: "card-fade-up .4s ease 0s both" }}>
        <div style={{ height: "100%", width: "60%", background: `linear-gradient(to right, ${B}40, ${B}90)`, borderRadius: 2, animation: "webdev-loop 5s ease 1.9s infinite" }} />
      </div>
    </div>
  );
}

/* 3. Process Automation — circular loop (manual → automated) */
function AutomationBack() {
  const steps = ["Input", "Process", "Output"];
  return (
    <svg viewBox="0 0 160 100" style={{ width: "100%", maxWidth: 168 }}>
      {/* Circular track */}
      <circle cx="80" cy="50" r="32" fill="none" stroke={`${B}22`} strokeWidth="1" strokeDasharray="4 3" style={{ animation: "card-fade-up .4s ease .1s both" }} />

      {/* Step nodes around circle */}
      {steps.map((label, i) => {
        const angle = (i * 120 - 90) * (Math.PI / 180);
        const cx = 80 + 32 * Math.cos(angle);
        const cy = 50 + 32 * Math.sin(angle);
        return (
          <g key={label} style={{ animation: `card-node-in .35s ease ${.2 + i * .15}s both` }}>
            <circle cx={cx} cy={cy} r="10" fill={`${B}18`} stroke={B} strokeWidth="1.2" strokeOpacity=".55" />
            <text x={cx} y={cy + 3.5} textAnchor="middle" fontSize="5.5" fill={BL} fontFamily="Inter, sans-serif">{label}</text>
          </g>
        );
      })}

      {/* Orbiting dots — continuous */}
      <circle r="4" fill={B} style={{ transformOrigin: "80px 50px", animation: "orbit 2.4s linear infinite" }}>
        <animate attributeName="opacity" values="0;1;1;0" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <circle r="3" fill={BL} fillOpacity=".6" style={{ transformOrigin: "80px 50px", animation: "orbit 2.4s linear 1.2s infinite" }}>
        <animate attributeName="opacity" values="0;0.7;0.7;0" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
      </circle>

      {/* Center: "AUTO" label */}
      <circle cx="80" cy="50" r="14" fill={`${B}12`} stroke={B} strokeWidth="1" strokeOpacity=".3" style={{ animation: "card-node-in .3s ease .6s both" }} />
      <text x="80" y="48" textAnchor="middle" fontSize="5.5" fill={BL} fontFamily="Inter, sans-serif" fontWeight="600">AUTO</text>
      <text x="80" y="55.5" textAnchor="middle" fontSize="4.5" fill={`${BL}99`} fontFamily="Inter, sans-serif">⚡ live</text>
    </svg>
  );
}

/* 4. Systems Integration — tool hub with pulsing connections */
function IntegrationBack() {
  const satellites = [
    { label: "CRM",      cx: 20, cy: 20 },
    { label: "Email",    cx: 140, cy: 20 },
    { label: "Data",     cx: 20, cy: 68 },
    { label: "Chat",     cx: 140, cy: 68 },
  ];
  return (
    <svg viewBox="0 0 160 88" style={{ width: "100%", maxWidth: 168 }}>
      {/* Lines to hub */}
      {satellites.map((s, i) => (
        <g key={s.label}>
          <line x1={s.cx} y1={s.cy} x2="80" y2="44"
            stroke={B} strokeWidth="1" strokeOpacity=".2"
            style={{ animation: `card-draw-line .5s ease ${.2 + i * .12}s both`, strokeDasharray: 80, strokeDashoffset: 80 }}
          />
          {/* Travelling pulse */}
          <circle r="2.5" fill={BL} style={{ animation: `card-node-in .2s ease ${.9 + i * .5}s both` }}>
            <animateMotion dur="1.8s" begin={`${.9 + i * .5}s`} repeatCount="indefinite"
              path={`M ${s.cx} ${s.cy} L 80 44`} />
            <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" begin={`${.9 + i * .5}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* Satellite nodes */}
      {satellites.map((s, i) => (
        <g key={s.label} style={{ animation: `card-node-in .3s ease ${i * .1}s both` }}>
          <circle cx={s.cx} cy={s.cy} r="12" fill={`${B}12`} stroke={B} strokeWidth="1" strokeOpacity=".45" />
          <text x={s.cx} y={s.cy + 3.5} textAnchor="middle" fontSize="6" fill={BL} fontFamily="Inter, sans-serif" fontWeight="600">{s.label}</text>
        </g>
      ))}

      {/* Hub */}
      <g style={{ animation: "card-node-in .4s ease .5s both" }}>
        <circle cx="80" cy="44" r="18" fill={`${B}20`} stroke={B} strokeWidth="1.5" strokeOpacity=".6" />
        <circle cx="80" cy="44" r="18" fill="none" stroke={BL} strokeWidth="1" strokeOpacity=".25" style={{ animation: "ai-pulse-ring 2s ease 1s infinite" }} />
        <text x="80" y="41.5" textAnchor="middle" fontSize="5.5" fill={BL} fontFamily="Inter, sans-serif" fontWeight="600">ONE</text>
        <text x="80" y="49" textAnchor="middle" fontSize="5.5" fill={BL} fontFamily="Inter, sans-serif" fontWeight="600">SYSTEM</text>
      </g>
    </svg>
  );
}

/* 5. Meta & Google Ads — campaign live + rising metrics */
function AdsBack() {
  const bars = [
    { h: 30, d: 0 }, { h: 50, d: .08 }, { h: 40, d: .16 },
    { h: 68, d: .24 }, { h: 55, d: .32 }, { h: 88, d: .40 },
  ];
  const metrics = [
    { label: "Impressions", val: "14.2k", d: .9 },
    { label: "Clicks", val: "+38%", d: 1.1 },
    { label: "ROAS", val: "4.1×", d: 1.3 },
  ];
  return (
    <div style={{ width: "100%", maxWidth: 168, display: "flex", flexDirection: "column", gap: 8 }}>
      {/* LIVE badge */}
      <div style={{ display: "flex", alignItems: "center", gap: 5, animation: "card-fade-up .3s ease .05s both" }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "oklch(0.65 0.2 150)", display: "block", animation: "live-pulse 1.2s ease infinite" }} />
        <span style={{ fontSize: 10, fontWeight: 600, color: "oklch(0.72 0.18 150)", letterSpacing: ".06em" }}>LIVE CAMPAIGN</span>
      </div>

      {/* Bar chart */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 52 }}>
        {bars.map((b, i) => (
          <div key={i} style={{
            flex: 1, borderRadius: "3px 3px 0 0",
            height: `${b.h}%`,
            background: `oklch(${.5 + i * .025} 0.22 260 / .6)`,
            transformOrigin: "bottom",
            animation: `card-bar-rise .45s cubic-bezier(.34,1.56,.64,1) ${b.d}s both`,
          }} />
        ))}
      </div>
      <div style={{ height: 1, background: `${B}25` }} />

      {/* Metric pills */}
      <div style={{ display: "flex", gap: 4 }}>
        {metrics.map(({ label, val, d }) => (
          <div key={label} style={{
            flex: 1, padding: "4px 6px", borderRadius: 6,
            border: `1px solid ${B}22`, background: `${B}08`,
            animation: `metric-count 4s ease ${d}s infinite`,
          }}>
            <div style={{ fontSize: 9, color: `${BL}80`, marginBottom: 1 }}>{label}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: BL }}>{val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 6. GTM Engineering — tracking journey + attribution */
function GTMBack() {
  const stages = [
    { label: "Visitor", x: 10, w: 140 },
    { label: "Lead",    x: 25, w: 110 },
    { label: "Customer",x: 42, w: 76  },
  ];
  const events = [
    { cx: 32, cy: 22, label: "Page view", d: .6 },
    { cx: 80, cy: 40, label: "Form fill", d: .9 },
    { cx: 120, cy: 56, label: "Converted", d: 1.2 },
  ];
  return (
    <svg viewBox="0 0 160 85" style={{ width: "100%", maxWidth: 168 }}>
      {/* Funnel layers */}
      {stages.map((s, i) => (
        <g key={s.label} style={{ animation: `card-fade-up .4s ease ${i * .15}s both` }}>
          <rect x={s.x} y={10 + i * 20} width={s.w} height={14} rx="4"
            fill={`${B}${i === 0 ? "18" : i === 1 ? "12" : "0A"}`}
            stroke={B} strokeWidth=".8" strokeOpacity=".3" />
          <text x="80" y={10 + i * 20 + 9} textAnchor="middle" fontSize="6"
            fill={BL} fontFamily="Inter, sans-serif" fontWeight={i === 2 ? "600" : "400"}>{s.label}</text>
        </g>
      ))}

      {/* Attribution path */}
      <polyline points="32,22 80,40 120,56" fill="none" stroke={B} strokeWidth="1.2"
        strokeOpacity=".5" strokeDasharray="60" strokeDashoffset="60"
        style={{ animation: "card-draw-line .8s ease .7s both" }} />

      {/* Event markers */}
      {events.map(({ cx, cy, label, d }) => (
        <g key={label} style={{ animation: `card-node-in .3s ease ${d}s both` }}>
          <circle cx={cx} cy={cy} r="4" fill={B} fillOpacity=".8" />
          <circle cx={cx} cy={cy} r="4" fill="none" stroke={BL} strokeWidth=".8" style={{ animation: `ai-pulse-ring 2.5s ease ${d + .3}s infinite` }} />
          <rect x={cx - 16} y={cy + 6} width={32} height={9} rx="2" fill={`${B}18`} />
          <text x={cx} y={cy + 12} textAnchor="middle" fontSize="4.5" fill={BL} fontFamily="Inter, sans-serif">{label}</text>
        </g>
      ))}

      {/* "Tracked" badge */}
      <g style={{ animation: "card-fade-up .35s ease 1.6s both" }}>
        <rect x="96" y="72" width="58" height="12" rx="4" fill={`${B}20`} stroke={B} strokeWidth=".7" strokeOpacity=".4" />
        <text x="125" y="80.5" textAnchor="middle" fontSize="6" fill={BL} fontFamily="Inter, sans-serif" fontWeight="600">✓ Fully tracked</text>
      </g>
    </svg>
  );
}

/* ─────────────────────────── Service data ──────────────────────────── */

const services: Service[] = [
  {
    title: "Web Development",
    tag: "Build",
    desc: "High-converting websites and platforms built for performance, not appearances.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></svg>),
    back: <WebDevBack />,
  },
  {
    title: "AI Integration",
    tag: "Intelligent",
    desc: "Practical AI for the areas where it creates real value: support, ops, and content.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.6-3 6l-.5 4h-7L8 15c-1.7-1.4-3-3.5-3-6a7 7 0 0 1 7-7zM9 21h6" /></svg>),
    back: <AIBack />,
  },
  {
    title: "Process Automation",
    tag: "Automate",
    desc: "We remove repetitive tasks and streamline your operations, saving your team hours every week.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>),
    back: <AutomationBack />,
  },
  {
    title: "Systems Integration",
    tag: "Connect",
    desc: "Your tools, data, and CRM connected and working as one unified system.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>),
    back: <IntegrationBack />,
  },
  {
    title: "Meta & Google Ads",
    tag: "Growth",
    desc: "Paid campaigns built around measurable return, not vanity metrics.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M3 3v18h18M7 14l4-4 4 4 5-5" /></svg>),
    back: <AdsBack />,
  },
  {
    title: "GTM Engineering",
    tag: "Scale",
    desc: "Tracking, attribution, and outbound systems that give you full control over growth.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18M5.64 5.64l12.72 12.72M5.64 18.36L18.36 5.64" /></svg>),
    back: <GTMBack />,
  },
];

/* ─────────────────────────── Card ──────────────────────────────────── */

function ServiceCard({ s, index }: { s: Service; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (flipped) return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--gx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--gy", `${e.clientY - r.top}px`);
  };
  const onLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--gx", "-600px");
    e.currentTarget.style.setProperty("--gy", "-600px");
  };

  return (
    <div
      ref={wrapRef}
      onClick={() => setFlipped((f) => !f)}
      className="cursor-pointer"
      style={{
        perspective: "1200px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(36px) scale(0.97)",
        transition: `opacity 0.55s ease ${index * 80}ms, transform 0.55s ease ${index * 80}ms`,
      }}
    >
      <div style={{
        transformStyle: "preserve-3d",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
      }}>
        {/* ── Front ── */}
        <article
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="group relative overflow-hidden rounded-[22px] border border-border-soft bg-background p-8 transition-shadow duration-300 hover:border-[color-mix(in_oklab,var(--blue)_30%,transparent)] hover:shadow-[0_24px_56px_color-mix(in_oklab,var(--navy)_8%,transparent)]"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", "--gx": "-600px", "--gy": "-600px" } as React.CSSProperties}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: "radial-gradient(circle 280px at var(--gx) var(--gy), color-mix(in oklab, var(--blue) 7%, transparent), transparent)" }} />
          <span aria-hidden="true" className="pointer-events-none absolute right-5 top-2 select-none font-display font-bold leading-none text-text-base/[0.06] transition-colors duration-300 group-hover:text-text-base/[0.10]" style={{ fontSize: 96 }}>{num}</span>

          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-text-light transition-colors duration-300 group-hover:border-[color-mix(in_oklab,var(--blue)_25%,transparent)] group-hover:text-blue">
              <span className="h-1 w-1 rounded-full bg-current" />{s.tag}
            </span>
          </div>

          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-soft text-blue ring-1 ring-[color-mix(in_oklab,var(--blue)_15%,transparent)] transition-all duration-300 group-hover:shadow-[0_4px_16px_color-mix(in_oklab,var(--blue)_20%,transparent)]">
            {s.icon}
          </div>

          <h3 className="mb-3 text-[20px] font-semibold leading-snug tracking-tight text-text-base transition-colors duration-200 group-hover:text-blue">{s.title}</h3>
          <p className="relative z-10 text-[14px] leading-[1.8] text-text-muted">{s.desc}</p>

          <div className="mt-5 flex items-center gap-1.5 text-[11px] text-text-light/60">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16" />
            </svg>
            <span>Click to see how it works</span>
          </div>

          <div aria-hidden="true" className="absolute bottom-0 left-8 right-8 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-blue to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
        </article>

        {/* ── Back ── */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-between rounded-[22px] p-7"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "var(--why-card)", border: "1px solid var(--why-card-border)" }}
        >
          <div className="flex w-full items-center justify-between">
            <p className="text-[13px] font-semibold text-white/70">{s.title}</p>
            <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/30">tap to close</span>
          </div>
          <div className="flex flex-1 items-center justify-center py-3 w-full">
            {flipped && s.back}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── Section ───────────────────────────────── */

export function Services() {
  return (
    <section id="services" className="bg-background px-6 py-28 md:px-[72px]">
      <SectionHead
        tag="What we do"
        title="Six services."
        accent="One team."
        sub="No handoffs between agencies. Everything working together to drive leads, cut waste, and scale what works."
      />
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => <ServiceCard key={s.title} s={s} index={i} />)}
      </div>
    </section>
  );
}
