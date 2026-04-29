import type { ReactNode } from "react";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const items: { title: string; desc: string; icon: ReactNode }[] = [
  {
    title: "We move fast",
    desc: "Small focused team, direct communication, real output in days. No bureaucracy, no endless check-ins.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    title: "Focused on outcomes",
    desc: "We don't sell hours. We sell results. Every decision we make is tied directly to your business goals.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Full stack, one team",
    desc: "Web, ads, automation, AI. No handoffs between agencies. One team that owns the whole picture.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: "Built to scale with you",
    desc: "We build systems that compound. Not quick fixes. Foundations that grow in value over time.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M3 3v18h18M7 14l4-4 4 4 5-5" />
      </svg>
    ),
  },
];

function WhyCard({ item, index }: { item: (typeof items)[0]; index: number }) {
  const num = String(index + 1).padStart(2, "0");

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
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
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative overflow-hidden rounded-[22px] p-8 transition-all duration-300 hover:-translate-y-1"
      style={
        {
          background: "oklch(0.22 0.055 260)",
          border: "1px solid oklch(0.30 0.07 260)",
          "--gx": "-600px",
          "--gy": "-600px",
        } as React.CSSProperties
      }
    >
      {/* Mouse spotlight — white glow on dark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle 260px at var(--gx) var(--gy), rgba(255,255,255,0.055), transparent)",
        }}
      />

      {/* Hover border glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: "inset 0 0 0 1px oklch(0.42 0.14 260)",
        }}
      />

      {/* Top accent line */}
      <div
        aria-hidden="true"
        className="absolute left-8 right-8 top-0 h-[1.5px] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.58 0.22 260), transparent)",
        }}
      />

      {/* Number watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-2 select-none font-display font-bold leading-none transition-colors duration-300"
        style={{ fontSize: 88, color: "rgba(255,255,255,0.035)" }}
      >
        {num}
      </span>

      {/* Icon */}
      <div
        className="relative mb-6 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:shadow-[0_4px_20px_color-mix(in_oklab,var(--blue)_35%,transparent)]"
        style={{
          background: "oklch(0.30 0.09 260)",
          color: "oklch(0.78 0.14 260)",
        }}
      >
        {item.icon}
      </div>

      {/* Title */}
      <h4
        className="mb-3 text-[19px] font-semibold leading-snug tracking-tight transition-colors duration-200"
        style={{ color: "rgba(255,255,255,0.92)" }}
      >
        {item.title}
      </h4>

      {/* Description */}
      <p className="relative z-10 text-[14px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.50)" }}>
        {item.desc}
      </p>
    </div>
  );
}

export function Why() {
  return (
    <section
      id="why"
      className="px-6 py-32 md:px-[72px]"
      style={{ background: "oklch(0.17 0.055 260)" }}
    >
      {/* ── Section header ── */}
      <div className="mx-auto mb-20 max-w-[860px] text-center">
        <div className="mb-5 inline-flex items-center gap-2 text-[13px] font-medium" style={{ color: "oklch(0.72 0.15 260)" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          Why clear.group
        </div>
        <h2
          className="mb-6 font-display font-medium leading-[1.05] tracking-[-0.035em]"
          style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "rgba(255,255,255,0.95)" }}
        >
          A partner,{" "}
          <span style={{ color: "oklch(0.72 0.15 260)" }}>not a vendor.</span>
        </h2>
        <p className="mx-auto max-w-[560px] text-[18px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.45)" }}>
          Most agencies take your brief and disappear. We sit with you, think with you, and stay accountable to the outcome.
        </p>
      </div>

      {/* ── Cards ── */}
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((item, i) => (
          <WhyCard key={item.title} item={item} index={i} />
        ))}
      </div>

      {/* ── Bottom statement ── */}
      <p
        className="mx-auto mt-20 max-w-[640px] text-center text-[15px] leading-[1.9]"
        style={{ color: "rgba(255,255,255,0.28)" }}
      >
        We've worked with B2B companies across SaaS, professional services, and e-commerce.{" "}
        <span style={{ color: "rgba(255,255,255,0.55)" }}>
          The common thread: teams that were tired of agencies that didn't get it.
        </span>
      </p>
    </section>
  );
}
