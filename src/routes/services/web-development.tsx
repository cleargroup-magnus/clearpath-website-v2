import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/clear/Nav";
import { CTA } from "@/components/clear/CTA";
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
                  Build
                </span>

                <h1 className="mb-5 text-[40px] font-bold leading-[1.15] tracking-tight text-text-base md:text-[52px]">
                  Websites that convert, not just impress.
                </h1>

                <p className="text-[17px] leading-[1.75] text-text-muted">
                  We design and build high-performing websites and platforms that generate real leads, not just page views.
                </p>
              </div>

              {/* Right: animation panel */}
              <div className="order-first lg:order-last">
                <div
                  className="rounded-[24px] p-8 flex items-center justify-center min-h-[280px]"
                  style={{ background: "var(--why-card)", border: "1px solid var(--why-card-border)" }}
                >
                  <WebDevAnim active={true} />
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
                  A website is your most important sales tool. We build from scratch or rebuild, always with conversion, performance, and clarity as the goal.
                </p>
              </div>

              {/* What we do */}
              <div>
                <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-blue">
                  What we do
                </h2>
                <ul className="space-y-3 text-[15px] leading-[1.8] text-text-muted">
                  {[
                    "Strategy and positioning before a single pixel is designed",
                    "Custom design tailored to your brand and audience",
                    "Development built for speed, SEO, and scalability",
                    "CRO-focused layouts that guide visitors to take action",
                    "Launch, testing, and handover",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's blocking growth */}
              <div>
                <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-blue">
                  What's blocking your growth
                </h2>
                <p className="text-[15px] leading-[1.8] text-text-muted">
                  If your site looks dated, loads slowly, or fails to explain what you do in 5 seconds, you're losing leads before they even make contact. Most B2B websites are built to impress, not to convert. That's the gap we fix.
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
