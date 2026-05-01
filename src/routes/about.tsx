import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/clear/Nav";
import { CTA } from "@/components/clear/CTA";
import { Footer } from "@/components/clear/Footer";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const values = [
  {
    n: "01",
    title: "We move fast",
    desc: "Small focused team, direct communication, real output in days. No bureaucracy, no endless check-ins.",
  },
  {
    n: "02",
    title: "Focused on outcomes",
    desc: "We don't sell hours. We sell results. Every decision we make is tied directly to your business goals.",
  },
  {
    n: "03",
    title: "Full stack, one team",
    desc: "Web, ads, automation, AI. No handoffs between agencies. One team that owns the whole picture.",
  },
  {
    n: "04",
    title: "Built to scale with you",
    desc: "We build systems that compound. Not quick fixes. Foundations that grow in value over time.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-text-base antialiased">
      <Nav />
      <main>
        {/* Page header */}
        <section className="border-b border-border-soft bg-background px-6 pb-24 pt-[140px] text-center md:px-[72px]">
          <div className="mx-auto max-w-[720px]">
            <div className="mb-4 inline-flex items-center gap-2 text-[13px] font-medium text-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              About
            </div>
            <h1
              className="mb-5 font-display font-medium leading-[1.05] tracking-[-0.035em] text-text-base"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              A partner,{" "}
              <span className="text-blue">not a vendor.</span>
            </h1>
            <p className="mx-auto max-w-[540px] text-[18px] leading-[1.7] text-text-muted">
              Most agencies take your brief and disappear. We sit with you, think with you, and stay accountable to the outcome.
            </p>
          </div>
        </section>

        {/* Who we are */}
        <section className="bg-background px-6 py-24 md:px-[72px]">
          <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <div className="mb-4 text-[13px] font-medium uppercase tracking-[0.1em] text-blue">Who we are</div>
              <h2 className="mb-6 font-display text-[clamp(28px,3.5vw,42px)] font-medium leading-tight tracking-tight text-text-base">
                A small team with a big focus.
              </h2>
              <p className="mb-4 text-[16px] leading-[1.8] text-text-muted">
                clear.group is a B2B growth partner for companies that are serious about scaling. We're not a big agency — we're a focused team that moves fast, thinks clearly, and builds things that last.
              </p>
              <p className="text-[16px] leading-[1.8] text-text-muted">
                We've worked with SaaS, professional services, and e-commerce companies across Europe and beyond. The common thread: teams that were tired of agencies that didn't get it.
              </p>
            </div>
            <div>
              <div className="mb-4 text-[13px] font-medium uppercase tracking-[0.1em] text-blue">Our approach</div>
              <h2 className="mb-6 font-display text-[clamp(28px,3.5vw,42px)] font-medium leading-tight tracking-tight text-text-base">
                Outcomes, not deliverables.
              </h2>
              <p className="mb-4 text-[16px] leading-[1.8] text-text-muted">
                We don't sell hours. We don't invoice for Slack messages or status updates. Every engagement starts with a clear goal and ends with a measurable result.
              </p>
              <p className="text-[16px] leading-[1.8] text-text-muted">
                That's why we stay small: to stay accountable. When you win, we win.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 py-24 md:px-[72px]" style={{ background: "var(--why-bg)" }}>
          <div className="mx-auto max-w-[1080px]">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center gap-2 text-[13px] font-medium" style={{ color: "oklch(0.72 0.15 260)" }}>
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                How we work
              </div>
              <h2 className="font-display text-[clamp(30px,4vw,50px)] font-medium leading-tight tracking-tight" style={{ color: "rgba(255,255,255,0.92)" }}>
                What sets us apart.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.n}
                  className="rounded-[20px] p-8 transition-colors"
                  style={{ background: "var(--why-card)", border: "1px solid var(--why-card-border)" }}
                >
                  <div className="mb-4 font-display text-[32px] font-medium leading-none tracking-tight" style={{ color: "oklch(0.72 0.15 260)" }}>
                    {v.n}
                  </div>
                  <h3 className="mb-3 text-[18px] font-semibold tracking-tight" style={{ color: "rgba(255,255,255,0.90)" }}>
                    {v.title}
                  </h3>
                  <p className="text-[14px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.50)" }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
