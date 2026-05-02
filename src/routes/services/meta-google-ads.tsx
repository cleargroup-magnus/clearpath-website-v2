import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/clear/Nav";
import { CTA } from "@/components/clear/CTA";
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
                  Growth
                </span>

                <h1 className="mb-5 text-[40px] font-bold leading-[1.15] tracking-tight text-text-base md:text-[52px]">
                  Ads that pay for themselves.
                </h1>

                <p className="text-[17px] leading-[1.75] text-text-muted">
                  We run paid campaigns on Meta and Google focused entirely on measurable return: not impressions, not reach, not vanity metrics.
                </p>
              </div>

              {/* Right: animation panel */}
              <div className="order-first lg:order-last">
                <div
                  className="rounded-[24px] p-8 flex items-center justify-center min-h-[280px]"
                  style={{ background: "var(--why-card)", border: "1px solid var(--why-card-border)" }}
                >
                  <AdsAnim active={true} />
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
                  Performance advertising is the fastest way to generate leads when set up correctly. We manage campaigns across Meta (Facebook/Instagram) and Google: building, optimising, and scaling what works.
                </p>
              </div>

              {/* What we do */}
              <div>
                <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-blue">
                  What we do
                </h2>
                <ul className="space-y-3 text-[15px] leading-[1.8] text-text-muted">
                  {[
                    "Audience research and campaign strategy",
                    "Ad creative development and testing",
                    "Campaign setup, tracking, and attribution",
                    "Ongoing optimisation based on real conversion data",
                    "Clear weekly reporting with ROAS, CPL, and pipeline value",
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
                  Most businesses either aren't running ads, or are running them without proper tracking and optimisation. The result: money spent with no clear view of what it returns. We make every spend accountable, scaling only when the numbers justify it.
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
