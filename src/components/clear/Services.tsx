import type { ReactNode } from "react";
import { SectionHead } from "./SectionHead";

type Service = {
  title: string;
  desc: string;
  icon: ReactNode;
  tag: string;
};

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

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
  },
];


function ServiceCard({ s, index }: { s: Service; index: number }) {
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
    <article
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative min-w-[76vw] flex-shrink-0 snap-start overflow-hidden rounded-[22px] border border-border-soft bg-background p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[color-mix(in_oklab,var(--blue)_30%,transparent)] hover:shadow-[0_24px_56px_color-mix(in_oklab,var(--navy)_8%,transparent)] sm:min-w-0 sm:flex-shrink sm:snap-align-none"
      style={
        {
          "--gx": "-600px",
          "--gy": "-600px",
        } as React.CSSProperties
      }
    >
      {/* ── Mouse spotlight ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle 280px at var(--gx) var(--gy), color-mix(in oklab, var(--blue) 7%, transparent), transparent)",
        }}
      />

      {/* ── Number watermark ── */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-2 select-none font-display font-bold leading-none text-text-base/[0.06] transition-colors duration-300 group-hover:text-text-base/[0.10]"
        style={{ fontSize: 96 }}
      >
        {num}
      </span>

      {/* ── Tag ── */}
      <div className="mb-6 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-text-light transition-colors duration-300 group-hover:border-[color-mix(in_oklab,var(--blue)_25%,transparent)] group-hover:text-blue">
          <span className="h-1 w-1 rounded-full bg-current" />
          {s.tag}
        </span>
      </div>

      {/* ── Icon ── */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-soft text-blue ring-1 ring-[color-mix(in_oklab,var(--blue)_15%,transparent)] transition-all duration-300 group-hover:bg-[color-mix(in_oklab,var(--blue)_12%,transparent)] group-hover:ring-[color-mix(in_oklab,var(--blue)_30%,transparent)] group-hover:shadow-[0_4px_16px_color-mix(in_oklab,var(--blue)_20%,transparent)]">
        {s.icon}
      </div>

      {/* ── Title ── */}
      <h3 className="mb-3 text-[20px] font-semibold leading-snug tracking-tight text-text-base transition-colors duration-200 group-hover:text-blue">
        {s.title}
      </h3>

      {/* ── Description ── */}
      <p className="relative z-10 text-[14px] leading-[1.8] text-text-muted">
        {s.desc}
      </p>

      {/* ── Bottom accent line ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-8 right-8 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-blue to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
      />
    </article>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-background py-32">
      <div className="px-6 md:px-[72px]">
        <SectionHead
          tag="What we do"
          title="Clarity is"
          accent="the strategy."
          sub="Six services. One team. No handoffs between agencies. The full stack of modern business growth under one roof."
        />
      </div>

      {/* Mobile: horizontal snap scroll; sm+: regular grid */}
      <div className="no-scrollbar -mx-0 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-auto sm:grid sm:max-w-[1280px] sm:grid-cols-2 sm:overflow-x-visible sm:px-6 sm:pb-0 lg:grid-cols-3 md:px-[72px]">
        {services.map((s, i) => (
          <ServiceCard key={s.title} s={s} index={i} />
        ))}
      </div>
    </section>
  );
}
