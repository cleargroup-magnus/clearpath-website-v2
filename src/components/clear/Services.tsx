import type { ReactNode } from "react";

type Service = { title: string; desc: string; icon: ReactNode };

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const services: Service[] = [
  {
    title: "Web Development",
    desc: "Fast, modern websites and web apps built to convert. From landing pages to full platforms, shipped with speed and precision.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
      </svg>
    ),
  },
  {
    title: "AI Integration",
    desc: "We embed AI into your existing workflows: support, ops, content. Powered by models that actually work for your business.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.6-3 6l-.5 4h-7L8 15c-1.7-1.4-3-3.5-3-6a7 7 0 0 1 7-7zM9 21h6" />
      </svg>
    ),
  },
  {
    title: "Process Automation",
    desc: "Manual tasks are a tax on your team. We identify bottlenecks and automate them, saving hours every week across your operation.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Systems Integration",
    desc: "Your tools should talk to each other. We connect your CRM, data, and platforms into a single source of truth.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: "Meta & Google Ads",
    desc: "Performance advertising that scales. We build, run, and optimise paid campaigns, from creative to ROAS-positive execution.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M3 3v18h18M7 14l4-4 4 4 5-5" />
      </svg>
    ),
  },
  {
    title: "GTM Engineering",
    desc: "We build outbound campaigns and the tracking behind them. Proper attribution, analytics, and automation so you know exactly what's working and where every pound of ad spend is going.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18M5.64 5.64l12.72 12.72M5.64 18.36L18.36 5.64" />
      </svg>
    ),
  },
];

import { SectionHead } from "./SectionHead";

export function Services() {
  return (
    <section id="services" className="bg-background px-6 py-32 md:px-[72px]">
      <SectionHead
        tag="What we do"
        title="Clarity is"
        accent="the strategy."
        sub="Six services. One team. No handoffs between agencies. The full stack of modern business growth under one roof."
      />
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="rounded-[20px] border border-border-soft bg-background p-9"
            style={{ transition: "transform 0.18s ease, box-shadow 0.2s ease" }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              e.currentTarget.style.transform = `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateY(-6px) scale(1.02)`;
              e.currentTarget.style.boxShadow = `${x * -18}px ${y * -18}px 36px color-mix(in oklab, var(--navy) 8%, transparent), 0 20px 44px color-mix(in oklab, var(--navy) 7%, transparent)`;
              e.currentTarget.style.borderColor = "transparent";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
              e.currentTarget.style.borderColor = "";
            }}
          >
            <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-soft text-blue">
              {s.icon}
            </div>
            <h3 className="mb-2.5 text-[19px] font-semibold tracking-tight text-navy">
              {s.title}
            </h3>
            <p className="text-[14px] leading-[1.7] text-text-muted">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}