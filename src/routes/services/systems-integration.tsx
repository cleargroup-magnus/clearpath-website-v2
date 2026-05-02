import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/clear/Nav";
import { CTA } from "@/components/clear/CTA";
import { Footer } from "@/components/clear/Footer";
import { IntegrationAnim } from "@/components/clear/ServiceAnimations";

export const Route = createFileRoute("/services/systems-integration")({
  component: SystemsIntegrationPage,
});

function SystemsIntegrationPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-text-base antialiased">
      <Nav />
      <main>
        {/* Hero */}
        <section className="px-6 pt-[100px] pb-16 md:px-[72px]">
          <div className="mx-auto max-w-[1080px]">
            {/* Back link */}
            <Link
              to="/"
              hash="services"
              className="mb-8 inline-flex items-center gap-2 text-[13px] text-text-muted transition-colors hover:text-text-base"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to services
            </Link>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              {/* Left: content */}
              <div>
                {/* Tag pill */}
                <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-border-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-text-light">
                  <span className="h-1 w-1 rounded-full bg-current" />
                  Connect
                </span>

                <h1 className="mb-5 text-[40px] font-bold leading-[1.15] tracking-tight text-text-base md:text-[52px]">
                  Your tools should talk to each other.
                </h1>

                <p className="text-[17px] leading-[1.75] text-text-muted">
                  We connect your CRM, marketing stack, data sources, and ops tools into one unified system, so nothing falls through the cracks.
                </p>
              </div>

              {/* Right: animation panel */}
              <div className="order-first lg:order-last">
                <div
                  className="rounded-[24px] p-8 flex items-center justify-center min-h-[280px]"
                  style={{ background: "var(--why-card)", border: "1px solid var(--why-card-border)" }}
                >
                  <IntegrationAnim active={true} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content sections */}
        <section className="bg-bg-soft px-6 py-20 md:px-[72px]">
          <div className="mx-auto max-w-[1080px]">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {/* What it is */}
              <div>
                <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-blue">
                  What it is
                </h2>
                <p className="text-[15px] leading-[1.8] text-text-muted">
                  Most growing companies end up with a collection of tools that don't talk to each other. Data lives in silos. Teams work from different sources. Nothing is ever fully in sync.
                </p>
              </div>

              {/* What we do */}
              <div>
                <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-blue">
                  What we do
                </h2>
                <ul className="space-y-3 text-[15px] leading-[1.8] text-text-muted">
                  {[
                    "Audit your current stack and identify integration gaps",
                    "Design the data architecture and connection logic",
                    "Build integrations between your CRM, email, ads, and ops tools",
                    "Set up two-way syncs so your data is always current",
                    "Ongoing monitoring so breaks get caught before they cause damage",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's blocking */}
              <div>
                <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-blue">
                  What's blocking you
                </h2>
                <p className="text-[15px] leading-[1.8] text-text-muted">
                  When your tools aren't connected, every process has a gap. Leads get lost. Reports are unreliable. Your team wastes time reconciling data instead of acting on it. A properly integrated stack is the difference between guessing and knowing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
