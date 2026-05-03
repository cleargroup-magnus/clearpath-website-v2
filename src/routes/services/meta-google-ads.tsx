import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/clear/Nav";
import { Footer } from "@/components/clear/Footer";
import { AdsAnim } from "@/components/clear/ServiceAnimations";

export const Route = createFileRoute("/services/meta-google-ads")({
  component: MetaGoogleAdsPage,
});

function MetaGoogleAdsPage() {
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
                  <span className="h-1 w-1 rounded-full bg-current" /> Growth
                </span>
                <h1 style={{ color: "rgba(255,255,255,0.95)", fontSize: "clamp(36px,5vw,58px)" }}
                  className="mb-5 font-display font-medium leading-[1.08] tracking-[-0.03em]">
                  Stop buying clicks. Start reaching buyers.
                </h1>
                <p className="mb-8 text-[17px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  We build Meta and Google ad systems focused on one thing: generating leads that convert into revenue, not metrics that look good in reports.
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
                <AdsAnim active={true} />
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
                Most paid ad spend produces data, not results.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                {
                  title: "Optimising for the wrong thing",
                  desc: "Clicks, reach, and impressions are easy to grow. Qualified pipeline is harder. Most campaigns are set up to hit platform metrics, not business goals.",
                },
                {
                  title: "No connection between ads and revenue",
                  desc: "If you can't trace a closed deal back to a specific ad, audience, or campaign, you are flying blind. Budget allocation without attribution is guesswork.",
                },
                {
                  title: "Landing pages that kill conversions",
                  desc: "Even well-targeted ads fail when the landing page doesn't match the audience's intent. The ad and the destination need to work as one system.",
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
                Strategy, creative, tracking, and optimisation as one system.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "01", title: "Audience and strategy", desc: "We define who we are targeting, what message will land, and what a qualified conversion looks like for your business." },
                { n: "02", title: "Creative and copy", desc: "We develop ad creative and copy tested against your audience. What we assume will work and what actually works are often different things." },
                { n: "03", title: "Setup and attribution", desc: "Pixel, conversions API, GA4, and CRM integration. Every click tracked back to a result." },
                { n: "04", title: "Optimise and scale", desc: "We cut what is not working and scale what is. Every week, the system gets more efficient." },
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
                A paid channel that generates predictable pipeline.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { title: "Qualified leads, not just form fills", desc: "We optimise for the leads that convert to clients, not just volume. Quality over quantity in audience targeting and creative." },
                { title: "Full attribution clarity", desc: "You know which campaign, which ad, and which audience produced each lead and each closed deal." },
                { title: "Improving cost per lead over time", desc: "As we accumulate data and optimise, your cost per qualified lead comes down while volume goes up." },
                { title: "A system you own and understand", desc: "No black-box agency retainers. You understand what is running, why, and what it is producing." },
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
              Ready to build a paid channel that actually pays back?
            </h2>
            <p className="mb-8 text-[16px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.45)" }}>
              Book a free intro call. We will audit your current ad setup and show you where the budget is being wasted.
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
