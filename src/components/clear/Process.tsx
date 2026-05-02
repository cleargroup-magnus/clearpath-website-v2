import { SectionHead } from "./SectionHead";

const steps = [
  {
    n: "01",
    title: "Discovery call",
    time: "30 min · Free · No pitch",
    desc: "You get clarity on your current setup and biggest opportunities. No sales deck, no pressure. Just an honest conversation.",
  },
  {
    n: "02",
    title: "Growth plan",
    time: "Clear priorities and timeline",
    desc: "We show you exactly what to focus on for the highest impact. Scoped, costed, and ready to execute.",
  },
  {
    n: "03",
    title: "Build & launch",
    time: "Weeks, not months",
    desc: "We execute fast and get everything live. New site, campaign, automation. All shipped with precision.",
  },
  {
    n: "04",
    title: "Optimise & scale",
    time: "Ongoing partnership",
    desc: "We improve performance and grow with you over time. Double down on what works, cut what doesn't.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-navy px-6 py-32 md:px-[72px]">
      <SectionHead
        variant="dark"
        tag="How it works"
        title="From first call to"
        accent="real results. Fast."
        sub="No guesswork. No wasted months. A clear, tested process from first conversation to ongoing growth."
      />
      <div className="relative mx-auto max-w-[1280px]">
        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-[20px] border border-white/10 bg-navy p-8 transition-colors hover:border-blue-light/35 hover:bg-blue-light/[0.06]"
            >
              <div className="mb-5 font-display text-[38px] font-medium leading-none tracking-[-0.03em] text-blue-light">
                {s.n}
              </div>
              <h3 className="mb-2 text-[17px] font-semibold tracking-tight text-white">
                {s.title}
              </h3>
              <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.08em] text-blue-light/70">
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
