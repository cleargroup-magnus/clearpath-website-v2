import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/clear/Nav";
import { Footer } from "@/components/clear/Footer";
import { WebDevAnim } from "@/components/clear/ServiceAnimations";

export const Route = createFileRoute("/services/web-development")({
  component: WebDevelopmentPage,
});

function WebDevelopmentPage() {
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
                  <span className="h-1 w-1 rounded-full bg-current" /> Build
                </span>
                <h1 style={{ color: "rgba(255,255,255,0.95)", fontSize: "clamp(36px,5vw,58px)" }}
                  className="mb-5 font-display font-medium leading-[1.08] tracking-[-0.03em]">
                  Fast, modern websites that turn visitors into leads.
                </h1>
                <p className="mb-8 text-[17px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  We build websites that make your business look credible and work hard to convert traffic into enquiries.
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
                style={{ background: "var(--why-card)", border: "1px solid var(--why-card-border)", minHeight: 360 }}>
                <WebDevAnim active={true} />
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
                Most websites cost money without making money.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                {
                  title: "Looks fine, converts badly",
                  desc: "Your site might look modern but if visitors can't figure out what you do or why they should care in 5 seconds, they leave. Design without strategy is expensive decoration.",
                },
                {
                  title: "Slow and technically broken",
                  desc: "A slow site loses you rankings and visitors. Most sites we audit have Core Web Vitals issues, broken tracking, and no SEO foundation.",
                },
                {
                  title: "Built to impress, not to sell",
                  desc: "Agencies optimise for award-winning design. We optimise for enquiries. Those are very different briefs.",
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
                From strategy to live in weeks.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "01", title: "Discovery", desc: "We learn your business, audience, and goals. What does your ideal client need to see to take action?" },
                { n: "02", title: "Strategy and copy", desc: "We write the copy and plan the structure before we design a single page. Conversion comes from clarity." },
                { n: "03", title: "Design and build", desc: "Custom design, fast performance, clean code. Built to rank, load fast, and hold attention." },
                { n: "04", title: "Launch and improve", desc: "We go live and track what happens. Then we keep improving based on real data." },
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
                A website that works as hard as you do.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { title: "More inbound enquiries", desc: "Visitors who land on your site understand what you do and what to do next. The right ones convert." },
                { title: "A credible first impression", desc: "Clients research you before they talk to you. Your website is your first pitch." },
                { title: "Built for SEO from day one", desc: "Fast load times, proper structure, and clean code that search engines can read and rank." },
                { title: "Owned by your team", desc: "We build on systems your team can update. No dependency on us for every small change." },
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
              Ready to build a site that actually converts?
            </h2>
            <p className="mb-8 text-[16px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.45)" }}>
              Start with a free intro call. We will look at your current site and tell you exactly what's holding it back.
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
