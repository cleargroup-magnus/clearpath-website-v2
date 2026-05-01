import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/clear/Nav";
import { Footer } from "@/components/clear/Footer";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-text-base antialiased">
      <Nav />
      <main>
        {/* Page header */}
        <section className="border-b border-border-soft bg-background px-6 pb-20 pt-[140px] text-center md:px-[72px]">
          <div className="mx-auto max-w-[600px]">
            <div className="mb-4 inline-flex items-center gap-2 text-[13px] font-medium text-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              Contact
            </div>
            <h1
              className="mb-5 font-display font-medium leading-[1.05] tracking-[-0.035em] text-text-base"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              Let's talk{" "}
              <span className="text-blue">growth.</span>
            </h1>
            <p className="text-[18px] leading-[1.7] text-text-muted">
              One conversation is all it takes to get a clear picture of what's possible for your business.
            </p>
          </div>
        </section>

        {/* Contact options */}
        <section className="px-6 py-24 md:px-[72px]">
          <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Book a call */}
            <a
              href="https://calendly.com/magnus-clearcruit/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-5 rounded-[24px] border border-border-soft bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--blue)_30%,transparent)] hover:shadow-[0_20px_50px_color-mix(in_oklab,var(--navy)_8%,transparent)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-soft text-blue ring-1 ring-[color-mix(in_oklab,var(--blue)_15%,transparent)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
              <div>
                <h2 className="mb-2 text-[20px] font-semibold tracking-tight text-text-base group-hover:text-blue transition-colors duration-200">
                  Book a discovery call
                </h2>
                <p className="mb-4 text-[14px] leading-[1.7] text-text-muted">
                  30 minutes, free, no pitch. We'll learn your current position and biggest blockers, and you'll leave with a clear picture of next steps.
                </p>
                <div className="inline-flex items-center gap-2 text-[13px] font-medium text-blue">
                  Schedule on Calendly
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:magnus@clearcruit.com"
              className="group flex flex-col gap-5 rounded-[24px] border border-border-soft bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--blue)_30%,transparent)] hover:shadow-[0_20px_50px_color-mix(in_oklab,var(--navy)_8%,transparent)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-soft text-blue ring-1 ring-[color-mix(in_oklab,var(--blue)_15%,transparent)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h2 className="mb-2 text-[20px] font-semibold tracking-tight text-text-base group-hover:text-blue transition-colors duration-200">
                  Send us an email
                </h2>
                <p className="mb-4 text-[14px] leading-[1.7] text-text-muted">
                  Prefer async? Drop us a line and we'll get back to you within one business day. Tell us what you're working on.
                </p>
                <div className="inline-flex items-center gap-2 text-[13px] font-medium text-blue">
                  magnus@clearcruit.com
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* What to expect */}
          <div className="mx-auto mt-16 max-w-[900px] rounded-[20px] border border-border-soft bg-bg-soft p-10">
            <div className="mb-6 text-[13px] font-medium uppercase tracking-[0.1em] text-text-light">What to expect</div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { n: "01", title: "Discovery call", desc: "30 min. No pitch. Just an honest conversation about where you are and where you want to be." },
                { n: "02", title: "Growth audit", desc: "We map your stack, marketing, and ops — and show you exactly where the biggest impact is." },
                { n: "03", title: "Clear proposal", desc: "A scoped plan with timeline and pricing. No ambiguity, no surprises." },
              ].map((s) => (
                <div key={s.n} className="flex flex-col gap-2">
                  <div className="font-display text-[28px] font-medium leading-none tracking-tight text-blue">{s.n}</div>
                  <h3 className="text-[15px] font-semibold tracking-tight text-text-base">{s.title}</h3>
                  <p className="text-[13px] leading-[1.7] text-text-muted">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
