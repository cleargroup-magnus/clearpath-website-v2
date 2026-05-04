import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Nav } from "@/components/clear/Nav";
import { Footer } from "@/components/clear/Footer";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget w-full overflow-hidden rounded-[20px] border border-border-soft"
      data-url="https://calendly.com/magnus-clearcruit/30min?hide_event_type_details=1&hide_gdpr_banner=1"
      style={{ minWidth: 320, height: 700 }}
    />
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-text-base antialiased">
      <Nav />
      <main>
        <section className="px-6 pt-[120px] pb-20 md:px-[72px]">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

              {/* Left column — headline + info */}
              <div className="flex flex-col justify-center lg:py-8">
                <div className="mb-5 inline-flex items-center gap-2 text-[13px] font-medium text-blue">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                  Contact
                </div>

                <h1
                  className="mb-5 font-display font-medium leading-[1.05] tracking-[-0.035em] text-text-base"
                  style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
                >
                  Let's find out if we're{" "}
                  <span className="text-blue">a good fit.</span>
                </h1>

                <p className="mb-8 text-[17px] leading-[1.75] text-text-muted">
                  Pick a time on the right. 30 minutes, free, no pitch. We'll learn about your business and show you where the biggest opportunities are.
                </p>

                {/* Direct contact */}
                <div className="mb-10 flex flex-col gap-3">
                  <a
                    href="mailto:magnus@clearscaler.com"
                    className="inline-flex items-center gap-2.5 text-[14px] font-medium text-text-muted transition-colors hover:text-blue"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-soft bg-bg-soft text-text-light">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </span>
                    magnus@clearscaler.com
                  </a>
                  <a
                    href="https://wa.me/447000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-[14px] font-medium text-text-muted transition-colors hover:text-blue"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-soft bg-bg-soft text-text-light">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </span>
                    WhatsApp
                  </a>
                </div>

                {/* Divider */}
                <div className="mb-8 h-px bg-border-soft" />

                {/* What to expect */}
                <div>
                  <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-text-light">
                    What to expect
                  </div>
                  <div className="flex flex-col gap-5">
                    {[
                      {
                        n: "01",
                        title: "Intro call",
                        desc: "30 min. No pitch. Just an honest conversation about where you are and where you want to be.",
                      },
                      {
                        n: "02",
                        title: "Growth audit",
                        desc: "We map your funnel, stack, and ops. Then show you exactly where the biggest opportunities are.",
                      },
                      {
                        n: "03",
                        title: "Clear proposal",
                        desc: "A scoped plan with timeline and pricing. No ambiguity, no surprises.",
                      },
                    ].map((s) => (
                      <div key={s.n} className="flex gap-4">
                        <div className="pt-0.5 font-display text-[20px] font-medium leading-none tracking-tight text-blue">
                          {s.n}
                        </div>
                        <div>
                          <h3 className="mb-1 text-[14px] font-semibold tracking-tight text-text-base">{s.title}</h3>
                          <p className="text-[13px] leading-[1.7] text-text-muted">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column — Calendly */}
              <div>
                <CalendlyEmbed />
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
