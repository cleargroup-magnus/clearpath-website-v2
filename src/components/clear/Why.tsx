import type { ReactNode } from "react";
import { SectionHead } from "./SectionHead";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const items: { title: string; desc: string; icon: ReactNode }[] = [
  {
    title: "We move fast",
    desc: "Small focused team, direct communication, real output in days. No bureaucracy, no endless check-ins.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    title: "Focused on outcomes",
    desc: "We don't sell hours. We sell results. Every decision we make is tied directly to your business goals.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
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
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: "Built to scale with you",
    desc: "We build systems that compound. Not quick fixes. Foundations that grow in value over time.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <path d="M3 3v18h18M7 14l4-4 4 4 5-5" />
      </svg>
    ),
  },
];

export function Why() {
  return (
    <section id="why" className="bg-bg-soft px-6 py-32 md:px-[72px]">
      <SectionHead
        tag="Why clear.group"
        title="A partner,"
        accent="not a vendor."
        sub="Most agencies take your brief and disappear. We sit with you, think with you, and stay accountable to the outcome."
      />
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((i) => (
          <div
            key={i.title}
            className="flex gap-6 rounded-[20px] border border-border-soft bg-background p-9"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
              {i.icon}
            </div>
            <div>
              <h4 className="mb-2 text-[18px] font-semibold tracking-tight text-navy">
                {i.title}
              </h4>
              <p className="text-[14px] leading-[1.7] text-text-muted">{i.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}