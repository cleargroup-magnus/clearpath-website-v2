import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/clear/Nav";
import { Footer } from "@/components/clear/Footer";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-text-base antialiased">
      <Nav />
      <main>
        {/* Page header */}
        <section className="border-b border-border-soft bg-background px-6 pb-16 pt-[130px] md:px-[72px]">
          <div className="mx-auto max-w-[720px]">
            <div className="mb-4 inline-flex items-center gap-2 text-[13px] font-medium text-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              About
            </div>
            <h1
              className="mb-5 font-display font-medium leading-[1.05] tracking-[-0.035em] text-text-base"
              style={{ fontSize: "clamp(34px, 5vw, 56px)" }}
            >
              Two people who got tired of watching good businesses{" "}
              <span className="text-blue">get let down.</span>
            </h1>
            <p className="max-w-[580px] text-[17px] leading-[1.75] text-text-muted">
              ClearScaler is Kian and Magnus. We built this because we kept seeing the same thing: smart companies stuck not for lack of ideas, but because nothing was connected, nothing was moving.
            </p>
          </div>
        </section>

        {/* Who we are */}
        <section className="bg-background px-6 py-16 md:px-[72px]">
          <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-blue">Kian</div>
              <p className="mb-4 text-[16px] leading-[1.8] text-text-muted">
                Kian brings the systems thinking. He's obsessive about automation, data flow, and building infrastructure that scales. His instinct is always: what's the process, and how do we make it run without anyone touching it?
              </p>
              <p className="text-[16px] leading-[1.8] text-text-muted">
                He's spent years building workflows for B2B companies that didn't know how many hours they were wasting until the problem disappeared.
              </p>
            </div>
            <div>
              <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-blue">Magnus</div>
              <p className="mb-4 text-[16px] leading-[1.8] text-text-muted">
                Magnus runs the growth side. Web, ads, GTM strategy, outbound. He cares about one thing: whether what we're building is actually bringing in revenue. Not impressions, not traffic. Revenue.
              </p>
              <p className="text-[16px] leading-[1.8] text-text-muted">
                He's the one who'll tell you the uncomfortable truth about why your campaign isn't converting, and exactly what to do about it.
              </p>
            </div>
          </div>
        </section>

        {/* Why we started */}
        <section className="border-t border-border-soft bg-bg-soft px-6 py-16 md:px-[72px]">
          <div className="mx-auto max-w-[720px]">
            <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-blue">Why we started</div>
            <h2 className="mb-6 font-display text-[clamp(24px,3vw,38px)] font-medium leading-tight tracking-tight text-text-base">
              We got tired of seeing the same gap.
            </h2>
            <div className="space-y-4 text-[16px] leading-[1.8] text-text-muted">
              <p>
                Every business we worked with before starting ClearScaler had the same problem underneath. Marketing running in one corner, ops in another, no one sure what was actually working. Agencies delivering reports instead of results. Tools that were "integrated" but never really talking.
              </p>
              <p>
                We started ClearScaler to be the team that sits in the middle of all of it. Not a web agency, not a media buyer, not an automation shop. One team that owns the whole picture and stays accountable to what matters: growth.
              </p>
              <p>
                We work with a small number of clients at a time. That's not a limitation. It's the point.
              </p>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="px-6 py-16 md:px-[72px]" style={{ background: "var(--why-bg)" }}>
          <div className="mx-auto max-w-[1080px]">
            <div className="mb-10">
              <div className="mb-3 inline-flex items-center gap-2 text-[12px] font-medium" style={{ color: "oklch(0.72 0.15 260)" }}>
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                How we work
              </div>
              <h2 className="font-display text-[clamp(24px,3vw,38px)] font-medium leading-tight tracking-tight" style={{ color: "rgba(255,255,255,0.92)" }}>
                A few principles we don't compromise on.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  title: "We tell you what we actually think.",
                  desc: "If something isn't working, we say it. We'd rather have a hard conversation early than report good-looking numbers on something that isn't moving the needle.",
                },
                {
                  title: "We move fast and stay close.",
                  desc: "Small team, direct communication. You're talking to the people doing the work, not an account manager who'll relay your feedback three days later.",
                },
                {
                  title: "We care about revenue, not deliverables.",
                  desc: "We don't invoice for Slack messages. Every decision we make traces back to leads, revenue, or efficiency. That's the only scorecard we use.",
                },
                {
                  title: "We build things that last.",
                  desc: "Quick fixes don't interest us. We'd rather take a bit longer and build something that compounds. Systems you're still benefiting from in two years.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="rounded-[18px] p-7 transition-colors"
                  style={{ background: "var(--why-card)", border: "1px solid var(--why-card-border)" }}
                >
                  <h3 className="mb-3 text-[16px] font-semibold tracking-tight" style={{ color: "rgba(255,255,255,0.90)" }}>
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

        {/* CTA strip */}
        <section className="border-t border-border-soft bg-background px-6 py-14 md:px-[72px]">
          <div className="mx-auto flex max-w-[1080px] flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="mb-1 text-[22px] font-semibold tracking-tight text-text-base">
                Want to work together?
              </h2>
              <p className="text-[15px] text-text-muted">
                Start with a free intro call. No pitch, just a real conversation.
              </p>
            </div>
            <a
              href="https://calendly.com/magnus-clearcruit/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-blue px-7 py-[13px] text-[14px] font-medium text-white transition-all hover:-translate-y-px hover:bg-[oklch(0.55_0.22_260)]"
            >
              Book an intro call
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
