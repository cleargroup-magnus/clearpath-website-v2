import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/clear/Nav";
import { Footer } from "@/components/clear/Footer";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-text-base antialiased">
      <Nav />
      <main>
        {/* Page header */}
        <section className="border-b border-border-soft bg-background px-6 pb-16 pt-[130px] md:px-[72px]">
          <div className="mx-auto max-w-[720px]">
            <div className="mb-4 inline-flex items-center gap-2 text-[13px] font-medium text-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              About
            </div>
            <h1
              className="mb-5 font-display font-medium leading-[1.05] tracking-[-0.035em] text-text-base"
              style={{ fontSize: "clamp(34px, 5vw, 56px)" }}
            >
              Two founders that have been{" "}
              <span className="text-blue">on every side of the table.</span>
            </h1>
            <p className="max-w-[580px] text-[17px] leading-[1.75] text-text-muted">
              Sales, recruiting, operations, development, paid media. We have done the work ourselves, and that shapes how we approach every client we take on.
            </p>
          </div>
        </section>

        {/* Who we are */}
        <section className="bg-background px-6 py-16 md:px-[72px]">
          <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            {/* Kian */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-5">
                <img
                  src="/images/kian.jpg"
                  alt="Kian"
                  className="h-[72px] w-[72px] rounded-2xl object-cover object-top"
                />
                <div>
                  <div className="text-[17px] font-semibold tracking-tight text-text-base">Kian</div>
                  <a
                    href="https://www.linkedin.com/in/kian-k-27b916199/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-blue hover:underline"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
              <div>
                <p className="mb-4 text-[16px] leading-[1.8] text-text-muted">
                  Kian has worked across sales, marketing, and recruitment, while building on the tech and web side and running paid ads through agency work. Over time, he moved away from just executing and focused more on how everything connects.
                </p>
                <p className="text-[16px] leading-[1.8] text-text-muted">
                  He looks at growth as a system. How data flows, how processes are built, and how things can run without constant manual input. That's usually where things break, and where he focuses.
                </p>
              </div>
            </div>

            {/* Magnus */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-5">
                <img
                  src="/images/magnus.jpg"
                  alt="Magnus"
                  className="h-[72px] w-[72px] rounded-2xl object-cover object-top"
                />
                <div>
                  <div className="text-[17px] font-semibold tracking-tight text-text-base">Magnus</div>
                  <a
                    href="https://www.linkedin.com/in/magnus-motzfeldt-berge-9961b7183/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-blue hover:underline"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
              <div>
                <p className="mb-4 text-[16px] leading-[1.8] text-text-muted">
                  Magnus has worked in sales, recruiting, logistics, and customer success. Different roles, but all close to the front line of the business.
                </p>
                <p className="text-[16px] leading-[1.8] text-text-muted">
                  He focuses on what actually drives revenue. Messaging, outbound, and execution. Most companies don't lack effort, they lack alignment, and that's where he does his best work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why we started */}
        <section className="border-t border-border-soft bg-bg-soft px-6 py-16 md:px-[72px]">
          <div className="mx-auto max-w-[720px]">
            <div className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-blue">Why we started</div>
            <h2 className="mb-6 font-display text-[clamp(24px,3vw,38px)] font-medium leading-tight tracking-tight text-text-base">
              Different companies. Different problems. Same desire to fix them.
            </h2>
            <div className="space-y-4 text-[16px] leading-[1.8] text-text-muted">
              <p>
                After working across enough companies and industries, we kept seeing the same thing. Sales and marketing not talking. Tools that don't connect. Good businesses leaving money on the table because nothing is joined up.
              </p>
              <p>
                ClearScaler exists because we knew we could help fix that. Our team handles the execution across development, automation, paid media, and outbound. Our job is to understand your business, find where the gaps are, and help you close them.
              </p>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="px-6 py-16 md:px-[72px]" style={{ background: "var(--why-bg)" }}>
          <div className="mx-auto max-w-[1080px]">
            <div className="mb-10">
              <div className="mb-3 inline-flex items-center gap-2 text-[12px] font-medium" style={{ color: "oklch(0.72 0.15 260)" }}>
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                How we work
              </div>
              <h2 className="font-display text-[clamp(24px,3vw,38px)] font-medium leading-tight tracking-tight" style={{ color: "rgba(255,255,255,0.92)" }}>
                A few principles we don't compromise on.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  title: "We tell you what we actually think.",
                  desc: "If something isn't working, we say it. We'd rather have a hard conversation early than report good-looking numbers on something that isn't moving the needle.",
                },
                {
                  title: "We move fast and stay close.",
                  desc: "Small team, direct communication. You're talking to the people doing the work, not an account manager who'll relay your feedback three days later.",
                },
                {
                  title: "We care about revenue, not deliverables.",
                  desc: "We don't invoice for Slack messages. Every decision we make traces back to leads, revenue, or efficiency. That's the only scorecard we use.",
                },
                {
                  title: "We build things that last.",
                  desc: "Quick fixes don't interest us. We'd rather take a bit longer and build something that compounds. Systems you're still benefiting from in two years.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="rounded-[18px] p-7 transition-colors"
                  style={{ background: "var(--why-card)", border: "1px solid var(--why-card-border)" }}
                >
                  <h3 className="mb-3 text-[16px] font-semibold tracking-tight" style={{ color: "rgba(255,255,255,0.90)" }}>
                    {v.title}
                  </h3>
                  <p className="text-[14px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.50)" }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="border-t border-border-soft bg-background px-6 py-14 md:px-[72px]">
          <div className="mx-auto flex max-w-[1080px] flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="mb-1 text-[22px] font-semibold tracking-tight text-text-base">
                Want to work together?
              </h2>
              <p className="text-[15px] text-text-muted">
                Start with a free intro call. No pitch, just a real conversation.
              </p>
            </div>
            <a
              href="https://calendly.com/magnus-clearcruit/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-blue px-7 py-[13px] text-[14px] font-medium text-white transition-all hover:-translate-y-px hover:bg-[oklch(0.55_0.22_260)]"
            >
              Book an intro call
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
