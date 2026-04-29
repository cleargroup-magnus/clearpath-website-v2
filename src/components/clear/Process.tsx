import { SectionHead } from "./SectionHead";

const steps = [
  { n: "01", title: "Discovery call", time: "30 min, free, no pitch", desc: "We learn your current position, goals, and biggest blockers. No pitch, just an honest conversation." },
  { n: "02", title: "Growth audit", time: "Scope and timeframe mapped", desc: "We audit your stack, marketing, and operations, map out where we can have the biggest impact, and set a clear timeframe for delivery." },
  { n: "03", title: "Build & launch", time: "Shipped, not stalled", desc: "We execute. New site, ad campaign, automation. We ship in weeks, not months." },
  { n: "04", title: "Scale & optimise", time: "Ongoing partnership", desc: "We double down on what works and cut what doesn't. Ongoing partnership: we grow when you grow." },
];

export function Process() {
  return (
    <section id="process" className="bg-navy px-6 py-32 md:px-[72px]">
      <SectionHead
        variant="dark"
        tag="How we work"
        title="Built to grow."
        accent="Wired to scale."
        sub="No guesswork. No wasted months. A clear, tested process from first conversation to ongoing growth."
      />
      <div className="relative mx-auto max-w-[1280px]">
        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.n}
            className="relative rounded-[20px] border border-white/10 bg-navy p-8 transition-colors hover:border-blue-light/35 hover:bg-blue-light/[0.06]"
          >
            <div className="mb-6 font-display text-[38px] font-medium leading-none tracking-[-0.03em] text-blue-light">
              {s.n}
            </div>
            <h3 className="mb-2.5 text-[17px] font-semibold tracking-tight text-white">
              {s.title}
            </h3>
            <div className="mb-2.5 text-[12px] font-medium uppercase tracking-[0.08em] text-blue-light">
              {s.time}
            </div>
            <p className="text-[14px] leading-[1.7] text-white/50">{s.desc}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}