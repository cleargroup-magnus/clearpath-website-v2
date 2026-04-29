const MERIDIANS = [0, 30, 60, 90, 120, 150];

const particles = [
  { top: "10%",  left: "14%",  size: 5, delay: "0s" },
  { top: "18%",  left: "80%",  size: 4, delay: "1.6s" },
  { top: "65%",  left: "10%",  size: 6, delay: "0.8s" },
  { top: "80%",  left: "76%",  size: 4, delay: "2.2s" },
  { top: "42%",  left: "4%",   size: 3, delay: "1.1s" },
  { top: "38%",  left: "90%",  size: 5, delay: "0.4s" },
  { top: "88%",  left: "40%",  size: 3, delay: "1.9s" },
];

export function Scene3D() {
  return (
    <div
      aria-hidden="true"
      className="relative select-none"
      style={{ width: 440, height: 440, perspective: "900px" }}
    >
      {/* Ambient bloom behind the sphere */}
      <div
        className="pointer-events-none absolute"
        style={{
          inset: 55,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--blue) 22%, transparent) 0%, transparent 70%)",
          filter: "blur(32px)",
          animation: "pulse-glow 5s ease-in-out infinite",
        }}
      />

      {/* ── Spinning wireframe globe ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          transformStyle: "preserve-3d",
          animation: "globe-spin 28s linear infinite",
        }}
      >
        {/* Meridian rings (longitude lines) */}
        {MERIDIANS.map((angle) => (
          <div
            key={angle}
            style={{
              position: "absolute",
              inset: 48,
              borderRadius: "50%",
              border: "1px solid color-mix(in oklab, var(--blue) 38%, transparent)",
              transform: `rotateY(${angle}deg)`,
            }}
          />
        ))}

        {/* Equatorial ring — brighter accent */}
        <div
          style={{
            position: "absolute",
            inset: 48,
            borderRadius: "50%",
            border: "1.5px solid color-mix(in oklab, var(--blue) 70%, transparent)",
            boxShadow: "0 0 10px color-mix(in oklab, var(--blue) 35%, transparent)",
            transform: "rotateX(90deg)",
          }}
        />

        {/* Primary orbiting satellite */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 11,
            height: 11,
            marginTop: -5.5,
            marginLeft: -5.5,
            borderRadius: "50%",
            background: "color-mix(in oklab, var(--blue-light) 80%, white)",
            boxShadow:
              "0 0 14px color-mix(in oklab, var(--blue) 90%, white), 0 0 28px color-mix(in oklab, var(--blue) 45%, transparent)",
            transform: "translateX(176px)",
          }}
        />

        {/* Secondary satellite on a different orbital plane */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 7,
            height: 7,
            marginTop: -3.5,
            marginLeft: -3.5,
            borderRadius: "50%",
            background: "var(--blue)",
            boxShadow: "0 0 8px color-mix(in oklab, var(--blue) 70%, transparent)",
            transform: "rotateY(90deg) rotateX(20deg) translateX(176px)",
          }}
        />

        {/* Central planet */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 104,
            height: 104,
            marginTop: -52,
            marginLeft: -52,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 38% 34%, color-mix(in oklab, var(--blue-light) 65%, white) 0%, var(--blue) 48%, var(--navy) 100%)",
            boxShadow:
              "0 0 44px color-mix(in oklab, var(--blue) 55%, transparent), 0 0 88px color-mix(in oklab, var(--blue) 22%, transparent)",
          }}
        />

        {/* Surface highlight ring */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 110,
            height: 110,
            marginTop: -55,
            marginLeft: -55,
            borderRadius: "50%",
            border: "1px solid color-mix(in oklab, var(--blue-light) 30%, transparent)",
          }}
        />
      </div>

      {/* ── Floating ambient particles (not in 3D transform) ── */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: "var(--blue)",
            animation: `float-orb 6s ease-in-out infinite ${p.delay}`,
            boxShadow: `0 0 ${p.size * 2.5}px color-mix(in oklab, var(--blue) 55%, transparent)`,
          }}
        />
      ))}

      {/* Corner accent lines */}
      <svg
        className="pointer-events-none absolute inset-0"
        width="440"
        height="440"
        viewBox="0 0 440 440"
        fill="none"
      >
        <line
          x1="0" y1="0" x2="60" y2="0"
          stroke="color-mix(in oklab, var(--blue) 25%, transparent)"
          strokeWidth="1"
        />
        <line
          x1="0" y1="0" x2="0" y2="60"
          stroke="color-mix(in oklab, var(--blue) 25%, transparent)"
          strokeWidth="1"
        />
        <line
          x1="440" y1="440" x2="380" y2="440"
          stroke="color-mix(in oklab, var(--blue) 25%, transparent)"
          strokeWidth="1"
        />
        <line
          x1="440" y1="440" x2="440" y2="380"
          stroke="color-mix(in oklab, var(--blue) 25%, transparent)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
