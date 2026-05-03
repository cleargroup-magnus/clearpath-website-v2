import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/clear/Nav";
import { Footer } from "@/components/clear/Footer";
import { GTMAnim } from "@/components/clear/ServiceAnimations";

export const Route = createFileRoute("/services/gtm-engineering")({
  component: GTMEngineeringPage,
});

function GTMEngineeringPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-text-base antialiased">
      <Nav />
      <main>

        {/* 1. HERO */}
        <section style={{ background: "var(--why-bg)" }} className="px-6 pt-[120px] pb-20 md:px-[72px]">
          <div className="mx-auto max-w-[1160px]">
            <Link to="/" hash="services" className="mb-10 inline-flex items-center gap-2 text-[12px] text-white/40 transition-colors hover:text-white/70">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All services
            </Link>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="mb-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em]"
                  style={{ background: "oklch(0.62 0.22 260 / 0.15)", color: "oklch(0.72 0.18 260)", border: "1px solid oklch(0.62 0.22 260 / 0.25)" }}>
                  <span className="h-1 w-1 rounded-full bg-current" /> Scale
                </span>
                <h1 style={{ color: "rgba(255,255,255,0.95)", fontSize: "clamp(36px,5vw,58px)" }}
                  className="mb-5 font-display font-medium leading-[1.08] tracking-[-0.03em]">
                  Reach the right people before your competition does.
                </h1>
                <p className="mb-8 text-[17px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  We build outbound systems using Clay, Apollo, n8n, Instantly, and Lemlist that identify high-intent prospects and reach them with the right message at the right time.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://calendly.com/magnus-clearcruit/30min" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium text-white transition-all hover:-translate-y-px"
                    style={{ background: "oklch(0.52 0.22 260)", boxShadow: "0 4px 20px oklch(0.52 0.22 260 / 0.35)" }}>
                    Book an intro call
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="rounded-[28px] p-8 flex items-center justify-center"
                style={{ background: "var(--why-card)", border: "1px solid var(--why-card-border)", minHeight: 340 }}>
                <GTMAnim active={true} />
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROBLEM */}
        <section className="bg-background px-6 py-20 md:px-[72px]">
          <div className="mx-auto max-w-[1080px]">
            <div className="mb-10">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-blue">The problem</div>
              <h2 className="text-[clamp(24px,3vw,36px)] font-display font-medium tracking-tight text-text-base leading-tight">
                Manual outbound doesn't scale. Spray-and-pray outbound doesn't convert.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                {
                  title: "Outreach that feels like spam",
                  desc: "Generic cold emails sent at scale don't work anymore. Buyers ignore them. The only outbound that lands is relevant, timely, and specific. That requires data and automation to do at scale.",
                },
                {
                  title: "Your pipeline depends on you",
                  desc: "When outbound is manual, pipeline depends on someone remembering to do it. It stops when that person is busy. A proper GTM system runs whether you are watching or not.",
                },
                {
                  title: "No buying signal detection",
                  desc: "Most teams reach out to companies because they fit a profile. The best teams reach out when those companies are showing signs of intent. That is the difference between cold and warm.",
                },
              ].map((p) => (
                <div key={p.title} className="rounded-[18px] border border-border-soft bg-bg-soft p-6">
                  <h3 className="mb-2 text-[15px] font-semibold text-text-base">{p.title}</h3>
                  <p className="text-[14px] leading-[1.75] text-text-muted">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. HOW WE WORK */}
        <section className="bg-bg-soft px-6 py-20 md:px-[72px]">
          <div className="mx-auto max-w-[1080px]">
            <div className="mb-10">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-blue">How we work</div>
              <h2 className="text-[clamp(24px,3vw,36px)] font-display font-medium tracking-tight text-text-base leading-tight">
                We build the infrastructure, then we wire it together.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "01", title: "ICP and signal mapping", desc: "We define your ideal customer profile and identify the signals that indicate they are in-market: job changes, funding, tech stack changes, website visits." },
                { n: "02", title: "Stack setup", desc: "We configure Clay, Apollo, and your CRM. We build the enrichment workflows that turn a company name into a fully researched, personalised outreach record." },
                { n: "03", title: "Sequence and automation", desc: "We build multi-step sequences in Instantly or Lemlist and connect them to your enrichment workflow via n8n so outreach triggers automatically when signals fire." },
                { n: "04", title: "Measure and refine", desc: "We track reply rates, meeting rates, and pipeline generated. We refine targeting, copy, and timing until the system consistently produces meetings." },
              ].map((step) => (
                <div key={step.n} className="relative rounded-[18px] border border-border-soft bg-background p-6">
                  <div className="mb-4 font-display text-[28px] font-medium leading-none text-blue/30">{step.n}</div>
                  <h3 className="mb-2 text-[15px] font-semibold tracking-tight text-text-base">{step.title}</h3>
                  <p className="text-[13px] leading-[1.75] text-text-muted">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. OUTCOMES */}
        <section className="bg-background px-6 py-20 md:px-[72px]">
          <div className="mx-auto max-w-[1080px]">
            <div className="mb-10">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-blue">What you get</div>
              <h2 className="text-[clamp(24px,3vw,36px)] font-display font-medium tracking-tight text-text-base leading-tight">
                A pipeline machine that runs without a full-time SDR.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { title: "Consistent meetings in your calendar", desc: "The system identifies prospects, enriches them, personalises the outreach, and sends it. You show up to the meetings." },
                { title: "Outreach that feels relevant", desc: "Personalisation at scale using real data: recent funding, new hires, tech stack, content they published. Not just first-name merge tags." },
                { title: "Buying signal targeting", desc: "You reach prospects at the moment they are most likely to be open to a conversation, not just when your schedule allows." },
                { title: "Pipeline that does not depend on headcount", desc: "The system scales without hiring. More volume means adjusting sequences and signals, not adding SDRs." },
              ].map((o) => (
                <div key={o.title} className="flex items-start gap-4 rounded-[16px] border border-border-soft bg-bg-soft p-5">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-soft text-blue">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-[14px] font-semibold text-text-base">{o.title}</h3>
                    <p className="text-[13px] leading-[1.7] text-text-muted">{o.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CTA */}
        <section style={{ background: "var(--why-bg)" }} className="px-6 py-16 md:px-[72px]">
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="mb-4 font-display text-[clamp(24px,3.5vw,40px)] font-medium tracking-tight" style={{ color: "rgba(255,255,255,0.95)" }}>
              Ready to build a pipeline that runs on autopilot?
            </h2>
            <p className="mb-8 text-[16px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.45)" }}>
              Book a free intro call. We will audit your current outbound setup and show you how to wire it into a system.
            </p>
            <a href="https://calendly.com/magnus-clearcruit/30min" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[15px] font-medium text-navy transition-all hover:-translate-y-px hover:bg-blue-soft hover:text-blue">
              Book your free intro call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
