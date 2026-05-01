import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/clear/Nav";
import { Services } from "@/components/clear/Services";
import { CTA } from "@/components/clear/CTA";
import { Footer } from "@/components/clear/Footer";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-text-base antialiased">
      <Nav />
      <main>
        {/* Page header */}
        <section className="border-b border-border-soft bg-background px-6 pb-20 pt-[140px] text-center md:px-[72px]">
          <div className="mx-auto max-w-[720px]">
            <div className="mb-4 inline-flex items-center gap-2 text-[13px] font-medium text-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              Services
            </div>
            <h1
              className="mb-5 font-display font-medium leading-[1.05] tracking-[-0.035em] text-text-base"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              Everything you need{" "}
              <span className="text-blue">to grow.</span>
            </h1>
            <p className="mx-auto max-w-[520px] text-[18px] leading-[1.7] text-text-muted">
              Six focused services. One team. Built to compound — not just deliver.
            </p>
          </div>
        </section>

        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
