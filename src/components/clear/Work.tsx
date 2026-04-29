import { SectionHead } from "./SectionHead";

const projects = [
  {
    name: "Project One",
    desc: "Full website rebuild and growth automation.",
    gradient: "linear-gradient(135deg, var(--navy), var(--blue))",
  },
  {
    name: "Project Two",
    desc: "Paid acquisition engine and attribution stack.",
    gradient:
      "linear-gradient(135deg, var(--blue), color-mix(in oklab, var(--blue-light) 80%, var(--navy)))",
  },
  {
    name: "Project Three",
    desc: "AI-powered ops automation across the funnel.",
    gradient:
      "linear-gradient(135deg, color-mix(in oklab, var(--navy) 70%, var(--blue)), var(--blue-light))",
  },
];

export function Work() {
  return (
    <section id="work" className="bg-background px-6 py-32 md:px-[72px]">
      <SectionHead
        tag="Recent work"
        title="Work in"
        accent="motion."
        sub="A few recent projects. More coming soon."
      />
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group overflow-hidden rounded-[20px] border border-border-soft bg-background transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-[0_16px_40px_color-mix(in_oklab,var(--navy)_10%,transparent)]"
          >
            <div
              className="relative h-[140px] w-full overflow-hidden"
              style={{ background: p.gradient }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-50 blur-3xl"
                style={{ background: "color-mix(in oklab, var(--blue-light) 60%, transparent)" }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-40 blur-3xl"
                style={{ background: "color-mix(in oklab, var(--navy) 70%, transparent)" }}
              />
            </div>
            <div className="p-7">
              <h3 className="mb-2 text-[19px] font-semibold tracking-tight text-navy">
                {p.name}
              </h3>
              <p className="mb-5 text-[14px] leading-[1.7] text-text-muted">{p.desc}</p>
              <div className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.08em] text-blue">
                <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                Case study coming soon
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
