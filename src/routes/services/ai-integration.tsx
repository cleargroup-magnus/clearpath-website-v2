import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/clear/Nav";
import { CTA } from "@/components/clear/CTA";
import { Footer } from "@/components/clear/Footer";
import { AIAnim } from "@/components/clear/ServiceAnimations";

export const Route = createFileRoute("/services/ai-integration")({
  component: AIIntegrationPage,
});

function AIIntegrationPage() {
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
                  Intelligent
                </span>

                <h1 className="mb-5 text-[40px] font-bold leading-[1.15] tracking-tight text-text-base md:text-[52px]">
                  AI that works. Not AI for the sake of it.
                </h1>

                <p className="text-[17px] leading-[1.75] text-text-muted">
                  We identify where AI creates genuine value in your business, and implement it in a way your team will actually use.
                </p>
              </div>

              {/* Right: animation panel */}
              <div className="order-first lg:order-last">
                <div
                  className="rounded-[24px] p-8 flex items-center justify-center min-h-[280px]"
                  style={{ background: "var(--why-card)", border: "1px solid var(--why-card-border)" }}
                >
                  <AIAnim active={true} />
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
                  AI integration isn't about adding a chatbot to your site. It's about finding the manual, repetitive, or slow parts of your business, using AI to handle them better and faster.
                </p>
              </div>

              {/* What we do */}
              <div>
                <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-blue">
                  What we do
                </h2>
                <ul className="space-y-3 text-[15px] leading-[1.8] text-text-muted">
                  {[
                    "Audit your existing workflows for AI opportunities",
                    "Build and configure AI tools in support, ops, and content",
                    "Connect AI outputs to your existing systems and CRM",
                    "Measure time saved and output quality",
                    "Train your team so adoption actually sticks",
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
                  Most companies know AI could help them but don't know where to start. The tools are there. The use cases are real. The gap is implementation: someone who understands both the technology and your business well enough to apply it where it counts.
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
