import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/clear/Nav";
import { Hero } from "@/components/clear/Hero";
import { TrustBar } from "@/components/clear/TrustBar";
import { Services } from "@/components/clear/Services";
import { Process } from "@/components/clear/Process";
import { Work } from "@/components/clear/Work";
import { Why } from "@/components/clear/Why";
import { CTA } from "@/components/clear/CTA";
import { Footer } from "@/components/clear/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-text-base antialiased">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <div style={{ display: "none" }}>
          <Work />
        </div>
        <Why />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
