import { ShaderAnimation } from "./ShaderAnimation";
import { useTheme } from "./ThemeProvider";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center md:px-10">

      <ShaderAnimation dark={isDark} />

      {/* Vignette — only in dark mode */}
      {isDark && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(5,6,20,0.55) 100%)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1
          className="mb-8 max-w-[1000px] font-display font-medium leading-none tracking-[-0.045em] transition-colors duration-700"
          style={{
            fontSize: "clamp(48px,7.5vw,100px)",
            color: isDark ? "rgba(255,255,255,0.95)" : "var(--navy)",
          }}
        >
          Clear direction.
          <br />
          <span style={{ color: isDark ? "oklch(0.72 0.18 260)" : "var(--blue)" }}>
            Clear results.
          </span>
        </h1>

        <p
          className="mb-3 max-w-[580px] text-[19px] leading-[1.65] transition-colors duration-700"
          style={{ color: isDark ? "rgba(255,255,255,0.55)" : "var(--text-muted)" }}
        >
          We build, automate and scale. So you can focus on what matters.
        </p>
        <p
          className="mb-12 max-w-[520px] text-[15px] transition-colors duration-700"
          style={{ color: isDark ? "rgba(255,255,255,0.30)" : "var(--text-light)" }}
        >
          Your growth partner to take you from current state to ideal state.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="https://calendly.com/magnus-clearcruit/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full px-8 py-[15px] text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "oklch(0.52 0.22 260)",
              boxShadow: isDark
                ? "0 8px 32px color-mix(in oklab, oklch(0.52 0.22 260) 40%, transparent)"
                : "0 8px 24px color-mix(in oklab, oklch(0.52 0.22 260) 25%, transparent)",
            }}
          >
            Book a discovery call
            <ArrowIcon />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2.5 rounded-full px-8 py-[15px] text-[15px] font-medium transition-all duration-300 hover:-translate-y-0.5"
            style={
              isDark
                ? {
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.80)",
                    backdropFilter: "blur(12px)",
                  }
                : {
                    background: "var(--background)",
                    border: "1px solid var(--border-soft)",
                    color: "var(--text-base)",
                  }
            }
          >
            See what we do
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-opacity duration-700"
        style={{ opacity: 0.35 }}
        aria-hidden="true"
      >
        <span
          className="text-[10px] font-semibold tracking-[0.18em] uppercase"
          style={{ color: isDark ? "rgba(255,255,255,0.7)" : "var(--navy)" }}
        >
          Scroll
        </span>
        <svg width="1" height="28" viewBox="0 0 1 28">
          <line
            x1="0.5" y1="0" x2="0.5" y2="28"
            stroke={isDark ? "rgba(255,255,255,0.6)" : "currentColor"}
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        </svg>
      </div>
    </section>
  );
}
