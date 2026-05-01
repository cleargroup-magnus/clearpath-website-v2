import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { SectionHead } from "./SectionHead";

type Service = {
  title: string;
  desc: string;
  icon: ReactNode;
  tag: string;
  back: ReactNode;
};

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ── Back-face animations ─────────────────────────────── */

function WebDevBack() {
  return (
    <div className="flex w-full max-w-[170px] flex-col gap-2">
      <div className="h-3 w-full rounded bg-blue/25" style={{ animation: "card-fade-up .35s ease .05s both" }} />
      <div className="h-14 w-full rounded-lg bg-blue/15" style={{ animation: "card-fade-up .35s ease .18s both" }} />
      <div className="flex gap-2">
        <div className="h-9 flex-1 rounded bg-blue/20" style={{ animation: "card-fade-up .35s ease .32s both" }} />
        <div className="h-9 flex-[1.5] rounded bg-blue/12" style={{ animation: "card-fade-up .35s ease .42s both" }} />
      </div>
      <div className="flex gap-1.5">
        <div className="h-2 flex-1 rounded bg-blue/20" style={{ animation: "card-fade-up .35s ease .54s both" }} />
        <div className="h-2 flex-1 rounded bg-blue/14" style={{ animation: "card-fade-up .35s ease .60s both" }} />
        <div className="h-2 flex-[0.6] rounded bg-blue/10" style={{ animation: "card-fade-up .35s ease .66s both" }} />
      </div>
      <div className="h-2.5 w-full rounded bg-blue/18" style={{ animation: "card-fade-up .35s ease .76s both" }} />
    </div>
  );
}

function AIBack() {
  return (
    <div className="flex w-full max-w-[170px] flex-col gap-2.5">
      <div
        className="self-start rounded-2xl rounded-tl-sm bg-blue/20 px-3 py-2 text-[11px] text-blue"
        style={{ animation: "card-fade-up .35s ease .1s both" }}
      >
        How can I help you?
      </div>
      <div
        className="self-end rounded-2xl rounded-tr-sm bg-blue/35 px-3 py-2 text-[11px] text-blue"
        style={{ animation: "card-fade-up .35s ease .55s both" }}
      >
        Automate my support
      </div>
      <div
        className="self-start rounded-2xl rounded-tl-sm bg-blue/20 px-3 py-2 text-[11px] text-blue"
        style={{ animation: "card-fade-up .35s ease 1s both" }}
      >
        On it. Setting that up…
      </div>
      <div
        className="self-start flex items-center gap-1 px-3 py-1.5"
        style={{ animation: "card-fade-up .35s ease 1.4s both" }}
      >
        {[0, 0.2, 0.4].map((d) => (
          <span
            key={d}
            className="h-1.5 w-1.5 rounded-full bg-blue/50"
            style={{ animation: `card-pulse-dot 0.8s ease ${1.6 + d}s infinite` }}
          />
        ))}
      </div>
    </div>
  );
}

function AutomationBack() {
  return (
    <svg viewBox="0 0 160 64" className="w-full max-w-[170px]">
      {/* nodes */}
      {[20, 80, 140].map((cx, i) => (
        <g key={cx} style={{ animation: `card-node-in .3s ease ${i * 0.18}s both` }}>
          <circle cx={cx} cy="32" r="13" fill="none" stroke="oklch(0.62 0.22 260)" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx={cx} cy="32" r="5" fill="oklch(0.62 0.22 260)" fillOpacity="0.7" />
        </g>
      ))}
      {/* lines */}
      {[0, 1].map((i) => (
        <line key={i} x1={33 + i * 60} y1="32" x2={67 + i * 60} y2="32"
          stroke="oklch(0.62 0.22 260)" strokeWidth="1.2" strokeOpacity="0.35"
          strokeDasharray="4 3"
          style={{ animation: `card-draw-line .5s ease ${0.5 + i * 0.2}s both`, strokeDashoffset: 200 }}
        />
      ))}
      {/* travelling dots */}
      {[0, 1].map((i) => (
        <circle key={i} r="3" fill="oklch(0.72 0.18 260)"
          style={{
            animation: `card-travel 1.6s ease ${0.8 + i * 0.8}s infinite`,
            ["--travel-x" as string]: "60px",
            transform: `translate(${33 + i * 60}px, 32px)`,
          }}
        />
      ))}
    </svg>
  );
}

function IntegrationBack() {
  const nodes = [
    { cx: 80, cy: 32, r: 14, main: true },
    { cx: 20, cy: 12, r: 9 },
    { cx: 140, cy: 12, r: 9 },
    { cx: 20, cy: 52, r: 9 },
    { cx: 140, cy: 52, r: 9 },
  ];
  const lines = [
    { x1: 29, y1: 17, x2: 66, y2: 28 },
    { x1: 131, y1: 17, x2: 94, y2: 28 },
    { x1: 29, y1: 47, x2: 66, y2: 36 },
    { x1: 131, y1: 47, x2: 94, y2: 36 },
  ];
  return (
    <svg viewBox="0 0 160 64" className="w-full max-w-[170px]">
      {lines.map((l, i) => (
        <line key={i} {...l} stroke="oklch(0.62 0.22 260)" strokeWidth="1.2" strokeOpacity="0.3"
          strokeDasharray="40" strokeDashoffset="40"
          style={{ animation: `card-draw-line .5s ease ${0.3 + i * 0.12}s both` }}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i} style={{ animation: `card-node-in .3s ease ${i * 0.1}s both` }}>
          <circle cx={n.cx} cy={n.cy} r={n.r}
            fill={n.main ? "oklch(0.62 0.22 260 / 0.18)" : "oklch(0.62 0.22 260 / 0.1)"}
            stroke="oklch(0.62 0.22 260)" strokeWidth={n.main ? 1.5 : 1} strokeOpacity="0.5"
          />
          {n.main && <circle cx={n.cx} cy={n.cy} r="5" fill="oklch(0.62 0.22 260)" fillOpacity="0.8" />}
        </g>
      ))}
    </svg>
  );
}

function AdsBack() {
  const bars = [
    { h: 45, d: 0 }, { h: 68, d: 0.08 }, { h: 52, d: 0.16 },
    { h: 82, d: 0.24 }, { h: 62, d: 0.32 }, { h: 94, d: 0.40 },
  ];
  return (
    <div className="flex w-full max-w-[150px] flex-col gap-1.5">
      <div className="flex items-end gap-1.5" style={{ height: 64 }}>
        {bars.map((b, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{
              height: `${b.h}%`,
              background: `oklch(${0.52 + i * 0.03} 0.22 260 / 0.55)`,
              transformOrigin: "bottom",
              animation: `card-bar-rise 0.45s cubic-bezier(.34,1.56,.64,1) ${b.d}s both`,
            }}
          />
        ))}
      </div>
      <div className="h-px w-full bg-blue/20" />
    </div>
  );
}

function GTMBack() {
  return (
    <svg viewBox="0 0 160 72" className="w-full max-w-[170px]">
      {/* Grid */}
      {[18, 36, 54].map((y) => (
        <line key={y} x1="8" y1={y} x2="152" y2={y} stroke="oklch(0.62 0.22 260)" strokeWidth="0.5" strokeOpacity="0.15" />
      ))}
      {/* Trend line */}
      <polyline
        points="8,58 32,50 56,53 80,34 104,28 128,18 152,10"
        fill="none"
        stroke="oklch(0.62 0.22 260)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="500"
        strokeDashoffset="500"
        style={{ animation: "card-chart-line 1.4s ease .15s both" }}
      />
      {/* Data points */}
      {[[8,58],[32,50],[56,53],[80,34],[104,28],[128,18],[152,10]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="oklch(0.72 0.18 260)"
          style={{ animation: `card-node-in .25s ease ${0.2 + i * 0.18}s both` }}
        />
      ))}
      {/* Area fill */}
      <polygon
        points="8,58 32,50 56,53 80,34 104,28 128,18 152,10 152,68 8,68"
        fill="oklch(0.62 0.22 260)"
        fillOpacity="0.07"
        style={{ animation: "card-fade-up .6s ease .8s both" }}
      />
    </svg>
  );
}

/* ── Service data ─────────────────────────────────────── */

const services: Service[] = [
  {
    title: "Web Development",
    tag: "Build",
    desc: "Fast, modern websites and web apps built to convert. From landing pages to full platforms, shipped with speed and precision.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
      </svg>
    ),
    back: <WebDevBack />,
  },
  {
    title: "AI Integration",
    tag: "Intelligent",
    desc: "We embed AI into your existing workflows: support, ops, content. Powered by models that actually work for your business.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.6-3 6l-.5 4h-7L8 15c-1.7-1.4-3-3.5-3-6a7 7 0 0 1 7-7zM9 21h6" />
      </svg>
    ),
    back: <AIBack />,
  },
  {
    title: "Process Automation",
    tag: "Automate",
    desc: "Manual tasks are a tax on your team. We identify bottlenecks and automate them, saving hours every week across your operation.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    back: <AutomationBack />,
  },
  {
    title: "Systems Integration",
    tag: "Connect",
    desc: "Your tools should talk to each other. We connect your CRM, data, and platforms into a single source of truth.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    back: <IntegrationBack />,
  },
  {
    title: "Meta & Google Ads",
    tag: "Growth",
    desc: "Performance advertising that scales. We build, run, and optimise paid campaigns — from creative to ROAS-positive execution.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <path d="M3 3v18h18M7 14l4-4 4 4 5-5" />
      </svg>
    ),
    back: <AdsBack />,
  },
  {
    title: "GTM Engineering",
    tag: "Scale",
    desc: "Outbound campaigns and the tracking behind them. Proper attribution, analytics, and automation — so you know exactly what's working.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18M5.64 5.64l12.72 12.72M5.64 18.36L18.36 5.64" />
      </svg>
    ),
    back: <GTMBack />,
  },
];

/* ── Card ─────────────────────────────────────────────── */

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
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "relative",
        }}
      >
        {/* ── Front ── */}
        <article
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="group relative overflow-hidden rounded-[22px] border border-border-soft bg-background p-8 transition-shadow duration-300 hover:border-[color-mix(in_oklab,var(--blue)_30%,transparent)] hover:shadow-[0_24px_56px_color-mix(in_oklab,var(--navy)_8%,transparent)]"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            "--gx": "-600px",
            "--gy": "-600px",
          } as React.CSSProperties}
        >
          {/* Spotlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: "radial-gradient(circle 280px at var(--gx) var(--gy), color-mix(in oklab, var(--blue) 7%, transparent), transparent)" }}
          />
          {/* Watermark */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-2 select-none font-display font-bold leading-none text-text-base/[0.06] transition-colors duration-300 group-hover:text-text-base/[0.10]"
            style={{ fontSize: 96 }}
          >{num}</span>

          {/* Tag */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-text-light transition-colors duration-300 group-hover:border-[color-mix(in_oklab,var(--blue)_25%,transparent)] group-hover:text-blue">
              <span className="h-1 w-1 rounded-full bg-current" />
              {s.tag}
            </span>
          </div>

          {/* Icon */}
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-soft text-blue ring-1 ring-[color-mix(in_oklab,var(--blue)_15%,transparent)] transition-all duration-300 group-hover:shadow-[0_4px_16px_color-mix(in_oklab,var(--blue)_20%,transparent)]">
            {s.icon}
          </div>

          {/* Title */}
          <h3 className="mb-3 text-[20px] font-semibold leading-snug tracking-tight text-text-base transition-colors duration-200 group-hover:text-blue">
            {s.title}
          </h3>

          {/* Desc */}
          <p className="relative z-10 text-[14px] leading-[1.8] text-text-muted">
            {s.desc}
          </p>

          {/* Flip hint */}
          <div className="mt-5 flex items-center gap-1.5 text-[11px] text-text-light/60">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16" />
            </svg>
            <span>Click to explore</span>
          </div>

          {/* Bottom accent */}
          <div aria-hidden="true" className="absolute bottom-0 left-8 right-8 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-blue to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
        </article>

        {/* ── Back ── */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-between rounded-[22px] p-8"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "var(--why-card)",
            border: "1px solid var(--why-card-border)",
          }}
        >
          <p className="self-start text-[13px] font-semibold text-white/70">{s.title}</p>

          <div className="flex flex-1 items-center justify-center py-4">
            {flipped && s.back}
          </div>

          <p className="self-center text-[11px] text-white/25">tap to go back</p>
        </div>
      </div>
    </div>
  );
}

/* ── Section ──────────────────────────────────────────── */

export function Services() {
  return (
    <section id="services" className="bg-background px-6 py-32 md:px-[72px]">
      <SectionHead
        tag="What we do"
        title="Clarity is"
        accent="the strategy."
        sub="Six services. One team. No handoffs between agencies. The full stack of modern business growth under one roof."
      />
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <ServiceCard key={s.title} s={s} index={i} />
        ))}
      </div>
    </section>
  );
}
