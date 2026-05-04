import type { ReactNode } from "react";

const stroke = {
  fill: "none" as const, stroke: "currentColor", strokeWidth: 1.6,
  strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const items: { title: string; desc: string; icon: ReactNode }[] = [
  {
    title: "You're losing leads you don't know about.",
    desc: "Most sites and campaigns look fine on the surface but aren't built to convert. We audit your full funnel, find where visitors drop off, and fix the parts that are quietly costing you revenue.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>),
  },
  {
    title: "Your team is doing work that shouldn't exist.",
    desc: "Manual follow-ups, copy-pasted reports, tasks that fall through the cracks. We map the hours your team loses every week and replace that friction with systems that run without them.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>),
  },
  {
    title: "Your tools don't actually talk to each other.",
    desc: "A CRM that isn't fed by your ads. Forms that don't trigger follow-ups. Data scattered across spreadsheets no one trusts. We wire your stack together so nothing falls through the cracks.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>),
  },
  {
    title: "You're scaling into chaos, not out of it.",
    desc: "More clients, more complexity, more things slipping. Growth without infrastructure just creates bigger problems. We build the foundation that lets your business grow without burning your team.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>),
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
      style={{ background: "var(--why-card)", border: "1px solid var(--why-card-border)", "--gx": "-600px", "--gy": "-600px" } as React.CSSProperties}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle 260px at var(--gx) var(--gy), rgba(255,255,255,0.055), transparent)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 0 1px oklch(0.42 0.14 260)" }} />
      <div aria-hidden="true" className="absolute left-8 right-8 top-0 h-[1.5px] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "linear-gradient(to right, transparent, oklch(0.58 0.22 260), transparent)" }} />

      <span aria-hidden="true" className="pointer-events-none absolute right-5 top-2 select-none font-display font-bold leading-none transition-colors duration-300"
        style={{ fontSize: 88, color: "rgba(255,255,255,0.035)" }}>{num}</span>

      <div className="relative mb-6 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:shadow-[0_4px_20px_color-mix(in_oklab,var(--blue)_35%,transparent)]"
        style={{ background: "oklch(0.30 0.09 260)", color: "oklch(0.78 0.14 260)" }}>
        {item.icon}
      </div>

      <h4 className="mb-3 text-[18px] font-semibold leading-snug tracking-tight transition-colors duration-200"
        style={{ color: "rgba(255,255,255,0.92)" }}>{item.title}</h4>
      <p className="relative z-10 text-[14px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.50)" }}>{item.desc}</p>
    </div>
  );
}

export function Why() {
  return (
    <section id="why" className="px-6 pt-20 pb-20 md:px-[72px]" style={{ background: "var(--why-bg)" }}>
      <div className="mx-auto mb-10 max-w-[780px] text-center">
        <div className="mb-5 inline-flex items-center gap-2 text-[13px] font-medium" style={{ color: "oklch(0.72 0.15 260)" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          Why ClearScaler
        </div>
        <h2 className="mb-5 font-display font-medium leading-[1.05] tracking-[-0.035em]"
          style={{ fontSize: "clamp(36px, 5vw, 58px)", color: "rgba(255,255,255,0.95)" }}>
          Most growth problems aren't{" "}
          <span style={{ color: "oklch(0.72 0.15 260)" }}>strategy problems.</span>
        </h2>
        <p className="mx-auto max-w-[500px] text-[16px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.45)" }}>
          They're execution gaps. Here's what we find in almost every business we work with.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((item, i) => <WhyCard key={item.title} item={item} index={i} />)}
      </div>

      <p className="mx-auto mt-10 max-w-[560px] text-center text-[15px] leading-[1.9]" style={{ color: "rgba(255,255,255,0.28)" }}>
        We've walked into these problems across SaaS, B2B services, and e-commerce.{" "}
        <span style={{ color: "rgba(255,255,255,0.52)" }}>
          There's always a gap between where growth should be and where it is. That gap is where we work.
        </span>
      </p>
    </section>
  );
}
