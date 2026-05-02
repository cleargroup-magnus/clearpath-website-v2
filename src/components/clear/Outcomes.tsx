const outcomes = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "More qualified leads",
    desc: "Websites and campaigns built to convert visitors, not just impress them.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
    title: "Less manual work",
    desc: "Automation that saves your team hours every week.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </svg>
    ),
    title: "Clear visibility",
    desc: "Know what's working, what's not, and where to focus next.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18M7 14l4-4 4 4 5-5" />
      </svg>
    ),
    title: "Systems that scale",
    desc: "Build once. Improve continuously. Grow without chaos.",
  },
];

export function Outcomes() {
  return (
    <section className="bg-bg-soft px-6 py-20 md:px-[72px]">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-display text-[clamp(24px,3vw,38px)] font-medium leading-tight tracking-tight text-text-base">
            Everything working together{" "}
            <span className="text-blue">to grow your business.</span>
          </h2>
          <p className="mx-auto max-w-[480px] text-[16px] leading-[1.7] text-text-muted">
            No disconnected tools. No wasted effort. One system built to generate results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o) => (
            <div
              key={o.title}
              className="flex flex-col gap-4 rounded-[18px] border border-border-soft bg-background p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--blue)_25%,transparent)] hover:shadow-[0_12px_32px_color-mix(in_oklab,var(--navy)_6%,transparent)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-soft text-blue ring-1 ring-[color-mix(in_oklab,var(--blue)_15%,transparent)]">
                {o.icon}
              </div>
              <div>
                <h3 className="mb-1.5 text-[15px] font-semibold tracking-tight text-text-base">
                  {o.title}
                </h3>
                <p className="text-[13px] leading-[1.7] text-text-muted">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
