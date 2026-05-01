import { createFileRoute, Link } from "@tanstack/react-router";

import { Nav } from "@/components/clear/Nav";
import { Hero } from "@/components/clear/Hero";
import { TrustBar } from "@/components/clear/TrustBar";
import { Services } from "@/components/clear/Services";
import { Process } from "@/components/clear/Process";
import { Why } from "@/components/clear/Why";
import { CTA } from "@/components/clear/CTA";
import { Footer } from "@/components/clear/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-0 flex max-w-[1280px] items-center gap-3 px-6 pt-16 md:px-[72px]">
      <span className="h-px flex-1 bg-border-soft" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-light">
        {children}
      </span>
      <span className="h-px flex-1 bg-border-soft" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-text-base antialiased">
      <Nav />
      <main>
        {/* 1 — Hero */}
        <Hero />

        {/* 2 — What we do (marquee strip) */}
        <TrustBar />

        {/* 3 — Services */}
        <SectionLabel>What we do</SectionLabel>
        <Services />

        {/* 4 — How it works */}
        <SectionLabel>How it works</SectionLabel>
        <Process />

        {/* 5 — Why us */}
        <SectionLabel>Why clear.group</SectionLabel>
        <Why />

        {/* 6 — CTA */}
        <CTA />

        {/* Quick-nav to pages */}
        <div className="border-t border-border-soft bg-bg-soft px-6 py-10 md:px-[72px]">
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-6">
            <p className="text-[14px] text-text-muted">
              Want to go deeper?
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { to: "/services", label: "All services" },
                { to: "/about", label: "About us" },
                { to: "/contact", label: "Get in touch" },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-background px-5 py-2.5 text-[13px] font-medium text-text-base transition-all hover:-translate-y-px hover:border-blue hover:text-blue"
                >
                  {label}
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
